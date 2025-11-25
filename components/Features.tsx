'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const quantumFeatures = [
  {
    id: 1,
    title: 'NEURAL ARCHITECTS',
    subtitle: 'Built by Quantum Wholesalers',
    description: 'Designed and operated by active high-volume wholesaler architects who understand assignment fees, motivated sellers, and off-market deal matrices.',
    symbol: '🏗️',
    gradient: 'from-neon-blue to-electric-blue',
    glowColor: 'neon-blue',
    dataPoints: ['ASSIGNMENT FEES', 'MOTIVATED SELLERS', 'OFF-MARKET DEALS']
  },
  {
    id: 2,
    title: 'QUANTUM NEURAL VAS',
    subtitle: 'Synaptic Real-Estate Training',
    description: 'All quantum agents trained on advanced wholesaling protocols: lead qualification algorithms, seller motivation analysis, acquisition handoff systems, and CRM neural networks.',
    symbol: '🧠',
    gradient: 'from-neon-purple to-electric-purple',
    glowColor: 'neon-purple',
    dataPoints: ['LEAD QUALIFICATION', 'SELLER ANALYSIS', 'NEURAL CRM']
  },
  {
    id: 3,
    title: 'ELITE COMMUNICATION',
    subtitle: 'Quantum Accountability Matrix',
    description: 'Real-time KPI neural networks, quantum expectations protocols, and transparent performance matrices—zero system lag, zero chasing algorithms.',
    symbol: '📡',
    gradient: 'from-neon-cyan to-electric-teal',
    glowColor: 'neon-cyan',
    dataPoints: ['REAL-TIME KPI', 'QUANTUM PROTOCOLS', 'ZERO LAG']
  },
  {
    id: 4,
    title: 'INFINITE SCALING',
    subtitle: 'Quantum Systems Architecture',
    description: 'Advanced process matrices, quantum tools, and neural workflows calibrated for consistent deal flow and infinite repeatable operations.',
    symbol: '⚡',
    gradient: 'from-neon-green to-electric-lime',
    glowColor: 'neon-green',
    dataPoints: ['QUANTUM TOOLS', 'NEURAL WORKFLOWS', 'INFINITE SCALE']
  },
  {
    id: 5,
    title: 'ELITE INVESTOR NEXUS',
    subtitle: 'Tier-S Partnership Matrix',
    description: 'We interface exclusively with serious investor networks and elite teams who want to dominate entire market sectors through quantum advantage.',
    symbol: '💎',
    gradient: 'from-neon-pink to-neon-red',
    glowColor: 'neon-pink',
    dataPoints: ['ELITE NETWORKS', 'MARKET DOMINANCE', 'QUANTUM ADVANTAGE']
  }
]

interface QuantumFeatureCardProps {
  feature: typeof quantumFeatures[0]
  index: number
  isInView: boolean
}

