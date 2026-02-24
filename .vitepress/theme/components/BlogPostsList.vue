<script setup>
import { computed, onMounted } from 'vue'
import { useData, withBase } from 'vitepress'

const { site, theme } = useData()

const imageFallback = theme.value.postImageFallback ||
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96">' +
      '<rect width="96" height="96" fill="#e5e7eb"/>' +
      '<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="10" fill="#6b7280">No Image</text>' +
    '</svg>'
  )

const handleImageError = (event) => {
  const img = event?.target
  if (!img || !img.src || img.src === imageFallback) return
  img.src = imageFallback
}

const props = defineProps({
  posts: {
    type: Array,
    required: true
  }
})

// Group posts by year
const postsByYear = computed(() => {
  const grouped = {}
  
  props.posts.forEach(post => {
    const year = new Date(post.date).getFullYear()
    if (!grouped[year]) {
      grouped[year] = []
    }
    grouped[year].push(post)
  })
  
  // Sort years in descending order
  return Object.keys(grouped)
    .sort((a, b) => b - a)
    .reduce((acc, year) => {
      acc[year] = grouped[year].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      return acc
    }, {})
})

const years = computed(() => Object.keys(postsByYear.value).sort((a, b) => b - a))

const scrollToYear = (year) => {
  const element = document.getElementById(`year-${year}`)
  if (element) {
    window.history.pushState(null, '', `#year-${year}`)
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' })
}

// Scroll to year on mount if hash is present
onMounted(() => {
  const hash = window.location.hash
  if (hash && hash.startsWith('#year-')) {
    const year = hash.replace('#year-', '')
    const element = document.getElementById(`year-${year}`)
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    }
  }
})
</script>

<template>
  <section class="max-w-4xl mx-auto px-6 py-16">
    <!-- Year Navigation -->
    <div class="mb-8 flex flex-wrap gap-2">
      <button
        v-for="year in years"
        :key="year"
        @click="scrollToYear(year)"
        class="px-4 py-2 rounded-none border-2 font-semibold transition-all border-gray-300 text-gray-700 hover:border-primary hover:text-primary"
      >
        {{ year }}
      </button>
    </div>

    <!-- Posts Grouped by Year -->
    <div class="space-y-12">
      <div v-for="year in years" :key="year" :id="`year-${year}`" class="scroll-mt-24">
        <h2 class="text-3xl font-bold mb-6 text-gray-900">{{ year }}</h2>
        <div class="space-y-6">
          <article
            v-for="post in postsByYear[year]"
            :key="post.slug"
            class="border-b border-gray-200 pb-6 last:border-b-0"
          >
            <div class="mb-3">
              <time class="text-gray-600 text-sm">{{ formatDate(post.date) }}</time>
            </div>
            <div class="flex gap-4 items-start">
              <img
                v-if="post.image"
                :src="withBase(post.image)"
                :alt="post.title"
                class="w-24 h-24 object-cover rounded-none flex-shrink-0 self-start mt-0"
                @error="handleImageError"
              />
              <div class="flex-1 pt-0">
                <h3 class="text-2xl font-bold mt-0 mb-2 text-gray-900">
                  <a :href="post.url" class="hover:text-primary transition-colors">
                    {{ post.title }}
                  </a>
                </h3>
                <p v-if="post.description" class="text-lg text-gray-600 mb-4 font-medium">
                  {{ post.description }}
                </p>
                <div v-if="post.tags" class="flex flex-wrap gap-2">
                  <span
                    v-for="tag in post.tags"
                    :key="tag"
                    class="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.text-primary {
  color: #79A38D;
}

.bg-primary {
  background-color: #79A38D;
}

.border-primary {
  border-color: #79A38D;
}

.hover\:text-primary:hover {
  color: #79A38D;
}

.hover\:border-primary:hover {
  border-color: #79A38D;
}

.scroll-mt-24 {
  scroll-margin-top: 6rem;
}
</style>
