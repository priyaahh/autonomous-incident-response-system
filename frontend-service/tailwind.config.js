/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark premium background shades
        panel: {
          dark: '#0B0F19',     // Deep space black/blue
          card: '#151D30',     // Dark card overlay
          border: 'rgba(255, 255, 255, 0.08)',
        },
        // Harmonious operational indicators
        incident: {
          critical: '#F43F5E', // Vivid Rose
          high: '#FB923C',     // Warm Amber
          medium: '#FCD34D',   // Honey Gold
          low: '#38BDF8',      // Sky Cyan
          success: '#10B981',  // Emerald Green
        },
        // Agent Active State Highlights
        agent: {
          planner: '#6366F1',  // Indigo
          analyst: '#8B5CF6',  // Purple
          retriever: '#EC4899',// Pink
          assessor: '#F59E0B', // Amber
          generator: '#06B6D4' // Cyan
        }
      },
      fontFamily: {
        sans: ['Inter', 'Outfit', 'sans-serif'],
        mono: ['Fira Code', 'Courier New', 'monospace'],
      },
      boxShadow: {
        // Glassmorphism ambient glow
        'neon-indigo': '0 0 15px rgba(99, 102, 241, 0.15)',
        'neon-rose': '0 0 15px rgba(244, 63, 94, 0.15)',
        'glass-card': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'node-active': 'pulse-indigo 2s infinite',
      },
      keyframes: {
        'pulse-indigo': {
          '0%, 100%': {
            transform: 'scale(1)',
            boxShadow: '0 0 0 0 rgba(99, 102, 241, 0.4)',
          },
          '50%': {
            transform: 'scale(1.05)',
            boxShadow: '0 0 20px 10px rgba(99, 102, 241, 0)',
          },
        },
      },
    },
  },
  plugins: [],
}
