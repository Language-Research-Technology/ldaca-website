<script setup>
import { useData } from 'vitepress'

const { page } = useData()
</script>

<template>
  <div class="VPDoc">
    <div class="container">
      <article class="vp-doc">
        <!-- Auto-display title from front matter -->
        <h1 v-if="page.frontmatter?.title" class="title">
          {{ page.frontmatter.title }}
        </h1>
        
        <!-- Auto-display author from front matter -->
        <div v-if="page.frontmatter?.author" class="author-line">
          <span>by {{ page.frontmatter.author }}</span>
        </div>
        
        <Content />
      </article>
    </div>
  </div>
</template>

<style scoped>
.title {
  font-size: 2em;
  font-weight: bold;
  margin-bottom: 0.5em;
  margin-top: 0.5em;
}

.author-line {
  margin-bottom: 1em;
  font-style: italic;
  color: #666;
}
</style>
