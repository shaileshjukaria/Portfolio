import React, { useEffect, useMemo, useRef, useState } from 'react'
import {
  Menu, X, Github, Linkedin, Mail, ExternalLink, ChevronDown, MapPin,
  Briefcase, ArrowUpRight, GraduationCap, Phone
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'social', label: 'Social' },
  { id: 'contact', label: 'Contact' },
]

const contact = {
  location: 'Champawat, Uttarakhand',
  email: 'shailesh7jukaria@outlook.com',
  phone: '+91 9368787282',
  linkedin: 'https://www.linkedin.com/in/shailesh-jukaria-1b6998361',
  github: 'https://github.com/shaileshjukaria',
}

const experience = [
  {
    role: 'Full Stack Developer Intern',
    org: 'LaunchED Global',
    period: 'Aug 2025 – Present',
    bullets: [
      'Designed and developed distributed full‑stack apps ensuring performance, reliability, and scalability using React, Node.js, and Express.',
      'Built and optimized large‑scale databases (MySQL/MongoDB) with a focus on query performance, indexing, and data consistency.',
      'Collaborated with PMs, architects, and ops to deliver secure, production‑ready solutions.',
      'Integrated real‑time risk and security validations aligned with enterprise compliance and performance standards.',
      'Hands‑on end‑to‑end system design from UI/UX integration to backend, deployment, and monitoring.',
    ],
  },
  {
    role: 'Mentor',
    org: 'We Code Club',
    period: 'Aug 2023 – Aug 2024',
    bullets: [
      'Led workshops on modern full stack development (React, Node.js, MongoDB).',
      'Helped students build scalable apps and strengthen fundamentals.',
    ],
  },
]

const education = [
  {
    school: 'Graphic Era Hill University',
    degree: 'B.Tech — Computer Science & Engineering',
    period: 'Sept 2022 – July 2026',
  },
]

const skills = {
  'Full‑Stack Development': ['React.js', 'Angular', 'Node.js', 'Express.js', 'RESTful APIs', 'Microservices', 'System Design'],
  'Backend & Databases': ['MongoDB', 'MySQL', 'PostgreSQL', 'Query Optimization', 'Caching', 'Authentication & Authorization'],
  'Programming': ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'SQL'],
  'Tools & DevOps': ['Git', 'GitHub', 'Jenkins', 'Docker', 'Postman', 'VS Code', 'Agile/Scrum', 'CI/CD Pipelines'],
  'Other Skills': ['System Architecture', 'Scalability', 'Risk & Security Integration', 'Code Reviews', 'Documentation'],
}

