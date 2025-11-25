'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const systemFailures = [
  'LEGACY VAS WITH ZERO NEURAL TRAINING IN DEAL RECOGNITION',
  'CORRUPTED COMMUNICATION PROTOCOLS & ZERO ACCOUNTABILITY METRICS',
  'CPU CYCLES WASTED ON SYSTEM BABYSITTING INSTEAD OF DEAL EXECUTION'
]

const quantumSolutions = [
  { metric: '100%', label: 'QUANTUM TRAINED', color: 'neon-blue' },
  { metric: '24/7', label: 'NEURAL SUPPORT', color: 'neon-purple' },
  { metric: '∞', label: 'INFINITE SCALE', color: 'neon-pink' }
]

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, threshold: 0.2 })

  return (
    <div ref={containerRef} className="relative py-32 overflow-hidden">
      {/* Quantum Field Background */}
      <div className="absolute inset-0">
        {/* Neural Network Grid */}
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(0,212,255,0.1) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(138,43,226,0.1) 0%, transparent 50%),
              linear-gradient(90deg, transparent 24%, rgba(0,212,255,0.03) 25%, rgba(0,212,255,0.03) 26%, transparent 27%, transparent 74%, rgba(138,43,226,0.03) 75%, rgba(138,43,226,0.03) 76%, transparent 77%),
              linear-gradient(transparent 24%, rgba(255,0,110,0.03) 25%, rgba(255,0,110,0.03) 26%, transparent 27%, transparent 74%, rgba(0,212,255,0.03) 75%, rgba(0,212,255,0.03) 76%, transparent 77%)
            `,
            backgroundSize: '100px 100px, 150px 150px, 50px 50px, 50px 50px',
          }}
          animate={{
            backgroundPosition: [
              '0% 0%, 100% 100%, 0px 0px, 0px 0px',
              '100% 50%, 0% 50%, 50px 50px, 50px 50px',
              '50% 100%, 50% 0%, 100px 100px, 100px 100px',
              '0% 0%, 100% 100%, 0px 0px, 0px 0px'
            ],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
        
        {/* Floating Quantum Particles */}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 ${i % 3 === 0 ? 'bg-neon-blue' : i % 3 === 1 ? 'bg-neon-purple' : 'bg-neon-pink'} rounded-full`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 8 + 4,
              repeat: Infinity,
              delay: Math.random() * 5,
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
          <div className="text-neon-blue text-sm font-cyber tracking-[0.3em] mb-4">
            SYSTEM ANALYSIS COMPLETE
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-cyber font-bold mb-6">
            <span className="text-white">LEGACY SYSTEMS</span>
            <br />
            <span className="neon-purple">VS</span>
            <br />
            <span className="neon-blue">QUANTUM EVOLUTION</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-stretch">
          {/* System Failures - Left */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -100, rotateY: 45 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            {/* Error Container */}
            <div className="relative holographic cyber-glass rounded-3xl p-8 lg:p-10 border-2 border-neon-red/30 overflow-hidden group">
              {/* Glitch Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-neon-red/10 to-transparent"
                animate={{
                  x: ['-100%', '100%', '-100%'],
                  opacity: [0, 0.3, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              
              {/* Header */}
              <div className="flex items-center space-x-4 mb-8">
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-neon-red to-red-600 rounded-2xl flex items-center justify-center relative overflow-hidden"
                  animate={{
                    boxShadow: [
                      '0 0 0px rgba(255,7,58,0.5)',
                      '0 0 30px rgba(255,7,58,0.8)',
                      '0 0 0px rgba(255,7,58,0.5)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <motion.div
                    animate={{ rotate: [0, 180, 360] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  >
                    ⚠️
                  </motion.div>
                  
                  {/* Warning Pulses */}
                  <motion.div
                    className="absolute inset-0 border-2 border-neon-red rounded-2xl"
                    animate={{ scale: [1, 1.2, 1], opacity: [1, 0, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </motion.div>
                
                <div>
                  <h3 className="text-2xl lg:text-3xl font-cyber font-bold neon-red tracking-wider">
                    SYSTEM FAILURES
                  </h3>
                  <div className="text-neon-red/70 font-cyber text-sm tracking-widest">
                    LEGACY VA PROTOCOLS
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {systemFailures.map((failure, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4 group/item"
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                  >
                    <motion.div
                      className="w-6 h-6 border-2 border-neon-red rounded-full flex items-center justify-center mt-1 flex-shrink-0"
                      animate={{ rotate: [0, 180, 360] }}
                      transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                    >
                      <div className="w-2 h-2 bg-neon-red rounded-full"></div>
                    </motion.div>
                    
                    <div className="cyber-glass rounded-lg px-4 py-3 group-hover/item:cyber-glass-strong transition-all duration-300">
                      <span className="text-neon-red/90 font-tech text-sm leading-relaxed tracking-wide">
                        {failure}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quantum Solution - Right */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 100, rotateY: -45 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            {/* Success Container */}
            <div className="relative holographic cyber-glass-strong rounded-3xl p-8 lg:p-10 border-2 border-neon-blue/30 overflow-hidden">
              {/* Energy Flow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-blue/20 to-transparent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
              
              {/* Header */}
              <div className="flex items-center space-x-4 mb-8">
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-neon-blue to-electric-blue rounded-2xl flex items-center justify-center relative overflow-hidden"
                  animate={{
                    boxShadow: [
                      '0 0 0px rgba(0,212,255,0.5)',
                      '0 0 30px rgba(0,212,255,0.8)',
                      '0 0 0px rgba(0,212,255,0.5)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                  >
                    ⚡
                  </motion.div>
                  
                  {/* Success Rings */}
                  {Array.from({ length: 3 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute inset-0 border border-neon-cyan rounded-2xl"
                      animate={{ 
                        scale: [1, 1.3, 1],
                        opacity: [0.8, 0, 0.8]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        delay: i * 0.6
                      }}
                    />
                  ))}
                </motion.div>
                
                <div>
                  <h3 className="text-2xl lg:text-3xl font-cyber font-bold neon-blue tracking-wider">
                    QUANTUM SOLUTION
                  </h3>
                  <div className="text-neon-cyan font-cyber text-sm tracking-widest">
                    NEURAL MATRIX PROTOCOL
                  </div>
                </div>
              </div>

              {/* Solution Description */}
              <motion.div
                className="mb-8 cyber-glass rounded-xl p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <p className="text-white/90 text-lg leading-relaxed font-tech">
                  <span className="neon-cyan">QUANTUM MATRIX</span> designed by{' '}
                  <span className="neon-blue font-cyber">NICK KAMRADA</span> and{' '}
                  <span className="neon-purple font-cyber">LOAAY HOSSAM</span>—
                  two active wholesaler architects. Our neural network deploys{' '}
                  <span className="text-neon-pink">deal-focused quantum agents</span>, 
                  not legacy protocols. Real{' '}
                  <span className="text-neon-green">synaptic deal movement</span>, 
                  zero system noise.
                </p>
              </motion.div>

              {/* Quantum Metrics */}
              <div className="grid grid-cols-3 gap-4">
                {quantumSolutions.map((solution, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-4 cyber-glass rounded-xl relative overflow-hidden group"
                    initial={{ opacity: 0, y: 30, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{ duration: 0.8, delay: 1.2 + index * 0.2 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {/* Quantum Glow */}
                    <motion.div
                      className={`absolute inset-0 bg-${solution.color}/10 rounded-xl`}
                      animate={{ opacity: [0, 0.5, 0] }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.8
                      }}
                    />
                    
                    <div className="relative z-10">
                      <div className={`text-3xl font-cyber font-bold neon-${solution.color} mb-2`}>
                        {solution.metric}
                      </div>
                      <div className={`text-${solution.color} text-xs font-cyber tracking-widest`}>
                        {solution.label}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quantum CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.8 }}
        >
          <div className="cyber-glass-strong rounded-3xl p-12 max-w-4xl mx-auto relative overflow-hidden">
            {/* Data Streams */}
            <motion.div
              className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-neon-cyan to-transparent"
              animate={{ scaleX: [0, 1, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            
            <h3 className="text-3xl lg:text-4xl font-cyber font-bold neon-blue mb-6 tracking-wider">
              READY FOR QUANTUM EVOLUTION?
            </h3>
            <p className="text-white/80 text-lg mb-8 leading-relaxed font-tech max-w-2xl mx-auto">
              Initialize neural link with wholesaler-trained quantum agents. 
              Transform your pipeline from legacy system noise to pure deal execution.
            </p>
            
            <motion.button
              className="relative group px-10 py-5 rounded-full font-cyber text-lg tracking-wider overflow-hidden electric-border"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 50px rgba(0, 212, 255, 0.6)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              />
              <span className="relative z-10 text-white font-bold">INITIATE QUANTUM PROTOCOL</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
