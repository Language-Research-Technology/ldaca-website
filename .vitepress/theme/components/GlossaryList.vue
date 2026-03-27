<script setup lang="ts">
import { computed } from 'vue'
import { data as glossaryItems } from '../lib/glossary.data'
import GlossaryLink from './GlossaryLink.vue'

const lettersList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

const normalize = (v: unknown) =>
  String(v ?? '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
    .toUpperCase()

const slugify = (v: unknown) =>
  String(v ?? '')
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')

const rows = computed(() => {
  const items = Array.isArray(glossaryItems) ? glossaryItems : []
  return items.map((item: any, idx: number) => ({
    ...item,
    anchorId: String(item?.id || `term-${slugify(item?.term)}-${idx}`),
    body: item?.content || item?.definition || ''
  }))
})

const letterToId = computed<Record<string, string | null>>(() => {
  const map: Record<string, string | null> = {}

  for (const letter of lettersList) {
    const match = rows.value.find((item: any) => normalize(item?.term).startsWith(letter))
    map[letter] = match?.anchorId || null
  }

  return map
})

function scrollToLetter(letter: string) {
  const id = letterToId.value[letter]
  if (!id) return

  const el = document.getElementById(id)
  if (!el) return

  window.history.pushState(null, '', `#${id}`)
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
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
          <a v-if="letterToId[letter]" href="#" @click.prevent="scrollToLetter(letter)"
            class="inline-block px-2 py-1 text-sm rounded border border-transparent hover:border-primary hover:text-primary">
            {{ letter }}
          </a>
          <span v-else class="inline-block px-2 py-1 text-sm text-muted-foreground cursor-not-allowed select-none">{{
            letter }}</span>
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
        <tr v-for="item in rows" :key="item.anchorId" class="hover:bg-muted/30">
          <td class="py-2 px-3 align-top">
            <span :id="item.anchorId" class="glossary-term">{{ item.term }}</span>
          </td>
          <td class="py-2 px-3 text-muted-foreground">
            <p class="glossary-definition">
              <template v-for="(seg, idx) in parseGlossaryContent(item.body)" :key="idx">
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
  scroll-margin-top: calc(var(--vp-nav-height) + 16px);
}

.glossary-definition {
  margin: 0;
  color: var(--vp-c-text-2);
  line-height: 1.6;
}
</style>
