/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ocean: "#0ea5e9",
        sand: "#f5f5dc",
        deep: "#0c4a6e",
      },
      fontFamily: {
        display: ["Sora", "sans-serif"],
        body: ["Manrope", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px rgba(2, 132, 199, 0.15)",
      },
      backgroundImage: {
        noise:
          "radial-gradient(circle at 1px 1px, rgba(2,132,199,0.12) 1px, transparent 0)",
      },
    },
  },
  plugins: [],
};