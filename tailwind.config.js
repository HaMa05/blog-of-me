/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        header: ['Source Sans Pro'],
        sans: ['Source Sans Pro']
        // header: ['Source Sans Pro', ...defaultTheme.fontFamily.sans],
        // sans: ['Source Sans Pro', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
    // ...
  ]
};

