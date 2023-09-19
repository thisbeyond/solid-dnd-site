import { PluginOption, defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import WindiCSS from "vite-plugin-windicss";

const fullReloadIfLibraryChanged: PluginOption = {
  handleHotUpdate({ file, server }) {
    if (file.endsWith("solid-dnd/dist/dev.jsx")) {
      server.ws.send({ type: "full-reload" });
    }
  },
} as PluginOption;

export default defineConfig({
  plugins: [solidPlugin(), fullReloadIfLibraryChanged, WindiCSS()],
  build: {
    target: "esnext",
  },
});
