import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: './dist',
  },
  base: '/',
  server: {
    proxy: {
      '/api': 'http://localhost:3500', // Proxy API requests to the backend
    }
  },
  define: {
    'process.env.VITE_BASE_URL': JSON.stringify(process.env.VITE_BASE_URL),
  },
})
