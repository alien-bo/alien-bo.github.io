import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Alien",
  description: "Alien\'s description",
  srcDir: './src',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/alien-bo' }
    ]
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      title: 'Alien',
      description: 'Alien\'s description',
    },
    zh: {
      label: '简体中文',
      lang: 'zh',
      title: 'Alien',
      description: 'Alien的个人网站',
      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
          { text: '主页', link: '/zh/' },
          { text: '简历', link: '/zh/CV' },
        ],
    
        sidebar: [
          {
            text: '简历',
            link: '/zh/CV',
            // items: [
            //   { text: 'Markdown示例', link: '/zh/CV' }
            // ]
          }
        ],
    
        socialLinks: [
          { icon: 'github', link: 'https://github.com/alien-bo' }
        ]
      },
    }
  }
})
