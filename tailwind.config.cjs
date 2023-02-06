/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      colors: {
        greenbtn: '#13ce22',
        aColor: '#FBB448',
      },
      backgroundImage: {
        header: "url('./src/assets/background-header.jpg')"
      }
    },
    fontFamily: {
      'montserrat': ['Montserrat'],
      'opensans': ['Open Sans'],
      'roboto': ['Roboto'],
      'poppins': ['Poppins']
    }
  },
  plugins: [],
}
