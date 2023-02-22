/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", ],
  theme: {
    extend: {
      colors: {
        purple : '#6425FE',
        purpleSecond: '#B79BFF',
        green: '#A6F7E2',
        greenSecond: '#C7FFA5',
        yellow: '#FFE5A5',
        blue: '#9EC6FA',
        pink: '#F8A5FF',
        black: '#2C2C2C',
        gray: '#84828A',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}
