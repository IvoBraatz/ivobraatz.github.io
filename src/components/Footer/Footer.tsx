import '../../styles/Footer/Footer.css';
import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer fade-footer">
      <div className="footer-divider" />
      <div className="footer-content">
        <div className="footer-col footer-logo">
          <span className="footer-brand">Ivo Braatz</span>
        </div>
        <div className="footer-col footer-links">
          <Link href="/about">Sobre</Link>
          <Link href="/projects">Projetos</Link>
          <Link href="/skills">Skills</Link>
          <Link href="/contact">Contato</Link>
        </div>
        <div className="footer-col footer-socials">
          <a href="https://linkedin.com/in/ivobraatz" target="_blank" aria-label="LinkedIn" className="footer-social">
            <Linkedin size={28} />
          </a>
          <a href="https://github.com/ivobraatz" target="_blank" aria-label="GitHub" className="footer-social">
            <Github size={28} />
          </a>
          <a href="mailto:ivo@braatz.dev" aria-label="Email" className="footer-social">
            <Mail size={28} />
          </a>
        </div>
      </div>
      <div className="footer-signature">
        © 2025 Ivo Braatz. Todos os direitos reservados.
      </div>
    </footer>
  );
} 