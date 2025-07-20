import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Algentric - Building Autonomous AI Agents',
  description: 'Pioneering research in multi-agent systems that collaborate, learn, and execute complex workflows autonomously.',
  keywords: 'AI agents, autonomous systems, multi-agent research, AI collaboration, machine learning research',
  authors: [{ name: 'Algentric' }],
  creator: 'Algentric',
  publisher: 'Algentric',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://algentric.com'),
  openGraph: {
    title: 'Algentric - Building Autonomous AI Agents',
    description: 'Pioneering research in multi-agent systems that collaborate, learn, and execute complex workflows autonomously.',
    url: 'https://algentric.com',
    siteName: 'Algentric',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Algentric - Building Autonomous AI Agents',
    description: 'Pioneering research in multi-agent systems that collaborate, learn, and execute complex workflows autonomously.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">

      <body className="antialiased">
        <div className="particles">
          {Array.from({ length: 50 }, (_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 15}s`,
                animationDuration: `${15 + Math.random() * 10}s`,
              }}
            />
          ))}
        </div>
        {children}
      </body>
    </html>
  )
} 