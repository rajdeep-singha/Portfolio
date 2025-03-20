import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import compression from 'vite-plugin-compression';
export default defineConfig({
  plugins: [react(), compression()],
  base: "/Portfolio",
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // Separate dependencies from app code
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Increase the chunk size limit if needed
  },
});
