<script setup>
const props = defineProps({
  items: {
    type: Array,
    required: false,
    default: () => [
      {
        title: 'Building ethical language data pipelines',
        description: 'How we partner with communities to design consent-aware, reproducible workflows for language collections.',
        image: 'https://placehold.co/1200x700',
        link: '/posts/ethical-language-pipelines'
      },
      {
        title: 'From archive to access: a case study',
        description: 'Digitising fragile materials, adding metadata, and launching a portal experience for language learners.',
        image: 'https://placehold.co/1200x700',
        link: '/posts/archive-to-access'
      }
    ]
  }
})
</script>

<template>
  <section class="max-w-[1440px] mx-auto px-6 py-16">
    <div class="mb-8 text-center">
      <h2 class="text-3xl font-bold text-gray-900">LATEST ON THE BLOG</h2>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <article
        v-for="item in props.items"
        :key="item.title"
        class="relative overflow-hidden rounded-none shadow-lg h-80"
      >
        <div
          class="absolute inset-0 bg-cover bg-center"
          :style="{ backgroundImage: `url(${item.image})` }"
          aria-hidden="true"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10" />
        <div class="relative h-full flex items-end">
          <div class="m-6 p-5 bg-white/90 backdrop-blur rounded-none shadow">
            <h3 class="text-xl font-semibold text-gray-900">{{ item.title }}</h3>
            <p class="mt-2 text-sm text-gray-700">{{ item.description }}</p>
            <a :href="item.link" class="mt-3 inline-flex items-center text-blue-700 font-semibold hover:text-blue-900">
              Read blog →
            </a>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
