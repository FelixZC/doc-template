//默认配置就是使用ClientAppEnhance.js,大小写不可改
import { defineClientAppEnhance } from '@vuepress/client'
import iconFont from './components/font/icon-font.vue'
export default defineClientAppEnhance(({ app }) => {
  app.component('icon-font', iconFont)
})
