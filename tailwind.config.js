module.exports = {
  purge: [
    './pages/**/*.tsx', './components/**/*.tsx'
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      'Patrick': ['Patrick Hand',],
    },
    boxShadow: {
      'custom-light': '5px 5px 35px #14160c',
      'custom-dark': '5px 5px 45px #f5f6f8 , -5px -5px 40px #f5f6f8',
    },
    extend: {
      colors: {
        green: {
          DEFAULT: 'blue'//'#00f260',
        },
        dark: {
          DEFAULT: '#010101',
          100: '#0a0b0e',
          200: '#16181d',
          300: '#16181d',
          500: '#0f1115',
          700: '#202125',
        }
      }
    },
  },
  variants: {
    extend: {
      boxShadow: ['dark']
    },
  },
  plugins: [],
}
