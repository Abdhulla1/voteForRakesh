import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
// https://vite.dev/config/
export default defineConfig({
   server: {
    host: "::",
    port: 8080,
    // allowedHosts: ["3ca9a6b8cc8b.ngrok-free.app", "nonsanguinely-climatological-annemarie.ngrok-free.dev", "disjoinable-jaliyah-unspasmodical.ngrok-free.dev", "localhost"],
  },
  plugins: [react(), tailwindcss()],
   resolve: {
      alias: {
      "@": path.resolve(__dirname, "./src"),
          },
    },
})
