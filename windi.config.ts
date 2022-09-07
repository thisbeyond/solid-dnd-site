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
        tertiary: "#aabddf",
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
        ".rounded-left-full": {
          "border-radius": "9999px 0px 0px 9999px",
        },
        ".rounded-right-full": {
          "border-radius": "0px 9999px 9999px 0px",
        },
      });
    }),
  ],
  shortcuts: {
    draggable:
      "min-w-max text-sm sm:text-base text-center whitespace-nowrap " +
      "cursor-move bg-secondary text-white font-bold rounded-full p-4 " +
      "shadow-lg touch-none",
    "draggable-container": "flex items-center shadow-lg rounded-full",
    handle:
      "w-max text-sm sm:text-base whitespace-nowrap cursor-move bg-tertiary " +
      "text-white font-bold rounded-right-full py-4 pr-4 pl-2 touch-none",
    content:
      "w-max text-sm sm:text-base whitespace-nowrap bg-secondary " +
      "text-white font-bold rounded-left-full py-4 pl-4 pr-2 touch-none",
    droppable:
      "flex-1 flex flex-col gap-5 w-3/4 h-1/2 min-h-30 p-6 " +
      "items-center justify-center text-center " +
      "bg-white shadow-inner border border-gray-200 rounded-lg",
    "droppable-accept": "border-blue-200 bg-blue-50",
    "droppable-reject": "border-red-200 bg-red-50",
    sortable:
      "bg-secondary text-white font-bold rounded-lg shadow p-4 " +
      "whitespace-normal cursor-move touch-none text-center",
    columns: "grid grid-flow-col auto-cols-fr gap-4",
    column:
      "grid grid-flow-row auto-cols-fr auto-rows-min " +
      "gap-4 border border-tertiary p-3",
    "column-header":
      "bg-white border border-tertiary border-b-0 p-3 text-center font-bold " +
      "cursor-move",
  },
});
