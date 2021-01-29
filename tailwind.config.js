module.exports = {
  purge: {
    enabled:true ,
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