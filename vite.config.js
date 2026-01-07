const { defineConfig } = require('vite')
const react = require('@vitejs/plugin-react')
const path = require('path')

module.exports = defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Use the light build of lottie-web which avoids eval usage
      'lottie-web': path.resolve(__dirname, 'node_modules/lottie-web/build/player/lottie_light.js')
    }
  },
  build: {
    outDir: 'dist',
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('framer-motion')) return 'vendor_framer-motion';
            if (id.includes('lottie-web') || id.includes('lottie-react')) return 'vendor_lottie';
            if (id.includes('react-twitter-embed')) return 'vendor_twitter';
            if (id.includes('react-dom') || id.includes('react')) return 'vendor_react';
            return 'vendor';
          }
        }
      }
    }
  }
})
