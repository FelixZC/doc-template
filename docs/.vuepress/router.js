module.exports = {
  navbar: [
    {
      link: '/',
      text: '首页'
    },
    {
      link: 'https://www.baidu.com/',
      rel: '',
      target: '_blank',
      text: '百度'
    },
    {
      link: 'https://cn.bing.com/',
      rel: '',
      target: '_blank',
      text: '必应'
    },
    {
      link: 'https://www.tiangong.cn/',
      rel: '',
      target: '_blank',
      text: '天工AI'
    },
    {
      link: 'https://tongyi.aliyun.com/qianwen/',
      rel: '',
      target: '_blank',
      text: '通义千问'
    },
    {
      link: 'https://kimi.moonshot.cn/',
      rel: '',
      target: '_blank',
      text: 'KIMI'
    }
  ],
  sidebar: [
    {
      link: '/http-code/index.md',
      text: '返回码'
    },
    {
      children: [
        {
          link: '/record/modify-record.md',
          text: '改动'
        },
        {
          link: '/record/deploy-record.md',
          text: '部署'
        }
      ],
      text: '记录'
    },
    {
      children: [
        {
          link: '/interface/template.md',
          text: '接口示例'
        }
      ],
      text: '接口'
    },
    {
      children: [
        {
          link: '/data-dictionary/template.md',
          text: '字典模板'
        },
        {
          link: '/data-dictionary/global.md',
          text: 'global全局变量说明'
        }
      ],
      text: '数据字典'
    },
    {
      children: [
        {
          link: '/memorandum/icon-font.md',
          text: '表情库'
        },
        {
          link: '/memorandum/markdown-syntax.md',
          text: 'Markdown语法'
        },
        {
          link: '/memorandum/markdown-syntax-vue.md',
          text: 'Markdown语法Vue版'
        }
      ],
      text: '备忘'
    },
    {
      children: [
        {
          link: '/test/markdown-and-vue-sfc.md',
          text: '组件测试'
        }
      ],
      text: '测试'
    }
  ]
}
