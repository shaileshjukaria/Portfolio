import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, MapPin, Phone, ExternalLink, Send, Moon, Sun, Code2, Database, Server, Cpu, Globe, Terminal } from 'lucide-react';

// Main App Component
export default function Portfolio() {
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
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

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
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

  return (
    <div className={`${t.bg} ${t.text} min-h-screen transition-colors duration-500`}>
      {/* Navbar */}
      <nav className={`fixed w-full z-50 ${t.cardBg} backdrop-blur-xl border-b ${t.border} transition-colors duration-500`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">
              <span className={t.accent}>{'<'}</span>
              <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">SJ</span>
              <span className={t.accent}>{'/>'}</span>
            </div>

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
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Technical <span className={t.accent}>Skills</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Frontend', icon: <Code2 size={32} />, skills: ['React.js', 'Angular', 'JavaScript', 'TypeScript', 'Tailwind CSS'] },
              { title: 'Backend', icon: <Server size={32} />, skills: ['Node.js', 'Express.js', 'RESTful APIs', 'Microservices', 'Python'] },
              { title: 'Database', icon: <Database size={32} />, skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Redis', 'Query Optimization'] },
              { title: 'DevOps', icon: <Terminal size={32} />, skills: ['Git', 'Docker', 'Jenkins', 'CI/CD', 'Postman'] }
            ].map((category, idx) => (
              <div key={idx} className={`${t.cardBg} backdrop-blur-sm border ${t.border} rounded-2xl p-6 shadow-xl hover:scale-105 transition-all`}>
                <div className={`${t.accent} mb-4`}>{category.icon}</div>
                <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div key={skill} className={`${t.textSecondary} text-sm`}>• {skill}</div>
                  ))}
                </div>
              </div>
            ))}
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
                title: 'E-commerce Platform',
                desc: 'Full-stack e-commerce with cart, checkout, auth, and order management',
                tech: ['React', 'Node.js', 'MongoDB', 'Express'],
                image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
                githubLink: 'https://github.com/shaileshjukaria/ecommerce-platform'
              },
              {
                title: 'Cloud Storage App',
                desc: 'Secure file storage with role-based access control',
                tech: ['React', 'Node.js', 'MongoDB', 'AWS S3'],
                image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=600&fit=crop',
                githubLink: 'https://github.com/shaileshjukaria/cloud-storage'
              },
              {
                title: 'Anime Tracker',
                desc: 'Browse and track anime with public APIs integration',
                tech: ['React', 'REST APIs', 'Node.js', 'MongoDB'],
                image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&h=600&fit=crop',
                githubLink: 'https://github.com/shaileshjukaria/anime-tracker'
              }
            ].map((project, idx) => (
              <div key={idx} className={`${t.cardBg} backdrop-blur-sm border ${t.border} rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-all cursor-pointer`} onClick={() => setSelectedProject(project)}>
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
                    onClick={(e) => { e.stopPropagation(); setSelectedProject(project); }}
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
        <div className="fixed inset-0 z-50 flex items-center justify-center px-6 py-12 backdrop-blur-sm bg-black/40" onClick={() => setSelectedProject(null)}>
          <div className={`${t.cardBg} backdrop-blur-sm border ${t.border} rounded-2xl p-8 max-w-2xl w-full shadow-2xl`} onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-3xl font-bold">{selectedProject.title}</h2>
              <button onClick={() => setSelectedProject(null)} className={`${t.textSecondary} hover:${t.accent.replace('text-', 'text-')} transition-colors`}>
                <X size={28} />
              </button>
            </div>
            
            <div className="aspect-video overflow-hidden rounded-xl mb-6">
              <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
            </div>
            
            <p className={`${t.textSecondary} text-lg mb-6 leading-relaxed`}>{selectedProject.desc}</p>
            
            <div className="mb-8">
              <h3 className="font-semibold mb-3">Technologies Used:</h3>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map((tech) => (
                  <span key={tech} className={`px-3 py-1 bg-orange-500/10 ${t.accent} rounded-full text-sm border border-orange-500/20`}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-6 py-3 ${t.buttonBg} ${t.buttonHover} rounded-lg font-semibold transition-all hover:scale-105`}>
              <Github size={20} />
              View on GitHub
            </a>
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