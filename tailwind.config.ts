import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4E6A9B",
        secondary: "#6884B4",
        warning: "#DC8B15",
        "c-white": "#F0F3F7",
      },
    },
  },
  plugins: [],
};
export default config;
