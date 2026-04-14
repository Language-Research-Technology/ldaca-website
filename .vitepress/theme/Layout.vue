<script setup>

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import DocLayout from './layouts/Doc.vue'
import PostLayout from './layouts/Post.vue'
import RootListLayout from './layouts/RootList.vue'
import EventLayout from './layouts/Event.vue'
import ProjectLayout from './layouts/Project.vue'
import { useData, useRoute } from 'vitepress'
import { onBeforeUnmount, onMounted, nextTick, watch } from 'vue'

const { page } = useData()
const route = useRoute()

function scrollToCurrentHash() {
  const hash = window.location.hash
  if (!hash || hash.length < 2) return

  const fragment = decodeURIComponent(hash.slice(1))
  if (!fragment) return

  const escaped = window.CSS && window.CSS.escape ? window.CSS.escape(fragment) : fragment
  const target = document.getElementById(fragment) || document.querySelector('[name="' + escaped + '"]')
  if (!target) return

  target.scrollIntoView({ block: 'start', behavior: 'auto' })
}

function scheduleHashScroll() {
  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(scrollToCurrentHash)
  })
}

function onHashChange() {
  scheduleHashScroll()
}

onMounted(() => {
  scheduleHashScroll()
  window.setTimeout(scrollToCurrentHash, 200)
  window.addEventListener('hashchange', onHashChange, false)
})

onBeforeUnmount(() => {
  window.removeEventListener('hashchange', onHashChange, false)
})

watch(() => route.path, async () => {
  await nextTick()
  scheduleHashScroll()
})

// No restrictions — normal Vue usage
</script>

<template>
  <div class="app">

    <Header />

    <div class="body">
      <main class="main">
        <DocLayout v-if="page.frontmatter && page.frontmatter.layout === 'doc' || page.frontmatter.layout === undefined" />
        <PostLayout v-else-if="page.frontmatter && page.frontmatter.layout === 'post'" />
        <RootListLayout v-else-if="page.frontmatter && page.frontmatter.layout === 'root_list'" />
        <EventLayout v-else-if="page.frontmatter && page.frontmatter.layout === 'event'" />
        <ProjectLayout v-else-if="page.frontmatter && page.frontmatter.layout === 'project'" />
        <Content v-else />
      </main>
    </div>

    <Footer />

  </div>
</template>