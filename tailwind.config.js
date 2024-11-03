/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        spinLogo: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(5deg) scale(1.1)', },
        },
        reverseSpinLogo: {
          '0%': { transform: 'rotate(5deg) scale(1.1)' },
          '100%': { transform: 'rotate(0deg)' }
        }
      },
      animation: {
        'spin-logo': 'spinLogo 0.5s forwards', // Customize the duration as needed
        'reverse-spin-logo': 'reverseSpinLogo 0.5 forwards' // not being used for now
      },
    },
  },
  plugins: [],
}

