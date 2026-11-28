<script setup>
import { nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import { useRoute } from 'vitepress'

const route = useRoute()
const dialog = ref(null)
const card = ref(null)
let sourceLink = null

async function openCard(event) {
  if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
  const link = event.target instanceof Element
    ? event.target.closest('.deck-card-gallery figure > a')
    : null
  const image = link?.querySelector('img')
  if (!image || typeof dialog.value?.showModal !== 'function') return

  event.preventDefault()
  sourceLink = link
  card.value = {
    src: link.href,
    alt: image.alt,
    width: image.getAttribute('width'),
    height: image.getAttribute('height'),
    name: link.closest('figure').querySelector('figcaption strong')?.textContent || image.alt
  }
  await nextTick()
  if (card.value && dialog.value && !dialog.value.open) dialog.value.showModal()
}

function closeCard() {
  dialog.value?.close()
}

function restoreFocus() {
  card.value = null
  if (sourceLink?.isConnected) sourceLink.focus({ preventScroll: true })
  sourceLink = null
}

function closeOutside(event) {
  if (event.target !== dialog.value) return
  const rect = dialog.value.getBoundingClientRect()
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) closeCard()
}

watch(() => route.path, closeCard)
onMounted(() => document.addEventListener('click', openCard))
onUnmounted(() => document.removeEventListener('click', openCard))
</script>

<template>
  <dialog ref="dialog" class="card-image-viewer" aria-labelledby="card-image-title" @click="closeOutside" @close="restoreFocus">
    <template v-if="card">
      <header>
        <h2 id="card-image-title">{{ card.name }}</h2>
        <button type="button" autofocus aria-label="Close enlarged card" @click="closeCard">Close</button>
      </header>
      <img :src="card.src" :alt="card.alt" :width="card.width" :height="card.height" />
      <a :href="card.src" target="_blank" rel="noopener">Open full-size image in a new tab</a>
    </template>
  </dialog>
</template>

<style scoped>
.card-image-viewer {
  margin: auto;
  padding: 16px;
  max-width: calc(100vw - 32px);
  max-height: calc(100dvh - 32px);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  box-shadow: 0 16px 64px rgb(0 0 0 / 35%);
}

.card-image-viewer::backdrop {
  background: rgb(0 0 0 / 75%);
}

header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 12px;
}

h2 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
}

button {
  flex-shrink: 0;
  padding: 6px 12px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  cursor: pointer;
}

img {
  display: block;
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: calc(100dvh - 160px);
  margin: 0 auto;
  border-radius: 6px;
}

a {
  display: block;
  margin-top: 12px;
  color: var(--vp-c-brand-1);
  font-size: 13px;
  text-align: center;
  text-decoration: underline;
}

button:focus-visible, a:focus-visible {
  outline: 3px solid var(--vp-c-brand-1);
  outline-offset: 3px;
}

:global(html:has(.card-image-viewer[open])) {
  overflow: hidden;
}
</style>
