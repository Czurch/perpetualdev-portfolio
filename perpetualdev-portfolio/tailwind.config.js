const { blackA, green, mauve, violet } = require("@radix-ui/colors");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ...blackA,
        ...green,
        ...mauve,
        ...violet,
        cta: "#F46036",
        primarybg: "rgba(8, 47, 73, 0.7)",
        secondarybg: "#2a303c",
        primary: "#fbfefd",
        secondary: "#1f2531",
        primaryButton: "#d9b311",
        primaryButtonHover: "#f9c321",
        secondaryButton: "#0b3c5d",
        accent: "#328bc3",
      },
      keyframes: {
        slideDown: {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        slideUp: {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        slideDown: "slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)",
        slideUp: "slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)",
      },
    },
  },
  plugins: [],
};
