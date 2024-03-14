/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      xxs: "320px",
      xs: "380px",
      sm: "428px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    extend: {
      backgroundImage: {
        "hero-section-bg": "url('./assets/hero-section-bg.png')",
      },
    },
  },
  plugins: [],
};
