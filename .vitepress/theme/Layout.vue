<script setup>

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import DocLayout from './layouts/Doc.vue'
import PostLayout from './layouts/Post.vue'
import RootListLayout from './layouts/RootList.vue'
import { useData } from 'vitepress'

const { page } = useData()

// No restrictions — normal Vue usage
</script>

<template>
  <div class="app">

    <Header />

    <div class="body">
      <main class="main">
        <DocLayout v-if="page.frontmatter && page.frontmatter.layout === 'doc' || page.frontmatter.layout === undefined" />
        <PostLayout v-if="page.frontmatter && page.frontmatter.layout === 'post'" />
        <RootListLayout v-else-if="page.frontmatter && page.frontmatter.layout === 'root_list'" />
        <Content v-else />
      </main>
    </div>

    <Footer />

  </div>
</template>