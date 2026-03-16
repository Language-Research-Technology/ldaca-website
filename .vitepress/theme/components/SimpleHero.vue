<script setup>
import { useData } from 'vitepress'

const { theme } = useData()
const headerBgColor = theme.value.headerBgColor || '#383838'

const props = defineProps({
  backgroundImage: {
    type: String,
    default: '/images/GreenBackground.png'
  },
  title: {
    type: String,
    default: 'Title needed.'
  },
  description: {
    type: String,
    default: 'Description needed.'
  },
  breadcrumb: {
    type: String,
    default: ''
  }
})


</script>

<template>
  <section class="p-0">
    <!-- Full-width background -->
    <div class="relative w-full bg-cover bg-center bg-no-repeat min-h-[200px]"
      :style="{ backgroundImage: `url(${backgroundImage})`, backgroundColor: headerBgColor }">
      <!-- Content container -->
      <div class="max-w-[1280px] mx-auto px-4 py-8">
        <div class="max-w-[60%] relative z-10 xs:max-w-full">
          <p class="m-0 pb-10 text-white">{{ breadcrumb }}</p>
          <h1 class="m-0 pb-4 text-white">{{ title }}</h1>
          <subheading class=" my-4 mb-8 text-white/90 leading-relaxed" v-html="description"></subheading>
        </div>
      </div>
    </div>
  </section>
</template>
