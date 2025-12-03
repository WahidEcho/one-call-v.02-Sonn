'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'

const faqCategories = [
  {
    id: 'contracts',
    title: 'Contracts & Billing',
    faqs: [
      {
        id: 1,
        question: 'How long are your contracts? Can I cancel if I\'m not satisfied?',
        answer: 'We work with monthly agreements because we\'re confident in our results. You can cancel with 30 days notice. Most clients stay because they see the value immediately, but we never want to lock you into something that isn\'t delivering.'
      },
      {
        id: 7,
        question: 'What if I need multiple VAs or want to scale up?',
        answer: 'We work with teams of all sizes. Whether you need 2 VAs or 20, we can scale your operation while maintaining quality and consistency. We offer volume discounts and can create custom packages for larger teams or multi-market operations.'
      }
    ]
  },
  {
    id: 'services',
    title: 'Services & Process',
    faqs: [
      {
        id: 2,
        question: 'What time zones do your VAs work in? Will they match my schedule?',
        answer: 'Our VAs work in US time zones to align with your business hours and your prospects\' availability. We coordinate schedules during onboarding to ensure optimal calling times for your target markets and your team\'s workflow.'
      },
      {
        id: 3,
        question: 'How quickly can we get started? What\'s the onboarding process?',
        answer: 'Most clients are up and running within 7-10 business days. Our onboarding includes: VA selection and training on your specific processes, CRM setup and integration, script development and refinement, initial test calls and optimization, and full handoff with daily reporting established.'
      },
      {
        id: 8,
        question: 'Can you provide leads and data, or do I need my own lists?',
        answer: 'We work with your existing lead sources and can also help you identify high-quality data providers. Our Premium package includes recommendations for reliable list sources, and we can connect you with our preferred skiptracing and lead generation partners.'
      }
    ]
  },
  {
    id: 'technology',
    title: 'Technology & Integration',
    faqs: [
      {
        id: 4,
        question: 'Do your VAs work with my existing CRM and tools?',
        answer: 'Yes, absolutely. Our VAs are trained on all major real estate CRMs including Podio, REI BlackBook, Salesforce, HubSpot, and others. We also integrate with popular dialing platforms, skiptracing services, and lead management tools. If you use something custom, we\'ll adapt.'
      }
    ]
  },
  {
    id: 'quality',
    title: 'Quality & Training',
    faqs: [
      {
        id: 5,
        question: 'What makes your VAs different from other companies?',
        answer: 'Our VAs are specifically trained in real estate wholesaling by active wholesalers (us). They understand motivated seller psychology, deal qualification criteria, market terminology, and how to identify genuine opportunities vs. time-wasters. Most other VA companies provide generic assistants with basic scripts.'
      },
      {
        id: 6,
        question: 'How do you handle training and quality control?',
        answer: 'All VAs complete our proprietary real estate training program covering wholesaling fundamentals, objection handling, lead qualification, and CRM management. We conduct ongoing performance reviews, call monitoring, and skills development. You receive weekly performance reports and can request adjustments anytime.'
      }
    ]
  }
]

interface CompactFAQItemProps {
  faq: typeof faqCategories[0]['faqs'][0]
  isOpen: boolean
  onToggle: () => void
  delay: number
}

function CompactFAQItem({ faq, isOpen, onToggle, delay }: CompactFAQItemProps) {
  return (
    <motion.div
      className="professional-glass rounded-xl overflow-hidden cursor-pointer group hover:professional-glass-strong transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      onClick={onToggle}
    >
      {/* Compact Question Header */}
      <div className="p-4 flex items-center justify-between">
        <h3 className="text-sm lg:text-base font-semibold text-secondary-900 pr-3 flex-1 leading-tight">
          {faq.question}
        </h3>
        <motion.div
          className="w-6 h-6 bg-gradient-to-br from-primary-200 to-primary-300 rounded-full flex items-center justify-center text-white shadow-md flex-shrink-0"
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </motion.div>
      </div>

      {/* Compact Answer Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 border-t border-white/10">
              <motion.p
                className="text-secondary-700 text-sm leading-relaxed pt-3"
                initial={{ y: -5, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.05 }}
              >
                {faq.answer}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })
  const [activeCategory, setActiveCategory] = useState('contracts')
  const [openItems, setOpenItems] = useState<number[]>([1]) // First item open by default

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  const activeCategoryData = faqCategories.find(cat => cat.id === activeCategory)

  return (
    <div ref={containerRef} className="relative py-16 lg:py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-[600px] h-[400px] bg-gradient-radial from-primary-200/20 via-primary-300/10 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compact Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Frequently Asked{' '}
            <span className="text-white/90 drop-shadow-md">
              Questions
            </span>
          </h2>
          <p className="text-lg text-white max-w-3xl mx-auto leading-relaxed">
            Get answers to common questions about our VA services, onboarding process, and what makes us different.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-wrap justify-center gap-2 lg:gap-3">
            {faqCategories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {category.title}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* FAQ Content */}
        <AnimatePresence mode="wait">
          {activeCategoryData && (
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="professional-glass-strong rounded-3xl p-6 lg:p-8"
            >
              <h3 className="text-xl lg:text-2xl font-bold text-secondary-900 mb-6 text-center">
                {activeCategoryData.title}
              </h3>
              
              {/* Responsive FAQ Grid */}
              <div className={`grid gap-4 ${
                activeCategoryData.faqs.length > 2 
                  ? 'lg:grid-cols-2' 
                  : 'max-w-2xl mx-auto'
              }`}>
                {activeCategoryData.faqs.map((faq, index) => (
                  <CompactFAQItem
                    key={faq.id}
                    faq={faq}
                    isOpen={openItems.includes(faq.id)}
                    onToggle={() => toggleItem(faq.id)}
                    delay={index * 0.1}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  )
}

