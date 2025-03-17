/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E50914", // Netflix Red
        dark: "#141414", // Netflix Dark Background
        light: "#F5F5F1", // Light Text
        grayish: "#808080", // Muted Text
        borderGray: "#222222", // Border for sections
      },
      fontFamily: {
        sans: [
          "Montserrat",
          "sans-serif",
          "Bebas Neue",
          "Helvetica",
          "Arial",
          "sans-serif",
          "mono",
        ],
        montserrat: "Montserrat",
        primary: "Bebas Neue",
      },
      screens: {
        // xs: "480px",
        // sm: "640px",
        // md: "768px",
        // lg: "1024px",
        // xl: "1280px",
        // "2xl": "1536px",
      },
      boxShadow: {
        glow: "0 4px 20px rgba(229, 9, 20, 0.5)", // Red glow effect
      },
      spacing: {
        88: "22rem", // Custom spacing for hero sections
        120: "30rem",
      },
    },
  },
  plugins: [],
};
