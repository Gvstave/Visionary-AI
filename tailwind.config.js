/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#6764f2",
        secondary: "#ff6b00", // Safety Orange
        backgroundLight: "#f6f6f8",
        backgroundDark: "#111022",
        surfaceDark: "#1c1c2e",
      },
      fontFamily: {
        display: ["Lexend", "sans-serif"]
      }
    },
  },
  plugins: [],
};