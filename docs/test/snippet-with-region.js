// #region snippet
function foo() {
  return {
    dest: '../../vuepress',
    head: [
      [
        'link',
        {
          href: '/logo.png',
          rel: 'icon',
        },
      ],
      [
        'link',
        {
          href: '/manifest.json',
          rel: 'manifest',
        },
      ],
      [
        'meta',
        {
          content: '#3eaf7c',
          name: 'theme-color',
        },
      ],
      [
        'meta',
        {
          content: 'yes',
          name: 'apple-mobile-web-app-capable',
        },
      ],
      [
        'meta',
        {
          content: 'black',
          name: 'apple-mobile-web-app-status-bar-style',
        },
      ],
      [
        'link',
        {
          href: '/icons/apple-touch-icon-152x152.png',
          rel: 'apple-touch-icon',
        },
      ],
      [
        'link',
        {
          color: '#3eaf7c',
          href: '/icons/safari-pinned-tab.svg',
          rel: 'mask-icon',
        },
      ],
      [
        'meta',
        {
          content: '/icons/msapplication-icon-144x144.png',
          name: 'msapplication-TileImage',
        },
      ],
      [
        'meta',
        {
          content: '#000000',
          name: 'msapplication-TileColor',
        },
      ],
    ],
    locales: {
      '/': {
        description: 'Vue-powered Static Site Generator',
        lang: 'en-US',
        title: 'VuePress',
      },
      '/zh/': {
        description: 'Vue 驱动的静态网站生成器',
        lang: 'zh-CN',
        title: 'VuePress',
      },
    },
  };
} // #endregion snippet

export default foo;
