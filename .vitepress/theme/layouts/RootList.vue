<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import { data as allPages } from '../lib/sections.data'

const { page } = useData()

const section = computed(() => {
  const rp = page.value.relativePath || ''
  // e.g., 'news/index.md' -> 'news'
  const withoutIndex = rp.replace(/\/index\.md$/, '')
  return withoutIndex.split('/')[0] || ''
})

const items = computed(() => {
  const base = `/${section.value}/`
  // filter pages in same section, excluding the section root itself
  const filtered = allPages.filter(p => p.url.startsWith(base) && p.url !== base)

  // sort by weight asc, then date desc, then title asc
  return filtered.sort((a, b) => {
    const wa = a.weight ?? Number.MAX_SAFE_INTEGER
    const wb = b.weight ?? Number.MAX_SAFE_INTEGER
    if (wa !== wb) return wa - wb
    const da = a.date ? new Date(a.date).getTime() : 0
    const db = b.date ? new Date(b.date).getTime() : 0
    if (da !== db) return db - da
    return (a.title || '').localeCompare(b.title || '')
  })
})
</script>

<template>
  <div class="VPDoc">
    <div class="container">
      <article class="vp-doc">
        <!-- Title & content (mirrors Hugo: title + .Content) -->
        <h2 class="single-title">{{ page.frontmatter.title || page.title }}</h2>
        <Content />

        <!-- Archive list -->
        <div class="page archive">
          <article v-for="item in items" :key="item.url" class="archive-item">
            <a :href="item.url" class="archive-item-link">
              <h2 class="archive-item-title">{{ item.title }}</h2>
              <p v-if="item.description" class="archive-item-description">{{ item.description }}</p>
            </a>
          </article>
        </div>
      </article>
    </div>
  </div>
</template>

<style scoped>
.single-title { margin: 0 0 1rem; }
.archive-item { margin: 1rem 0; }
.archive-item-link { text-decoration: none; color: inherit; display: block; }
.archive-item-title { font-size: 1.25rem; margin: 0; }
.archive-item-description { margin: 0.25rem 0 0; color: var(--vp-c-text-2); }
</style>