function QuantumFeatureCard({ feature, index, isInView }: QuantumFeatureCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative group h-full"
      initial={{ opacity: 0, y: 100, rotateX: 45 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.2,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Quantum Glow Field */}
      <motion.div
        className={`absolute -inset-2 rounded-3xl blur-2xl opacity-0 group-hover:opacity-70 transition-all duration-700`}
        style={{ 
          background: `radial-gradient(circle, rgba(0,212,255,0.3), rgba(138,43,226,0.2), rgba(255,0,110,0.1))` 
        }}
        animate={isHovered ? { 
          scale: [1, 1.05, 1],
          rotate: [0, 5, -5, 0]
        } : {}}
        transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
      />

      {/* Main Quantum Card */}
      <motion.div
        className="relative holographic cyber-glass-strong rounded-3xl p-8 h-full cursor-pointer overflow-hidden border-2 border-neon-blue/30"
        whileHover={{ 
          rotateY: [0, 10, -5, 0],
          rotateX: [0, -5, 5, 0],
          scale: 1.02,
          z: 50
        }}
        transition={{ 
          type: "spring", 
          stiffness: 200, 
          damping: 15,
          duration: 0.6
        }}
      >
        {/* Neural Network Background */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 opacity-10"
            style={{
              background: `
                radial-gradient(circle at 20% 20%, rgba(0,212,255,0.3) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(138,43,226,0.3) 0%, transparent 50%),
                linear-gradient(45deg, transparent 30%, rgba(255,0,110,0.1) 50%, transparent 70%)
              `
            }}
            animate={{
              backgroundPosition: [
                '0% 0%, 100% 100%, 0deg',
                '50% 50%, 50% 50%, 180deg', 
                '100% 100%, 0% 0%, 360deg'
              ]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          />
        </div>

        {/* Quantum Data Streams */}
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 border border-neon-cyan/20 rounded-3xl"
            animate={{ 
              scale: [1, 1.02, 1],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              delay: i * 1,
              ease: 'easeInOut'
            }}
          />
        ))}

        {/* Quantum Symbol Header */}
        <div className="relative z-10 mb-6">
          <motion.div
            className="text-6xl mb-4 text-center"
            animate={{ 
              rotateZ: isHovered ? [0, 360] : 0,
              scale: isHovered ? [1, 1.1, 1] : 1
            }}
            transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
          >
            {feature.symbol}
          </motion.div>
          
          <div className="text-center">
            <h3 className={`text-xl lg:text-2xl font-cyber font-bold neon-${feature.glowColor} mb-2 tracking-wider`}>
              {feature.title}
            </h3>
            <div className="text-white/70 font-cyber text-sm tracking-widest">
              {feature.subtitle}
            </div>
          </div>
        </div>

        {/* Neural Description */}
        <div className="relative z-10 mb-6">
          <p className="text-white/80 leading-relaxed font-tech text-sm">
            {feature.description}
          </p>
        </div>

        {/* Quantum Data Points */}
        <div className="relative z-10 space-y-3">
          {feature.dataPoints.map((point, pointIndex) => (
            <motion.div
              key={pointIndex}
              className="flex items-center space-x-3 cyber-glass rounded-lg px-3 py-2 group/point"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: (index * 0.2) + (pointIndex * 0.1) + 1 }}
              whileHover={{ x: 5, backgroundColor: 'rgba(0,212,255,0.1)' }}
            >
              <motion.div
                className={`w-2 h-2 bg-${feature.glowColor} rounded-full`}
                animate={{
                  boxShadow: [
                    `0 0 0px rgba(0,212,255,0.5)`,
                    `0 0 10px rgba(0,212,255,0.8)`,
                    `0 0 0px rgba(0,212,255,0.5)`
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: pointIndex * 0.3 }}
              />
              <span className={`text-${feature.glowColor} font-cyber text-xs tracking-wider`}>
                {point}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Floating Quantum Particles */}
        {Array.from({ length: 4 }).map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 bg-${feature.glowColor} rounded-full`}
            style={{
              top: `${20 + i * 20}%`,
              right: `${10 + i * 15}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.3, 1, 0.3],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
              ease: 'easeInOut',
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  )
}

export default function Features() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.1 })

  return (
    <div ref={containerRef} className="relative py-32 overflow-hidden">
      {/* Quantum Field Generator */}
      <div className="absolute inset-0">
        {/* Neural Mesh Background */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `
              conic-gradient(from 0deg at 50% 50%, 
                rgba(0,212,255,0.1) 0deg,
                rgba(138,43,226,0.1) 120deg,
                rgba(255,0,110,0.1) 240deg,
                rgba(0,212,255,0.1) 360deg
              )
            `,
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        />

        {/* Floating Energy Nodes */}
        {Array.from({ length: 25 }).map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 ${i % 3 === 0 ? 'bg-neon-blue' : i % 3 === 1 ? 'bg-neon-purple' : 'bg-neon-pink'} rounded-full`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -200, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 8,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: 'easeInOut'
            }}
          />
        ))}

        {/* Quantum Wave Interference */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `
              repeating-linear-gradient(
                45deg,
                transparent,
                transparent 100px,
                rgba(0,212,255,0.03) 100px,
                rgba(0,212,255,0.03) 102px
              ),
              repeating-linear-gradient(
                -45deg,
                transparent,
                transparent 100px,
                rgba(138,43,226,0.03) 100px,
                rgba(138,43,226,0.03) 102px
              )
            `
          }}
          animate={{
            backgroundPosition: ['0px 0px, 0px 0px', '200px 200px, -200px 200px']
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Quantum Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="text-neon-cyan text-sm font-cyber tracking-[0.3em] mb-4"
            animate={{
              textShadow: [
                '0 0 0px rgba(0,255,255,0.5)',
                '0 0 20px rgba(0,255,255,0.8)',
                '0 0 0px rgba(0,255,255,0.5)'
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            QUANTUM FEATURE ANALYSIS
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-cyber font-bold mb-8 leading-tight">
            <motion.span 
              className="block neon-blue"
              animate={{
                textShadow: [
                  '0 0 10px rgba(0,212,255,0.5)',
                  '0 0 30px rgba(0,212,255,0.8)', 
                  '0 0 10px rgba(0,212,255,0.5)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              NEURAL MATRIX
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
              transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
            >
              SUPERIORITY
            </motion.span>
          </h2>
          
          <motion.p
            className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed font-tech"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            We&apos;re not another legacy VA protocol. We&apos;re quantum wholesaler architects 
            who engineered a neural solution for next-generation investors.
          </motion.p>
        </motion.div>

        {/* Quantum Features Matrix */}
        <div className="grid lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-20">
          {quantumFeatures.map((feature, index) => (
            <motion.div
              key={feature.id}
              className="lg:col-span-1 xl:col-span-1"
              style={{
                ...(index === 2 && quantumFeatures.length === 5 ? { 
                  gridColumn: 'lg:col-span-3 xl:col-span-5',
                  maxWidth: '600px',
                  marginLeft: 'auto',
                  marginRight: 'auto'
                } : {})
              }}
            >
              <QuantumFeatureCard
                feature={feature}
                index={index}
                isInView={isInView}
              />
            </motion.div>
          ))}
        </div>

        {/* Quantum Evolution CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <div className="cyber-glass-strong rounded-3xl p-12 max-w-5xl mx-auto relative overflow-hidden">
            {/* Neural Scan Lines */}
            <motion.div
              className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-neon-cyan to-transparent"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-neon-pink to-transparent"
              animate={{ x: ['100%', '-100%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            />
            
            <h3 className="text-3xl lg:text-4xl font-cyber font-bold neon-blue mb-6 tracking-wider">
              READY FOR QUANTUM EVOLUTION?
            </h3>
            
            <p className="text-white/80 text-lg mb-10 leading-relaxed font-tech max-w-3xl mx-auto">
              Join elite investor networks who&apos;ve evolved from legacy VA protocols to 
              quantum-trained professionals with true deal comprehension matrices.
            </p>
            
            <motion.button
              className="relative group px-10 py-5 rounded-full font-cyber text-lg tracking-wider overflow-hidden electric-border"
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
              <span className="relative z-10 text-white font-bold">ACCESS QUANTUM PROTOCOLS</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
