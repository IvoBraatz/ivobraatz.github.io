'use client'

import { useState, useEffect } from 'react'
import './Projects.scss'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      category: 'fullstack',
      description: 'Plataforma completa de e-commerce com React, Node.js e PostgreSQL. Inclui sistema de pagamentos, gestão de estoque e painel administrativo.',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'Vue.js', 'Node.js', 'PostgreSQL', 'Stripe', 'Docker'],
      link: '#',
      github: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Dashboard Analytics',
      category: 'frontend',
      description: 'Dashboard interativo para análise de dados com gráficos em tempo real, filtros avançados e exportação de relatórios.',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'Vue.js', 'TypeScript', 'D3.js', 'Chart.js', 'Sass'],
      link: '#',
      github: '#',
      featured: true
    },
    {
      id: 3,
      title: 'API RESTful',
      category: 'backend',
      description: 'API robusta para gestão de usuários e autenticação com JWT, rate limiting e documentação automática.',
      image: '/api/placeholder/400/300',
      technologies: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Swagger'],
      link: '#',
      github: '#',
      featured: false
    },
    {
      id: 4,
      title: 'Mobile App',
      category: 'mobile',
      description: 'Aplicativo móvel para delivery com geolocalização, notificações push e integração com APIs de pagamento.',
      image: '/api/placeholder/400/300',
      technologies: ['React Native', 'Expo', 'Firebase', 'Maps API', 'Push Notifications'],
      link: '#',
      github: '#',
      featured: true
    },
    {
      id: 5,
      title: 'CMS Personalizado',
      category: 'fullstack',
      description: 'Sistema de gerenciamento de conteúdo com editor WYSIWYG, SEO otimizado e múltiplos temas.',
      image: '/api/placeholder/400/300',
      technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Tailwind CSS', 'AWS'],
      link: '#',
      github: '#',
      featured: false
    },
    {
      id: 6,
      title: 'Landing Page',
      category: 'frontend',
      description: 'Landing page moderna e responsiva com animações suaves, formulário de contato e integração com CRM.',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'Framer Motion', 'Sass', 'Netlify', 'HubSpot'],
      link: '#',
      github: '#',
      featured: false
    }
  ]

  const [filteredProjects, setFilteredProjects] = useState(projects)

  const filters = [
    { id: 'all', label: 'Todos' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'mobile', label: 'Mobile' }
  ]

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeFilter))
    }
  }, [activeFilter])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Exibir apenas os 3 primeiros projetos filtrados
  const displayedProjects = filteredProjects.slice(0, 3)

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="projects__header">
          <h2 className="section-title">Projetos em Destaque</h2>
          <p className="section-subtitle">
            Soluções digitais que transformam ideias em realidade
          </p>
        </div>

        {/* Filtros */}
        <div className="projects__filters">
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`projects__filter ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Grid de Projetos */}
        <div className="projects__grid">
          {displayedProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="projects__card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="projects__card-image">
                <div className="projects__card-overlay">
                  <div className="projects__card-actions">
                    <a href={project.link} className="projects__card-link" target="_blank" rel="noopener noreferrer">
                      <span>Ver Projeto</span>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15,3 21,3 21,9"/>
                        <line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                    </a>
                    <a href={project.github} className="projects__card-github" target="_blank" rel="noopener noreferrer">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="projects__card-placeholder">
                  <div className="projects__card-placeholder-icon">💻</div>
                </div>
              </div>
              <div className="projects__card-content">
                <div className="projects__card-header">
                  <h3 className="projects__card-title">{project.title}</h3>
                </div>
                <p className="projects__card-description">{project.description}</p>
                <div className="projects__card-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="projects__card-tech">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="projects__cta">
          <p>Interessado em trabalhar juntos?</p>
          <button 
            onClick={() => scrollToSection('contact')}
            className="btn btn--primary"
          >
            Vamos Conversar
          </button>
        </div>
      </div>
    </section>
  )
}

export default Projects 