'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import './Hero.scss'

// Hook para animação de digitação
function useTypewriter(lines: string[], delay = 50, lineDelay = 500) {
  const [displayed, setDisplayed] = useState<string[]>([''])
  const [line, setLine] = useState(0)
  const [char, setChar] = useState(0)

  useEffect(() => {
    if (line < lines.length) {
      if (char < lines[line].length) {
        const timeout = setTimeout(() => {
          setDisplayed((prev) => {
            const newLines = [...prev]
            newLines[line] = (newLines[line] || '') + lines[line][char]
            return newLines
          })
          setChar((c) => c + 1)
        }, delay)
        return () => clearTimeout(timeout)
      } else {
        const timeout = setTimeout(() => {
          setDisplayed((prev) => [...prev, ''])
          setLine((l) => l + 1)
          setChar(0)
        }, lineDelay)
        return () => clearTimeout(timeout)
      }
    }
  }, [char, line, lines, delay, lineDelay])

  return displayed.slice(0, lines.length)
}

const Hero = () => {
  const [currentText, setCurrentText] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const [numbersAnimated, setNumbersAnimated] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const animationRefs = useRef<{ [key: string]: number }>({})

  const texts = [
    'Desenvolvedor Full Stack',
    'Especialista em Soluções Digitais',
    'Criador de Experiências Web',
    'Arquiteto de Software'
  ]

  // Animar números - memoizado
  const animateNumbers = useCallback(() => {
    const numberElements = document.querySelectorAll('[data-count]')
    
    numberElements.forEach((element) => {
      const target = parseInt((element as HTMLElement).dataset.count || '0')
      const duration = 2000
      const start = 0
      const increment = target / (duration / 16)
      let current = start
      
      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          current = target
          clearInterval(timer)
        }
        
        const displayValue = Math.floor(current)
        ;(element as HTMLElement).textContent = displayValue === 100 ? '100%' : displayValue.toString()
      }, 16)
    })
  }, [])

  // Texto animado - memoizado para evitar recriação
  const animateText = useCallback(() => {
    const interval = setInterval(() => {
      setIsTyping(false)
      setTimeout(() => {
        setCurrentText((prev) => (prev + 1) % texts.length)
        setIsTyping(true)
      }, 500)
    }, 3000)

    return () => clearInterval(interval)
  }, [texts.length])

  useEffect(() => {
    const cleanup = animateText()
    return cleanup
  }, [animateText])

  // Intersection Observer - memoizado
  const setupIntersectionObserver = useCallback(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
            
            if (!numbersAnimated) {
              setNumbersAnimated(true)
              animateNumbers()
            }
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return observer
  }, [numbersAnimated, animateNumbers])

  useEffect(() => {
    const observer = setupIntersectionObserver()
    return () => observer.disconnect()
  }, [setupIntersectionObserver])

  // Parallax real - memoizado
  const setupParallax = useCallback(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const parallaxElements = document.querySelectorAll('.parallax')
      
      parallaxElements.forEach((element) => {
        const speed = parseFloat((element as HTMLElement).dataset.speed || '0.5')
        const yPos = -(scrolled * speed)
        ;(element as HTMLElement).style.transform = `translateY(${yPos}px)`
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    return setupParallax()
  }, [setupParallax])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Linhas para cada bloco
  const terminalLines = [
    'npm install react',
    'git commit -m "feat: add new feature"',
    'docker build -t app .'
  ]
  const editorLines = [
    "import React from 'react';",
    "import './App.css';",
    '',
    'function App() {',
    '  return (',
    '    <div className=\"App\">',
    '      <h1>Hello World</h1>',
    '    </div>',
    '  );',
    '}'
  ]
  const queryLines = [
    'SELECT * FROM users',
    "WHERE status = 'active'",
    'ORDER BY created_at DESC'
  ]
  const deployLines = ['Build', 'Test', 'Deploy']

  // Hooks de digitação
  const terminalTyped = useTypewriter(terminalLines, 35, 400)
  const editorTyped = useTypewriter(editorLines, 18, 250)
  const queryTyped = useTypewriter(queryLines, 22, 350)
  const deployTyped = useTypewriter(deployLines, 40, 350)

  // Função utilitária para saber se é a linha atual
  function isCurrentLine(typedArr: string[], idx: number, lines: string[]) {
    return idx === typedArr.length - 1 && typedArr.length <= lines.length;
  }

  return (
    <section id="home" className="hero" ref={sectionRef}>
      <div className="hero__background">
        <div className="hero__gradient parallax" data-speed="0.3"></div>
      </div>

      <div className="container">
        <div className="hero__content">
          {/* Badge de apresentação */}
          <div className="hero__badge fade-in-up">
            <span className="hero__badge-icon">🚀</span>
            <span className="hero__badge-text">Disponível para novos projetos</span>
          </div>

          {/* Título principal */}
          <h1 className="hero__title fade-in-up">
            Desenvolvedor Full Stack
            <span className="hero__title-accent"> Criativo</span>
          </h1>

          {/* Subtítulo animado */}
          <div className="hero__subtitle fade-in-up">
            <span className="hero__subtitle-text">
              {texts[currentText]}
            </span>
            <span className={`hero__cursor ${isTyping ? 'typing' : ''}`}>|</span>
          </div>

          {/* Descrição */}
          <p className="hero__description fade-in-up">
            Transformando ideias em experiências digitais excepcionais. 
            Especialista em React, Node.js e tecnologias modernas.
          </p>

          {/* Estatísticas */}
          <div className="hero__stats fade-in-up">
            <div className="hero__stat">
              <div className="hero__stat-number" data-count="22">0</div>
              <div className="hero__stat-label">Anos</div>
            </div>
            <div className="hero__stat">
              <div className="hero__stat-number" data-count="50">0</div>
              <div className="hero__stat-label">Projetos</div>
            </div>
            <div className="hero__stat">
              <div className="hero__stat-number" data-count="100">0</div>
              <div className="hero__stat-label">Comprometimento</div>
            </div>
          </div>

          {/* CTAs */}
          <div className="hero__cta fade-in-up">
            <a 
              href="#projects"
              className="btn btn--primary"
            >
              Ver Projetos
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a 
              href="#contact"
              className="btn btn--secondary"
            >
              Fale Comigo
            </a>
          </div>

          {/* Cards flutuantes */}
          <div className="hero__cards">
            <div className="hero__card hero__card--tech fade-in-up">
              <div className="hero__card-icon">⚡</div>
              <div className="hero__card-content">
                <h4>Performance</h4>
                <p>Código otimizado e rápido</p>
              </div>
            </div>
            
            <div className="hero__card hero__card--design fade-in-up">
              <div className="hero__card-icon">🎨</div>
              <div className="hero__card-content">
                <h4>Design</h4>
                <p>Interfaces modernas e intuitivas</p>
              </div>
            </div>
            
            <div className="hero__card hero__card--innovation fade-in-up">
              <div className="hero__card-icon">🚀</div>
              <div className="hero__card-content">
                <h4>Inovação</h4>
                <p>Tecnologias de ponta</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll fade-in">
        <div className="hero__scroll-text">Scroll</div>
        <div className="hero__scroll-arrow"></div>
      </div>
    </section>
  )
}

export default Hero 