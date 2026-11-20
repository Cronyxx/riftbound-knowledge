<script setup>
defineProps({ entries: { type: Array, required: true }, compact: Boolean })
</script>

<template>
  <div class="reference-text">
    <section v-for="entry in entries" :key="entry.number" class="reference-rule">
      <p class="reference-rule-number">{{ entry.number }}</p>
      <template v-for="([kind, text], index) in entry.paragraphs" :key="index">
        <blockquote v-if="kind === 'example' && !compact" class="reference-example">{{ text }}</blockquote>
        <p v-else-if="!compact || index === 0" :class="{ 'reference-crossref': kind === 'reference' }">{{ compact && text.length > 420 ? `${text.slice(0, 420)}…` : text }}</p>
      </template>
    </section>
  </div>
</template>

<style scoped>
.reference-rule + .reference-rule { border-top: 1px solid var(--vp-c-divider); padding-top: 16px; margin-top: 16px; }
.reference-rule p { margin: 8px 0; }
.reference-rule .reference-rule-number { font-size: .8rem; font-weight: 700; color: var(--vp-c-brand-1); font-variant-numeric: tabular-nums; }
.reference-example { border-left: 2px solid var(--vp-c-divider); background: var(--vp-c-bg-soft); padding: 12px; margin: 12px 0; font-size: .9rem; }
.reference-crossref { color: var(--vp-c-text-2); font-style: italic; }
</style>
