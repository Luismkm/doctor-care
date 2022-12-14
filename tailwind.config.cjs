/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html',
    './src/**/*.{html,js,ts,tsx}', './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    colors: {
      transparent: 'transparent',

      black: '#000',
      white: {
        100: '#FFF',
      },

      green: {
        900: '#00453A',
        700: '#00856F',
        400: '#DCE9E2',
        200: '#F7F9F9',
        100: '#FFFAF1',
      },
      gray: {
        900: '#212529',
        700: '#495057',
      },

    },
    extend: {
      fontFamily: {
        sans: ['DM sans', 'sans-serif'],
      },
    },
  },
  plugins: [require('tw-elements/dist/plugin')],
};
