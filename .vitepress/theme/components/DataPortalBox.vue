<script setup>
import { useData } from 'vitepress'
import { resolveUrl } from '../lib/url'
const { theme } = useData()
const buttonColors = theme.value.buttonColors || { bg: '#79A38D', text: '#ffffff' }

defineProps({
  heading: {
    type: String,
    required: true
  },
  description: {
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
  <!-- DESKTOP / LARGE SCREENS -->
  <div class="hidden lg:block max-w-[1184px] mx-auto py-8">
    <div class="flex items-center justify-between gap-8 py-4 px-8 bg-[#EAE4D6] bg-opacity-55 rounded-none">
      <!-- TEXT -->
      <div class="flex-1 py-[1.25rem]">
        <h2 class="type-page-title mb-2">{{ heading }}</h2>
        <p class="text-xl text-gray-600">{{ description }}</p>
      </div>
      <!-- BUTTON -->
      <div class="flex-shrink-0">
        <a :href="resolveUrl(buttonLink)" target="_blank" rel="noopener noreferrer"
          :style="{ backgroundColor: buttonColors.bg, color: buttonColors.text }"
          class="type-button inline-flex items-center justify-center p-5 rounded-lg transition-colors hover:opacity-80">
          {{ buttonText }}
        </a>
      </div>
    </div>
  </div>

  <!-- MOBILE / TABLET -->
  <div class="lg:hidden max-w-[512px] mx-auto py-8 px-6">
    <div class="bg-[#EAE4D6] bg-opacity-55 rounded-lg p-6 space-y-6 text-left">
      <div>
        <h2 class="type-page-title mb-2">{{ heading }}</h2>
        <p class="text-xl text-gray-600">{{ description }}</p>
      </div>
      <a :href="buttonLink" target="_blank" rel="noopener noreferrer"
        :style="{ backgroundColor: buttonColors.bg, color: buttonColors.text }"
        class="type-button inline-flex items-center justify-center w-full p-4 rounded-lg transition-colors hover:opacity-80">
        {{ buttonText }}
      </a>
    </div>
  </div>
</template>
