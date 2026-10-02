<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { ROCrate } from 'ro-crate'
import { resolveUrl } from '../lib/url'

const props = defineProps({
  heading: { type: String, default: '' },
  description: { type: String, default: '' },
  backgroundColor: {
    type: String,
    default: '#79a38d'
  },
  backgroundImage: {
    type: String,
    default: '/images/Collections_BG.png'
  },
  crateUrl: {
    type: String,
    default: ''
  },
  opacity: {
    type: Number,
    default: 100
  },
  buttonText: {
    type: String,
    default: 'Learn more'
  }
})

const softwareItems = ref([])
const loading = ref(false)
const error = ref('')
const selectedItem = ref(null)
const widgetLoading = ref(false)
const showWidgetModal = ref(false)
const currentPage = ref(1)
const perPage = 6

const firstValue = (v) => (Array.isArray(v) ? v[0] : v)

const extractUrlLikeValue = (value) => {
  const first = firstValue(value)
  if (!first) return ''
  if (typeof first === 'string') return first
  if (typeof first === 'object') return first.url || first['@id'] || ''
  return ''
}

const toRawGithubUrl = (value) => {
  const m = String(value).match(/^https:\/\/github\.com\/([^/]+)\/([^/]+)\/blob\/([^/]+)\/(.+)$/)
  if (!m) return value

  const owner = m[1]
  const repo = m[2]
  const ref = m[3]
  const path = m[4]
  return `https://raw.githubusercontent.com/${owner}/${repo}/${ref}/${path}`
}

const resolveAbsoluteUrl = (value, baseUrl = window.location.href) => {
  if (!value) return ''
  const normalized = toRawGithubUrl(String(value))

  try {
    return new URL(normalized, baseUrl).href
  } catch {
    return normalized
  }
}

const ensureTrailingSlash = (value) => (value.endsWith('/') ? value : `${value}/`)

const resolveImageUrl = (imageValue, crateBaseUrl, imageBase) => {
  const imagePath = extractUrlLikeValue(imageValue)
  if (!imagePath) return ''

  if (imageBase) {
    return resolveAbsoluteUrl(imagePath, imageBase)
  }

  return resolveAbsoluteUrl(imagePath, crateBaseUrl || window.location.href)
}

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

// Escape HTML before rendering text with v-html
const escapeHtml = (value = '') => {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

// Automatically turn URLs within text into clickable links
const renderLinks = (value = '') => {
  const text = escapeHtml(String(value || ''))

  const urlRegex = /(https?:\/\/[^\s<]+)/g

  return text.replace(urlRegex, (url) => {
    const trailing = url.match(/[.,;:!?)]*$/)?.[0] || ''
    const cleanUrl = url.slice(0, url.length - trailing.length)

    return `<a href="${cleanUrl}" target="_blank" rel="noopener noreferrer" class="text-[#79a38d] font-bold hover:underline hover:decoration-dotted hover:decoration-2 hover:underline-offset-2">${cleanUrl}</a>${trailing}`
  })
}

const hasSoftwareApplicationType = (entity) => {
  const types = Array.isArray(entity?.['@type'])
    ? entity['@type']
    : [entity?.['@type']].filter(Boolean)

  return types.some(type =>
    type === 'SoftwareApplication' ||
    type?.['@id'] === 'SoftwareApplication'
  )
}

const mapSoftwareItem = (item, crateBaseUrl, imageBase) => ({
  title: firstValue(item?.name) || item?.['@id'] || 'Untitled tool',
  description: firstValue(item?.description) || 'No description available',
  link: item?.url,
  programmingLanguage: joinValues(item?.programmingLanguage),
  author: joinValues(item?.author),
  publisher: joinValues(item?.publisher),
  dataFormat: joinValues(item?.['custom:dataFormat']),
  additionalNotes: joinValues(item?.['custom:additionalNotes']),
  codeURL: item?.['custom:codeURL'],
  guideURL: item?.['custom:guideURL'],
  creditText: item?.creditText,
  image: resolveImageUrl(item?.image, crateBaseUrl, imageBase)
})

