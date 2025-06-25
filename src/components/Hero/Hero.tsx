import '../../styles/Hero/Hero.css';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="porsche-hero">
      <div className="hero-content fade-in">
        <h1 className="hero-name">IVO BRAATZ</h1>
        <h2 className="hero-title">Desenvolvedor Frontend</h2>
        <p className="hero-desc">
          Excelência em design digital, interfaces ousadas e experiências que unem performance, luxo e minimalismo. <br />
          Transformo ideias em produtos digitais premium.
        </p>
        <div className="hero-separator" />
        <div className="hero-actions">
          <Link href="/projects" className="btn btn-primary">Ver Projetos</Link>
          <Link href="/contact" className="btn btn-secondary">Contato</Link>
        </div>
      </div>
    </section>
  );
} 