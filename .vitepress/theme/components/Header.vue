<script setup>
import { useData  } from 'vitepress'
import MenuLayout from './Menu.vue'
import Sidebar from './Sidebar.vue'
import VPNavBarSearch from 'vitepress/dist/client/theme-default/components/VPNavBarSearch.vue'

const { site, theme } = useData()
const logo = theme.value.logo ?? {}
const headerBgColor = theme.value.headerBgColor ?? 'transparent'

</script>
<template>
  <div :style="{ backgroundColor: headerBgColor }">
    <!-- Header row: Logo center, quick menu right -->
    <div class="container mx-auto py-4 px-6">
      <div class="flex items-center">
        <!-- Logo centered using absolute positioning within relative parent -->
        <div class="absolute left-1/2 -translate-x-1/2 pt-2 mt-2">
          <a href="/" class="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img v-if="logo.light" :src="logo.light" alt="LDaCA" class="h-12 sm:h-14 md:h-16 w-auto p-2">
            <span v-if="!logo.light" class="font-bold text-base sm:text-lg">{{ site.title }}</span>
          </a>
        </div>
        
        <!-- Right quick menu - Desktop (≥1024px) -->
        <div class="hidden lg:flex items-center gap-6 ml-auto">
          <a href="/news/posts/" class="text-sm text-white hover:text-gray-300 transition-colors">Blog</a>
          <a href="/news/newsletter" class="text-sm text-white hover:text-gray-300 transition-colors">Newsletter</a>
          <VPNavBarSearch />
        </div>
        
        <!-- Right quick menu - Tablet (768-1023px) -->
        <div class="hidden md:flex lg:hidden items-center gap-4 ml-auto">
          <a href="/news/posts/" class="text-xs text-white hover:text-gray-300 transition-colors">Blog</a>
          <a href="/newsletter" class="text-xs text-white hover:text-gray-300 transition-colors">Newsletter</a>
          <VPNavBarSearch />
        </div>
      </div>
    </div>

    <MenuLayout>
      <Sidebar />
    </MenuLayout>
  </div>
</template>

<style scoped>
/* Your component's CSS goes here */
</style>
