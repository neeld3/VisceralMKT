/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-color': '#FF3900',
        'custom-color-dark': '#E33200',
        'custom-color-light': '#FF4D14',
      },
    },
  },
  plugins: [],
}
