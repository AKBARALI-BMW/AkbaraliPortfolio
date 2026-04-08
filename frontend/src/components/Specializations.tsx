'use client'

interface SpecializationsProps {
  isLoaded?: boolean
}

const stats = [
  { number: '25+', label: 'Completed', sublabel: 'Projects' },
  { number: '3+', label: 'Years in', sublabel: 'Development' },
  { number: '11+', label: 'Clients', sublabel: 'Worldwide' },
  { number: '37K+', label: 'Users on My', sublabel: 'Platforms' },
]

const socialLinks = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/wajid-ali-khan-364bb9220/' },
  { name: 'GitHub', href: 'https://github.com/wajidweb' },
  { name: 'Instagram', href: 'https://www.instagram.com/wajid_ali_khan04/' },
  { name: 'Twitter (X)', href: 'https://x.com/WajidAl42111' },  
]

export default function Specializations({ isLoaded = false }: SpecializationsProps) {
  return (
    <section className={`specializations-section ${isLoaded ? 'animate' : ''}`} id="about">
      <div className="spec-container">
        {/* Left Content */}
        <div className="spec-content">
          <span className="spec-label">&lt;3+ Year Experience&gt;</span>
          
          <h2 className="spec-heading">
          Building Web
          <br />
          <span className="highlight">Applications </span>
          
            <br />
            That Scale   
            <br />
            {/* <span className="highlight"> That Scale   </span> */}
          </h2>
          
          <div className="spec-social">
            {socialLinks.map((link) => (
              <a key={link.name} href={link.href} className="social-link" target="_blank" rel="noopener noreferrer">
                / {link.name}
              </a>
            ))}
          </div>
          
          <div className="spec-about">
            <span className="about-label">&lt;About&gt;</span>
            <p className="about-text">
            I'm a full-stack developer comfortable anywhere in the stack whether I'm optimizing database queries or tweaking a button's hover effect. I love making complicated things feel simple. That moment when everything just clicks? That's the work I live for.
            </p>
          </div>
          
          <div className="spec-stats">
            <span className="stats-label">&lt;Success & Achievements&gt;</span>
            <div className="stats-grid">
              {stats.map((stat) => (
                <div key={stat.label} className="stat-item">
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                  <span className="stat-sublabel">{stat.sublabel}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Right Content - Laptop & Phone */}
        <div className="spec-visuals">
          {/* Laptop Mockup */}
          <div className="laptop-mockup">
            <div className="laptop-screen">
              <div className="laptop-header">
                <div className="laptop-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <div className="laptop-tabs">
                  <span className="tab active">userController.ts</span>
                  <span className="tab">routes.ts</span>
                </div>
              </div>
              <div className="laptop-content">
                <div className="code-editor">
                  <div className="code-sidebar">
                    <div className="file">📁 src</div>
                    <div className="file indent">📁 controllers</div>
                    <div className="file indent active">📄 userController.ts</div>
                    <div className="file indent">📁 routes</div>
                    <div className="file indent">📁 middleware</div>
                    <div className="file indent">📁 models</div>
                    <div className="file">📄 server.ts</div>
                  </div>
                  <div className="code-main">
                    <pre className="code-block">
                      <code>
                        <span className="code-keyword">import</span> &#123; <span className="code-name">Request</span>, <span className="code-name">Response</span> &#125; <span className="code-keyword">from</span> <span className="code-string">'express'</span>;{'\n'}
                        <span className="code-keyword">import</span> <span className="code-name">User</span> <span className="code-keyword">from</span> <span className="code-string">'../models/User'</span>;{'\n'}
                        <span className="code-keyword">import</span> <span className="code-name">bcrypt</span> <span className="code-keyword">from</span> <span className="code-string">'bcryptjs'</span>;{'\n'}
                        <span className="code-keyword">import</span> <span className="code-name">jwt</span> <span className="code-keyword">from</span> <span className="code-string">'jsonwebtoken'</span>;{'\n'}
                        {'\n'}
                        <span className="code-keyword">export const</span> <span className="code-function">createUser</span> = <span className="code-keyword">async</span> ({'\n'}
                        {'  '}req: <span className="code-name">Request</span>,{'\n'}
                        {'  '}res: <span className="code-name">Response</span>{'\n'}
                        ) =&gt; &#123;{'\n'}
                        {'  '}<span className="code-keyword">try</span> &#123;{'\n'}
                        {'    '}<span className="code-keyword">const</span> &#123; email, password &#125; = req.body;{'\n'}
                        {'    '}<span className="code-keyword">const</span> hashedPwd = <span className="code-keyword">await</span> bcrypt.<span className="code-function">hash</span>(password, <span className="code-number">12</span>);{'\n'}
                        {'    '}<span className="code-keyword">const</span> user = <span className="code-keyword">await</span> User.<span className="code-function">create</span>(&#123;{'\n'}
                        {'      '}email,{'\n'}
                        {'      '}password: hashedPwd{'\n'}
                        {'    '}&#125;);{'\n'}
                        {'    '}<span className="code-keyword">const</span> token = jwt.<span className="code-function">sign</span>({'\n'}
                        {'      '}&#123; id: user._id &#125;,{'\n'}
                        {'      '}process.env.<span className="code-attr">JWT_SECRET</span>!{'\n'}
                        {'    '});{'\n'}
                        {'    '}res.<span className="code-function">status</span>(<span className="code-number">201</span>).<span className="code-function">json</span>(&#123; token &#125;);
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
            <div className="laptop-base">
              <div className="laptop-notch"></div>
            </div>
          </div>
          
          {/* Phone Mockup */}
          <div className="phone-mockup">
            <div className="phone-frame">
              <div className="phone-notch"></div>
              <div className="phone-screen">
                <div className="phone-content">
                  <span className="phone-logo">// Wajid Ali Khan</span>
                  <div className="phone-hero">
                    <img 
                      src="/wajid.png" 
                      alt="Wajid Ali Khan - Building high-performance scalable websites" 
                      className="phone-person"
                      loading="lazy"
                    />
                  </div>
                  <div className="phone-text">
                    <span className="phone-exp">&lt;3+ Year Experience&gt;</span>
                    <h3>FULL STACK DEVELOPER</h3>
                  </div>
                </div>
              </div>
              <div className="phone-home-indicator"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="spec-bg-gradient"></div>
    </section>
  )
}

