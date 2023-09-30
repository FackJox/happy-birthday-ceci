/** @type {import('tailwindcss').Config} */
export default {
  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
theme: {
  extend: {
    fontFamily: {
      'inter-medium': ['Inter UI Medium', 'sans-serif'],
      'vogue': ['Vogue', 'serif'],
      'coolvetica': ['coolvetica', 'sans-serif']
    }
  },
},
plugins: [],
}
