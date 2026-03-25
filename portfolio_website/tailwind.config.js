/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        skin: {
          50: "#fef7f0",
          100: "#fdf0e6",
          200: "#f7e1cc",
          300: "#f1cfab",
          400: "#eab985",
          500: "#e4a85c",
          600: "#d48d3c",
          700: "#b57532",
          800: "#95602a",
          900: "#7d5024",
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".dark-only": {
          display: "none",
        },
        ".dark .dark-only": {
          display: "block",
        },
      });
    },
  ],
};
