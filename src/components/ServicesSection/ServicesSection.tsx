import styles from '../../styles/ServicesSection/ServicesSection.module.css';
import { IconUIDesign, IconFrontend, IconLanding, IconIntegracao } from './ServiceIcons';

const services = [
  {
    icon: <IconUIDesign />,
    name: 'UI DESIGN',
    description: 'Interfaces elegantes, intuitivas e focadas na experiência do usuário.',
    price: 'A partir de R$ 1.200',
  },
  {
    icon: <IconFrontend />,
    name: 'DESENVOLVIMENTO FRONTEND',
    description: 'Websites modernos, rápidos e responsivos com as melhores tecnologias.',
    price: 'A partir de R$ 2.000',
  },
  {
    icon: <IconLanding />,
    name: 'LANDING PAGES',
    description: 'Páginas de alta conversão para lançamentos, produtos e campanhas.',
    price: 'A partir de R$ 900',
  },
  {
    icon: <IconIntegracao />,
    name: 'INTEGRAÇÕES',
    description: 'Conecte seu site a APIs, CRMs, automações e muito mais.',
    price: 'Sob consulta',
  },
];

export default function ServicesSection() {
  return (
    <section className={styles.servicesSection} id="servicos">
      <h2 className={styles.title}>SERVIÇOS</h2>
      <div className={styles.cardsContainer}>
        {services.map((service, idx) => (
          <div
            key={service.name}
            className={styles.card}
            style={{ '--card-delay': `${idx * 0.12}s` } as React.CSSProperties}
          >
            <div className={styles.icon}>{service.icon}</div>
            <div className={styles.name}>{service.name}</div>
            <div className={styles.description}>{service.description}</div>
            <div className={styles.price}>{service.price}</div>
          </div>
        ))}
      </div>
      <div className={styles.ctaContainer}>
        <span className={styles.ctaText}>Vamos construir algo juntos?</span>
        <button className={styles.ctaButton}>Entrar em contato</button>
      </div>
    </section>
  );
} 