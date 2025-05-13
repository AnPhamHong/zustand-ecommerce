import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "node:path";
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    host: "192.168.1.20",
    port: 3000
  }
});
