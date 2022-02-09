const { description } = require('../../package.json')
const PLVariables = require('./pl')
const path = require('path');

module.exports = {
  lang: 'en-US',
  title: 'PL 21/22',
  description: description,
  base: "/pl-vuepress-next/",
  head: [['link', { rel: 'icon', href: '/favicon-32x32.png' }]],
  //bundler:  '@vuepress/bundler-vite',
  bundler: '@vuepress/bundler-webpack', // https://v2.vuepress.vuejs.org/reference/bundler/webpack.html#options
  // options for webpack bundler
  /*
  bundlerConfig: {
    // see below
  },
  */
  // port: 4000,
  //theme: '@vuepress/theme-default',
  
  theme: path.resolve(__dirname, './theme'),

  themeConfig: {
    logo: '/favicon-32x32.png',
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    //sidebar: 'auto',
    // displayAllHeaders: true, // Default: false
    navbar: PLVariables.nav, 
    sidebar: {
      '/clases/': [
        {
          text: 'VuePress Reference',
          collapsible: true,
          children: ['/reference/cli.md', '/reference/config.md'],
        },
        {
          text: 'Bundlers Reference',
          collapsible: true,
          children: ['/reference/bundler/vite.md', '/reference/bundler/webpack.md'],
        },
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [ 
    [
        '@vuepress/plugin-search',
        {
          locales: {
            '/': {
              placeholder: 'Search',
            },
            '/zh/': {
              placeholder: '搜索',
            },
          },
        },
      ],
      [
        '@vuepress/register-components',
        {
          componentsDir: path.resolve(__dirname, './components'),
        },
      ],
  ],
  extendMarkdown: (md) => { }
}
