<script setup>
import { computed, ref, onMounted } from 'vue'
import { useRoute } from 'vitepress'
import { data as tagsData } from '../lib/tags.data'


const route = useRoute()
const expandedTags = ref(new Set())

const uniqueTags = computed(() => tagsData.allTags)

const slugify = (str) => {
  return str.toLowerCase().replace(/\s+/g, '-')
}

const getTagUrl = (tag) => {
  return `/tags#${slugify(tag)}`
}

const getTagCount = (tag) => {
  return tagsData.pagesByTag[tag]?.length || 0
}

const toggleTag = (tag) => {
  if (expandedTags.value.has(tag)) {
    expandedTags.value.delete(tag)
  } else {
    expandedTags.value.add(tag)
  }
}

const isTagExpanded = (tag) => {
  return expandedTags.value.has(tag)
}

const getTagPages = (tag) => {
  return tagsData.pagesByTag[tag] || []
}

const formatDate = (dateString) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('en-AU', { year: 'numeric', month: 'short', day: 'numeric' })
}

// Auto-expand tag based on current hash
onMounted(() => {
  const hash = window.location.hash.slice(1) // Remove # prefix
  if (hash) {
    // Find the tag that matches this hash
    const matchingTag = uniqueTags.value.find(tag => slugify(tag) === hash)
    if (matchingTag) {
      expandedTags.value.add(matchingTag)
      // Scroll to the tag after a small delay to ensure DOM is ready
      setTimeout(() => {
        const element = document.querySelector(`[data-tag="${matchingTag}"]`)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    }
  }
})
</script>

<template>
  <div class="max-w-4xl mx-auto px-6 py-16">
    
    <div 
      v-if="uniqueTags.length > 0"
      class="space-y-3"
    >
      <div 
        v-for="tag in uniqueTags" 
        :key="tag"
        class="border border-gray-200 rounded"
        :data-tag="tag"
      >
        <!-- Tag Header -->
        <button
          @click="toggleTag(tag)"
          class="w-full flex items-center justify-between px-4 py-3 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
        >
          <div class="flex items-center gap-3">
            <span class="font-semibold text-gray-900">{{ tag }}</span>
            <span class="inline-flex items-center justify-center min-w-7 h-7 px-2 bg-gray-300 text-gray-700 rounded-full text-sm font-semibold">{{ getTagCount(tag) }}</span>
          </div>
          <span class="text-gray-600 transform transition-transform" :class="{ 'rotate-180': isTagExpanded(tag) }">
            ▼
          </span>
        </button>

        <!-- Tag Content - Pages -->
        <div
          v-if="isTagExpanded(tag)"
          class="bg-white border-t border-gray-200"
        >
          <div v-if="getTagPages(tag).length > 0" class="divide-y divide-gray-100">
            <a
              v-for="page in getTagPages(tag)"
              :key="page.url"
              :href="page.url"
              class="block px-4 py-3 hover:bg-gray-50 transition-colors"
            >
              <div class="font-medium text-blue-600 hover:text-blue-800">{{ page.title }}</div>
              <div v-if="page.date" class="text-sm text-gray-500">{{ formatDate(page.date) }}</div>
            </a>
          </div>
          <div v-else class="px-4 py-3 text-gray-500">
            No pages found
          </div>
        </div>
      </div>
    </div>
    
    <div v-else class="text-gray-600">
      No tags found.
    </div>
  </div>
</template>
