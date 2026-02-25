<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'

const { page } = useData()

const formattedDate = computed(() => {
  const raw = page.value?.frontmatter?.date
  if (!raw) return ''
  const parsed = new Date(raw)
  if (Number.isNaN(parsed.getTime())) return String(raw)
  return parsed.toLocaleDateString('en-AU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
})

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
</script>

<template>
  <div class="VPDoc">
    <div class="container">
      <article class="vp-doc">
      <!-- Back link -->
      <div class="mb-6">
        <a href="/news/posts/" class="inline-block px-3 py-1 bg-gray-100 text-blue-600 rounded text-sm no-underline transition-colors hover:bg-gray-200">← All Posts</a>
      </div>
        <!-- Auto-display title from front matter -->
        <h1 v-if="page.frontmatter?.title" class="text-4xl font-bold mb-2 mt-2">
          {{ page.frontmatter.title }}
        </h1>
        
        <!-- Auto-display author from front matter -->
        <div v-if="page.frontmatter?.author" class="mb-4 italic text-gray-500">
          <span>by {{ page.frontmatter.author }}</span>
        </div>

        <!-- Auto-display date from front matter -->
        <div v-if="formattedDate" class="mb-5 text-gray-600 text-sm">
          <span>{{ formattedDate }}</span>
        </div>

        <!-- Tags -->
        <div v-if="tags.length > 0" class="mb-6 pb-6 border-b border-gray-300">
          <div class="flex flex-wrap gap-2">
            <a v-for="tag in tagLinks" :key="tag.label" :href="tag.url" class="inline-block px-3 py-1 bg-gray-100 text-blue-600 rounded text-sm no-underline transition-colors hover:bg-gray-200">
              {{ tag.label }}
            </a>
          </div>
        </div>
        
        <Content />
      </article>
    </div>
  </div>
</template>

<style scoped>
</style>
