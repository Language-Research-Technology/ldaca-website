<script setup>
const props = defineProps({
  logos: {
    type: Array,
    default: () => []
  }
})
</script>

<template>
  <div v-if="props.logos.length" class="mt-12 pt-8 border-t border-border">
    <div class="flex items-center justify-center gap-8 flex-wrap">
      <a
        v-for="(logo, idx) in props.logos"
        :key="logo.href || logo.src || idx"
        :href="logo.href || '#'"
        class="opacity-60 hover:opacity-100 transition-opacity"
        :aria-label="logo.alt || 'Partner logo'"
      >
        <img
          v-if="logo.src"
          :src="logo.src"
          :alt="logo.alt || 'Partner logo'"
          class="h-8 w-auto"
        />
      </a>
    </div>
  </div>
</template>
