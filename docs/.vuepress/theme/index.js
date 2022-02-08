const { path } = require('@vuepress/utils')

module.exports = {
  name: 'vuepress-theme-local',
  extends: '@vuepress/theme-default',
  layouts: {
    '404': path.resolve(__dirname, 'layouts/404.vue'),
  },
}