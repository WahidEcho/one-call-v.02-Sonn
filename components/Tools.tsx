'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const tools = [
  {
    id: 1,
    name: 'Mojo Dialer',
    description: 'Triple-line power dialer trusted by top real estate teams. Maximizes contact rates and keeps your data organized.',
    category: 'Power Dialer',
    logo: (
      <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center">
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
        </svg>
      </div>
    ),
    features: ['Triple-line dialing', 'CRM integration', 'Call analytics', 'Lead management']
  },
  {
    id: 2,
    name: 'Popstream',
    description: 'Modern, investor-friendly platform with clean interface, reliable skiptracing, and strong reporting—built for clarity and speed.',
    category: 'All-in-One Platform',
    logo: (
      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
    ),
    features: ['Skiptracing', 'Clean interface', 'Investor-focused', 'Real-time reporting']
  },
  {
    id: 3,
    name: 'DFU (Dialer For You)',
    description: 'A partner ecosystem for new wholesalers including data & lead lists, CRM, skiptracing, acquisition services, and full support for your first pipeline.',
    category: 'Complete Ecosystem',
    logo: (
      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      </div>
    ),
    features: ['Complete ecosystem', 'New wholesaler friendly', 'Full support', 'End-to-end solution']
  },
  {
    id: 4,
    name: 'REI Network',
    description: 'Advanced networking and deal-sharing platform that connects serious investors for joint ventures and market expansion.',
    category: 'Networking',
    logo: (
      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      </div>
    ),
    features: ['Deal sharing', 'Joint ventures', 'Market expansion', 'Investor network']
  },
  {
    id: 5,
    name: 'PropStream',
    description: 'Comprehensive property data and analytics platform for targeted lead generation and market research.',
    category: 'Data & Analytics',
    logo: (
      <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      </div>
    ),
    features: ['Property data', 'Market analytics', 'Lead generation', 'Research tools']
  }
]

// Duplicate tools for seamless marquee loop
const marqueeTools = [...tools, ...tools]

function ToolCard({ tool, index }: { tool: typeof tools[0]; index: number }) {
  return (
    <motion.div
      className="flex-shrink-0 w-80 mx-4 group cursor-pointer"
      whileHover={{ scale: 1.05, y: -10 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="glass-strong rounded-2xl p-6 h-full overflow-hidden relative">
        {/* Hover Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-200/10 to-primary-300/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-center space-x-4 mb-4">
            {tool.logo}
            <div>
              <h3 className="text-xl font-bold text-white group-hover:text-primary-200 transition-colors">
                {tool.name}
              </h3>
              <div className="text-sm text-primary-200 font-medium">
                {tool.category}
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-white/80 text-sm leading-relaxed mb-4">
            {tool.description}
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 gap-2">
            {tool.features.map((feature, featureIndex) => (
              <div key={featureIndex} className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-primary-200 rounded-full"></div>
                <span className="text-white/70 text-xs">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom accent */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </motion.div>
  )
}

export default function Tools() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })

  return (
    <div ref={containerRef} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/3 left-1/3 w-96 h-96 bg-gradient-radial from-primary-200/15 via-primary-300/8 to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, 150, 0],
            y: [0, -75, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
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
            Trusted Tools &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-100 to-primary-200">
              Partner Companies
            </span>
          </h2>
          <motion.p
            className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We only work with platforms that match our standards for speed, data quality, and performance. 
            Together, they power the engine behind your deal flow.
          </motion.p>
        </motion.div>

        {/* Marquee Container */}
        <div className="relative overflow-hidden">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#005ACD] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#F5FFFF] to-transparent z-10 pointer-events-none"></div>

          {/* Animated Marquee */}
          <motion.div
            className="flex items-center"
            animate={{
              x: [-100, -50, 0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, -100],
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ width: 'calc(100% + 800px)' }}
          >
            {marqueeTools.map((tool, index) => (
              <ToolCard key={`${tool.id}-${index}`} tool={tool} index={index} />
            ))}
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="text-center mt-16 lg:mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="glass-strong rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
              Seamless Integration with Your Existing Stack
            </h3>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              Our VAs are trained to work with all major real estate platforms and tools. 
              We adapt to your existing workflow, so there&apos;s no learning curve or system changes required.
            </p>
            
            {/* Integration Benefits */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                  title: 'Quick Setup',
                  description: 'Get started in days, not weeks'
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  ),
                  title: 'Zero Disruption',
                  description: 'Works with your current tools'
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  ),
                  title: 'Better Results',
                  description: 'Optimized for deal flow'
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-200 to-primary-300 rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <h4 className="text-white font-semibold mb-2">{benefit.title}</h4>
                  <p className="text-white/70 text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.button
              className="bg-gradient-to-r from-primary-200 to-primary-300 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(109, 215, 253, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Discuss Integration Options
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

