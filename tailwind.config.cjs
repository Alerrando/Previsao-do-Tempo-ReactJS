/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      boxShadow: {
        "mini-modal": "0px 2px 2px rgba(0, 0, 0, 0.5)"
      }
    },
  },
  plugins: [],
}