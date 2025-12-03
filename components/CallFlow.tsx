'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const flowSteps = [
  {
    id: 1,
    title: 'Targeted List & Script Setup',
    shortTitle: 'List Setup',
    description: 'We work with your existing lists or help source high-quality motivated seller lists. Our VAs use proven scripts tailored to your market and style.',
    details: [
      'Skip-traced, verified contact data',
      'Market-specific messaging',
      'Your brand voice and approach',
      'Integration with your CRM system'
    ],
    icon: '🎯',
    bgColor: 'from-blue-500 to-blue-600',
    percentage: 20
  },
  {
    id: 2,
    title: 'Outbound Calls & Live Screening',
    shortTitle: 'Cold Calling',
    description: 'Our trained VAs make the calls, handle objections, and perform initial qualification. They know what questions to ask and red flags to watch for.',
    details: [
      'Professional, consistent messaging',
      'Real-time objection handling',
      'Motivation assessment',
      'Property condition evaluation'
    ],
    icon: '📞',
    bgColor: 'from-green-500 to-green-600',
    percentage: 40
  },
  {
    id: 3,
    title: 'Qualified Motivated Sellers Identified',
    shortTitle: 'Lead Qualification',
    description: 'Only serious, motivated sellers make it through our screening. We identify genuine opportunities and filter out time-wasters.',
    details: [
      'Motivation scoring system',
      'Property details captured',
      'Timeline and flexibility assessed',
      'Decision-maker confirmation'
    ],
    icon: '✅',
    bgColor: 'from-orange-500 to-orange-600',
    percentage: 60
  },
  {
    id: 4,
    title: 'Appointments Handed to Your Team',
    shortTitle: 'Team Handoff',
    description: 'Qualified leads are scheduled and transitioned seamlessly to your acquisition team with detailed notes and context.',
    details: [
      'Complete seller profile',
      'Property analysis prep',
      'Appointment confirmation',
      'Smooth handoff process'
    ],
    icon: '📅',
    bgColor: 'from-purple-500 to-purple-600',
    percentage: 80
  },
  {
    id: 5,
    title: 'You Close the Deal & Scale',
    shortTitle: 'Close & Scale',
    description: 'Focus on what you do best - negotiating, closing deals, and scaling your business. We handle the pipeline so you can focus on profits.',
    details: [
      'More qualified appointments',
      'Better conversion rates',
      'Consistent deal flow',
      'Scalable operations'
    ],
    icon: '💰',
    bgColor: 'from-primary-500 to-primary-600',
    percentage: 100
  }
]

interface PipelineStepProps {
  step: typeof flowSteps[0]
  index: number
  isInView: boolean
  activeStep: number
  onStepHover: (index: number) => void
  onStepLeave: () => void
}

