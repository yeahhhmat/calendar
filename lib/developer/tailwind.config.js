/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./lib/**/*.{jsx,js,ts,tsx}", "./pages/**/*.{jsx,js,ts,tsx}" ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")]
}
