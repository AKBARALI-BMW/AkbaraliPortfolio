'use client'

interface HeroProps {
  isLoaded?: boolean
}

export default function Hero({ isLoaded = false }: HeroProps) {
  const showPlaceholder = false

  return (
    <section className={`hero ${isLoaded ? 'animate' : ''}`} id="home">
      {/* Mobile Only Intro Text */}
      <div className="hero-mobile-intro">
        <p>
   Hello, I'm Akbar Ali, a Full Stack Developer based in Peshawar, Pakistan. I transform ideas into powerful web applications and bring them to life through clean code and creative solutions.
        </p>
      </div>

      {/* Floating Particles */}
      <div className="particles">
        <span className="particle"></span>
        <span className="particle"></span>
        <span className="particle"></span>
        <span className="particle"></span>
        <span className="particle"></span>
        <span className="particle"></span>
        <span className="particle"></span>
        <span className="particle"></span>
      </div>

      {/* Large Background Name */}
      <div className="hero-name-bg">AKBAR</div>

      {/* Person Image */}
      <div className="person-container">
        {!showPlaceholder ? (
          <img 
            src="/Akbarali.png" 
            alt="Akbar Ali - Full Stack Developer from Pakistan specializing in Tailwind CSS, React.js, and Node.js" 
            className="person-image"
            loading="eager"
            fetchPriority="high"
          />
        ) : (
          <div className="person-placeholder">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
            <span>Akbar Ali</span>
          </div>
        )}
      </div>

      {/* Left Text Block */}
      <div className="hero-text-left">
        <p>
          Hello, I'm Akbar Ali, a <strong>Full Stack Developer</strong> based in Pakistan. 
           I transform ideas into powerful web applications and bring them to life through clean code and creative solutions.
        </p>
      </div>

      {/* Right Text Block */}
      <div className="hero-text-right">
        <p>
        I help founders and teams develop web applications focused on solving real-world challenges effectively.
        </p>
      </div>

    </section>
  )
}
