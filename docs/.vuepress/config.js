const { description } = require('../../package.json')
const PLVariables = require('./pl')

module.exports = {
  lang: 'en-US',
  title: 'PL 21/22',
  description: description,
  base: "", // "/vuepress-pl-prototype/",
  theme: '@vuepress/theme-default',

  themeConfig: {
    logo: '/favicon-32x32.png',
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    sidebar: {
      "/temas/": "auto",
      "/practicas/": "auto",
      "/clases/": "auto"
    },
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
  ],
  extendMarkdown: (md) => { }
}
