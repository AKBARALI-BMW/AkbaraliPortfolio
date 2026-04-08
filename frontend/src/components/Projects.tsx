'use client'

import { useState, useEffect } from 'react'

interface Project {
  id: number
  label: string
  title: string
  highlight: string
  description: string
  tech: string[]
  images: string[]
  stats: { label: string; value: string }[]
  website?: string
  hasSourceCode?: boolean
}

const projects: Project[] = [
  {
    id: 1,
    label: 'AI-POWERED PLATFORM',
    title: 'Funnel',
    highlight: 'Studio',
    description: 'An AI-powered platform that allows users to clone any website and fully customize it using a built-in visual editor. Rewrite entire website content using AI, publish to custom domains with one click, and generate ad creatives directly from cloned pages with automatic Meta Ads posting.',
    tech: ['React.js', "Express.js", 'MongoDB', 'OpenAI / Gemini API', "Stripe"],
    images: ['/funnelstudio.ai_.png', '/funnelstudioeditor.png', '/funnelstudiodashboard.png'],
    stats: [{ label: 'Websites Cloned', value: '5K+' }, { label: 'Ads Generated', value: '10K+' }],
    website: 'https://funnelstudio.ai',
    hasSourceCode: false
  },
  {
    id: 2,
    label: 'LOGISTICS MANAGEMENT',
    title: 'EC',
    highlight: 'turbo',
    description: 'A complete management system designed for courier service companies based in Saudi Arabia. Manages daily operations including shipments, tracking, customer management, and internal workflows with a centralized dashboard to streamline logistics and support scalable operations.',
    tech: ['Next.js', 'Express.js', 'MySQL', "Tap Payments"],
    images: ['/ecturbohome.png', '/ecturboshipments.png', '/ecturbouser.png'],
    stats: [{ label: 'Shipments', value: '50K+' }, { label: 'Customers', value: '2K+' }],
    website: "https://ecturbo.com/",
    hasSourceCode: false
  },
  {
    id: 3,
    label: 'B2B ECOMMERCE',
    title: 'Tradx',
    highlight: 'sell',
    description: 'A full-featured B2B eCommerce platform built to support wholesale and bulk trading businesses. Enables businesses to list products, manage bulk orders, handle pricing for different buyers, and facilitate smooth transactions between suppliers and buyers.',
    tech: ['React.js', 'Node.js', 'PostgreSQL', 'Stripe'],
    images: ['/tradxsellhome.jpeg', '/tradxlogin.jpeg', '/tradxproducts.jpeg'],
    stats: [{ label: 'Products', value: '15K+' }, { label: 'Orders', value: '25K+' }],
    // website: 'http://tradxsell.com/',
    hasSourceCode: false
  },
  {
    id: 4,
    label: 'GAMING PLATFORM',
    title: 'Xeph',
    highlight: 'ra',
    description: 'A dedicated platform for hosting and managing gaming events in Pakistan. Allows organizers to create tournaments while players can participate, compete, and track performance through dynamic scoreboards. Maintains player rankings based on tournaments played.',
    tech: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'AWS'],
    images: ['/xephrahome.jpeg', '/xephralogin.png', '/xephradashboard.png'],
    stats: [{ label: 'Tournaments', value: '100+' }, { label: 'Players', value: '5K+' }],
    hasSourceCode: false
  }
]

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null)
      }
    }
    
    if (selectedImage) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [selectedImage])

  return (
    <section className="projects-section" id="projects">
      {/* Image Modal */}
      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <button className="modal-close" onClick={() => setSelectedImage(null)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Project preview" className="modal-image" />
          </div>
        </div>
      )}
      {/* Section Header */}
      <div className="projects-header">
        <span className="projects-label">PORTFOLIO</span>
        <h2 className="projects-heading">Featured <span className="highlight">Projects</span></h2>
        <p className="projects-subtitle">
        From AI-powered platforms to B2B solutions and gaming ecosystems
        </p>
      </div>

      {projects.map((project, index) => (
        <div 
          key={project.id} 
          className={`project-block ${index % 2 === 0 ? 'layout-left' : 'layout-right'}`}
        >
          {/* Background decorative elements */}
          <div className="project-bg-lines">
            <svg viewBox="0 0 400 400" className="project-bg-svg">
              <circle cx="200" cy="200" r="150" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.1" />
              <circle cx="200" cy="200" r="100" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.08" />
              <circle cx="200" cy="200" r="50" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.05" />
            </svg>
          </div>

          <div className="project-container">
            {/* Content Side */}
            <div className="project-content">
              <span className="project-label">{project.label}</span>
              <h2 className="project-title">
                {project.title} <span className="highlight">{project.highlight}</span>
              </h2>
              <p className="project-description">{project.description}</p>
              
              {/* Tech Stack */}
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>

              {/* Stats */}
              <div className="project-stats">
                {project.stats.map((stat, i) => (
                  <div key={i} className="stat-item">
                    <span className="stat-value">{stat.value}</span>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="project-buttons">
                {project.website ? (
                  <a href={project.website} target="_blank" rel="noopener noreferrer" className="btn-primary">
                    Visit Website
                  </a>
                ) : (
                  <a href="#contact" className="btn-primary">Request Demo</a>
                )}
                {project.hasSourceCode && (
                  <a href="#" className="btn-secondary">Source Code</a>
                )}
              </div>
            </div>

            {/* Images Side */}
            <div className="project-images">
              <div className="image-grid">
                <div className="image-main" onClick={() => setSelectedImage(project.images[0])}>
                  <img 
                    src={project.images[0]} 
                    alt={`${project.title} ${project.highlight} - Main`}
                    className="project-img clickable"
                  />
                  <div className="image-zoom-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="11" cy="11" r="8" />
                      <path d="M21 21l-4.35-4.35M11 8v6M8 11h6" />
                    </svg>
                  </div>
                </div>
                <div className="image-stack">
                  <div className="image-small" onClick={() => setSelectedImage(project.images[1])}>
                    <img 
                      src={project.images[1]} 
                      alt={`${project.title} ${project.highlight} - Detail 1`}
                      className="project-img clickable"
                    />
                    <div className="image-zoom-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="11" cy="11" r="8" />
                        <path d="M21 21l-4.35-4.35M11 8v6M8 11h6" />
                      </svg>
                    </div>
                  </div>
                  <div className="image-small" onClick={() => setSelectedImage(project.images[2])}>
                    <img 
                      src={project.images[2]} 
                      alt={`${project.title} ${project.highlight} - Detail 2`}
                      className="project-img clickable"
                    />
                    <div className="image-zoom-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="11" cy="11" r="8" />
                        <path d="M21 21l-4.35-4.35M11 8v6M8 11h6" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative circle */}
              <div className="image-decoration">
                <svg viewBox="0 0 100 100" className="decoration-circle">
                  <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="8 4" />
                </svg>
              </div>
            </div>
          </div>

          {/* Project number */}
          <span className="project-number">0{project.id}</span>
        </div>
      ))}
    </section>
  )
}

