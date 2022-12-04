module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xr: "414px",

      desktop: "1429px",

      md: "768px",

      lg: "1245px",
    },
    extend: {
      animation: {
        "spin-slow": "spin 10s linear infinite",
      },
      backgroundImage: {
        nailsHomePage: "url('/src/assets/projects/nails homepage.png')",
      },
      fontFamily: {
        custom: "Roboto Slab",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
