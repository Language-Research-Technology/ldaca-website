<script setup>
import { useData } from 'vitepress'
import MenuLayout from './Menu.vue'
import Sidebar from './Sidebar.vue'

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
          <div class="relative">
            <input type="search" placeholder="Search"
              class="w-40 rounded-none border border-border bg-background px-3 py-1.5 text-sm outline-none focus:ring-2 focus:ring-primary" />
            <svg class="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="7" />
              <path d="M20 20l-3.5-3.5" />
            </svg>
          </div>
        </div>
        
        <!-- Right quick menu - Tablet (768-1023px) -->
        <div class="hidden md:flex lg:hidden items-center gap-4 ml-auto">
          <a href="/news/posts/" class="text-xs text-white hover:text-gray-300 transition-colors">Blog</a>
          <a href="/newsletter" class="text-xs text-white hover:text-gray-300 transition-colors">Newsletter</a>
          <div class="relative">
            <input type="search" placeholder="Search"
              class="w-32 rounded-none border border-border bg-background px-2 py-1 text-xs outline-none focus:ring-2 focus:ring-primary" />
            <svg class="absolute right-1 top-1/2 -translate-y-1/2 h-3 w-3 text-muted-foreground" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="7" />
              <path d="M20 20l-3.5-3.5" />
            </svg>
          </div>
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
