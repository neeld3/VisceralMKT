/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-color': '#FF3900',
        'custom-color-dark': '#CC2D00',
        'custom-color-light': '#FF744C',
      },
    },
  },
  plugins: [],
}
