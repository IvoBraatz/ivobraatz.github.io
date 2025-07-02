'use client'

import { useState, useEffect, useCallback } from 'react'
import './Header.scss'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Scroll handler - memoizado
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const menuItems = [
    { id: 'home', label: 'Início' },
    { id: 'about', label: 'Sobre' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projetos' },
    { id: 'contact', label: 'Contato' }
  ]

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="container">
        <div className="header__content">
          {/* Logo */}
          <div className="header__logo">
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home') }}>
              <div className="header__logo-text">
                <span className="header__logo-brand">Netto</span>
                <span className="header__logo-domain">.codes</span>
              </div>
              <div className="header__logo-glow"></div>
            </a>
          </div>

          {/* Menu Desktop */}
          <nav className="header__nav">
            <ul className="header__nav-list">
              {menuItems.map((item) => (
                <li key={item.id} className="header__nav-item">
                  <button
                    className="header__nav-link"
                    onClick={() => scrollToSection(item.id)}
                  >
                    <span className="header__nav-text">{item.label}</span>
                    <span className="header__nav-indicator"></span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Menu Mobile Toggle */}
          <button
            className={`header__menu-toggle ${isMenuOpen ? 'header__menu-toggle--active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className="header__menu-line"></span>
            <span className="header__menu-line"></span>
            <span className="header__menu-line"></span>
          </button>
        </div>

        {/* Menu Mobile */}
        <div className={`header__mobile-menu ${isMenuOpen ? 'header__mobile-menu--open' : ''}`}>
          {/* Botão hamburger animado para fechar */}
          <button
            className={`header__menu-toggle header__menu-toggle--active header__menu-toggle--close`}
            onClick={() => setIsMenuOpen(false)}
            aria-label="Fechar menu"
            style={{ position: 'absolute', top: 20, right: 20, zIndex: 10 }}
          >
            <span className="header__menu-line"></span>
            <span className="header__menu-line"></span>
            <span className="header__menu-line"></span>
          </button>
          <nav className="header__mobile-nav">
            <ul className="header__mobile-nav-list">
              {menuItems.map((item, index) => (
                <li 
                  key={item.id} 
                  className="header__mobile-nav-item"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <button
                    className="header__mobile-nav-link"
                    onClick={() => scrollToSection(item.id)}
                  >
                    <span className="header__mobile-nav-text">{item.label}</span>
                    <div className="header__mobile-nav-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Social Links Mobile */}
          <div className="header__mobile-social">
            <a 
              href="https://github.com/ivobraatz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="header__mobile-social-link"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a 
              href="https://linkedin.com/in/ivobraatz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="header__mobile-social-link"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a 
              href="mailto:ivo@netto.codes" 
              className="header__mobile-social-link"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header 