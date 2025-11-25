# One Call Away - Premium Real Estate Landing Page

A highly interactive, animation-heavy single-page website for One Call Away - a premium real-estate cold-calling & VA agency founded by active wholesalers.

## 🚀 Features

### ✨ Design & Experience
- **Cinematic Animations**: Powered by Framer Motion with scroll-triggered reveals, 3D hover effects, and smooth transitions
- **Continuous Gradient Background**: Single vertical gradient from dark to light blue that flows throughout the entire page
- **Glassmorphism UI**: Semi-transparent components with backdrop blur effects
- **Responsive Design**: Fully responsive across all device sizes
- **Smooth Scrolling**: Enhanced with Lenis for buttery-smooth scroll experience

### 🎯 Interactive Components
- **Sticky Navigation**: With scroll progress indicator and smooth anchor navigation
- **Animated Hero**: Live dashboard with counting animations and floating background elements
- **Interactive Timeline**: Step-by-step call flow visualization with hover details
- **3D Feature Cards**: Rotating cards with glow effects on hover
- **Animated Marquee**: Scrolling partner tools showcase
- **FAQ Accordion**: Smooth expanding/collapsing sections
- **Calendly Integration**: Modal popup for scheduling strategy calls
- **Animated Counters**: Number counting animations on scroll

### 🎨 Visual Elements
- **Color Palette**: 
  - #005ACD (Deep primary blue)
  - #0093CB (Medium cyan-blue) 
  - #6DD7FD (Bright sky blue)
  - #BEF0FF (Light cyan)
  - #F5FFFF (Near-white)
- **Custom Animations**: Floating orbs, signal waves, progress bars
- **Gradient Effects**: Radial gradients, glow effects, and color transitions

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Smooth Scroll**: Lenis
- **Fonts**: Inter (Google Fonts)

## 📁 Project Structure

```
onev.02/
├── app/
│   ├── globals.css          # Global styles & gradient background
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page with all sections
├── components/
│   ├── Navbar.tsx           # Sticky navigation with scroll progress
│   ├── Hero.tsx             # Animated hero with live dashboard
│   ├── About.tsx            # Problem/Solution frosted panels
│   ├── Features.tsx         # Interactive 3D feature cards
│   ├── CallFlow.tsx         # Timeline showing call-to-deal process
│   ├── Packages.tsx         # Pricing cards with hover animations
│   ├── Tools.tsx            # Animated partner tools marquee
│   ├── Founders.tsx         # Founder profiles with company timeline
│   ├── FAQ.tsx              # Animated accordion FAQ section
│   ├── Contact.tsx          # CTA section with Calendly modal
│   └── Footer.tsx           # Footer with links and newsletter
├── package.json
├── tailwind.config.ts       # Custom colors, animations & utilities
├── tsconfig.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open in Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### Colors
Update the color palette in `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    DEFAULT: '#005ACD',
    50: '#F5FFFF',
    100: '#BEF0FF', 
    200: '#6DD7FD',
    300: '#0093CB',
    400: '#005ACD',
  }
}
```

### Animations
Custom animations are defined in `tailwind.config.ts` and can be extended:
```typescript
animation: {
  'float': 'float 6s ease-in-out infinite',
  'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
}
```

### Content
All content is directly in the components and can be easily updated:
- Company information in `About.tsx`
- Feature descriptions in `Features.tsx` 
- Pricing in `Packages.tsx`
- FAQ content in `FAQ.tsx`

## 📱 Sections Overview

1. **Hero** - Cinematic introduction with animated dashboard
2. **About** - Problem/Solution comparison panels
3. **Features** - What makes One Call Away different
4. **Call Flow** - Interactive timeline from call to deal
5. **Packages** - Standard vs Premium VA pricing
6. **Tools** - Partner platform showcase
7. **Founders** - Team profiles and company history
8. **FAQ** - Common questions with accordion
9. **Contact** - Final CTA with Calendly integration
10. **Footer** - Links, social media, newsletter signup

## 🎭 Key Animations

- **Scroll Reveals**: Components fade in with Y translation on scroll
- **Staggered Children**: Cards and list items animate in sequence
- **Hover Effects**: 3D rotations, scaling, glow effects
- **Progress Animations**: Timeline progress, scroll progress bar
- **Number Counters**: Animated counting on scroll into view
- **Floating Elements**: Background orbs with continuous motion

## 📞 Calendly Integration

The Calendly modal in `Contact.tsx` can be updated with your actual Calendly URL:
```typescript
src="https://calendly.com/your-username/strategy-call"
```

## 🌟 Performance Features

- **Lazy Loading**: Images and iframe content
- **Optimized Animations**: GPU-accelerated transforms
- **Responsive Images**: Automatic optimization via Next.js
- **Code Splitting**: Automatic by Next.js App Router
- **Font Optimization**: Google Fonts with display swap

## 🔧 Development Notes

- All animations use `framer-motion` for smooth 60fps performance
- Background gradient is fixed to create seamless scroll experience
- Components use `useInView` for performance-optimized scroll animations
- Glassmorphism effects use `backdrop-filter` with fallbacks
- Mobile-first responsive design with Tailwind breakpoints

## 📄 License

This project is created for One Call Away. All rights reserved.

---

Built with ❤️ by senior front-end engineers and product designers.

