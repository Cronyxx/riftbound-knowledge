import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import RuleReferences from './components/RuleReferences.vue'
import CardImageViewer from './components/CardImageViewer.vue'
import './style.css'

export default {
  ...DefaultTheme,
  Layout: () => h(DefaultTheme.Layout, null, {
    'layout-bottom': () => [h(RuleReferences), h(CardImageViewer)]
  })
}
