import '../components/Hero/Hero.css';
import '../styles/home.css';
import { projects } from '../data/projects';
import { skills } from '../data/skills';
import Link from 'next/link';
import SkillBar from '../components/SkillBar/SkillBar';
import Hero from '../components/Hero/Hero';
import ProjectsSection from '../components/ProjectsSection/ProjectsSection';
import SkillsGallery from '../components/SkillsGallery/SkillsGallery';
import ContactSection from '../components/ContactSection/ContactSection';
import ExperienceSection from '../components/ExperienceSection/ExperienceSection';
import ServicesSection from '../components/ServicesSection/ServicesSection';

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsGallery />
      <ContactSection />
    </>
  );
}
