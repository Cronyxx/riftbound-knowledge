<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { withBase } from 'vitepress'
import book from '../../../reference/core-rules.json'

const selected = ref('000')
const input = ref('')
const error = ref('')
const page = computed(() => book.rules[selected.value])
const pdfUrl = computed(() => `${withBase(book.localPdf)}#page=${page.value}`)

function readHash() {
  const hash = window.location.hash.slice(1)
  if (!hash.startsWith('rule-')) return
  const rule = hash.slice(5).replaceAll('-', '.')
  if (Object.hasOwn(book.rules, rule)) {
    selected.value = rule
    input.value = rule
    error.value = ''
  } else {
    error.value = 'This rule number is not in the indexed edition. Check the number or the official Rules Hub.'
  }
}

function jump() {
  const rule = input.value.trim().replace(/^rule\s+/i, '').replace(/\.$/, '')
  if (!Object.hasOwn(book.rules, rule)) {
    error.value = 'Enter a rule number from this edition, such as 312 or 359.3.e.5.'
    return
  }
  const id = `rule-${rule.replaceAll('.', '-')}`
  window.location.hash = id
  readHash()
  document.getElementById(id)?.scrollIntoView({ block: 'start' })
}

onMounted(() => {
  readHash()
  window.addEventListener('hashchange', readHash)
})
onUnmounted(() => window.removeEventListener('hashchange', readHash))
</script>

<template>
  <section class="rulebook-reader" aria-label="Rulebook lookup">
    <form @submit.prevent="jump" class="rule-jump">
      <label for="rule-number">Go to a rule</label>
      <div class="rule-jump-controls">
        <input id="rule-number" v-model="input" placeholder="e.g. 359.3.e.5" :aria-invalid="!!error" aria-describedby="rule-error" />
        <button type="submit">Find rule</button>
      </div>
      <p id="rule-error" role="status">{{ error }}</p>
    </form>
    <p aria-live="polite"><strong>Rule {{ selected }}</strong> · PDF page {{ page }} of {{ book.pageCount }} · {{ book.version }}</p>
    <p><a :href="pdfUrl" target="_blank" rel="noopener">Compare this rule with the source PDF ↗</a></p>
    <p class="reader-help">Find rule jumps directly to the text below. Use your browser’s Find command to search the full rulebook.</p>
    <noscript><p>The complete text and section links work without JavaScript. JavaScript is needed only for this rule-number lookup.</p></noscript>
  </section>
</template>

<style scoped>
.rulebook-reader { padding: 20px; border: 1px solid var(--vp-c-divider); border-radius: 12px; background: var(--vp-c-bg-soft); }
.rule-jump label { display: block; font-weight: 600; margin-bottom: 8px; }
.rule-jump-controls { display: flex; flex-wrap: wrap; gap: 8px; }
.rule-jump input { background: var(--vp-c-bg); border: 1px solid var(--vp-c-divider); border-radius: 6px; padding: 8px 12px; min-width: 0; flex: 1; }
.rule-jump button { background: var(--vp-c-brand-3); color: var(--vp-c-white); border-radius: 6px; padding: 8px 16px; font-weight: 600; }
.rule-jump input:focus-visible, .rule-jump button:focus-visible { outline: 2px solid var(--vp-c-brand-1); outline-offset: 3px; }
#rule-error { color: var(--vp-c-danger-1); margin: 8px 0; }
.reader-help { font-size: .875rem; color: var(--vp-c-text-2); }
@media (max-width: 640px) { .rulebook-reader { padding: 12px; } }
</style>
