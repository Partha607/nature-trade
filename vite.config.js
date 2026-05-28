import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Relative base so the built site works from GitHub Pages, a sub-path, or file://
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
  server: { port: 5173, host: true },
})
