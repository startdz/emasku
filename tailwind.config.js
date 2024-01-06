/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      backgroundImage: {
        'hero-section': "url('/back.png')",
        'background-section': "url('./src/assets/Rectangle 29 (1).png')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
    },
    fontFamily: {
      display: ['Oswald'],
      body: ['"Open Sans"'],
      figma: ['Montserrat', 'sans-serif'],
      sans: ['Helvetica', 'Arial', 'sans-serif'],
    },
  },
  plugins: [require('tailwindcss-animate')],
};
