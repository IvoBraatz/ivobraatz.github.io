"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link"; // Importar Link para o botão "Ver todos os projetos"
import { projects } from "../../data/projects"; // Presume-se que o array 'projects' está neste caminho
import '../../styles/ProjectsSection/ProjectsSection.css'; // Importe o CSS atualizado

export default function ProjectsSection() {
  // Estado para controlar quais cartões de projeto estão visíveis (para animação de entrada)
  const [visible, setVisible] = useState<number[]>([]);
  // Estado para controlar o estado de carregamento dos cartões (shimmer effect)
  const [loading, setLoading] = useState(true);
  // Ref para armazenar referências a cada elemento do cartão do projeto
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Efeito para lidar com o carregamento inicial e a animação de entrada
  useEffect(() => {
    // Define um timeout para remover o estado de 'loading' (simula carregamento)
    const loadTimer = setTimeout(() => setLoading(false), 600); // Micro-loading

    // Função para verificar a visibilidade dos cartões ao rolar a página
    const handleScroll = () => {
      cardRefs.current.forEach((ref, i) => {
        if (ref && !visible.includes(i)) { // Se o cartão existe e ainda não está visível
          const rect = ref.getBoundingClientRect(); // Obtém as dimensões e posição do cartão
          // Verifica se o topo do cartão está na viewport com um offset (80px da parte inferior da tela)
          if (rect.top < window.innerHeight - 80) {
            // Adiciona o índice do cartão ao estado 'visible' após um pequeno atraso
            setTimeout(() => setVisible(v => [...v, i]), i * 120); // Atraso escalonado para efeito cascata
          }
        }
      });
    };

    // Adiciona o listener de scroll ao montar o componente
    window.addEventListener("scroll", handleScroll);
    // Executa a verificação de scroll uma vez no carregamento inicial
    handleScroll();

    // Função de limpeza: remove o listener de scroll e limpa o timer ao desmontar o componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(loadTimer);
    };
  }, [visible]); // O efeito é re-executado quando a lista de 'visible' muda

  return (
    <section className="projects-section">
      <h2 className="projects-title">Projetos em Destaque</h2>
      <div className="projects-grid">
        {/* Renderiza os primeiros 6 projetos do array 'projects' */}
        {projects.slice(0, 6).map((project, i) => (
          <div
            key={project.id}
            // Classes dinâmicas para controle de loading e visibilidade da animação
            className={`project-card${loading ? ' loading' : ''}${visible.includes(i) ? ' visible' : ''}`}
            ref={el => { cardRefs.current[i] = el; }} // Atribui a ref ao elemento div
            style={{ transitionDelay: `${i * 80 + 100}ms` }} // Atraso para a animação de entrada
          >
            <div className="project-image-wrapper">
              <img src={project.image} alt={project.title} className="project-image" />
              {/* Overlay com botão "Ver no GitHub" */}
              <div className="project-overlay">
                <Link href={project.url} target="_blank" className="github-btn">
                  Ver no GitHub
                </Link>
              </div>
            </div>
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Seção para o botão "Ver todos os projetos" */}
      <div className="projects-actions">
        <Link href="/projects" className="see-all-btn">Ver todos os projetos</Link>
      </div>
    </section>
  );
}
