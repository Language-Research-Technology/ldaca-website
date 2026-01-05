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
          <a 
            v-if="profile.external_link"
            :href="profile.external_link" 
            target="_blank" 
            rel="noopener noreferrer"
            class="external-link-arrow"
          >
            View Profile →
          </a>
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

    for (const line of lines) {
      if (line.includes(':')) {
        const [key, ...valueParts] = line.split(':')
        let value = valueParts.join(':').trim()
        
        // Remove quotes
        value = value.replace(/^["']|["']$/g, '')
        
        const cleanKey = key.trim().toLowerCase()
        
        if (cleanKey === 'name') data.Name = value
        if (cleanKey === 'fullname') data.fullname = value
        if (cleanKey === 'position') data.position = value
        if (cleanKey === 'biog') data.biog = value
        if (cleanKey === 'external_link') data.external_link = value
      }
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
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 12px 16px;
  min-width: 280px;
  max-width: 360px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
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
