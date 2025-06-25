export default function ContactPage() {
  return (
    <section className="contact">
      <h1>Contato</h1>
      <form className="contact__form" onSubmit={e => { e.preventDefault(); alert('Mensagem enviada!'); }}>
        <label htmlFor="name">Nome</label>
        <input id="name" name="name" type="text" required />
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required />
        <label htmlFor="message">Mensagem</label>
        <textarea id="message" name="message" required />
        <button type="submit">Enviar</button>
      </form>
      <div className="contact__socials">
        {/* Links para redes sociais */}
      </div>
    </section>
  );
} 