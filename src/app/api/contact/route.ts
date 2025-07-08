import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import DOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';
import validator from 'validator';

// Create DOMPurify instance for server-side
const window = new JSDOM('').window;
const purify = DOMPurify(window);

// Rate limiting - simple in-memory store (use Redis in production)
const rateLimitMap = new Map();

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Input validation and sanitization
function validateAndSanitizeInput(data: ContactFormData): { 
  isValid: boolean; 
  errors: string[]; 
  sanitizedData: ContactFormData 
} {
  const errors: string[] = [];
  
  // Validate and sanitize name
  if (!data.name || data.name.trim().length < 2) {
    errors.push('Name must be at least 2 characters long');
  }
  if (data.name.length > 100) {
    errors.push('Name must be less than 100 characters');
  }
  
  // Validate email
  if (!validator.isEmail(data.email)) {
    errors.push('Please provide a valid email address');
  }
  
  // Validate subject
  if (!data.subject || data.subject.trim().length < 3) {
    errors.push('Subject must be at least 3 characters long');
  }
  if (data.subject.length > 200) {
    errors.push('Subject must be less than 200 characters');
  }
  
  // Validate message
  if (!data.message || data.message.trim().length < 10) {
    errors.push('Message must be at least 10 characters long');
  }
  if (data.message.length > 2000) {
    errors.push('Message must be less than 2000 characters');
  }
  
  // Sanitize all inputs
  const sanitizedData: ContactFormData = {
    name: purify.sanitize(data.name.trim()),
    email: validator.normalizeEmail(data.email) || data.email,
    subject: purify.sanitize(data.subject.trim()),
    message: purify.sanitize(data.message.trim())
  };
  
  // Check for potential code injection patterns
  const dangerousPatterns = [
    /<script/i,
    /javascript:/i,
    /on\w+\s*=/i,
    /eval\s*\(/i,
    /function\s*\(/i
  ];
  
  for (const [key, value] of Object.entries(sanitizedData)) {
    if (typeof value === 'string') {
      for (const pattern of dangerousPatterns) {
        if (pattern.test(value)) {
          errors.push(`Invalid content detected in ${key}`);
          break;
        }
      }
    }
  }
  
  return {
    isValid: errors.length === 0,
    errors,
    sanitizedData
  };
}

// Simple rate limiting
function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 3; // max 3 emails per 15 minutes per IP
  
  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, []);
  }
  
  const requests = rateLimitMap.get(ip);
  const recentRequests = requests.filter((time: number) => now - time < windowMs);
  
  if (recentRequests.length >= maxRequests) {
    return false;
  }
  
  recentRequests.push(now);
  rateLimitMap.set(ip, recentRequests);
  return true;
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || 
              request.headers.get('x-real-ip') || 
              'unknown';
    
    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }
    
    // Parse request body
    const body = await request.json();
    
    // Validate and sanitize input
    const validation = validateAndSanitizeInput(body);
    
    if (!validation.isValid) {
      return NextResponse.json(
        { error: 'Validation failed', details: validation.errors },
        { status: 400 }
      );
    }
    
    const { name, email, subject, message } = validation.sanitizedData;
    
    // Check if email configuration is available
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.EMAIL_TO) {
      console.error('Email configuration missing');
      return NextResponse.json(
        { error: 'Email service is temporarily unavailable' },
        { status: 500 }
      );
    }
    
    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    });
    
    // Verify transporter
    await transporter.verify();
    
    // Email content
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333; border-bottom: 2px solid #4F46E5; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #4F46E5; margin-top: 0;">Contact Details</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
        </div>
        
        <div style="background: #fff; padding: 20px; border: 1px solid #e1e5e9; border-radius: 8px;">
          <h3 style="color: #333; margin-top: 0;">Message</h3>
          <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
        </div>
        
        <div style="margin-top: 20px; padding: 15px; background: #e7f3ff; border-radius: 8px;">
          <p style="margin: 0; font-size: 12px; color: #666;">
            <strong>Sender IP:</strong> ${ip}<br>
            <strong>Timestamp:</strong> ${new Date().toISOString()}<br>
            <strong>User Agent:</strong> ${request.headers.get('user-agent') || 'Unknown'}
          </p>
        </div>
      </div>
    `;
    
    // Email options
    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      text: `
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
Sent from portfolio contact form
IP: ${ip}
Time: ${new Date().toISOString()}
      `,
      html: htmlContent
    };
    
    // Send email
    const info = await transporter.sendMail(mailOptions);
    
    console.log('Email sent successfully:', info.messageId);
    
    return NextResponse.json({
      success: true,
      message: 'Email sent successfully'
    });
    
  } catch (error) {
    console.error('Email sending failed:', error);
    
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}

// Handle non-POST requests
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
} 