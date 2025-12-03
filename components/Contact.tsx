'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

// Modal Component
const Modal = ({ isOpen, onClose, children }: { 
  isOpen: boolean; 
  onClose: () => void; 
  children: React.ReactNode 
}) => {
  if (!isOpen) return null

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <motion.div
        className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full mx-4 max-h-[80vh] overflow-hidden"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 bg-secondary-200 hover:bg-secondary-300 rounded-full flex items-center justify-center text-secondary-600 hover:text-secondary-800 transition-colors"
        >
          ✕
        </button>
        {children}
      </motion.div>
    </motion.div>
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
      <div ref={containerRef} className="relative py-32 overflow-hidden">
        {/* Professional Background */}
        <div className="absolute inset-0">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-100"></div>
          
          {/* Subtle Pattern */}
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, rgba(147, 197, 253, 0.1) 0%, transparent 50%)`
          }}></div>

          {/* Static positioned elements */}
          {[
            { top: 20, left: 10 }, { top: 40, left: 85 }, { top: 65, left: 20 },
            { top: 85, left: 75 }, { top: 15, left: 60 }, { top: 70, left: 45 }
          ].map((pos, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary-400 rounded-full opacity-40"
              style={{
                top: `${pos.top}%`,
                left: `${pos.left}%`,
              }}
              animate={{
                scale: [0.5, 1.2, 0.5],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 6 + (i % 3),
                repeat: Infinity,
                delay: i * 0.8,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Main Card */}
            <motion.div
              className="professional-glass-strong rounded-3xl p-12 lg:p-16 max-w-5xl mx-auto shadow-2xl border border-primary-200"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
            >
              {/* Professional Headline */}
              <motion.h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                You&apos;re One{' '}
                <span className="text-primary-600">Call</span>
                {' '}Away from{' '}
                <span className="text-secondary-900">a Better Pipeline</span>
              </motion.h2>

              {/* Professional Subheadline */}
              <motion.p
                className="text-xl lg:text-2xl text-secondary-600 mb-12 max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Whether you&apos;re an established investor or just scaling up, our real estate-trained VAs plug directly into your acquisition process—so you can close more deals with less friction.
              </motion.p>

              {/* CTA Button */}
              <motion.div
                className="flex justify-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <motion.button
                  onClick={openCalendly}
                  className="px-10 py-5 bg-primary-600 text-white rounded-xl font-semibold text-lg hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Book a Free Strategy Call
                </motion.button>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                className="max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <h3 className="text-xl font-semibold text-secondary-900 mb-6">
                  Or send us a message
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg border border-secondary-300 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200 transition-all bg-white text-secondary-900"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-lg border border-secondary-300 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200 transition-all bg-white text-secondary-900"
                  />
                </div>
                
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full px-4 py-3 rounded-lg border border-secondary-300 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200 transition-all mb-4 bg-white text-secondary-900"
                />
                
                <textarea
                  rows={4}
                  placeholder="Tell us about your business and VA needs..."
                  className="w-full px-4 py-3 rounded-lg border border-secondary-300 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200 transition-all mb-6 bg-white text-secondary-900 resize-none"
                />
                
                <button className="w-full py-3 bg-secondary-700 text-white rounded-lg font-semibold hover:bg-secondary-800 transition-all duration-300">
                  Send Message
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Calendly Modal */}
      <Modal isOpen={isCalendlyOpen} onClose={closeCalendly}>
        <div className="p-6">
          <h3 className="text-2xl font-bold text-secondary-900 mb-6 text-center">
            Book Your Free Strategy Call
          </h3>
          <iframe
            src="https://calendly.com/your-calendly-username/strategy-call"
            className="w-full h-[600px] rounded-xl"
            loading="lazy"
            title="Schedule a call"
          />
        </div>
      </Modal>
    </>
  )
}