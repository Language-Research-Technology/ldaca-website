<script setup>
import { useData } from 'vitepress'
import { ref, computed } from 'vue'
import FeaturesBanner from './FeaturesBanner.vue'

const { theme } = useData()
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
    default: 'title'
  },
  tagline: {
    type: String,
    default: 'tagline'
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

const isPlaying = ref(false)

const iframeSrc = ref('') // initially empty

const playVideo = () => {
  iframeSrc.value = `https://www.youtube.com/embed/${randomVideo.value}?autoplay=1&controls=0&modestbranding=1&rel=0`
  isPlaying.value = true
}

// Select random video from youtubeVideos array
const randomVideo = computed(() => {
  if (props.videos.length === 0) return "dQw4w9WgXcQ"
  return props.videos[Math.floor(Math.random() * props.videos.length)]
})

// Build the video URL with YouTube parameters
const videoUrl = computed(() => {
  return `https://www.youtube.com/embed/${randomVideo.value}?modestbranding=1&rel=0&showinfo=0&controls=0`
})

const thumbnailUrl = computed(() => {
  return `https://img.youtube.com/vi/${randomVideo.value}/maxresdefault.jpg`
})

</script>

<template>
  <FeaturesBanner />

  <section class="w-full" :style="{
    backgroundColor: headerBgColor,
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: 'right center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto 100%'
  }">

    <!-- DESKTOP / LARGE SCREEN -->
    <div class="hidden xl:flex max-w-[1440px] mx-auto px-8 py-16 items-center gap-12">
      <!-- LEFT: Content -->
      <div class="flex-1 max-w-[calc(100%-814px)]">
        <h1 class="m-0 text-white">{{ tagline }}</h1>
        <div class="text-lg my-6 text-white/90 leading-relaxed" v-html="description"></div>
        <a :href="buttonLink" target="_blank" rel="noopener noreferrer"
          :style="{ backgroundColor: buttonColors.bg, color: buttonColors.text }"
          class="inline-block px-6 py-4 rounded-lg font-semibold transition hover:opacity-90">
          {{ buttonText }}
        </a>
      </div>

      <!-- RIGHT: Video -->
      <div class="relative w-[814px] aspect-[16/9]">
        <!-- Thumbnail / overlay -->
        <div v-if="!isPlaying" class="absolute inset-0 bg-black flex items-center justify-center cursor-pointer"
          @click="playVideo">
          <img :src="thumbnailUrl" alt="Video thumbnail" class="absolute inset-0 w-full h-full object-cover" />
          <div
            class="relative z-10 w-20 h-20 bg-[#79a38d] rounded-full flex items-center justify-center shadow-lg hover:bg-[#8faf9b]">
            <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4 2v20l18-10L4 2z" />
            </svg>
          </div>
        </div>

        <!-- Video iframe -->
        <iframe v-if="isPlaying" :src="iframeSrc" title="Hero Video" frameborder="0" allowfullscreen
          class="w-full h-full"></iframe>
      </div>
    </div>

    <!-- MOBILE / TABLET -->
    <div class="xl:hidden mx-auto px-6 py-12 space-y-8">
      <div v-for="(item, index) in [{ tagline, description, videoUrl }]" :key="index"
        class="bg-gray-800 rounded-lg p-6 shadow-sm">
        <h1 class="text-2xl font-bold text-white mb-4">{{ item.tagline }}</h1>
        <div class="text-white/90 leading-relaxed mb-4" v-html="item.description"></div>
        <iframe :src="item.videoUrl" title="Hero Video" frameborder="0" allowfullscreen
          class="w-full aspect-[16/9] rounded"></iframe>
      </div>
    </div>

  </section>
</template>
