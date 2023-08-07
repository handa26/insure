/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: {
        darkViolet: "hsl(256, 26%, 20%)",
        grayishBlue: "hsl(216, 30%, 68%)",
      },
      neutral: {
        veryDarkViolet: "hsl(270, 9%, 17%)",
        darkGrayishViolet: "hsl(273, 4%, 51%)",
        veryLightGray: "hsl(0, 0%, 98%)",
      },
    },
    fontFamily: {
      dmSerifDisplay: ["DM Serif Display", "serif"],
      karla: ['Karla', "sans-serif"]
    }
  },
  plugins: [],
};
