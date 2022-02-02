module.exports = {
  content: [
    './docs/*.html',
    './src/**/*.{html,js}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      height: () => ({
        'screen/2': '50vh',
      }),
      backgroundImage: {
        sanFrancisco: "url('../img/sanFrancisco.jpg')",
			  sanFranciscoDesktop: "url('../img/sanFranciscoDesktop.jpg')",
			  yosemite: "url('../img/yosemite.jpg')",
			  LA: "url('../img/LA.jpg')",
			  seattle: "url('../img/seattle.jpg')",
			  new_york: "url('../img/new_york.jpg')",
			  norway: "url('../img/norway.jpg')",
			  sydney: "url('../img/sydney.jpg')",
			  miami: "url('../img/miami.jpg')",
			  switzerland: "url('../img/switzerland.jpg')",
			  bali: "url('../img/bali.jpg')",
			  norway: "url('../img/norway.jpg')",
			  chicago: "url('../img/chicago.jpg')",
			  europe: "url('../img/europe.jpg')",
			  iceland: "url('../img/iceland.jpg')",
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        primary: '#CC2D4A',
        secondary: '#8FA206',
        tertiary: '#61AEC9',
      }),
      textColor: {
        primary: '#CC2D4A',
        secondary: '#8FA206',
        tertiary: '#61AEC9',        
      },
      fontFamily: {
        Montserrat: [ 'Montserrat', 'sans-serif' ]
      }
    },
  },
  variants: {
    extend: {
      display: [ 'responsive', 'hover', 'focus' ]
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
