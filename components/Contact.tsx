'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
}

function CalendlyModal({ isOpen, onClose }: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl w-full max-w-4xl h-[90vh] max-h-[800px] overflow-hidden"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900">
                  Schedule Your Strategy Call
                </h3>
                <motion.button
                  onClick={onClose}
                  className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              </div>

              {/* Calendly Iframe */}
              <div className="h-full pb-16">
                <iframe
                  src="https://calendly.com/onecallaway/strategy-call"
                  className="w-full h-full rounded-b-2xl"
                  loading="lazy"
                  title="Schedule a Strategy Call"
                />
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false)

  const openCalendly = () => setIsCalendlyOpen(true)
  const closeCalendly = () => setIsCalendlyOpen(false)

  return (
    <>
      <div ref={containerRef} className="relative py-24 lg:py-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          {/* Large Central Glow */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-radial from-primary-200/30 via-primary-300/20 to-transparent rounded-full blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Floating Orbs */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-32 bg-gradient-radial from-primary-200/20 to-transparent rounded-full blur-2xl"
              style={{
                top: `${20 + i * 15}%`,
                left: `${10 + i * 20}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, 20, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 6 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 1.5,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main CTA Card */}
          <motion.div
            className="glass-strong rounded-3xl p-12 lg:p-16 text-center relative overflow-hidden"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Background Glow Inside Card */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-200/10 via-primary-300/5 to-transparent rounded-3xl"></div>
            
            <div className="relative z-10">
              {/* Quantum Headline */}
              <motion.h2
                className="text-4xl md:text-5xl lg:text-6xl font-cyber font-bold text-white mb-8 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                You&apos;re One{' '}
                <motion.span 
                  className="neon-blue"
                  animate={{
                    textShadow: [
                      '0 0 10px rgba(0,212,255,0.5)',
                      '0 0 30px rgba(0,212,255,0.8)',
                      '0 0 10px rgba(0,212,255,0.5)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  NEURAL LINK
                </motion.span>
                {' '}Away from{' '}
                <motion.span 
                  className="neon-purple"
                  animate={{
                    textShadow: [
                      '0 0 10px rgba(138,43,226,0.5)',
                      '0 0 30px rgba(138,43,226,0.8)',
                      '0 0 10px rgba(138,43,226,0.5)'
                    ]
                  }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                >
                  QUANTUM PIPELINE DOMINANCE
                </motion.span>
              </motion.h2>

              {/* Quantum Subheadline */}
              <motion.p
                className="text-xl lg:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed font-tech"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Whether you&apos;re an established{' '}
                <span className="neon-cyan">quantum investor</span> or initializing{' '}
                <span className="neon-blue">neural scale protocols</span>, our{' '}
                <span className="neon-purple">quantum-trained neural agents</span> interface directly 
                with your acquisition matrix—deploy{' '}
                <span className="neon-pink">infinite deal execution</span> with zero system friction.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
              <motion.button
                onClick={openCalendly}
                className="relative group px-10 py-5 rounded-full font-cyber text-xl tracking-wider overflow-hidden electric-border"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 60px rgba(0, 212, 255, 0.6)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                />
                <span className="relative z-10 text-white font-bold">INITIATE NEURAL INTERFACE</span>
              </motion.button>
              
              <motion.button
                className="relative group px-10 py-5 rounded-full font-cyber text-xl tracking-wider cyber-glass hover:cyber-glass-strong transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-neon-cyan">ACCESS QUANTUM PROTOCOLS</span>
              </motion.button>
              </motion.div>

              {/* Trust Signals */}
              <motion.div
                className="grid md:grid-cols-3 gap-8"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                {[
                  {
                    icon: (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                    title: 'No Long-term Contracts',
                    subtitle: 'Monthly agreements only'
                  },
                  {
                    icon: (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                    title: 'Quick Setup',
                    subtitle: 'Running in 7-10 days'
                  },
                  {
                    icon: (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    ),
                    title: 'Founded by Wholesalers',
                    subtitle: 'Built by active investors'
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-200 to-primary-300 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 shadow-lg">
                      {item.icon}
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-white/70">{item.subtitle}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-8 right-8 w-24 h-24 bg-gradient-to-br from-primary-200/30 to-primary-300/30 rounded-full blur-2xl"></div>
            <div className="absolute bottom-8 left-8 w-32 h-32 bg-gradient-to-br from-primary-100/20 to-primary-200/20 rounded-full blur-2xl"></div>
          </motion.div>

          {/* Optional Contact Form */}
          <motion.div
            className="mt-16 glass rounded-2xl p-8 lg:p-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              Prefer to Send a Message First?
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary-200 transition-all"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary-200 transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">Company</label>
                <input
                  type="text"
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary-200 transition-all"
                  placeholder="Your company name"
                />
              </div>
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">Current Monthly Volume</label>
                <select className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-200 transition-all">
                  <option value="">Select volume</option>
                  <option value="0-5">0-5 deals/month</option>
                  <option value="5-10">5-10 deals/month</option>
                  <option value="10-20">10-20 deals/month</option>
                  <option value="20+">20+ deals/month</option>
                </select>
              </div>
            </div>
            
            <div className="mt-6">
              <label className="block text-white/80 text-sm font-medium mb-2">Message</label>
              <textarea
                rows={4}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary-200 transition-all resize-none"
                placeholder="Tell us about your current challenges and goals..."
              />
            </div>
            
            <div className="mt-8 text-center">
              <motion.button
                className="bg-gradient-to-r from-primary-200 to-primary-300 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(109, 215, 253, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Calendly Modal */}
      <CalendlyModal isOpen={isCalendlyOpen} onClose={closeCalendly} />
    </>
  )
}
