'use client';
import Link from 'next/link';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import './Header.css';

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`porsche-header${scrolled ? ' scrolled' : ''}`}> 
      <div className="header-inner">
        <div className="header-logo" style={{ fontFamily: 'Orbitron, Montserrat, Arial, sans-serif', fontWeight: 900, letterSpacing: '0.18em', fontSize: '1.5rem', color: '#fff' }}>
          IVOBRAATZ
        </div>
        <nav className="header-nav" aria-label="Main navigation">
          <ul className="header-links">
            <li><Link href="/about" className={pathname === '/about' ? 'active' : ''}>Sobre</Link></li>
            <li><Link href="/projects" className={pathname === '/projects' ? 'active' : ''}>Projetos</Link></li>
            <li><Link href="/skills" className={pathname === '/skills' ? 'active' : ''}>Habilidades</Link></li>
            <li><Link href="/contact" className={pathname === '/contact' ? 'active' : ''}>Contato</Link></li>
          </ul>
        </nav>
        <div className="header-theme-toggle">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
} 