/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000",
        lightsteelblue: "rgba(190, 216, 255, 0.7)",
      },
      spacing: {},
      fontFamily: {
        montserrat: "Montserrat",
        "playfair-display": "'Playfair Display'",
      },
    },
    fontSize: {
      "45xl": "4rem",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
      mq350small: {
        raw: "screen and (max-width: 350px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
