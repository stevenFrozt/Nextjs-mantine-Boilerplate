import tailwindPresetMantine from "tailwind-preset-mantine";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  presets: [tailwindPresetMantine()],
  plugins: [],
  theme: {
    extend: {
      colors: {
        primary: "#3ea53c;",
      },
    },
  },
};
export default config;
