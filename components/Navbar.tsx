'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll } from 'framer-motion'

const navItems = [
  { name: 'NEXUS', href: '#about' },
  { name: 'QUANTUM', href: '#features' },
  { name: 'MATRIX', href: '#call-flow' },
  { name: 'PROTOCOLS', href: '#packages' },
  { name: 'NETWORK', href: '#tools' },
  { name: 'ARCHITECTS', href: '#founders' },
  { name: 'DATABASE', href: '#faq' },
  { name: 'INTERFACE', href: '#contact' },
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

  return (
    <>
      {/* Neural Network Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 z-50 origin-left overflow-hidden"
        style={{ scaleX: scrollYProgress }}
      >
        <div className="h-full bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-electric-flow"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-pink opacity-60 blur-sm"></div>
      </motion.div>
      
      {/* Holographic Navbar */}
      <motion.nav
        className={`fixed top-4 left-4 right-4 z-40 transition-all duration-500 ${
          isScrolled 
            ? 'cyber-glass-strong shadow-2xl' 
            : 'cyber-glass'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={{
          borderRadius: '20px',
          border: '1px solid rgba(0, 212, 255, 0.3)',
        }}
      >
        <div className="relative overflow-hidden rounded-[20px]">
          {/* Electric Border Animation */}
          <motion.div
            className="absolute inset-0 rounded-[20px]"
            style={{
              background: 'linear-gradient(45deg, transparent, rgba(0, 212, 255, 0.3), transparent)',
              backgroundSize: '200% 200%',
            }}
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
          
          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className={`flex items-center justify-between transition-all duration-300 ${
              isScrolled ? 'h-16' : 'h-20'
            }`}>
              {/* Futuristic Logo */}
              <motion.div 
                className="flex items-center space-x-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative">
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-neon-blue to-neon-purple rounded-xl flex items-center justify-center relative overflow-hidden"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  >
                    {/* Rotating Inner Ring */}
                    <motion.div
                      className="absolute inset-1 border-2 border-neon-cyan rounded-lg"
                      animate={{ rotate: -360 }}
                      transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                    />
                    
                    {/* Core Symbol */}
                    <svg className="w-6 h-6 text-white z-10 relative" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" fill="none"/>
                    </svg>
                    
                    {/* Pulsing Glow */}
                    <div className="absolute inset-0 bg-neon-blue rounded-xl opacity-30 animate-pulse-neon"></div>
                  </motion.div>
                  
                  {/* Floating Particles */}
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-neon-cyan rounded-full animate-particle-float"></div>
                  <div className="absolute -bottom-1 -left-1 w-1 h-1 bg-neon-pink rounded-full animate-particle-float" style={{ animationDelay: '1s' }}></div>
                </div>
                
                <div className="flex flex-col">
                  <span className="text-white font-cyber text-xl tracking-wide">ONE CALL</span>
                  <span className="text-neon-blue font-cyber text-sm tracking-widest">NEURAL NETWORK</span>
                </div>
              </motion.div>

              {/* Neural Navigation Links */}
              <div className="hidden lg:flex items-center space-x-1">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`relative px-4 py-2 rounded-lg font-cyber text-sm tracking-wider transition-all duration-300 ${
                      activeSection === item.href
                        ? 'text-neon-blue bg-neon-blue/10 border border-neon-blue/30'
                        : 'text-white/70 hover:text-neon-blue hover:bg-neon-blue/5'
                    }`}
                    whileHover={{ 
                      y: -2,
                      textShadow: '0 0 8px rgba(0, 212, 255, 0.8)'
                    }}
                    whileTap={{ y: 0 }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {/* Holographic Underline */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-neon-blue to-transparent"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {item.name}
                    
                    {/* Data Stream Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-blue/20 to-transparent"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.5 }}
                    />
                  </motion.button>
                ))}
              </div>

              {/* Quantum CTA Button */}
              <motion.button
                onClick={() => scrollToSection('#contact')}
                className="relative group px-6 py-3 rounded-full font-cyber text-sm tracking-wider overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(0, 212, 255, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Electric Border */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-neon-cyan"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                />
                
                {/* Flowing Energy */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                />
                
                <span className="relative z-10 text-white font-bold">NEURAL LINK</span>
              </motion.button>

              {/* Mobile Quantum Menu */}
              <div className="lg:hidden">
                <motion.button
                  className="relative w-10 h-10 rounded-lg cyber-glass flex items-center justify-center group"
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="relative">
                    <motion.div
                      className="w-6 h-0.5 bg-neon-blue mb-1 rounded-full"
                      animate={{ scaleX: [1, 0.8, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.div
                      className="w-6 h-0.5 bg-neon-purple mb-1 rounded-full"
                      animate={{ scaleX: [0.8, 1, 0.8] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                    />
                    <motion.div
                      className="w-6 h-0.5 bg-neon-pink rounded-full"
                      animate={{ scaleX: [1, 0.8, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                    />
                    
                    {/* Quantum Glow */}
                    <div className="absolute inset-0 bg-neon-blue rounded-lg opacity-20 animate-pulse-neon"></div>
                  </div>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>
    </>
  )
}
