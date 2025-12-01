import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, MapPin, Phone, ExternalLink, Send, Moon, Sun, Code2, Database, Server, Cpu, Globe, Terminal } from 'lucide-react';
import {
  SiReact, SiAngular, SiJavascript, SiTypescript, SiTailwindcss,
  SiNodedotjs, SiExpress, SiPython, SiMicrogenetics, SiFastapi,
  SiMongodb, SiMysql, SiPostgresql, SiRedis,
  SiDocker, SiGit, SiJenkins, SiPostman, SiKubernetes
} from "react-icons/si";

// Main App Component
export default function Portfolio() {
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalImage, setModalImage] = useState(null);
  const [showResume, setShowResume] = useState(false);
  

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (selectedProject || showResume) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject, showResume]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveSection('home');
  };

  const theme = {
    dark: {
      bg: 'bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950',
      cardBg: 'bg-slate-900/60',
      text: 'text-white',
      textSecondary: 'text-slate-300',
      border: 'border-purple-500/20',
      accent: 'text-orange-500',
      buttonBg: 'bg-gradient-to-r from-orange-600 to-orange-500',
      buttonHover: 'hover:from-orange-500 hover:to-orange-400'
    },
    light: {
      bg: 'bg-gradient-to-br from-slate-100 via-orange-50 to-slate-100',
      cardBg: 'bg-white/90 backdrop-blur-sm',
      text: 'text-slate-900',
      textSecondary: 'text-slate-700',
      border: 'border-orange-200/40',
      accent: 'text-orange-600',
      buttonBg: 'bg-gradient-to-r from-orange-600 to-orange-500',
      buttonHover: 'hover:from-orange-500 hover:to-orange-400'
    }
  };

  const t = isDark ? theme.dark : theme.light;

  // ========= REUSABLE COMPONENT FOR SKILLS ========= //
