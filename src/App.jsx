import { useEffect, useRef, useState } from 'react'
import { profile, stats, services, projects, tools, reasons } from './data.js'
import avatar from './assets/avatar.jpg'

/* ---------- tiny inline icon set ---------- */
const paths = {
  workflow: 'M4 6h5v5H4zM15 13h5v5h-5zM6.5 11v3.5a2 2 0 0 0 2 2H15M9 8.5h6.5a2 2 0 0 1 2 2V13',
  api: 'M8 8l-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14',
  bot: 'M12 3v3M7 6h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zM9.5 11.5h.01M14.5 11.5h.01M9.5 15h5',
  docs: 'M7 3h7l4 4v14H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM14 3v4h4M9.5 12h6M9.5 16h6',
  crm: 'M9 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM3 20c0-3.5 2.5-6 6-6s6 2.5 6 6M17 5.5a3 3 0 0 1 0 5M19.5 20c0-2.5-1.2-4.4-3-5.4',
  database: 'M12 3c4.4 0 8 1.3 8 3s-3.6 3-8 3-8-1.3-8-3 3.6-3 8-3zM4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3',
  chart: 'M4 20h16M7 16v-5M12 16V7M17 16v-8',
  cart: 'M4 5h2l2.2 10.5a1.5 1.5 0 0 0 1.5 1.2h7.6a1.5 1.5 0 0 0 1.5-1.2L20.5 8H7M10 21h.01M17 21h.01',
  board: 'M4 4h16v16H4zM9.5 4v16M4 9.5h5.5M14 9h3.5M14 13h3.5',
  check: 'M4.5 12.5l5 5 10-11',
  mail: 'M3.5 6h17v12h-17zM3.5 7l8.5 6.5L20.5 7',
  spark: 'M12 2l2.1 6.3L20.5 10l-6.4 1.7L12 18l-2.1-6.3L3.5 10l6.4-1.7z',
  arrow: 'M5 12h14M13 6l6 6-6 6',
  sun: 'M12 4V2M12 22v-2M4 12H2M22 12h-2M5.6 5.6 4.2 4.2M19.8 19.8l-1.4-1.4M18.4 5.6l1.4-1.4M4.2 19.8l1.4-1.4M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10z',
  moon: 'M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11z',
}

function Icon({ name, size = 22 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={paths[name]} />
    </svg>
  )
}

