
/* eslint-disable */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'xsm': '200px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '800px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1100px',
      // => @media (min-width: 1100px) { ... }
      '2xl': '1300px',
      // => @media (min-width: 1300px) { ... }

      '3xl': '1500px',
      // => @media (min-width: 1536px) { ... }
      '4xl': '1700px',
      // => @media (min-width: 1700px) { ... }
      '5xl': '1920px',
      // => @media (min-width: 1920]px) { ... }
      '6xl': '2560px',
      // => @media (min-width: 2560px) { ... }
    
    },
    extend: {
      fontFamily: {
        sans: ["InterVariable", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#0ea5e9",
        secondary: "#FC566F",
        // neutral: colors.gray,
        neutral: "#222",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
    require("tailwindcss-radix")(),
    require("tailwind-gradient-mask-image")
  ],
};
