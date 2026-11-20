<script setup>
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import { useRoute, withBase } from 'vitepress'
import { version, reviewed, url as officialUrl } from '../../../reference/core-rules.json'
import { citationNumber, createRuleLoader } from '../rule-references.mjs'
import RuleReferenceText from './RuleReferenceText.vue'

const route = useRoute()
const preview = ref(null)
const panel = ref(null)
const tooltip = ref(null)
const pane = ref(null)
const closeButton = ref(null)
const compact = ref(false)
const previewStyle = ref({})
const panelOpen = computed(() => panel.value !== null)
const previewEntries = computed(() => {
  const entries = preview.value?.entries || []
  return entries.filter((entry, i) => i === 0 || entry.paragraphs[0][1].length > 50).slice(0, 3)
})
const loadRule = createRuleLoader({ base: withBase('/'), version, fetchImpl: (url) => fetch(url) })
const ruleUrl = (number) => withBase(`/reference/core-rules.html#rule-${number.replaceAll('.', '-')}`)

let hoverTimer, hideTimer, decorateFrame, observer, mediaQuery
let hoverRequest = 0, panelRequest = 0, suppressFocusUntil = 0
let hoverLink = null, sourceLink = null, background = null

function isRulebook() {
  return route.path.replace(/\.html$/, '').replace(/\/$/, '') === withBase('/reference/core-rules')
}

function enhanceLinks() {
  if (isRulebook()) return
  for (const link of document.querySelectorAll('.vp-doc a[href]')) {
    const number = citationNumber(link.href, { origin: location.origin, base: withBase('/') })
    if (!number || link.dataset.ruleReference) continue
    link.dataset.ruleReference = number
    // VitePress leaves vp-raw links to the browser. Our delegated click handler
    // can then open a pane before native navigation, retaining the real href.
    link.classList.add('vp-raw', 'rule-citation')
    link.setAttribute('aria-haspopup', 'dialog')
    link.setAttribute('aria-label', `Rule ${number}; open reference pane`)
  }
}

function citationAt(target) {
  return target instanceof Element ? target.closest('a[data-rule-reference]') : null
}

function hidePreview() {
  clearTimeout(hoverTimer)
  clearTimeout(hideTimer)
  hoverRequest++
  hoverLink?.removeAttribute('aria-describedby')
  hoverLink = null
  preview.value = null
}

function scheduleHide() {
  clearTimeout(hideTimer)
  hideTimer = setTimeout(hidePreview, 150)
}

function keepPreview() {
  clearTimeout(hideTimer)
}

function placePreview() {
  if (!hoverLink || !tooltip.value) return
  const link = hoverLink.getBoundingClientRect()
  const box = tooltip.value.getBoundingClientRect()
  const left = Math.max(16, Math.min(link.left, window.innerWidth - box.width - 16))
  const below = window.innerHeight - link.bottom - 28
  const above = link.top - 28
  const placeBelow = below >= Math.min(box.height, 260) || below >= above
  const maxHeight = Math.max(80, Math.min(440, placeBelow ? below : above))
  const top = placeBelow ? link.bottom + 12 : Math.max(16, link.top - Math.min(box.height, maxHeight) - 12)
  previewStyle.value = { left: `${left}px`, top: `${top}px`, maxHeight: `${maxHeight}px` }
}

async function showPreview(link) {
  if (panelOpen.value || !link.isConnected) return
  hidePreview()
  const request = hoverRequest
  hoverLink = link
  link.setAttribute('aria-describedby', 'rule-reference-preview')
  const number = link.dataset.ruleReference
  preview.value = { number, entries: [], loading: true, error: false }
  await nextTick()
  placePreview()
  try {
    const entries = await loadRule(number)
    if (request !== hoverRequest || !preview.value) return
    preview.value = { number, entries, loading: false, error: false }
  } catch {
    if (request !== hoverRequest || !preview.value) return
    preview.value = { number, entries: [], loading: false, error: true }
  }
  await nextTick()
  placePreview()
}

function pointerOver(event) {
  if (event.pointerType !== 'mouse') return
  const link = citationAt(event.target)
  if (!link || link === hoverLink) return
  clearTimeout(hoverTimer)
  clearTimeout(hideTimer)
  hoverTimer = setTimeout(() => showPreview(link), 250)
}

function pointerOut(event) {
  const link = citationAt(event.target)
  if (!link || link.contains(event.relatedTarget) || tooltip.value?.contains(event.relatedTarget)) return
  clearTimeout(hoverTimer)
  scheduleHide()
}

function focusIn(event) {
  const link = citationAt(event.target)
  if (link && Date.now() >= suppressFocusUntil) showPreview(link)
}

function focusOut(event) {
  if (citationAt(event.target)) scheduleHide()
}

