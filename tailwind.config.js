module.exports = {
  mode : "jit",
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
    container: {
      center: true
    },
    colors: {
      current: 'currentColor',
      transperent: 'transperent',
        'google-yellow' :'#FBBC04',
        'google-red' : '#EA4335',
        'google-blue': '#4285F4',
        'google-green': '#34A853',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
  ],
}
