<script setup>
const list = [
  {
    title: "Fast",
    text: "Powered by Vite — incredibly fast dev and build."
  },
  {
    title: "Markdown-first",
    text: "Write your content using simple Markdown."
  },
  {
    title: "Vue-powered",
    text: "Fully supports Vue components anywhere."
  }
]
</script>

<template>
  <section class="features">
    <div v-for="f in list" :key="f.title" class="feature">
      <h3>{{ f.title }}</h3>
      <p>{{ f.text }}</p>
    </div>
  </section>
</template>

<style scoped>
.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}
.feature {
  padding: 1rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
}
</style>