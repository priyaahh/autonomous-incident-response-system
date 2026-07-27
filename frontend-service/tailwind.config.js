/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        slate: {
          950: '#0B1220',
          900: '#111827',
          800: '#1F2937',
          700: '#334155',
        },
        blue: {
          500: '#2563EB',
        },
        green: {
          500: '#22C55E',
        },
        amber: {
          500: '#F59E0B',
        },
        red: {
          500: '#EF4444',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 40px rgba(15, 23, 42, 0.25)',
      },
    },
  },
  plugins: [],
};
