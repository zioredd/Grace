/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        smd: "915px",
        md: "1060px",
        lg: "1200px",
        lgg: "1450px",
        xl: "1700px",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
      },
      keyframes: {
        spin3: {
          "0%": {
            opacity: 0,
          },
          "5%": {
            opacity: 1,
            transform: "rotate(0deg)",
          },

          "99%": {
            transform: "rotate(7deg)",
            opacity: 1,
          },
          "100%": {
            transform: "rotate(8deg)",
            opacity: 0,
          },
        },
        spin2: {
          "0%": {
            opacity: 0,
          },
          "47%": {
            opacity: 0,
          },
          "50%": {
            opacity: 1,
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(9deg)",
            opacity: 1,
          },
        },
      },
      animation: {
        "bg-spin3": "spin3 10s ease-in-out infinite",
        "bg-spin2": "spin2 7s linear infinite",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
