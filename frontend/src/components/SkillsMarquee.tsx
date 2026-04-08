'use client'

interface SkillsMarqueeProps {
  isLoaded?: boolean
}

// Skills organized in rows - alternating directions
const row1 = ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Redux', 'REST APIs', 'GraphQL']
const row2 = ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'Firebase', 'AWS', 'Docker', 'Git', 'CI/CD', 'Linux']
const row3 = ['Responsive Design', 'UI/UX Design', 'Web Performance', 'SEO Optimization', 'Authentication', 'Payment Integration', 'Real-time Apps', 'Testing', 'Agile', 'Scrum']
const row4 = ['API Development', 'Database Design', 'Cloud Deployment', 'Server Management', 'Code Review', 'Documentation', 'Problem Solving', 'Team Collaboration', 'Clean Code', 'Architecture']
const row5 = ['Frontend Development', 'Backend Development', 'Full Stack', 'Web Applications', 'Mobile Responsive', 'Cross-browser', 'Version Control', 'Debugging', 'Optimization', 'Security']

export default function SkillsMarquee({ isLoaded = false }: SkillsMarqueeProps) {
  return (
    <section className={`skills-marquee-section ${isLoaded ? 'animate' : ''}`}>
      {/* Background gradient overlay */}
      <div className="marquee-bg-overlay"></div>
      
      {/* Heading */}
      <div className="marquee-header">
        <h2 className="marquee-title">
        Full Stack 
          <span className="highlight"> Engineering Skills</span>
        </h2>
        <p className="marquee-subtitle">Modern tools, frameworks, and real-world development experience — from frontend to backend and beyond.  </p>
      </div>
      
      {/* Marquee Rows */}
      <div className="marquee-container">
        {/* Row 1 - Left */}
        <div className="marquee-row">
          <div className="marquee-track left">
            {[...row1, ...row1, ...row1, ...row1].map((skill, index) => (
              <span key={`r1-${index}`} className="skill-pill">{skill}</span>
            ))}
          </div>
        </div>
        
        {/* Row 2 - Right */}
        <div className="marquee-row">
          <div className="marquee-track right">
            {[...row2, ...row2, ...row2, ...row2].map((skill, index) => (
              <span key={`r2-${index}`} className="skill-pill">{skill}</span>
            ))}
          </div>
        </div>
        
        {/* Row 3 - Left */}
        <div className="marquee-row">
          <div className="marquee-track left slow">
            {[...row3, ...row3, ...row3, ...row3].map((skill, index) => (
              <span key={`r3-${index}`} className="skill-pill">{skill}</span>
            ))}
          </div>
        </div>
        
        {/* Row 4 - Right */}
        <div className="marquee-row">
          <div className="marquee-track right">
            {[...row4, ...row4, ...row4, ...row4].map((skill, index) => (
              <span key={`r4-${index}`} className="skill-pill">{skill}</span>
            ))}
          </div>
        </div>
        
        {/* Row 5 - Left */}
        <div className="marquee-row">
          <div className="marquee-track left">
            {[...row5, ...row5, ...row5, ...row5].map((skill, index) => (
              <span key={`r5-${index}`} className="skill-pill">{skill}</span>
            ))}
          </div>
        </div>
      </div>
      
      {/* Center Person Image */}
      <div className="marquee-person">
        <img 
          src="/AkbaraliProfile2.png" 
          alt="Akbar Ali - Expert in React, Node.js, MongoDB, MySQL, and modern web technologies" 
          className="marquee-person-img"
          loading="lazy"
        />
      </div>
      
      {/* Side fade overlays */}
      <div className="fade-overlay left"></div>
      <div className="fade-overlay right"></div>
    </section>
  )
}

