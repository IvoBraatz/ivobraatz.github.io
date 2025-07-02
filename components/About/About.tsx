'use client'

import { FaCode, FaRocket, FaUserCheck, FaRegCopy, FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa'
import { useEffect, useRef, useState } from 'react'
import './About.scss'

const About = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const [copied, setCopied] = useState(false)
  const [activeSkill, setActiveSkill] = useState<number | null>(null)
  
  const codeString = `class IvoNetto {
  constructor() {
    this.name = 'Ivo Netto';
    this.age = 22;
    this.location = 'Parobé, RS - Brasil';
    this.role = 'Full Stack Developer';
    this.passion = 'Technology & Innovation';
    this.experience = '3+ years';
  }

  async develop() {
    const requirements = await this.analyze();
    const architecture = await this.design(requirements);
    const solution = await this.implement(architecture);
    return this.deploy(solution);
  }

  get techStack() {
    return {
      frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      backend: ['Node.js', 'Express', 'Python', 'PostgreSQL'],
      cloud: ['AWS', 'Docker', 'Vercel', 'MongoDB'],
      tools: ['Git', 'VS Code', 'Figma', 'Jest']
    };
  }

  get principles() {
    return [
      'Clean Code',
      'SOLID Principles', 
      'Performance First',
      'User Experience'
    ];
  }
}

const developer = new IvoNetto();
console.log('Building the future... 🚀');
developer.develop();`

  const skills = [
    {
      category: 'Frontend',
      items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'SCSS', 'JavaScript'],
      color: '#61DAFB',
      icon: '⚛️'
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB', 'REST APIs'],
      color: '#68D391',
      icon: '🗄️'
    },
    {
      category: 'DevOps & Tools',
      items: ['AWS', 'Docker', 'Git', 'Vercel', 'VS Code', 'Linux'],
      color: '#F6AD55',
      icon: '⚙️'
    },
    {
      category: 'Design & UX',
      items: ['Figma', 'UI/UX Design', 'Responsive Design', 'Animations', 'Prototyping'],
      color: '#B794F6',
      icon: '🎨'
    }
  ]

  const stats = [
    { label: 'Anos de Experiência', value: '3+', suffix: '' },
    { label: 'Projetos Concluídos', value: '50', suffix: '+' },
    { label: 'Tecnologias Dominadas', value: '20', suffix: '+' },
    { label: 'Satisfação do Cliente', value: '100', suffix: '%' }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      },
      { threshold: 0.1 }
    )
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
      const elements = sectionRef.current.querySelectorAll('.animate-on-scroll')
      elements.forEach(el => observer.observe(el))
    }
    
    return () => observer.disconnect()
  }, [])

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const downloadCV = () => {
    // Simular download do CV
    console.log('Downloading CV...')
  }

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="container">
        <div className="about__content">
          {/* Header */}
          <div className="about__header animate-on-scroll">
            <h2 className="section-title">Sobre Mim</h2>
            <p className="section-subtitle">
              Desenvolvedor Full Stack apaixonado por criar soluções digitais que fazem a diferença
            </p>
          </div>

          {/* Main Content */}
          <div className="about__main">
            {/* Profile Section */}
            <div className="about__profile animate-on-scroll">
              <div className="about__profile-card">
                <div className="about__profile-image">
                  <div className="about__profile-avatar">
                    <span>IN</span>
                  </div>
                  <div className="about__profile-status">
                    <span className="about__status-dot"></span>
                    Disponível para projetos
                  </div>
                </div>
                
                <div className="about__profile-info">
                  <h3>Ivo Netto</h3>
                  <p className="about__profile-role">Full Stack Developer</p>
                  <p className="about__profile-location">📍 Parobé, RS - Brasil</p>
                  
                  <div className="about__profile-description">
                    <p>
                      Com mais de 3 anos de experiência, sou especialista em desenvolvimento 
                      Full Stack, criando soluções completas que combinam performance, 
                      usabilidade e código limpo.
                    </p>
                  </div>

                  <div className="about__profile-actions">
                    <button onClick={downloadCV} className="btn btn--primary">
                      <FaDownload size={16} />
                      Download CV
                    </button>
                    <div className="about__social-links">
                      <a href="#" className="about__social-link" title="GitHub">
                        <FaGithub size={20} />
                      </a>
                      <a href="#" className="about__social-link" title="LinkedIn">
                        <FaLinkedin size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Code Display */}
            <div className="about__code animate-on-scroll">
              <div className="about__code-window">
                <div className="about__code-header">
                  <div className="about__code-dots">
                    <span className="about__dot about__dot--red"></span>
                    <span className="about__dot about__dot--yellow"></span>
                    <span className="about__dot about__dot--green"></span>
                  </div>
                  <span className="about__code-title">ivo-netto.js</span>
                  <button 
                    className="about__copy-btn" 
                    onClick={handleCopy} 
                    title="Copiar código"
                  >
                    <FaRegCopy size={16} />
                    {copied && <span className="about__copy-feedback">Copiado!</span>}
                  </button>
                </div>
                <div className="about__code-content">
                  <pre><code>{codeString}</code></pre>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="about__stats animate-on-scroll">
            <div className="about__stats-grid">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="about__stat-card"
                  style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
                >
                  <div className="about__stat-number">
                    {stat.value}<span className="about__stat-suffix">{stat.suffix}</span>
                  </div>
                  <div className="about__stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div className="about__highlights animate-on-scroll">
            <div className="about__highlights-grid">
              <div className="about__highlight">
                <div className="about__highlight-icon about__highlight-icon--primary">
                  <FaCode size={24} />
                </div>
                <div className="about__highlight-content">
                  <h4>Código Limpo</h4>
                  <p>Seguindo as melhores práticas e princípios SOLID para código maintível e escalável</p>
                </div>
              </div>
              
              <div className="about__highlight">
                <div className="about__highlight-icon about__highlight-icon--accent">
                  <FaRocket size={24} />
                </div>
                <div className="about__highlight-content">
                  <h4>Performance</h4>
                  <p>Otimização constante para garantir a melhor experiência do usuário</p>
                </div>
              </div>
              
              <div className="about__highlight">
                <div className="about__highlight-icon about__highlight-icon--success">
                  <FaUserCheck size={24} />
                </div>
                <div className="about__highlight-content">
                  <h4>UX Focus</h4>
                  <p>Interfaces intuitivas que conectam tecnologia e necessidades humanas</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="about__cta animate-on-scroll">
            <h3>Vamos trabalhar juntos?</h3>
            <p>Estou sempre aberto a novos desafios e oportunidades de crescimento</p>
            <a href="#contact" className="btn btn--primary btn--lg">
              Entrar em Contato
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="about__background">
        <div className="about__bg-grid"></div>
        <div className="about__bg-gradient"></div>
      </div>
    </section>
  )
}

export default About