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
    <div class="max-w-[1280px] mx-auto text-left px-4 sm:px-6 md:px-8 lg:px-2">

      <!-- Heading -->
      <h1 v-if="heading" class="mb-4">
        {{ heading }}
      </h1>

      <!-- Description -->
      <p v-if="description" class="my-4 text-gray-600 text-xl">
        {{ description }}
      </p>

      <!-- Logos row -->
      <div class="flex flex-wrap lg:flex-nowrap items-center justify-center lg:justify-between gap-6 pt-8 w-full">
        <a v-for="item in items" :key="item.title" :href="item.link"
          :target="isExternal(item.link) ? '_blank' : '_self'"
          :rel="isExternal(item.link) ? 'noopener noreferrer' : null"
          class="flex items-center justify-center transition hover:opacity-80 lg:flex-1 min-w-0">
          <img :src="item.image" :alt="item.title" class="h-20 sm:h-28 lg:h-40 object-contain max-w-full" />
        </a>
      </div>

    </div>
  </section>
</template>