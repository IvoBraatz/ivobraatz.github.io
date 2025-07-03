'use client'

import './Footer.scss'
import { SiGithub, SiLinkedin, SiMaildotru, SiWhatsapp } from 'react-icons/si'
import { FaArrowUp, FaMapMarkerAlt } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          {/* Logo e Descrição */}
          <div className="footer__brand">
            <div className="footer__logo">
              <span className="footer__logo-text text-title-bold">
                <span className="code-symbol">&lt;/&gt;</span>
                Netto.codes
              </span>
            </div>
            <p className="footer__description text-body">
              Código com propósito. Soluções que conectam. 
              Especialista em desenvolvimento Full Stack com foco em criar 
              experiências digitais impactantes e eficientes.
            </p>
            <div className="footer__social">
              <a 
                href="https://github.com/ivonetto" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="GitHub"
                style={{ color: '#fff' }}
              >
                <SiGithub size={22} />
              </a>
              <a 
                href="https://linkedin.com/in/ivonetto" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="LinkedIn"
                style={{ color: '#0A66C2' }}
              >
                <SiLinkedin size={22} />
              </a>
              <a 
                href="mailto:ivo@netto.codes" 
                className="footer__social-link"
                aria-label="Email"
                style={{ color: '#00FFB3' }}
              >
                <SiMaildotru size={22} />
              </a>
              <a 
                href="https://wa.me/5511999999999" 
                className="footer__social-link"
                aria-label="WhatsApp"
                style={{ color: '#25D366' }}
              >
                <SiWhatsapp size={22} />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div className="footer__links">
            <h4 className="text-subtitle">Navegação</h4>
            <ul className="footer__links-list">
              <li>
                <button onClick={() => scrollToSection('home')}>
                  Início
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')}>
                  Sobre
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('projects')}>
                  Projetos
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')}>
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Serviços */}
          <div className="footer__services">
            <h4 className="text-subtitle">Serviços</h4>
            <ul className="footer__services-list">
              <li>Desenvolvimento Web Full Stack</li>
              <li>Aplicações React/Next.js</li>
              <li>APIs RESTful com Node.js</li>
              <li>Sistemas de E-commerce</li>
              <li>Dashboards e Analytics</li>
              <li>Aplicativos Mobile</li>
            </ul>
          </div>

          {/* Contato */}
          <div className="footer__contact">
            <h4 className="text-subtitle">Contato</h4>
            <div className="footer__contact-info">
              <div className="footer__contact-item">
                <span className="footer__contact-icon"><SiMaildotru size={18} /></span>
                <span className="text-body">ivo@netto.codes</span>
              </div>
              <div className="footer__contact-item">
                <span className="footer__contact-icon"><SiWhatsapp size={18} /></span>
                <span className="text-body">+55 (11) 99999-9999</span>
              </div>
              <div className="footer__contact-item">
                <span className="footer__contact-icon"><FaMapMarkerAlt size={18} /></span>
                <span className="text-body">São Paulo, SP - Brasil</span>
              </div>
            </div>
          </div>
        </div>

        {/* Linha de Separação */}
        <div className="footer__divider"></div>

        {/* Copyright */}
        <div className="footer__bottom">
          <div className="footer__copyright">
            <p className="text-body">
              © {currentYear} <strong className="text-subtitle">Netto.codes</strong>. Todos os direitos reservados.
            </p>
            <p className="text-body">
              Desenvolvido com ❤️ por Ivo Netto
            </p>
          </div>
          
          <div className="footer__legal">
            <a href="#" className="footer__legal-link">Política de Privacidade</a>
            <a href="#" className="footer__legal-link">Termos de Uso</a>
          </div>
        </div>

        {/* Botão de voltar ao topo */}
        <button 
          className="footer__backtotop" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Voltar ao topo"
        >
          <FaArrowUp size={18} />
        </button>
      </div>
    </footer>
  )
}

export default Footer 