const getSoftwareApplications = (crateData, crateBaseUrl, imageBase) => {
  if (!crateData) return []

  const crate = new ROCrate(crateData, { link: true })

  return crate.graph
    .filter(entity =>
      entity &&
      typeof entity === 'object' &&
      hasSoftwareApplicationType(entity)
    )
    .map(entity => mapSoftwareItem(entity, crateBaseUrl, imageBase))
}

const loadSoftwareItems = async () => {
  if (!props.crateUrl) {
    softwareItems.value = []
    loading.value = false
    error.value = 'No RO-Crate source was provided.'
    return
  }

  loading.value = true
  error.value = ''
  selectedItem.value = null
  currentPage.value = 1

  try {
    const base = ensureTrailingSlash(
      resolveAbsoluteUrl(props.crateUrl, window.location.href)
    )

    const metadataUrl = new URL('ro-crate-metadata.json', base).href

    const response = await fetch(metadataUrl)

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`)
    }

    const crateData = await response.json()
    const crateBaseUrl = metadataUrl
    const imageBase = base

    const items = getSoftwareApplications(
      crateData,
      crateBaseUrl,
      imageBase
    )

    softwareItems.value = items

    if (!items.length) {
      error.value = 'No SoftwareApplication entries were found in the provided RO-Crate.'
    }
  } catch (err) {
    console.error(err)
    softwareItems.value = []
    error.value = 'Error loading software from the provided RO-Crate.'
  } finally {
    loading.value = false
  }
}

const sortedSoftwareItems = computed(() =>
  [...softwareItems.value].sort((a, b) =>
    String(a.title || '').localeCompare(
      String(b.title || ''),
      undefined,
      {
        sensitivity: 'base',
        numeric: true
      }
    )
  )
)

const loaded = computed(() => softwareItems.value.length)

const totalPages = computed(() =>
  Math.max(1, Math.ceil(loaded.value / perPage))
)

const paginatedSoftwareItems = computed(() => {
  const start = (currentPage.value - 1) * perPage
  return sortedSoftwareItems.value.slice(start, start + perPage)
})

const startItem = computed(() => {
  if (loaded.value === 0) return 0
  return (currentPage.value - 1) * perPage + 1
})

const endItem = computed(() =>
  Math.min(currentPage.value * perPage, loaded.value)
)

const visiblePages = computed(() => {
  const pages = []
  const windowSize = 3

  let start = Math.max(1, currentPage.value - 1)
  let end = Math.min(totalPages.value, start + windowSize - 1)

  if (end - start + 1 < windowSize) {
    start = Math.max(1, end - windowSize + 1)
  }

  for (let p = start; p <= end; p++) {
    pages.push(p)
  }

  return pages
})

const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
  }
}

const prevPage = () => goToPage(currentPage.value - 1)
const nextPage = () => goToPage(currentPage.value + 1)

const truncateWords = (text, maxWords = 100) => {
  const words = String(text || '').trim().split(/\s+/)

  if (words.length <= maxWords) {
    return text || ''
  }

  return `${words.slice(0, maxWords).join(' ')}…`
}

const isExternal = (url) => {
  try {
    return new URL(url).origin !== window.location.origin
  } catch {
    return false
  }
}

const openWidget = (item) => {
  showWidgetModal.value = true
  widgetLoading.value = true
  selectedItem.value = item
  widgetLoading.value = false
}

const closeWidget = () => {
  showWidgetModal.value = false
  widgetLoading.value = false
  selectedItem.value = null
}

onMounted(() => {
  loadSoftwareItems()
})

watch(
  () => props.crateUrl,
  () => {
    loadSoftwareItems()
  }
)
</script>

<template>
  <section
    v-bind="$attrs"
    class="w-full py-10"
    :style="props.backgroundColor
      ? {
          backgroundColor: props.backgroundColor,
          opacity: `${props.opacity}%`
        }
      : {}"
  >
    <div class="max-w-[1024px] mx-auto px-4 sm:px-6 md:px-8 lg:px-2">

      <div class="w-full mb-8">
        <h1 class="mb-2 text-white">{{ heading }}</h1>
        <p class="text-white text-xl">{{ description }}</p>
      </div>

      <div
        v-if="!loading && !softwareItems.length"
        class="text-white text-lg"
      >
        {{ error || 'No tools available.' }}
      </div>

      <div
        v-else
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        <div
          v-for="(item, index) in paginatedSoftwareItems"
          :key="`${item.link}-${index}`"
          class="rounded-2xl shadow-sm overflow-hidden flex flex-col"
          :style="{
            backgroundImage: `url(${resolveUrl(props.backgroundImage)})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }"
        >
          <div class="p-5">
            <h3 class="mb-2 text-[#383938]">
              <button
                type="button"
                @click="openWidget(item)"
                class="text-left hover:underline hover:decoration-dotted hover:decoration-2 hover:underline-offset-8"
              >
                {{ item.title }}
              </button>
            </h3>

            <p class="text-[#383938]">
              {{ truncateWords(item.description, 40) }}
            </p>
          </div>

          <div class="mt-auto grid grid-cols-2 gap-2 p-2">
            <button
              @click="openWidget(item)"
              class="flex justify-center items-center w-full font-bold bg-[#393939] hover:bg-opacity-80 text-[#FFFEF8] px-4 py-3 rounded-xl"
            >
              <span class="text-lg">{{ buttonText }}</span>
            </button>

            <a
              v-if="item.link && item.link !== '#'"
              :href="item.link"
              :target="isExternal(item.link) ? '_blank' : '_self'"
              :rel="isExternal(item.link) ? 'noopener noreferrer' : null"
              class="flex justify-center items-center w-full font-bold bg-[#79a38d] hover:bg-opacity-90 text-[#FFFEF8] px-4 py-3 rounded-xl text-lg"
            >
              Try it out
            </a>
          </div>
        </div>
      </div>

      <div class="flex flex-col items-center mt-8 gap-3">

        <p v-if="loading" class="text-white text-lg">
          Loading software...
        </p>

        <div
          v-if="!loading && softwareItems.length"
          class="text-white text-lg"
        >
          {{ startItem }}–{{ endItem }} of {{ loaded }}
        </div>

        <p
          v-if="error && !loading && !softwareItems.length"
          class="text-red-200"
        >
          {{ error }}
        </p>

        <div
          v-if="totalPages > 1 && softwareItems.length"
          class="flex items-center gap-2"
        >
          <button
            @click="prevPage"
            :disabled="currentPage === 1"
            class="px-3 py-2 rounded-md bg-[#5e7f6e] text-white disabled:opacity-40"
          >
            ‹
          </button>

          <button
            v-for="p in visiblePages"
            :key="p"
            @click="goToPage(p)"
            class="px-3 py-2 rounded-md text-white"
            :class="currentPage === p
              ? 'bg-[#2f3f38]'
              : 'bg-[#5e7f6e] hover:bg-[#4a6a5c]'"
          >
            {{ p }}
          </button>

          <button
            @click="nextPage"
            :disabled="currentPage === totalPages"
            class="px-3 py-2 rounded-md bg-[#5e7f6e] text-white disabled:opacity-40"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- Tool details modal -->
  <div
    v-if="showWidgetModal"
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
  >
    <div
      class="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto flex flex-col"
    >
      <div class="sticky top-0 flex justify-end px-6 py-4 bg-white">
        <button
          @click="closeWidget"
          class="text-gray-500 hover:text-gray-700 text-2xl font-bold"
        >
          ✕
        </button>
      </div>

      <div
        v-if="widgetLoading"
        class="px-8 pb-8 flex-1 flex items-center justify-center"
      >
        <p class="text-gray-600 text-xl">
          Loading tool details...
        </p>
      </div>

      <template v-else>
        <div class="px-8 py-4 flex-1">

          <h2 class="mb-6 text-[#383938]">
            {{ selectedItem?.title }}
          </h2>

          <p class="text-xl text-gray-600 mb-6">
            {{ selectedItem?.description }}
          </p>

          <!-- Tool links -->
          <div class="mb-6 flex flex-col md:flex-row gap-6 md:justify-between">

            <a
              v-if="selectedItem?.link && selectedItem.link !== '#'"
              :href="selectedItem.link"
              :target="isExternal(selectedItem.link) ? '_blank' : '_self'"
              :rel="isExternal(selectedItem.link) ? 'noopener noreferrer' : null"
              class="inline-flex justify-center items-center w-full md:flex-1 bg-[#79a38d] hover:bg-opacity-90 text-[#FFFEF8] text-2xl font-bold px-6 py-4 rounded-xl"
            >
              Try it out
            </a>

            <a
              v-if="selectedItem?.codeURL"
              :href="selectedItem.codeURL"
              :target="isExternal(selectedItem.codeURL) ? '_blank' : '_self'"
              :rel="isExternal(selectedItem.codeURL) ? 'noopener noreferrer' : null"
              class="inline-flex justify-center items-center w-full md:flex-1 bg-[#393939] hover:bg-opacity-90 text-[#FFFEF8] text-2xl font-bold px-6 py-4 rounded-xl"
            >
              Get source code
            </a>

            <a
              v-if="selectedItem?.guideURL"
              :href="selectedItem.guideURL"
              :target="isExternal(selectedItem.guideURL) ? '_blank' : '_self'"
              :rel="isExternal(selectedItem.guideURL) ? 'noopener noreferrer' : null"
              class="inline-flex justify-center items-center w-full md:flex-1 border border-[#393939] bg-white hover:bg-gray-50 text-[#393939] text-2xl font-bold px-6 py-4 rounded-xl"
            >
              Help docs
            </a>

          </div>

          <!-- At a glance -->
          <div class="mb-6 p-6 bg-gray-100 min-h-[80px] text-gray-500">

            <h3>At a glance</h3>

            <p
              v-if="selectedItem?.publisher"
              class="text-[#79a38d] text-xl font-bold pt-2"
            >
              Institution/Team
            </p>

            <p
              v-if="selectedItem?.publisher"
              class="text-[#383938] text-xl"
            >
              {{ selectedItem.publisher }}
            </p>

            <p
              v-if="selectedItem?.author"
              class="text-[#79a38d] text-xl font-bold pt-2"
            >
              Developers
            </p>

            <p
              v-if="selectedItem?.author"
              class="text-[#383938] text-xl"
            >
              {{ selectedItem.author }}
            </p>

            <p
              v-if="selectedItem?.programmingLanguage"
              class="text-[#79a38d] text-xl font-bold pt-2"
            >
              Programming language/Environment
            </p>

            <p
              v-if="selectedItem?.programmingLanguage"
              class="text-[#383938] text-xl"
            >
              {{ selectedItem.programmingLanguage }}
            </p>

            <p
              v-if="selectedItem?.dataFormat"
              class="text-[#79a38d] text-xl font-bold pt-2"
            >
              Data format required
            </p>

            <p
              v-if="selectedItem?.dataFormat"
              class="text-[#383938] text-xl"
            >
              {{ selectedItem.dataFormat }}
            </p>

            <!-- Preferred citation: URLs automatically become links -->
            <p
              v-if="selectedItem?.creditText"
              class="text-[#79a38d] text-xl font-bold pt-2"
            >
              Preferred citation
            </p>

            <p
              v-if="selectedItem?.creditText"
              class="text-[#383938] text-xl"
              v-html="renderLinks(selectedItem.creditText)"
            ></p>

            <!-- Additional notes: URLs automatically become links -->
            <p
              v-if="selectedItem?.additionalNotes"
              class="text-[#79a38d] text-xl font-bold pt-2"
            >
              Additional notes
            </p>

            <p
              v-if="selectedItem?.additionalNotes"
              class="text-[#383938] text-xl"
              v-html="renderLinks(selectedItem.additionalNotes)"
            ></p>

          </div>
        </div>

        <!-- Tool preview -->
        <div
          v-if="selectedItem?.image"
          class="pb-6 px-8 min-h-[100px] text-gray-500"
        >
          <h3 class="pb-4">Tool preview</h3>

          <img
            :src="selectedItem.image"
            :alt="selectedItem.title"
            class="w-full h-auto pb-8"
          >
        </div>

      </template>
    </div>
  </div>
</template>