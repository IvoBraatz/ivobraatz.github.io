'use client';
import Link from 'next/link';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import '../../styles/Header/Navbar.css';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="navbar glassy slide-down">
      <div className="navbar__container">
        <Link href="/" className="navbar__logo" style={{ fontFamily: 'Orbitron, Montserrat, Arial, sans-serif', fontWeight: 900, letterSpacing: '0.18em', fontSize: '2.1rem', color: '#fff' }}>
          IVOBRAATZ
        </Link>
        <nav aria-label="Main navigation">
          <ul className="navbar__links">
            <li><Link href="/about" className={pathname === '/about' ? 'active' : ''}>Sobre</Link></li>
            <li><Link href="/projects" className={pathname === '/projects' ? 'active' : ''}>Projetos</Link></li>
            <li><Link href="/skills" className={pathname === '/skills' ? 'active' : ''}>Habilidades</Link></li>
            <li><Link href="/contact" className={pathname === '/contact' ? 'active' : ''}>Contato</Link></li>
          </ul>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
} 