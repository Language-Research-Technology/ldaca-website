<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { pagesData } from 'virtual:pages-data'

const props = defineProps({
  heading: {
    type: String,
    default: ''
  },
  items: {
    type: Array,
    required: false,
    default: () => []
  },
  image: {
    type: Array,
    required: false,
    default: () => ['/images/Petroglyph_Pattern.svg']
  },
  backgroundColor: {
    type: String,
    default: ''
  },
  opacity: {
    type: Number,
    default: 100
  }
})

const currentIndex = ref(0)
const total = computed(() => props.items.length)
const isLg = ref(false)

const updateMatch = (mq) => {
  isLg.value = mq.matches
}

let mqListener
onMounted(() => {
  const mq = window.matchMedia('(min-width: 1024px)')
  updateMatch(mq)
  mqListener = (event) => updateMatch(event)
  mq.addEventListener('change', mqListener)
})

onBeforeUnmount(() => {
  const mq = window.matchMedia('(min-width: 1024px)')
  mq.removeEventListener('change', mqListener)
})

const visibleCount = computed(() => {
  if (total.value === 0) return 0
  return isLg.value ? Math.min(3, total.value) : 1
})

const visibleItems = computed(() => {
  if (total.value === 0) return []
  return Array.from({ length: visibleCount.value }, (_, i) => {
    const rawItem = props.items[(currentIndex.value + i) % total.value]
    let imageUrl = rawItem.image
    let description = rawItem.description
    
    // If no explicit values, look up from pages metadata
    if (rawItem.link) {
      const pageMetadata = pagesData[rawItem.link]
      if (!imageUrl && pageMetadata?.image) {
        imageUrl = pageMetadata.image
      }
      if (!description && pageMetadata?.description) {
        description = pageMetadata.description
      }
    }
    
    // Fall back to default carousel image
    if (!imageUrl) {
      imageUrl = Array.isArray(props.image) ? props.image[0] : props.image
    }
    
    return {
      ...rawItem,
      image: imageUrl,
      description: description
    }
  })
})

const showArrows = computed(() => total.value > visibleCount.value)

const prev = () => {
  if (total.value === 0) return
  currentIndex.value = (currentIndex.value - 1 + total.value) % total.value
}

const next = () => {
  if (total.value === 0) return
  currentIndex.value = (currentIndex.value + 1) % total.value
}
</script>

<template>
  <section class="max-w-[1440px] mx-auto px-6 py-16" :style="props.backgroundColor ? { backgroundColor: props.backgroundColor, opacity: `${props.opacity}%` } : {}">
    <div class="mb-8 text-center">
      <h2 class="text-3xl font-bold text-gray-900">{{ props.heading }}</h2>
    </div>

    <div class="flex items-center gap-6">
      <button
        v-if="showArrows"
        type="button"
        @click="prev"
        class="flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 shadow-sm"
        aria-label="Previous"
      >
        ‹
      </button>

      <div class="flex-1">
        <div class="grid gap-4" :class="isLg ? 'grid-cols-3' : 'grid-cols-1'">
          <div
            v-for="item in visibleItems"
            :key="item.title"
            class="bg-white rounded-none border border-gray-200 shadow-sm overflow-hidden h-full flex flex-col"
          >
            <img
              :src="item.image"
              :alt="item.title"
              class="w-full h-48 object-cover"
            />
            <div class="p-5 space-y-3 flex-1 flex flex-col">
              <h3 class="text-xl font-semibold text-gray-900">{{ item.title }}</h3>
              <p class="text-gray-700 leading-relaxed flex-1">{{ item.description }}</p>
              <a
                :href="item.link"
                class="inline-flex items-center text-blue-700 font-semibold hover:text-blue-900"
              >
                View more →
              </a>
            </div>
          </div>
        </div>
      </div>

      <button
        v-if="showArrows"
        type="button"
        @click="next"
        class="flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 shadow-sm"
        aria-label="Next"
      >
        ›
      </button>
    </div>
  </section>
</template>
