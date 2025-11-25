'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const features = [
  {
    icon: '⚠️',
    title: 'The Problem',
    subtitle: 'Legacy VA Services',
    items: [
      'Untrained assistants who don\'t understand real estate deals',
      'Poor communication and no accountability systems',
      'Time wasted on managing instead of closing deals'
    ],
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
    iconBg: 'bg-red-100',
    textColor: 'text-red-800'
  },
  {
    icon: '⚡',
    title: 'Our Solution',
    subtitle: 'Professional VA System',
    items: [
      'Real estate-trained VAs who understand the deal process',
      'Clear communication protocols and daily reporting',
      'Systems designed for consistent deal flow and scaling'
    ],
    bgColor: 'bg-primary-50',
    borderColor: 'border-primary-200',
    iconBg: 'bg-primary-100',
    textColor: 'text-primary-800'
  }
]

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })

  return (
    <div ref={containerRef} className="relative py-32 overflow-hidden">
      {/* Professional Background Elements */}
      <div className="absolute inset-0">
        {/* Static positioned elements to avoid hydration issues */}
        {[
          { top: 15, left: 20 }, { top: 30, left: 75 }, { top: 50, left: 25 },
          { top: 70, left: 80 }, { top: 85, left: 15 }, { top: 20, left: 60 },
          { top: 65, left: 40 }, { top: 40, left: 90 }, { top: 80, left: 50 }
        ].map((pos, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary-300 rounded-full opacity-40"
            style={{
              top: `${pos.top}%`,
              left: `${pos.left}%`,
            }}
            animate={{
              scale: [0.5, 1, 0.5],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + (i % 3),
              repeat: Infinity,
              delay: i * 0.7,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <div className="text-primary-600 text-sm font-semibold tracking-wide uppercase mb-4">
            Problem & Solution
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-secondary-900">Why Most VA Services</span><br/>
            <span className="text-red-600">Fail</span><br/>
            <span className="text-primary-600">vs Our Solution</span>
          </h2>
        </motion.div>

        {/* Problem vs Solution Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-stretch">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -100 : 100 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 + index * 0.2 }}
              className="relative"
            >
              <div className={`relative professional-glass rounded-3xl p-8 lg:p-10 border-2 ${feature.borderColor} ${feature.bgColor} overflow-hidden h-full`}>
                {/* Header */}
                <div className="flex items-center space-x-4 mb-8">
                  <div className={`w-16 h-16 ${feature.iconBg} rounded-2xl flex items-center justify-center text-2xl`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className={`text-2xl lg:text-3xl font-bold ${feature.textColor} mb-1`}>
                      {feature.title}
                    </h3>
                    <div className="text-secondary-600 font-medium text-sm">
                      {feature.subtitle}
                    </div>
                  </div>
                </div>

                {/* Feature List */}
                <div className="space-y-6">
                  {feature.items.map((item, itemIndex) => (
                    <motion.div 
                      key={itemIndex}
                      className="flex items-start space-x-4"
                      initial={{ opacity: 0, x: -30 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.2 + itemIndex * 0.1 }}
                    >
                      <div className={`w-6 h-6 border-2 ${feature.borderColor} rounded-full flex items-center justify-center mt-1 flex-shrink-0`}>
                        <div className={`w-2 h-2 ${index === 0 ? 'bg-red-500' : 'bg-primary-500'} rounded-full`}></div>
                      </div>
                      <div className="professional-glass rounded-lg px-4 py-3">
                        <span className="text-secondary-800 text-sm leading-relaxed">
                          {item}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="professional-glass-strong rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-6">
              Ready for a Better VA Experience?
            </h3>
            <p className="text-secondary-700 text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
              Stop wasting time with generic VAs. Get real estate-trained professionals who understand your business from day one.
            </p>
            <motion.button
              className="px-10 py-5 bg-primary-600 text-white rounded-xl font-semibold text-lg hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              See Our VA Packages
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}