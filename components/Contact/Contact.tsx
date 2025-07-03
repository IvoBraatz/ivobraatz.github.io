'use client'

import { useState, useEffect } from 'react'
import './Contact.scss'
import { SiMaildotru, SiLinkedin, SiGithub, SiWhatsapp } from 'react-icons/si'
import { FaUser, FaRegCommentDots, FaBuilding, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'
import { MdBusinessCenter } from 'react-icons/md'
import SectionHeader from '../../app/SectionHeader'
import '../../app/SectionHeader.scss'

const Contact = () => {
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    company: string;
    message: string;
  }>({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const validateForm = () => {
    const { name, email, message } = formData
    return name.trim() && email.trim() && message.trim()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      setSubmitStatus('error')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      // Simular envio do formulário
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        company: '',
        message: ''
      })
      
      // Reset status após 5 segundos
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    } catch (error) {
      setIsSubmitting(false)
      setSubmitStatus('error')
      
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    }
  }

  const contactInfo = [
    {
      icon: <SiMaildotru size={24} />,
      title: 'Email Profissional',
      value: 'ivo@netto.codes',
      link: 'mailto:ivo@netto.codes',
      description: 'Para propostas comerciais'
    },
    {
      icon: <SiLinkedin size={24} color="#0A66C2" />,
      title: 'LinkedIn',
      value: 'linkedin.com/in/ivonetto',
      link: 'https://linkedin.com/in/ivonetto',
      description: 'Vamos nos conectar!'
    },
    {
      icon: <SiGithub size={24} color="#fff" />,
      title: 'GitHub',
      value: 'github.com/ivonetto',
      link: 'https://github.com/ivonetto',
      description: 'Confira meus projetos'
    },
    {
      icon: <SiWhatsapp size={24} color="#25D366" />,
      title: 'WhatsApp',
      value: '+55 (51) 99999-9999',
      link: 'https://wa.me/5551999999999',
      description: 'Contato direto e rápido'
    },
    {
      icon: <FaMapMarkerAlt size={24} color="#ef4444" />,
      title: 'Localização',
      value: 'Parobé, RS - Brasil',
      link: '#',
      description: 'Trabalho remoto disponível'
    }
  ]

  if (!mounted) return null

  return (
    <section id="contact" className="contact">
      <div className="container" style={{position: 'relative', zIndex: 2}}>
        <SectionHeader
          title="Vamos"
          highlight="Conversar"
          subtitle="Pronto para transformar sua ideia em uma solução digital incrível? Entre em contato e vamos criar algo extraordinário juntos."
        />

        <div className="contact__content">
          {/* Informações de Contato */}
          <div className="contact__info">
            <div className="contact__info-header">
              <h3 className="text-title">Entre em Contato</h3>
              <p className="text-body">
                Estou sempre aberto a novos projetos e oportunidades colaborativas. 
                Vamos discutir como posso ajudar a transformar sua visão em uma realidade digital impactante.
              </p>
            </div>

            <div className="contact__info-list">
              {contactInfo.map((info, index) => (
                <a 
                  key={index} 
                  href={info.link} 
                  className="contact__info-item"
                  target={info.link.startsWith('http') ? "_blank" : "_self"}
                  rel={info.link.startsWith('http') ? "noopener noreferrer" : undefined}
                  onClick={info.link === '#' ? (e) => e.preventDefault() : undefined}
                >
                  <div className="contact__info-item-icon">
                    {info.icon}
                  </div>
                  <div className="contact__info-item-content">
                    <h4 className="text-subtitle">{info.title}</h4>
                    <span className="text-body">{info.value}</span>
                    {info.description && (
                      <small className="text-body" style={{ 
                        display: 'block', 
                        marginTop: '4px', 
                        fontSize: '0.8rem', 
                        color: 'var(--text-muted)',
                        opacity: 0.8
                      }}>
                        {info.description}
                      </small>
                    )}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Formulário Moderno */}
          <div className="contact__form-container">
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__form-header">
                <h3 className="text-title">Inicie seu Projeto</h3>
                <p className="text-body">Preencha o formulário abaixo e eu entrarei em contato em até 24h para discutirmos sua proposta</p>
              </div>

              <div className="contact__form-grid">
                <div className="contact__form-group">
                  <label htmlFor="name">Nome Completo</label>
                  <div className="contact__input-wrapper">
                    <span className="contact__input-icon">
                      <FaUser size={18} />
                    </span>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Seu nome completo"
                      autoComplete="name"
                    />
                  </div>
                </div>

                <div className="contact__form-group">
                  <label htmlFor="email">Email</label>
                  <div className="contact__input-wrapper">
                    <span className="contact__input-icon">
                      <SiMaildotru size={18} />
                    </span>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="seu@email.com"
                      autoComplete="email"
                    />
                  </div>
                </div>

                <div className="contact__form-group">
                  <label htmlFor="company">Empresa / Projeto</label>
                  <div className="contact__input-wrapper">
                    <span className="contact__input-icon">
                      <MdBusinessCenter size={18} />
                    </span>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Nome da empresa ou projeto"
                      autoComplete="organization"
                    />
                  </div>
                </div>
              </div>

              <div className="contact__form-group">
                <label htmlFor="message">Mensagem</label>
                <div className="contact__input-wrapper contact__textarea-wrapper">
                  <span className="contact__input-icon">
                    <FaRegCommentDots size={18} />
                  </span>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Conte-me sobre seu projeto, objetivos, timeline e orçamento estimado. Quanto mais detalhes, melhor poderei ajudá-lo..."
                    style={{ minHeight: '120px' }}
                  />
                </div>
              </div>

              <button 
                type="submit" 
                className={`btn btn--primary contact__form-submit text-cta ${isSubmitting ? 'loading' : ''}`}
                disabled={isSubmitting || !validateForm()}
              >
                {isSubmitting ? (
                  <>
                    <span className="contact__form-spinner"></span>
                    Enviando mensagem...
                  </>
                ) : (
                  'Enviar Mensagem'
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="contact__form-success">
                  <span>✓</span>
                  <div>
                    <strong className="text-subtitle">Mensagem enviada com sucesso!</strong>
                    <p className="text-body">Obrigado pelo contato. Entrarei em contato em breve para discutirmos seu projeto.</p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="contact__form-error">
                  <span>✗</span>
                  <div>
                    <strong className="text-subtitle">Erro ao enviar mensagem</strong>
                    <p className="text-body">Verifique se todos os campos obrigatórios estão preenchidos ou tente novamente mais tarde.</p>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Elementos de fundo decorativos */}
        <div className="contact__background">
          <div className="contact__grid">
            {[...Array(48)].map((_, i) => (
              <div 
                key={i} 
                className="contact__grid-item"
                style={{
                  '--delay': `${i * 0.05}s`,
                  '--duration': `${2 + Math.random() * 3}s`
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