const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},

    colors: {
      // Build your palette here
      transparent: "transparent",
      current: "currentColor",
      blueGray: colors.blueGray,
      coolGray: colors.coolGray,
      gray: colors.gray,
      trueGray: colors.trueGray,
      warmGray: colors.warmGray,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      violet: colors.violet,
      fuchsia: colors.fuchsia,
      rose: colors.rose,
      red: colors.red,
      blue: colors.blue,
      white: colors.white,
      black: colors.black,
      green: colors.green,
      oishiNaranja: "#FF5B4A",
      oishiNegro: "#07070C",
      oishiGris: "#F1F1F1",
      oishiCeleste: "#BAD9DA",
      oishiRosa: "#F48F91",
      oishiAzul: "#5184A6",
      oishiAzul2: "#4F98C9",
      oishiRojo: "#DA291C",
      oishiVerde: "#68D984",
    },
    boxShadow: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      DEFAULT:
        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      none: "none",
      red: "0 4px 6px -1px rgba(279,13,20, 0.2)",
      redPlus: "0 4px 6px -1px rgba(279,13,20, 0.4)",
      green: "0 4px 6px -1px rgba(25,197,64, 0.2)",
      greenPlus: "0 4px 6px -1px rgba(25,197,64, 0.4)",
      blueGray: "0 10px 15px -3px rgba(70, 103, 143, 0.25)",
      carruselCatering: "5px 8px 15px -10px rgba(0, 0, 0, 0.5)",
      oishiShadow1: "4px 8px 20px -11px rgba(81, 132, 166, 0.6)",
    },
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      display: ["Oswald"],
      body: ['"Open Sans"'],
      monse: ['"Montserrat"'],
      McLaren: ['"McLaren"'],
      NanumGothic: ['"Nanum Gothic"'],
      Andika: ['"Andika New Basic"'],
      Cunia: ['"Cunia"'],
    },
  },
  variants: {
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
