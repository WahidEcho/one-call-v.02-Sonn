'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'


const founders = [
  {
    name: 'Nick Kamrada',
    role: 'Co-Founder & Deal Expert',
    location: 'Tampa, Florida',
    image: '👨‍💼', // Placeholder - replace with actual image
    bio: 'Nick is a seasoned real estate wholesaler and entrepreneur in Tampa, Florida. He founded 27 Properties, LLC and the One Call Away Community—a network and coaching hub for wholesalers. Since his first deal in 2021, he has built one of Tampa Bay’s top operations, generating millions in assignment fees through off-market acquisitions. Nick brings hands-on deal and team-building expertise to ensure VA systems are designed by someone living the business daily.',
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
    bio: 'Loaay specializes in scaling operations, managing VA teams, and turning chaos into streamlined systems. He oversees hiring, training, processes, and technology at One Call Away, ensuring smooth, consistent operations. While Nick provides deal expertise, Loaay transforms it into scalable systems that work every time.',
    specialties: ['Systems Design', 'VA Management', 'Process Optimization', 'Technology Integration'],
    achievements: [
      'Designed scalable VA operations',
      'Built training & hiring systems',
      'Created consistent processes',
      'Technology integration expert'
    ]
  }
]


function FounderCard({ founder, index, isInView }: { founder: typeof founders[0]; index: number; isInView: boolean }) {
  return (
    <motion.div
      className="professional-glass-strong rounded-3xl p-8 lg:p-10 relative overflow-hidden group hover:scale-105 transition-transform duration-300"
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
            <h3 className="text-2xl lg:text-3xl font-bold text-secondary-900 mb-2">
              {founder.name}
            </h3>
            <p className="text-primary-200 font-semibold mb-1">
              {founder.role}
            </p>
            <p className="text-secondary-600 text-sm">
              {founder.location}
            </p>
          </div>
        </div>

        {/* Bio */}
        <p className="text-secondary-800 leading-relaxed mb-8 text-lg">
          {founder.bio}
        </p>

        {/* Specialties */}
        <div className="mb-6">
          <h4 className="text-secondary-900 font-semibold mb-4">Specialties:</h4>
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
                <span className="text-secondary-700 text-sm">{specialty}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h4 className="text-secondary-900 font-semibold mb-4">Key Achievements:</h4>
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
                <span className="text-secondary-700 text-sm">{achievement}</span>
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
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })

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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-lg">
            Meet the{' '}
            <span className="text-white/90 drop-shadow-md">
              Founders
            </span>
          </h2>
          <p className="text-xl text-white max-w-4xl mx-auto leading-relaxed">
            Built by active wholesalers who understand what it takes to close deals and scale operations.
          </p>
        </motion.div>


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
          <div className="professional-glass-strong rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-secondary-900 text-center mb-6">
              Message of the Co-Founders
            </h3>
            <p className="text-secondary-800 text-lg lg:text-xl leading-relaxed mb-8">
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
                className="border-2 border-secondary-300 text-secondary-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-secondary-50 transition-all duration-200"
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

