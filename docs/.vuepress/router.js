module.exports = {
  navbar: [
    { text: "首页", link: "/" },
    { text: "Bing一下，你就知道", link: "https://cn.bing.com/", target: "_blank", rel: "" },
  ],
  sidebar: [
    {
      text: "返回码",
      link: "/http-code/index.md",
    },
    {
      text: "记录",
      children: [
        {
          text: "改动",
          link: "/record/modify-record.md",
        },
        {
          text: "部署",
          link: "/record/deploy-record.md",
        },
      ],
    },
    {
      text: "接口",
      children: [
        {
          text: "接口示例",
          link: "/interface/template.md",
        },
      ],
    },
    {
      text: "数据字典",
      children: [
        {
          text: "字典模板",
          link: "/data-dictionary/template.md",
        },
        {
          text: "global全局变量说明",
          link: "/data-dictionary/global.md",
        },
      ],
    },
    {
      text: "备忘",
      children: [
        {
          text: "表情库",
          link: "/memorandum/icon-font.md",
        },
        {
          text: "Markdown语法",
          link: "/memorandum/markdown-syntax.md",
        },
        {
          text: "Markdown语法Vue版",
          link: "/memorandum/markdown-syntax-vue.md",
        },
        {
          text: "前端知识体系总结",
          link: "/memorandum/frontend.md",
        },
        {
          text: "收藏夹",
          link: "/memorandum/bookmarks.md",
        },
        {
          text: "每日n句",
          link: "/memorandum/sentence.md",
        },
      ],
    },
    {
      text: "测试",
      children: [
        {
          text: "组件测试",
          link: "/test/markdown-and-vue-sfc.md",
        },
      ],
    },
  ],
};
