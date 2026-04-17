<script setup>
import { computed } from 'vue'
import { data as posts } from '../lib/posts.data'
import { pagesData } from 'virtual:pages-data'

const props = defineProps({
  heading: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: ''
  },
  viewAll: {
    type: String,
    default: ''
  },
  buttonText: {
    type: String,
    default: 'Read more'
  },
  items: {
    type: Array,
    required: false,
    default: () => []
  }
})

const getPostDate = (post) => {
  const timestamp = Date.parse(post.frontmatter?.date || '')
  return Number.isNaN(timestamp) ? 0 : timestamp
}

const presentationItems = computed(() => {
  return posts
    .filter((post) => {
      return !post.frontmatter?.draft && post.url.startsWith('/resources/posts') && post.frontmatter?.type === props.type
    })
    .sort((a, b) => getPostDate(b) - getPostDate(a))
    .slice(0, 2)
    .map((post) => ({
      title: post.frontmatter?.title ?? 'Untitled item',
      description: post.frontmatter?.description ?? '',
      image: post.frontmatter?.image ?? '/images/Petroglyph_Pattern.svg',
      link: post.url
    }))
})

const normalizedItems = computed(() => {
  const sourceItems = props.type ? presentationItems.value : props.items

  return sourceItems.map((rawItem) => {
    const pageMetadata = rawItem.link ? pagesData[rawItem.link] : null

    return {
      title: rawItem.title ?? pageMetadata?.title ?? 'Untitled item',
      description: rawItem.description ?? pageMetadata?.description ?? '',
      image: rawItem.image ?? pageMetadata?.image ?? '/images/Petroglyph_Pattern.svg',
      link: rawItem.link ?? '#'
    }
  }).slice(0, 2)
})

const isExternal = (url) => {
  try {
    return new URL(url).origin !== window.location.origin
  } catch {
    return false
  }
}
</script>

<template>
  <section class="max-w-[1280px] mx-auto py-10 px-4 sm:px-6 md:px-8 lg:px-2">

    <div class="mb-8 text-left flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <h1>{{ props.heading }}</h1>
      <a v-if="props.viewAll" :href="props.viewAll"
        class="inline-flex items-center justify-center w-fit px-5 py-3 rounded-lg bg-[#79a38d] text-white font-bold hover:opacity-80 transition-opacity">
        View all
      </a>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">

      <article v-for="item in normalizedItems" :key="`${item.link}-${item.title}`" class="relative overflow-hidden shadow-xl h-[700px]">

        <!-- background image link -->
        <a :href="item.link" :target="isExternal(item.link) ? '_blank' : '_self'"
          :rel="isExternal(item.link) ? 'noopener noreferrer' : null" class="absolute inset-0 block"
          :aria-label="item.title">
          <div class="absolute inset-0 bg-cover bg-center bg-[#79a38d] opacity-85"
            :style="{ backgroundImage: `url(${item.image})` }" aria-hidden="true" />
        </a>

        <!-- content -->
        <div class="relative z-10 h-full flex items-end pointer-events-none">
          <div class="m-6 p-5 bg-[#393939] shadow pointer-events-auto">

            <h3 class="text-white">
              {{ item.title }}
            </h3>

            <p class="mt-2 text-white">
              {{ item.description }}
            </p>

            <a :href="item.link" :target="isExternal(item.link) ? '_blank' : '_self'"
              :rel="isExternal(item.link) ? 'noopener noreferrer' : null"
              class="mt-3 inline-flex items-center text-white text-xl font-bold hover:underline hover:decoration-dotted hover:decoration-2 hover:underline-offset-8">
              {{ props.buttonText }}
            </a>
            <a class="font-sans font-bold text-white text-xl"> →</a>

          </div>
        </div>

      </article>

    </div>
  </section>
</template>