const SkillCard = ({ icon, name, level }) => (
  <div className={`p-6 rounded-2xl ${t.cardBg} ${t.border} border shadow-xl
      hover:scale-[1.05] hover:shadow-purple-500/20 transition-all duration-300
      flex items-center gap-4`}>
      
    <div className="text-4xl">
      {icon}
    </div>

    <div>
      <h4 className="font-semibold text-lg">{name}</h4>
      <p className="text-sm opacity-80">{level}</p>
    </div>
  </div>
);


  return (
    <div className={`${t.bg} ${t.text} min-h-screen transition-colors duration-500`}>
      {/* Navbar */}
      <nav className={`fixed w-full z-50 ${t.cardBg} backdrop-blur-xl border-b ${t.border} transition-colors duration-500`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <button 
              onClick={scrollToTop}
              className="text-2xl font-bold hover:scale-110 transition-transform cursor-pointer"
            >
              <span className={t.accent}>{'<'}</span>
              <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">SJ</span>
              <span className={t.accent}>{'/>'}</span>
            </button>

            <div className="hidden md:flex items-center gap-8">
              {['Home', 'About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`transition-all hover:${t.accent.replace('text-', 'text-')} ${
                    activeSection === item.toLowerCase() ? t.accent : t.textSecondary
                  }`}
                >
                  {item}
                </button>
              ))}
              
              <button
                onClick={() => setIsDark(!isDark)}
                className={`p-2 rounded-lg ${t.cardBg} ${t.border} border hover:scale-110 transition-transform`}
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            <div className="md:hidden flex items-center gap-4">
              <button
                onClick={() => setIsDark(!isDark)}
                className={`p-2 rounded-lg ${t.cardBg} ${t.border} border`}
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4 space-y-2 pb-4">
              {['Home', 'About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`block w-full text-left py-2 px-4 rounded-lg ${t.cardBg} ${t.textSecondary} hover:${t.accent.replace('text-', 'text-')}`}
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className={`inline-block px-4 py-2 rounded-full ${t.cardBg} ${t.border} border mb-6`}>
              <span className={t.accent}>●</span> Available for work
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Hi, I'm <br />
              <span className="bg-gradient-to-r from-purple-400 via-orange-400 to-purple-400 bg-clip-text text-transparent">
                Shailesh Jukaria
              </span>
            </h1>
            <p className={`text-xl ${t.textSecondary} mb-8`}>
              Full-Stack Developer specialized in MERN Stack
            </p>
            <p className={`${t.textSecondary} mb-8 leading-relaxed`}>
              Building scalable web applications with modern technologies. Passionate about clean code, performance optimization, and creating exceptional user experiences.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <button
                onClick={() => scrollToSection('projects')}
                className={`px-8 py-3 ${t.buttonBg} ${t.buttonHover} rounded-lg font-semibold transition-all hover:scale-105 shadow-lg`}
              >
                View Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`px-8 py-3 border-2 border-purple-500 ${t.textSecondary} rounded-lg font-semibold transition-all hover:bg-purple-500/10`}
              >
                Contact Me
              </button>
              <button
                onClick={() => setShowResume(true)}
                className={`px-8 py-3 border-2 ${t.accent} border-orange-500 ${t.accent} rounded-lg font-semibold transition-all hover:bg-orange-500/10`}
              >
                View Resume
              </button>
              <a
                href="/Shailesh-FSWD.pdf"
                download
                className={`px-8 py-3 ${t.buttonBg} ${t.buttonHover} rounded-lg font-semibold transition-all hover:scale-105 shadow-lg flex items-center gap-2`}
              >
                Download Resume
              </a>
            </div>
            <div className="flex gap-6">
              <a href="https://github.com/shaileshjukaria" target="_blank" rel="noopener noreferrer" 
                className={`${t.textSecondary} hover:${t.accent.replace('text-', 'text-')} transition-all hover:scale-110`}>
                <Github size={28} />
              </a>
              <a href="https://www.linkedin.com/in/shailesh-jukaria-1b6998361" target="_blank" rel="noopener noreferrer"
                className={`${t.textSecondary} hover:${t.accent.replace('text-', 'text-')} transition-all hover:scale-110`}>
                <Linkedin size={28} />
              </a>
              <a href="mailto:shailesh07jukaria@gmail.com" 
                className={`${t.textSecondary} hover:${t.accent.replace('text-', 'text-')} transition-all hover:scale-110`}>
                <Mail size={28} />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-orange-600 rounded-3xl blur-3xl opacity-20 animate-pulse" />
            <div className={`relative ${t.cardBg} backdrop-blur-sm border ${t.border} rounded-3xl p-8 shadow-2xl`}>
              <div className="aspect-square rounded-2xl overflow-hidden mb-6 border-4 border-purple-500/30">
                <img src="/profile.png" alt="Shailesh" className="w-full h-full object-cover" />
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className={t.accent} size={20} />
                  <span className={t.textSecondary}>Champawat, Uttarakhand</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className={t.accent} size={20} />
                  <span className={t.textSecondary}>shailesh07jukaria@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className={t.accent} size={20} />
                  <span className={t.textSecondary}>+91 9368787282</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            About <span className={t.accent}>Me</span>
          </h2>
          <div className={`${t.cardBg} backdrop-blur-sm border ${t.border} rounded-2xl p-8 shadow-xl`}>
            <p className={`text-lg ${t.textSecondary} leading-relaxed mb-6`}>
              I'm a passionate full-stack developer with expertise in building scalable web applications. 
              With a strong foundation in software engineering principles, I focus on creating efficient, 
              maintainable code and delivering exceptional user experiences.
            </p>
            <p className={`text-lg ${t.textSecondary} leading-relaxed mb-8`}>
              Currently pursuing B.Tech in Computer Science & Engineering at Graphic Era Hill University. 
              I specialize in the MERN stack and have experience with system design, API development, 
              and database optimization.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className={`${t.cardBg} border ${t.border} rounded-xl p-4`}>
                <h3 className={`font-semibold mb-2 ${t.accent}`}>Education</h3>
                <p className={t.textSecondary}>B.Tech CSE</p>
                <p className={`text-sm ${t.textSecondary} opacity-70`}>2022 - 2026</p>
              </div>
              <div className={`${t.cardBg} border ${t.border} rounded-xl p-4`}>
                <h3 className={`font-semibold mb-2 ${t.accent}`}>Location</h3>
                <p className={t.textSecondary}>Uttarakhand, India</p>
                <p className={`text-sm ${t.textSecondary} opacity-70`}>Open to remote</p>
              </div>
              <div className={`${t.cardBg} border ${t.border} rounded-xl p-4`}>
                <h3 className={`font-semibold mb-2 ${t.accent}`}>Experience</h3>
                <p className={t.textSecondary}>Fresher</p>
                <p className={`text-sm ${t.textSecondary} opacity-70`}>Open to opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Work <span className={t.accent}>Experience</span>
          </h2>
          <div className="space-y-6">
            {[
              {
                role: 'Full Stack Developer Intern',
                company: 'LaunchED Global',
                period: 'Aug 2025 - Oct 2025',
                desc: 'Designed and developed distributed full-stack applications using React, Node.js, and Express. Built and optimized large-scale databases with focus on performance and scalability.',
                skills: ['React', 'Node.js', 'MongoDB', 'Express', 'System Design'],
                link: 'https://launchedglobal.in/'
              },
              {
                role: 'Mentor',
                company: 'We Code Club',
                period: 'Aug 2023 - Aug 2024',
                desc: 'Led workshops on modern full stack development. Helped students build scalable applications and strengthen their programming fundamentals.',
                skills: ['Teaching', 'React', 'MongoDB', 'Mentorship'],
                link: null
              }
            ].map((exp, idx) => (
              <div key={idx} className={`${t.cardBg} backdrop-blur-sm border ${t.border} rounded-2xl p-8 shadow-xl hover:scale-[1.02] transition-all`}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                    {exp.link ? (
                      <a href={exp.link} target="_blank" rel="noopener noreferrer" 
                        className={`${t.accent} hover:underline flex items-center gap-1`}>
                        {exp.company}
                        <ExternalLink size={16} />
                      </a>
                    ) : (
                      <span className={`${t.textSecondary} flex items-center gap-1`}>
                        {exp.company}
                      </span>
                    )}
                  </div>
                  <span className={`${t.textSecondary} mt-2 md:mt-0`}>{exp.period}</span>
                </div>
                <p className={`${t.textSecondary} mb-4`}>{exp.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span key={skill} className={`px-3 py-1 bg-purple-500/10 ${t.accent} rounded-full text-sm border border-purple-500/20`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
     <section id="skills" className="py-20 px-6">
  <div className="max-w-7xl mx-auto">

    <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
      Technical <span className={t.accent}>Skills</span>
    </h2>

    {/* ─────────────── FRONTEND ─────────────── */}
    <h3 className="text-2xl font-bold mb-6 text-center">Frontend</h3>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

      <SkillCard icon={<SiReact size={40} color="#61DBFB"/>} name="React.js" level="Expert"/>
      <SkillCard icon={<SiAngular size={40} color="#DD0031"/>} name="Angular" level="Intermediate"/>
      <SkillCard icon={<SiJavascript size={40} color="#F7DF1E"/>} name="JavaScript" level="Expert"/>
      <SkillCard icon={<SiTypescript size={40} color="#3178C6"/>} name="TypeScript" level="Advanced"/>
      <SkillCard icon={<SiTailwindcss size={40} color="#06B6D4"/>} name="Tailwind CSS" level="Expert"/>

    </div>

    {/* ─────────────── BACKEND ─────────────── */}
    <h3 className="text-2xl font-bold mb-6 text-center">Backend</h3>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

      <SkillCard icon={<SiNodedotjs size={40} color="#3C873A"/>} name="Node.js" level="Advanced"/>
      <SkillCard icon={<SiExpress size={40} color="#888"/>} name="Express.js" level="Advanced"/>
      <SkillCard icon={<SiPython size={40} color="#FFD43B"/>} name="Python" level="Intermediate"/>
      <SkillCard icon={<SiFastapi size={40} color="#009688"/>} name="REST APIs" level="Advanced"/>
      <SkillCard icon={<SiMicrogenetics size={40} color="#4F46E5"/>} name="Microservices" level="Intermediate"/>

    </div>

    {/* ─────────────── DATABASE ─────────────── */}
    <h3 className="text-2xl font-bold mb-6 text-center">Database</h3>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

      <SkillCard icon={<SiMongodb size={40} color="#4DB33D"/>} name="MongoDB" level="Intermediate"/>
      <SkillCard icon={<SiMysql size={40} color="#00758F"/>} name="MySQL" level="Advanced"/>
      <SkillCard icon={<SiPostgresql size={40} color="#336791"/>} name="PostgreSQL" level="Intermediate"/>
      <SkillCard icon={<SiRedis size={40} color="#D92C20"/>} name="Redis" level="Intermediate"/>

    </div>

    {/* ─────────────── DEVOPS ─────────────── */}
    <h3 className="text-2xl font-bold mb-6 text-center">DevOps</h3>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

      <SkillCard icon={<SiDocker size={40} color="#2496ED"/>} name="Docker" level="Beginner"/>
      <SkillCard icon={<SiGit size={40} color="#F05133"/>} name="Git" level="Expert"/>
      <SkillCard icon={<SiJenkins size={40} color="#D33833"/>} name="Jenkins" level="Intermediate"/>
      <SkillCard icon={<SiPostman size={40} color="#FF6C37"/>} name="Postman" level="Advanced"/>
      <SkillCard icon={<SiKubernetes size={40} color="#326CE5"/>} name="CI/CD" level="Intermediate"/>

    </div>
  </div>
</section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Featured <span className={t.accent}>Projects</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Build-Linux',
                desc: 'Tooling/automation project to build a Linux system (kernel + packages) from source.',
                longDesc: `A tooling and automation project aimed at simplifying the process of building a Linux system (kernel + packages) from source. The scripts automate downloading sources, compiling the kernel and packages, applying configuration templates/patches, and assembling a usable filesystem or installable image. This project is useful for custom distributions, reproducible builds, or learning how Linux components are assembled from source.`,
                features: [
                  'Automated sequence: download, compile kernel & packages, configure modules',
                  'Configurable build options: kernel options and package selections',
                  'Build logging and error handling for easier debugging',
                  'Support for creating a filesystem or installable image after build',
                  'Makefile-driven orchestration and modular build scripts'
                ],
                role: 'Tooling / Build Engineer',
                challenges: [
                  'Coordinating large multi-step builds and dependencies',
                  'Handling diverse toolchains and platform-specific build quirks',
                  'Providing robust error handling and resumable steps for long builds',
                  'Documenting configuration and reproducible build steps'
                ],
                tech: ['Bash / Shell scripting', 'Makefiles', 'GNU toolchain (gcc, make)', 'kernel build tools', 'tar/zip', 'optional package managers'],
                image: '/build-linux.jpeg',
                screenshots: [
                  '/build-linux.jpeg'
                ],
                githubLink: 'https://github.com/shaileshjukaria/Build-Linux.git',
                liveLink: '#'
              },
              {
                title: 'PersonalSpace',
                desc: 'Open-source self-hosted cloud storage web app for uploading, managing and sharing files and folders.',
                longDesc: `PersonalSpace is an open-source cloud file storage web app (similar to Google Drive). It allows users to upload, store, manage, download, and share files and folders securely via a browser — effectively letting you host your own “cloud storage” service. Users can self-host the application on their server or any trusted platform, then access storage through a web interface. The app supports both file and folder uploads/downloads (folders are zipped automatically on download), media previews (image/video viewer & gallery), thumbnails for fast browsing, and file/folder sharing. The project focuses on data ownership and privacy — users retain control over their files instead of relying on third-party providers.`,
                features: [
                  'File upload / download (single files)',
                  'Folder upload / download (folders ZIP automatically)',
                  'Support for multiple storage backends (filesystem or S3-compatible object storage)',
                  'Media support: image/video preview, gallery and thumbnails',
                  'Thumbnails generation for faster browsing',
                  'File and folder sharing (link-based / permissioned)',
                  'Mobile-friendly UI and PWA support',
                  'Optional AES-256 encryption for stored files',
                  'JWT-based auth (access + refresh tokens)'
                ],
                role: 'Full-Stack Developer & DevOps',
                challenges: [
                  'Designing metadata model to represent files, folders and versions',
                  'Handling chunked uploads and resumable transfers for large files',
                  'Supporting multiple storage backends while keeping a single API surface',
                  'Generating thumbnails and efficient media previews',
                  'Implementing secure sharing workflows and optional encryption'
                ],
                tech: ['React', 'TypeScript', 'Vite', 'Node.js', 'Express', 'MongoDB', 'Docker', 'S3-compatible storage', 'JWT', 'AES-256', 'PWA'],
                image: '/personalspace.jpeg',
                screenshots: [
                  '/personalspace.jpeg'
                ],
                githubLink: 'https://github.com/shaileshjukaria/personalspace',
                liveLink: '#'
              },
              {
                title: 'Anime-TV-Series-Tracker',
                desc: 'A web application to track watched anime and TV series — add shows, mark episodes, and manage watch status.',
                longDesc: `A web application to help users track their watched anime and TV series — allowing them to add new shows, mark episodes as watched, maintain history/status (watching / completed / plan-to-watch), and optionally add ratings or notes. The app acts as a personal tracker/media library to organize shows, view progress, and filter or sort by status. The project demonstrates full-stack development including frontend state management, backend CRUD APIs, and persistent storage for user data.`,
                features: [
                  'User registration & login (multi-user support)',
                  'Add / remove series with metadata (title, episodes, description)',
                  'Mark episodes watched and update progress automatically',
                  'Series status: watching / completed / on-hold / plan-to-watch',
                  'View history with sorting and filtering by status',
                  'Optional ratings and per-show notes/comments',
                  'Responsive UI for mobile and desktop'
                ],
                role: 'Full-Stack Developer',
                challenges: [
                  'Designing a flexible data model to store shows, episodes and user progress',
                  'Handling asynchronous database calls and keeping UI state in sync',
                  'Dealing with inconsistent or partial data from public APIs',
                  'Implementing efficient filtering/sorting for large watchlists'
                ],
                tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'REST APIs'],
                image: '/anime-tracker-poster.jpeg',
                screenshots: [
                  '/anime-tracker-poster.jpeg'
                ],
                githubLink: 'https://github.com/shaileshjukaria/Anime-TV-Series-Tracker',
                liveLink: '#'
              },
              {
                title: 'Imaginova - AI Image Generator',
                desc: 'Text-to-image generation app with MERN stack. Input text prompts and receive AI-generated images.',
                longDesc: 'Imaginova is an ongoing project that combines full-stack web development with AI integration. Users input text prompts and receive AI-generated images through a seamless interface. I built this to understand how to connect frontend, backend, database, and external AI services end-to-end. The app handles asynchronous API calls, manages user authentication, stores image history with metadata, and provides a responsive experience across devices. Each request goes through the full stack�from the React UI to the Node.js backend, then to MongoDB for storage, and finally to the AI generation service.',
                features: ['User authentication and session management', 'Text prompt input UI', 'AI image generation via external API', 'Image gallery and history with metadata', 'Download generated images', 'Responsive design across devices', 'Loading states and error handling'],
                role: 'Full-Stack Developer',
                challenges: ['Integrating external AI service APIs', 'Managing asynchronous requests and latency', 'Designing intuitive UX for image generation workflow', 'Storing and retrieving user-generated image metadata'],
                tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'AI API Integration', 'Authentication (Token/Session)'],
                image: '/imaginova.jpeg',
                screenshots: [
                  '/imaginova.jpeg'
                ],
                githubLink: 'https://github.com/shaileshjukaria/Imaginova',
                liveLink: '#'
              }
            ].map((project, idx) => (
              <div key={idx} className={`${t.cardBg} backdrop-blur-sm border ${t.border} rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-all cursor-pointer`} onClick={() => { setSelectedProject(project); setModalImage(project.image); }}>
                <div className="aspect-video overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className={`${t.textSecondary} mb-4 text-sm`}>{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className={`px-2 py-1 bg-orange-500/10 ${t.accent} rounded text-xs`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={(e) => { e.stopPropagation(); setSelectedProject(project); setModalImage(project.image); }}
                    className={`${t.accent} hover:underline flex items-center gap-1 text-sm`}>
                    View Details <ExternalLink size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Get In <span className={t.accent}>Touch</span>
          </h2>
          <p className={`text-center ${t.textSecondary} mb-12 text-lg`}>
            Open to internships, freelance, and full-time opportunities
          </p>
          <div className={`${t.cardBg} backdrop-blur-sm border ${t.border} rounded-2xl p-8 shadow-xl`}>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className={`${t.cardBg} border ${t.border} rounded-xl p-4`}>
                  <Mail className={`${t.accent} mb-2`} size={24} />
                  <a href="mailto:shailesh07jukaria@gmail.com" className={`${t.textSecondary} hover:${t.accent.replace('text-', 'text-')}`}>
                    shailesh07jukaria@gmail.com
                  </a>
                </div>
                <div className={`${t.cardBg} border ${t.border} rounded-xl p-4`}>
                  <Phone className={`${t.accent} mb-2`} size={24} />
                  <a href="tel:+919368787282" className={`${t.textSecondary} hover:${t.accent.replace('text-', 'text-')}`}>
                    +91 9368787282
                  </a>
                </div>
                <div className={`${t.cardBg} border ${t.border} rounded-xl p-4`}>
                  <MapPin className={`${t.accent} mb-2`} size={24} />
                  <span className={t.textSecondary}>Champawat, Uttarakhand</span>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <a href="mailto:shailesh07jukaria@gmail.com"
                  className={`w-full px-8 py-4 ${t.buttonBg} ${t.buttonHover} rounded-lg font-semibold transition-all hover:scale-105 shadow-lg flex items-center justify-center gap-2 text-white mb-4`}>
                  <Send size={20} />
                  Send Email
                </a>
                <div className="flex gap-4 justify-center">
                  <a href="https://github.com/shaileshjukaria" target="_blank" rel="noopener noreferrer"
                    className={`p-3 ${t.cardBg} border ${t.border} rounded-lg hover:scale-110 transition-all`}>
                    <Github size={24} />
                  </a>
                  <a href="https://www.linkedin.com/in/shailesh-jukaria-1b6998361" target="_blank" rel="noopener noreferrer"
                    className={`p-3 ${t.cardBg} border ${t.border} rounded-lg hover:scale-110 transition-all`}>
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center px-6 py-12 backdrop-blur-sm bg-black/60 animate-fadeIn" 
          onClick={() => { setSelectedProject(null); setModalImage(null); }}
        >
          <div 
            className={`${t.cardBg} backdrop-blur-xl border ${t.border} rounded-2xl p-8 max-w-5xl w-full shadow-2xl overflow-y-auto max-h-[90vh] animate-slideUp`} 
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex justify-between items-start mb-6 sticky top-0 bg-inherit z-10 pb-4 border-b border-purple-500/20">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
                  {selectedProject.title}
                </h2>
                <p className={`${t.textSecondary} text-sm`}>{selectedProject.role}</p>
              </div>
              <button 
                onClick={() => { setSelectedProject(null); setModalImage(null); }} 
                className={`${t.textSecondary} hover:${t.accent.replace('text-', 'text-')} transition-all hover:rotate-90 duration-300`}
              >
                <X size={28} />
              </button>
            </div>

            {/* Main Image */}
            <div className="aspect-video overflow-hidden rounded-xl mb-6 border border-purple-500/20 shadow-lg group">
              <img 
                src={modalImage || selectedProject.image} 
                alt={selectedProject.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
            </div>

            {/* Description */}
            <div className={`${t.cardBg} border ${t.border} rounded-xl p-6 mb-6`}>
              <h3 className={`text-xl font-semibold mb-3 ${t.accent}`}>About This Project</h3>
              <p className={`${t.textSecondary} text-base leading-relaxed`}>
                {selectedProject.longDesc || selectedProject.desc}
              </p>
            </div>

            {/* Key Information Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Features */}
              <div className={`${t.cardBg} border ${t.border} rounded-xl p-6`}>
                <h3 className={`text-lg font-semibold mb-4 flex items-center gap-2 ${t.accent}`}>
                  <Code2 size={20} />
                  Key Features
                </h3>
                <ul className="space-y-2">
                  {(selectedProject.features || []).map((f, idx) => (
                    <li key={f} className={`${t.textSecondary} flex items-start gap-2 animate-fadeIn`} style={{animationDelay: `${idx * 0.1}s`}}>
                      <span className={t.accent}>•</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Challenges */}
              <div className={`${t.cardBg} border ${t.border} rounded-xl p-6`}>
                <h3 className={`text-lg font-semibold mb-4 flex items-center gap-2 ${t.accent}`}>
                  <Cpu size={20} />
                  Technical Challenges
                </h3>
                <ul className="space-y-2">
                  {(selectedProject.challenges || []).map((c, idx) => (
                    <li key={c} className={`${t.textSecondary} flex items-start gap-2 animate-fadeIn`} style={{animationDelay: `${idx * 0.1}s`}}>
                      <span className={t.accent}>•</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Technologies */}
            <div className={`${t.cardBg} border ${t.border} rounded-xl p-6 mb-6`}>
              <h3 className={`text-lg font-semibold mb-4 flex items-center gap-2 ${t.accent}`}>
                <Terminal size={20} />
                Technology Stack
              </h3>
              <div className="flex flex-wrap gap-3">
                {selectedProject.tech.map((tech, idx) => (
                  <span 
                    key={tech} 
                    className={`px-4 py-2 bg-gradient-to-r from-purple-500/10 to-orange-500/10 ${t.accent} rounded-lg text-sm border border-purple-500/20 hover:scale-105 transition-transform animate-fadeIn`}
                    style={{animationDelay: `${idx * 0.05}s`}}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Screenshots */}
            {selectedProject.screenshots && selectedProject.screenshots.length > 1 && (
              <div className={`${t.cardBg} border ${t.border} rounded-xl p-6 mb-6`}>
                <h3 className={`text-lg font-semibold mb-4 flex items-center gap-2 ${t.accent}`}>
                  <Globe size={20} />
                  Project Screenshots
                </h3>
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {selectedProject.screenshots.map((shot, i) => (
                    <button 
                      key={i} 
                      onClick={() => setModalImage(shot)} 
                      className={`w-40 h-24 flex-shrink-0 rounded-lg overflow-hidden border-2 ${modalImage === shot ? 'border-orange-500' : 'border-purple-500/20'} hover:border-orange-500 transition-all hover:scale-105`}
                    >
                      <img 
                        src={shot} 
                        alt={`${selectedProject.title} screenshot ${i + 1}`} 
                        className="w-full h-full object-cover" 
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <a 
                href={selectedProject.githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-6 py-3 ${t.buttonBg} ${t.buttonHover} text-white rounded-lg font-semibold transition-all hover:scale-105 shadow-lg`}
              >
                <Github size={20} />
                View Source Code
              </a>
              {selectedProject.liveLink && selectedProject.liveLink !== '#' && (
                <a 
                  href={selectedProject.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-6 py-3 border-2 border-purple-500 ${t.textSecondary} rounded-lg font-semibold transition-all hover:bg-purple-500/10 hover:scale-105`}
                >
                  <ExternalLink size={20} />
                  Visit Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Resume Modal */}
      {showResume && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-6 py-12 backdrop-blur-sm bg-black/40" onClick={() => setShowResume(false)}>
          <div className={`${t.cardBg} backdrop-blur-sm border ${t.border} rounded-2xl p-8 max-w-4xl w-full h-[90vh] flex flex-col shadow-2xl`} onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">My Resume</h2>
              <button onClick={() => setShowResume(false)} className={`${t.textSecondary} hover:${t.accent.replace('text-', 'text-')} transition-colors`}>
                <X size={28} />
              </button>
            </div>
            
            <iframe 
              src="/Shailesh-FSWD.pdf" 
              className="flex-1 rounded-lg border border-purple-500/20 w-full"
              title="Resume"
            />
            
            <div className="mt-6 flex gap-4">
              <a
                href="/Shailesh-FSWD.pdf"
                download
                className={`flex-1 px-6 py-3 ${t.buttonBg} ${t.buttonHover} rounded-lg font-semibold transition-all hover:scale-105 text-center`}
              >
                Download PDF
              </a>
              <button
                onClick={() => setShowResume(false)}
                className={`px-6 py-3 border-2 border-purple-500 ${t.textSecondary} rounded-lg font-semibold transition-all hover:bg-purple-500/10`}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className={`py-8 px-6 border-t ${t.border}`}>
        <div className="max-w-6xl mx-auto text-center">
          <p className={t.textSecondary}>© 2025 Shailesh Jukaria. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}