function PipelineStep({ step, index, isInView, activeStep, onStepHover, onStepLeave }: PipelineStepProps) {
  const isActive = activeStep === index
  const isCompleted = activeStep > index

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      {/* Pipeline Step Card */}
      <motion.div
        className={`relative cursor-pointer transition-all duration-500 ${
          isActive ? 'z-20' : 'z-10'
        }`}
        onMouseEnter={() => onStepHover(index)}
        onMouseLeave={onStepLeave}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Main Card */}
        <div
          className={`relative bg-white rounded-3xl p-6 shadow-xl border-2 transition-all duration-500 ${
            isActive
              ? 'border-primary-400 shadow-2xl'
              : isCompleted
              ? 'border-green-400'
              : 'border-gray-200 hover:border-primary-300'
          }`}
        >
          {/* Progress Ring */}
          <div className="absolute -top-4 -right-4">
            <div className="relative w-12 h-12">
              <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 36 36">
                <path
                  className="text-gray-200"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="transparent"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <motion.path
                  className={`${
                    isCompleted ? 'text-green-500' : isActive ? 'text-primary-500' : 'text-gray-300'
                  }`}
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="transparent"
                  initial={{ pathLength: 0 }}
                  animate={{
                    pathLength: isCompleted ? 1 : isActive ? step.percentage / 100 : 0
                  }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-lg font-bold text-gray-700">
                  {isCompleted ? '✓' : step.percentage + '%'}
                </span>
              </div>
            </div>
          </div>

          {/* Step Content */}
          <div className="space-y-4">
            {/* Header */}
            <div className="flex items-center space-x-4">
              <motion.div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl shadow-lg bg-gradient-to-br ${step.bgColor} text-white`}
                animate={{ rotate: isActive ? [0, 5, -5, 0] : 0 }}
                transition={{ duration: 0.5, repeat: isActive ? Infinity : 0, repeatDelay: 2 }}
              >
                {step.icon}
              </motion.div>
              <div className="flex-1">
                <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                  Step {step.id} of 5
                </div>
                <h3 className="text-xl font-bold text-gray-900 leading-tight">
                  {step.shortTitle}
                </h3>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2">
              <motion.div
                className={`h-2 rounded-full bg-gradient-to-r ${step.bgColor}`}
                initial={{ width: 0 }}
                animate={{ width: isActive ? '100%' : isCompleted ? '100%' : '0%' }}
                transition={{ duration: 1, delay: index * 0.3 }}
              />
            </div>

            {/* Description - Shows when active */}
            <motion.div
              className="overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: isActive ? 'auto' : 0,
                opacity: isActive ? 1 : 0
              }}
              transition={{ duration: 0.5 }}
            >
              <div className="pt-4 space-y-4 border-t border-gray-100">
                <p className="text-gray-700 leading-relaxed text-sm">
                  {step.description}
                </p>
                <div className="grid grid-cols-1 gap-2">
                  {step.details.map((detail, detailIndex) => (
                    <motion.div
                      key={detail}
                      className="flex items-start space-x-2"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -10 }}
                      transition={{ duration: 0.3, delay: detailIndex * 0.1 }}
                    >
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 text-xs leading-relaxed">{detail}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Status Indicator */}
          <div className="absolute top-4 right-4">
            {isCompleted && (
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            )}
          </div>
        </div>

        {/* Connection Line to Next Step */}
        {index < flowSteps.length - 1 && (
          <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 z-5">
            <motion.div
              className="w-16 h-0.5 bg-gradient-to-r from-primary-300 to-primary-500"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: isCompleted ? 1 : 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              style={{ originX: 0 }}
            />
            <motion.div
              className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-primary-500 rounded-full"
              animate={{ scale: isCompleted ? 1.2 : 0.8 }}
              transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
            />
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}

export default function CallFlow() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.1 })
  const [activeStep, setActiveStep] = useState(-1)

  return (
    <div ref={containerRef} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Primary gradient */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-blue-400/20 via-purple-400/15 to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -50, 25, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Secondary gradient */}
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-green-400/15 via-emerald-400/10 to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, -80, 40, 0],
            y: [0, 30, -20, 0],
            scale: [1, 0.8, 1.1, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Section Header */}
        <motion.div 
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="text-white/80 text-sm font-semibold uppercase tracking-wide">
              💼 Professional Pipeline System
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-2xl">
            From Cold Call to{' '}
            <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              Closed Deal
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            Our systematic approach turns prospects into profits. Here's how we transform your pipeline with proven real estate expertise.
          </p>
        </motion.div>

        {/* Pipeline Progress Tracker */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-2xl border border-white/50">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900">Pipeline Progress</h3>
              <span className="text-sm font-semibold text-gray-600">
                {activeStep === -1 ? 'Hover over steps to explore' : `Step ${activeStep + 1} of ${flowSteps.length}`}
              </span>
            </div>
            <div className="relative">
              <div className="w-full bg-gray-200 rounded-full h-3">
                <motion.div
                  className="h-3 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${activeStep === -1 ? 0 : ((activeStep + 1) / flowSteps.length) * 100}%` }}
                  transition={{ duration: 1 }}
                />
              </div>
              <div className="flex justify-between mt-2">
                {flowSteps.map((step, index) => (
                  <div key={step.id} className="text-center">
                    <div
                      className={`w-3 h-3 rounded-full mx-auto mb-1 transition-all duration-300 ${
                        activeStep !== -1 && index <= activeStep ? 'bg-primary-500 scale-110' : 'bg-gray-300'
                      }`}
                    />
                    <span className="text-xs font-medium text-gray-600">
                      {step.icon}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Interactive Pipeline Steps */}
        <div className="mb-16">
          {/* First Row - 3 Steps */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {flowSteps.slice(0, 3).map((step, index) => (
              <PipelineStep
                key={step.id}
                step={step}
                index={index}
                isInView={isInView}
                activeStep={activeStep}
                onStepHover={setActiveStep}
                onStepLeave={() => setActiveStep(-1)}
              />
            ))}
          </div>
          
          {/* Second Row - 2 Steps Centered */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {flowSteps.slice(3, 5).map((step, index) => (
              <PipelineStep
                key={step.id}
                step={step}
                index={index + 3}
                isInView={isInView}
                activeStep={activeStep}
                onStepHover={setActiveStep}
                onStepLeave={() => setActiveStep(-1)}
              />
            ))}
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <div className="relative bg-gradient-to-br from-white via-white to-blue-50 rounded-3xl p-12 shadow-2xl border border-white/50 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary-200/30 to-transparent rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-primary-200/30 to-transparent rounded-tr-full"></div>
            
            <div className="relative z-10">
              <motion.div
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-full px-6 py-2 mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-sm font-bold">🚀 Ready to Scale?</span>
              </motion.div>
              
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Start Your Pipeline Transformation
              </h3>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed max-w-3xl mx-auto">
                Join hundreds of successful real estate investors who've transformed their business with our proven VA system. 
                Every wholesaler needs a reliable pipeline - we'll show you how to build yours.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl"
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 25px 50px rgba(59, 130, 246, 0.4)" 
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  🎯 Schedule Your Pipeline Consultation
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}