const projects = [
  {
    title: 'E‑commerce Website',
    desc: 'Full‑stack e‑commerce platform with product listing, cart, secure checkout, auth, order management, and responsive UI.',
    tags: ['React/Angular', 'Node.js', 'Express', 'MySQL/MongoDB', 'Auth'],
    href: 'https://github.com/shaileshjukaria?tab=repositories',
  },
  {
    title: 'Personal Space — Cloud Storage',
    desc: 'Cloud‑based storage app to upload, download, and manage files securely with role‑based access.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB/MySQL'],
    href: 'https://github.com/shaileshjukaria?tab=repositories',
  },
  {
    title: 'Anime TV Tracker',
    desc: 'Browse, search, and maintain a personalized anime watchlist using public APIs; includes auth and CRUD features.',
    tags: ['React', 'REST APIs', 'Node.js', 'MongoDB', 'Auth'],
    href: 'https://github.com/shaileshjukaria?tab=repositories',
  },
]

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [active, setActive] = useState('home')
  const year = useMemo(() => new Date().getFullYear(), [])
  const observers = useRef({})

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id) })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0.01 }
    )
    NAV.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [])

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white selection:bg-blue-600/40'>
      <div className='pointer-events-none fixed inset-0 -z-10'>
        <div className='absolute -top-16 -left-16 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl' />
        <div className='absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl' />
      </div>

      <nav className='fixed w-full z-50 border-b border-slate-800/60 bg-slate-900/70 backdrop-blur-xl'>
        <div className='mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
          <div className='flex h-16 items-center justify-between'>
            <button onClick={() => scrollTo('home')} className='text-2xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent'>Shailesh Jukaria</button>
            <div className='hidden md:flex items-center gap-1'>
              {NAV.map((n) => (
                <button key={n.id} onClick={() => scrollTo(n.id)} className={`px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-cyan-300 ${active === n.id ? 'text-cyan-300' : 'text-slate-300'}`}>{n.label}</button>
              ))}
            </div>
            <button onClick={() => setIsMenuOpen((s) => !s)} className='md:hidden p-2'>{isMenuOpen ? <X size={22} /> : <Menu size={22} />}</button>
          </div>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className='md:hidden overflow-hidden pb-3'>
                <div className='space-y-1'>
                  {NAV.map((n) => (
                    <button key={n.id} onClick={() => scrollTo(n.id)} className='block w-full text-left rounded px-4 py-2 text-slate-200 hover:bg-slate-800/70'>{n.label}</button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      <section id='home' className='px-4 pt-28 pb-16 text-center'>
        <div className='mx-auto max-w-5xl'>
          <motion.h1 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className='mb-4 text-5xl font-extrabold leading-tight md:text-7xl bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent'>Hi, I'm Shailesh</motion.h1>
          <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} className='mx-auto mb-3 max-w-2xl text-xl text-slate-300'>Full‑Stack Developer • MERN • Software Engineering</motion.p>
          <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className='mx-auto mb-8 max-w-2xl text-slate-400'>I build scalable, secure web apps with clean code and delightful UX.</motion.p>

          <div className='flex justify-center mb-8'>
            <div className='relative h-56 w-56 overflow-hidden rounded-full shadow-lg ring-2 ring-cyan-400/30'>
              <img src='/IMG_20251020_103436.png' alt='Shailesh Jukaria' className='h-full w-full object-cover' />
            </div>
          </div>

          <div className='mx-auto flex flex-wrap items-center justify-center gap-4 text-slate-300'>
            <span className='inline-flex items-center gap-2'><MapPin size={16} /> {contact.location}</span>
            <a href={`mailto:${contact.email}`} className='inline-flex items-center gap-2 hover:text-cyan-300'><Mail size={16} /> {contact.email}</a>
            <a href='tel:+919368787282' className='inline-flex items-center gap-2 hover:text-cyan-300'><Phone size={16} /> {contact.phone}</a>
          </div>

          <div className='mt-6 flex flex-wrap justify-center gap-3'>
            <button onClick={() => scrollTo('projects')} className='rounded-lg bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500'>View My Work</button>
            <a href={contact.github} target='_blank' rel='noreferrer' className='rounded-lg border-2 border-cyan-400 px-6 py-3 font-semibold text-cyan-300 transition hover:bg-cyan-400/10 inline-flex items-center gap-2'><Github size={18} /> GitHub</a>
            <a href={contact.linkedin} target='_blank' rel='noreferrer' className='rounded-lg border-2 border-cyan-400 px-6 py-3 font-semibold text-cyan-300 transition hover:bg-cyan-400/10 inline-flex items-center gap-2'><Linkedin size={18} /> LinkedIn</a>
          </div>

          <div className='mt-8 animate-bounce'><ChevronDown className='mx-auto' /></div>
        </div>
      </section>

      <section id='about' className='px-4 py-16 bg-slate-900/50'>
        <div className='mx-auto max-w-6xl grid items-center gap-10 md:grid-cols-2'>
          <div className='order-2 md:order-1'>
            <h2 className='mb-6 text-4xl font-bold'>About Me</h2>
            <p className='mb-4 text-lg leading-relaxed text-slate-300'>
              Full‑stack developer with a solid foundation in software engineering principles and a focus on performance, security, and scalability.
            </p>
            <p className='mb-6 text-lg leading-relaxed text-slate-300'>
              I enjoy system design, building reliable APIs, and crafting smooth, accessible UIs.
            </p>
            <div className='flex gap-4 text-slate-300'>
              <a href={contact.github} target='_blank' rel='noreferrer' className='transition hover:text-cyan-300'><Github /></a>
              <a href={contact.linkedin} target='_blank' rel='noreferrer' className='transition hover:text-cyan-300'><Linkedin /></a>
              <a href={`mailto:${contact.email}`} className='transition hover:text-cyan-300'><Mail /></a>
            </div>
          </div>
          <div className='order-1 md:order-2'>
            <div className='relative h-72 w-full overflow-hidden rounded-xl bg-slate-950'>
              <img src='/IMG_20251020_103436.png' alt='Shailesh Jukaria' className='h-full w-full object-contain' />
              <div className='pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10' />
            </div>
            <div className='mt-4 flex items-center gap-3 text-slate-400'>
              <MapPin size={16} /> {contact.location} • Open to remote
            </div>
          </div>
        </div>
      </section>

      <section id='experience' className='px-4 py-16'>
        <div className='mx-auto max-w-6xl'>
          <h2 className='mb-8 text-4xl font-bold text-center'>Experience</h2>
          <div className='grid gap-6 md:grid-cols-2'>
            {experience.map((e) => (
              <div key={e.org + e.role} className='rounded-xl border border-slate-800 bg-slate-800/40 p-6'>
                <div className='mb-2 flex items-center justify-between gap-2'>
                  <h3 className='text-xl font-semibold text-slate-100 inline-flex items-center gap-2'><Briefcase size={18} /> {e.role}</h3>
                  <span className='text-sm text-slate-400'>{e.period}</span>
                </div>
                <p className='mb-3 font-medium'>
                  <a className='text-cyan-300 hover:underline' href='https://launchedglobal.in/' target='_blank' rel='noreferrer'>{e.org}</a>
                </p>
                <ul className='list-disc pl-5 space-y-2 text-slate-300'>
                  {e.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id='education' className='px-4 py-16 bg-slate-900/50'>
        <div className='mx-auto max-w-5xl'>
          <h2 className='mb-8 text-4xl font-bold text-center'>Education</h2>
          {education.map((ed) => (
            <div key={ed.school} className='rounded-xl border border-slate-800 bg-slate-800/50 p-6'>
              <div className='flex flex-col gap-1 md:flex-row md:items-center md:justify-between'>
                <h3 className='text-xl font-semibold text-slate-100 inline-flex items-center gap-2'>
                  <GraduationCap size={18} /> <a href='https://www.gehu.ac.in' target='_blank' rel='noreferrer' className='hover:underline'>{ed.school}</a>
                </h3>
                <span className='text-sm text-slate-400'>{ed.period}</span>
              </div>
              <p className='mt-2 text-cyan-300 font-medium'>{ed.degree}</p>
            </div>
          ))}
        </div>
      </section>

      <section id='skills' className='px-4 py-16'>
        <div className='mx-auto max-w-6xl'>
          <h2 className='mb-10 text-center text-4xl font-bold'>Skills</h2>
          <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {Object.entries(skills).map(([group, list]) => (
              <div key={group} className='rounded-xl border border-slate-800 bg-slate-800/50 p-6 shadow-sm hover:border-cyan-500/40'>
                <h3 className='mb-3 text-xl font-semibold text-cyan-300'>{group}</h3>
                <div className='flex flex-wrap gap-2'>
                  {list.map((s) => (
                    <span key={s} className='rounded-full bg-cyan-400/10 px-2.5 py-1 text-xs text-cyan-200 ring-1 ring-inset ring-cyan-400/20'>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id='projects' className='px-4 py-16 bg-slate-900/50'>
        <div className='mx-auto max-w-6xl'>
          <h2 className='mb-10 text-center text-4xl font-bold'>Projects</h2>
          <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {projects.map((p) => (
              <a key={p.title} href={p.href} target='_blank' rel='noreferrer' className='group relative block rounded-xl border border-slate-800 bg-slate-800/40 p-6 shadow-sm ring-1 ring-white/5 transition hover:-translate-y-0.5 hover:border-cyan-500/40'>
                <div className='mb-3 flex items-start justify-between gap-4'>
                  <h3 className='text-xl font-semibold text-slate-100 group-hover:text-cyan-300'>{p.title}</h3>
                  <ExternalLink className='text-slate-500 group-hover:text-cyan-300' size={18} />
                </div>
                <p className='mb-4 line-clamp-3 text-slate-400'>{p.desc}</p>
                <div className='flex flex-wrap gap-2'>
                  {p.tags.map((t) => (
                    <span key={t} className='rounded-full bg-cyan-400/10 px-2.5 py-1 text-xs text-cyan-200 ring-1 ring-inset ring-cyan-400/20'>{t}</span>
                  ))}
                </div>
              </a>
            ))}
          </div>
          <div className='mt-10 text-center'>
            <a href={contact.github} target='_blank' rel='noreferrer' className='inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800/60 px-4 py-2 text-slate-200 hover:border-cyan-500/40'>
              <Github size={18} /> More on GitHub <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <section id='social' className='px-4 py-16'>
        <div className='mx-auto max-w-3xl text-center'>
          <h2 className='mb-6 text-4xl font-bold'>Connect With Me</h2>
        </div>
        <div className='mx-auto max-w-3xl rounded-xl border border-slate-800 bg-slate-800/50 p-8 text-center'>
          <p className='mb-6 text-lg text-slate-300'>Find me here:</p>
          <div className='flex flex-wrap justify-center gap-3'>
            <a href={contact.linkedin} target='_blank' rel='noreferrer' className='inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500'><Linkedin size={18}/> LinkedIn</a>
            <a href={contact.github} target='_blank' rel='noreferrer' className='inline-flex items-center gap-2 rounded-lg bg-slate-700 px-6 py-3 font-semibold transition hover:bg-slate-600'><Github size={18}/> GitHub</a>
            <a href={`mailto:${contact.email}`} className='inline-flex items-center gap-2 rounded-lg bg-cyan-700 px-6 py-3 font-semibold transition hover:bg-cyan-600'><Mail size={18}/> Email</a>
          </div>
          <p className='mt-6 text-sm text-slate-400'>{contact.location} • {contact.phone} • {contact.email}</p>
        </div>
      </section>

      <section id='contact' className='px-4 py-16 bg-slate-900/50'>
        <div className='mx-auto max-w-3xl text-center'>
          <h2 className='mb-4 text-4xl font-bold'>Get In Touch</h2>
          <p className='mx-auto mb-8 max-w-2xl text-lg text-slate-300'>Open to internships, freelance and full‑time roles. Let’s build something great.</p>
          <div className='flex flex-wrap justify-center gap-4'>
            <a href={`mailto:${contact.email}`} className='rounded-lg bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500 inline-flex items-center gap-2'><Mail size={18}/> Email Me</a>
            <a href='tel:+919368787282' className='rounded-lg border-2 border-cyan-400 px-6 py-3 font-semibold text-cyan-300 transition hover:bg-cyan-400/10 inline-flex items-center gap-2'><Phone size={18}/> Call</a>
            <a href={contact.linkedin} target='_blank' rel='noreferrer' className='rounded-lg border-2 border-cyan-400 px-6 py-3 font-semibold text-cyan-300 transition hover:bg-cyan-400/10 inline-flex items-center gap-2'><Linkedin size={18}/> LinkedIn</a>
          </div>
        </div>
      </section>

      <footer className='border-t border-slate-800 px-4 py-8 text-center text-slate-400'>
        <div className='mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row'>
          <p>© {year} Shailesh Jukaria. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
