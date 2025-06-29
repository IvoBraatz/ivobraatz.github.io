'use client'

import { FaCode, FaRocket, FaUserCheck, FaRegCopy } from 'react-icons/fa'
import { useEffect, useRef, useState } from 'react'
import './About.scss'

const About = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const [copied, setCopied] = useState(false)
  const codeString = `class IvoNetto {
  constructor() {
    this.name = 'Ivo Netto';
    this.age = 22;
    this.role = 'Full Stack Developer';
    this.passion = 'Technology & Innovation';
  }

  async develop() {
    const solution = await this.analyze();
    const code = await this.create(solution);
    return this.deploy(code);
  }

  get skills() {
    return [
      'React', 'Node.js', 'TypeScript',
      'AWS', 'Docker', 'MongoDB'
    ];
  }
}

const ivo = new IvoNetto();
ivo.develop(); // 🚀`

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
    }
    return () => observer.disconnect()
  }, [])

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="container">
        <div className="about__content">
          <div className="about__header fade-in-up">
            <h2 className="section-title">Sobre Mim</h2>
            <p className="section-subtitle">
              Desenvolvedor Full Stack apaixonado por criar soluções digitais inovadoras
            </p>
          </div>

          <div className="about__main">
            <div className="about__text">
              <div className="about__intro fade-in-left">
                <h3>Olá, eu sou o Ivo Netto 👋</h3>
                <p>
                  Com 22 anos e uma paixão inabalável por tecnologia, sou especialista em 
                  desenvolvimento Full Stack, criando soluções digitais que transformam ideias 
                  em experiências excepcionais.
                </p>
              </div>

              <div className="about__highlights">
                <div className="about__highlight fade-in-up" style={{'--delay': '0.1s'} as React.CSSProperties}>
                  <div className="about__highlight-icon" style={{background: '#00FFB3', color: '#1C1C1C'}}>
                    <FaCode size={28} />
                  </div>
                  <div className="about__highlight-content">
                    <h4>Experiência Completa</h4>
                    <p>Desenvolvimento frontend e backend com tecnologias modernas</p>
                  </div>
                </div>
                <div className="about__highlight fade-in-up" style={{'--delay': '0.3s'} as React.CSSProperties}>
                  <div className="about__highlight-icon" style={{background: '#1E40AF', color: '#fff'}}>
                    <FaRocket size={28} />
                  </div>
                  <div className="about__highlight-content">
                    <h4>Performance & Escalabilidade</h4>
                    <p>Aplicações otimizadas para alta performance e crescimento</p>
                  </div>
                </div>
                <div className="about__highlight fade-in-up" style={{'--delay': '0.5s'} as React.CSSProperties}>
                  <div className="about__highlight-icon" style={{background: '#F7DF1E', color: '#222'}}>
                    <FaUserCheck size={28} />
                  </div>
                  <div className="about__highlight-content">
                    <h4>UX/UI Excepcional</h4>
                    <p>Interfaces intuitivas e experiências de usuário memoráveis</p>
                  </div>
                </div>
              </div>

              <div className="about__cta fade-in-up" style={{'--delay': '0.7s'} as React.CSSProperties}>
                <a href="#contact" className="btn btn--primary pulse">
                  Vamos Conversar
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="about__visual fade-in-right">
              <div className="about__code-window">
                <div className="about__code-header">
                  <div className="about__code-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <span className="about__code-title">ivo.js</span>
                  <button className="about__copy-btn" onClick={handleCopy} title="Copiar código" type="button">
                    <FaRegCopy size={18} />
                    {copied && <span className="about__copy-feedback">Copiado!</span>}
                  </button>
                </div>
                <div className="about__code-content typewriter">
                  <pre><code>{codeString}</code></pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="about__background">
        <div className="about__grid">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i} 
              className="about__grid-item"
              style={{
                '--delay': `${i * 0.1}s`,
                '--duration': `${2 + Math.random() * 2}s`
              } as React.CSSProperties}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default About 