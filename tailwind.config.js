module.exports = {
  purge: {
    enabled:false ,
    content:['./public/*.html',
    './public/*.php',
    './src/styles.css'
    ]
  },
    
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: ['hover', 'focus'],
      // ring:['hover'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}