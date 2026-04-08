'use client'

interface Service {
  id: number
  title: string
  description: string
  bgText: string
  screenType: number
}

const services: Service[] = [
  {
    id: 1,
    title: 'Full Stack Web Development',
    description: 'I create Full Stack web applications that are reliable, easy to maintain, and ready for real users. My stack includes React js, Next js, Node.js, Express, MongoDB, MySQL, Supabase and deployment services.',
    bgText: 'FULLSTACK',
    screenType: 1,
  },
  {
    id: 2,
    title: 'Frontend & User Experience',
    description: 'I design and develop frontend experiences that feel smooth, intuitive, and consistent across devices. My toolkit includes React, Next.js, JavaScript, Tailwind CSS, responsive layouts and UI optimization techniques',
    bgText: 'FRONTEND',
    screenType: 2,
  },
  {
    id: 3,
    title: 'Backend, APIs & Integrations',
    description: 'I build secure and reliable backend systems that handle data, logic, and integrations smoothly. I work with Node.js, Express, REST APIs, MongoDB, MySQL, Supabase, authentication, and third-party integrations.',
    bgText: 'BACKEND',
    screenType: 3,
  },
  {
    id: 4,
    title: 'Deployment & Support',
    description: 'I handle smooth deployments and provide ongoing support to keep applications stable and secure. I work with Docker, CI/CD pipelines, cloud platforms, and monitoring tools to ensure reliable releases and quick issue resolution.',
    bgText: 'DEVOPS',
    screenType: 4,
  },
]

export default function Services() {
  return (
    <section className="services-section" id="services">
      <div className="services-header">
        <span className="services-label">What I Do</span>
        <h2 className="services-heading">
          My <span className="highlight">Services</span>
        </h2>
        <p className="services-subtitle">
        Designing and developing web applications that help ideas grow into impactful digital products
        </p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-bg-text">{service.bgText}</div>
            
            <div className="service-laptop">
              <div className="sl-screen">
                <div className="sl-notch">
                  <span className="sl-camera"></span>
                </div>
                <div className="sl-content">
                  {service.screenType === 1 && (
                    <div className="screen-fullstack">
                      <div className="fs-nav">
                        <div className="fs-logo">W</div>
                        <div className="fs-menu-dots">
                          <span></span><span></span><span></span>
                        </div>
                      </div>
                      <div className="fs-hero">
                        <div className="fs-title-bar"></div>
                        <div className="fs-subtitle-bar"></div>
                        <div className="fs-cards">
                          <div className="fs-card"></div>
                          <div className="fs-card"></div>
                          <div className="fs-card"></div>
                        </div>
                      </div>
                      <div className="fs-btn"></div>
                    </div>
                  )}
                  {service.screenType === 2 && (
                    <div className="screen-frontend">
                      <div className="fe-browser-bar">
                        <span className="dot-red"></span>
                        <span className="dot-yellow"></span>
                        <span className="dot-green"></span>
                      </div>
                      <div className="fe-layout">
                        <div className="fe-sidebar">
                          <div className="fe-nav-item active"></div>
                          <div className="fe-nav-item"></div>
                          <div className="fe-nav-item"></div>
                        </div>
                        <div className="fe-main">
                          <div className="fe-hero-block"></div>
                          <div className="fe-grid">
                            <div className="fe-box"></div>
                            <div className="fe-box"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {service.screenType === 3 && (
                    <div className="screen-backend">
                      <div className="be-terminal-bar">
                        <span className="dot-red"></span>
                        <span className="dot-yellow"></span>
                        <span className="dot-green"></span>
                      </div>
                      <div className="be-terminal-body">
                        <div className="be-line">$ npm run server</div>
                        <div className="be-line success">✓ Server running</div>
                        <div className="be-line">$ GET /api/users</div>
                        <div className="be-line response">200 OK</div>
                        <div className="be-line">$ POST /api/auth</div>
                        <div className="be-line success">✓ Token created</div>
                      </div>
                    </div>
                  )}
                  {service.screenType === 4 && (
                    <div className="screen-deployment">
                      <div className="dp-header">
                        <div className="dp-logo-bar"></div>
                        <div className="dp-status">● Live</div>
                      </div>
                      <div className="dp-metrics">
                        <div className="dp-chart">
                          <div className="dp-bar" style={{ height: '60%' }}></div>
                          <div className="dp-bar" style={{ height: '80%' }}></div>
                          <div className="dp-bar" style={{ height: '45%' }}></div>
                          <div className="dp-bar" style={{ height: '90%' }}></div>
                        </div>
                        <div className="dp-circle">
                          <span>99%</span>
                        </div>
                      </div>
                      <div className="dp-log-item success">Deploy successful</div>
                    </div>
                  )}
                </div>
              </div>
              <div className="sl-base">
                <div className="sl-keyboard-area"></div>
              </div>
              <div className="sl-bottom"></div>
            </div>

            <div className="service-info">
              <span className="service-number">0{service.id}</span>
              <h3 className="service-name">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
