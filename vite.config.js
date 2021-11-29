import { defineConfig } from 'vite'

import liveReload from 'vite-plugin-live-reload'


import vue from '@vitejs/plugin-vue'
import ViteFonts from 'vite-plugin-fonts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ViteFonts({
      google: {
        families: ['Fira Sans']
      }
    }),
    liveReload('public/odas/**/oda.json', {alwaysReload: false})
  ],
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: `
          @import "./src/App.sass"
          @import "./src/Utilities.sass"
        `
      }
    }
  }
})
