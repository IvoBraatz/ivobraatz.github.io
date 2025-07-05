'use client'

import { FaCode, FaRocket, FaUserCheck, FaRegCopy, FaDownload, FaGithub, FaLinkedin, FaCheckCircle, FaCubes, FaVial, FaEnvelope, FaMapMarkerAlt, FaGamepad, FaHeadphones, FaTachometerAlt, FaCoffee, FaUserGraduate, FaGraduationCap, FaUniversity } from 'react-icons/fa'

import { useEffect, useRef, useState } from 'react'
import './About.scss'
import SectionHeader from '../../app/SectionHeader'
import '../../app/SectionHeader.scss'

const impactfulSubtitles = [
  "Transformando ideias em experiências digitais.",
  "Código limpo, soluções inteligentes.",
  "Performance e inovação em cada projeto.",
  "Tecnologia para conectar pessoas e oportunidades."
];

function FadingSubtitle() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setFade(false), 3500);
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % impactfulSubtitles.length);
        setFade(true);
      }, 900); // tempo do fade-out (0.9s)
    }, 7000); // tempo total de exibição (7s)
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [index]);

  return (
    <span className={`fading-subtitle${fade ? ' fade-in' : ' fade-out'}`}>{impactfulSubtitles[index]}</span>
  );
}

const profileImages = [
  '/profile-placeholder-1.png',
  '/profile-placeholder-2.png',
  '/profile-placeholder-3.png',
];

const badges = [
  { icon: <FaGamepad />, label: 'Gamer' },
  { icon: <FaTachometerAlt />, label: 'Gearhead' },
  { icon: <FaCoffee />, label: 'Café Lover' },
  { icon: <FaRocket />, label: 'Inovador' },
  { icon: <FaCode />, label: 'Dev' },
  { icon: <FaUserCheck />, label: 'Team Player' },
  { icon: <FaDownload />, label: 'Open Source' },
];

