import type { Metadata } from 'next'
import { Orbitron, Rajdhani } from 'next/font/google'
import './globals.css'

const orbitron = Orbitron({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-orbitron'
})

const rajdhani = Rajdhani({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-rajdhani'
})

export const metadata: Metadata = {
  title: 'One Call Away - Futuristic Real Estate Cold Calling & VAs',
  description: 'Next-generation cold calling & VAs built by wholesalers, for wholesalers. Advanced real-estate virtual assistant and cold-calling agency with cutting-edge technology.',
  keywords: 'real estate, cold calling, virtual assistants, wholesaling, property investment, lead generation, AI, futuristic, technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className={`${orbitron.variable} ${rajdhani.variable} tech-text`}>
        {/* Matrix Rain Effect */}
        <div className="matrix-rain"></div>
        
        {/* Holographic Scan Line */}
        <div className="scan-line"></div>
        
        {children}
      </body>
    </html>
  )
}
