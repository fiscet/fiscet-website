import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/sonner';
import Header from '@/components/Header';
import GoogleTagManager from '@/components/GoogleTagManager';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Fullstack Applications Next.js, Payload CMS, Sanity & Strapi',
  description:
    'Custom web applications built with Next.js, leveraging headless CMS solutions like Payload CMS, Sanity.io, and Strapi. Fast, scalable, and user-friendly digital solutions for your business with modern tech stack.',
  keywords:
    'Next.js development, Payload CMS, Sanity.io, Strapi, headless CMS, web applications, custom development, React applications, JAMstack, digital solutions',
  openGraph: {
    title: 'Fullstack Applications Next.js, Payload CMS, Sanity & Strapi',
    description:
      'Custom web applications built with Next.js, leveraging headless CMS solutions like Payload CMS, Sanity.io, and Strapi. Fast, scalable, and user-friendly digital solutions for your business with modern tech stack.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Your Company Name'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fullstack Applications Next.js, Payload CMS, Sanity & Strapi',
    description:
      'Custom web applications built with Next.js, leveraging headless CMS solutions like Payload CMS, Sanity.io, and Strapi. Fast, scalable, and user-friendly digital solutions.'
  },
  robots: {
    index: true,
    follow: true
  }
};
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <GoogleTagManager />
        <Header />
        <main className="mt-6">{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
