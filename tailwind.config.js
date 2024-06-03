/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-color': '#FF3900',
        'hover-color': '#E33200',
        'click-color': '#CC2E00',
      },
    },
  },
  plugins: [],
}
