<script setup>
const props = defineProps({
  id: {
    type: String,
    default: ''
  },
  heading: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  items: {
    type: Array,
    default: () => []
  },
  backgroundColor: {
    type: String,
    default: ''
  },
  opacity: {
    type: Number,
    default: 100
  }
})

const isExternal = (url) => {
  try {
    return new URL(url).origin !== window.location.origin
  } catch {
    return false
  }
}
</script>

<template>
  <section :id="id" class="w-full py-12" :style="backgroundColor
    ? { backgroundColor: backgroundColor, opacity: `${opacity}%` }
    : {}">
    <div class="max-w-[1280px] mx-auto text-left">

      <!-- Heading -->
      <h1 v-if="heading" class="mb-4">
        {{ heading }}
      </h1>

      <!-- Description -->
      <p v-if="description" class="my-4 text-gray-600 text-xl">
        {{ description }}
      </p>

      <!-- Logos row -->
      <div class="flex flex-wrap items-center justify-between gap-2 pt-8">
        <a v-for="item in items" :key="item.title" :href="item.link"
          :target="isExternal(item.link) ? '_blank' : '_self'"
          :rel="isExternal(item.link) ? 'noopener noreferrer' : null"
          class="flex items-center justify-center transition hover:opacity-80">
          <img :src="item.image" :alt="item.title" class="h-40 object-contain" />
        </a>
      </div>

    </div>
  </section>
</template>