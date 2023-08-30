import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      tomato: "hsl(4, 100%, 67%)",
      orange: "hsl(13, 100%, 62%)",
      pink: "hsl(347, 100%, 66%)",
      darkslategrey: "hsl(234, 29%, 20%)",
      charcoalgrey: "hsl(235, 18%, 26%)",
      grey: "hsl(231, 7%, 60%)",
      white: "hsl(0, 0%, 100%)",
      transparent: "transparent;"
    },
    fontFamily: {
      ubuntu: ["Ubuntu", "sans-serif"],
      ubuntuBold: ["Ubuntu Bold", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
export default config;