/* ---------- reveal-on-scroll ---------- */
function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          io.disconnect()
        }
      },
      { threshold: 0.12 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal ${shown ? 'reveal--shown' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

/* ---------- navigation ---------- */
const navLinks = [
  { href: '#projects', label: 'Projects' },
  { href: '#services', label: 'What I Do' },
  { href: '#tools', label: 'Tools' },
  { href: '#why-me', label: 'Why Me' },
]

function Nav({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)
  return (
    <header className="nav">
      <div className="container nav__inner">
        <a href="#top" className="nav__brand" onClick={() => setOpen(false)}>
          <span className="nav__logo">AH</span>
          Adam Harari
        </a>
        <nav className={`nav__links ${open ? 'nav__links--open' : ''}`}>
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn btn--small" onClick={() => setOpen(false)}>
            Let's Talk
          </a>
        </nav>
        <div className="nav__actions">
          <button
            className="theme-btn"
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
            onClick={onToggleTheme}
          >
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={18} />
          </button>
          <button
            className="nav__toggle"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}

/* ---------- hero ---------- */
function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <div className="hero__text">
          <Reveal>
            <p className="eyebrow">
              <Icon name="spark" size={14} /> {profile.title}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1>
              Hi, I'm Adam.
              <br />
              I build systems that give you{' '}
              <span className="accent">clarity in minutes</span>, not hours.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="hero__lead">{profile.tagline}</p>
          </Reveal>
          <Reveal delay={240}>
            <div className="hero__cta">
              <a href="#contact" className="btn">
                Work With Me <Icon name="arrow" size={17} />
              </a>
              <a href="#projects" className="btn btn--ghost">
                See My Work
              </a>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <div className="hero__stats">
              {stats.map((s) => (
                <div key={s.label} className="stat">
                  <span className="stat__value">{s.value}</span>
                  <span className="stat__label">{s.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
        <Reveal delay={200} className="hero__portrait-wrap">
          <div className="hero__portrait">
            <img src={avatar} alt="Portrait of Adam Harari" width="340" height="432" />
            <div className="hero__badge">
              <span className="dot" /> Available for projects
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------- about strip ---------- */
function About() {
  return (
    <section className="about">
      <div className="container">
        <Reveal>
          <p className="about__text">{profile.pitch}</p>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------- services ---------- */
function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <Reveal>
          <p className="eyebrow">What I Do</p>
          <h2>Automation, AI and data — end to end</h2>
        </Reveal>
        <div className="services-grid">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 70}>
              <article className="card service">
                <div className="service__icon">
                  <Icon name={s.icon} />
                </div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- projects ---------- */
function ProjectCard({ project, onOpen, delay }) {
  const cover = project.images[0]
  return (
    <Reveal delay={delay}>
      <article
        className="pcard"
        role="button"
        tabIndex={0}
        onClick={() => onOpen(project)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            onOpen(project)
          }
        }}
        aria-label={`View details: ${project.name}`}
      >
        <div className="pcard__media">
          {cover ? (
            <img src={cover.src} alt={cover.alt} loading="lazy" />
          ) : (
            <div className="pcard__placeholder">
              <Icon name={project.icon} size={54} />
            </div>
          )}
          <span className="pcard__arrow">
            <Icon name="arrow" size={17} />
          </span>
        </div>
        <div className="pcard__body">
          <p className="pcard__category">{project.category}</p>
          <h3>{project.name}</h3>
          <p className="pcard__blurb">{project.blurb}</p>
          <div className="stack__chips">
            {project.stack.map((t) => (
              <span key={t} className="stack__chip">{t}</span>
            ))}
          </div>
        </div>
      </article>
    </Reveal>
  )
}

function Projects({ onOpen }) {
  return (
    <section id="projects" className="section section--alt">
      <div className="container">
        <div className="pgrid">
          {projects.map((p, i) => (
            <ProjectCard key={p.name} project={p} onOpen={onOpen} delay={(i % 2) * 80} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- project detail modal ---------- */
function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="pmodal" onClick={onClose} role="dialog" aria-modal="true" aria-label={project.name}>
      <div className="pmodal__dialog" onClick={(e) => e.stopPropagation()}>
        <button className="pmodal__close" aria-label="Close" onClick={onClose}>
          ×
        </button>
        <p className="pcard__category">{project.category}</p>
        <h3 className="pmodal__title">{project.name}</h3>
        <p className="project__role">{project.role}</p>
        <div className="project__tags">
          {project.tags.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
        {project.images.map((img) => (
          <img key={img.src} className="pmodal__shot" src={img.src} alt={img.alt} />
        ))}
        <p className="pmodal__text">{project.description}</p>
        <ul className="project__highlights">
          {project.highlights.map((h) => (
            <li key={h}>
              <Icon name="check" size={15} /> {h}
            </li>
          ))}
        </ul>
        <div className="stack">
          <span className="stack__label">Built with</span>
          <div className="stack__chips">
            {project.stack.map((t) => (
              <span key={t} className="stack__chip">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ---------- tools ---------- */
function Tools() {
  return (
    <section id="tools" className="section">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Toolbox</p>
          <h2>Tools I work with every day</h2>
        </Reveal>
        <Reveal delay={100}>
          <div className="tools">
            {tools.map((t) => (
              <span key={t} className="tool">{t}</span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------- why me ---------- */
function WhyMe() {
  return (
    <section id="why-me" className="section section--alt">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Why Clients Choose Me</p>
          <h2>Built to hand over, not to lock in</h2>
        </Reveal>
        <div className="reasons">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 80}>
              <div className="card reason">
                <span className="reason__check">
                  <Icon name="check" size={18} />
                </span>
                <div>
                  <h3>{r.title}</h3>
                  <p>{r.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- contact ---------- */
const enquiryTopics = [
  'Workflow automation (n8n / Make / Zapier)',
  'AI agents & chatbots',
  'CRM setup (HubSpot / GoHighLevel / Zoho / Monday)',
  'Data, SQL & BI dashboards',
  'E-commerce & analytics',
  'Something else',
]

// Create a free form at https://formspree.io and paste its endpoint here.
const FORM_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'

function Contact() {
  const [status, setStatus] = useState('idle')

  async function handleSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    setStatus('sending')
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      })
      if (!res.ok) throw new Error('send failed')
      setStatus('sent')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact__grid">
          <Reveal>
            <div className="contact__intro">
              <p className="eyebrow">Start something good</p>
              <h2 className="contact__headline">
                What are you trying to build — or stop doing{' '}
                <em>manually?</em>
              </h2>
              <p>
                Send the idea, the workflow, or the system that is getting in
                the way. I'll map it end to end and come back with a practical
                next step.
              </p>
              <span className="contact__rate-badge">
                Hourly rate&nbsp;<strong>{profile.rate}</strong>
              </span>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__row">
                <label className="field">
                  <span className="field__label">First name</span>
                  <input name="firstName" type="text" placeholder="Jane" required />
                </label>
                <label className="field">
                  <span className="field__label">Last name</span>
                  <input name="lastName" type="text" placeholder="Smith" required />
                </label>
              </div>
              <label className="field">
                <span className="field__label">Work email</span>
                <input name="email" type="email" placeholder="jane@company.com" required />
              </label>
              <label className="field">
                <span className="field__label">What can I help with?</span>
                <select name="topic" defaultValue="" required>
                  <option value="" disabled>
                    Select an area
                  </option>
                  {enquiryTopics.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </label>
              <label className="field">
                <span className="field__label">Tell me about the project</span>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="What are you building, what exists today, and what needs to change?"
                  required
                />
              </label>
              <button className="btn contact__submit" type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Send project enquiry ↗'}
              </button>
              {status === 'sent' && (
                <p className="contact__status contact__status--ok">
                  Thanks — your enquiry is on its way. I'll get back to you shortly.
                </p>
              )}
              {status === 'error' && (
                <p className="contact__status contact__status--err">
                  Something went wrong sending the form. Please try again in a moment.
                </p>
              )}
              <p className="contact__fineprint">
                These details are used only to respond to your enquiry.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>© {new Date().getFullYear()} Adam Harari</span>
        <span>AI & Automation Engineer</span>
      </div>
    </footer>
  )
}

export default function App() {
  const [activeProject, setActiveProject] = useState(null)
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('theme') || 'light'
    } catch {
      return 'light'
    }
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('theme', theme)
    } catch {
      /* private mode — theme just won't persist */
    }
  }, [theme])

  return (
    <>
      <Nav
        theme={theme}
        onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      />
      <main>
        <Hero />
        <Projects onOpen={setActiveProject} />
        <About />
        <Services />
        <Tools />
        <WhyMe />
        <Contact />
      </main>
      <Footer />
      {activeProject && (
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </>
  )
}
