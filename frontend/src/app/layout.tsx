import type { Metadata } from 'next'
import './globals.css'

const siteUrl = 'https://wajidalikhan.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Akbar Ali| Full Stack Developer | React, Node.js,  Expert',
    template: '%s | Akbar Ali - Full Stack Developer',
  },
  description: 'Akbar Ali is a Full Stack Developer from Pakistan specializing in React.js, Next.js, Node.js, Express.js, MongoDB, and MySQL. Building scalable web applications, SaaS products, and custom solutions for startups and businesses worldwide.',
  keywords: [
    'Akbar Ali',
    'Full Stack Developer',
    'Web Developer Pakistan',
    'React Developer',
    'Next.js Developer',
    'Node.js Developer',
    'MERN Stack Developer',
    'JavaScript Developer',
    'TypeScript Developer',
    'MongoDB Developer',
    'MySQL Developer',
    'Express.js Developer',
    'Frontend Developer',
    'Backend Developer',
    'SaaS Developer',
    'Freelance Developer Pakistan',
    'Web Application Development',
    'Custom Software Development',
    'Peshawar Developer',
    "Akbar Ali",
    "Akbar Ali  Portfolio",
    "Akbar Ali Projects",
    "Akbar Ali  Services",
    "Akbar Ali  Contact",
    "Akbar Ali  About",
    "Akbar Ali  Skills",
    "Akbar Ali  Experience",
    "Akbar Ali  Education",
  ],
  authors: [{ name: 'Akbar Ali', url: siteUrl }],
  creator: 'Akbar Ali',
  publisher: 'Akbar Ali ',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Akbar Ali  - Full Stack Developer',
    title: 'Akbar Ali  | Full Stack Developer | Building Scalable Web Applications',
    description: 'Full Stack Developer specializing in React.js, Next.js, Node.js, and modern web technologies. Building powerful web applications, SaaS products, and custom solutions.',
    images: [
      {
        url: '/Akbarali.png',
        width: 1200,
        height: 630,
        alt: 'Akbar Ali - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Akbar Ali | Full Stack Developer',
    description: 'Full Stack Developer specializing in React.js, Next.js, Node.js. Building scalable web applications and SaaS products.',
    images: ['/Akbarali.png'],
    creator: '@akbarali',
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
  verification: {
    google: 'your-google-verification-code', // Replace with actual verification code
  },
  alternates: {
    canonical: siteUrl,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Akbar Ali',
              url: siteUrl,
              image: `${siteUrl}/akbarali.png`,
              jobTitle: 'Full Stack Developer',
              worksFor: {
                '@type': 'Organization',
                name: 'Freelance',
              },
              description: 'Full Stack Developer specializing in React.js, Next.js, Node.js, and modern web technologies.',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Peshawar',
                addressCountry: 'Pakistan',
              },
              email: 'akbaraliuetm136@gmail.com',
              telephone: '+92-347-6092385',
              sameAs: [
                'https://github.com/AKBARALI-BMW',
                'https://www.linkedin.com/in/akbar-ali-123456789/',
                'https://x.com/akbarali',
              ],
              knowsAbout: [
                'React.js',
                'Next.js',
                'Node.js',
                'Express.js',
                'MongoDB',
                'MySQL',
                'TypeScript',
                'JavaScript',
                'HTML5',
                'CSS3',
                'Tailwind CSS',
                'REST APIs',
                'Firebase',
              ],
            }),
          }}
        />
        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Akbar Ali - Full Stack Developer',
              url: siteUrl,
              description: 'Portfolio website of Akbar Ali, a Full Stack Developer from Pakistan.',
              author: {
                '@type': 'Person',
                name: 'Akbar Ali',
              },
            }),
          }}
        />
        {/* Professional Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: 'Akbar Ali - Web Development Services',
              description: 'Full Stack Web Development services including React.js, Next.js, Node.js applications, SaaS products, and custom software solutions.',
              url: siteUrl,
              telephone: '+92-347-6092385',
              email: 'akbaraliuetm136@gmail.com',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Peshawar',
                addressCountry: 'Pakistan',
              },
              priceRange: '$$',
              openingHours: 'Mo-Sa 09:00-18:00',
              areaServed: 'Worldwide',
              serviceType: [
                'Full Stack Web Development',
                'Frontend Development',
                'Backend Development',
                'SaaS Development',
                'API Development',
                'Database Design',
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
