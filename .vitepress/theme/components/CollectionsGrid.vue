<script setup>
import { ref, computed, onMounted } from 'vue'
import { ROCrate } from 'ro-crate'

const API_URL = 'https://data.ldaca.edu.au/api/object?memberOf=null'

const props = defineProps({
  heading: { type: String, default: 'Heading' },
  subheading: { type: String, default: 'Subheading text goes here.' },
  backgroundColor: {
    type: String,
    default: '#79a38d'
  },
  backgroundImage: {
    type: String,
    default: '/images/Collections_BG.png'
  },
  opacity: {
    type: Number,
    default: 100
  },
  buttonText: {
    type: String,
    default: 'Learn more'
  },
  notebook: {
    type: Object,
    default: () => ({
      cooeeArdc: 'https://binderhub.rc.nectar.org.au/v2/gh/Australian-Text-Analytics-Platform/cooee/main?filepath=cooee.ipynb',
      cooeePublic: 'https://mybinder.org/v2/gh/Australian-Text-Analytics-Platform/cooee/main?filepath=cooee.ipynb',
      f2fArdc: 'https://binderhub.rc.nectar.org.au/v2/gh/Australian-Text-Analytics-Platform/farms-to-freeways/main?filepath=farms-to-freeways.ipynb',
      f2fPublic: 'https://mybinder.org/v2/gh/Australian-Text-Analytics-Platform/farms-to-freeways/main?filepath=farms-to-freeways.ipynb',
      ausredditArdc: 'https://binderhub.rc.nectar.org.au/v2/gh/Australian-Text-Analytics-Platform/notebook-ausreddit/main?filepath=exploration.ipynb',
      ausredditPublic: 'https://mybinder.org/v2/gh/Australian-Text-Analytics-Platform/notebook-ausreddit/main?filepath=exploration.ipynb',
      twittersphereArdc: 'https://binderhub.rc.nectar.org.au/v2/gh/Australian-Text-Analytics-Platform/notebook-twittersphere/main?filepath=exploration.ipynb',
      twitterspherePublic: 'https://mybinder.org/v2/gh/Australian-Text-Analytics-Platform/notebook-twittersphere/main?filepath=exploration.ipynb'
    })
  }
})

const collections = ref([])
const nextUrl = ref(API_URL)
const total = ref(0)
const loading = ref(false)
const error = ref('')
const selectedItem = ref(null)
const widgetLoading = ref(false)
const showWidgetModal = ref(false)

// Pagination
const currentPage = ref(1)
const perPage = 6

const loaded = computed(() => collections.value.length)
const totalPages = computed(() => Math.max(1, Math.ceil(loaded.value / perPage)))

// Sort tiles alphabetically by title (A → Z), case-insensitive
const sortedCollections = computed(() =>
  [...collections.value].sort((a, b) =>
    String(a.title || '').localeCompare(String(b.title || ''), undefined, {
      sensitivity: 'base',
      numeric: true
    })
  )
)

const paginatedCollections = computed(() => {
  const start = (currentPage.value - 1) * perPage
  return sortedCollections.value.slice(start, start + perPage)
})

const startItem = computed(() => {
  if (loaded.value === 0) return 0
  return (currentPage.value - 1) * perPage + 1
})

const endItem = computed(() => Math.min(currentPage.value * perPage, loaded.value))

const visiblePages = computed(() => {
  const pages = []
  const start = Math.max(1, currentPage.value - 2)
  const end = Math.min(totalPages.value, currentPage.value + 2)
  for (let p = start; p <= end; p++) pages.push(p)
  return pages
})

const goToPage = (p) => {
  if (p >= 1 && p <= totalPages.value) currentPage.value = p
}
const prevPage = () => goToPage(currentPage.value - 1)
const nextPage = () => goToPage(currentPage.value + 1)

// Limit description to 100 words for tiles
const truncateWords = (text, maxWords = 100) => {
  const words = String(text || '').trim().split(/\s+/)
  if (words.length <= maxWords) return text || ''
  return `${words.slice(0, maxWords).join(' ')}…`
}

const mapApiItem = (col) => ({
  title: col?.name || col?.title || col?.['@id'] || 'Untitled collection',
  description: col?.description || 'No description available',
  link: col?.['@id'] || col?.url || '#',
})

