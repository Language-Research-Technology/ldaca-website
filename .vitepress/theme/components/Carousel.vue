<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue'
import { pagesData } from 'virtual:pages-data'
import { withBase } from 'vitepress'

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
  },
  shade: {
    type: String,
    default: 'dark'
  },
  buttonText: {
    type: String,
    default: 'View more'
  },
  yearFilter: {
    type: Boolean,
    default: false
  },
  tileView: {
    type: Boolean,
    default: false
  }
})

const cardBgClass = computed(() =>
  props.shade === 'dark' ? 'bg-[#393939]' : 'bg-white border-[0.75px] border-[#b0b0b0]'
)

const textClass = computed(() =>
  props.shade === 'dark' ? 'text-white' : 'text-[#383938]'
)

const categoryClass = computed(() =>
  props.shade === 'dark' ? 'text-white/80' : 'text-[#383938]/70'
)

const currentIndex = ref(0)
const selectedYear = ref('All')

const extractYear = (value) => {
  const text = String(value || '')
  const match = text.match(/\b(19|20)\d{2}\b/)
  return match ? match[0] : null
}

// Merge item + frontmatter once
const mergedItems = computed(() =>
  props.items.map((rawItem) => {
    const pageMetadata = rawItem.link ? pagesData[rawItem.link] : null
    const eventDate = rawItem.eventDate ?? pageMetadata?.eventDate
    const imageFromItem = rawItem.image ?? pageMetadata?.image
    const fallbackImage = Array.isArray(props.image) ? props.image[0] : props.image
    return {
      ...rawItem,
      image: imageFromItem ?? fallbackImage,
      imageWasFallback: !imageFromItem,
      description: rawItem.description ?? pageMetadata?.description,
      eventDate,
      eventTime: rawItem.eventTime ?? pageMetadata?.eventTime,
      location: rawItem.location ?? pageMetadata?.location,
      category: rawItem.category ?? pageMetadata?.category,
      year: extractYear(eventDate)
    }
  })
)

const availableYears = computed(() =>
  [...new Set(mergedItems.value.map((i) => i.year).filter(Boolean))]
    .sort((a, b) => Number(b) - Number(a))
)

const filteredItems = computed(() => {
  if (!props.yearFilter || selectedYear.value === 'All') return mergedItems.value
  return mergedItems.value.filter((item) => item.year === selectedYear.value)
})

const total = computed(() => filteredItems.value.length)

watch([selectedYear, total], () => {
  currentIndex.value = 0
})

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
    return filteredItems.value[(currentIndex.value + i) % total.value]
  })
})

const desktopItems = computed(() => {
  return props.tileView ? filteredItems.value : visibleItems.value
})

const showArrows = computed(() => !props.tileView && total.value > visibleCount.value)

const prev = () => {
  if (total.value === 0) return
  currentIndex.value = (currentIndex.value - 1 + total.value) % total.value
}

const next = () => {
  if (total.value === 0) return
  currentIndex.value = (currentIndex.value + 1) % total.value
}

const isExternal = (url) => {
  try {
    return new URL(url).origin !== window.location.origin
  } catch {
    return false
  }
}
</script>

