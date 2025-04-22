/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4F46E5',
          50: '#EBEAFD',
          100: '#D7D5FB',
          200: '#AFABF8',
          300: '#8781F4',
          400: '#5F57F1',
          500: '#4F46E5',
          600: '#2418E2',
          700: '#1C13B0',
          800: '#140D7E',
          900: '#0C084C'
        },
        accent: {
          green: '#22C55E',
          purple: '#A855F7',
          blue: '#3B82F6'
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-mesh': 'linear-gradient(to right bottom, #3B82F6, #22C55E, #A855F7)'
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      boxShadow: {
        'glow': '0 0 20px rgba(79, 70, 229, 0.4)'
      }
    },
  },
  plugins: [],
};