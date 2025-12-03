'use client'

import { motion } from 'framer-motion'

interface AnimatedLogoSVGProps {
  size?: number
  className?: string
}

export default function AnimatedLogoSVG({ size = 300, className = "" }: AnimatedLogoSVGProps) {
  const radius = size * 0.35 // Circle radius for icon placement
  const centerX = size / 2
  const centerY = size / 2

  // Calculate positions for 3 icons around the circle
  const iconPositions = [
    { x: centerX, y: centerY - radius }, // Top (12 o'clock)
    { x: centerX - radius * Math.cos(Math.PI / 6), y: centerY + radius * Math.sin(Math.PI / 6) }, // Bottom Left (8 o'clock)
    { x: centerX + radius * Math.cos(Math.PI / 6), y: centerY + radius * Math.sin(Math.PI / 6) }, // Bottom Right (4 o'clock)
  ]

  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="drop-shadow-2xl"
        style={{ filter: 'drop-shadow(0 10px 30px rgba(16, 119, 254, 0.3))' }}
      >
        {/* Background Circle with Gradient */}
        <defs>
          <radialGradient id="backgroundGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.95)" />
            <stop offset="50%" stopColor="rgba(255, 255, 255, 0.85)" />
            <stop offset="100%" stopColor="rgba(16, 119, 254, 0.1)" />
          </radialGradient>
          
          <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1077fe" />
            <stop offset="100%" stopColor="#49b7ff" />
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Outer Circle Path (for reference, invisible) */}
        <circle
          cx={centerX}
          cy={centerY}
          r={radius + 20}
          fill="none"
          stroke="rgba(16, 119, 254, 0.2)"
          strokeWidth="2"
          strokeDasharray="5,5"
          className="opacity-30"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from={`0 ${centerX} ${centerY}`}
            to={`360 ${centerX} ${centerY}`}
            dur="20s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Main Background Circle */}
        <motion.circle
          cx={centerX}
          cy={centerY}
          r={radius + 15}
          fill="url(#backgroundGradient)"
          stroke="rgba(16, 119, 254, 0.3)"
          strokeWidth="1"
          filter="url(#glow)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />

        {/* Rotating Icons Container */}
        <g>
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from={`0 ${centerX} ${centerY}`}
            to={`360 ${centerX} ${centerY}`}
            dur="12s"
            repeatCount="indefinite"
          />
          
          {/* Dollar Sign Icon - Top */}
          <g transform={`translate(${iconPositions[0].x - 20}, ${iconPositions[0].y - 20})`}>
            <circle cx="20" cy="20" r="18" fill="rgba(255, 255, 255, 0.9)" stroke="url(#iconGradient)" strokeWidth="2" filter="url(#glow)"/>
            <text x="20" y="28" textAnchor="middle" fontSize="24" fontWeight="bold" fill="url(#iconGradient)">$</text>
          </g>

          {/* House with Phone Icon - Bottom Left */}
          <g transform={`translate(${iconPositions[1].x - 20}, ${iconPositions[1].y - 20})`}>
            <circle cx="20" cy="20" r="18" fill="rgba(255, 255, 255, 0.9)" stroke="url(#iconGradient)" strokeWidth="2" filter="url(#glow)"/>
            {/* House Path */}
            <path
              d="M12 8 L20 4 L28 8 L28 16 L26 16 L26 12 L14 12 L14 16 L12 16 Z M16 14 L16 16 L18 16 L18 14 Z M22 14 L22 16 L24 16 L24 14 Z"
              fill="url(#iconGradient)"
              stroke="none"
            />
            {/* Phone in house */}
            <circle cx="20" cy="26" r="6" fill="url(#iconGradient)" opacity="0.8"/>
            <path
              d="M18 24 Q18 23 19 23 L21 23 Q22 23 22 24 L22 27 Q22 28 21 28 L19 28 Q18 28 18 27 Z M19 25 L19 26 M21 25 L21 26"
              fill="white"
              stroke="white"
              strokeWidth="0.5"
            />
          </g>

          {/* Phone Icon - Bottom Right */}
          <g transform={`translate(${iconPositions[2].x - 20}, ${iconPositions[2].y - 20})`}>
            <circle cx="20" cy="20" r="18" fill="rgba(255, 255, 255, 0.9)" stroke="url(#iconGradient)" strokeWidth="2" filter="url(#glow)"/>
            {/* Phone Path */}
            <path
              d="M14 10 Q14 9 15 9 L25 9 Q26 9 26 10 L26 30 Q26 31 25 31 L15 31 Q14 31 14 30 Z M16 12 L24 12 M16 28 L24 28 M19 29 L21 29"
              fill="none"
              stroke="url(#iconGradient)"
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* Phone screen */}
            <rect x="16" y="13" width="8" height="14" fill="url(#iconGradient)" opacity="0.3" rx="1"/>
            {/* Phone speaker dots */}
            <circle cx="18" cy="15" r="0.5" fill="url(#iconGradient)"/>
            <circle cx="20" cy="15" r="0.5" fill="url(#iconGradient)"/>
            <circle cx="22" cy="15" r="0.5" fill="url(#iconGradient)"/>
          </g>
        </g>

        {/* Central Text - Static (no rotation) */}
        <g>
          {/* Central Background Circle */}
          <circle
            cx={centerX}
            cy={centerY}
            r={radius - 25}
            fill="rgba(255, 255, 255, 0.95)"
            stroke="url(#iconGradient)"
            strokeWidth="2"
            filter="url(#glow)"
          />
          
          {/* Static Central Text */}
          <text
            x={centerX}
            y={centerY - 10}
            textAnchor="middle"
            fontSize={size * 0.08}
            fontWeight="bold"
            fill="url(#iconGradient)"
            fontFamily="system-ui, -apple-system, sans-serif"
            letterSpacing="2px"
          >
            One Call
          </text>
          <text
            x={centerX}
            y={centerY + 8}
            textAnchor="middle"
            fontSize={size * 0.08}
            fontWeight="bold"
            fill="url(#iconGradient)"
            fontFamily="system-ui, -apple-system, sans-serif"
            letterSpacing="2px"
          >
            Away
          </text>
          <text
            x={centerX}
            y={centerY + 26}
            textAnchor="middle"
            fontSize={size * 0.06}
            fontWeight="600"
            fill="rgba(16, 119, 254, 0.8)"
            fontFamily="system-ui, -apple-system, sans-serif"
            letterSpacing="1.5px"
          >
            VAs
          </text>
        </g>

        {/* Floating Particles Effect */}
        {[...Array(8)].map((_, i) => (
          <circle
            key={i}
            r="2"
            fill="url(#iconGradient)"
            opacity="0.4"
          >
            <animateMotion
              dur={`${8 + i * 2}s`}
              repeatCount="indefinite"
              path={`M ${centerX + Math.cos(i * Math.PI / 4) * (radius + 40)} ${centerY + Math.sin(i * Math.PI / 4) * (radius + 40)} 
                      A ${radius + 40} ${radius + 40} 0 1 1 ${centerX + Math.cos((i + 1) * Math.PI / 4) * (radius + 40)} ${centerY + Math.sin((i + 1) * Math.PI / 4) * (radius + 40)}
                      A ${radius + 40} ${radius + 40} 0 1 1 ${centerX + Math.cos(i * Math.PI / 4) * (radius + 40)} ${centerY + Math.sin(i * Math.PI / 4) * (radius + 40)}`}
            />
            <animate attributeName="opacity" values="0.2;0.6;0.2" dur="3s" repeatCount="indefinite" />
          </circle>
        ))}
      </svg>

      {/* Subtle Pulse Animation */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-200/10 to-primary-400/10"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.3, 0.1, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  )
}
