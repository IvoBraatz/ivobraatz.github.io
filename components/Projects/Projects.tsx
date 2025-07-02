'use client'

import { useState, useEffect, useRef } from 'react'
import './Projects.scss'

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
    },
    {
      id: 4,
      title: 'Mobile Food Delivery',
      category: 'mobile',
      description: 'App móvel para delivery com geolocalização e pagamentos integrados.',
      longDescription: 'Aplicativo móvel completo para delivery de comida com geolocalização em tempo real, sistema de pedidos intuitivo, integração com múltiplos gateways de pagamento, notificações push personalizadas, sistema de avaliações e chat em tempo real entre usuário e entregador.',
      image: '/api/placeholder/600/400',
      technologies: ['React Native', 'Expo', 'Firebase', 'Stripe', 'Google Maps', 'Socket.io'],
      link: 'https://app-store-link.com',
      github: 'https://github.com/username/mobile-app',
      featured: true,
      year: '2024',
      status: 'in-progress'
    },
    {
      id: 5,
      title: 'CMS Headless',
      category: 'fullstack',
      description: 'Sistema de gerenciamento de conteúdo moderno com editor visual avançado.',
      longDescription: 'CMS headless personalizado com editor visual drag-and-drop, sistema de templates dinâmicos, otimização SEO automática, versionamento de conteúdo, workflow de aprovação e API GraphQL para máxima flexibilidade na entrega de conteúdo.',
      image: '/api/placeholder/600/400',
      technologies: ['Next.js', 'GraphQL', 'Prisma', 'PostgreSQL', 'Vercel', 'Cloudinary'],
      link: 'https://cms-demo.com',
      github: 'https://github.com/username/cms',
      featured: false,
      year: '2023',
      status: 'completed'
    },
    {
      id: 6,
      title: 'AI-Powered Portfolio',
      category: 'frontend',
      description: 'Portfolio interativo com inteligência artificial e animações 3D.',
      longDescription: 'Portfolio pessoal com integração de IA para chatbot inteligente, animações 3D com Three.js, transições fluidas, modo escuro/claro automático baseado em preferências do usuário, e sistema de analytics personalizado para tracking de engajamento.',
      image: '/api/placeholder/600/400',
      technologies: ['Next.js', 'Three.js', 'OpenAI', 'Framer Motion', 'GSAP', 'TypeScript'],
      link: 'https://ai-portfolio.com',
      github: 'https://github.com/username/ai-portfolio',
      featured: true,
      year: '2024',
      status: 'concept'
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
          <div className="projects__header fade-in-up">
            <div className="projects__header-content">
              <h2 className="section-title">
                Projetos em Destaque
                <span className="projects__title-accent">💎</span>
              </h2>
              <p className="section-subtitle">
                Soluções digitais inovadoras que transformam ideias em realidade, 
                combinando tecnologia de ponta com design excepcional
              </p>
            </div>
          </div>

          {/* Grid de Projetos */}
          <div className="projects__grid">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id} 
                ref={el => projectRefs.current[index] = el}
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
                      <span className="projects__card-badge projects__card-badge--featured">
                        ⭐ Destaque
                      </span>
                    )}
                    <span className={`projects__card-badge projects__card-badge--status projects__card-badge--${project.status}`}>
                      {getStatusIcon(project.status)} {getStatusLabel(project.status)}
                    </span>
                  </div>
                </div>

                <div className="projects__card-content">
                  <div className="projects__card-header">
                    <div className="projects__card-title-section">
                      <h3 className="projects__card-title">{project.title}</h3>
                      <span className="projects__card-year">{project.year}</span>
                    </div>
                  </div>
                  
                  <p className="projects__card-description">{project.description}</p>
                  
                  <div className="projects__card-technologies">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span key={techIndex} className="projects__card-tech">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="projects__card-tech projects__card-tech--more">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="projects__card-footer">
                    <div className="projects__card-links">
                      <a 
                        href={project.link} 
                        className="projects__card-link"
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                          <polyline points="15,3 21,3 21,9"/>
                          <line x1="10" y1="14" x2="21" y2="3"/>
                        </svg>
                      </a>
                      <a 
                        href={project.github} 
                        className="projects__card-link"
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
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
              <h3 className="projects__cta-title">Gostou do que viu?</h3>
              <p className="projects__cta-description">
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
                <h2 className="projects__modal-title">{selectedProject.title}</h2>
                <div className="projects__modal-meta">
                  <span className="projects__modal-year">{selectedProject.year}</span>
                  <span className={`projects__modal-status projects__modal-status--${selectedProject.status}`}>
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
                  <h3>Sobre o Projeto</h3>
                  <p>{selectedProject.longDescription}</p>
                </div>

                <div className="projects__modal-technologies">
                  <h3>Tecnologias Utilizadas</h3>
                  <div className="projects__modal-tech-grid">
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className="projects__modal-tech">
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