import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "https://bmw-backend-l85a.onrender.com/", // Your Render backend URL
        changeOrigin: true,
        secure: true, // Ensure HTTPS is used
      },
    },
  },
  plugins: [react()],
});
