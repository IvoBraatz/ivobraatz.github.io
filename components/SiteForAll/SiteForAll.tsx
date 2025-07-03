import React from 'react';
import SectionHeader from '../../app/SectionHeader';
import './SiteForAll.scss';
import { FaHandsHelping, FaGraduationCap, FaHandshake, FaLightbulb } from 'react-icons/fa';

const cards = [
  {
    icon: <FaHandsHelping size={28} />,
    title: 'ONGs & Instituições',
    desc: 'Sites modernos para quem faz a diferença na sociedade.'
  },
  {
    icon: <FaGraduationCap size={28} />,
    title: 'Recém-formados',
    desc: 'Portfólios gratuitos para impulsionar carreiras e sonhos.'
  },
  {
    icon: <FaHandshake size={28} />,
    title: 'Parcerias',
    desc: 'Vamos juntos criar oportunidades e novas ideias para quem mais precisa.'
  },
  {
    icon: <FaLightbulb size={28} />,
    title: 'Tem uma ideia?',
    desc: 'Indique um projeto ou público que merece um site gratuito!'
  }
];

const SiteForAll = () => (
  <section className="site-for-all">
    <div className="site-for-all__background"></div>
    <div className="container site-for-all__hero">
      <SectionHeader
        title="Site para"
        highlight="Todos"
        subtitle="Uma iniciativa para democratizar a presença digital e criar impacto social."
        align="left"
      />
      <div className="site-for-all__mission">
        <p className="text-body-medium">
          Desenvolvo sites gratuitos para instituições sem fins lucrativos, portfólios para recém-formados e projetos que geram impacto positivo. Vamos juntos construir parcerias e transformar ideias em realidade!
        </p>
      </div>
      <div className="site-for-all__cards-row">
        {cards.map((card, idx) => (
          <div className="site-for-all__card-mini fade-in-up" key={idx} style={{ animationDelay: `${idx * 0.10 + 0.1}s` }}>
            <span className="site-for-all__icon-bg-mini">{card.icon}</span>
            <div>
              <h3 className="text-subtitle">{card.title}</h3>
              <p className="text-body">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="site-for-all__cta-hero">
        <a href="#contact" className="btn btn--primary btn--lg text-cta">
          <span>Quero Participar</span>
          <svg width="22" height="22" fill="none" stroke="currentColor"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
        <p className="site-for-all__cta-text text-body">
          Tem uma instituição, projeto ou pessoa para indicar? Vamos juntos!
        </p>
      </div>
    </div>
  </section>
);

export default SiteForAll; 