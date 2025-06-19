import type { Metadata } from 'next'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'LockBox - Secure Password Manager for iOS',
  description: 'The password manager that puts your privacy first. Military-grade encryption, Face ID protection, and zero cloud storage.',
  keywords: 'password manager, ios, security, encryption, face id, privacy, password vault',
  openGraph: {
    title: 'LockBox - Secure Password Manager for iOS',
    description: 'The password manager that puts your privacy first. Military-grade encryption, Face ID protection, and zero cloud storage.',
    url: 'https://lockboxapp.io',
    siteName: 'LockBox',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LockBox - Secure Password Manager for iOS',
    description: 'The password manager that puts your privacy first.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}