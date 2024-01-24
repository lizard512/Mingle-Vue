import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/mingle-vue/',
  plugins: [
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      // asset
      '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
      '@fonts': fileURLToPath(new URL('./src/assets/fonts', import.meta.url)),
      '@images': fileURLToPath(new URL('./src/assets/images', import.meta.url)),
      '@libs': fileURLToPath(new URL('./src/assets/libs', import.meta.url)),
      '@styles': fileURLToPath(new URL('./src/assets/styles', import.meta.url)),
      // components
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      // router
      '@router': fileURLToPath(new URL('./src/router', import.meta.url)),
      // store
      '@store': fileURLToPath(new URL('./src/store', import.meta.url)),
      // views
      '@views': fileURLToPath(new URL('./src/views', import.meta.url)),
    }
  },
  server: {
    port: 7890
  }
})