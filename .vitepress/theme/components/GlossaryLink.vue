<script setup lang="ts">
import { ref } from 'vue'
import { resolveUrl } from '../lib/url'

const props = defineProps<{ display: string; id: string }>()

const shortDesc = ref<string | null>(null)
let loaded = false

async function loadShortDesc() {
  if (loaded) return
  try {
    const module = await import(`../../../data/glossary/${props.id}.yml?raw`)
    const yaml = module.default as string
    const lines = yaml.split('\n')
    for (const raw of lines) {
      const line = raw.trim()
      if (!line || line.startsWith('#') || !line.includes(':')) continue
      const [rawKey, ...vParts] = line.split(':')
      let key = rawKey.trim().replace(/^['\"]|['\"]$/g, '').toLowerCase()
      if (key !== 'short_description') continue
      let val = vParts.join(':').trim()
      val = val.replace(/^['\"]|['\"]$/g, '')
      shortDesc.value = val
      break
    }
  } catch (e) {
    // ignore if missing
  } finally {
    loaded = true
  }
}
</script>

<template>
  <span class="glossary-link-wrapper" @mouseenter="loadShortDesc" @focusin="loadShortDesc">
    <a :href="resolveUrl(`/resources/glossary/#${props.id}`)"
      class="font-bold leading-none text-[#79a38d] hover:underline hover:decoration-dotted hover:decoration-2 hover:underline-offset-8"
      :title="shortDesc || props.display" :aria-label="props.display">
      {{ props.display }}
    </a>
  </span>
</template>

<style scoped>
.glossary-link-wrapper {
  position: relative;
  display: inline;
  /* was inline-block */
}

a {
  display: inline;
  line-height: inherit;
  font: inherit;
  font-weight: bold;
  color: #79a38d;
  transition: color 0.2s ease;
}

a:hover {
  text-decoration-line: underline;
  text-decoration-style: dotted;
  text-decoration-thickness: 1.6px;
  text-underline-offset: 6.4px;
}
</style>
