import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import nonBlockingCss from './vite-plugin-nonblocking-css.js'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), nonBlockingCss()],
  build: {
    minify: 'esbuild',
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules/react-dom/')) return 'vendor-react-dom'
          if (id.includes('node_modules/react/')) return 'vendor-react'
          if (id.includes('node_modules/react-router')) return 'vendor-router'
          if (id.includes('node_modules/react-helmet')) return 'vendor-helmet'
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
    target: 'es2020',
    cssCodeSplit: true,
    reportCompressedSize: true,
  },
})
