'use client';
import '../animations/slideUp.css'; // Mantenha se você usa esta animação
import '../../styles/ProjectCard/ProjectCard.css'; // Importe o CSS atualizado
import { useRef } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  url: string; // URL do projeto (GitHub, live demo, etc.)
}

export default function ProjectCard({ title, description, image, url }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Função para aplicar o efeito de tilt no mousemove
  function handleMouseMove(e: React.MouseEvent) {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 10; // Intensidade do tilt X ajustada
    const rotateY = ((x - centerX) / centerX) * -10; // Intensidade do tilt Y ajustada
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`;
  }

  // Função para resetar o efeito de tilt ao sair do mouse
  function handleMouseLeave() {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = ''; // Remove a transformação para resetar
  }

  return (
    <div
      className="project-card slide-up" // Mantenha slide-up se for usada para animação de entrada
      tabIndex={0} // Torna o div focável para acessibilidade
      aria-label={`Projeto: ${title}`}
      ref={cardRef} // Atribui a ref ao elemento
      onMouseMove={handleMouseMove} // Listener para o movimento do mouse
      onMouseLeave={handleMouseLeave} // Listener para a saída do mouse
      onFocus={e => e.currentTarget.classList.add('focus-tilt')} // Adiciona classe no foco
      onBlur={e => e.currentTarget.classList.remove('focus-tilt')} // Remove classe ao perder foco
    >
      {/* Imagem do projeto */}
      <img src={image} alt={title} className="project-card__img" />
      
      {/* Conteúdo do cartão do projeto */}
      <div className="project-card__content">
        <h3>{title}</h3> {/* Título do projeto */}
        <p>{description}</p> {/* Descrição do projeto */}
        {/* Link para o GitHub ou outra URL do projeto */}
        <a href={url} target="_blank" rel="noopener noreferrer" className="btn-link">Ver Detalhes</a> {/* Texto mais genérico para o link */}
      </div>
    </div>
  );
}
