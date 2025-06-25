"use client";
import { useState } from "react";
import Link from "next/link"; // Importar Link para o botão LinkedIn
import '../../styles/ContactSection/ContactSection.css'; // Importar o CSS atualizado

export default function ContactSection() {
  // Estado para controlar o foco dos campos do formulário (para a animação da label)
  const [focus, setFocus] = useState({ name: false, email: false, message: false });
  // Estado para armazenar os valores dos campos do formulário
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  // Estado para controlar a visibilidade do modal de mensagem
  const [showModal, setShowModal] = useState(false);

  // Função para lidar com o foco e desfoque dos campos
  function handleFocus(field: string, val: boolean) {
    setFocus(f => ({ ...f, [field]: val }));
  }

  // Função para lidar com a mudança dos valores dos campos do formulário
  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setValues(v => ({ ...v, [e.target.name]: e.target.value }));
  }

  // Função para lidar com o envio do formulário
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault(); // Previne o comportamento padrão de recarregar a página

    // Lógica de envio da mensagem (aqui você integraria com um serviço de backend)
    console.log("Mensagem enviada:", values); // Apenas para debug

    setShowModal(true); // Exibe o modal de sucesso

    // Limpa os campos do formulário após o envio
    setValues({ name: "", email: "", message: "" });
  }

  // Função para fechar o modal
  function handleCloseModal() {
    setShowModal(false);
  }

  return (
    <section className="contact-section fade-slide-up">
      <h2 className="contact-title">Vamos conversar?</h2>
      <p className="contact-desc">
        Estou disponível para novos projetos, parcerias e oportunidades. Entre em contato e vamos criar algo incrível juntos!
      </p>

      <div className="contact-actions">
        {/* Botão para enviar o formulário */}
        <button className="contact-btn primary" type="submit" form="contact-form">
          Enviar Mensagem
        </button>
        {/* Link para o LinkedIn, estilizado como um botão secundário */}
        <Link href="https://linkedin.com/in/ivobraatz" target="_blank" className="contact-btn secondary">
          Ver LinkedIn
        </Link>
      </div>

      {/* Formulário de contato */}
      <form className="contact-form" id="contact-form" onSubmit={handleSubmit} autoComplete="off">
        {/* Grupo de campo para o Nome */}
        <div className={`form-group${focus.name || values.name ? ' focused' : ''}`}> 
          <label htmlFor="name">Nome</label>
          <input
            id="name"
            name="name"
            type="text"
            value={values.name}
            onFocus={() => handleFocus('name', true)}
            onBlur={() => handleFocus('name', false)}
            onChange={handleChange}
            placeholder=" " /* Placeholder com espaço para o efeito da label */
            required
          />
        </div>

        {/* Grupo de campo para o E-mail */}
        <div className={`form-group${focus.email || values.email ? ' focused' : ''}`}> 
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onFocus={() => handleFocus('email', true)}
            onBlur={() => handleFocus('email', false)}
            onChange={handleChange}
            placeholder=" " /* Placeholder com espaço para o efeito da label */
            required
          />
        </div>

        {/* Grupo de campo para a Mensagem */}
        <div className={`form-group${focus.message || values.message ? ' focused' : ''}`}> 
          <label htmlFor="message">Mensagem</label>
          <textarea
            id="message"
            name="message"
            value={values.message}
            onFocus={() => handleFocus('message', true)}
            onBlur={() => handleFocus('message', false)}
            onChange={handleChange}
            placeholder=" " /* Placeholder com espaço para o efeito da label */
            required
            rows={4}
          />
        </div>
      </form>

      {/* Modal de Mensagem de Sucesso */}
      {showModal && (
        <div className={`message-modal-overlay ${showModal ? 'visible' : ''}`} onClick={handleCloseModal}>
          <div className="message-modal-content" onClick={(e) => e.stopPropagation()}> {/* Impede clique de fechar no conteúdo */}
            <h3>Mensagem Enviada!</h3>
            <p>Obrigado por entrar em contato. Responderei o mais breve possível!</p>
            <button className="message-modal-close-btn" onClick={handleCloseModal}>
              Fechar
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
