'use client'

import { useState, useEffect, useRef } from 'react'
import { 
  SiHtml5, SiCss3, SiJavascript, SiSass, SiTypescript, SiReact, 
  SiNextdotjs, SiNodedotjs, SiNestjs, SiAmazon, SiDocker, 
  SiRedis, SiRailway, SiVercel, SiGit, SiSharp, SiMysql, 
  SiMongodb, SiPostgresql, SiTailwindcss, SiPrisma, SiGraphql,
  SiFigma, SiLinux, SiNginx, SiPython, SiFlutter, SiVuedotjs
} from 'react-icons/si'
import { 
  FaChevronLeft, 
  FaChevronRight, 
  FaCode, 
  FaServer, 
  FaTools, 
  FaRocket,
  FaPalette,
  FaMobile,
  FaDatabase,
  FaCloud
} from 'react-icons/fa'
import './Skills.scss'
import SectionHeader from '../../app/SectionHeader'
import '../../app/SectionHeader.scss'

interface Technology {
  name: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  color: string
  description: string
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'design' | 'mobile'
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert'
  experience?: string
}

const Skills = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)
  const [marqueeSpeed, setMarqueeSpeed] = useState(1)
  const [statsVisible, setStatsVisible] = useState(false)
  const [selectedTech, setSelectedTech] = useState<Technology | null>(null)
  
  const sectionRef = useRef<HTMLElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const marqueeRef = useRef<HTMLDivElement>(null)

  const technologies: Technology[] = [
    {
      name: 'HTML5',
      icon: SiHtml5,
      color: '#E34F26',
      description: 'Linguagem de marcação semântica para estruturar conteúdo web moderno com acessibilidade',
      category: 'frontend',
      level: 'expert',
      experience: '5+ anos'
    },
    {
      name: 'CSS3',
      icon: SiCss3,
      color: '#1572B6',
      description: 'Linguagem de estilo avançada com Grid, Flexbox, animações e design responsivo',
      category: 'frontend',
      level: 'expert',
      experience: '5+ anos'
    },
    {
      name: 'JavaScript',
      icon: SiJavascript,
      color: '#F7DF1E',
      description: 'Linguagem de programação dinâmica ES6+ para aplicações web interativas',
      category: 'frontend',
      level: 'expert',
      experience: '4+ anos'
    },
    {
      name: 'TypeScript',
      icon: SiTypescript,
      color: '#3178C6',
      description: 'Superset tipado do JavaScript para desenvolvimento robusto e escalável',
      category: 'frontend',
      level: 'advanced',
      experience: '3+ anos'
    },
    {
      name: 'React',
      icon: SiReact,
      color: '#61DAFB',
      description: 'Biblioteca JavaScript para construção de interfaces modernas com hooks e context',
      category: 'frontend',
      level: 'expert',
      experience: '4+ anos'
    },
    {
      name: 'Next.js',
      icon: SiNextdotjs,
      color: '#000000',
      description: 'Framework React full-stack com SSR, SSG e otimizações automáticas',
      category: 'frontend',
      level: 'advanced',
      experience: '2+ anos'
    },
    {
      name: 'Vue.js',
      icon: SiVuedotjs,
      color: '#4FC08D',
      description: 'Framework progressivo para construção de interfaces reativas',
      category: 'frontend',
      level: 'intermediate',
      experience: '1+ ano'
    },
    {
      name: 'Sass',
      icon: SiSass,
      color: '#CC6699',
      description: 'Pré-processador CSS com variáveis, mixins e funções avançadas',
      category: 'frontend',
      level: 'advanced',
      experience: '3+ anos'
    },
    {
      name: 'Tailwind CSS',
      icon: SiTailwindcss,
      color: '#06B6D4',
      description: 'Framework CSS utility-first para desenvolvimento rápido e consistente',
      category: 'frontend',
      level: 'advanced',
      experience: '2+ anos'
    },
    {
      name: 'Flutter',
      icon: SiFlutter,
      color: '#02569B',
      description: 'Framework para desenvolvimento de apps nativos multiplataforma',
      category: 'mobile',
      level: 'intermediate',
      experience: '1+ ano'
    },
    {
      name: 'Node.js',
      icon: SiNodedotjs,
      color: '#339933',
      description: 'Runtime JavaScript para desenvolvimento backend escalável e performático',
      category: 'backend',
      level: 'advanced',
      experience: '3+ anos'
    },
    {
      name: 'NestJS',
      icon: SiNestjs,
      color: '#E0234E',
      description: 'Framework Node.js enterprise com arquitetura modular e TypeScript',
      category: 'backend',
      level: 'intermediate',
      experience: '1+ ano'
    },
    {
      name: 'Python',
      icon: SiPython,
      color: '#3776AB',
      description: 'Linguagem versátil para backend, automação e ciência de dados',
      category: 'backend',
      level: 'intermediate',
      experience: '2+ anos'
    },
    {
      name: 'C#',
      icon: SiSharp,
      color: '#239120',
      description: 'Linguagem orientada a objetos para desenvolvimento .NET robusto',
      category: 'backend',
      level: 'intermediate',
      experience: '2+ anos'
    },
    {
      name: 'GraphQL',
      icon: SiGraphql,
      color: '#E10098',
      description: 'Query language para APIs flexíveis com tipagem forte',
      category: 'backend',
      level: 'intermediate',
      experience: '1+ ano'
    },
    {
      name: 'MySQL',
      icon: SiMysql,
      color: '#4479A1',
      description: 'Sistema de gerenciamento de banco relacional confiável',
      category: 'database',
      level: 'advanced',
      experience: '3+ anos'
    },
    {
      name: 'MongoDB',
      icon: SiMongodb,
      color: '#47A248',
      description: 'Banco NoSQL orientado a documentos para dados flexíveis',
      category: 'database',
      level: 'intermediate',
      experience: '2+ anos'
    },
    {
      name: 'Prisma',
      icon: SiPrisma,
      color: '#2D3748',
      description: 'ORM type-safe moderno para Node.js e TypeScript',
      category: 'database',
      level: 'intermediate',
      experience: '1+ ano'
    },
    {
      name: 'Redis',
      icon: SiRedis,
      color: '#DC382D',
      description: 'Banco em memória para cache, sessões e filas',
      category: 'database',
      level: 'intermediate',
      experience: '1+ ano'
    },
    {
      name: 'Docker',
      icon: SiDocker,
      color: '#2496ED',
      description: 'Plataforma de containerização para deploy consistente',
      category: 'devops',
      level: 'intermediate',
      experience: '2+ anos'
    },
    {
      name: 'AWS',
      icon: SiAmazon,
      color: '#FF9900',
      description: 'Plataforma de cloud computing com serviços escaláveis',
      category: 'devops',
      level: 'intermediate',
      experience: '1+ ano'
    },
    {
      name: 'Vercel',
      icon: SiVercel,
      color: '#000000',
      description: 'Plataforma de deploy otimizada para aplicações frontend',
      category: 'devops',
      level: 'advanced',
      experience: '2+ anos'
    },
    {
      name: 'Railway',
      icon: SiRailway,
      color: '#0B0D0E',
      description: 'Plataforma simplificada para deploy de aplicações fullstack',
      category: 'devops',
      level: 'advanced',
      experience: '1+ ano'
    },
    {
      name: 'Git',
      icon: SiGit,
      color: '#F05032',
      description: 'Sistema de controle de versão distribuído essencial',
      category: 'devops',
      level: 'expert',
      experience: '4+ anos'
    },
    {
      name: 'Linux',
      icon: SiLinux,
      color: '#FCC624',
      description: 'Sistema operacional para servidores e desenvolvimento',
      category: 'devops',
      level: 'intermediate',
      experience: '2+ anos'
    },
    {
      name: 'Nginx',
      icon: SiNginx,
      color: '#009639',
      description: 'Servidor web e proxy reverso de alta performance',
      category: 'devops',
      level: 'intermediate',
      experience: '1+ ano'
    },
    {
      name: 'Figma',
      icon: SiFigma,
      color: '#F24E1E',
      description: 'Ferramenta colaborativa de design para UI/UX moderno',
      category: 'design',
      level: 'advanced',
      experience: '3+ anos'
    }
  ]

  const categories = [
    { id: 'all', name: 'Todas', icon: FaCode, color: '#6366f1' },
    { id: 'frontend', name: 'Frontend', icon: FaCode, color: '#61DAFB' },
    { id: 'backend', name: 'Backend', icon: FaServer, color: '#339933' },
    { id: 'database', name: 'Database', icon: FaDatabase, color: '#336791' },
    { id: 'mobile', name: 'Mobile', icon: FaMobile, color: '#02569B' },
    { id: 'devops', name: 'DevOps', icon: FaCloud, color: '#FF9900' },
    { id: 'design', name: 'Design', icon: FaPalette, color: '#F24E1E' }
  ]

  const stats = [
    { number: 28, label: 'Tecnologias', delay: '0.2s', suffix: '+' },
    { number: 5, label: 'Anos de Experiência', delay: '0.4s', suffix: '+' },
    { number: 65, label: 'Projetos Concluídos', delay: '0.6s', suffix: '+' },
    { number: 20, label: 'Clientes Satisfeitos', delay: '0.8s', suffix: '+' }
  ]

  const featuredTechs = technologies.filter(tech => 
    ['JavaScript', 'React', 'Node.js', 'TypeScript', 'Next.js', 'PostgreSQL'].includes(tech.name)
  )

  const filteredTechnologies = activeCategory === 'all' 
    ? technologies 
    : technologies.filter(tech => tech.category === activeCategory)

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredTechs.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [featuredTechs.length])

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    return () => observer.disconnect()
  }, [])

  // Stats observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStatsVisible(true)
      },
      { threshold: 0.2 }
    )
    if (statsRef.current) observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [])

  // Marquee hover effect
  useEffect(() => {
    const marqueeElement = marqueeRef.current
    if (!marqueeElement) return

    const handleMouseEnter = () => setMarqueeSpeed(0.3)
    const handleMouseLeave = () => setMarqueeSpeed(1)

    marqueeElement.addEventListener('mouseenter', handleMouseEnter)
    marqueeElement.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      marqueeElement.removeEventListener('mouseenter', handleMouseEnter)
      marqueeElement.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredTechs.length) % featuredTechs.length)
  }

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredTechs.length)
  }

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'expert': return '#10b981'
      case 'advanced': return '#3b82f6'
      case 'intermediate': return '#f59e0b'
      case 'beginner': return '#ef4444'
      default: return '#6b7280'
    }
  }

  const getLevelWidth = (level: string) => {
    switch (level) {
      case 'expert': return '95%'
      case 'advanced': return '80%'
      case 'intermediate': return '65%'
      case 'beginner': return '45%'
      default: return '50%'
    }
  }

  return (
    <section className="skills" ref={sectionRef}>
      <div className="skills__background">
        <div className="skills__particles">
          {Array.from({ length: 50 }).map((_, i) => (
            <div 
              key={i} 
              className="skills__particle"
              style={{
                '--delay': `${i * 0.1}s`,
                '--duration': `${3 + (i % 3)}s`,
                '--x': `${Math.random() * 100}%`,
                '--y': `${Math.random() * 100}%`
              } as React.CSSProperties}
            />
          ))}
        </div>
      </div>

      <div className="container">
        <SectionHeader
          title="Minhas"
          highlight="Skills"
          subtitle="Tecnologias e ferramentas que domino para criar experiências digitais excepcionais"
        />

        {/* Enhanced Marquee */}
        <div className="skills__marquee" ref={marqueeRef}>
          <div className="skills__marquee-blur skills__marquee-blur--left"></div>
          <div className="skills__marquee-blur skills__marquee-blur--right"></div>
          <div 
            className="skills__marquee-track"
            style={{ 
              animationDuration: `${30 / marqueeSpeed}s`,
              animationPlayState: hoveredTech ? 'paused' : 'running'
            }}
          >
            {[...technologies, ...technologies].map((tech, idx) => (
              <div 
                key={`${tech.name}-${idx}`}
                className="skills__marquee-item"
                style={{ '--tech-color': tech.color } as React.CSSProperties}
                onMouseEnter={() => setHoveredTech(tech.name)}
                onMouseLeave={() => setHoveredTech(null)}
                onClick={() => setSelectedTech(tech)}
              >
                <div className="skills__marquee-item-icon">
                  <tech.icon />
                </div>
                <span className="skills__marquee-item-name">{tech.name}</span>
                <div className="skills__marquee-item-level">
                  <div 
                    className="skills__marquee-item-level-bar"
                    style={{ 
                      width: getLevelWidth(tech.level),
                      backgroundColor: tech.color 
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Carousel */}
        <div className="skills__carousel">
          <div className="skills__carousel-container">
            <button 
              className="skills__carousel-control skills__carousel-control--prev"
              onClick={handlePrevSlide}
              aria-label="Slide anterior"
            >
              <FaChevronLeft />
            </button>

            <div className="skills__carousel-wrapper">
              {featuredTechs.map((tech, index) => (
                <div
                  key={tech.name}
                  className={`skills__carousel-slide ${index === currentSlide ? 'active' : ''}`}
                  style={{ '--tech-color': tech.color } as React.CSSProperties}
                >
                  <div className="skills__carousel-slide-content">
                    <div className="skills__carousel-slide-icon">
                      <tech.icon />
                      <div className="skills__carousel-slide-glow"></div>
                    </div>
                    <div className="skills__carousel-slide-info">
                      <h3 className="skills__carousel-slide-title text-tech">{tech.name}</h3>
                      <p className="skills__carousel-slide-description text-body">{tech.description}</p>
                      <div className="skills__carousel-slide-meta">
                        <span className={`skills__level-badge ${tech.level}`}>
                          {tech.level}
                        </span>
                      </div>
                      <div className="skills__carousel-slide-progress">
                        <div 
                          className="skills__carousel-slide-progress-bar"
                          style={{ 
                            width: getLevelWidth(tech.level),
                            backgroundColor: tech.color
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button 
              className="skills__carousel-control skills__carousel-control--next"
              onClick={handleNextSlide}
              aria-label="Próximo slide"
            >
              <FaChevronRight />
            </button>
          </div>

          <div className="skills__carousel-indicators">
            {featuredTechs.map((_, index) => (
              <button
                key={index}
                className={`skills__carousel-indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Tech Detail Modal */}
      {selectedTech && (
        <div className="skills__modal" onClick={() => setSelectedTech(null)}>
          <div className="skills__modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="skills__modal-close"
              onClick={() => setSelectedTech(null)}
            >
              ×
            </button>
            <div className="skills__modal-header">
              <div 
                className="skills__modal-icon"
                style={{ color: selectedTech.color }}
              >
                <selectedTech.icon />
              </div>
              <h3 className="skills__modal-title text-tech">{selectedTech.name}</h3>
            </div>
            <div className="skills__modal-body">
              <p className="skills__modal-description text-body">{selectedTech.description}</p>
              <div className="skills__modal-meta">
                <div className="skills__modal-level">
                  <span>Nível:</span>
                  <span className={`skills__level-badge ${selectedTech.level}`}>
                    {selectedTech.level}
                  </span>
                </div>
                {selectedTech.experience && (
                  <div className="skills__modal-experience">
                    <span>Experiência:</span>
                    <span>{selectedTech.experience}</span>
                  </div>
                )}
              </div>
              <div className="skills__modal-progress">
                <div 
                  className="skills__modal-progress-bar"
                  style={{ 
                    width: getLevelWidth(selectedTech.level),
                    backgroundColor: selectedTech.color
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

// Animated Number Component
const AnimatedNumber = ({ value, duration }: { value: number; duration: number }) => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    let start = 0
    const increment = value / (duration / 16)
    
    const timer = setInterval(() => {
      start += increment
      if (start >= value) {
        setCurrent(value)
        clearInterval(timer)
      } else {
        setCurrent(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [value, duration])

  return <>{current}</>
}

export default Skills