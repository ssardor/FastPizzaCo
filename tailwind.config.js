/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Robo: "Roboto Mono, monospace , sans-serif",
      },
      fontSize: {
        "10xl": "150px",
      },

      backgroundColor: {
        pizza: "#FACC15",
      },
    },
  },
  plugins: [],
};
