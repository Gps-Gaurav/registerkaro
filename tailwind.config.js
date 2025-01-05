/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      gradients: {
        'blue': {
          900: '#1e3a8a',
          950: '#172554',
        },
      },
    },
  },
  plugins: [],
};