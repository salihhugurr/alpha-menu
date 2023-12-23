/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        bg: "#FFFFFF",
        text: "#0A0A0A",
        secondary: "#AD8D41",
      },
    },
    fontFamily:{
      base: ["Lobster", "cursive"],
      alt: ["Cormorant Upright", "serif"]
    }
  },
  plugins: [],
};
