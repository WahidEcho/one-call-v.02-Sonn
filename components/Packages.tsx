'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const quantumPackages = [
  {
    id: 'neural-standard',
    name: 'NEURAL STANDARD',
    codename: 'QUANTUM-1',
    price: '$1,200',
    period: '/ CYCLE',
    subtitle: 'For teams with existing dialer matrices',
    popular: false,
    features: [
      'QUANTUM-TRAINED REAL-ESTATE NEURAL AGENT (40 HRS/CYCLE)',
      'ADVANCED LEAD QUALIFICATION & SELLER MOTIVATION ALGORITHMS', 
      'SYNAPTIC CRM UPDATES & PIPELINE NEURAL MANAGEMENT',
      'REAL-TIME QUANTUM KPI NEURAL REPORTING MATRIX',
      'NEURAL CALL RECORDING PROTOCOLS (IF DIALER SUPPORTS)',
      'ELITE QUANTUM SUPPORT & COMMUNICATION CHANNELS',
      'NEURAL INTEGRATION WITH EXISTING SYSTEM MATRICES'
    ],
    buttonText: 'DEPLOY NEURAL STANDARD',
    gradient: 'from-neon-blue to-electric-blue',
    glowColor: 'neon-blue',
    tier: 'STANDARD',
    classification: 'LEVEL-1 NEURAL'
  },
  {
    id: 'quantum-elite',
    name: 'QUANTUM ELITE',
    codename: 'QUANTUM-∞',
    price: '$1,400', 
    period: '/ CYCLE',
    subtitle: 'Full neural matrix with integrated quantum dialer',
    popular: true,
    features: [
      'ALL NEURAL STANDARD QUANTUM PROTOCOLS, PLUS:',
      'INTEGRATED QUANTUM DIALER MATRIX INCLUDED & CONFIGURED',
      'ADVANCED TECHNICAL MAINTENANCE & DIALING NEURAL CONFIG',
      'QUANTUM DATA MANAGEMENT ASSISTANCE PROTOCOLS',
      'SEAMLESS NEURAL ONBOARDING OF ALL SYSTEM WORKFLOWS',
      'PRIORITY QUANTUM TROUBLESHOOTING & PERFORMANCE OPTIMIZATION',
      'ELITE NEURAL ARCHITECTURE ACCESS & QUANTUM SUPPORT'
    ],
    buttonText: 'DEPLOY QUANTUM ELITE',
    gradient: 'from-neon-purple to-neon-pink',
    glowColor: 'neon-purple',
    tier: 'QUANTUM',
    classification: 'LEVEL-∞ NEURAL'
  }
]

interface QuantumPackageCardProps {
  pkg: typeof quantumPackages[0]
  index: number
  isInView: boolean
}

