'use client';

import { motion } from 'framer-motion';
import { Shield, Mail, Cookie, User, Lock, FileText, Calendar, Globe, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const PrivacyPolicyPage = () => {
  const sections = [
    {
      id: 'introduction',
      title: 'Introduction',
      icon: Shield,
      content: (
        <div className="space-y-4">
          <p>
            This Privacy Policy describes how Piotr Dankowiakowski (&quot;me&quot;,&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) collects, uses, and protects your personal information when you visit and interact with our portfolio website at https://portfolio.piotrdankowiakowski.com (the &quot;Service&quot;).
          </p>
          <p>
            I am committed to protecting your privacy and ensuring compliance with the General Data Protection Regulation (GDPR) and other applicable data protection laws.
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
            <p className="text-sm">
              <strong>Data Controller:</strong><br />
              Piotr Dankowiakowski<br />
              Email: piotr12451@gmail.com<br />
              Location: Poland, European Union
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'data-collection',
      title: 'Information I Collect',
      icon: User,
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold mb-3">1. Contact Form Data</h4>
            <p className="mb-3">When you submit our contact form, I collect:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Name:</strong> To identify and address you personally</li>
              <li><strong>Email Address:</strong> To respond to your inquiry</li>
              <li><strong>Subject:</strong> To understand the nature of your inquiry</li>
              <li><strong>Message:</strong> The content of your communication</li>
              <li><strong>Technical Data:</strong> IP address, timestamp, browser information (for security purposes)</li>
            </ul>
            <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg mt-3">
              <p className="text-sm"><strong>Legal Basis:</strong> Legitimate interest in responding to inquiries and providing customer service (GDPR Art. 6(1)(f))</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">2. Automatically Collected Information</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Technical Data:</strong> IP address, browser type, operating system, referral URLs</li>
              <li><strong>Usage Data:</strong> Pages visited, time spent on site, interaction patterns (only with consent)</li>
              <li><strong>Device Information:</strong> Screen resolution, language preferences</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">3. Cookies and Tracking</h4>
            <p>I use different types of cookies based on your consent preferences. See our <a href="#cookies" className="text-blue-600 dark:text-blue-400 hover:underline">Cookie Policy</a> section below.</p>
          </div>
        </div>
      )
    },
    {
      id: 'data-use',
      title: 'How I Use Your Information',
      icon: FileText,
      content: (
        <div className="space-y-4">
          <p>I use your personal information for the following purposes:</p>
          
          <div className="grid gap-4">
            <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <h5 className="font-medium mb-2">📧 Communication</h5>
              <p className="text-sm">Responding to your inquiries, providing information about our services, and maintaining professional correspondence.</p>
            </div>
            
            <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <h5 className="font-medium mb-2">🔒 Security</h5>
              <p className="text-sm">Protecting against spam, fraud, and abuse. Monitoring for security threats and maintaining system integrity.</p>
            </div>
            
            <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <h5 className="font-medium mb-2">📊 Analytics (With Consent)</h5>
              <p className="text-sm">Understanding how visitors use our website to improve user experience and optimize content.</p>
            </div>
            
            <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <h5 className="font-medium mb-2">⚖️ Legal Compliance</h5>
              <p className="text-sm">Complying with legal obligations, responding to legal requests, and protecting our rights.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cookies',
      title: 'Cookie Policy',
      icon: Cookie,
      content: (
        <div className="space-y-6">
          <p>This website uses cookies to enhance your browsing experience. I categorize cookies as follows:</p>
          
          <div className="space-y-4">
            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
              <h5 className="font-medium mb-2 text-red-800 dark:text-red-400">🔴 Necessary Cookies (Always Active)</h5>
              <p className="text-sm mb-2">Essential for website functionality and security. Cannot be disabled.</p>
              <ul className="text-xs list-disc pl-4 space-y-1">
                <li><strong>portfolio_cookie_consent:</strong> Stores your cookie preferences</li>
                <li><strong>Session cookies:</strong> Maintain website functionality during your visit</li>
                <li><strong>Security tokens:</strong> Protect against CSRF attacks and ensure secure form submission</li>
              </ul>
            </div>
            
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
              <h5 className="font-medium mb-2 text-blue-800 dark:text-blue-400">🔵 Preference Cookies (Optional)</h5>
              <p className="text-sm mb-2">Remember your settings and preferences.</p>
              <ul className="text-xs list-disc pl-4 space-y-1">
                <li><strong>Theme preference:</strong> Dark/light mode selection</li>
                <li><strong>Language settings:</strong> Your preferred language</li>
                <li><strong>Layout preferences:</strong> Customized display options</li>
              </ul>
            </div>
            
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
              <h5 className="font-medium mb-2 text-green-800 dark:text-green-400">🟢 Analytics Cookies (Optional)</h5>
              <p className="text-sm mb-2">Help me understand website usage and improve performance.</p>
              <ul className="text-xs list-disc pl-4 space-y-1">
                <li><strong>Google Analytics:</strong> _ga, _gid, _gat (if enabled)</li>
                <li><strong>Page views:</strong> Track popular content and user journeys</li>
                <li><strong>Performance monitoring:</strong> Load times and error tracking</li>
              </ul>
            </div>
            
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
              <h5 className="font-medium mb-2 text-purple-800 dark:text-purple-400">🟣 Marketing Cookies (Optional)</h5>
              <p className="text-sm mb-2">Used for advertising and social media integration.</p>
              <ul className="text-xs list-disc pl-4 space-y-1">
                <li><strong>Social media pixels:</strong> Facebook, Instagram tracking (if enabled)</li>
                <li><strong>Advertising networks:</strong> Retargeting and ad personalization</li>
                <li><strong>Conversion tracking:</strong> Measure effectiveness of marketing campaigns</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
            <p className="text-sm">
              <strong>Managing Cookies:</strong> You can manage your cookie preferences at any time by clicking the &quot;Cookie Settings&quot; link in our footer or revisiting this privacy policy page.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'data-retention',
      title: 'Data Retention',
      icon: Calendar,
      content: (
        <div className="space-y-4">
          <p>I retain your personal information only as long as necessary for the purposes outlined in this policy:</p>
          
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <div>
                <strong>Contact Form Data:</strong> Retained for 3 years after last contact for customer service purposes, then automatically deleted.
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <div>
                <strong>Cookie Preferences:</strong> Stored for 1 year, then you&apos;ll be asked to provide consent again.
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <div>
                <strong>Analytics Data:</strong> Anonymized after 14 months (Google Analytics standard retention).
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <div>
                <strong>Security Logs:</strong> IP addresses and security-related data retained for 90 days for security purposes.
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <p className="text-sm">
              <strong>Deletion Policy:</strong> I automatically delete personal data when the retention period expires. You can also request immediate deletion at any time by contacting me.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'gdpr-rights',
      title: 'Your Rights Under GDPR',
      icon: Lock,
      content: (
        <div className="space-y-4">
          <p>As a data subject under GDPR, you have the following rights:</p>
          
          <div className="grid gap-4">
            <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <h5 className="font-medium mb-2">🔍 Right to Access</h5>
              <p className="text-sm">Request a copy of all personal data I hold about you.</p>
            </div>
            
            <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <h5 className="font-medium mb-2">✏️ Right to Rectification</h5>
              <p className="text-sm">Request correction of inaccurate or incomplete personal data.</p>
            </div>
            
            <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <h5 className="font-medium mb-2">🗑️ Right to Erasure</h5>
              <p className="text-sm">Request deletion of your personal data (&quot;right to be forgotten&quot;).</p>
            </div>
            
            <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <h5 className="font-medium mb-2">⏸️ Right to Restrict Processing</h5>
              <p className="text-sm">Request limitation of how I process your personal data.</p>
            </div>
            
            <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <h5 className="font-medium mb-2">📤 Right to Data Portability</h5>
              <p className="text-sm">Receive your personal data in a structured, machine-readable format.</p>
            </div>
            
            <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <h5 className="font-medium mb-2">❌ Right to Object</h5>
              <p className="text-sm">Object to processing based on legitimate interests or direct marketing.</p>
            </div>
            
            <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <h5 className="font-medium mb-2">🚫 Right to Withdraw Consent</h5>
              <p className="text-sm">Withdraw consent for processing at any time (where consent is the legal basis).</p>
            </div>
          </div>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
            <p className="text-sm">
              <strong>How to Exercise Your Rights:</strong> Contact me at piotr12451@gmail.com with your request. I will respond within 120 days and may need to verify your identity for security purposes.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'data-sharing',
      title: 'Data Sharing and Third Parties',
      icon: Globe,
      content: (
        <div className="space-y-4">
          <p>I take your privacy seriously and limit data sharing to essential services:</p>
          
          <div className="space-y-4">
            <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <h5 className="font-medium mb-2">📧 Email Service Provider</h5>
              <p className="text-sm mb-2">I use Google SMTP services to send emails from our contact form.</p>
              <ul className="text-xs list-disc pl-4 space-y-1">
                <li><strong>Data Shared:</strong> Contact form submissions (name, email, message)</li>
                <li><strong>Purpose:</strong> Email delivery and communication</li>
                <li><strong>Legal Basis:</strong> Legitimate interest in communication</li>
                <li><strong>Location:</strong> Google servers (EU-US adequacy decision)</li>
              </ul>
            </div>
            
            <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <h5 className="font-medium mb-2">☁️ Hosting Provider</h5>
              <p className="text-sm mb-2">Website hosted on secure cloud infrastructure.</p>
              <ul className="text-xs list-disc pl-4 space-y-1">
                <li><strong>Data Shared:</strong> Website data, visitor logs</li>
                <li><strong>Purpose:</strong> Website availability and performance</li>
                <li><strong>Security:</strong> Industry-standard encryption and security measures</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
            <p className="text-sm">
              <strong>I Never:</strong> Sell your personal data, share it for marketing purposes without consent, or transfer it to countries without adequate protection.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'security',
      title: 'Data Security',
      icon: Lock,
      content: (
        <div className="space-y-4">
          <p>I implement comprehensive security measures to protect your personal information:</p>
          
          <div className="grid gap-4">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
              <h5 className="font-medium mb-2">🔐 Technical Safeguards</h5>
              <ul className="text-sm list-disc pl-4 space-y-1">
                <li>HTTPS encryption for all data transmission</li>
                <li>Input validation and sanitization to prevent injection attacks</li>
                <li>Rate limiting to prevent abuse and spam</li>
                <li>Secure cookie settings with SameSite and Secure flags</li>
              </ul>
            </div>
            
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
              <h5 className="font-medium mb-2">🛡️ Organizational Measures</h5>
              <ul className="text-sm list-disc pl-4 space-y-1">
                <li>Access controls and authentication for admin functions</li>
                <li>Regular security updates and monitoring</li>
                <li>Data minimization - I only collect what&apos;s necessary</li>
                <li>Privacy by design in all development processes</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
            <p className="text-sm">
              <strong>Data Breach Response:</strong> In the unlikely event of a data breach affecting your personal information, I will notify you and relevant authorities within 72 hours as required by GDPR.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'contact',
      title: 'Contact Information',
      icon: Mail,
      content: (
        <div className="space-y-4">
          <p>For any privacy-related questions, concerns, or requests, please contact me:</p>
          
          <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <div className="space-y-3">
              <div>
                <strong>Data Protection Officer / Data Controller:</strong><br />
                Piotr Dankowiakowski
              </div>
              
              <div>
                <strong>Email:</strong><br />
                <a href="mailto:piotr12451@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                  piotr12451@gmail.com
                </a>
              </div>
              
              <div>
                <strong>Response Time:</strong><br />
                I will respond to your privacy requests within 30 days
              </div>
              
              <div>
                <strong>Supervisory Authority:</strong><br />
                If you believe I have not adequately addressed your privacy concerns, you can file a complaint with your local data protection authority or the Polish Personal Data Protection Office (UODO).
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back to Portfolio Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href="/"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="p-4 bg-blue-100 dark:bg-blue-900 rounded-full">
              <Shield className="w-12 h-12 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I am committed to protecting your privacy and ensuring compliance with GDPR and other data protection laws.
          </p>
          <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
            <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <p>Effective date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
        </motion.div>

        {/* Privacy Policy Sections */}
        <div className="space-y-12">
          {sections.map((section, index) => (
            <motion.section
              key={section.id}
              id={section.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <section.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {section.title}
                </h2>
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                {section.content}
              </div>
            </motion.section>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Questions About This Policy?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              If you have any questions about this Privacy Policy or how I handle your personal information, please don&apos;t hesitate to contact me.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
              >
                Contact Me
              </Link>
              <Link
                href="/"
                className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-gray-400 dark:hover:border-gray-500 rounded-lg font-medium transition-colors"
              >
                Back to Portfolio
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage; 