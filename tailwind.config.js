/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        tight: '-0.015em',
        tighter: '-0.03em',
      },
      lineHeight: {
        tight: '1.15',
        tighter: '1.05',
      },
      animation: {
        aurora: 'aurora 60s linear infinite',
        'rotate': 'rotate 8s linear infinite',
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: '50% 50%, 50% 50%',
          },
          to: {
            backgroundPosition: '350% 50%, 350% 50%',
          },
        },
        rotate: {
          '0%': { transform: 'translate(-50%, -50%) rotate(0deg)' },
          '100%': { transform: 'translate(-50%, -50%) rotate(360deg)' },
        },
      },
      colors: {
        // Custom violet scale using CSS variables
        violet: {
          1: 'var(--violet-1)',
          2: 'var(--violet-2)',
          3: 'var(--violet-3)',
          4: 'var(--violet-4)',
          5: 'var(--violet-5)',
          6: 'var(--violet-6)',
          7: 'var(--violet-7)',
          8: 'var(--violet-8)',
          9: 'var(--violet-9)',
          10: 'var(--violet-10)',
          11: 'var(--violet-11)',
          12: 'var(--violet-12)',
          DEFAULT: 'var(--violet-9)',
        },
        // Violet alpha colors
        'violet-a': {
          1: 'var(--violet-a1)',
          2: 'var(--violet-a2)',
          3: 'var(--violet-a3)',
          4: 'var(--violet-a4)',
          5: 'var(--violet-a5)',
          6: 'var(--violet-a6)',
          7: 'var(--violet-a7)',
          8: 'var(--violet-a8)',
          9: 'var(--violet-a9)',
          10: 'var(--violet-a10)',
          11: 'var(--violet-a11)',
          12: 'var(--violet-a12)',
        },
        // Custom gray scale using CSS variables
        gray: {
          1: 'var(--gray-1)',
          2: 'var(--gray-2)',
          3: 'var(--gray-3)',
          4: 'var(--gray-4)',
          5: 'var(--gray-5)',
          6: 'var(--gray-6)',
          7: 'var(--gray-7)',
          8: 'var(--gray-8)',
          9: 'var(--gray-9)',
          10: 'var(--gray-10)',
          11: 'var(--gray-11)',
          12: 'var(--gray-12)',
          DEFAULT: 'var(--gray-9)',
        },
        // Gray alpha colors
        'gray-a': {
          1: 'var(--gray-a1)',
          2: 'var(--gray-a2)',
          3: 'var(--gray-a3)',
          4: 'var(--gray-a4)',
          5: 'var(--gray-a5)',
          6: 'var(--gray-a6)',
          7: 'var(--gray-a7)',
          8: 'var(--gray-a8)',
          9: 'var(--gray-a9)',
          10: 'var(--gray-a10)',
          11: 'var(--gray-a11)',
          12: 'var(--gray-a12)',
        },
      },
      backgroundColor: {
        'violet-surface': 'var(--violet-surface)',
        'gray-surface': 'var(--gray-surface)',
      },
      textColor: {
        'violet-contrast': 'var(--violet-contrast)',
        'gray-contrast': 'var(--gray-contrast)',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '0.875rem',
        '3xl': '1rem',
      },
    },
  },
  plugins: [],
} 