<script setup lang="ts">
import { ref } from 'vue'

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
    <a
      :href="`/resources/glossary/#${props.id}`"
      class="text-blue-600 hover:text-blue-800 underline hover:underline transition-colors"
      :title="shortDesc || props.display"
      :aria-label="props.display"
    >
      {{ props.display }}
    </a>
  </span>
</template>

<style scoped>
.glossary-link-wrapper {
  position: relative;
  display: inline-block;
}

a {
  text-decoration: underline;
  cursor: pointer;
}

a:hover {
  color: var(--vp-c-brand-dark);
}


</style>
