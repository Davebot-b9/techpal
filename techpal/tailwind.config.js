// tailwind.config.js
import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./node_modules/@heroui/theme/dist/components/spinner.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2C3E61',
          light: '#24334D',
          dark: '#0D1B33',
        },
        accent: '#FFA800',
        background: '#DAE3FA',
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};