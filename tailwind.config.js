/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif'
      },
      colors: {
        green: {
          30: '#E5FBEB',
          50: '#4CC38A',
          100: '#3CB179',
          200: '#30A46C',
          300: '#236E4A',
          400: '#1B543A',
          500: '#164430',
          700: '#133929',
          600: '#113123',
          700: '#0F291E',
          800: '#0C1F17',
          900: '#0D1912',
        },
        blue: {
          500: '#81D8F7  ',
        },
        orange: {
          500: '#FBA94C',
        },
        red: {
          500: '#F75A68',
        },
        gray: {
          100: '#E1E1E6',
          200: '#C4C4CC',
          300: '#8D8D99',
          500: '#323238',
          600: '#29292E',
          700: '#121214',
          900: '#09090A',
        }
      },
    },
  },
  plugins: [],
}
