/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#03041c",
        secondary: "#525258",
        theme_color: "#f50963",
        b_gray: "#dadce0",
        f1: "#f1f1f1"
      },
      fontFamily: {
        primary: "'Roboto', sans-serif",
        secondary: "'Inter', sans-serif",
        space: "'Space Grotesk', sans-serif;"
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        xxl: "1400px"
      }

    },
  },
  plugins: [],
}