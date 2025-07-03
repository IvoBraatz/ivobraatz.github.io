'use client'

import { useEffect } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import SiteForAll from '@/components/SiteForAll/SiteForAll'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  useEffect(() => {
    // Adicionar animações de scroll reveal
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up', 'animate-in')
        }
      })
    }, observerOptions)

    const sections = document.querySelectorAll('section')
    sections.forEach(section => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <main>
      <Header />
      <Hero />
      <About />
      <SiteForAll />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
} 