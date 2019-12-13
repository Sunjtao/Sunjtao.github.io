const glob = require('glob')
const path = require('path')

let components = glob.sync(path.join(__dirname, '../components/*.md'), { dot: true })
const blogContent = glob.sync(path.join(__dirname, '../blog/*.md'), { dot: true })

module.exports = {
  base: '/docs/',
  dest: path.join(__dirname, '../../dist'),
  markdown: {
    extendMarkdown: md => {
      md.use(require('markdown-it-task-lists'))
    }
  },
  title: '搭建系统',
  description: '功能强大、极易操作的可视化页面搭建平台',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '使用', link: '/guide/' },
      { text: '博客', link: '/blog/' },
      { text: '组件', link: '/components/' },
      { text: '开发', link: '/dev/' }
    ],
    lastUpdated: '上次更新',
    sidebar: {
      '/blog/': [
        {
          title: '博客',
          collapsable: false,
          children: ['', 'howToWriteDeclareFile']
        }
      ],
      '/guide/': [
        {
          title: '使用',
          collapsable: false,
          children: ['', 'preparation', 'getting-started', 'protocol']
        }
      ],
      '/components/': [
        {
          title: '组件',
          collapsable: false,
          children: components.map(c => path.basename(c).slice(0, -3))
        }
      ],
      '/dev/': [
        {
          title: '开发',
          collapsable: false,
          children: ['', 'run', 'getting-started']
        }
      ]
    }
  }
}