function QuantumPackageCard({ pkg, index, isInView }: QuantumPackageCardProps) {
  return (
    <motion.div
      className="relative group h-full"
      initial={{ opacity: 0, y: 100, rotateX: 45 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.3,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Quantum Classification Badge */}
      {pkg.popular && (
        <motion.div
          className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-30"
          initial={{ opacity: 0, scale: 0.5, rotateZ: -180 }}
          animate={isInView ? { opacity: 1, scale: 1, rotateZ: 0 } : {}}
          transition={{ duration: 0.8, delay: 1, type: "spring" }}
        >
          <div className="relative">
            <div className="cyber-glass-strong px-6 py-2 rounded-full font-cyber text-sm tracking-widest neon-green border border-neon-green/50">
              QUANTUM ELITE
            </div>
            <motion.div
              className="absolute inset-0 border border-neon-green/30 rounded-full"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      )}

      {/* Quantum Energy Field */}
      <motion.div
        className={`absolute -inset-3 rounded-3xl blur-2xl opacity-0 group-hover:opacity-60 transition-all duration-700 ${
          pkg.popular ? 'opacity-40' : ''
        }`}
        style={{ 
          background: `radial-gradient(circle, rgba(0,212,255,0.4), rgba(138,43,226,0.3), rgba(255,0,110,0.2))` 
        }}
        animate={{
          scale: [1, 1.05, 1],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      />

      {/* Main Quantum Card */}
      <motion.div
        className={`relative holographic cyber-glass-strong rounded-3xl p-10 h-full flex flex-col overflow-hidden cursor-pointer border-2 ${
          pkg.popular ? 'border-neon-purple/50' : 'border-neon-blue/30'
        }`}
        whileHover={{ 
          scale: 1.02,
          rotateY: pkg.popular ? 0 : 5,
          rotateX: pkg.popular ? 0 : 5,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
      >
        {/* Neural Network Background */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 opacity-20"
            style={{
              background: `
                conic-gradient(from 0deg at 50% 50%, 
                  rgba(0,212,255,0.2) 0deg,
                  rgba(138,43,226,0.2) 180deg,
                  rgba(0,212,255,0.2) 360deg
                )
              `
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          />
        </div>

        {/* Quantum Headers */}
        <div className="relative z-10 text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className={`cyber-glass rounded-xl px-4 py-2 border border-${pkg.glowColor}/30`}>
              <span className={`text-${pkg.glowColor} font-cyber text-xs tracking-[0.2em]`}>
                {pkg.classification}
              </span>
            </div>
          </div>
          
          <h3 className={`text-3xl lg:text-4xl font-cyber font-bold neon-${pkg.glowColor} mb-2 tracking-wider`}>
            {pkg.name}
          </h3>
          
          <div className={`text-${pkg.glowColor}/70 font-cyber text-sm tracking-widest mb-2`}>
            CODENAME: {pkg.codename}
          </div>
          
          <p className="text-white/70 text-sm font-tech mb-6 leading-relaxed">
            {pkg.subtitle}
          </p>
          
          {/* Quantum Price Matrix */}
          <div className="relative mb-6">
            <motion.div
              className="cyber-glass rounded-2xl p-6 border border-neon-cyan/20"
              animate={{
                boxShadow: [
                  '0 0 0px rgba(0,255,255,0.2)',
                  '0 0 30px rgba(0,255,255,0.4)',
                  '0 0 0px rgba(0,255,255,0.2)'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="text-5xl lg:text-6xl font-cyber font-bold text-white mb-2">
                {pkg.price}
              </div>
              <div className="text-neon-cyan font-cyber text-sm tracking-widest">
                {pkg.period}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Neural Features Matrix */}
        <div className="relative z-10 flex-1 mb-8">
          <div className="space-y-3">
            {pkg.features.map((feature, featureIndex) => (
              <motion.div
                key={featureIndex}
                className="cyber-glass rounded-lg p-4 group/feature hover:cyber-glass-strong transition-all duration-300"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 1.2 + featureIndex * 0.1 }}
                whileHover={{ x: 5 }}
              >
                <div className="flex items-start space-x-3">
                  <motion.div
                    className={`w-4 h-4 mt-1 flex-shrink-0 ${
                      feature.startsWith('ALL') ? 'border-2 border-neon-green rounded' : ''
                    }`}
                    animate={{
                      boxShadow: [
                        `0 0 0px rgba(0,212,255,0.5)`,
                        `0 0 15px rgba(0,212,255,0.8)`,
                        `0 0 0px rgba(0,212,255,0.5)`
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: featureIndex * 0.2 }}
                  >
                    {feature.startsWith('ALL') ? (
                      <div className="w-full h-full bg-neon-green rounded-sm"></div>
                    ) : (
                      <div className={`w-full h-full bg-${pkg.glowColor} rounded-full`}></div>
                    )}
                  </motion.div>
                  
                  <span className={`font-tech text-sm leading-relaxed tracking-wide ${
                    feature.startsWith('ALL') ? 'neon-green font-cyber' : 'text-white/90'
                  }`}>
                    {feature}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quantum Deploy Button */}
        <motion.button
          className="relative z-10 w-full group py-4 px-6 rounded-2xl font-cyber text-lg tracking-wider overflow-hidden"
          whileHover={{ 
            scale: 1.02,
            boxShadow: `0 0 50px rgba(0,212,255,0.6)`
          }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Button Background */}
          <div className={`absolute inset-0 bg-gradient-to-r ${pkg.gradient} opacity-90 group-hover:opacity-100 transition-opacity duration-300`}></div>
          
          {/* Energy Flow */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          />
          
          {/* Button Border */}
          <motion.div
            className={`absolute inset-0 rounded-2xl border-2 border-${pkg.glowColor}`}
            animate={{ 
              boxShadow: [
                `0 0 0px rgba(0,212,255,0.3)`,
                `0 0 20px rgba(0,212,255,0.6)`,
                `0 0 0px rgba(0,212,255,0.3)`
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          
          <span className="relative z-10 text-white font-bold">
            {pkg.buttonText}
          </span>
        </motion.button>

        {/* Floating Quantum Particles */}
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 bg-${pkg.glowColor} rounded-full`}
            style={{
              top: `${15 + i * 12}%`,
              right: `${5 + (i % 2) * 10}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.6,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Tier Classification */}
        {pkg.popular && (
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-neon-purple via-neon-pink to-neon-purple rounded-b-3xl"></div>
        )}
      </motion.div>
    </motion.div>
  )
}

export default function Packages() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, threshold: 0.2 })

  return (
    <div ref={containerRef} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-primary-200/20 via-primary-300/10 to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-primary-100/30 via-primary-200/15 to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Quantum Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <div className="text-neon-cyan text-sm font-cyber tracking-[0.3em] mb-4">
            QUANTUM DEPLOYMENT PROTOCOLS
          </div>
          
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
              NEURAL AGENT
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
              DEPLOYMENT MATRIX
            </motion.span>
          </h2>
          
          <motion.p
            className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed font-tech"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Select your quantum neural configuration. Both deployment protocols include{' '}
            <span className="neon-cyan">elite quantum agents</span> with advanced{' '}
            <span className="neon-blue">wholesaling neural training</span> matrices.
          </motion.p>
        </motion.div>

        {/* Quantum Package Cards */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {quantumPackages.map((pkg, index) => (
            <QuantumPackageCard
              key={pkg.id}
              pkg={pkg}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Quantum Scaling Matrix */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <div className="cyber-glass-strong rounded-3xl p-12 max-w-6xl mx-auto relative overflow-hidden">
            {/* Neural Scan Lines */}
            <motion.div
              className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-neon-green to-transparent"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-neon-pink to-transparent"
              animate={{ x: ['100%', '-100%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            />
            
            <h3 className="text-3xl lg:text-4xl font-cyber font-bold neon-blue mb-6 tracking-wider">
              QUANTUM NEURAL ARMY DEPLOYMENT?
            </h3>
            
            <p className="text-white/80 text-lg mb-10 leading-relaxed font-tech max-w-4xl mx-auto">
              We interface with <span className="neon-cyan">high-volume neural operations</span> and can{' '}
              <span className="neon-purple">infinite-scale</span> to match exponential growth matrices.{' '}
              Deploy a <span className="neon-pink">custom neural battalion</span> calibrated to your{' '}
              specific volume requirements and market dominance protocols.
            </p>

            {/* Quantum Stats Matrix */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                { value: '∞%', label: 'QUANTUM NEURAL TRAINED', color: 'neon-blue' },
                { value: '∞+', label: 'NEURAL CYCLES/PERIOD', color: 'neon-purple' },
                { value: '∞/∞', label: 'QUANTUM SUPPORT MATRIX', color: 'neon-pink' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center cyber-glass rounded-xl p-6 relative overflow-hidden group"
                  initial={{ opacity: 0, y: 30, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: 1.8 + index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {/* Quantum Glow */}
                  <motion.div
                    className={`absolute inset-0 bg-${stat.color}/10 rounded-xl`}
                    animate={{ opacity: [0, 0.5, 0] }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.8
                    }}
                  />
                  
                  <div className="relative z-10">
                    <div className={`text-4xl font-cyber font-bold neon-${stat.color} mb-3`}>
                      {stat.value}
                    </div>
                    <div className={`text-${stat.color} text-sm font-cyber tracking-widest`}>
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quantum Deploy Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
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
                <span className="relative z-10 text-white font-bold">DEPLOY NEURAL BATTALION</span>
              </motion.button>
              
              <motion.button
                className="relative group px-10 py-5 rounded-full font-cyber text-lg tracking-wider cyber-glass hover:cyber-glass-strong transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-neon-cyan">CONFIGURE CUSTOM MATRIX</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
