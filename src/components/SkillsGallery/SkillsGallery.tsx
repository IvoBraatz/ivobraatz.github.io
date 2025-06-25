"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { skills } from "../../data/skills"; // Presume-se que o array 'skills' está neste caminho
import '../../styles/SkillsGallery/SkillsGallery.css'; // Importe o CSS atualizado
import { IconType } from "react-icons"; // Importe IconType para tipagem correta
import { getSkillIcon } from "../SkillBar/SkillBar"; // Função para obter o componente do ícone

const SLIDE_INTERVAL = 4000; // Intervalo para troca automática do slide

// Componente MarqueeSlider para a faixa superior de ícones
function MarqueeSlider() {
  return (
    <div className="marquee-slider-outer">
      <div className="marquee-slider-track marquee-animate">
        {/* Triplicar a faixa para criar um efeito de marquee infinito contínuo */}
        {[...skills, ...skills, ...skills].map((skill, i) => {
          const Icon = getSkillIcon(skill.icon) as IconType; // Obtenha o componente do ícone
          return (
            <div className="marquee-icon-wrap" key={skill.name + i}>
              <Icon className="marquee-icon" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Componente principal SkillsGallery
export default function SkillsGallery() {
  const [current, setCurrent] = useState(0); // Estado para o índice do slide atual
  const timeoutRef = useRef<NodeJS.Timeout | null>(null); // Ref para o temporizador do slide automático

  // Efeito para gerenciar o slide automático
  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current); // Limpa o temporizador anterior
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % skills.length); // Avança para o próximo slide
    }, SLIDE_INTERVAL);

    // Função de limpeza para o temporizador
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current]); // Reinicia o temporizador quando 'current' muda

  // Funções para navegação manual
  const prev = () => setCurrent((prev) => (prev - 1 + skills.length) % skills.length);
  const next = () => setCurrent((prev) => (prev + 1) % skills.length);

  // Habilidade atualmente visível no slider principal
  const skill = skills[current];
  const Icon = getSkillIcon(skill.icon) as IconType; // Obtenha o componente do ícone para o slide principal

  return (
    <section className="skills-slider-section">
      <h2 className="skills-gallery-title">Skills</h2> {/* Título da seção */}
      <MarqueeSlider /> {/* Slider de ícones superior */}

      {/* Slider principal com efeito de vidro */}
      <div className="skills-slider-glass">
        {/* Botão de navegação para a esquerda */}
        <button className="slider-arrow left" onClick={prev} aria-label="Anterior">&#8592;</button>

        {/* Cartão principal da habilidade */}
        <div className="slider-card-main">
          <div className="slider-icon-main"><Icon className="slider-icon" /></div> {/* Ícone da habilidade */}
          <div className="slider-info">
            <div className="slider-skill-name">{skill.name}</div> {/* Nome da habilidade */}
            <div className="slider-skill-desc">{skill.description}</div> {/* Descrição da habilidade */}
            <div className="slider-progress-bar">
              {/* Barra de progresso do nível da habilidade */}
              <div className="slider-progress-inner" style={{ width: skill.level + '%' }} />
            </div>
          </div>
        </div>

        {/* Botão de navegação para a direita */}
        <button className="slider-arrow right" onClick={next} aria-label="Próximo">&#8594;</button>
      </div>

      {/* Seção para o botão "Ver todas as skills" */}
      <div className="skills-gallery-actions">
        <Link href="/skills" className="see-all-skills-btn">Ver todas as skills</Link>
      </div>
    </section>
  );
}
