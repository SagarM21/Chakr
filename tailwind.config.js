/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    colors: {
      black: {
        100: "rgba(255, 255, 255, 1)",
        12: "rgba(26, 24, 30, 1)",
        50: "rgba(128, 128, 128, 1)",
        60: "rgba(153, 153, 153, 1)",
        90: "rgba(230, 230, 230, 1)",
        95: "rgba(242, 242, 242, 1)",
        98: "rgba(250, 250, 250, 1)",
        30: "rgba(77, 77, 77, 1)",
        85: "rgba(217, 217, 217, 1)",
        1: "rgba(19, 19, 19, 1)",
      },
      blue: {
        hover: "rgba(14, 79, 130, 1)",
        primary: "rgba(20, 110, 180, 1)",
      },
      orange: {
        primary: "rgba(115, 74, 0, 1)",
        secondary: "rgba(255, 247, 232, 1)",
        darkOrange: "rgba(115, 74, 0, 1)",
        lightOrange: "rgba(255, 165, 0, 1)",
        lightestOrange: "rgba(255, 247, 232, 1)",
        midOrange: "rgba(255, 205, 113, 1)",
      },
      gray: {
        darkGray: "rgba(69, 69, 69, 1)",
      },
      navbar: {
        secondary: "rgba(30, 38, 64, 1)",
        100: "rgba(255, 255, 255, 0.1)",
        200: "rgba(53, 60, 83, 1)",
        white: "#fff",
        yellow: "rgba(255, 205, 113, 1)",
      },
    },
    boxShadow: {
      sm: "0px 2px 6px 0px rgba(26, 24, 30, 0.04)",
    },
    extend: {
      screens: {
        tablet: "960px",
        desktop: "1248px",
      },
      backgroundImage: (theme) => ({
        "orange-gradient":
          "linear-gradient(90deg, #FFCD71 -2.57%, rgba(255, 205, 113, 0) 112.5%)",
      }),
    },
  },
  plugins: [],
};
