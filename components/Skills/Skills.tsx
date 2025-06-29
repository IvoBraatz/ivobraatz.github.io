'use client'

import { useState, useEffect } from 'react'
import { 
  SiHtml5, SiCss3, SiJavascript, SiSass, SiTypescript, SiReact, 
  SiNextdotjs, SiNodedotjs, SiNestjs, SiAmazon, SiDocker, 
  SiRedis, SiRailway, SiVercel, SiGit, SiSharp, SiMysql, 
  SiMongodb, SiPostgresql 
} from 'react-icons/si'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import './Skills.scss'

const Skills = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const technologies = [
    {
      name: 'HTML5',
      icon: SiHtml5,
      color: '#E34F26',
      description: 'Linguagem de marcação para estruturar conteúdo web'
    },
    {
      name: 'CSS3',
      icon: SiCss3,
      color: '#1572B6',
      description: 'Linguagem de estilo para design e layout responsivo'
    },
    {
      name: 'JavaScript',
      icon: SiJavascript,
      color: '#F7DF1E',
      description: 'Linguagem de programação para interatividade web'
    },
    {
      name: 'Sass',
      icon: SiSass,
      color: '#CC6699',
      description: 'Pré-processador CSS para estilos mais eficientes'
    },
    {
      name: 'TypeScript',
      icon: SiTypescript,
      color: '#3178C6',
      description: 'Superset do JavaScript com tipagem estática'
    },
    {
      name: 'React',
      icon: SiReact,
      color: '#61DAFB',
      description: 'Biblioteca JavaScript para interfaces de usuário'
    },
    {
      name: 'Next.js',
      icon: SiNextdotjs,
      color: '#000000',
      description: 'Framework React para aplicações web full-stack'
    },
    {
      name: 'Node.js',
      icon: SiNodedotjs,
      color: '#339933',
      description: 'Runtime JavaScript para desenvolvimento backend'
    },
    {
      name: 'NestJS',
      icon: SiNestjs,
      color: '#E0234E',
      description: 'Framework Node.js para aplicações escaláveis'
    },
    {
      name: 'AWS',
      icon: SiAmazon,
      color: '#FF9900',
      description: 'Plataforma de computação em nuvem da Amazon'
    },
    {
      name: 'Docker',
      icon: SiDocker,
      color: '#2496ED',
      description: 'Plataforma para containerização de aplicações'
    },
    {
      name: 'Redis',
      icon: SiRedis,
      color: '#DC382D',
      description: 'Banco de dados em memória para cache e sessões'
    },
    {
      name: 'Railway',
      icon: SiRailway,
      color: '#0B0D0E',
      description: 'Plataforma de deploy e hospedagem'
    },
    {
      name: 'Vercel',
      icon: SiVercel,
      color: '#000000',
      description: 'Plataforma de deploy para aplicações frontend'
    },
    {
      name: 'Git',
      icon: SiGit,
      color: '#F05032',
      description: 'Sistema de controle de versão distribuído'
    },
    {
      name: 'C#',
      icon: SiSharp,
      color: '#239120',
      description: 'Linguagem de programação orientada a objetos'
    },
    {
      name: 'MySQL',
      icon: SiMysql,
      color: '#4479A1',
      description: 'Sistema de gerenciamento de banco de dados relacional'
    },
    {
      name: 'PostgreSQL',
      icon: SiPostgresql,
      color: '#336791',
      description: 'Sistema de banco de dados relacional avançado'
    },
    {
      name: 'MongoDB',
      icon: SiMongodb,
      color: '#47A248',
      description: 'Banco de dados NoSQL orientado a documentos'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % technologies.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [technologies.length])

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="skills__header">
          <h2 className="section-title">Tecnologias & Ferramentas</h2>
          <p className="section-subtitle">
            Stack completa para desenvolvimento Full Stack moderno
          </p>
        </div>

        {/* Marquee Infinito */}
        <div className="skills__marquee">
          <div className="skills__marquee-blur skills__marquee-blur--left" />
          <div className="skills__marquee-blur skills__marquee-blur--right" />
          <div className="skills__marquee-track">
            {[...technologies, ...technologies].map((tech, index) => (
              <div 
                key={index} 
                className="skills__marquee-item fade-in-up"
                style={{ '--tech-color': tech.color, '--delay': `${(index % technologies.length) * 0.07}s` } as React.CSSProperties}
              >
                <tech.icon size={40} />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Carrossel de Tecnologias */}
        <div className="skills__carousel">
          <div className="skills__carousel-container">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className={`skills__carousel-slide${index === currentSlide ? ' active' : ''}`}
                style={{ '--tech-color': tech.color, '--delay': `${index * 0.1}s` } as React.CSSProperties}
              >
                <div className="skills__carousel-icon">
                  <tech.icon size={90} />
                </div>
                <h3 className="skills__carousel-title gradient-text">{tech.name}</h3>
                <p className="skills__carousel-description">{tech.description}</p>
              </div>
            ))}
          </div>

          {/* Indicadores */}
          <div className="skills__carousel-indicators">
            {technologies.map((_, index) => (
              <button
                key={index}
                className={`skills__carousel-indicator ${index === currentSlide ? 'active pulse' : ''}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Controles */}
          <button 
            className="skills__carousel-control skills__carousel-control--prev"
            onClick={() => setCurrentSlide((prev) => (prev - 1 + technologies.length) % technologies.length)}
            aria-label="Slide anterior"
          >
            <FaChevronLeft size={22} />
          </button>
          <button 
            className="skills__carousel-control skills__carousel-control--next"
            onClick={() => setCurrentSlide((prev) => (prev + 1) % technologies.length)}
            aria-label="Próximo slide"
          >
            <FaChevronRight size={22} />
          </button>
        </div>
      </div>

      {/* Animações de Fundo */}
      <div className="skills__background">
        <div className="skills__code-lines">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i} 
              className="skills__code-line"
              style={{
                '--delay': `${i * 0.1}s`,
                '--duration': `${2 + Math.random() * 2}s`
              } as React.CSSProperties}
            />
          ))}
        </div>
        <div className="skills__network">
          {[...Array(15)].map((_, i) => (
            <div 
              key={i} 
              className="skills__network-node"
              style={{
                '--delay': `${Math.random() * 3}s`,
                '--duration': `${3 + Math.random() * 2}s`
              } as React.CSSProperties}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills 