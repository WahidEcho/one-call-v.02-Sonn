'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const features = [
  {
    title: 'Built by Wholesalers',
    description: 'Founded and operated by active high-volume wholesalers who understand assignment fees, motivated sellers, and off-market deals.',
    color: 'primary-600'
  },
  {
    title: 'Highly Trained Real-Estate VAs',
    description: 'All VAs are trained on wholesaling from A to Z: lead qualification, seller motivation, acquisition handoff, and CRM discipline.',
    color: 'blue-600'
  },
  {
    title: 'Elite Communication & Accountability',
    description: 'Daily KPI reporting, clear expectations, and transparent performance—no guessing, no chasing.',
    color: 'green-600'
  },
  {
    title: 'Systems That Scale',
    description: 'Processes, tools, and workflows tuned for consistent deal flow and repeatable operations.',
    color: 'purple-600'
  },
  {
    title: 'Tier-A Investor Focus',
    description: 'We partner with serious investors and teams who want to dominate their markets through proven systems.',
    color: 'amber-600'
  },
  {
    title: 'Dedicated Account Managers',
    description: 'Every client has a dedicated account manager to ensure smooth communication and support.',
    color: 'amber-600'
  }
]

interface FeatureCardProps {
  feature: typeof features[0]
  index: number
  isInView: boolean
}

function FeatureCard({ feature, index, isInView }: FeatureCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative group h-full w-full max-w-sm mx-auto"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.15,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative professional-glass rounded-2xl p-8 h-full border border-secondary-200 hover:border-primary-300 transition-all duration-300 overflow-hidden">
        {/* Hover Background Effect */}
        <motion.div
          className="absolute inset-0 bg-primary-50 opacity-0"
          animate={{ opacity: isHovered ? 0.5 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Content */}
        <div className="relative z-10">

          {/* Title */}
          <h3 className="text-xl font-bold text-secondary-900 mb-4 leading-tight">
            {feature.title}
          </h3>

          {/* Description */}
          <p className="text-secondary-600 leading-relaxed text-sm">
            {feature.description}
          </p>

          {/* Bottom Accent */}
          <motion.div 
            className={`absolute bottom-0 left-0 right-0 h-1 bg-${feature.color} rounded-b-2xl`}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            style={{ originX: 0 }}
          />
        </div>
      </div>
    </motion.div>
  )
}

export default function Features() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.1 })

  return (
    <div ref={containerRef} className="relative py-32 overflow-hidden">
      {/* Professional Background Elements */}
      <div className="absolute inset-0">
        {/* Static positioned elements to avoid hydration issues */}
        {[
          { top: 20, left: 10 }, { top: 35, left: 85 }, { top: 55, left: 15 },
          { top: 75, left: 90 }, { top: 85, left: 25 }, { top: 15, left: 70 },
          { top: 65, left: 75 }, { top: 45, left: 5 }, { top: 90, left: 60 }
        ].map((pos, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary-400 rounded-full opacity-50"
            style={{
              top: `${pos.top}%`,
              left: `${pos.left}%`,
            }}
            animate={{
              scale: [0.5, 1.2, 0.5],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 5 + (i % 3),
              repeat: Infinity,
              delay: i * 0.8,
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
          <div className="text-white text-sm font-semibold tracking-wide uppercase mb-4 drop-shadow-md">
            What Makes Us Different
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white drop-shadow-lg">Why One Call Away</span><br/>
            <span className="text-white/90 drop-shadow-md">Stands Apart</span>
          </h2>
          <p className="text-white text-lg max-w-3xl mx-auto leading-relaxed">
            We're not just another VA company. We're real estate investors who built the VA service we wish existed when we started.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              feature={feature}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

      </div>
    </div>
  )
}