async function selectRule(number) {
  const request = ++panelRequest
  panel.value = { number, entries: [], loading: true, error: false }
  try {
    const entries = await loadRule(number)
    if (request !== panelRequest || !panel.value) return
    panel.value = { number, entries, loading: false, error: false }
  } catch {
    if (request !== panelRequest || !panel.value) return
    panel.value = { number, entries: [], loading: false, error: true }
  }
}

function openPanel(event) {
  const link = citationAt(event.target)
  if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
  event.preventDefault()
  hidePreview()
  const wasOpen = panelOpen.value
  sourceLink = link
  selectRule(link.dataset.ruleReference)
  if (!wasOpen) nextTick(() => closeButton.value?.focus({ preventScroll: true }))
}

function closePanel(restoreFocus = true) {
  panelRequest++
  panel.value = null
  suppressFocusUntil = Date.now() + 350
  if (restoreFocus && sourceLink?.isConnected) nextTick(() => sourceLink.focus({ preventScroll: true }))
}

function releaseBackground() {
  if (!background) return
  background.app.inert = background.inert
  document.body.style.overflow = background.overflow
  background = null
}

function syncPanelMode() {
  document.documentElement.classList.toggle('rule-reference-docked', panelOpen.value && !compact.value)
  if (panelOpen.value && compact.value) {
    if (!background) {
      const app = document.getElementById('app')
      background = { app, inert: app.inert, overflow: document.body.style.overflow }
      app.inert = true
      document.body.style.overflow = 'hidden'
      if (!pane.value?.contains(document.activeElement)) closeButton.value?.focus({ preventScroll: true })
    }
  } else releaseBackground()
}

function keydown(event) {
  if (event.key === 'Escape' && (preview.value || panelOpen.value)) {
    event.preventDefault()
    hidePreview()
    closePanel(panelOpen.value)
  }
  if (event.key !== 'Tab' || !panelOpen.value || !compact.value) return
  const controls = [...pane.value.querySelectorAll('button, a[href]')].filter((node) => node.getClientRects().length)
  const first = controls[0], last = controls.at(-1)
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault(); last.focus()
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault(); first.focus()
  }
}

function scroll(event) {
  if (tooltip.value?.contains(event.target)) return
  if (hoverLink && document.activeElement === hoverLink) placePreview()
  else hidePreview()
}

function updateViewport() {
  compact.value = mediaQuery.matches
  hidePreview()
}

watch([panelOpen, compact], syncPanelMode, { flush: 'post' })
watch(() => route.path, async () => {
  hidePreview()
  closePanel(false)
  await nextTick()
  enhanceLinks()
})

onMounted(() => {
  mediaQuery = window.matchMedia('(max-width: 1279px)')
  updateViewport()
  mediaQuery.addEventListener('change', updateViewport)
  enhanceLinks()
  observer = new MutationObserver(() => {
    cancelAnimationFrame(decorateFrame)
    decorateFrame = requestAnimationFrame(enhanceLinks)
  })
  observer.observe(document.getElementById('app'), { childList: true, subtree: true })
  document.addEventListener('pointerover', pointerOver)
  document.addEventListener('pointerout', pointerOut)
  document.addEventListener('focusin', focusIn)
  document.addEventListener('focusout', focusOut)
  document.addEventListener('click', openPanel, true)
  document.addEventListener('keydown', keydown)
  document.addEventListener('scroll', scroll, true)
  window.addEventListener('resize', hidePreview)
})

onUnmounted(() => {
  hidePreview()
  panelRequest++
  observer?.disconnect()
  cancelAnimationFrame(decorateFrame)
  mediaQuery?.removeEventListener('change', updateViewport)
  releaseBackground()
  document.documentElement.classList.remove('rule-reference-docked')
  document.removeEventListener('pointerover', pointerOver)
  document.removeEventListener('pointerout', pointerOut)
  document.removeEventListener('focusin', focusIn)
  document.removeEventListener('focusout', focusOut)
  document.removeEventListener('click', openPanel, true)
  document.removeEventListener('keydown', keydown)
  document.removeEventListener('scroll', scroll, true)
  window.removeEventListener('resize', hidePreview)
})
</script>

