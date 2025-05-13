import '@/styles/globals.css'
import type { Metadata } from 'next'
import React from 'react'
import { Inter, Lora } from 'next/font/google'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Script from 'next/script'

// Load Inter font
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

// Load Lora font
const lora = Lora({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-lora',
})

// Define the metadata for SEO
export const metadata: Metadata = {
  metadataBase: new URL('https://tomgoss.dev'),
  title: {
    default: 'Thomas Goss | Content & Product Marketing',
    template: '%s | Thomas Goss',
  },
  description:
    'Professional portfolio and blog showcasing expertise in content marketing, product marketing, and AI applications.',
  keywords: ['content marketing', 'product marketing', 'AI applications', 'SEO', 'storytelling'],
  authors: [{ name: 'Thomas Goss' }],
  creator: 'Thomas Goss',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tomgoss.dev',
    siteName: 'Thomas Goss',
    title: 'Thomas Goss | Content & Product Marketing',
    description:
      'Professional portfolio and blog showcasing expertise in content marketing, product marketing, and AI applications.',
    images: [
      {
        url: 'https://tomgoss.dev/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Thomas Goss',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thomas Goss | Content & Product Marketing',
    description:
      'Professional portfolio and blog showcasing expertise in content marketing, product marketing, and AI applications.',
    images: ['https://tomgoss.dev/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable}`}>
      <body className="flex flex-col min-h-screen bg-backgroundSite text-textPrimary">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />

        {/* Google Analytics Script */}
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  )
}
