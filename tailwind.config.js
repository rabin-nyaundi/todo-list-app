/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        darkBlue: "#005FBC",
        blue: "#0080FF",
        lightBlue: "#41A0FF",
        darkBlack: "#121212",
        black: "#AAAAAA",
        darkGray: "#BBBBBB",
        gray: "#CCCCCC",
        lightGray: "#EEEEEE",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
