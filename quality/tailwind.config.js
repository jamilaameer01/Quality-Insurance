/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        pattern: "url('HOME-3 1.svg')",
        patterntwo: "url('Mask group.svg')",
      },
      boxShadow: {
        "custom-6": "0px -5.84px 66.73px 0px #00000012",
      },
      screens: {
        // new
        xtab: { min: "991px", max: "1199px" },
        tab: { min: "768px", max: "990px" },
        mob: { min: "481px", max: "768px" },
        xs: { min: "320px", max: "480px" },
      },
      animation: {
        ["infinite-slider"]: "infiniteSlider 20s linear infinite",

      },
      keyframes: {
        infiniteSlider: {
          "0%": { transform: "translateX(0)" },
          "100%": {
            transform: "translateX(calc(-250px * 15))",
          },
        },
      },
      
    },
  },
  plugins: [],
};