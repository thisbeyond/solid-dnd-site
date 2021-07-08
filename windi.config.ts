import { defineConfig } from "vite-plugin-windicss";
import plugin from "windicss/plugin";

export default defineConfig({
  darkMode: false,
  safelist: ["droppable-active"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      mono: ["Jetbrains Mono", "monospace"],
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
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        ".touch-none": {
          "touch-action": "none",
        },
      });
    }),
  ],
  shortcuts: {
    draggable:
      "w-max text-sm sm:text-base whitespace-nowrap cursor-move bg-secondary " +
      "text-white font-bold rounded-full py-4 px-8 shadow-lg touch-none",
    droppable:
      "flex flex-col items-center justify-center text-center w-3/4 h-1/2 " +
      "min-h-30 bg-white shadow-inner border border-gray-200 rounded-lg gap-5",
    "droppable-active": "border-blue-200 bg-blue-50",
  },
});