<template>
  <Teleport to="body">
    <div v-if="preview" id="rule-reference-preview" ref="tooltip" role="tooltip" class="rule-reference-preview" :style="previewStyle" @pointerenter="keepPreview" @pointerleave="scheduleHide">
      <p class="reference-eyebrow">Core Rules · {{ version }}</p>
      <p class="reference-preview-title">Rule {{ preview.number }}</p>
      <p v-if="preview.loading" role="status">Loading rule…</p>
      <p v-else-if="preview.error" role="status">Preview unavailable. Click the citation for the rulebook link.</p>
      <RuleReferenceText v-else :entries="previewEntries" compact />
      <p class="reference-preview-hint">Click the citation to read the full section alongside this article.</p>
    </div>

    <div v-if="panelOpen && compact" class="rule-reference-backdrop" aria-hidden="true" @click="closePanel()" />
    <aside v-if="panel" ref="pane" class="rule-reference-pane" role="dialog" :aria-modal="compact ? true : undefined" aria-labelledby="rule-reference-title" :aria-busy="panel.loading">
      <header class="reference-pane-header">
        <div>
          <p class="reference-eyebrow">Rule reference</p>
          <h2 id="rule-reference-title">Rule {{ panel.number }}</h2>
        </div>
        <button ref="closeButton" type="button" class="reference-close" aria-label="Close rule reference" @click="closePanel()">Close <span aria-hidden="true">×</span></button>
      </header>
      <div class="reference-pane-body">
        <p class="reference-edition">Core Rules · {{ version }}<br>Reference checked {{ reviewed }}</p>
        <p v-if="panel.loading" role="status">Loading rule…</p>
        <div v-else-if="panel.error" role="status">
          <p>This rule could not be loaded. You can still open it in the full rulebook below.</p>
          <button type="button" class="reference-retry" @click="selectRule(panel.number)">Try again</button>
        </div>
        <template v-else>
          <p class="reference-section-note">PDF page {{ panel.entries[0].page }}<span v-if="panel.entries.length > 1"> · Includes section rules</span></p>
          <RuleReferenceText :entries="panel.entries" />
        </template>
      </div>
      <footer class="reference-pane-footer">
        <a :href="ruleUrl(panel.number)">Read in full rulebook →</a>
        <a :href="officialUrl" target="_blank" rel="noopener">Official PDF ↗</a>
        <p>Applicable FAQs and errata may update this edition. <a :href="withBase('/sources.html')">Check sources</a>.</p>
      </footer>
    </aside>
  </Teleport>
</template>

<style scoped>
.rule-reference-preview, .rule-reference-pane { color: var(--vp-c-text-1); background: var(--vp-c-bg); border: 1px solid var(--vp-c-divider); line-height: 1.65; font-size: .9375rem; }
.rule-reference-preview { position: fixed; z-index: 75; width: min(380px, calc(100vw - 32px)); max-height: min(440px, calc(100dvh - 32px)); overflow: auto; border-radius: 12px; padding: 18px; box-shadow: 0 12px 40px #0003; }
.reference-eyebrow { margin: 0; font-size: .75rem; font-weight: 650; color: var(--vp-c-text-2); }
.reference-preview-title { margin: 4px 0 12px; font-size: 1.1rem; font-weight: 700; }
.reference-preview-hint { margin: 14px 0 0; padding-top: 12px; border-top: 1px solid var(--vp-c-divider); font-size: .8rem; color: var(--vp-c-text-2); }
.rule-reference-pane { position: fixed; z-index: 70; top: var(--vp-nav-height); right: 0; bottom: 0; width: var(--rule-reference-width); max-width: 100vw; display: grid; grid-template-rows: auto minmax(0, 1fr) auto; box-shadow: -8px 0 30px #0002; }
.reference-pane-header { display: flex; align-items: center; justify-content: space-between; gap: 12px; border-bottom: 1px solid var(--vp-c-divider); padding: 18px 22px; }
.reference-pane-header h2 { margin: 2px 0 0; font-size: 1.2rem; font-weight: 650; }
.reference-close, .reference-retry { border: 1px solid var(--vp-c-divider); border-radius: 6px; padding: 6px 10px; background: var(--vp-c-bg-soft); font-size: .85rem; cursor: pointer; }
.reference-close span { margin-left: 8px; font-size: 1.2rem; }
.reference-pane-body { padding: 20px 22px; overflow-y: auto; overscroll-behavior: contain; }
.reference-edition, .reference-section-note { font-size: .8rem; color: var(--vp-c-text-2); margin: 0 0 14px; }
.reference-pane-footer { padding: 14px 22px; border-top: 1px solid var(--vp-c-divider); display: flex; flex-wrap: wrap; gap: 6px 18px; font-size: .85rem; background: var(--vp-c-bg-soft); }
.reference-pane-footer a { color: var(--vp-c-brand-1); text-decoration: underline; text-underline-offset: 3px; }
.reference-pane-footer p { margin: 4px 0 0; width: 100%; color: var(--vp-c-text-2); font-size: .75rem; }
.rule-reference-pane :focus-visible { outline: 2px solid var(--vp-c-brand-1); outline-offset: 3px; }
.rule-reference-backdrop { position: fixed; inset: 0; background: #0006; z-index: 65; }
@media (max-width: 1279px) { .rule-reference-pane { top: 0; } }
@media (max-width: 640px) { .rule-reference-pane { width: 100vw; } }
</style>
