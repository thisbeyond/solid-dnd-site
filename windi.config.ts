import { defineConfig } from "vite-plugin-windicss";

export default defineConfig({
  darkMode: false,
  theme: {
    fontFamily: {
      sans: ["Poppins", "Inter", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        gradient: "linear-gradient(90deg, #2c4f7c 0%, #4f88c6 100%)",
      },
    },
  },
});
