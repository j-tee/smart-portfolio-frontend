import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// https://vite.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: ['problematic-package-name'] // Add the package causing issues
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true, // Enable mixed ES/CJS transformation
      include: [/node_modules/] // Process these files
    }
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
