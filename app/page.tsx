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
    <main className="z-content always-visible">
      <Navbar />
      
      <section id="hero" className="z-content always-visible">
        <Hero />
      </section>
      
      <section id="about" className="z-content always-visible">
        <About />
      </section>
      
      <section id="features" className="z-content always-visible">
        <Features />
      </section>
      
      <section id="call-flow" className="z-content always-visible">
        <CallFlow />
      </section>
      
      <section id="packages" className="z-content always-visible">
        <Packages />
      </section>
      
      <section id="tools" className="z-content always-visible">
        <Tools />
      </section>
      
      <section id="founders" className="z-content always-visible">
        <Founders />
      </section>
      
      <section id="faq" className="z-content always-visible">
        <FAQ />
      </section>
      
      <section id="contact" className="z-content always-visible">
        <Contact />
      </section>
      
      <div className="z-content always-visible">
        <Footer />
      </div>
    </main>
  )
}

