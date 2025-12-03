'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import AnimatedLogoSVG from './AnimatedLogoSVG'

const stats = [
  { label: 'CALLS TODAY', value: 2847, suffix: '', color: 'primary' },
  { label: 'QUALIFIED LEADS', value: 186, suffix: '', color: 'secondary' },
  { label: 'APPOINTMENTS SET', value: 124, suffix: '', color: 'accent' },
]

const callLogItems = [
  '📞 Motivated seller contacted → Appointment scheduled',
  '✅ Lead qualification complete → High priority',
  '💰 Deal analysis finished → $185K ARV detected',
  '📅 Callback requested → Added to priority queue',
  '⭐ Appointment confirmed → Meeting scheduled',
]

function AnimatedCounter({ value, color, duration = 2500 }: { value: number; color: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const [shouldStart, setShouldStart] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  useEffect(() => {
    if (isInView && !shouldStart) {
      setShouldStart(true)
    }
  }, [isInView, shouldStart])

  useEffect(() => {
    if (!shouldStart) return

    let startTimestamp: number
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)
      setCount(Math.floor(progress * value))
      if (progress < 1) {
        window.requestAnimationFrame(step)
      }
    }
    window.requestAnimationFrame(step)
  }, [shouldStart, value, duration])

  return (
    <div ref={ref} className="text-primary-600 professional-heading text-2xl lg:text-3xl font-bold">
      {count.toLocaleString()}
    </div>
  )
}

function LiveDashboard() {
  const [activeItems, setActiveItems] = useState<number[]>([0])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveItems(prev => {
        const nextIndex = (Math.max(...prev) + 1) % callLogItems.length
        return [nextIndex]
      })
    }, 2500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-32 overflow-hidden rounded-xl professional-glass p-4">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-50 to-primary-100/50"></div>
      
      {callLogItems.map((item, index) => (
        <motion.div
          key={index}
          className={`absolute left-4 right-4 flex items-center space-x-3 text-sm ${
            activeItems.includes(index) ? 'text-primary-700 font-medium' : 'text-secondary-400'
          }`}
          initial={{ opacity: 0, x: -100 }}
          animate={{
            opacity: activeItems.includes(index) ? 1 : 0.3,
            x: activeItems.includes(index) ? 0 : -20,
            y: activeItems.includes(index) ? 16 : (index - activeItems[0]) * 28 + 16,
          }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <motion.div
            className={`w-2 h-2 rounded-full ${
              activeItems.includes(index) ? 'bg-primary-500' : 'bg-secondary-300'
            }`}
            animate={activeItems.includes(index) ? { 
              scale: [1, 1.2, 1],
            } : {}}
            transition={{ duration: 1, repeat: activeItems.includes(index) ? Infinity : 0 }}
          />
          <span>{item}</span>
        </motion.div>
      ))}
      
      {/* Progress indicator */}
      <motion.div
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-400 to-transparent"
        animate={{ x: ['-100%', '100%'] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  )
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.1 })

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-16">
      {/* Professional Background Elements */}
      <div className="absolute inset-0">
        {/* Static positioned elements to avoid hydration issues */}
        {[
          { top: 10, left: 15 }, { top: 25, left: 80 }, { top: 40, left: 30 },
          { top: 60, left: 70 }, { top: 80, left: 20 }, { top: 15, left: 60 },
          { top: 70, left: 85 }, { top: 35, left: 10 }, { top: 90, left: 45 },
          { top: 20, left: 90 }, { top: 55, left: 25 }, { top: 85, left: 75 }
        ].map((pos, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary-300 rounded-full opacity-60"
            style={{
              top: `${pos.top}%`,
              left: `${pos.left}%`,
            }}
            animate={{
              scale: [0.5, 1, 0.5],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + (i % 3),
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
        
        {/* Subtle background gradients */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-primary-200/30 via-primary-100/20 to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -50, 25, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content - Left */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-center lg:text-left relative"
          >
            {/* Professional Headline */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="text-white text-sm font-semibold tracking-wide uppercase mb-3 drop-shadow-md">
                PROFESSIONAL VA SERVICES
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <motion.span 
                  className="block text-white drop-shadow-lg"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 1, delay: 0.7 }}
                >
                  Cold Calling & VAs
                </motion.span>
                <motion.span 
                  className="block text-white/90 drop-shadow-md"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 1, delay: 0.9 }}
                >
                  Built by Wholesalers,
                </motion.span>
                <motion.span 
                  className="block text-white drop-shadow-lg"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 1, delay: 1.1 }}
                >
                  for Wholesalers
                </motion.span>
              </h1>

              <motion.p 
                className="text-lg text-white/85 mb-8 leading-relaxed drop-shadow-md"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 1.3 }}
              >
                One Call Away is a premium real-estate virtual assistant and cold-calling agency founded by active wholesalers. We give investors, wholesalers, and realtors highly trained VAs who actually understand the deal game—from first call to closed assignment.
              </motion.p>

              {/* Feature bullets */}
              <motion.div 
                className="grid gap-4 mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 1.5 }}
              >
                {[
                  'Real-estate trained VAs only',
                  'Lead qualification & pipeline support', 
                  'Built and run by active wholesalers'
                ].map((feature, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 1.7 + index * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-white/90 font-medium drop-shadow-md">{feature}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 1.9 }}
              >
                <motion.button
                  className="px-8 py-4 bg-primary-600 text-white rounded-xl font-semibold text-lg hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Book a Free Strategy Call
                </motion.button>
                <motion.button
                  onClick={() => scrollToSection('#packages')}
                  className="px-8 py-4 border-2 border-primary-600 text-white rounded-xl font-semibold text-lg hover:bg-primary-50/10 transition-all duration-300"
                  whileHover={{ y: -4 }}
                  whileTap={{ y: -2 }}
                >
                  See VA Packages
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Dashboard - Right */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            {/* Combined Logo and Dashboard Container */}
            <div className="space-y-6">
              {/* Animated Logo */}
              <motion.div
                className="flex justify-center"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1, delay: 0.6 }}
              >
                <AnimatedLogoSVG size={320} />
              </motion.div>

              {/* Compact Professional Dashboard */}
              <div className="professional-glass-strong rounded-2xl p-6 shadow-2xl">
                <h3 className="text-lg font-bold text-secondary-900 mb-4 text-center">Live Performance Dashboard</h3>
                
                {/* Stats Grid - Compact */}
                <div className="grid grid-cols-1 gap-4">
                  {stats.map((stat, index) => (
                    <motion.div 
                      key={index}
                      className="text-center"
                      initial={{ opacity: 0, y: 30 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                    >
                      <AnimatedCounter value={stat.value} color={stat.color} />
                      <div className="text-xs font-medium text-secondary-600 mt-1">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}