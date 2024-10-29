import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      white: {
        50: "#FEFEFE",
        100: "#FBFCFC",
        200: "#F9FAFB",
        300: "#F7F8F9",
        400: "#F5F6F8",
        500: "#F3F4F6",
        600: "#DDDEE0",
        700: "#ADADAF",
        800: "#868687",
        900: "#666667",
      },
      black: {
        50: "#E9EAEB",
        100: "#BABDC1",
        200: "#989DA3",
        300: "#697079",
        400: "#4c545f",
        500: "#1f2937",
        600: "#1c2532",
        700: "#161d27",
        800: "#11171e",
        900: "#0d1117",
      },
      primary: {
        50: "#F9E7EA",
        100: "#EDB3BD",
        200: "#E48F9D",
        300: "#D75C70",
        400: "#D03C55",
        500: "#C40B2A",
        600: "#B20A26",
        700: "#8B081E",
        800: "#6C0617",
        900: "#520512",
      },
      secondary: {
        50: "#E8F2F3",
        100: "#B9D5DA",
        200: "#97C1C8",
        300: "#68A5AF",
        400: "#4A94A0",
        500: "#1D7988",
        600: "#1A6E7C",
        700: "#155661",
        800: "#10434B",
        900: "#0C3339",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Roboto Condensed Variable", ...defaultTheme.fontFamily.sans],
      },
      lineHeight: {
        sm: "16px",
        base: "19px",
        xl: "23px",
        "5xl": "47px",
      },
      screens: {
        xs: "440px",
      },
    },
  },
  plugins: [],
};
