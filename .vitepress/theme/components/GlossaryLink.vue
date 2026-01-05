<script setup lang="ts">
defineProps<{
  display: string
  id: string
}>()
</script>

<template>
  <a 
    :href="`/resources/glossary/#${id}`"
    class="text-blue-600 hover:text-blue-800 underline hover:underline transition-colors"
  >
    {{ display }}
  </a>
</template>

<style scoped>
a {
  text-decoration: underline;
  cursor: pointer;
}

a:hover {
  color: var(--vp-c-brand-dark);
}
</style>