const loadCollections = async (url = nextUrl.value) => {
  if (!url || loading.value) return

  loading.value = true
  error.value = ''

  try {
    const res = await fetch(url)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)

    const data = await res.json()
    const items = Array.isArray(data?.data) ? data.data : []

    if (typeof data?.total === 'number') total.value = data.total
    nextUrl.value = data?.nextUrl || null
    collections.value.push(...items.map(mapApiItem))
  } catch (err) {
    error.value = 'Error loading collections'
    console.error(err)
  } finally {
    loading.value = false
  }
}

// Load all pages once, then paginate in UI
const loadAllCollections = async () => {
  while (nextUrl.value) {
    await loadCollections(nextUrl.value)
  }
}

onMounted(() => {
  loadAllCollections()
})

const isExternal = (url) => {
  try {
    return new URL(url).origin !== window.location.origin
  } catch {
    return false
  }
}

const firstValue = (v) => (Array.isArray(v) ? v[0] : v)

const joinValues = (v, separator = ', ') => {
  if (Array.isArray(v)) {
    return v.map(item => {
      if (typeof item === 'object') return item?.name || item?.['@id'] || String(item)
      return String(item)
    }).join(separator)
  }
  if (typeof v === 'object') return v?.name || v?.['@id'] || String(v)
  return String(v || '')
}

const replaceSlashWithDash = (value) => String(value || '').replace(/\//g, ' - ')

const openWidget = async (item) => {
  showWidgetModal.value = true
  widgetLoading.value = true
  selectedItem.value = null

  try {
    const res = await fetch(item.link)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)

    const data = await res.json()
    const crate = new ROCrate(data, { link: true })

    const mappedItem = {
      title: firstValue(crate.root.name) || 'Untitled collection',
      description: firstValue(crate.root.description) || 'No description available',
      language: joinValues(crate.root?.['inLanguage']) || joinValues(crate.root?.language),
      license: joinValues(crate.root.license),
      arcp: firstValue(crate.root?.['@id']) || 'Unknown ID',
      temporalCoverage: replaceSlashWithDash(joinValues(crate.root.temporalCoverage))
    }

    selectedItem.value = mappedItem
  } catch (err) {
    console.error(err)
    selectedItem.value = {
      title: 'Error loading collection',
      description: 'Failed to load collection details. Please try again.',
      language: 'Unknown',
      license: 'Unknown',
      arcp: 'Unknown ID'
    }
  } finally {
    widgetLoading.value = false
  }
}

const closeWidget = () => {
  showWidgetModal.value = false
  widgetLoading.value = false
  selectedItem.value = null
}

const portalLink = computed(() => {
  const arcp = selectedItem.value?.arcp || ''
  const encodedArcp = encodeURIComponent(arcp)
  return `https://data.ldaca.edu.au/collection?id=${encodedArcp}&_crateId=${encodedArcp}`
})

</script>

