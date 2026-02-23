<script setup lang="ts">
import { computed } from 'vue'
import { data as glossaryItems } from '../lib/glossary.data'
import GlossaryLink from './GlossaryLink.vue'

const lettersList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

// In letterToId - no validation that glossaryItems exists or that items are valid
const letterToId = computed<Record<string, string | null>>(() => {
  const map: Record<string, string | null> = {}
  lettersList.forEach(letter => {
    const match = glossaryItems.find(item => {
      // If item is null/undefined, this will throw
      const t = (item.term || '').trim()
      // ...
    })
  })
  return map
})

function scrollToLetter(letter: string) {
  const id = letterToId.value[letter]
  if (!id) return
  const el = document.getElementById(id)
  if (!el) return
  // determine header offset if present (site header or vp-nav), fallback to 80px
  const header = document.querySelector('header') as HTMLElement | null
  const headerHeight = header ? header.getBoundingClientRect().height : 80
  const extraOffset = 12 // small gap
  // account for any CSS scroll-margin-top set on the element (computed in px)
  const scrollMarginTop = parseFloat(window.getComputedStyle(el).scrollMarginTop || '0') || 0
  const top = window.scrollY + el.getBoundingClientRect().top - headerHeight - extraOffset - scrollMarginTop
  window.history.pushState(null, '', `#${id}`)
  window.scrollTo({ top, behavior: 'smooth' })
}

function parseGlossaryContent(content: string) {
  if (!content) return [{ type: 'html', html: '' }]

  const segments: Array<any> = []
  // Only parse component-style <GlossaryLink display="..." id="..." /> occurrences
  const pattern = /<GlossaryLink\s+([^>]+?)\s*\/?\>/g
  let lastIndex = 0
  let match: RegExpExecArray | null
  while ((match = pattern.exec(content)) !== null) {
    const idx = match.index
    if (idx > lastIndex) {
      segments.push({ type: 'html', html: content.slice(lastIndex, idx) })
    }

    const attrs = match[1] || ''
    const props: Record<string, string> = {}
    const attrRegex = /(\w+)\s*=\s*"([^"]*)"/g
    let aMatch: RegExpExecArray | null
    while ((aMatch = attrRegex.exec(attrs)) !== null) {
      props[aMatch[1]] = aMatch[2]
    }

    segments.push({ type: 'component', display: props.display || '', id: props.id || '' })
    lastIndex = pattern.lastIndex
  }

  if (lastIndex < content.length) {
    segments.push({ type: 'html', html: content.slice(lastIndex) })
  }

  return segments
}
</script>

<template>
  <div>
    <!-- A–Z index -->
    <div class="mb-4 flex gap-2 flex-wrap items-center">
      <nav class="flex flex-wrap gap-1" aria-label="Glossary index">
        <template v-for="letter in lettersList" :key="letter">
          <a
            v-if="letterToId[letter]"
            href="#"
            @click.prevent="scrollToLetter(letter)"
            class="inline-block px-2 py-1 text-sm rounded border border-transparent hover:border-primary hover:text-primary"
          >
            {{ letter }}
          </a>
          <span v-else class="inline-block px-2 py-1 text-sm text-muted-foreground cursor-not-allowed select-none">{{ letter }}</span>
        </template>
      </nav>
    </div>

    <!-- Index table of terms -->
    <table class="w-full text-sm mb-6 border-collapse">
      <thead>
        <tr>
          <th class="text-left py-2 px-3 border-b">Term</th>
          <th class="text-left py-2 px-3 border-b">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in glossaryItems" :key="item.id" class="hover:bg-muted/30">
          <td class="py-2 px-3 align-top">
            <span :id="item.id" class="glossary-term">{{ item.term }}</span>
          </td>
          <td class="py-2 px-3 text-muted-foreground">
            <p class="glossary-definition">
              <template v-for="(seg, idx) in parseGlossaryContent(item.content || item.definition)" :key="idx">
                <span v-if="seg.type === 'html'" v-html="seg.html"></span>
                <GlossaryLink v-else :display="seg.display" :id="seg.id" />
              </template>
            </p>
          </td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<style scoped>
.glossary-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem 0;
}

.glossary-item {
  border-bottom: 1px solid var(--vp-c-divider);
  padding-bottom: 1.5rem;
}

.glossary-item:last-child {
  border-bottom: none;
}

.glossary-term {
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
  color: var(--vp-c-brand);
  scroll-margin-top: 5rem;
}

.glossary-definition {
  margin: 0;
  color: var(--vp-c-text-2);
  line-height: 1.6;
}
</style>
