<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'
import Profile from './Profile.vue'

const { theme, frontmatter } = useData()
const headerBgColor = theme.value.headerBgColor || '#383838'

const props = defineProps({
  backgroundImage: {
    type: String,
    default: '/images/GreenBackground.png'
  },
  title: {
    type: String,
    default: 'Title needed.'
  },
  description: {
    type: String,
    default: 'Description needed.'
  },
  breadcrumb: {
    type: String,
    default: ''
  }
})

// Handle embedded Profile components in the description
const descriptionSegments = computed(() => {
  const text = props.description || ''
  const segments = []
  const pattern = /<Profile\s+([^>]*?)\/?\s*>/g
  const attrPattern = /(\w+)\s*=\s*["']([^"']*)["']/g
  let lastIndex = 0
  let match

  while ((match = pattern.exec(text)) !== null) {
    const idx = match.index
    if (idx > lastIndex) {
      segments.push({ type: 'html', html: text.slice(lastIndex, idx) })
    }

    const attrsText = match[1] || ''
    const attrs = {}
    let attrMatch
    while ((attrMatch = attrPattern.exec(attrsText)) !== null) {
      attrs[attrMatch[1]] = attrMatch[2]
    }

    if (attrs.id) {
      segments.push({ type: 'profile', id: attrs.id })
    } else {
      segments.push({ type: 'html', html: match[0] })
    }

    lastIndex = pattern.lastIndex
  }

  if (lastIndex < text.length) {
    segments.push({ type: 'html', html: text.slice(lastIndex) })
  }

  return segments
})


</script>

<template>
  <section class="p-0">
    <!-- Full-width background -->
    <div class="relative w-full bg-cover bg-center bg-no-repeat min-h-[200px]"
      :style="{ backgroundImage: `url(${backgroundImage})`, backgroundColor: headerBgColor }">
      <!-- Content container -->
      <div class="max-w-[1280px] mx-auto py-8">
        <div class="max-w-[67%] relative z-10 xs:max-w-full">
          <p v-if="breadcrumb" class="m-0 text-white">{{ breadcrumb }}</p>
          <h1 class="m-0 pt-8 pb-4 text-white">{{ title }}</h1>
          <!-- Only show description if the page frontmatter has "layout: home" or "layout: event" -->
          <p v-if="frontmatter.layout === 'home' || frontmatter.layout === 'event' || frontmatter.layout === 'post' || frontmatter.layout === 'doc' || frontmatter.layout === 'root_list'"
            class=" my-4 mb-8 text-white/90 leading-relaxed text-[1.7rem]">
            <template v-for="(segment, index) in descriptionSegments" :key="index">
              <span v-if="segment.type === 'html'" v-html="segment.html"></span>
              <Profile v-else :id="segment.id" />
            </template>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
:deep(.profile-link),
:deep(.profile-notfound) {
  color: rgba(255, 255, 255, 0.9);
}

:deep(.profile-link:hover) {
  color: #ffffff;
}
</style>
