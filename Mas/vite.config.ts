import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { viteCommonjs } from "@originjs/vite-plugin-commonjs";
import alias from "@rollup/plugin-alias";
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    viteCommonjs(),
    alias({
      entries: [{ find: "@", replacement: path.resolve(__dirname, "./src") }],
    }),
  ],

  optimizeDeps: {
    include: ["google-protobuf", "grpc-web"],
  },
  resolve: {
    preserveSymlinks: true,
    alias: {
      grpc: "grpc-web",
    },
  },

  build: {
    sourcemap: false,
    minify: false,
    commonjsOptions: {
      transformMixedEsModules: true,
      include: [/node_modules/, /src\/domain\/entities\/_gen/],
    },
  },
  define: {
    global: "globalThis",
  },
});
