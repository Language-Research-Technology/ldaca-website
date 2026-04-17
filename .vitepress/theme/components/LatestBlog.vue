<script setup>
import { computed } from 'vue'
import { data as posts } from '../lib/posts.data'

const latestPosts = computed(() => {
  return posts
    .filter(post => !post.frontmatter?.draft)
    .sort((a, b) => new Date(b.frontmatter?.date) - new Date(a.frontmatter?.date))
    .slice(0, 2)
})

const getImage = (post) =>
  post.frontmatter?.image ?? '/images/Petroglyph_Pattern.svg'
</script>

<template>
  <section class="max-w-[1280px] mx-auto py-10 px-4 sm:px-6 md:px-8 lg:px-2">

    <div class="mb-8 text-left">
      <h1>LATEST ON THE BLOG</h1>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">

      <article v-for="post in latestPosts" :key="post.url" class="relative overflow-hidden shadow-xl h-[700px]">

        <!-- background image link -->
        <a :href="post.url" class="absolute inset-0 block" :aria-label="post.frontmatter.title">
          <div class="absolute inset-0 bg-cover bg-center bg-[#79a38d] opacity-85"
            :style="{ backgroundImage: `url(${getImage(post)})` }" aria-hidden="true" />
        </a>

        <!-- content -->
        <div class="relative z-10 h-full flex items-end pointer-events-none">
          <div class="m-6 p-5 bg-[#393939] shadow pointer-events-auto">

            <h3 class="text-white">
              {{ post.frontmatter.title }}
            </h3>

            <p class="mt-2 text-white">
              {{ post.frontmatter.description }}
            </p>

            <a :href="post.url"
              class="mt-3 inline-flex items-center text-white text-xl font-bold hover:underline hover:decoration-dotted hover:decoration-2 hover:underline-offset-8">
              Read blog
            </a>
            <a class="font-sans font-bold text-white text-xl"> →</a>

          </div>
        </div>

      </article>

    </div>
  </section>
</template>
