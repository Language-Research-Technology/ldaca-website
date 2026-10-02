<script setup>
import { resolveUrl } from '../lib/url'

const buttonColors = { bg: '#fffef8', text: '#79a38d' }

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
    <div class="flex items-center justify-between gap-8 px-10 bg-[#79a38d] rounded-none">
      <!-- TEXT -->
      <div class="flex-1 py-[2.5rem]">
        <h2 class="type-subsection-title mb-2 text-white">{{ heading }}</h2>
        <p class="type-lead text-white">{{ description }}</p>
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
    <div class="bg-[#79a38d] rounded-lg p-6 space-y-6 text-left">
      <div>
        <h2 class="type-subsection-title mb-2 text-white">{{ heading }}</h2>
        <p class="type-lead text-white">{{ description }}</p>
      </div>
      <a :href="buttonLink" target="_blank" rel="noopener noreferrer"
        :style="{ backgroundColor: buttonColors.bg, color: buttonColors.text }"
        class="type-button inline-flex items-center justify-center w-full p-4 rounded-lg transition-colors hover:opacity-80">
        {{ buttonText }}
      </a>
    </div>
  </div>
</template>
