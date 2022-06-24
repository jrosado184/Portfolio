module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      xr: '414px',

      desktop: '1429px',
    },
    extend: {
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      },
      fontFamily: {
        custom: 'Roboto Slab',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
