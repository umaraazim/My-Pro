import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite configuration
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Run frontend on port 3000
    proxy: {
      // Proxy API requests to backend server
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      }
    }
  }
})
