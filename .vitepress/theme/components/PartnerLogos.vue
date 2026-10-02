<script setup>
import { resolveUrl } from '../lib/url'

const props = defineProps({
  logos: {
    type: Array,
    default: () => []
  }
})
</script>

<template>
  <div v-if="props.logos.length" class="mt-12 border-border">
    
    <div class="flex items-center justify-center gap-8 flex-wrap">
      <h3 class="type-label-heading mb-4 text-[#393939]">
        Partners
      </h3>

      <a
        v-for="(logo, idx) in props.logos"
        :key="logo.href || logo.src || idx"
        :href="resolveUrl(logo.href) || '#'"
        target="_blank"
        class="opacity-100 hover:opacity-60 transition-opacity"
        :aria-label="logo.alt || 'Partner logo'"
      >
        <img
          v-if="logo.src"
          :src="resolveUrl(logo.src)"
          :alt="logo.alt || 'Partner logo'"
          class="h-14 w-auto"
        />
      </a>
    </div>

  </div>
</template>