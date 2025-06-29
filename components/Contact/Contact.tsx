'use client'

import { useState } from 'react'
import './Contact.scss'
import { SiHtml5, SiCss3, SiJavascript, SiSass, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs, SiNestjs, SiAmazon, SiDocker, SiRedis, SiRailway, SiVercel, SiGit, SiSharp, SiMysql, SiMongodb, SiPostgresql, SiMaildotru, SiLinkedin, SiGithub, SiWhatsapp } from 'react-icons/si'
import { FaUser, FaRegCommentDots } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    company: string;
    skills: string[];
    message: string;
  }>({
    name: '',
    email: '',
    company: '',
    skills: [],
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simular envio do formulário
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        company: '',
        skills: [],
        message: ''
      })
      
      // Reset status após 5 segundos
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    }, 2000)
  }

  const handleSkillToggle = (skillName: string) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.includes(skillName)
        ? prev.skills.filter(s => s !== skillName)
        : [...prev.skills, skillName]
    }))
  }

  const contactInfo = [
    {
      icon: <SiMaildotru size={24} />,
      title: 'Email',
      value: 'ivo@netto.codes',
      link: 'mailto:ivo@netto.codes'
    },
    {
      icon: <SiLinkedin size={24} color="#0A66C2" />,
      title: 'LinkedIn',
      value: 'linkedin.com/in/ivonetto',
      link: 'https://linkedin.com/in/ivonetto'
    },
    {
      icon: <SiGithub size={24} color="#fff" />,
      title: 'GitHub',
      value: 'github.com/ivonetto',
      link: 'https://github.com/ivonetto'
    },
    {
      icon: <SiWhatsapp size={24} color="#25D366" />,
      title: 'WhatsApp',
      value: '+55 (11) 99999-9999',
      link: 'https://wa.me/5511999999999'
    }
  ]

  const skillsList = [
    { name: 'HTML5', icon: SiHtml5 },
    { name: 'CSS3', icon: SiCss3 },
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'Sass', icon: SiSass },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'React', icon: SiReact },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'Node.js', icon: SiNodedotjs },
    { name: 'NestJS', icon: SiNestjs },
    { name: 'AWS', icon: SiAmazon },
    { name: 'Docker', icon: SiDocker },
    { name: 'Redis', icon: SiRedis },
    { name: 'Railway', icon: SiRailway },
    { name: 'Vercel', icon: SiVercel },
    { name: 'Git', icon: SiGit },
    { name: 'C#', icon: SiSharp },
    { name: 'MySQL', icon: SiMysql },
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'PostgreSQL', icon: SiPostgresql },
  ]

  return (
    <section id="contact" className="contact">
      <div className="container" style={{position: 'relative', zIndex: 2}}>
        <div className="contact__header">
          <h2 className="section-title">Vamos Conversar</h2>
          <p className="section-subtitle">
            Pronto para transformar sua ideia em uma solução digital incrível?
          </p>
        </div>

        <div className="contact__content">
          {/* Informações de Contato */}
          <div className="contact__info">
            <div className="contact__info-header">
              <h3>Entre em Contato</h3>
              <p>
                Estou sempre aberto a novos projetos e oportunidades. 
                Vamos discutir como posso ajudar a transformar sua visão em realidade.
              </p>
            </div>

            <div className="contact__info-list">
              {contactInfo.map((info, index) => (
                <a 
                  key={index} 
                  href={info.link} 
                  className="contact__info-item"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="contact__info-item-icon">{info.icon}</div>
                  <div className="contact__info-item-content">
                    <h4>{info.title}</h4>
                    <span>{info.value}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Formulário Moderno */}
          <div className="contact__form-container">
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__form-header">
                <h3>Inicie seu Projeto</h3>
                <p>Preencha o formulário abaixo e eu entrarei em contato em até 24h</p>
              </div>

              <div className="contact__form-grid">
                <div className="contact__form-group">
                  <label htmlFor="name">Nome Completo *</label>
                  <div className="contact__input-wrapper">
                    <span className="contact__input-icon"><FaUser size={18} /></span>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Seu nome completo"
                    />
                  </div>
                </div>

                <div className="contact__form-group">
                  <label htmlFor="email">Email *</label>
                  <div className="contact__input-wrapper">
                    <span className="contact__input-icon"><SiMaildotru size={18} /></span>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div className="contact__form-group">
                  <label htmlFor="company">Empresa</label>
                  <div className="contact__input-wrapper">
                    <span className="contact__input-icon"><SiLinkedin size={18} /></span>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Nome da sua empresa"
                    />
                  </div>
                </div>
              </div>

              <div className="contact__form-group">
                <label htmlFor="message">Mensagem *</label>
                <div className="contact__input-wrapper contact__textarea-wrapper">
                  <span className="contact__input-icon"><FaRegCommentDots size={18} /></span>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Conte-me sobre seu projeto, objetivos, timeline e qualquer outra informação relevante..."
                  />
                </div>
              </div>

              <button 
                type="submit" 
                className={`btn btn--primary contact__form-submit ${isSubmitting ? 'loading' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="contact__form-spinner"></span>
                    Enviando...
                  </>
                ) : (
                  'Enviar Mensagem'
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="contact__form-success">
                  <span>✓</span>
                  <p>Mensagem enviada com sucesso! Entrarei em contato em breve.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="contact__form-error">
                  <span>✗</span>
                  <p>Erro ao enviar mensagem. Tente novamente ou entre em contato diretamente.</p>
                </div>
              )}
            </form>
          </div>
        </div>
        {/* Elementos de fundo decorativos */}
        <div className="contact__background">
          <div className="contact__grid">
            {[...Array(20)].map((_, i) => (
              <div 
                key={i} 
                className="contact__grid-item"
                style={{
                  '--delay': `${i * 0.1}s`,
                  '--duration': `${2 + Math.random() * 2}s`
                } as React.CSSProperties}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 