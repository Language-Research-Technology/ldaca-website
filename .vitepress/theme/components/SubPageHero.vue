<script setup>
import { useData } from 'vitepress'

const { theme, frontmatter } = useData()
const headerBgColor = theme.value.headerBgColor || '#383838'

const props = defineProps({
  backgroundImage: {
    type: String,
    default: '/images/black_patternback.svg'
  },
  title: {
    type: String,
    default: 'Title needed.'
  },
  description: {
    type: String,
    default: 'Description needed.'
  }
})


</script>

<template>
  <section class="p-0">
    <!-- Full-width background -->
    <div class="relative w-full bg-cover bg-center bg-no-repeat min-h-[200px]"
      :style="{ backgroundImage: `url(${backgroundImage})`, backgroundColor: headerBgColor }">
      <!-- Content container -->
      <div class="max-w-[1440px] mx-auto px-4 py-8">
        <div class="max-w-[50%] relative z-10 xs:max-w-full">
          <h1 class="text-5xl font-bold m-0 text-white">{{ title }}</h1>
          <div class="text-lg my-4 mb-8 text-white/90 leading-relaxed" v-html="description"></div>
        </div>
      </div>
    </div>
  </section>
</template>
