'use client'

import { useState, useCallback } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Loading from '@/components/Loading'
import Skills from '@/components/Skills'
import SkillsMarquee from '@/components/SkillsMarquee'
import Specializations from '@/components/Specializations'
import Showcase from '@/components/Showcase'
import Services from '@/components/Services'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  const handleLoadComplete = useCallback(() => {
    setIsLoaded(true)
  }, [])

  return (
    <>
      {/* Loading Screen */}
      <Loading onLoadComplete={handleLoadComplete} />

      {/* Navigation */}
      <Navbar isLoaded={isLoaded} />

      {/* Hero Section */}
      <Hero isLoaded={isLoaded} />

      {/* Skills Orbital Section */}
      <Skills isLoaded={isLoaded} />

      {/* Skills Marquee Section */}
      <SkillsMarquee isLoaded={isLoaded} />

      {/* Specializations Section */}
      <Specializations isLoaded={isLoaded} />

      {/* Showcase Section */}
      <Showcase />

      {/* Services Section */}
      <Services />

      {/* Projects Section */}
      <Projects />

      {/* Contact Section */}
      <Contact />

      {/* Footer Section */}
      <Footer />

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </>
  )
}
