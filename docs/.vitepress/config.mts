import { defineConfig } from 'vitepress'

// configure-pages supplies the correct path for project and account sites.
const base = process.env.PAGES_BASE_PATH || '/'
const repository = process.env.GITHUB_REPOSITORY
const repositoryUrl = repository ? `https://github.com/${repository}` : undefined

export default defineConfig({
  title: 'Riftbound Notes',
  description: 'Learn Riftbound basics, understand advanced rules, and study competitive decks.',
  lang: 'en-US',
  base,
  cleanUrls: false,
  lastUpdated: true,
  head: [['meta', { name: 'theme-color', content: '#133f3d' }]],
  themeConfig: {
    siteTitle: 'Riftbound Notes',
    nav: [
      { text: 'Basics', link: '/basics/' },
      { text: 'Advanced Rules', link: '/advanced/' },
      { text: 'Meta Deck Studies', link: '/meta/' },
      { text: 'Resources', items: [
        { text: 'Start here', link: '/start-here' },
        { text: 'Official sources', link: '/sources' },
        { text: 'Writing a note', link: '/contributing' },
        { text: 'Site design & plan', link: '/site-design' }
      ] }
    ],
    sidebar: [
      {
        text: '01 · BASICS',
        items: [
          { text: 'Overview & planned lessons', link: '/basics/' },
          { text: 'Objective of the game', link: '/basics/objective' },
          { text: 'Meet the cards', link: '/basics/meet-the-cards' }
        ]
      },
      {
        text: '02 · ADVANCED RULES',
        items: [{ text: 'Overview & planned topics', link: '/advanced/' }]
      },
      {
        text: '03 · META DECK STUDIES',
        items: [{ text: 'Overview & study format', link: '/meta/' }]
      },
      {
        text: 'RESOURCES',
        items: [
          { text: 'Start here', link: '/start-here' },
          { text: 'Official sources', link: '/sources' },
          { text: 'Writing a note', link: '/contributing' },
          { text: 'Site design & plan', link: '/site-design' }
        ]
      }
    ],
    search: { provider: 'local' },
    outline: { level: [2, 3], label: 'On this page' },
    socialLinks: repositoryUrl ? [{ icon: 'github', link: repositoryUrl }] : [],
    editLink: repositoryUrl ? {
      pattern: `${repositoryUrl}/edit/main/docs/:path`,
      text: 'Improve this page on GitHub'
    } : undefined,
    footer: {
      message: 'An independent community notebook. Not affiliated with or endorsed by Riot Games.',
      copyright: 'Riftbound and related marks belong to Riot Games, Inc.'
    }
  }
})
