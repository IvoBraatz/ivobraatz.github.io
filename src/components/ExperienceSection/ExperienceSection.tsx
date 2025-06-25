"use client";
import { useEffect, useRef, useState } from "react";
import { experience } from "../../data/experience"; // Presume-se que o array 'experience' está neste caminho
import '../../styles/ExperienceSection/ExperienceSection.css'; // Importe o CSS atualizado
import { IconType } from "react-icons";
import { SiPorsche, SiApple } from "react-icons/si"; // Ícones da Simple Icons
import { FaStar } from "react-icons/fa"; // Ícones da Font Awesome
import { LuCalendarDays } from "react-icons/lu"; // Ícones da Lucide React

// Mapeamento de strings para componentes de ícone
const iconMap: Record<string, IconType> = {
  SiPorsche,
  SiApple,
  FaStar, // Adicione mais ícones conforme necessário no 'data/experience'
};

export default function ExperienceSection() {
  // Estado para controlar quais itens da linha do tempo estão visíveis (para animação de entrada)
  const [visible, setVisible] = useState<number[]>([]);
  // Ref para armazenar referências a cada elemento do item da linha do tempo
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Efeito para lidar com a animação de entrada ao rolar a página
  useEffect(() => {
    // Função para verificar a visibilidade dos itens ao rolar a página
    const handleScroll = () => {
      itemRefs.current.forEach((ref, i) => {
        if (ref && !visible.includes(i)) { // Se o item existe e ainda não está visível
          const rect = ref.getBoundingClientRect(); // Obtém as dimensões e posição do item
          // Verifica se o topo do item está na viewport com um offset (80px da parte inferior da tela)
          if (rect.top < window.innerHeight - 80) {
            // Adiciona o índice do item ao estado 'visible' após um pequeno atraso
            setTimeout(() => setVisible(v => [...v, i]), i * 120); // Atraso escalonado para efeito cascata
          }
        }
      });
    };

    // Adiciona o listener de scroll ao montar o componente
    window.addEventListener("scroll", handleScroll);
    // Executa a verificação de scroll uma vez no carregamento inicial
    handleScroll();

    // Função de limpeza: remove o listener de scroll ao desmontar o componente
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visible]); // O efeito é re-executado quando a lista de 'visible' muda

  return (
    <section className="experience-section">
      <h2 className="experience-title">Experiência</h2> {/* Título da seção */}
      <div className="timeline">
        <div className="timeline-track" /> {/* Linha vertical da linha do tempo */}
        {/* Mapeia os dados de experiência para renderizar cada item na linha do tempo */}
        {experience.map((exp, i) => {
          const ExpIcon = iconMap[exp.icon] || FaStar; // Obtém o componente do ícone ou usa FaStar como fallback
          return (
            <div
              key={exp.company} // Chave única para o item da lista
              // Classes dinâmicas para controle da visibilidade da animação
              className={`timeline-item${visible.includes(i) ? ' visible' : ''}`}
              ref={el => { itemRefs.current[i] = el; }} // Atribui a ref ao elemento div
              style={{ transitionDelay: `${i * 100 + 100}ms` }} // Atraso para a animação de entrada
            >
              <div className="timeline-dot">
                <ExpIcon className="company-icon" /> {/* Ícone da empresa */}
              </div>
              <div className="timeline-content">
                <div className="exp-header">
                  <span className="exp-company">{exp.company}</span> {/* Nome da empresa */}
                  <span className="exp-role">{exp.role}</span> {/* Cargo */}
                </div>
                <div className="exp-period">
                  {/* Ícone de calendário e período da experiência */}
                  <LuCalendarDays size={18} style={{ marginRight: 6, opacity: 0.9, color: 'var(--color-primary)' }} /> {/* Cor definida aqui para garantir */}
                  {exp.period}
                </div>
                <ul className="exp-desc">
                  {/* Lista de descrições/responsabilidades */}
                  {exp.description.map((d, idx) => (
                    <li key={idx}>{d}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
