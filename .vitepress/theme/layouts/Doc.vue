<script setup>
import { useData } from 'vitepress'
import { computed } from 'vue'

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

</script>

<template>
  <div class="VPDoc">
    <div class="container">
      <article class="vp-doc">
        <!-- Auto-display title from front matter -->
        <h1 v-if="page.frontmatter?.title" class="text-2xl font-bold mb-2 mt-2">
          {{ page.frontmatter.title }}
        </h1>
        
        <!-- Auto-display author from front matter -->
        <div v-if="page.frontmatter?.author" class="mb-4 italic text-gray-600">
          <span>by {{ page.frontmatter.author }}</span>
        </div>

        <!-- Tags -->
        <div v-if="tags.length > 0" class="mb-6 pb-6 border-b border-gray-300">
          <div class="flex flex-wrap gap-2">
            <a v-for="tag in tagLinks" :key="tag.label" :href="tag.url" class="inline-flex px-3 py-1 bg-gray-100 text-blue-600 rounded text-sm hover:bg-gray-200">
              {{ tag.label }}
            </a>
          </div>
        </div>
        
        <Content />
      </article>
    </div>
  </div>
</template>
