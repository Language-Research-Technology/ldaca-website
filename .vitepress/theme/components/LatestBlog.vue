<script setup>
import { ref, computed } from 'vue'

let blogPosts = []
try {
  // Not recognising the file path, to fix
  const modules = import.meta.glob('./content/news/posts/**/index.md', { eager: true })
  blogPosts = Object.entries(modules)
    .map(([path, mod]) => {
      const fm = mod.frontmatter || {}
      return {
        title: fm.title || '',
        description: fm.description || '',
        image: fm.image || 'https://placehold.co/1200x700',
        link: path.replace('/content', '').replace('/index.md', ''),
        date: fm.date || ''
      }
    })
    .filter(post => post.title && post.date && !post.draft)
    console.log('Loaded blog posts:', blogPosts)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
} catch (e) {
  // fallback to static
  blogPosts = [
    {
      title: 'Building ethical language data pipelines',
      description: 'How we partner with communities to design consent-aware, reproducible workflows for language collections.',
      image: 'https://placehold.co/1200x700',
      link: '/posts/ethical-language-pipelines',
      date: '2025-01-01'
    },
    {
      title: 'From archive to access: a case study',
      description: 'Digitising fragile materials, adding metadata, and launching a portal experience for language learners.',
      image: 'https://placehold.co/1200x700',
      link: '/posts/archive-to-access',
      date: '2025-01-02'
    }
  ]
}

const latestPosts = computed(() => blogPosts.slice(0, 3))
</script>

<template>
  <section class="max-w-[1440px] mx-auto py-10">
    <div class="mb-8 text-left">
      <h1 class="">LATEST ON THE BLOG</h1>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <article
        v-for="item in latestPosts"
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
            <h3 class="">{{ item.title }}</h3>
            <p class="mt-2">{{ item.description }}</p>
            <a :href="item.link" class="mt-3 inline-flex items-center font-bold hover:underline hover:decoration-dotted hover:decoration-2 hover:underline-offset-">
              Read blog ➔
            </a>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
