import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from '@/components/layout/ThemeProvider';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollIndicator from '@/components/layout/ScrollIndicator';
import CookieConsent from '@/components/layout/CookieConsent';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Piotr Dankowiakowski - 3D Artist, AI Specialist & Educator",
  description: "Professional portfolio of Piotr Dankowiakowski - Expert in 3D animation, AI integration, educational content, and Blender addon development. Based in Warsaw, Poland.",
  keywords: ["3D Artist", "AI Specialist", "Educator", "Blender", "3D Animation", "Educational Content", "AI Integration", "Poland"],
  authors: [{ name: "Piotr Dankowiakowski" }],
  creator: "Piotr Dankowiakowski",
  publisher: "Piotr Dankowiakowski",
  openGraph: {
    title: "Piotr Dankowiakowski - 3D Artist, AI Specialist & Educator",
    description: "Professional portfolio showcasing 3D animations, AI projects, educational content, and Blender addons.",
    url: "https://piotrdanon.vercel.app",
    siteName: "Piotr Dankowiakowski Portfolio",
    images: [
      {
        url: "/MyPhotosmall.jpg",
        width: 800,
        height: 800,
        alt: "Piotr Dankowiakowski",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Piotr Dankowiakowski - 3D Artist, AI Specialist & Educator",
    description: "Professional portfolio showcasing 3D animations, AI projects, educational content, and Blender addons.",
    images: ["/MyPhotosmall.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#4F46E5" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#111827" media="(prefers-color-scheme: dark)" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/MyPhotosmall.jpg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
            <Header />
            <main>{children}</main>
            <Footer />
            <ScrollIndicator />
            <CookieConsent />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
