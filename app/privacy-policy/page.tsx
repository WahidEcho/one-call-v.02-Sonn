'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function PrivacyPolicy() {
  const currentDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })

  return (
    <div className="z-content always-visible">
      {/* Header */}
      <div className="relative py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Privacy Policy
            </h1>
            <p className="text-xl text-white/80 mb-8 drop-shadow-md">
              Your privacy is important to us. This policy explains how One Call Away collects, uses, and protects your information.
            </p>
            <p className="text-white/70 drop-shadow-sm">
              Last updated: {currentDate}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="relative py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="professional-glass-strong rounded-3xl p-8 lg:p-12"
          >
            <div className="prose prose-lg max-w-none">
              
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-secondary-900 mb-4">1. Information We Collect</h2>
                <p className="text-secondary-700 mb-4">
                  One Call Away ("we," "us," or "our") collects information to provide superior virtual assistant and cold-calling services for real estate professionals. We collect:
                </p>
                <ul className="list-disc list-inside text-secondary-700 space-y-2 ml-4">
                  <li><strong>Personal Information:</strong> Name, email address, phone number, company details, and business information you provide when contacting us or using our services.</li>
                  <li><strong>Business Information:</strong> Property data, lead information, CRM data, and other real estate business information necessary to provide our VA services.</li>
                  <li><strong>Communication Data:</strong> Call recordings, email exchanges, and other communications for quality assurance and training purposes.</li>
                  <li><strong>Usage Information:</strong> How you interact with our website, services, and platforms to improve our offerings.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-secondary-900 mb-4">2. How We Use Your Information</h2>
                <p className="text-secondary-700 mb-4">
                  We use collected information to:
                </p>
                <ul className="list-disc list-inside text-secondary-700 space-y-2 ml-4">
                  <li>Provide virtual assistant and cold-calling services tailored to your real estate business</li>
                  <li>Manage and execute cold-calling campaigns on your behalf</li>
                  <li>Integrate with your existing CRM and real estate platforms</li>
                  <li>Train our virtual assistants to better serve your specific needs</li>
                  <li>Communicate with you about our services, updates, and industry insights</li>
                  <li>Improve our service quality through performance analysis and feedback</li>
                  <li>Comply with legal obligations and protect our legitimate business interests</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-secondary-900 mb-4">3. Information Sharing and Disclosure</h2>
                <p className="text-secondary-700 mb-4">
                  One Call Away does not sell, trade, or rent your personal information. We may share information only in these limited circumstances:
                </p>
                <ul className="list-disc list-inside text-secondary-700 space-y-2 ml-4">
                  <li><strong>Service Providers:</strong> With trusted partners who assist in providing our services (CRM integrations, communication platforms, etc.)</li>
                  <li><strong>Legal Requirements:</strong> When required by law, court order, or to protect our rights and safety</li>
                  <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of business assets</li>
                  <li><strong>With Your Consent:</strong> When you explicitly authorize us to share specific information</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-secondary-900 mb-4">4. Data Security and Protection</h2>
                <p className="text-secondary-700 mb-4">
                  We implement industry-standard security measures to protect your information:
                </p>
                <ul className="list-disc list-inside text-secondary-700 space-y-2 ml-4">
                  <li>Encryption of sensitive data in transit and at rest</li>
                  <li>Secure access controls and authentication protocols</li>
                  <li>Regular security audits and vulnerability assessments</li>
                  <li>Employee training on data protection and confidentiality</li>
                  <li>Secure data centers with physical and digital security measures</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-secondary-900 mb-4">5. Your Rights and Choices</h2>
                <p className="text-secondary-700 mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside text-secondary-700 space-y-2 ml-4">
                  <li><strong>Access:</strong> Request information about the personal data we hold about you</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal obligations)</li>
                  <li><strong>Portability:</strong> Request a copy of your data in a structured, machine-readable format</li>
                  <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
                </ul>
                <p className="text-secondary-700 mt-4">
                  To exercise these rights, contact us at <a href="mailto:Info@OneCallAway.com" className="text-primary-600 hover:text-primary-700">Info@OneCallAway.com</a>.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-secondary-900 mb-4">6. Data Retention</h2>
                <p className="text-secondary-700">
                  We retain personal information for as long as necessary to provide our services and fulfill legal obligations. Business data and call recordings may be retained longer for quality assurance, training, and compliance purposes. Upon termination of services, we will securely delete or anonymize your information according to our data retention schedule.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-secondary-900 mb-4">7. Third-Party Integrations</h2>
                <p className="text-secondary-700">
                  Our services integrate with various real estate platforms and CRMs (Podio, REI BlackBook, Salesforce, etc.). These integrations are governed by the respective third parties' privacy policies in addition to this policy. We ensure all integrated platforms meet our security and privacy standards.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-secondary-900 mb-4">8. Changes to This Policy</h2>
                <p className="text-secondary-700">
                  We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will notify you of material changes via email or through our website. Your continued use of our services after such changes constitutes acceptance of the updated policy.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-secondary-900 mb-4">9. Contact Information</h2>
                <p className="text-secondary-700 mb-4">
                  For questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-primary-50 p-6 rounded-xl">
                  <p className="text-secondary-800 mb-2"><strong>One Call Away</strong></p>
                  <p className="text-secondary-700 mb-2">Email: <a href="mailto:Info@OneCallAway.com" className="text-primary-600 hover:text-primary-700">Info@OneCallAway.com</a></p>
                  <p className="text-secondary-700">Phone: +1 (555) 123-4567</p>
                </div>
              </section>

            </div>

            {/* Back to Home Link */}
            <div className="mt-12 pt-8 border-t border-secondary-200">
              <Link 
                href="/"
                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Home
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
