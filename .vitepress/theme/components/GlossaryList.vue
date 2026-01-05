<script setup lang="ts">
import { data as glossaryItems } from '../lib/glossary.data'
</script>

<template>
  <div>
    <!-- Index table of terms -->
    <table class="w-full text-sm mb-6 border-collapse">
      <thead>
        <tr>
          <th class="text-left py-2 px-3 border-b">Term</th>
          <th class="text-left py-2 px-3 border-b">Definition (summary)</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in glossaryItems" :key="item.id" class="hover:bg-muted/30">
          <td class="py-2 px-3 align-top">
            <a :href="`#${item.id}`" class="text-blue-600 hover:text-blue-800 underline">{{ item.term }}</a>
          </td>
          <td class="py-2 px-3 text-muted-foreground">
            {{ item.definition }}
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
  font-size: 1.25rem;
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
