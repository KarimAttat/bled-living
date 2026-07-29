import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { optimizeImages } from './vite-plugins/optimize-images.js'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), optimizeImages()],
})
