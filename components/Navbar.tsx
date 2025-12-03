'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll } from 'framer-motion'
import Image from 'next/image'

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Features', href: '#features' },
  { name: 'Process', href: '#call-flow' },
  { name: 'Packages', href: '#packages' },
  { name: 'Tools', href: '#tools' },
  { name: 'Founders', href: '#founders' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    setActiveSection(href)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary-500 origin-left z-[500]"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Main Navbar */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-[500] transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-primary-100' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <motion.button
              onClick={scrollToTop}
              className="flex items-center space-x-3 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-md">
                <Image
                  src="/logo.png"
                  alt="One Call Away Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span className={`text-xl font-bold transition-colors duration-500 ${
                isScrolled ? 'text-secondary-900' : 'text-white'
              }`}>
                One Call Away
              </span>
            </motion.button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative text-sm font-medium transition-colors duration-500 ${
                    activeSection === item.href 
                      ? 'text-primary-600' 
                      : isScrolled 
                        ? 'text-secondary-700 hover:text-primary-600' 
                        : 'text-white hover:text-white/80'
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  {item.name}
                  {activeSection === item.href && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-600"
                      layoutId="navbar-indicator"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              className={`px-6 py-2 rounded-lg font-semibold text-sm transition-all duration-500 shadow-md hover:shadow-lg ${
                isScrolled 
                  ? 'bg-primary-600 text-white hover:bg-primary-700' 
                  : 'bg-white text-primary-600 hover:bg-white/90'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Book a Call
            </motion.button>
          </div>
        </div>
      </motion.nav>
    </>
  )
}