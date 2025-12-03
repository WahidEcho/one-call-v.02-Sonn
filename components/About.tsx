'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const problemData = {
  title: 'The Problem',
  subtitle: 'Most VA companies don\'t understand wholesaling. You get:',
  items: [
    'Untrained assistants who don\'t know what a good deal looks like',
    'Weak communication and no accountability',
    'Time wasted on babysitting instead of closing'
  ]
}

const solutionData = {
  title: 'Our Solution',
  subtitle: 'One Call Away was created by Nick Kamrada and Loaay Hossam, two active wholesalers who were tired of that. We built a VA agency engineered specifically for wholesalers, real-estate investors, and realtors.',
  highlight: 'We provide deal-focused partners, not generic VAs—so your callers actually help you move deals, not just make noise.'
}

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
        {/* Big Container Box */}
        <motion.div 
          className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/50 max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          {/* Section Header Inside Big Box */}
          <div className="text-center mb-12">
            <div className="text-primary-600 text-sm font-semibold tracking-wide uppercase mb-4">
              Problem & Solution
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-gray-900">Why Most VA Services</span><br/>
              <span className="text-red-500">Fail</span><br/>
              <span className="text-gray-700">vs Our Solution</span>
            </h2>
          </div>

          {/* Problem vs Solution Grid Inside Big Box */}
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* The Problem - Dark Blue Background */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-3xl p-8 lg:p-10 h-full" style={{
                background: 'linear-gradient(135deg, #1077fe 0%, #49b7ff 100%)'
              }}>
                {/* Header */}
                <div className="mb-8">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    {problemData.title}
                  </h3>
                  <p className="text-white/90 text-base leading-relaxed">
                    {problemData.subtitle}
                  </p>
                </div>

                {/* Problem List */}
                <div className="space-y-5">
                  {problemData.items.map((item, itemIndex) => (
                    <motion.div 
                      key={itemIndex}
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0, x: -30 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.4 + itemIndex * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-white/90 text-base leading-relaxed">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Our Solution - Light Background */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative"
            >
              <div className="bg-gray-50 rounded-3xl p-8 lg:p-10 h-full border border-gray-200">
                {/* Header */}
                <div className="mb-8">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                    {solutionData.title}
                  </h3>
                  <p className="text-gray-700 text-base leading-relaxed mb-6">
                    {solutionData.subtitle}
                  </p>
                  <p className="text-gray-900 text-base leading-relaxed font-semibold">
                    {solutionData.highlight}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </div>
  )
}