<template>
  <section class="w-full py-10"
    :style="props.backgroundColor ? { backgroundColor: props.backgroundColor, opacity: `${props.opacity}%` } : {}">
    <div class="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 lg:px-2">

      <!-- Heading -->
      <div class="mb-8 text-left">
        <h1 class="">{{ props.heading }}</h1>
      </div>

      <!-- Optional year filter -->
      <div v-if="props.yearFilter && availableYears.length" class="mb-6 flex flex-wrap gap-3">
        <button type="button" @click="selectedYear = 'All'" class="px-6 py-3 rounded-3xl"
          :class="selectedYear === 'All' ? 'bg-[#79a38d] text-white' : 'bg-white text-[#383938] border border-[#79a38d]'">
          All
        </button>
        <button v-for="year in availableYears" :key="year" type="button" @click="selectedYear = year"
          class="px-6 py-3 rounded-3xl"
          :class="selectedYear === year ? 'bg-[#79a38d] text-white' : 'bg-white text-[#383938] border border-[#79a38d]'">
          {{ year }}
        </button>
      </div>

      <div class="hidden lg:grid items-center"
        :class="showArrows ? 'lg:grid-cols-[auto_1fr_auto] gap-6' : 'grid-cols-1'">

        <!-- LEFT ARROW -->
        <button v-if="showArrows" type="button" @click="prev"
          class="h-16 w-16 flex items-center justify-center rounded-full bg-[#79a38d] text-white font-sans font-bold text-3xl hover:opacity-80 shadow-sm"
          aria-label="Previous">
          ←
        </button>

        <!-- GRID PANELS -->
        <div class="grid grid-cols-3 gap-4">
          <div v-for="item in desktopItems" :key="item.title" :class="[cardBgClass, 'overflow-hidden flex flex-col']">
            <a :href="item.link" :target="isExternal(item.link) ? '_blank' : '_self'"
              :rel="isExternal(item.link) ? 'noopener noreferrer' : null" class="block">
              <img :src="item.image" :alt="item.title"
                :class="['w-full object-cover h-80', item.imageWasFallback ? 'bg-[#79a38d]' : '']" />
            </a>

            <div class="px-5 pt-5 pb-3 space-y-3 flex flex-col">
              <p :class="categoryClass">{{ item.category }}</p>

              <h3 :class="textClass">{{ item.title }}</h3>

              <!-- Combine date and time -->
              <p v-if="item.eventDate || item.eventTime" :class="textClass" class="font-bold">
                {{ [item.eventDate, item.eventTime].filter(Boolean).join(', ') }}
              </p>

              <p v-if="item.location" :class="textClass" class="font-bold">
                {{ item.location }}
              </p>

              <p :class="[textClass, 'leading-relaxed flex-1 whitespace-pre-line']">
                {{ item.description }}
              </p>
            </div>

            <a :href="item.link" :target="isExternal(item.link) ? '_blank' : '_self'"
              :rel="isExternal(item.link) ? 'noopener noreferrer' : null"
              class="flex justify-between items-center w-full font-bold mt-auto bg-[#79A38D] hover:bg-[#8faf9b]"
              style="color:#FFFEF8; padding:15px;">
              <span class="text-xl">{{ props.buttonText }}</span>
              <span class="text-xl ml-auto font-sans font-bold">→</span>
            </a>
          </div>
        </div>

        <!-- RIGHT ARROW -->
        <button v-if="showArrows" type="button" @click="next"
          class="h-16 w-16 flex items-center justify-center rounded-full bg-[#79a38d] text-white font-sans font-bold text-3xl hover:opacity-80 shadow-sm"
          aria-label="Next">
          →
        </button>

      </div>

      <!-- TABLET / MOBILE STACKED PANELS -->
      <div class="lg:hidden flex flex-col gap-4">
        <div v-for="item in filteredItems" :key="item.title" class="bg-[#393939] overflow-hidden flex flex-col">
          <!-- compute image with frontmatter fallback -->
          <a :href="item.link" :target="isExternal(item.link) ? '_blank' : '_self'"
            :rel="isExternal(item.link) ? 'noopener noreferrer' : null" class="block">
            <img :src="withBase(item.image)" :alt="item.title"
              :class="['w-full object-cover h-60', item.imageWasFallback ? 'bg-[#79a38d]' : '']" />
          </a>

          <div class="px-5 pt-5 pb-3 space-y-3 flex flex-col">
            <p class="text-white">{{ item.category ?? pagesData[item.link]?.category }}</p>
            <h3 class="text-white">{{ item.title ?? pagesData[item.link]?.title }}</h3>
            <!-- Combine date and time -->
            <p v-if="pagesData[item.link]?.eventDate || pagesData[item.link]?.eventTime" class="font-bold text-white">
              {{ [pagesData[item.link]?.eventDate, pagesData[item.link]?.eventTime].filter(Boolean).join(', ') }}
            </p>

            <p v-if="pagesData[item.link]?.location" class="font-bold text-white">
              {{ pagesData[item.link]?.location }}
            </p>
            <p class="text-white leading-relaxed flex-1 whitespace-pre-line">
              {{ item.description ?? pagesData[item.link]?.description }}
            </p>
          </div>

          <a :href="item.link" :target="isExternal(item.link) ? '_blank' : '_self'"
            :rel="isExternal(item.link) ? 'noopener noreferrer' : null"
            class="flex justify-between items-center w-full font-bold mt-auto bg-[#79A38D] hover:bg-[#8faf9b]"
            style="color:#FFFEF8; padding:15px;">
            <span class="text-xl">{{ props.buttonText }}</span>
            <span class="font-sans font-bold text-white text-xl"> →</span>
          </a>
        </div>
      </div>

    </div>
  </section>
</template>