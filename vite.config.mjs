//vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";
import pkg from "./package.json" with {type: "json"};

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "my-library",

      fileName: "index",
    },
    rollupOptions: {
      define:{global: "window"},
      external: [ ...Object.keys(pkg.peerDependencies)],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
});
