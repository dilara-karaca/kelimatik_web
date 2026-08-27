import { copyFileSync, existsSync } from "node:fs";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? "/kelimatik_web/" : "/",
  plugins: [
    react(),
    tailwindcss(),
    {
      name: "spa-404",
      closeBundle() {
        if (existsSync("dist/index.html")) {
          copyFileSync("dist/index.html", "dist/404.html");
        }
      },
    },
  ],
});
