'use client'

import { FaCode, FaRocket, FaUserCheck, FaRegCopy, FaDownload, FaGithub, FaLinkedin, FaCheckCircle, FaCubes, FaVial, FaEnvelope, FaMapMarkerAlt, FaGamepad, FaHeadphones, FaTachometerAlt, FaCoffee } from 'react-icons/fa'
import { useEffect, useRef, useState } from 'react'
import './About.scss'
import SectionHeader from '../../app/SectionHeader'
import '../../app/SectionHeader.scss'
import InfiniteVerticalMarquee from './InfiniteVerticalMarquee'

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
  const [carouselIndex, setCarouselIndex] = useState(0);
  const marqueeRef = useRef<HTMLDivElement>(null)
  const [isMarqueeReady, setIsMarqueeReady] = useState(false)
  const marqueeContainerRef = useRef<HTMLDivElement>(null)
  const marqueeTrackRef = useRef<HTMLDivElement>(null)
  const [marqueeBadges, setMarqueeBadges] = useState(badges)

  // Lista mockada de 20 certificações com keys estáveis
  const certs = Array.from({ length: 20 }).map((_, i) => {
    return {
      key: `cert-${i + 1}`,
      content: (
        <div className="about__cert-item">
          <img src={`/cert-logos/cert${(i % 4) + 1}.png`} alt={`Certificação ${i + 1}`} className="about__cert-logo" />
          <div className="about__cert-info">
            <span className="about__cert-name">Certificação {i + 1}</span>
            <span className="about__cert-date">202{(i % 5)}</span>
          </div>
        </div>
      )
    };
  });
  
  const VISIBLE_COUNT = 5;
  const marqueeItemHeight = 72;
  const [offset, setOffset] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

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
      const elements = sectionRef.current.querySelectorAll('.animate-on-scroll')
      elements.forEach(el => observer.observe(el))
    }
    
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setOffset(-marqueeItemHeight);
      setTimeout(() => {
        setCerts((prev) => {
          const [first, ...rest] = prev;
          return [...rest, first];
        });
        setIsAnimating(false);
        setOffset(0);
      }, 400); // tempo da transição
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!marqueeRef.current) return
    const marquee = marqueeRef.current
    let frame: number
    let speed = 1 // px por frame
    let pos = 0
    let groupWidth = 0

    const setup = () => {
      const group = Array.from(marquee.children).slice(0, badges.length) as HTMLElement[]
      groupWidth = group.reduce((acc, el) => acc + el.offsetWidth, 0)
      setIsMarqueeReady(true)
    }

    setup()

    const animate = () => {
      pos -= speed
      if (Math.abs(pos) >= groupWidth) {
        pos = 0
      }
      marquee.style.transform = `translateX(${pos}px)`
      frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)
    return () => {
      cancelAnimationFrame(frame)
    }
  }, [])

  useEffect(() => {
    if (!marqueeTrackRef.current) return
    const track = marqueeTrackRef.current
    let pos = 0
    let frame: number
    let speed = 1 // px por frame

    const animate = () => {
      pos -= speed
      if (track.children.length > 0) {
        const first = track.children[0] as HTMLElement
        if (first && Math.abs(pos) >= first.offsetWidth) {
          // Move o primeiro badge para o final
          track.appendChild(first)
          pos += first.offsetWidth
        }
      }
      track.style.transform = `translateX(${pos}px)`
      frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [])

  useEffect(() => {
    if (!marqueeContainerRef.current) return
    // Cria um elemento temporário para medir a largura dos badges
    const temp = document.createElement('div')
    temp.style.visibility = 'hidden'
    temp.style.position = 'absolute'
    temp.style.height = '0'
    temp.style.display = 'flex'
    document.body.appendChild(temp)
    badges.forEach(badge => {
      const span = document.createElement('span')
      span.className = 'about__profile-badge'
      span.innerHTML = `${badge.icon.props ? badge.icon.props.children : ''} ${badge.label}`
      temp.appendChild(span)
    })
    const groupWidth = temp.offsetWidth
    const containerWidth = marqueeContainerRef.current.offsetWidth
    let repeat = 2
    if (groupWidth > 0 && containerWidth > 0) {
      repeat = Math.ceil((containerWidth * 2) / groupWidth)
    }
    const result = Array(repeat).fill(badges).flat()
    setMarqueeBadges(result)
    document.body.removeChild(temp)
  }, [])

  const downloadCV = () => {
    // Simular download do CV
    console.log('Downloading CV...')
  }

  return (
    <section id="about" className="about">
      <div className="container">
        <SectionHeader
          title="Sobre"
          highlight="Mim"
          subtitle="Apaixonado por criar soluções elegantes e eficientes que conectam tecnologia e pessoas."
          align="left"
        />
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
          <div className="about__certs-marquee-container">
            <InfiniteVerticalMarquee
              items={certs}
              speed={1800}
              visibleCount={5}
              itemHeight={72}
            />
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