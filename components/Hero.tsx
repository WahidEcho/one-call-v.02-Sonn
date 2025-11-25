'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const neuralStats = [
  { label: 'NEURAL CALLS', value: 2847, suffix: '', color: 'neon-blue' },
  { label: 'QUANTUM LEADS', value: 186, suffix: '', color: 'neon-purple' },
  { label: 'SYNAPTIC LINKS', value: 124, suffix: '', color: 'neon-pink' },
]

const dataStreamItems = [
  '⚡ NEURAL LINK ESTABLISHED → MOTIVATED SELLER',
  '🔋 QUANTUM SCAN COMPLETE → HIGH PROBABILITY TARGET',
  '💎 SYNAPTIC ANALYSIS → $185K ARV DETECTED',
  '🚀 NEURAL CALLBACK REQUESTED → PRIORITY QUEUE',
  '⭐ QUANTUM APPOINTMENT → MATRIX SYNCHRONIZED',
]

function QuantumCounter({ value, color, duration = 2500 }: { value: number; color: string; duration?: number }) {
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
    <div ref={ref} className={`neon-${color} font-cyber text-2xl lg:text-3xl font-bold`}>
      {count.toLocaleString()}
    </div>
  )
}

function NeuralDataStream() {
  const [activeStreams, setActiveStreams] = useState<number[]>([0])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStreams(prev => {
        const nextIndex = (Math.max(...prev) + 1) % dataStreamItems.length
        return [nextIndex]
      })
    }, 2500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-32 overflow-hidden rounded-xl cyber-glass p-4">
      <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 via-transparent to-neon-purple/10"></div>
      
      {dataStreamItems.map((item, index) => (
        <motion.div
          key={index}
          className={`absolute left-4 right-4 flex items-center space-x-3 text-sm font-tech ${
            activeStreams.includes(index) ? 'text-neon-cyan' : 'text-white/30'
          }`}
          initial={{ opacity: 0, x: -100 }}
          animate={{
            opacity: activeStreams.includes(index) ? 1 : 0.3,
            x: activeStreams.includes(index) ? 0 : -20,
            y: activeStreams.includes(index) ? 16 : (index - activeStreams[0]) * 28 + 16,
          }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <motion.div
            className={`w-2 h-2 rounded-full ${
              activeStreams.includes(index) ? 'bg-neon-cyan' : 'bg-white/30'
            }`}
            animate={activeStreams.includes(index) ? { 
              scale: [1, 1.5, 1],
              boxShadow: ['0 0 0px rgba(0,255,255,0.5)', '0 0 20px rgba(0,255,255,0.8)', '0 0 0px rgba(0,255,255,0.5)']
            } : {}}
            transition={{ duration: 1, repeat: activeStreams.includes(index) ? Infinity : 0 }}
          />
          <span className="font-mono tracking-wide">{item}</span>
        </motion.div>
      ))}
      
      {/* Data Flow Effect */}
      <motion.div
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-cyan to-transparent"
        animate={{ x: ['-100%', '100%'] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  )
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.1 })

  return (
    <div ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-16">
      {/* Quantum Particle Field Background */}
      <div className="absolute inset-0 particle-field">
        {/* Neural Network Nodes */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-neon-blue rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
        
        {/* Floating Energy Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-neon-blue/20 via-neon-purple/10 to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, 150, -100, 0],
            y: [0, -100, 50, 0],
            scale: [1, 1.2, 0.8, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-80 h-80 bg-gradient-radial from-neon-pink/25 via-neon-purple/15 to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, -120, 80, 0],
            y: [0, 80, -60, 0],
            scale: [0.8, 1.1, 0.9, 0.8],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Quantum Field Lines */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: `
              linear-gradient(45deg, transparent 48%, rgba(0,212,255,0.1) 49%, rgba(0,212,255,0.1) 51%, transparent 52%),
              linear-gradient(-45deg, transparent 48%, rgba(138,43,226,0.1) 49%, rgba(138,43,226,0.1) 51%, transparent 52%)
            `,
            backgroundSize: '60px 60px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '60px 60px'],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Neural Pulse Waves */}
        <div className="absolute inset-0 flex items-center justify-center">
          {[...Array(7)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute border-2 border-neon-cyan/20 rounded-full"
              initial={{ width: 80, height: 80, opacity: 1 }}
              animate={{
                width: [80, 600],
                height: [80, 600],
                opacity: [1, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.6,
                ease: "easeOut"
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Neural Interface */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Neural Command Center - Left */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-center lg:text-left relative"
          >
            {/* Quantum Headline */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="text-neon-blue text-sm font-cyber tracking-widest mb-3">
                NEURAL NETWORK INITIALIZED
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-cyber font-bold leading-tight mb-6">
                <motion.span 
                  className="block text-white"
                  animate={{ 
                    textShadow: [
                      '0 0 0px rgba(255,255,255,0.5)',
                      '0 0 10px rgba(255,255,255,0.8)',
                      '0 0 0px rgba(255,255,255,0.5)'
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  QUANTUM
                </motion.span>
                <motion.span 
                  className="block neon-blue"
                  animate={{ 
                    textShadow: [
                      '0 0 10px rgba(0,212,255,0.5)',
                      '0 0 30px rgba(0,212,255,0.8)',
                      '0 0 10px rgba(0,212,255,0.5)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  COLD CALLING
                </motion.span>
                <motion.span 
                  className="block neon-purple"
                  animate={{ 
                    textShadow: [
                      '0 0 10px rgba(138,43,226,0.5)',
                      '0 0 30px rgba(138,43,226,0.8)',
                      '0 0 10px rgba(138,43,226,0.5)'
                    ]
                  }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
                >
                  NEURAL MATRIX
                </motion.span>
              </h1>
            </motion.div>

            {/* Quantum Description */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <p className="text-lg md:text-xl text-white/80 leading-relaxed font-tech">
                <span className="neon-cyan">ONE CALL AWAY</span> operates the most advanced{' '}
                <span className="text-neon-blue">neural network</span> for real-estate acquisition.
                Our <span className="text-neon-purple">quantum-trained VAs</span> interface directly 
                with motivated sellers through <span className="text-neon-pink">synaptic protocols</span> 
                designed by elite wholesalers.
              </p>
            </motion.div>

            {/* Neural Features */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
            >
              {[
                { text: 'QUANTUM-TRAINED NEURAL ASSISTANTS', icon: '⚡' },
                { text: 'SYNAPTIC LEAD QUALIFICATION PROTOCOLS', icon: '🔋' },
                { text: 'NEURAL MATRIX BUILT BY ACTIVE WHOLESALERS', icon: '💎' }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center justify-center lg:justify-start space-x-4 mb-4 group"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.2 }}
                  whileHover={{ x: 10 }}
                >
                  <div className="text-2xl">{feature.icon}</div>
                  <div className="cyber-glass rounded-lg px-4 py-2 group-hover:cyber-glass-strong transition-all duration-300">
                    <span className="text-neon-cyan font-cyber text-sm tracking-wider">
                      {feature.text}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Quantum Command Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.8 }}
            >
              <motion.button
                className="relative group px-8 py-4 rounded-full font-cyber text-lg tracking-wider overflow-hidden electric-border"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 40px rgba(0, 212, 255, 0.6)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                />
                <span className="relative z-10 text-white font-bold">INITIATE NEURAL LINK</span>
              </motion.button>
              
              <motion.button
                className="relative group px-8 py-4 rounded-full font-cyber text-lg tracking-wider cyber-glass hover:cyber-glass-strong transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-neon-cyan">ACCESS QUANTUM PROTOCOLS</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Neural Dashboard - Right */}
          <motion.div
            initial={{ opacity: 0, x: 100, rotateY: 45 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="relative transform-3d"
          >
            {/* Holographic Dashboard Container */}
            <div className="holographic cyber-glass-strong rounded-3xl p-8 relative overflow-hidden morph-shape">
              {/* Neural Scan Lines */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-neon-cyan to-transparent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              />
              
              <div className="relative z-10">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-3">
                    <motion.div
                      className="w-4 h-4 bg-neon-green rounded-full"
                      animate={{ 
                        boxShadow: [
                          '0 0 0px rgba(57,255,20,0.5)',
                          '0 0 20px rgba(57,255,20,0.8)',
                          '0 0 0px rgba(57,255,20,0.5)'
                        ]
                      }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    <h3 className="text-neon-cyan font-cyber text-xl tracking-wider">NEURAL MATRIX</h3>
                  </div>
                  <div className="text-neon-green font-cyber text-sm">ONLINE</div>
                </div>

                {/* Quantum Stats Grid */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {neuralStats.map((stat, index) => (
                    <motion.div
                      key={index}
                      className="text-center p-4 cyber-glass rounded-xl relative overflow-hidden group"
                      initial={{ opacity: 0, y: 30, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                      transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {/* Particle Effect */}
                      <motion.div
                        className={`absolute inset-0 bg-${stat.color}/10 rounded-xl`}
                        animate={{ opacity: [0, 0.5, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                      />
                      
                      <div className="relative z-10">
                        <QuantumCounter value={stat.value} color={stat.color} />
                        <div className={`text-${stat.color} text-xs font-cyber tracking-widest mt-2`}>
                          {stat.label}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Neural Data Stream */}
                <div className="space-y-4">
                  <h4 className="text-neon-cyan font-cyber text-sm tracking-widest mb-4">
                    NEURAL DATA STREAM
                  </h4>
                  <NeuralDataStream />
                </div>
              </div>

              {/* Floating Quantum Particles */}
              {Array.from({ length: 5 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-neon-cyan rounded-full"
                  style={{
                    top: `${20 + i * 15}%`,
                    right: `${10 + i * 10}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 1, 0.3],
                    scale: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.4,
                    ease: 'easeInOut',
                  }}
                />
              ))}
            </div>

            {/* Orbital Elements */}
            <motion.div
              className="absolute -top-6 -right-6 w-24 h-24 border-2 border-neon-purple rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            >
              <motion.div
                className="absolute top-2 left-2 w-4 h-4 bg-neon-purple rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
