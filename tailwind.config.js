/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "320px",
      // => @media (min-width: 320px)
      sm: "374px",
      // => @media (min-width: 374px)
      md: "768px",
      // => @media (min-width: 768px)

      lg: "1024px",
      // => @media (min-width: 1024px)

      xl: "1280px",
      // => @media (min-width: 1280px)

      "2xl": "1440px",
      // => @media (min-width: 1440px)
    },
    colors: {
      // our website primary color
      primary: "#162D56",
      // our website secondary color
      secondary: "#C49C6C",
      // our website dark color
      dark: "#060608",
      // default white color
      white: "#FFFFFF",
      // our web green light color
      lightGray: "#737272",
      // our website extra light gray
      extraLightGray: "#E9E9E9",
    },
    extend: {},
  },
  plugins: [],
};
