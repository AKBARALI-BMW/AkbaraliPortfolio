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
    label: 'MANAGEMENT SYSTEM PLATFORM',
    title: 'Shop ',
    highlight: 'Management System',
    description: 'A complete construction material shop management system that handles buying, selling, and customer tracking in one place. Manage your inventory, record daily sales, monitor customer purchases, and keep full control of your business operations with ease React.js · Node.js Express.js MongoDB Inventory Managed · Customer Records · Sales Tracking View Project ',
    tech: [ 'Tailwind CSS','React.js', "Express.js", 'MongoDB', "Multer Cloud"],
    images: ['/Shopdashboard.png', '/Shopcustomer.png', '/Shopslip.png'],
    stats: [{ label: 'Active Project', value: 'Current' }, { label: 'Frontend + Backend', value: 'Full Stack' }],
    website: 'https://funnelstudio.ai',
    hasSourceCode: false
  },
  {
    id: 2,
    label: 'AI-POWERED TOOL',
    title: 'CV',
    highlight: ' Builder',
    description: 'An AI-powered CV builder that generates professional, ready-to-use CVs in seconds. Simply enter your information, choose a template, and let the AI build a polished, job-ready CV — no design skills needed React.js · Node.js Express.js MongoDB AI Integration  Smart Templates Instant CV Export AI Powered View Project',
    tech: ['Tailwind CSS','React.js', 'Express.js', 'MongoDB'],
    images: ['/ecturbohome.png', '/ecturboshipments.png', '/ecturbouser.png'],
    stats: [{ label: 'Multiple Designs', value: 'Templates' }, { label: ' Smart Suggestions', value: ' AI Power' }],
    website: "https://ecturbo.com/",
    hasSourceCode: false
  },
  {
    id: 3,
    label: 'SOCIAL MEDIA APP',
    title: 'Smart',
    highlight: ' Social Media App',
    description: 'A modern React-based social media platform where users can share images, like and comment on posts, follow others, and manage their personal profile — a smooth and interactive social experience built for real users React.js  Node.js Express.js MongoDB Image Sharing Likes & Comments Profile Management View Project.',
    tech: ['Tailwind CSS ','React.js','Express js', 'Node.js', 'MonogDB', ],
    images: ['/tradxsellhome.jpeg', '/tradxlogin.jpeg', '/tradxproducts.jpeg'],
    stats: [{ label: 'Image Sharing', value: 'Social' }, { label: 'Likes & Comments', value: 'Interactive' }],
    // website: 'http://tradxsell.com/',
    hasSourceCode: false
  },
  {
    id: 4,
    label: 'Student Certificate Generator',
    title: 'Ed',
    highlight: 'Tech',
    description: 'A smart web platform that allows schools, colleges, and academies to automatically generate professional certificates for their students. Enter student details, select a certificate design, and download a print-ready certificate instantly React.js · Node.js · Express.js MongoDB  Auto Certificate For Institutions Instant PDF Download View Project.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express js', 'MYSQL Database'],
    images: ['/xephrahome.jpeg', '/xephralogin.png', '/xephradashboard.png'],
    stats: [{ label: 'For Institutions', value: 'EdTech' }, { label: ' Instant PDF Export', value: 'Automated' }],
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
        Real-world web applications I built — from management systems to AI-powered tools and social platforms.
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

