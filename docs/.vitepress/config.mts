import { defineConfig } from 'vitepress'

// configure-pages supplies the correct path for project and account sites.
const base = process.env.PAGES_BASE_PATH || '/'
const repository = process.env.GITHUB_REPOSITORY
const repositoryUrl = repository ? `https://github.com/${repository}` : undefined

export default defineConfig({
  title: 'Riftbound Notes',
  description: 'A community notebook for Riftbound rules, sources, and card interactions.',
  lang: 'en-US',
  base,
  cleanUrls: false,
  lastUpdated: true,
  head: [['meta', { name: 'theme-color', content: '#133f3d' }]],
  themeConfig: {
    siteTitle: 'Riftbound Notes',
    nav: [
      { text: 'Read the notes', link: '/start-here' },
      { text: 'Official sources', link: '/sources' },
      { text: 'Contribute', link: '/contributing' }
    ],
    sidebar: [
      {
        text: 'THE NOTEBOOK',
        items: [
          { text: 'Start here', link: '/start-here' },
          { text: 'Official sources', link: '/sources' }
        ]
      },
      {
        text: 'RULES & INTERACTIONS',
        items: [
          { text: 'Deckbuilding', link: '/rules/deckbuilding' },
          { text: 'Timing & chains', link: '/rules/timing' },
          { text: 'Combat & scoring', link: '/rules/combat' },
          { text: 'Card interactions', link: '/interactions/' }
        ]
      },
      {
        text: 'HELP IT GROW',
        items: [{ text: 'Writing a rules note', link: '/contributing' }]
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
