<script setup>
import { useData } from 'vitepress'
import { computed } from 'vue'
import FeaturesBanner from './FeaturesBanner.vue'

const { theme, frontmatter } = useData()
const buttonColors = theme.value.buttonColors || { bg: '#79A38D', text: '#ffffff' }
const headerBgColor = theme.value.headerBgColor || '#383838'

const props = defineProps({
  videos: {
    type: Array,
    required: false,
    default: () => ["dQw4w9WgXcQ"]
  },
  backgroundImage: {
    type: String,
    default: '/images/black_patternback.svg'
  },
  title: {
    type: String,
    default: 'Welcome to ldaca'
  },
  description: {
    type: String,
    default: 'Discover our innovative approach and learn more about what we do.'
  },
  buttonText: {
    type: String,
    default: 'Find out more'
  },
  buttonLink: {
    type: String,
    default: '/about'
  }
})

// Select random video from youtubeVideos array
const randomVideo = computed(() => {
  if (props.videos.length === 0) return "dQw4w9WgXcQ"
  return props.videos[Math.floor(Math.random() * props.videos.length)]
})

// Build the video URL with YouTube parameters
const videoUrl = computed(() => {
  return `https://www.youtube.com/embed/${randomVideo.value}?modestbranding=1&rel=0&showinfo=0&controls=0`
})


</script>

<template>
  <FeaturesBanner />
  <section class="p-0">
    <!-- Video Container - Cinemascope 2.39:1 -->
    <div class="relative w-full max-w-[1440px] mx-auto mb-0 overflow-hidden rounded-none bg-muted"
      style="aspect-ratio: 2.39 / 1">
      <iframe :src="videoUrl" title="Hero Video" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
        class="absolute top-0 left-0 w-full h-full border-none"></iframe>
    </div>

    <!-- Description and Button -->
    <div
      class="text-left max-w-[1440px] mx-auto px-4 py-8 relative bg-cover bg-center bg-no-repeat rounded-none min-h-[200px]"
      :style="{ backgroundImage: `url(${backgroundImage})`, backgroundColor: headerBgColor }">
      <div class="absolute inset-0 rounded-none z-0"></div>
      <div class="max-w-[50%] relative z-10 xs:max-w-full">
        <h1 class="text-3xl font-bold m-0 text-white">{{ frontmatter.hero.tagline }}</h1>
        <div class="text-lg my-4 mb-8 text-white/90 leading-relaxed" v-html="frontmatter.hero.description"></div>
        <a :href="buttonLink" target="_blank" rel="noopener noreferrer" :style="{ backgroundColor: buttonColors.bg, color: buttonColors.text }"
          class="inline-block px-6 py-3 rounded-none font-semibold no-underline transition-colors hover:opacity-90">
          {{ buttonText }}
        </a>
      </div>
    </div>
  </section>
</template>
