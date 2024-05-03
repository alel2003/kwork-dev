/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./shared/components/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      roboto: ['Roboto', 'serif'],
      lato: ['Lato', 'serif'],
    },
    colors: {
      'white': '#FFF',
      'green': '#90EC65',
      'pink': '#E149AD',
      'cool': '#b3cde0',
    },
    extend: {},
  },
  plugins: [],
}