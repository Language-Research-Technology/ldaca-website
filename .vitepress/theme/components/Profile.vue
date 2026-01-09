<template>
  <div class="profile-link-wrapper">
    <a 
      v-if="profile"
      :href="profile.external_link" 
      target="_blank" 
      rel="noopener noreferrer"
      class="profile-link"
      @mouseenter="showTooltip = true"
      @mouseleave="showTooltip = false"
    >
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
import { ref, onMounted } from 'vue'

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

const profile = ref<ProfileData | null>(null)
const showTooltip = ref(false)

onMounted(async () => {
  try {
    // Import the profile YAML file dynamically
    const profileModule = await import(`../../../data/profiles/${props.id}.yml?raw`)
    const yamlContent = profileModule.default

    // Simple YAML parser for key-value pairs
    const lines = yamlContent.split('\n').filter((line: string) => line.trim())
    const data: ProfileData = {}

    for (const rawLine of lines) {
      const line = rawLine.trim()
      // skip comments and non key:value lines
      if (line.startsWith('#') || !line.includes(':')) continue

      const [rawKey, ...valueParts] = line.split(':')

      // normalize key: strip quotes, trim, replace hyphens with underscores and lowercase
      let key = rawKey.trim().replace(/^['\"]|['\"]$/g, '')
      key = key.replace(/-/g, '_').toLowerCase()

      let value = valueParts.join(':').trim()
      // Remove surrounding quotes from the value if present
      value = value.replace(/^['\"]|['\"]$/g, '')

      if (key === 'name') data.Name = value
      if (key === 'fullname') data.fullname = value
      if (key === 'position') data.position = value
      if (key === 'biog') data.biog = value
      if (key === 'external_link') data.external_link = value
    }

    profile.value = data
  } catch (error) {
    console.warn(`Profile not found for id: ${props.id}`)
  }
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
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 10px;
  z-index: 1000;
  pointer-events: auto;
}

.profile-tooltip-content {
  /* force an opaque background so tooltip text is always readable */
  background-color: rgba(255,255,255,0.98);
  color: #0b0b0b;
  border: 1px solid rgba(0,0,0,0.08);
  border-radius: 8px;
  padding: 12px 16px;
  min-width: 280px;
  max-width: 360px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18);
  z-index: 2000;
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
    border: 1px solid rgba(255,255,255,0.06);
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
