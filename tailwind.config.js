/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily:{
        'inter' : 'Inter',
        'asap' : 'Asap Condensed',
        'caveat' : 'Caveat',
        'poppins' : 'Poppins',
      },
      colors: {
        'dasar': '#294263',
        'biru': '#203271',
        'ijo_tumbuh' :'#2a9d8f',
      },
      backgroundImage: {
        'gradient': 'linear-gradient(90deg, #F8719D 0%, #FEF08A 100%)',
      },
      transformOrigin:{
        'flip-x': 'scaleX(-1)'
      },
    },
  },
  plugins: [],
}

