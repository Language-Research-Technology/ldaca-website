<script setup>
import { useData } from 'vitepress'
// Use VitePress's markdown renderer
const { theme } = useData()
const buttonColors = theme.value.buttonColors || { bg: '#79A38D', text: '#ffffff' }

defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  },
  buttonText: {
    type: String,
    required: true
  },
  buttonLink: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="max-w-[1440px] mx-auto px-6 py-12">
    <div class="flex items-center justify-between gap-8 p-8 bg-gray-100 rounded-none border border-gray-200">
      <div class="flex-1">
        <h2 class="text-3xl font-bold text-gray-900 mb-2">{{ title }}</h2>
        <p class="text-lg text-gray-600">{{ subtitle }}</p>
      </div>
      <div class="flex-shrink-0">
        <a 
          :href="buttonLink"
          target="_blank"
          rel="noopener noreferrer"
          :style="{ backgroundColor: buttonColors.bg, color: buttonColors.text }"
          class="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-none transition-colors hover:opacity-90"
        >
          {{ buttonText }}
        </a>
      </div>
    </div>
  </div>
</template>
