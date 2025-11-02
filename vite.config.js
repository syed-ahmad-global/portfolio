import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor libraries for better caching
          vendor: ['react', 'react-dom'],
          // Separate UI libraries
          ui: ['react-icons', 'react-router-dom', 'react-toastify'],
          // Separate form libraries
          forms: ['formik', 'yup']
        }
      }
    },
    // Enable source maps for production debugging
    sourcemap: true,
    // Optimize chunks
    chunkSizeWarningLimit: 1000,
    // Minify options - use default minifier instead of terser
    minify: 'esbuild'
  },
  // Development server optimizations
  server: {
    port: 3000,
    open: true
  },
  // Preview server optimizations
  preview: {
    port: 4173
  }
})
