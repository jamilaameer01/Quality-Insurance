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
    },
  },
  plugins: [],
};