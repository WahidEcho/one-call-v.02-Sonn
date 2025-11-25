import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Professional Blue and White Palette
        primary: {
          50: '#eff6ff',
          100: '#dbeafe', 
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        }
      },
      animation: {
        // Enhanced Futuristic Animations
        'float': 'float 6s ease-in-out infinite',
        'pulse-neon': 'pulse-neon 2s ease-in-out infinite alternate',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'slide-up': 'slide-up 0.6s ease-out',
        'fade-in-up': 'fade-in-up 0.8s ease-out',
        'matrix-rain': 'matrix-rain 20s linear infinite',
        'particle-float': 'particle-float 8s ease-in-out infinite',
        'hologram': 'hologram 4s ease-in-out infinite',
        'scan-line': 'scan-line 2s linear infinite',
        'electric-flow': 'electric-flow 3s ease-in-out infinite',
        'cyber-grid': 'cyber-grid 10s linear infinite',
        'neon-flicker': 'neon-flicker 0.15s ease-in-out infinite alternate',
        'data-stream': 'data-stream 15s linear infinite',
        'rotate-3d': 'rotate-3d 20s linear infinite',
        'morph': 'morph 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotateZ(0deg)' },
          '33%': { transform: 'translateY(-20px) rotateZ(1deg)' },
          '66%': { transform: 'translateY(-10px) rotateZ(-1deg)' },
        },
        'pulse-neon': {
          'from': { 
            boxShadow: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor',
            textShadow: '0 0 5px currentColor'
          },
          'to': { 
            boxShadow: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor',
            textShadow: '0 0 10px currentColor, 0 0 20px currentColor'
          },
        },
        'glow-pulse': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(0, 212, 255, 0.3), inset 0 0 20px rgba(0, 212, 255, 0.1)',
            background: 'rgba(0, 212, 255, 0.05)'
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(0, 212, 255, 0.6), inset 0 0 30px rgba(0, 212, 255, 0.2)',
            background: 'rgba(0, 212, 255, 0.1)'
          },
        },
        'matrix-rain': {
          '0%': { transform: 'translateY(-100vh)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'particle-float': {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px) scale(1)' },
          '25%': { transform: 'translateY(-30px) translateX(10px) scale(1.1)' },
          '50%': { transform: 'translateY(-20px) translateX(-5px) scale(0.9)' },
          '75%': { transform: 'translateY(-35px) translateX(15px) scale(1.05)' },
        },
        'hologram': {
          '0%, 100%': { 
            opacity: '0.8',
            transform: 'translateZ(0) scale(1)',
            filter: 'hue-rotate(0deg)'
          },
          '50%': { 
            opacity: '1',
            transform: 'translateZ(10px) scale(1.02)',
            filter: 'hue-rotate(90deg)'
          },
        },
        'scan-line': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'electric-flow': {
          '0%, 100%': { 
            background: 'linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.4), transparent)',
            transform: 'translateX(-100%)'
          },
          '50%': { 
            background: 'linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.8), transparent)',
            transform: 'translateX(100%)'
          },
        },
        'cyber-grid': {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(-50px, -50px)' },
        },
        'neon-flicker': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        'data-stream': {
          '0%': { transform: 'translateX(-100%) skewX(-15deg)' },
          '100%': { transform: 'translateX(100vw) skewX(-15deg)' },
        },
        'rotate-3d': {
          '0%': { transform: 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)' },
          '33%': { transform: 'rotateX(360deg) rotateY(120deg) rotateZ(0deg)' },
          '66%': { transform: 'rotateX(0deg) rotateY(240deg) rotateZ(360deg)' },
          '100%': { transform: 'rotateX(0deg) rotateY(360deg) rotateZ(0deg)' },
        },
        'morph': {
          '0%, 100%': { borderRadius: '20px', transform: 'scale(1) rotate(0deg)' },
          '25%': { borderRadius: '50px', transform: 'scale(1.05) rotate(90deg)' },
          '50%': { borderRadius: '10px', transform: 'scale(0.95) rotate(180deg)' },
          '75%': { borderRadius: '30px', transform: 'scale(1.02) rotate(270deg)' },
        },
        'slide-up': {
          'from': { opacity: '0', transform: 'translateY(30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-up': {
          'from': { opacity: '0', transform: 'translateY(60px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      backdropBlur: {
        'xs': '2px',
      },
      backgroundImage: {
        'cyber-gradient': 'linear-gradient(135deg, #0a0a0a 0%, #111111 50%, #1a1a1a 100%)',
        'neon-gradient': 'linear-gradient(45deg, #00d4ff, #8a2be2, #ff006e)',
        'electric-gradient': 'linear-gradient(90deg, #0080ff, #6600ff, #00ffcc)',
        'matrix-gradient': 'linear-gradient(180deg, rgba(0,0,0,0.9) 0%, rgba(0,212,255,0.1) 50%, rgba(0,0,0,0.9) 100%)',
        'glow-radial': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
        'cyber-mesh': 'radial-gradient(circle at 20% 50%, rgba(0,212,255,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(138,43,226,0.3) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(255,0,110,0.3) 0%, transparent 50%)',
      },
      fontFamily: {
        'cyber': ['Orbitron', 'monospace'],
        'tech': ['Rajdhani', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
