/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins']
      },
      colors: {
        // Custom theme colors
        'theme-bg': 'var(--theme-bg)',
        'theme-text': 'var(--theme-text)',
        'theme-text-secondary': 'var(--theme-text-secondary)',
        'theme-border': 'var(--theme-border)',
        'theme-card': 'var(--theme-card)',
      }
    }
  },
  plugins: [],
}