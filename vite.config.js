import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    devSourcemap: true
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom']
  },
  server: {
    hmr: {
      overlay: false
    }
  },
  resolve: {
    alias: {
      '/images': path.resolve(__dirname, './public/images')
    }
  }
})
