<script setup>
const props = defineProps({
  logos: {
    type: Array,
    default: () => []
  }
})
</script>

<template>
  <div v-if="props.logos.length" class="mt-12 border-border">
    <h3 class="text-[1.3rem] font-bold text-lg mb-4 text-foreground uppercase text-[#393939] text-center">Partners</h3>
    <div class="flex items-center justify-center gap-8 flex-wrap">
      <a
        v-for="(logo, idx) in props.logos"
        :key="logo.href || logo.src || idx"
        :href="logo.href || '#'"
        target="_blank"
        class="opacity-100 hover:opacity-60 transition-opacity"
        :aria-label="logo.alt || 'Partner logo'"
      >
        <img
          v-if="logo.src"
          :src="logo.src"
          :alt="logo.alt || 'Partner logo'"
          class="h-20 w-auto"
        />
      </a>
    </div>
  </div>
</template>