<template>
  <section v-bind="$attrs" class="w-full py-10"
    :style="props.backgroundColor ? { backgroundColor: props.backgroundColor, opacity: `${props.opacity}%` } : {}">
    <div class="max-w-[1280px] mx-auto">

      <!-- Header -->
      <div class="max-w-2xl mb-8">
        <h1 class="mb-2 text-white">{{ heading }}</h1>
        <p class="text-white text-xl">{{ subheading }}</p>
      </div>

      <!-- Tiles -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div v-for="(item, index) in paginatedCollections" :key="`${item.link}-${index}`"
          class="rounded-t-2xl shadow-sm overflow-hidden flex flex-col" :style="{
            backgroundImage: `url(${props.backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }">
          <div class="p-5">
            <h3 class="mb-2 text-[#383938]">{{ item.title }}</h3>
            <p class="text-[#383938] mb-5">{{ truncateWords(item.description, 40) }}</p>
          </div>

          <button @click="openWidget(item)"
            class="flex justify-between items-center w-full font-bold bg-[#393939] hover:bg-opacity-80 text-[#FFFEF8] px-5 py-4 mt-auto">
            <span class="text-xl">{{ buttonText }}</span>
            <span class="text-xl font-sans font-bold">→</span>
          </button>
        </div>
      </div>

      <!-- Status + Pagination -->
      <div class="flex flex-col items-center mt-8 gap-3">
        <p v-if="loading" class="text-white text-lg">Loading collections...</p>

        <div v-if="!loading" class="text-white text-lg">
          {{ startItem }}–{{ endItem }} of {{ total > 0 ? total : loaded }}
        </div>

        <p v-if="error" class="text-red-200">{{ error }}</p>

        <div v-if="totalPages > 1" class="flex items-center gap-2">
          <button @click="prevPage" :disabled="currentPage === 1"
            class="px-3 py-2 rounded-md bg-[#5e7f6e] text-white disabled:opacity-40">
            ‹
          </button>

          <button v-for="p in visiblePages" :key="p" @click="goToPage(p)" class="px-3 py-2 rounded-md text-white"
            :class="currentPage === p ? 'bg-[#2f3f38]' : 'bg-[#5e7f6e] hover:bg-[#4a6a5c]'">
            {{ p }}
          </button>

          <button @click="nextPage" :disabled="currentPage === totalPages"
            class="px-3 py-2 rounded-md bg-[#5e7f6e] text-white disabled:opacity-40">
            ›
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- Modal Widget -->
  <div v-if="showWidgetModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
    <div class="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto flex flex-col">

      <!-- Close button -->
      <div class="sticky top-0 flex justify-end px-6 py-4 bg-white">
        <button @click="closeWidget" class="text-gray-500 hover:text-gray-700 text-2xl font-bold">✕</button>
      </div>

      <!-- Loading popup -->
      <div v-if="widgetLoading" class="px-8 pb-8 flex-1 flex items-center justify-center">
        <p class="text-gray-600 text-xl">Loading collection details...</p>
      </div>

      <!-- Widget Content -->
      <template v-else>
        <div class="px-8 flex-1">
          <h2 class="mb-6 text-[#383938]">{{ selectedItem.title }}</h2>
          <p class="text-xl text-gray-600 mb-6">{{ selectedItem.description }}</p>

          <!-- Space for additional content -->
          <div class="mb-6 p-6 bg-gray-100 min-h-[100px] text-gray-500">
            <h3>At a Glance</h3>
            <p v-if="selectedItem.language" class="text-[#79a38d] text-xl font-bold pt-2">Languages</p>
            <p v-if="selectedItem.language" class="text-[#383938] text-xl">{{ selectedItem.language }}</p>
            <p v-if="selectedItem.temporalCoverage" class="text-[#79a38d] text-xl font-bold pt-2">Temporal coverage</p>
            <p v-if="selectedItem.temporalCoverage" class="text-[#383938] text-xl">{{ selectedItem.temporalCoverage }}
            </p>
            <p v-if="selectedItem.license" class="text-[#79a38d] text-xl font-bold pt-2">Access permissions</p>
            <p v-if="selectedItem.license" class="text-[#383938] text-xl">{{ selectedItem.license }}</p>
          </div>

          <div
            v-if="selectedItem.title === 'A COrpus of Oz Early English (COOEE)' || selectedItem.title === 'Farms to Freeways Example Dataset' || selectedItem.title === 'AusReddit aggregated data - Collection' || selectedItem.title === 'Australian Twittersphere (AuTS) aggregated data - Collection'">
            <h3>Preview Collection</h3>
            <p class="text-xl text-gray-600 mb-6">Explore the collection content using Jupyter Notebooks</p>
            <div v-if="selectedItem.title === 'A COrpus of Oz Early English (COOEE)'" class="pb-6">
              <div class="flex flex-wrap gap-3">
                <a :href="props.notebook.cooeeArdc" :target="isExternal(props.notebook.cooeeArdc) ? '_blank' : '_self'"
                  :rel="isExternal(props.notebook.cooeeArdc) ? 'noopener noreferrer' : null"
                  class="inline-block bg-[#79a38d] hover:bg-opacity-80 text-white text-xl font-bold px-6 py-3 rounded-lg text-center min-w-[210px]">
                  <span class="block">ARDC BinderHub</span>
                  <span class="block text-sm font-normal opacity-90">(Authentication required)</span>
                </a>
                <a :href="props.notebook.cooeePublic"
                  :target="isExternal(props.notebook.cooeePublic) ? '_blank' : '_self'"
                  :rel="isExternal(props.notebook.cooeePublic) ? 'noopener noreferrer' : null"
                  class="inline-block bg-[#79a38d] hover:bg-opacity-80 text-white text-xl font-bold px-6 py-3 rounded-lg text-center min-w-[210px]">
                  <span class="block">MyBinder</span>
                  <span class="block text-sm font-normal opacity-90">(Public)</span>
                </a>
              </div>
            </div>
            <div v-if="selectedItem.title === 'Farms to Freeways Example Dataset'" class="pb-6">
              <div class="flex flex-wrap gap-3">
                <a :href="props.notebook.f2fArdc" :target="isExternal(props.notebook.f2fArdc) ? '_blank' : '_self'"
                  :rel="isExternal(props.notebook.f2fArdc) ? 'noopener noreferrer' : null"
                  class="inline-block bg-[#79a38d] hover:bg-opacity-80 text-white text-xl font-bold px-6 py-3 rounded-lg text-center min-w-[210px]">
                  <span class="block">ARDC BinderHub</span>
                  <span class="block text-sm font-normal opacity-90">(Authentication required)</span>
                </a>
                <a :href="props.notebook.f2fPublic" :target="isExternal(props.notebook.f2fPublic) ? '_blank' : '_self'"
                  :rel="isExternal(props.notebook.f2fPublic) ? 'noopener noreferrer' : null"
                  class="inline-block bg-[#79a38d] hover:bg-opacity-80 text-white text-xl font-bold px-6 py-3 rounded-lg text-center min-w-[210px]">
                  <span class="block">MyBinder</span>
                  <span class="block text-sm font-normal opacity-90">(Public)</span>
                </a>
              </div>
            </div>
            <div v-if="selectedItem.title === 'AusReddit aggregated data - Collection'" class="pb-6">
              <div class="flex flex-wrap gap-3">
                <a :href="props.notebook.ausredditArdc"
                  :target="isExternal(props.notebook.ausredditArdc) ? '_blank' : '_self'"
                  :rel="isExternal(props.notebook.ausredditArdc) ? 'noopener noreferrer' : null"
                  class="inline-block bg-[#79a38d] hover:bg-opacity-80 text-white text-xl font-bold px-6 py-3 rounded-lg text-center min-w-[210px]">
                  <span class="block">ARDC BinderHub</span>
                  <span class="block text-sm font-normal opacity-90">(Authentication required)</span>
                </a>
                <a :href="props.notebook.ausredditPublic"
                  :target="isExternal(props.notebook.ausredditPublic) ? '_blank' : '_self'"
                  :rel="isExternal(props.notebook.ausredditPublic) ? 'noopener noreferrer' : null"
                  class="inline-block bg-[#79a38d] hover:bg-opacity-80 text-white text-xl font-bold px-6 py-3 rounded-lg text-center min-w-[210px]">
                  <span class="block">MyBinder</span>
                  <span class="block text-sm font-normal opacity-90">(Public)</span>
                </a>
              </div>
            </div>
            <div v-if="selectedItem.title === 'Australian Twittersphere (AuTS) aggregated data - Collection'"
              class="pb-6">
              <div class="flex flex-wrap gap-3">
                <a :href="props.notebook.twittersphereArdc"
                  :target="isExternal(props.notebook.twittersphereArdc) ? '_blank' : '_self'"
                  :rel="isExternal(props.notebook.twittersphereArdc) ? 'noopener noreferrer' : null"
                  class="inline-block bg-[#79a38d] hover:bg-opacity-80 text-white text-xl font-bold px-6 py-3 rounded-lg text-center min-w-[210px]">
                  <span class="block">ARDC BinderHub</span>
                  <span class="block text-sm font-normal opacity-90">(Authentication required)</span>
                </a>
                <a :href="props.notebook.twitterspherePublic"
                  :target="isExternal(props.notebook.twitterspherePublic) ? '_blank' : '_self'"
                  :rel="isExternal(props.notebook.twitterspherePublic) ? 'noopener noreferrer' : null"
                  class="inline-block bg-[#79a38d] hover:bg-opacity-80 text-white text-xl font-bold px-6 py-3 rounded-lg text-center min-w-[210px]">
                  <span class="block">MyBinder</span>
                  <span class="block text-sm font-normal opacity-90">(Public)</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Link button section -->
        <div class="bg-[#79a38d] px-8 py-6 mt-auto">
          <h3 class="text-white mb-4">Access the full collection</h3>
          <a :href="portalLink" :target="isExternal(portalLink) ? '_blank' : '_self'"
            :rel="isExternal(portalLink) ? 'noopener noreferrer' : null"
            class="inline-block bg-white hover:bg-opacity-80 text-[#79a38d] text-xl font-bold px-6 py-3 rounded-lg">
            LDaCA data portal
          </a>
        </div>
      </template>
    </div>
  </div>
</template>