const { path } = require('@vuepress/utils')

let router = require('./router.js')

module.exports = {
  bundler: '@vuepress/vite',
  bundlerConfig: {
    // vite打包工具的选项
  },
  description: '文档模板',
  markdown: {
    importCode: {
      // str.replace(/^@src/, path.resolve(__dirname, 'path/to/src')),
    }
  },
  open: true,
  port: 8844,
  themeConfig: {
    contributors: 'pzc',
    logo: '/assets/img/logo.png',
    navbar: router.navbar,
    sidebar: router.sidebar
  },
  title: '文档模板'
}
