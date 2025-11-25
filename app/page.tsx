'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Features from '@/components/Features'
import CallFlow from '@/components/CallFlow'
import Packages from '@/components/Packages'
import Tools from '@/components/Tools'
import Founders from '@/components/Founders'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <main className="relative min-h-screen">
      <Navbar />
      
      <section id="hero">
        <Hero />
      </section>
      
      <section id="about">
        <About />
      </section>
      
      <section id="features">
        <Features />
      </section>
      
      <section id="call-flow">
        <CallFlow />
      </section>
      
      <section id="packages">
        <Packages />
      </section>
      
      <section id="tools">
        <Tools />
      </section>
      
      <section id="founders">
        <Founders />
      </section>
      
      <section id="faq">
        <FAQ />
      </section>
      
      <section id="contact">
        <Contact />
      </section>
      
      <Footer />
    </main>
  )
}

