'use client';
import '../../animations/slideUp.css'; // Mantenha se você usa esta animação
import '../../styles/SkillBar/SkillBar.css';
import { useState } from 'react';
import { DiHtml5, DiCss3, DiJavascript1, DiReact, DiNodejsSmall, DiVisualstudio } from 'react-icons/di';
import { SiTypescript, SiFigma, SiMongodb, SiMysql, SiSharp, SiPython, SiRailway, SiVercel, SiAmazon, SiRedis, SiDocker } from 'react-icons/si';
import { FaDatabase } from 'react-icons/fa';
import { IconType } from 'react-icons'; // Importe IconType

// Mapeamento de strings para componentes de ícone
const iconMap: Record<string, IconType> = { // Use IconType para o tipo de valor
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiVisualstudio,
  SiTypescript,
  SiFigma,
  SiMongodb,
  SiMysql,
  SiSharp,
  SiPython,
  SiRailway,
  SiVercel,
  SiAmazon,
  SiRedis,
  SiDocker,
  FaDatabase,
};

interface SkillBarProps {
  name: string;
  icon: string; // nome do ícone
  level: number;
}

export default function SkillBar({ name, icon, level }: SkillBarProps) {
  const [showTip, setShowTip] = useState(false);
  const IconComponent = iconMap[icon] || DiHtml5; // Fallback para DiHtml5 se o ícone não for encontrado

  return (
    <div
      className="skill-card slide-up" // Mantenha slide-up se ainda for usada para animação de entrada
      tabIndex={0}
      aria-label={`Skill: ${name}, nível ${level}%`}
      onMouseEnter={() => setShowTip(true)}
      onMouseLeave={() => setShowTip(false)}
      onFocus={() => setShowTip(true)}
      onBlur={() => setShowTip(false)}
    >
      <div className="skill-card__icon-wrap">
        <div className="skill-card__icon">
          <IconComponent size={36} color="currentColor" /> {/* Tamanho do ícone ajustado */}
        </div>
        {/* Tooltip do nível de habilidade aparece no hover/focus */}
        {showTip && <span className="skill-card__tooltip">{level}%</span>}
      </div>
      {/* Nome da habilidade */}
      <span>{name}</span>
      {/* Barra de progresso */}
      <div className="skill-card__bar" role="progressbar" aria-valuenow={level} aria-valuemin={0} aria-valuemax={100}>
        <div className="skill-card__bar-fill" style={{ width: `${level}%` }} />
      </div>
    </div>
  );
}

// Função auxiliar para obter o componente do ícone, útil no SkillsGallery.tsx
export const getSkillIcon = (icon: string): IconType => iconMap[icon] || DiHtml5;

