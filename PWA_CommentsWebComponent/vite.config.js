const { VitePWA } = require('vite-plugin-pwa')
const {defineConfig} = require('vite');


module.exports = defineConfig({
  plugins: [
    VitePWA({
      strategies: 'injectManifest',
     
      filename: 'sw.js',
      injectManifest:{globPatterns: ['**/*.html']},
      devOptions: {
        enabled: true
      },
     
       
    
    })
  ]
})



