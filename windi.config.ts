import { defineConfig } from "vite-plugin-windicss";

export default defineConfig({
  darkMode: false,
  theme: {
    fontFamily: {
      sans: ["Poppins", "Inter", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#2c4f7c",
        secondary: "#4f88c6",
      },
      boxShadow: {
        "inner-lg": "inset 0 0 30px 20px rgba(0, 0, 0, 0.2)",
      },
      backgroundImage: {
        gradient: "linear-gradient(90deg, #2c4f7c 0%, #4f88c6 100%)",
      },
    },
  },
});
