'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const timeline = [
  {
    year: '2021',
    title: 'First Wholesale Deals',
    description: 'Nick closed his first wholesale deals and began developing systematic approaches to cold calling and lead generation.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    year: '2022',
    title: '27 Properties & Community',
    description: 'Founded 27 Properties, LLC and created the One Call Away Community, a high-level network for serious wholesalers.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    year: '2023+',
    title: 'One Call Away VA Agency',
    description: 'Launched the VA agency to solve the industry-wide problem of undertrained virtual assistants who don\'t understand wholesaling.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  }
]

const founders = [
  {
    name: 'Nick Kamrada',
    role: 'Co-Founder & Deal Expert',
    location: 'Tampa, Florida',
    image: '👨‍💼', // Placeholder - replace with actual image
    bio: 'Nick is an accomplished real-estate wholesaler, educator, and entrepreneur based in Tampa, Florida. He founded 27 Properties, LLC and created the One Call Away Community, a high-level network and coaching hub for wholesalers. Since his first deal in 2021, Nick has built one of the top wholesaling operations in the Tampa Bay area, generating millions in assignment fees and focusing on off-market, direct-to-seller acquisitions. He brings real, on-the-ground acquisitions and team-building experience to One Call Away—so your VA systems are designed by someone who lives the deal life every day.',
    specialties: ['Wholesaling Strategy', 'Deal Analysis', 'Market Expertise', 'Team Building'],
    achievements: [
      'Millions in assignment fees generated',
      'Top Tampa Bay wholesaling operation',
      'Founded One Call Away Community',
      'Active deal maker since 2021'
    ]
  },
  {
    name: 'Loaay Hossam',
    role: 'Co-Founder & Operations Expert',
    location: 'Operations & Systems',
    image: '👨‍💻', // Placeholder - replace with actual image
    bio: 'Loaay specializes in building and scaling operations, managing VA teams, and turning chaotic workflows into repeatable systems. He is responsible for the structure behind One Call Away: hiring, training, processes, and the technology that keeps everything running smooth and consistent. While Nick brings the deal expertise, Loaay ensures that expertise gets packaged into scalable, reliable operations that work every time.',
    specialties: ['Systems Design', 'VA Management', 'Process Optimization', 'Technology Integration'],
    achievements: [
      'Designed scalable VA operations',
      'Built training & hiring systems',
      'Created consistent processes',
      'Technology integration expert'
    ]
  }
]

function TimelineItem({ item, index, isInView }: { item: typeof timeline[0]; index: number; isInView: boolean }) {
  return (
    <motion.div
      className="relative flex items-center space-x-6 group"
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      {/* Timeline Node */}
      <motion.div
        className="relative z-10 w-12 h-12 bg-gradient-to-br from-primary-200 to-primary-300 rounded-full flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-shadow duration-300"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {item.icon}
      </motion.div>

      {/* Content */}
      <div className="flex-1 glass rounded-2xl p-6 group-hover:glass-strong transition-all duration-300">
        <div className="flex items-center space-x-4 mb-3">
          <span className="text-2xl font-bold text-primary-200">{item.year}</span>
          <h3 className="text-xl font-bold text-white">{item.title}</h3>
        </div>
        <p className="text-white/80 leading-relaxed">{item.description}</p>
      </div>
    </motion.div>
  )
}

function FounderCard({ founder, index, isInView }: { founder: typeof founders[0]; index: number; isInView: boolean }) {
  return (
    <motion.div
      className="glass-strong rounded-3xl p-8 lg:p-10 relative overflow-hidden group hover:scale-105 transition-transform duration-300"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.5 + index * 0.3 }}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-200/10 to-primary-300/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start space-x-6 mb-6">
          {/* Avatar */}
          <div className="w-20 h-20 bg-gradient-to-br from-primary-200 to-primary-300 rounded-2xl flex items-center justify-center text-3xl shadow-lg">
            {founder.image}
          </div>
          
          <div className="flex-1">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
              {founder.name}
            </h3>
            <p className="text-primary-200 font-semibold mb-1">
              {founder.role}
            </p>
            <p className="text-white/70 text-sm">
              {founder.location}
            </p>
          </div>
        </div>

        {/* Bio */}
        <p className="text-white/90 leading-relaxed mb-8 text-lg">
          {founder.bio}
        </p>

        {/* Specialties */}
        <div className="mb-6">
          <h4 className="text-white font-semibold mb-4">Specialties:</h4>
          <div className="grid grid-cols-2 gap-3">
            {founder.specialties.map((specialty, specIndex) => (
              <motion.div
                key={specIndex}
                className="flex items-center space-x-2"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 1 + index * 0.3 + specIndex * 0.1 }}
              >
                <div className="w-2 h-2 bg-primary-200 rounded-full"></div>
                <span className="text-white/80 text-sm">{specialty}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h4 className="text-white font-semibold mb-4">Key Achievements:</h4>
          <div className="space-y-3">
            {founder.achievements.map((achievement, achIndex) => (
              <motion.div
                key={achIndex}
                className="flex items-center space-x-3"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 1.2 + index * 0.3 + achIndex * 0.1 }}
              >
                <div className="w-1.5 h-1.5 bg-gradient-to-r from-primary-200 to-primary-300 rounded-full"></div>
                <span className="text-white/80 text-sm">{achievement}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-primary-200/20 to-primary-300/20 rounded-full blur-xl"></div>
    </motion.div>
  )
}

export default function Founders() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, threshold: 0.2 })

  return (
    <div ref={containerRef} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-primary-200/20 via-primary-300/10 to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
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
            Meet the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-100 to-primary-200">
              Founders
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            Built by active wholesalers who understand what it takes to close deals and scale operations.
          </p>
        </motion.div>

        {/* Timeline Section */}
        <div className="mb-20 lg:mb-24">
          <motion.h3
            className="text-2xl lg:text-3xl font-bold text-white text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our Journey
          </motion.h3>
          
          <div className="max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-white/20"></div>
              <motion.div
                className="absolute left-6 top-0 w-0.5 bg-gradient-to-b from-primary-200 to-primary-300"
                initial={{ height: '0%' }}
                animate={isInView ? { height: '100%' } : {}}
                transition={{ duration: 2, delay: 0.5 }}
              />
              
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <TimelineItem
                    key={index}
                    item={item}
                    index={index}
                    isInView={isInView}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Founders Cards */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {founders.map((founder, index) => (
            <FounderCard
              key={index}
              founder={founder}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Bottom Summary */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 2 }}
        >
          <div className="glass-strong rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto">
            <p className="text-white/90 text-lg lg:text-xl leading-relaxed mb-8">
              Nick brings deal and community expertise. Loaay brings systems and operations excellence. 
              Together, they built One Call Away to give investors a VA company that finally understands 
              wholesaling at an elite level.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-gradient-to-r from-primary-200 to-primary-300 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(109, 215, 253, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Meet with the Founders
              </motion.button>
              <motion.button
                className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join Our Community
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

