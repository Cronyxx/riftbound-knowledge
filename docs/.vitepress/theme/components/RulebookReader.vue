<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import book from '../../../reference/core-rules.json'

const selected = ref('000')
const input = ref('')
const error = ref('')
const ready = ref(false)
const page = computed(() => book.rules[selected.value])
const pdfUrl = computed(() => `${book.url}#page=${page.value}`)

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
  window.location.hash = `rule-${rule.replaceAll('.', '-')}`
  readHash()
}

onMounted(() => {
  readHash()
  ready.value = true
  window.addEventListener('hashchange', readHash)
})
onUnmounted(() => window.removeEventListener('hashchange', readHash))
</script>

<template>
  <section class="rulebook-reader" aria-label="Official Core Rules reader">
    <form @submit.prevent="jump" class="rule-jump">
      <label for="rule-number">Go to a rule</label>
      <div class="rule-jump-controls">
        <input id="rule-number" v-model="input" placeholder="e.g. 359.3.e.5" :aria-invalid="!!error" aria-describedby="rule-error" />
        <button type="submit">Find rule</button>
      </div>
      <p id="rule-error" role="status">{{ error }}</p>
    </form>
    <p aria-live="polite"><strong>Rule {{ selected }}</strong> · PDF page {{ page }} of {{ book.pageCount }} · {{ book.version }}</p>
    <p><a :href="pdfUrl" target="_blank" rel="noopener">Open this page in Riot’s official PDF ↗</a></p>
    <p class="reader-help">The reader opens the page containing the rule. Find the exact rule number on that page. If the reader stays blank or your browser cannot display PDFs, use the link above.</p>
    <iframe v-if="ready" :key="page" :src="pdfUrl" :title="`Official Core Rules, rule ${selected}, PDF page ${page}`" class="rulebook-pdf" />
    <noscript><p>JavaScript is needed for the embedded reader and rule lookup. Use the official PDF links in the section index below.</p></noscript>
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
.rulebook-pdf { display: block; width: 100%; height: 75vh; min-height: 420px; border: 1px solid var(--vp-c-divider); border-radius: 6px; background: white; }
@media (max-width: 640px) { .rulebook-reader { padding: 12px; } }
</style>
