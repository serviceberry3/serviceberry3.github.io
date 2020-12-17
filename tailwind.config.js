module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['responsive', 'hover', 'focus', 'active'],
      textColor: ['responsive', 'hover', 'focus', 'active'],
    
      translate: ['responsive', 'hover', 'focus'],
      transform: ['responsive', 'hover', 'focus'],
      transformOrigin: ['responsive', 'hover', 'focus'],
      transitionDelay: ['responsive', 'hover', 'focus'],
      transitionDuration: ['responsive', 'hover', 'focus'],
      transitionProperty: ['responsive', 'hover', 'focus'],
      transitionTimingFunction: ['responsive', 'hover', 'focus'],
      scale: ['responsive', 'hover', 'focus', 'active'],
      //transition: ['responsive', 'hover', 'focus', 'active'],
    }
  },
  plugins: [],
}
