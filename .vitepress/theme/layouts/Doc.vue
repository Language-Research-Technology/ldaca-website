<script setup>
import { useData } from 'vitepress'
import { computed } from 'vue'
import SimpleHero from '../components/SimpleHero.vue'
import Profile from '../components/Profile.vue'

const { page } = useData()
const tags = computed(() => {
  const tagData = page.value?.frontmatter?.tags
  if (!tagData) return []
  return Array.isArray(tagData) ? tagData : [tagData]
})

const tagLinks = computed(() => {
  return tags.value.map(tag => ({
    label: tag,
    url: `/tags#${tag.toLowerCase().replace(/\s+/g, '-')}`
  }))
})

const authorSegments = computed(() => {
  const text = page.value?.frontmatter?.author || ''
  const segments = []
  const pattern = /<Profile\s+([^>]*?)\/?\s*>/g
  const attrPattern = /(\w+)\s*=\s*["']([^"']*)["']/g
  let lastIndex = 0
  let match

  while ((match = pattern.exec(text)) !== null) {
    const idx = match.index
    if (idx > lastIndex) {
      segments.push({ type: 'text', value: text.slice(lastIndex, idx) })
    }

    const attrsText = match[1] || ''
    const attrs = {}
    let attrMatch
    while ((attrMatch = attrPattern.exec(attrsText)) !== null) {
      attrs[attrMatch[1]] = attrMatch[2]
    }

    if (attrs.id) {
      segments.push({ type: 'profile', id: attrs.id })
    } else {
      segments.push({ type: 'text', value: match[0] })
    }

    lastIndex = pattern.lastIndex
  }

  if (lastIndex < text.length) {
    segments.push({ type: 'text', value: text.slice(lastIndex) })
  }

  return segments
})

</script>

<template>
  <SimpleHero :title="page.frontmatter?.title || 'Untitled Document'" :description="page.frontmatter?.description || ''"
    :breadcrumb="page.frontmatter?.breadcrumb || ''" backgroundImage="/images/GreenBackground.png" />

  <div class="VPDoc">
    <div class="container">
      <article class="vp-doc">
        <!-- Auto-display title from front matter -->
        <!-- <h1 v-if="page.frontmatter?.title" class="text-2xl font-bold mb-2 mt-2">
          {{ page.frontmatter.title }}
        </h1> -->

        <!-- Auto-display author from front matter -->
        <div v-if="page.frontmatter?.author" class="mb-4 text-gray-600">
          <span class="inline-flex flex-wrap items-center gap-1">
            <span>by</span>
            <template v-for="(segment, index) in authorSegments" :key="index">
              <span v-if="segment.type === 'text'">{{ segment.value }}</span>
              <Profile v-else :id="segment.id" />
            </template>
          </span>
        </div>

        <!-- Tags -->
        <div v-if="tags.length > 0" class="mb-6 pb-6 border-b border-gray-300">
          <div class="flex flex-wrap gap-2">
            <a v-for="tag in tagLinks" :key="tag.label" :href="tag.url"
              class="inline-flex px-3 py-1 bg-gray-100 text-blue-600 rounded text-sm hover:bg-gray-200">
              {{ tag.label }}
            </a>
          </div>
        </div>

        <Content />
      </article>
    </div>
  </div>
</template>
