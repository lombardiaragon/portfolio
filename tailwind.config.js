/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg:      'var(--bg)',
        bg2:     'var(--bg2)',
        bg3:     'var(--bg3)',
        orange:  'var(--orange)',
        orange2: 'var(--orange2)',
        orange3: 'var(--orange3)',
        blue:    '#5B8DEF',
        blue1:   '#1D68FF',
        navy:    '#023059',
        ink:     '#0C0F1A',
        ink2:    '#3D4F6B',
        paper:   '#F5F2ED',
        paper2:  '#EDEAE4',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
      fontSize: {
        'hero': 'clamp(5rem, 12vw, 9rem)',
        'h2':   'clamp(2rem, 3.5vw, 2.8rem)',
        'h3':   'clamp(2.2rem, 4vw, 3.2rem)',
      },
    },
  },
  plugins: [],
}
