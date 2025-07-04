'use client'

import { useState, useEffect, useRef } from 'react'
import './Projects.scss'
import SectionHeader from '../../app/SectionHeader'
import '../../app/SectionHeader.scss'

interface Project {
  id: number
  title: string
  category: string
  description: string
  longDescription: string
  image: string
  technologies: string[]
  link: string
  github: string
  featured: boolean
  year: string
  status: 'completed' | 'in-progress' | 'concept'
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [visibleProjects, setVisibleProjects] = useState<number[]>([])
  const projectRefs = useRef<(HTMLDivElement | null)[]>([])
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'E-commerce Platform',
      category: 'fullstack',
      description: 'Plataforma completa de e-commerce com arquitetura moderna e escalável.',
      longDescription: 'Plataforma de e-commerce completa desenvolvida com React, Node.js e PostgreSQL. Inclui sistema de pagamentos integrado com Stripe, gestão avançada de estoque, painel administrativo com analytics em tempo real, sistema de cupons e promoções, e arquitetura de microserviços para alta escalabilidade.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Docker', 'Redis', 'AWS'],
      link: 'https://ecommerce-demo.com',
      github: 'https://github.com/username/ecommerce',
      featured: true,
      year: '2024',
      status: 'completed'
    },
    {
      id: 2,
      title: 'Dashboard Analytics',
      category: 'frontend',
      description: 'Dashboard interativo com visualizações avançadas e análise de dados em tempo real.',
      longDescription: 'Dashboard completo para análise de dados empresariais com gráficos interativos, filtros avançados, exportação de relatórios personalizados, alertas automáticos e integração com múltiplas fontes de dados. Construído com performance e UX como prioridade.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'TypeScript', 'D3.js', 'Chart.js', 'Framer Motion', 'Tailwind'],
      link: 'https://dashboard-demo.com',
      github: 'https://github.com/username/dashboard',
      featured: true,
      year: '2024',
      status: 'completed'
    },
    {
      id: 3,
      title: 'API RESTful Enterprise',
      category: 'backend',
      description: 'API robusta e escalável com arquitetura hexagonal e documentação completa.',
      longDescription: 'API RESTful enterprise-grade com autenticação JWT, rate limiting inteligente, documentação automática com Swagger, testes automatizados, monitoramento com Prometheus, e deploy automatizado com CI/CD. Arquitetura hexagonal para máxima testabilidade.',
      image: '/api/placeholder/600/400',
      technologies: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Swagger', 'Jest', 'Docker'],
      link: 'https://api-docs.com',
      github: 'https://github.com/username/api',
      featured: false,
      year: '2023',
      status: 'completed'
    }
  ]

  const [filteredProjects, setFilteredProjects] = useState(projects)

  const filters = [
    { id: 'all', label: 'Todos', icon: '🎯' },
    { id: 'fullstack', label: 'Full Stack', icon: '⚡' },
    { id: 'frontend', label: 'Frontend', icon: '🎨' },
    { id: 'backend', label: 'Backend', icon: '🔧' },
    { id: 'mobile', label: 'Mobile', icon: '📱' }
  ]

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeFilter))
    }
  }, [activeFilter])

  // Intersection Observer para animações
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0')
            setVisibleProjects(prev => [...prev, index])
          }
        })
      },
      { threshold: 0.1, rootMargin: '50px' }
    )

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [filteredProjects])

  const openModal = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
    document.body.style.overflow = 'unset'
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return '✅'
      case 'in-progress': return '🚧'
      case 'concept': return '💡'
      default: return '📋'
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'completed': return 'Concluído'
      case 'in-progress': return 'Em Desenvolvimento'
      case 'concept': return 'Conceito'
      default: return 'Status'
    }
  }

  return (
    <>
      <section id="projects" className="projects">
        <div className="container">
          <SectionHeader
            title="Projetos em"
            highlight="Destaque"
            subtitle="Soluções digitais inovadoras que transformam ideias em realidade, combinando tecnologia de ponta com design excepcional"
          />

          {/* Grid de Projetos */}
          <div className="projects__grid">
            {filteredProjects.map((project, index) => (
              index === 0 ? (
                <div 
                  key={project.id} 
                  ref={el => { projectRefs.current[index] = el }}
                  data-index={index}
                  className={`projects__card projects__card--modern ${visibleProjects.includes(index) ? 'animate-in' : ''} ${project.featured ? 'featured' : ''}`}
                  onClick={() => openModal(project)}
                >
                  <div className="projects__card-image">
                    <img src={project.image} alt={project.title} className="projects__card-img" />
                    <div className="projects__card-overlay">
                      <button className="projects__card-action projects__card-action--primary">
                        <span>Ver Detalhes</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M7 17L17 7"/>
                          <path d="M7 7h10v10"/>
                        </svg>
                      </button>
                    </div>
                    <div className={`projects__card-status status-${project.status}`}> 
                      <span>{getStatusIcon(project.status)} {getStatusLabel(project.status)}</span>
                    </div>
                  </div>
                  <div className="projects__card-content">
                    <h3 className="projects__card-title text-title">{project.title}</h3>
                    <p className="projects__card-desc text-body">{project.description}</p>
                    <div className="projects__card-techs">
                      {project.technologies.map(tech => (
                        <span className="projects__card-tech text-tech" key={tech}>{tech}</span>
                      ))}
                    </div>
                    <div className="projects__card-links">
                      <a href={project.link} target="_blank" rel="noopener noreferrer">Demo</a>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                  </div>
                </div>
              ) : (
                <div 
                  key={project.id} 
                  ref={el => { projectRefs.current[index] = el }}
                  data-index={index}
                  className={`projects__card ${visibleProjects.includes(index) ? 'animate-in' : ''} ${project.featured ? 'featured' : ''}`}
                  onClick={() => openModal(project)}
                >
                  <div className="projects__card-image">
                    <div className="projects__card-overlay">
                      <div className="projects__card-actions">
                        <button className="projects__card-action projects__card-action--primary">
                          <span>Ver Detalhes</span>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M7 17L17 7"/>
                            <path d="M7 7h10v10"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="projects__card-placeholder">
                      <div className="projects__card-placeholder-content">
                        <div className="projects__card-placeholder-icon">
                          {project.category === 'fullstack' && '⚡'}
                          {project.category === 'frontend' && '🎨'}
                          {project.category === 'backend' && '🔧'}
                          {project.category === 'mobile' && '📱'}
                        </div>
                        <div className="projects__card-placeholder-text">{project.title}</div>
                      </div>
                    </div>
                    <div className="projects__card-badges">
                      {project.featured && (
                        <span className="projects__card-badge">Destaque</span>
                      )}
                    </div>
                  </div>
                  <div className="projects__card-content">
                    <h3 className="projects__card-title text-title">{project.title}</h3>
                    <p className="projects__card-desc text-body">{project.description}</p>
                  </div>
                </div>
              )
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="projects__empty">
              <div className="projects__empty-icon">🔍</div>
              <h3 className="projects__empty-title">Nenhum projeto encontrado</h3>
              <p className="projects__empty-description">
                Tente selecionar outro filtro para ver mais projetos.
              </p>
            </div>
          )}

          {/* CTA */}
          <div className="projects__cta fade-in-up">
            <div className="projects__cta-content">
              <h3 className="projects__cta-title text-title">Gostou do que viu?</h3>
              <p className="projects__cta-description text-body-medium">
                Vamos criar algo incrível juntos! Entre em contato para discutir seu próximo projeto.
              </p>
              <div className="projects__cta-actions">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="btn btn--primary btn--lg"
                >
                  <span>Vamos Conversar</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7"/>
                    <path d="M7 7h10v10"/>
                  </svg>
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="btn btn--ghost btn--lg"
                >
                  <span>Conhecer Mais</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && selectedProject && (
        <div className="projects__modal" onClick={closeModal}>
          <div className="projects__modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="projects__modal-close" onClick={closeModal}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
            
            <div className="projects__modal-header">
              <div className="projects__modal-title-section">
                <h2 className="projects__modal-title text-title-bold">{selectedProject.title}</h2>
                <div className="projects__modal-meta">
                  <span className="projects__modal-year text-subtitle">{selectedProject.year}</span>
                  <span className={`projects__modal-status projects__modal-status--${selectedProject.status} text-subtitle`}>
                    {getStatusIcon(selectedProject.status)} {getStatusLabel(selectedProject.status)}
                  </span>
                </div>
              </div>
            </div>

            <div className="projects__modal-body">
              <div className="projects__modal-image">
                <div className="projects__modal-placeholder">
                  <div className="projects__modal-placeholder-icon">
                    {selectedProject.category === 'fullstack' && '⚡'}
                    {selectedProject.category === 'frontend' && '🎨'}
                    {selectedProject.category === 'backend' && '🔧'}
                    {selectedProject.category === 'mobile' && '📱'}
                  </div>
                </div>
              </div>

              <div className="projects__modal-info">
                <div className="projects__modal-description">
                  <h3 className="text-subtitle">Sobre o Projeto</h3>
                  <p className="text-body">{selectedProject.longDescription}</p>
                </div>

                <div className="projects__modal-technologies">
                  <h3 className="text-subtitle">Tecnologias Utilizadas</h3>
                  <div className="projects__modal-tech-grid">
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className="projects__modal-tech text-tech">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="projects__modal-actions">
                  <a 
                    href={selectedProject.link} 
                    className="btn btn--primary"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <span>Ver Projeto</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15,3 21,3 21,9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                  </a>
                  <a 
                    href={selectedProject.github} 
                    className="btn btn--outline"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <span>Ver Código</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Projects