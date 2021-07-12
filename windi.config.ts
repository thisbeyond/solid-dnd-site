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
      "text-white font-bold rounded-full p-4 shadow-lg touch-none",
    droppable:
      "flex-1 flex flex-col gap-5 w-3/4 h-1/2 min-h-30 p-6 " +
      "items-center justify-center text-center " +
      "bg-white shadow-inner border border-gray-200 rounded-lg",
    "droppable-accept": "border-blue-200 bg-blue-50",
    "droppable-reject": "border-red-200 bg-red-50",
    sortable:
      "bg-secondary text-white font-bold rounded-lg shadow p-4 min-w-20vw " +
      "whitespace-nowrap cursor-move touch-none",
  },
});
