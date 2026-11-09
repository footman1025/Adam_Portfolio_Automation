import { useEffect, useRef, useState } from 'react'
import { profile, stats, services, projects, moreProjects, tools, reasons } from './data.js'
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

function Nav() {
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
function Projects({ onZoom }) {
  return (
    <section id="projects" className="section section--alt">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Featured Projects</p>
          <h2>Real systems, shipped and running</h2>
        </Reveal>
        <div className="projects">
          {projects.map((p, i) => (
            <Reveal key={p.name}>
              <article className={`project ${i % 2 ? 'project--flip' : ''}`}>
                <div className="project__media">
                  {p.images.map((img) => (
                    <button
                      key={img.src}
                      className="project__shot"
                      onClick={() => onZoom(img)}
                      aria-label={`Enlarge screenshot: ${img.alt}`}
                    >
                      <img src={img.src} alt={img.alt} loading="lazy" />
                    </button>
                  ))}
                </div>
                <div className="project__body">
                  <div className="project__tags">
                    {p.tags.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                  <h3>{p.name}</h3>
                  <p className="project__role">{p.role}</p>
                  <p>{p.description}</p>
                  <ul className="project__highlights">
                    {p.highlights.map((h) => (
                      <li key={h}>
                        <Icon name="check" size={15} /> {h}
                      </li>
                    ))}
                  </ul>
                  <div className="stack">
                    <span className="stack__label">Built with</span>
                    <div className="stack__chips">
                      {p.stack.map((t) => (
                        <span key={t} className="stack__chip">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <h3 className="more-title">More Projects</h3>
        </Reveal>
        <div className="more-grid">
          {moreProjects.map((p, i) => (
            <Reveal key={p.name} delay={i * 90}>
              <article className="card more-card">
                <div className="service__icon">
                  <Icon name={p.icon} />
                </div>
                <h3>{p.name}</h3>
                <p className="project__role">{p.role}</p>
                <p className="more-card__text">{p.description}</p>
                <div className="stack">
                  <span className="stack__label">Built with</span>
                  <div className="stack__chips">
                    {p.stack.map((t) => (
                      <span key={t} className="stack__chip">{t}</span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
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
function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <Reveal>
          <div className="contact__card">
            <h2>Tell me what's eating your time</h2>
            <p>
              I'll map the workflow and automate it end to end. Clear milestones,
              full ownership of everything I build, and support after launch.
            </p>
            <div className="contact__actions">
              <a className="btn" href={`mailto:${profile.email}`}>
                <Icon name="mail" size={18} /> Get in Touch
              </a>
              <span className="contact__rate">
                Starting at <strong>{profile.rate}</strong>
              </span>
            </div>
          </div>
        </Reveal>
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

/* ---------- lightbox ---------- */
function Lightbox({ image, onClose }) {
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
    <div className="lightbox" onClick={onClose} role="dialog" aria-modal="true">
      <img src={image.src} alt={image.alt} />
      <button className="lightbox__close" aria-label="Close">×</button>
    </div>
  )
}

export default function App() {
  const [zoomed, setZoomed] = useState(null)
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Projects onZoom={setZoomed} />
        <About />
        <Services />
        <Tools />
        <WhyMe />
        <Contact />
      </main>
      <Footer />
      {zoomed && <Lightbox image={zoomed} onClose={() => setZoomed(null)} />}
    </>
  )
}
