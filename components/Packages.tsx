'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const packages = [
  {
    name: 'Standard VA',
    price: '$1,200',
    period: '/ month',
    popular: false,
    subtitle: 'For teams with existing dialers',
    features: [
      'Full-time real-estate-trained VA (40 hrs/week)',
      'Lead qualification & motivated seller screening',
      'CRM updates & pipeline management',
      'Daily KPI reporting',
      'Call recordings (if your dialer supports it)',
      'Elite support & communication',
      'Integration with your existing systems'
    ],
    buttonText: 'Choose Standard',
    color: 'primary'
  },
  {
    name: 'Premium VA',
    price: '$1,400',
    period: '/ month',
    popular: true,
    subtitle: 'We provide and manage the dialer',
    features: [
      'Everything in the Standard package, plus:',
      'Dialer included and fully set up',
      'Technical maintenance & dialing configuration',
      'Data management assistance',
      'Smooth onboarding of your systems & workflows',
      'Priority troubleshooting & performance optimization'
    ],
    buttonText: 'Choose Premium',
    color: 'primary'
  }
]

interface PackageCardProps {
  pkg: typeof packages[0]
  index: number
  isInView: boolean
}

function PackageCard({ pkg, index, isInView }: PackageCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative h-full"
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.2,
        type: "spring",
        stiffness: 100
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Popular Badge */}
      {pkg.popular && (
        <motion.div 
          className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5 + index * 0.2 }}
        >
          <div className="bg-primary-600 text-white px-6 py-2 rounded-full font-semibold text-sm shadow-lg">
            Most Popular
          </div>
        </motion.div>
      )}

      {/* Card */}
      <motion.div
        className={`relative professional-glass-strong rounded-3xl p-10 h-full flex flex-col overflow-hidden border-2 ${
          pkg.popular ? 'border-primary-300' : 'border-secondary-200'
        }`}
        animate={{
          borderColor: isHovered ? (pkg.popular ? '#2563eb' : '#3b82f6') : (pkg.popular ? '#93c5fd' : '#e2e8f0'),
          scale: isHovered ? 1.02 : 1
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Popular Background Effect */}
        {pkg.popular && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-primary-50 to-primary-100 opacity-50"
            animate={{ opacity: isHovered ? 0.7 : 0.3 }}
            transition={{ duration: 0.3 }}
          />
        )}

        <div className="relative z-10 flex flex-col h-full">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="text-secondary-600 font-medium text-sm mb-2">
              {pkg.subtitle}
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-2">
              {pkg.name}
            </h3>
            
            {/* Price */}
            <motion.div
              className="professional-glass rounded-2xl p-6 border border-primary-200"
              animate={{
                boxShadow: isHovered ? '0 8px 25px rgba(59, 130, 246, 0.15)' : '0 4px 15px rgba(59, 130, 246, 0.1)'
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-4xl lg:text-5xl font-bold text-primary-600 mb-1">
                {pkg.price}
              </div>
              <div className="text-secondary-600 font-medium text-sm">
                {pkg.period}
              </div>
            </motion.div>
          </div>

          {/* Features */}
          <div className="flex-1 mb-8">
            <ul className="space-y-4">
              {pkg.features.map((feature, featureIndex) => (
                <motion.li 
                  key={featureIndex}
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.3 + index * 0.2 + featureIndex * 0.1 
                  }}
                >
                  <motion.div
                    className={`w-4 h-4 mt-1 flex-shrink-0 ${
                      feature.startsWith('Everything') ? 'border-2 border-green-500 rounded bg-green-100' : 'bg-primary-500 rounded-full'
                    }`}
                    animate={{
                      scale: isHovered ? [1, 1.2, 1] : 1,
                    }}
                    transition={{
                      duration: isHovered ? 0.6 : 0,
                      repeat: isHovered ? Infinity : 0,
                      repeatDelay: 2
                    }}
                  >
                    {feature.startsWith('Everything') && (
                      <div className="w-full h-full bg-green-500 rounded-sm"></div>
                    )}
                  </motion.div>
                  <span className={`text-sm leading-relaxed ${
                    feature.startsWith('Everything') ? 'text-green-700 font-semibold' : 'text-secondary-700'
                  }`}>
                    {feature}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Button */}
          <motion.button
            className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
              pkg.popular 
                ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg hover:shadow-xl' 
                : 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {pkg.buttonText}
          </motion.button>
        </div>

        {/* Popular Bottom Accent */}
        {pkg.popular && (
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 rounded-b-3xl"></div>
        )}
      </motion.div>
    </motion.div>
  )
}

export default function Packages() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })

  return (
    <div ref={containerRef} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Professional Background Elements */}
      <div className="absolute inset-0">
        {/* Static positioned elements to avoid hydration issues */}
        {[
          { top: 25, left: 10 }, { top: 40, left: 85 }, { top: 60, left: 20 },
          { top: 80, left: 75 }, { top: 15, left: 60 }, { top: 70, left: 40 }
        ].map((pos, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary-300 rounded-full opacity-50"
            style={{
              top: `${pos.top}%`,
              left: `${pos.left}%`,
            }}
            animate={{
              scale: [0.5, 1, 0.5],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 4 + (i % 2),
              repeat: Infinity,
              delay: i * 1,
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
          <div className="text-primary-600 text-sm font-semibold tracking-wide uppercase mb-4">
            Choose Your Package
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-secondary-900">VA Packages for</span><br/>
            <span className="text-primary-600">Serious Real-Estate Teams</span>
          </h2>
          <p className="text-secondary-600 text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
            Select your preferred package. Both options include trained real estate VAs with advanced wholesaling expertise.
          </p>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <PackageCard
              key={index}
              pkg={pkg}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Custom Package CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div className="professional-glass-strong rounded-3xl p-12 max-w-5xl mx-auto relative overflow-hidden">
            <h3 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-6">
              Need Multiple VAs or a Full Team?
            </h3>
            <p className="text-secondary-700 text-lg mb-10 leading-relaxed max-w-4xl mx-auto">
              We work with high-volume operations and can scale to match your growth requirements. Deploy a custom team calibrated to your specific volume and market needs.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              {[
                { value: '100%', label: 'Real Estate Trained', color: 'primary' },
                { value: '24/7', label: 'Support Available', color: 'blue' },
                { value: '∞', label: 'Scalability', color: 'purple' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 professional-glass rounded-2xl border border-primary-200"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                >
                  <div className="relative z-10">
                    <div className="text-4xl font-bold text-primary-600 mb-3">
                      {stat.value}
                    </div>
                    <div className="text-secondary-600 font-medium text-sm uppercase tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              className="px-10 py-5 bg-primary-600 text-white rounded-xl font-semibold text-lg hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-white">Configure Custom Package</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Bottom Note */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
        >
          <p className="text-secondary-500 text-sm">
            Need multiple callers or a full team? <strong>Contact us for a custom plan.</strong>
          </p>
        </motion.div>
      </div>
    </div>
  )
}