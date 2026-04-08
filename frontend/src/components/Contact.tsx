'use client'

import { useState, useEffect } from 'react'

// Declare Calendly type for TypeScript
declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void
    }
  }
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  // Load Calendly script
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)

    // Add Calendly CSS
    const link = document.createElement('link')
    link.href = 'https://assets.calendly.com/assets/external/widget.css'
    link.rel = 'stylesheet'
    document.head.appendChild(link)

    return () => {
      // Cleanup on unmount
      document.body.removeChild(script)
      document.head.removeChild(link)
    }
  }, [])

  // Open Calendly popup
  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/mrwajidalikhan42111'
      })
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  return (
    <section className="contact-section" id="contact">
      {/* Background with overlay */}
      <div className="contact-bg">
        <div className="contact-bg-gradient"></div>
        <div className="contact-bg-pattern"></div>
      </div>

      {/* Floating particles */}
      <div className="contact-particles">
        <span className="contact-particle"></span>
        <span className="contact-particle"></span>
        <span className="contact-particle"></span>
        <span className="contact-particle"></span>
        <span className="contact-particle"></span>
      </div>

      <div className="contact-container">
        {/* Header */}
        <div className="contact-header">
          <span className="contact-label">Get In Touch</span>
          <h2 className="contact-title">
            Let's <span className="highlight">Connect</span>
          </h2>
          <p className="contact-subtitle">
          Have a project in mind or want to discuss an opportunity? I'd love to hear from you.
          </p>
        </div>

        {/* Form Container */}
        <div className="contact-form-wrapper">
          <form 
            className="contact-form" 
            action="https://formsubmit.co/mrwajidalikhan42111@gmail.com" 
            method="POST"
          >
            {/* FormSubmit Configuration */}
            <input type="hidden" name="_subject" value="New Contact Form Submission - Portfolio" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            
            {/* Name Field */}
            <div className={`form-group ${formData.name ? 'has-value' : ''}`}>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder=" "
                autoComplete="name"
              />
              <label htmlFor="name">Your Name</label>
              <span className="form-line"></span>
              {formData.name && (
                <span className="form-check">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </span>
              )}
            </div>

            {/* Email Field */}
            <div className={`form-group ${formData.email && isValidEmail(formData.email) ? 'has-value' : ''}`}>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder=" "
                autoComplete="email"
              />
              <label htmlFor="email">Your Email</label>
              <span className="form-line"></span>
              {formData.email && isValidEmail(formData.email) && (
                <span className="form-check">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </span>
              )}
            </div>

            {/* Message Field */}
            <div className={`form-group form-group-textarea ${formData.message ? 'has-value' : ''}`}>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder=" "
                rows={5}
              />
              <label htmlFor="message">Your Message</label>
              <span className="form-line"></span>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="contact-submit"
            >
              <span className="submit-text">
                Send Message
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                </svg>
              </span>
            </button>
          </form>

          {/* Side Info */}
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <path d="M22 6l-10 7L2 6" />
                </svg>
              </div>
              <div className="info-content">
                <span className="info-label">Email</span>
                <a href="mailto:akbaraliuetm136@gmail.com" className="info-value">akbaraliuetm136@gmail.com</a>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="info-content">
                <span className="info-label">Location</span>
                <span className="info-value">Peshawar, Pakistan</span>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div className="info-content">
                <span className="info-label">Phone</span>
                <a href="tel:+923476092385" className="info-value phone-number">+92-347-6092385</a>
              </div>
            </div>

            <button 
              type="button"
              onClick={openCalendly}
              className="info-card info-card-calendly"
            >
              <div className="info-icon calendly-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                  <circle cx="12" cy="15" r="2" />
                </svg>
              </div>
              <div className="info-content">
                <span className="info-label">Schedule a Call</span>
                <span className="info-value calendly-text">Book a Meeting</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

