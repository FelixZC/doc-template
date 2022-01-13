const { path } = require("@vuepress/utils");
let router = require("./router.js");
module.exports = {
  title: "电子档案系统",
  description: "电子模板，持续更新ing...",
  bundler: "@vuepress/vite",
  bundlerConfig: {
    // vite打包工具的选项
  },
  open: true,
  themeConfig: {
    logo: "/assets/img/logo.png",
    navbar: router.navbar,
    sidebar: router.sidebar,
    contributors: "pzc",
  },
  port: 8844,
  markdown: {
    importCode: {
      // str.replace(/^@src/, path.resolve(__dirname, 'path/to/src')),
    },
  },
};
