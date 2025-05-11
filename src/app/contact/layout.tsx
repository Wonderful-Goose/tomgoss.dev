import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Thomas Goss',
  description:
    'Get in touch with Thomas Goss for content marketing, product marketing, and AI application inquiries.',
  keywords: ['contact', 'hire', 'content marketing', 'product marketing', 'AI applications'],
  openGraph: {
    title: 'Contact | Thomas Goss',
    description:
      'Get in touch with Thomas Goss for content marketing, product marketing, and AI application inquiries.',
    url: 'https://tomgoss.dev/contact',
    siteName: 'Thomas Goss',
    images: [
      {
        url: 'https://tomgoss.dev/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Thomas Goss',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | Thomas Goss',
    description:
      'Get in touch with Thomas Goss for content marketing, product marketing, and AI application inquiries.',
    images: ['https://tomgoss.dev/images/og-image.jpg'],
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
