<script setup>
import { computed } from 'vue'
import BlogPostsList from './BlogPostsList.vue'
import { data as posts } from '../lib/posts.data'

const postsData = computed(() => {
  return posts.map(post => ({
    title: post.frontmatter?.title || 'Untitled',
    date: post.frontmatter?.date || new Date().toISOString(),
    slug: post.frontmatter?.slug || post.url,
    url: post.url,
    description: post.frontmatter?.description || '',
    tags: post.frontmatter?.tags || [],
    author: post.frontmatter?.author || ''
  }))
})
</script>

<template>
  <BlogPostsList :posts="postsData" />
</template>
