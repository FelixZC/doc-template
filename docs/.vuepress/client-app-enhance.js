import { defineClientAppEnhance } from '@vuepress/client'
import iconFont from './components/font/icon-font.vue'
export default defineClientAppEnhance(({ app }) => {
  app.component('icon-font', iconFont)
})
