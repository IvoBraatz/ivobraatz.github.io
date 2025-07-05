'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import './Hero.scss'
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa'

// Hook para animação de digitação mais suave
function useTypewriter(text: string, speed = 100) {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text.charAt(currentIndex))
        setCurrentIndex(prev => prev + 1)
      }, speed)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, speed])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)
    return () => clearInterval(cursorInterval)
  }, [])

  return { displayText, showCursor }
}

// Hook para números animados
function useCountUp(target: number, duration = 2000) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      setCount(Math.floor(progress * target))
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    
    requestAnimationFrame(animate)
  }, [isVisible, target, duration])

  return { count, setIsVisible }
}

const profileImages = [
  '/profile-placeholder-1.png',
  '/profile-placeholder-2.png',
  '/profile-placeholder-3.png',
];

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const heroRef = useRef<HTMLElement>(null)
  const codeBlockRef = useRef<HTMLDivElement>(null)



  const roles = [
    'Full Stack Developer',
    'React Specialist',
    'Node.js Expert',
    'UI/UX Enthusiast'
  ]

  const { displayText: typedRole, showCursor } = useTypewriter(roles[currentRole], 80)
  const { count: projectsCount, setIsVisible: setProjectsVisible } = useCountUp(50)
  const { count: experienceCount, setIsVisible: setExperienceVisible } = useCountUp(5)
  const { count: clientsCount, setIsVisible: setClientsVisible } = useCountUp(100)

  // Rotação dos roles
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole(prev => (prev + 1) % roles.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [roles.length])

  // Intersection Observer para animações
  useEffect(() => {
    if (typeof window === 'undefined') return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
            // Trigger counter animations
            setProjectsVisible(true)
            setExperienceVisible(true)
            setClientsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll('.fade-in-up')
    elements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [setProjectsVisible, setExperienceVisible, setClientsVisible])

  // Loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  // Parallax effect para elementos flutuantes
  useEffect(() => {
    if (typeof window === 'undefined') return

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const x = (clientX / window.innerWidth) * 100
      const y = (clientY / window.innerHeight) * 100

      const floatingElements = document.querySelectorAll('.floating-element')
      floatingElements.forEach((element, index) => {
        const speed = (index + 1) * 0.5
        const el = element as HTMLElement
        if (el) {
          el.style.transform = `translate(${x * speed * 0.02}px, ${y * speed * 0.02}px)`
        }
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className={`hero ${isLoaded ? 'loaded' : ''}`} ref={heroRef}>

      <div className="container">
        <div className="hero__content">
          {/* Status Badge */}
          <div className="hero__status fade-in-up">
            <div className="status-indicator"></div>
            <span>Disponível para novos projetos</span>
          </div>

          {/* Main Content */}
          <div className="hero__main">
            <div className="hero__text">
              <h1 className="hero__title text-title-bold fade-in-up">
                Olá, eu sou
                <span className="hero__name"> Ivo Netto</span>
              </h1>

              <div className="hero__subtitle text-subtitle fade-in-up">
                <span className="role-text">{typedRole}</span>
                <span className={`cursor ${showCursor ? 'visible' : ''}`}>|</span>
              </div>

              <p className="hero__description text-body-medium fade-in-up">
                Transformo ideias em experiências digitais excepcionais. 
                Especializado em React, Node.js e tecnologias modernas, 
                criando soluções que fazem a diferença.
              </p>

              {/* CTA Buttons */}
              <div className="hero__actions fade-in-up">
                <a href="#projects" className="btn btn--primary text-cta">
                  <span>Ver Projetos</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
                <a href="#contact" className="btn btn--outline text-cta">
                  <span>Fale Comigo</span>
                </a>
              </div>

              {/* Stats */}
              <div className="hero__stats fade-in-up">
                <div className="stat">
                  <div className="stat__number text-tech">{projectsCount}+</div>
                  <div className="stat__label text-subtitle">Projetos</div>
                </div>
                <div className="stat">
                  <div className="stat__number text-tech">{experienceCount}+</div>
                  <div className="stat__label text-subtitle">Anos</div>
                </div>
                <div className="stat">
                  <div className="stat__number text-tech">{clientsCount}%</div>
                  <div className="stat__label text-subtitle">Satisfação</div>
                </div>
              </div>
            </div>

            {/* Code Block */}
            <div className="hero__visual fade-in-up">
              <aside className="about__profile-card">
                <div className="about__profile-header">
                  <div className="about__profile-avatar-carousel">
                    <img
                      src={profileImages && profileImages[0] ? profileImages[0] : '/profile-placeholder-1.png'}
                      alt="Foto de perfil"
                      className="about__profile-avatar-img"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = '/profile-placeholder-1.png'
                      }}
                    />
                  </div>
                  <h3 className="text-title">Ivo Netto</h3>
                  <p className="about__profile-role text-subtitle">Full Stack Developer</p>
                </div>
                <div className="about__profile-contact">
                  <div className="about__profile-contact-item text-body">
                    <FaEnvelope /> ivo@netto.codes
                  </div>
                  <div className="about__profile-contact-item text-body">
                    <FaMapMarkerAlt /> Parobé, RS - Brasil
                  </div>
                  <div className="about__profile-socials">
                    <a href="https://github.com/ivonetto" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                    <a href="https://linkedin.com/in/ivonetto" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                  </div>
                </div>
                <a href="/cv.pdf" className="about__cv-btn text-cta">
                  <FaDownload /> Download CV
                </a>
              </aside>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="hero__floating">
        <div className="floating-element floating-element--1">
          <div className="floating-icon">⚡</div>
        </div>
        <div className="floating-element floating-element--2">
          <div className="floating-icon">🚀</div>
        </div>
        <div className="floating-element floating-element--3">
          <div className="floating-icon">💡</div>
        </div>
        <div className="floating-element floating-element--4">
          <div className="floating-icon">🎯</div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero__scroll fade-in">
        <div className="scroll-text text-body">Scroll para explorar</div>
        <div className="scroll-arrow">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Hero