const About = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const [copied, setCopied] = useState(false)
  const [activeSkill, setActiveSkill] = useState<number | null>(null)
  const [carouselIndex, setCarouselIndex] = useState(0)
  const [marqueeSpeed, setMarqueeSpeed] = useState(1)
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)
  
  const marqueeRef = useRef<HTMLDivElement>(null)

  // Instituições e seus logos
  const institutions = {
    alura: {
      name: 'Alura',
      logo: '/cert-logos/alura.png'
    },
    senai: {
      name: 'Senai',
      logo: '/cert-logos/senai.png'
    }
  }

  // Certificados para o marquee vertical
  const certificates = [
    { 
      name: 'Desenvolvedor Back-end C#', 
      institution: institutions.senai,
      date: 'Maio 2024'
    },
    { 
      name: 'JavaScript', 
      institution: institutions.alura,
      date: 'Novembro 2024'
    },
    { 
      name: 'Node.js', 
      institution: institutions.alura,
      date: 'Novembro 2024'
    },
    { 
      name: 'C#', 
      institution: institutions.alura,
      date: 'Setembro 2023'
    },
    { 
      name: 'SQL com MySQL', 
      institution: institutions.alura,
      date: 'Setembro 2023'
    },
    { 
      name: 'Git & GitHub', 
      institution: institutions.alura,
      date: 'Novembro 2024'
    },
    { 
      name: 'HTML5 & CSS3', 
      institution: institutions.alura,
      date: 'Novembro 2024'
    },
    { 
      name: 'Arquitetura CSS', 
      institution: institutions.alura,
      date: 'Setembro 2023'
    },
    { 
      name: 'Lógica de programação', 
      institution: institutions.alura,
      date: 'Novembro 2024'
    },
    { 
      name: 'HTTP', 
      institution: institutions.alura,
      date: 'Setembro 2023'
    },
    { 
      name: 'UI para devs', 
      institution: institutions.alura,
      date: 'Novembro 2024'
    },
    { 
      name: 'Acessibilidade web', 
      institution: institutions.alura,
      date: 'Outubro 2024'
    },
    { 
      name: 'SEO otimização de sites', 
      institution: institutions.alura,
      date: 'Novembro 2024'
    },
    { 
      name: 'Redes onboarding', 
      institution: institutions.alura,
      date: 'Novembro 2024'
    },
    { 
      name: 'Linux Onboarding', 
      institution: institutions.alura,
      date: 'Novembro 2024'
    }
  ]

  // Marquee hover effect
  useEffect(() => {
    const marqueeElement = marqueeRef.current
    if (!marqueeElement) return

    const handleMouseEnter = () => setMarqueeSpeed(0.3)
    const handleMouseLeave = () => setMarqueeSpeed(1)

    marqueeElement.addEventListener('mouseenter', handleMouseEnter)
    marqueeElement.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      marqueeElement.removeEventListener('mouseenter', handleMouseEnter)
      marqueeElement.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <section id="about" className="about">
      <div className="container">
        <SectionHeader
          title="Sobre"
          highlight="Mim"
          subtitle="Apaixonado por criar soluções elegantes e eficientes que conectam tecnologia e pessoas."
          align="left"
        >
          <div className="about__graduation-info">
            <FaGraduationCap className="about__graduation-icon" />
            <div className="about__graduation-details">
              <div className="about__graduation-course">Gestão da Tecnologia da Informação</div>
              <div className="about__graduation-institution">
                <FaUniversity className="about__graduation-institution-icon" />
                Centro Universitário Leonardo da Vinci
              </div>
              <div className="about__graduation-year">
                <FaGraduationCap className="about__graduation-year-icon" />
                Formado em 2024
              </div>
            </div>
          </div>
        </SectionHeader>
        <div className="about__content-layout">
          <div className="about__main-content">
            <p className="about__intro text-body-medium">Apaixonado por criar soluções elegantes e eficientes que conectam tecnologia e pessoas.</p>
            <p className="about__description text-body">
              Sou Ivo Netto, desenvolvedor Full Stack com mais de 3 anos de experiência, focado em entregar produtos digitais de alta qualidade, performance e usabilidade.<br />
              Minha jornada é guiada por princípios sólidos de desenvolvimento e uma busca constante por inovação e excelência técnica.
            </p>
            <div className="about__principles">
              <div className="about__principle"><FaCode /> Clean Code</div>
              <div className="about__principle"><FaCubes /> SOLID</div>
              <div className="about__principle"><FaVial /> TDD</div>
            </div>
          </div>

          {/* Marquee Vertical de Tecnologias */}
          <div className="about__marquee-container">
            <div className="about__marquee" ref={marqueeRef}>
              <div className="about__marquee-blur about__marquee-blur--top"></div>
              <div className="about__marquee-blur about__marquee-blur--bottom"></div>
              <div 
                className="about__marquee-track"
                style={{ 
                  animationDuration: `${30 / marqueeSpeed}s`,
                  animationPlayState: hoveredTech ? 'paused' : 'running'
                }}
              >
                {[...certificates, ...certificates].map((cert, idx) => (
                  <div 
                    key={`${cert.name}-${idx}`}
                    className="about__marquee-item"
                    onMouseEnter={() => setHoveredTech(cert.name)}
                    onMouseLeave={() => setHoveredTech(null)}
                  >
                    <div className="about__marquee-item-icon">
                      <img src={cert.institution.logo} alt={cert.institution.name} className="about__cert-logo" />
                    </div>
                    <div className="about__marquee-item-info">
                      <span className="about__marquee-item-name">{cert.name}</span>
                      <span className="about__marquee-item-institution">{cert.institution.name}</span>
                      <span className="about__marquee-item-date">{cert.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="about__hobbies-container">
          <h3 className="about__hobbies-title">Hobbies & Interesses</h3>
          <div className="about__hobbies-list">
            <div className="about__hobby"><FaGamepad /> Games</div>
            <div className="about__hobby"><FaHeadphones /> Música</div>
            <div className="about__hobby"><FaCoffee /> Café</div>
            <div className="about__hobby"><FaTachometerAlt /> Carros</div>
            <div className="about__hobby"><FaRocket /> Inovação</div>
          </div>
        </div>
      </div>
      <div className="about__background">
        <div className="about__pattern"></div>
      </div>
      <div className="about__floating">
        <div className="floating-element floating-element--1"><div className="floating-icon">💡</div></div>
        <div className="floating-element floating-element--2"><div className="floating-icon">🚀</div></div>
        <div className="floating-element floating-element--3"><div className="floating-icon">🎯</div></div>
        <div className="floating-element floating-element--4"><div className="floating-icon">⚡</div></div>
      </div>
    </section>
  )
}

export default About