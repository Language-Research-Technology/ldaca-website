<script setup>
import { useData } from 'vitepress'
import FeaturesBanner from './FeaturesBanner.vue'

const { theme, frontmatter } = useData()
const headerBgColor = theme.value.headerBgColor || '#383838'

const props = defineProps({
  backgroundImage: {
    type: String,
    default: '/images/black_patternback.svg'
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  }
})


</script>

<template>
  <!-- <FeaturesBanner /> -->
  <section class="p-0">
    <!-- Description -->
    <div
      class="text-left max-w-[1440px] mx-auto px-4 py-8 relative bg-cover bg-center bg-no-repeat rounded-none min-h-[200px]"
      :style="{ backgroundImage: `url(${backgroundImage})`, backgroundColor: headerBgColor }">
      <div class="absolute inset-0 rounded-none z-0"></div>
      <div class="max-w-[50%] relative z-10 xs:max-w-full">
        <h1 class="text-5xl font-bold m-0 text-white">{{ title || frontmatter.hero?.tagline }}</h1>
        <div class="text-lg my-4 mb-8 text-white/90 leading-relaxed" v-html="description || frontmatter.hero.description"></div>
      </div>
    </div>
  </section>
</template>
