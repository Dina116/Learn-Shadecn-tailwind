import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { viteCommonjs } from "@originjs/vite-plugin-commonjs";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), viteCommonjs()],
  resolve: {
    preserveSymlinks: true,
    alias: {
      grpc: "grpc-web",
      "grpc-web-client-gen": path.resolve(__dirname, "src/grpc-web-client-gen"),
    },
  },
  optimizeDeps: {
    include: ["google-protobuf", "grpc-web"],
  },

  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});
