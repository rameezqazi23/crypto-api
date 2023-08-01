/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundColor: {
        primary: 'var(--color-bg-primary)',
        secondary: 'var(--color-bg-secondary)',
        button: 'var(--color-bg-button)',
      },

      textColor: {
        accent: 'var(--color-text-accent)',
        primary: 'var(--color-bg-primary)',
        secondary: 'var(--color-bg-secondary)',
        btnText: 'var(--color-bg-button)',


      }
    },
  },
  plugins: [],
}

