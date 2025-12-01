'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'

const faqs = [
  {
    id: 1,
    question: 'How long are your contracts? Can I cancel if I\'m not satisfied?',
    answer: 'We work with monthly agreements because we\'re confident in our results. You can cancel with 30 days notice. Most clients stay because they see the value immediately, but we never want to lock you into something that isn\'t delivering.'
  },
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
    id: 4,
    question: 'Do your VAs work with my existing CRM and tools?',
    answer: 'Yes, absolutely. Our VAs are trained on all major real estate CRMs including Podio, REI BlackBook, Salesforce, HubSpot, and others. We also integrate with popular dialing platforms, skiptracing services, and lead management tools. If you use something custom, we\'ll adapt.'
  },
  {
    id: 5,
    question: 'What makes your VAs different from other companies?',
    answer: 'Our VAs are specifically trained in real estate wholesaling by active wholesalers (us). They understand motivated seller psychology, deal qualification criteria, market terminology, and how to identify genuine opportunities vs. time-wasters. Most other VA companies provide generic assistants with basic scripts.'
  },
  {
    id: 6,
    question: 'How do you handle training and quality control?',
    answer: 'All VAs complete our proprietary real estate training program covering wholesaling fundamentals, objection handling, lead qualification, and CRM management. We conduct ongoing performance reviews, call monitoring, and skills development. You receive weekly performance reports and can request adjustments anytime.'
  },
  {
    id: 7,
    question: 'What if I need multiple VAs or want to scale up?',
    answer: 'We work with teams of all sizes. Whether you need 2 VAs or 20, we can scale your operation while maintaining quality and consistency. We offer volume discounts and can create custom packages for larger teams or multi-market operations.'
  },
  {
    id: 8,
    question: 'Can you provide leads and data, or do I need my own lists?',
    answer: 'We work with your existing lead sources and can also help you identify high-quality data providers. Our Premium package includes recommendations for reliable list sources, and we can connect you with our preferred skiptracing and lead generation partners.'
  }
]

interface FAQItemProps {
  faq: typeof faqs[0]
  index: number
  isOpen: boolean
  onToggle: () => void
  isInView: boolean
}

function FAQItem({ faq, index, isOpen, onToggle, isInView }: FAQItemProps) {
  return (
    <motion.div
      className="professional-glass rounded-2xl overflow-hidden cursor-pointer group hover:professional-glass-strong transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={onToggle}
    >
      {/* Question Header */}
      <div className="p-6 lg:p-8 flex items-center justify-between">
        <h3 className="text-lg lg:text-xl font-semibold text-secondary-900 pr-4 flex-1">
          {faq.question}
        </h3>
        <motion.div
          className="w-8 h-8 bg-gradient-to-br from-primary-200 to-primary-300 rounded-full flex items-center justify-center text-white shadow-lg"
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </motion.div>
      </div>

      {/* Answer Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 lg:px-8 pb-6 lg:pb-8 border-t border-white/10">
              <motion.p
                className="text-secondary-700 leading-relaxed pt-4"
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {faq.answer}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-200/5 to-primary-300/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </motion.div>
  )
}

export default function FAQ() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })
  const [openItems, setOpenItems] = useState<number[]>([1]) // First item open by default

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  return (
    <div ref={containerRef} className="relative py-24 lg:py-32 overflow-hidden">
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

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-lg">
            Frequently Asked{' '}
            <span className="text-white/90 drop-shadow-md">
              Questions
            </span>
          </h2>
          <p className="text-xl text-secondary-700 max-w-3xl mx-auto leading-relaxed">
            Get answers to common questions about our VA services, onboarding process, and what makes us different.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-16">
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.id}
              faq={faq}
              index={index}
              isOpen={openItems.includes(faq.id)}
              onToggle={() => toggleItem(faq.id)}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="professional-glass-strong rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-secondary-900 mb-6">
              Still Have Questions?
            </h3>
            <p className="text-secondary-700 text-lg mb-8 leading-relaxed">
              Every business is different, and we&apos;re happy to discuss your specific situation. 
              Book a strategy call to get personalized answers and see if we&apos;re a good fit.
            </p>
            
            {/* Contact Options */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <motion.button
                className="bg-gradient-to-r from-primary-200 to-primary-300 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(109, 215, 253, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule a Strategy Call
              </motion.button>
              <motion.button
                className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Us a Message
              </motion.button>
            </div>

            {/* Quick Contact Info */}
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: 'Response Time',
                  detail: 'Within 24 hours'
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2v-6a2 2 0 012-2h8z" />
                    </svg>
                  ),
                  title: 'Free Consultation',
                  detail: '30-minute strategy call'
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: 'No Pressure',
                  detail: 'Just honest advice'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-200 to-primary-300 rounded-full flex items-center justify-center text-white mx-auto mb-3">
                    {item.icon}
                  </div>
                  <h4 className="text-secondary-900 font-semibold mb-1">{item.title}</h4>
                  <p className="text-secondary-600 text-sm">{item.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

