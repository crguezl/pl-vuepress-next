const { description } = require('../../package.json')
const PLVariables = require('./pl')
const path = require('path');

module.exports = {
  lang: 'en-US',
  title: 'PL 21/22',
  description: description,
  base: "/pl-vuepress-next/",
  theme: '@vuepress/theme-default',

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
