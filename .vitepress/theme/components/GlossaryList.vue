<script setup lang="ts">
import { data as glossaryItems } from '../lib/glossary.data'
import GlossaryLink from './GlossaryLink.vue'

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
