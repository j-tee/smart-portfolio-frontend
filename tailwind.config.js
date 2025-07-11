/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3B82F6', // blue-500
          light: '#93C5FD', // blue-300
          dark: '#1D4ED8', // blue-700
        },
        secondary: {
          DEFAULT: '#10B981', // emerald-500
          light: '#6EE7B7', // emerald-300
          dark: '#047857', // emerald-700
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      spacing: {
        128: '32rem',
        144: '36rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    // Add more plugins as needed
  ],
  darkMode: 'class', // or 'media' based on your preference
}
