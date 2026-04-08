<template>
  <div class="profile-link-wrapper">
    <a v-if="profile" :href="profile.external_link" target="_blank" rel="noopener noreferrer" class="profile-link"
      @mouseenter="showTooltip = true" @mouseleave="showTooltip = false">
      {{ profile.fullname || profile.Name }}
    </a>
    <span v-else class="profile-notfound">{{ id }}</span>

    <!-- Tooltip on hover -->
    <transition name="fade">
      <div v-if="showTooltip && profile" class="profile-tooltip">
        <div class="profile-tooltip-content">
          <h4>{{ profile.fullname || profile.Name }}</h4>
          <p class="position" v-if="profile.position">{{ profile.position }}</p>
          <p class="biog" v-if="profile.biog">{{ profile.biog }}</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

// Import all profile YAML files eagerly with raw content
const profileModules = import.meta.glob('../../../data/profiles/*.{yml,yaml}', {
  eager: true,
  query: '?raw',
  import: 'default'
}) as Record<string, string>

interface ProfileData {
  Name?: string
  fullname?: string
  position?: string
  biog?: string
  external_link?: string
}

const props = defineProps<{
  id: string
}>()

const showTooltip = ref(false)

const parseProfileYaml = (yamlContent: string): ProfileData => {
  const lines = yamlContent.split('\n').filter((line: string) => line.trim())
  const data: ProfileData = {}

  for (const rawLine of lines) {
    const line = rawLine.trim()
    if (line.startsWith('#') || !line.includes(':')) continue

    const [rawKey, ...valueParts] = line.split(':')

    let key = rawKey.trim().replace(/^['\"]|['\"]$/g, '')
    key = key.replace(/-/g, '_').toLowerCase()

    let value = valueParts.join(':').trim()
    value = value.replace(/^['\"]|['\"]$/g, '')

    if (key === 'name') data.Name = value
    if (key === 'fullname') data.fullname = value
    if (key === 'position') data.position = value
    if (key === 'biog') data.biog = value
    if (key === 'external_link') data.external_link = value
  }

  return data
}

// Preprocess all profile YAML files into a map of id -> content for efficient lookup
const profileContentById = computed<Record<string, string>>(() => {
  const byId: Record<string, string> = {}

  for (const [filePath, content] of Object.entries(profileModules)) {
    const normalizedPath = filePath.replace(/\\/g, '/')
    const match = normalizedPath.match(/\/([^/]+)\.(?:yml|yaml)(?:\?.*)?$/)
    if (!match) continue
    byId[match[1].toLowerCase()] = content
  }

  return byId
})

const profile = computed<ProfileData | null>(() => {
  const id = String(props.id || '').trim().toLowerCase()
  if (!id) return null

  const yamlContent = profileContentById.value[id]
  if (!yamlContent) return null

  return parseProfileYaml(yamlContent)
})
</script>

<style scoped>
.profile-link-wrapper {
  position: relative;
  display: inline-block;
}

.profile-link {
  color: var(--vp-c-brand);
  text-decoration: underline;
  cursor: pointer;
  transition: color 0.2s ease;
}

.profile-link:hover {
  color: var(--vp-c-brand-dark);
}

.profile-notfound {
  color: var(--vp-c-text-2);
}

.profile-tooltip {
  position: absolute;
  top: 100%;
  bottom: auto;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 10px;
  margin-bottom: 0;
  z-index: 9999;
  pointer-events: auto;
}

.profile-tooltip-content {
  /* force an opaque background so tooltip text is always readable */
  background-color: rgba(255, 255, 255, 0.98);
  color: #0b0b0b;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  padding: 12px 16px;
  min-width: 280px;
  max-width: 360px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18);
  z-index: 10000;
  backdrop-filter: none;
}

/* ensure content inherits the tooltip text color */
.profile-tooltip-content h4,
.profile-tooltip-content p,
.profile-tooltip-content a {
  color: inherit;
}

/* Dark mode: use a dark opaque background */
@media (prefers-color-scheme: dark) {
  .profile-tooltip-content {
    background-color: #0b1220;
    color: #e6eef8;
    border: 1px solid rgba(255, 255, 255, 0.06);
  }
}

.profile-tooltip-content h4 {
  margin: 0 0 8px 0;
  font-size: 14px;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.position {
  margin: 4px 0;
  font-size: 12px;
  color: var(--vp-c-brand);
  font-weight: 500;
}

.biog {
  margin: 8px 0;
  font-size: 12px;
  color: var(--vp-c-text-2);
  line-height: 1.5;
}

.external-link-arrow {
  display: inline-block;
  margin-top: 8px;
  font-size: 12px;
  color: var(--vp-c-brand);
  text-decoration: none;
  transition: color 0.2s ease;
}

.external-link-arrow:hover {
  color: var(--vp-c-brand-dark);
}

/* Fade transition for tooltip */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
