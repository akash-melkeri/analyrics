/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix:'tw-',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'move-random': 'move-random 128s linear infinite',
      },
      keyframes: {
        'move-random': {
          '0%, 100%': { 'background-position':'left' },
          '25%': { 'background-position':'top' },
          '50%': { 'background-position':'right' },
          '75%': { 'background-position':'bottom' },
          // '12.5%,37.5%,62.5%,87.5%': { 'background-position':'center' },
        }
      },
    },
  },
  plugins: [],
}
