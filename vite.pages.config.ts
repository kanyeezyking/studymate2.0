import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Client-only SPA of the same StudyMate React app, for GitHub Pages.
// Does not replace the TanStack Start preview on :8080.
export default defineConfig({
  root: path.resolve(import.meta.dirname, "pages-spa"),
  base: "/studymate2.0/",
  publicDir: path.resolve(import.meta.dirname, "pages-spa/public"),
  plugins: [tailwindcss(), react()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
    },
  },
  build: {
    outDir: path.resolve(import.meta.dirname, "dist-pages"),
    emptyOutDir: true,
    assetsDir: "assets",
  },
});
