'use client'

import { motion } from 'framer-motion'

export default function FloatingMoneyBackground() {
  // Static positions for dollar signs to avoid hydration issues
  const dollarSigns = [
    { id: 1, x: 10, y: 20, delay: 0, duration: 45 },
    { id: 2, x: 25, y: 70, delay: 5, duration: 50 },
    { id: 3, x: 45, y: 30, delay: 10, duration: 40 },
    { id: 4, x: 65, y: 80, delay: 15, duration: 55 },
    { id: 5, x: 80, y: 15, delay: 20, duration: 42 },
    { id: 6, x: 5, y: 60, delay: 25, duration: 48 },
    { id: 7, x: 90, y: 45, delay: 30, duration: 38 },
    { id: 8, x: 35, y: 85, delay: 35, duration: 52 },
    { id: 9, x: 75, y: 25, delay: 8, duration: 46 },
    { id: 10, x: 15, y: 50, delay: 18, duration: 44 },
  ]

  // Static positions for cash bills
  const cashBills = [
    { id: 1, x: 20, y: 40, delay: 12, duration: 60, rotation: 15 },
    { id: 2, x: 70, y: 10, delay: 22, duration: 65 },
    { id: 3, x: 50, y: 75, delay: 32, duration: 58 },
    { id: 4, x: 85, y: 65, delay: 2, duration: 62 },
    { id: 5, x: 30, y: 5, delay: 28, duration: 54 },
    { id: 6, x: 8, y: 90, delay: 38, duration: 67 },
  ]

  return (
    <div className="floating-money-background">
      {/* Dollar Signs */}
      {dollarSigns.map((dollar) => (
        <motion.div
          key={`dollar-${dollar.id}`}
          className="floating-dollar"
          style={{
            left: `${dollar.x}%`,
            top: `${dollar.y}%`,
          }}
          initial={{
            y: 0,
            opacity: 0,
          }}
          animate={{
            y: [-20, -120, -20],
            opacity: [0, 0.08, 0.12, 0.08, 0],
            rotate: [0, 10, -5, 15, 0],
          }}
          transition={{
            duration: dollar.duration,
            delay: dollar.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          $
        </motion.div>
      ))}

      {/* Cash Bills */}
      {cashBills.map((bill) => (
        <motion.div
          key={`bill-${bill.id}`}
          className="floating-bill"
          style={{
            left: `${bill.x}%`,
            top: `${bill.y}%`,
          }}
          initial={{
            x: 0,
            y: 0,
            opacity: 0,
          }}
          animate={{
            x: [-30, 40, -10, 25, -30],
            y: [-15, -80, -45, -90, -15],
            opacity: [0, 0.06, 0.10, 0.06, 0],
            rotate: [bill.rotation || 0, (bill.rotation || 0) + 20, (bill.rotation || 0) - 10, (bill.rotation || 0) + 15, bill.rotation || 0],
          }}
          transition={{
            duration: bill.duration,
            delay: bill.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg width="24" height="12" viewBox="0 0 24 12" className="bill-svg">
            <rect 
              x="1" 
              y="1" 
              width="22" 
              height="10" 
              rx="2" 
              fill="currentColor" 
              stroke="currentColor" 
              strokeWidth="0.5"
              opacity="0.8"
            />
            <circle cx="12" cy="6" r="2" fill="rgba(255,255,255,0.3)" />
            <rect x="3" y="3" width="2" height="1" fill="rgba(255,255,255,0.2)" />
            <rect x="19" y="8" width="2" height="1" fill="rgba(255,255,255,0.2)" />
          </svg>
        </motion.div>
      ))}

      {/* Additional subtle money particles */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="money-particle"
          style={{
            left: `${15 + i * 10}%`,
            top: `${20 + i * 8}%`,
          }}
          initial={{
            scale: 0,
            opacity: 0,
          }}
          animate={{
            scale: [0, 1, 0.8, 1.2, 0],
            opacity: [0, 0.04, 0.08, 0.04, 0],
            y: [-10, -60, -30, -80, -10],
          }}
          transition={{
            duration: 35 + i * 3,
            delay: i * 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          ●
        </motion.div>
      ))}
    </div>
  )
}
