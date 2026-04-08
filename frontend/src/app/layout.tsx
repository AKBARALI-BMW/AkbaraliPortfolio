import type { Metadata } from 'next'
import './globals.css'

const siteUrl = 'https://wajidalikhan.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Wajid Ali Khan | Full Stack Developer | React, Node.js, Next.js Expert',
    template: '%s | Wajid Ali Khan'
  },
  description: 'Wajid Ali Khan is a Full Stack Developer from Pakistan specializing in React.js, Next.js, Node.js, Express.js, MongoDB, and MySQL. Building scalable web applications, SaaS products, and custom solutions for startups and businesses worldwide.',
  keywords: [
    'Wajid Ali Khan',
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
    "Wajid", 
    "Wajid Ali",
    "Wajid Ali Khan Portfolio",
    "Wajid Ali Khan Projects",
    "Wajid Ali Khan Services",
    "Wajid Ali Khan Contact",
    "Wajid Ali Khan About",
    "Wajid Ali Khan Skills",
    "Wajid Ali Khan Experience",
    "Wajid Ali Khan Education",
  ],
  authors: [{ name: 'Wajid Ali Khan', url: siteUrl }],
  creator: 'Wajid Ali Khan',
  publisher: 'Wajid Ali Khan',
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
    siteName: 'Wajid Ali Khan - Full Stack Developer',
    title: 'Wajid Ali Khan | Full Stack Developer | Building Scalable Web Applications',
    description: 'Full Stack Developer specializing in React.js, Next.js, Node.js, and modern web technologies. Building powerful web applications, SaaS products, and custom solutions.',
    images: [
      {
        url: '/wajidalikhan.png',
        width: 1200,
        height: 630,
        alt: 'Wajid Ali Khan - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wajid Ali Khan | Full Stack Developer',
    description: 'Full Stack Developer specializing in React.js, Next.js, Node.js. Building scalable web applications and SaaS products.',
    images: ['/wajidalikhan.png'],
    creator: '@mwajidalikhan',
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
              name: 'Wajid Ali Khan',
              url: siteUrl,
              image: `${siteUrl}/wajidalikhan.png`,
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
              email: 'mrwajidalikhan42111@gmail.com',
              telephone: '+92-348-1970849',
              sameAs: [
                'https://github.com/mwajidalikhan',
                'https://www.linkedin.com/in/mwajidalikhan/',
                'https://x.com/mwajidalikhan',
              ],
              knowsAbout: [
                'React.js',
                'Next.js',
                'Node.js',
                'Express.js',
                'MongoDB',
                'MySQL',
                'PostgreSQL',
                'TypeScript',
                'JavaScript',
                'HTML5',
                'CSS3',
                'Tailwind CSS',
                'REST APIs',
                'GraphQL',
                'Firebase',
                'Supabase',
                'AWS',
                'Docker',
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
              name: 'Wajid Ali Khan - Full Stack Developer',
              url: siteUrl,
              description: 'Portfolio website of Wajid Ali Khan, a Full Stack Developer from Pakistan.',
              author: {
                '@type': 'Person',
                name: 'Wajid Ali Khan',
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
              name: 'Wajid Ali Khan - Web Development Services',
              description: 'Full Stack Web Development services including React.js, Next.js, Node.js applications, SaaS products, and custom software solutions.',
              url: siteUrl,
              telephone: '+92-348-1970849',
              email: 'mrwajidalikhan42111@gmail.com',
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
