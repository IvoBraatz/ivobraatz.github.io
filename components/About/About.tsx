'use client'

import { FaCode, FaRocket, FaUserCheck, FaRegCopy, FaDownload, FaGithub, FaLinkedin, FaCheckCircle, FaCubes, FaVial, FaEnvelope, FaMapMarkerAlt, FaGamepad, FaHeadphones, FaTachometerAlt, FaCoffee } from 'react-icons/fa'
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
  const [carouselIndex, setCarouselIndex] = useState(0);
  const marqueeRef = useRef<HTMLDivElement>(null)
  const [isMarqueeReady, setIsMarqueeReady] = useState(false)
  const marqueeContainerRef = useRef<HTMLDivElement>(null)
  const marqueeTrackRef = useRef<HTMLDivElement>(null)
  const [marqueeBadges, setMarqueeBadges] = useState(badges)
  
  const codeString = `class IvoNetto {
  constructor() {
    this.name = 'Ivo Netto';
    this.age = 22;
    this.location = 'Parobé, RS - Brasil';
    this.role = 'Full Stack Developer';
    this.passion = 'Technology & Innovation';
    this.experience = '3+ years';
  }

  async develop() {
    const requirements = await this.analyze();
    const architecture = await this.design(requirements);
    const solution = await this.implement(architecture);
    return this.deploy(solution);
  }

  get techStack() {
    return {
      frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      backend: ['Node.js', 'Express', 'Python', 'PostgreSQL'],
      cloud: ['AWS', 'Docker', 'Vercel', 'MongoDB'],
      tools: ['Git', 'VS Code', 'Figma', 'Jest']
    };
  }

  get principles() {
    return [
      'Clean Code',
      'SOLID Principles', 
      'Performance First',
      'User Experience'
    ];
  }
}

const developer = new IvoNetto();
console.log('Building the future... 🚀');
developer.develop();`

  const skills = [
    {
      category: 'Frontend',
      items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'SCSS', 'JavaScript'],
      color: '#61DAFB',
      icon: '⚛️'
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB', 'REST APIs'],
      color: '#68D391',
      icon: '🗄️'
    },
    {
      category: 'DevOps & Tools',
      items: ['AWS', 'Docker', 'Git', 'Vercel', 'VS Code', 'Linux'],
      color: '#F6AD55',
      icon: '⚙️'
    },
    {
      category: 'Design & UX',
      items: ['Figma', 'UI/UX Design', 'Responsive Design', 'Animations', 'Prototyping'],
      color: '#B794F6',
      icon: '🎨'
    }
  ]

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
      setCarouselIndex((prev) => (prev + 1) % profileImages.length);
    }, 3000);
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

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

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
          <aside className="about__profile-card">
            <div className="about__profile-header">
              <div className="about__profile-avatar-carousel">
                <img
                  src={profileImages[carouselIndex]}
                  alt="Foto de perfil"
                  className="about__profile-avatar-img"
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