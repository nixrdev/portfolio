import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import process from "node:process";
import path from "node:path";

const plugins = [react()];

if (process.env.ANALYZE) {
  plugins.push(visualizer({ open: true }));
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins,
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
  base: "/",
  build: {
    chunkSizeWarningLimit: 400,
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ["console.info", "console.debug"],
        passes: 2,
      },
      format: { comments: false },
    },
    target: "es2020",
    cssMinify: true,
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/react") || id.includes("node_modules/react-router")) return "vendor";
          if (id.includes("node_modules/framer-motion")) return "motion";
          if (id.includes("node_modules/react-icons") || id.includes("node_modules/lucide-react")) return "icons";
        },
      },
    },
    reportCompressedSize: true,
  },
  optimizeDeps: {
    include: ["react", "react-dom", "framer-motion"],
  },
});
