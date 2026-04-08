'use client'

import { useState, useEffect } from 'react'

interface NavbarProps {
  isLoaded?: boolean
}

const navLinks = [
  { id: 'home', label: 'Home', hasIcon: true },
  { id: 'about', label: 'About', hasIcon: false },
  { id: 'services', label: 'Services', hasIcon: false },
  { id: 'projects', label: 'Projects', hasIcon: false },
  { id: 'contact', label: 'Contact', hasIcon: false },
]

export default function Navbar({ isLoaded = false }: NavbarProps) {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => document.getElementById(link.id)).filter(Boolean)
      const scrollPosition = window.scrollY + window.innerHeight / 3

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(section.id)
          break
        }
      }

      // If at the very top, set home as active
      if (window.scrollY < 100) {
        setActiveSection('home')
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Run on mount

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(id)
    }
  }

  return (
    <nav className={`navbar ${isLoaded ? 'animate' : ''}`}>
      <ul className="nav-links">
        {navLinks.map(link => (
          <li key={link.id}>
            <a 
              href={`#${link.id}`}
              className={activeSection === link.id ? 'active' : ''}
              onClick={(e) => handleClick(e, link.id)}
            >
              {link.hasIcon && (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              )}
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
