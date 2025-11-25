'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

const flowSteps = [
  {
    id: 1,
    title: 'Targeted List & Script Setup',
    description: 'We work with your existing lists or help source high-quality motivated seller lists. Our VAs use proven scripts tailored to your market and style.',
    details: [
      'Skip-traced, verified contact data',
      'Market-specific messaging',
      'Your brand voice and approach',
      'Integration with your CRM system'
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    )
  },
  {
    id: 2,
    title: 'Outbound Calls & Live Screening',
    description: 'Our trained VAs make the calls, handle objections, and perform initial qualification. They know what questions to ask and red flags to watch for.',
    details: [
      'Professional, consistent messaging',
      'Real-time objection handling',
      'Motivation assessment',
      'Property condition evaluation'
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    )
  },
  {
    id: 3,
    title: 'Qualified Motivated Sellers Identified',
    description: 'Only serious, motivated sellers make it through our screening. We identify genuine opportunities and filter out time-wasters.',
    details: [
      'Motivation scoring system',
      'Property details captured',
      'Timeline and flexibility assessed',
      'Decision-maker confirmation'
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: 4,
    title: 'Appointments Handed to Your Team',
    description: 'Qualified leads are scheduled and transitioned seamlessly to your acquisition team with detailed notes and context.',
    details: [
      'Complete seller profile',
      'Property analysis prep',
      'Appointment confirmation',
      'Smooth handoff process'
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    id: 5,
    title: 'You Close the Deal & Scale',
    description: 'Focus on what you do best - negotiating, closing deals, and scaling your business. We handle the pipeline so you can focus on profits.',
    details: [
      'More qualified appointments',
      'Better conversion rates',
      'Consistent deal flow',
      'Scalable operations'
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
]

export default function CallFlow() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, threshold: 0.2 })
  const [activeStep, setActiveStep] = useState(0)
  const [progress, setProgress] = useState(0)

  // Auto-progress through steps
  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setActiveStep((prev) => {
          const next = (prev + 1) % flowSteps.length
          setProgress(((next + 1) / flowSteps.length) * 100)
          return next
        })
      }, 4000)

      return () => clearInterval(interval)
    }
  }, [isInView])

  const selectStep = (stepIndex: number) => {
    setActiveStep(stepIndex)
    setProgress(((stepIndex + 1) / flowSteps.length) * 100)
  }

  return (
    <div ref={containerRef} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-[600px] h-[300px] bg-gradient-radial from-primary-200/25 via-primary-300/15 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            From Cold Call to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-100 to-primary-200">
              Closed Deal
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Our systematic approach turns prospects into profits. Here&apos;s how we transform your pipeline.
          </p>
        </motion.div>

        {/* Interactive Timeline */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Timeline Steps */}
          <div className="relative">
            {/* Progress Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-white/20"></div>
            <motion.div
              className="absolute left-8 top-0 w-0.5 bg-gradient-to-b from-primary-200 to-primary-300"
              initial={{ height: '0%' }}
              animate={isInView ? { height: `${progress}%` } : {}}
              transition={{ duration: 1, ease: 'easeOut' }}
            />

            {/* Steps */}
            <div className="space-y-8">
              {flowSteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  className={`relative flex items-start space-x-6 cursor-pointer group transition-all duration-300 ${
                    activeStep === index ? 'scale-105' : 'hover:scale-102'
                  }`}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  onClick={() => selectStep(index)}
                >
                  {/* Step Number */}
                  <motion.div
                    className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center font-bold text-white transition-all duration-300 ${
                      activeStep === index
                        ? 'bg-gradient-to-br from-primary-200 to-primary-300 shadow-lg shadow-primary-200/30'
                        : 'bg-white/20 group-hover:bg-white/30'
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {activeStep === index ? step.icon : step.id}
                  </motion.div>

                  {/* Step Content */}
                  <div className="flex-1 pb-8">
                    <h3
                      className={`text-xl lg:text-2xl font-bold mb-2 transition-colors duration-300 ${
                        activeStep === index ? 'text-white' : 'text-white/70'
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={`leading-relaxed transition-colors duration-300 ${
                        activeStep === index ? 'text-white/90' : 'text-white/60'
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Active Step Details */}
          <motion.div
            className="lg:sticky lg:top-32"
            key={activeStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass-strong rounded-3xl p-8 lg:p-10 relative overflow-hidden">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-200/10 to-primary-300/10 rounded-3xl"></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon & Title */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-200 to-primary-300 rounded-2xl flex items-center justify-center text-white shadow-lg">
                    {flowSteps[activeStep].icon}
                  </div>
                  <div>
                    <div className="text-primary-200 text-sm font-semibold mb-1">
                      Step {flowSteps[activeStep].id}
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {flowSteps[activeStep].title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-white/90 text-lg mb-8 leading-relaxed">
                  {flowSteps[activeStep].description}
                </p>

                {/* Details List */}
                <div className="space-y-3">
                  <h4 className="text-white font-semibold mb-4">Key Elements:</h4>
                  {flowSteps[activeStep].details.map((detail, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-primary-200 rounded-full"></div>
                      <span className="text-white/80">{detail}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-primary-200/20 to-primary-300/20 rounded-full blur-xl"></div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16 lg:mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          <div className="glass-strong rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
              Ready to Optimize Your Deal Flow?
            </h3>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              Let&apos;s discuss how this proven system can work for your business. Every successful wholesaler 
              needs a reliable pipeline - we&apos;ll show you how to build yours.
            </p>
            <motion.button
              className="bg-gradient-to-r from-primary-200 to-primary-300 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(109, 215, 253, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Your Pipeline Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
