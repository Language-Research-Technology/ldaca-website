<script setup>
import { useData } from 'vitepress'
import { ref, watch } from 'vue'

const { theme, site } = useData()

const nav = theme.value.nav
const sidebar = theme.value.sidebar
const menuColors = theme.value.menuButtonColors || {
  selectedBg: '#1f2937',
  selectedText: '#ffffff',
  unselectedBg: '#f3f4f6',
  unselectedText: '#111827'
}
const activeMenu = ref(null)
const mobileMenuOpen = ref(false)
const mobileActiveSubmenu = ref(null)

const toggleMenu = (itemText) => {
  activeMenu.value = activeMenu.value === itemText ? null : itemText
}

const closeMenu = () => {
  activeMenu.value = null
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
  if (!mobileMenuOpen.value) {
    mobileActiveSubmenu.value = null
  }
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
  mobileActiveSubmenu.value = null
}

const toggleMobileSubmenu = (itemText) => {
  mobileActiveSubmenu.value = mobileActiveSubmenu.value === itemText ? null : itemText
}

// Close mobile menu when window is resized to desktop
watch(mobileMenuOpen, (isOpen) => {
  if (isOpen) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})
</script>

<template>
  <header class="w-full border-border relative">
    <div class="container mx-auto py-4 px-6">
      <!-- Desktop Navigation -->
      <nav class="hidden lg:block">
        <ul class="flex items-center justify-center gap-6">
          <li v-for="item in nav" :key="item.text" class="list-none relative">
            <!-- If item has a link and no sub-items, render as link -->
            <a
              v-if="item.link && !item.items"
              :href="item.link"
              class="flex items-center gap-1.5 text-sm font-medium text-white hover:text-gray-300 transition-colors"
            >
              {{ item.text }}
            </a>
            <!-- Otherwise, render as dropdown button -->
            <button
              v-else
              @click="toggleMenu(item.text)"
              class="flex items-center gap-1.5 text-sm font-medium text-white hover:text-gray-300 transition-colors"
            >
              {{ item.text }}
              <svg 
                v-if="item.items"
                class="h-4 w-4 transition-transform"
                :class="{ 'rotate-180': activeMenu === item.text }"
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                stroke-width="2"
              >
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </button>
          </li>
        </ul>
      </nav>
      
      <!-- Tablet Condensed Navigation (768-1023px) -->
      <nav class="hidden md:flex lg:hidden items-center justify-center gap-4">
        <ul class="flex items-center justify-center gap-3">
          <li v-for="item in nav" :key="item.text" class="list-none">
            <!-- If item has a link and no sub-items, render as link -->
            <a
              v-if="item.link && !item.items"
              :href="item.link"
              class="flex items-center gap-1 text-xs font-medium text-white hover:text-gray-300 transition-colors px-2 py-1"
            >
              {{ item.text }}
            </a>
            <!-- Otherwise, render as dropdown button -->
            <button
              v-else
              @click="toggleMenu(item.text)"
              class="flex items-center gap-1 text-xs font-medium text-white hover:text-gray-300 transition-colors px-2 py-1"
            >
              {{ item.text }}
              <svg 
                v-if="item.items"
                class="h-3 w-3 transition-transform"
                :class="{ 'rotate-180': activeMenu === item.text }"
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                stroke-width="2"
              >
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </button>
          </li>
        </ul>
      </nav>
      
      <!-- Mobile Hamburger Button (≤767px) -->
      <div class="md:hidden flex items-center justify-center">
        <button 
          @click="toggleMobileMenu"
          class="text-white hover:text-gray-300 transition-colors p-2"
          aria-label="Toggle menu"
        >
          <svg 
            v-if="!mobileMenuOpen"
            class="h-6 w-6" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            stroke-width="2"
          >
            <path d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
          <svg 
            v-else
            class="h-6 w-6" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            stroke-width="2"
          >
            <path d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </div>
    
    <!-- Desktop Full-width submenu dropdown -->
    <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 -translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-1"
    >
      <div 
        v-if="activeMenu"
        class="hidden lg:block absolute left-0 right-0 bg-muted border-b border-border shadow-lg z-50"
        :style="{ 
          '--menu-selected-bg': menuColors.selectedBg,
          '--menu-selected-text': menuColors.selectedText,
          '--menu-unselected-bg': menuColors.unselectedBg,
          '--menu-unselected-text': menuColors.unselectedText
        }"
      >
        <div class="container mx-auto py-6 px-6">
          <div 
            v-for="item in nav" 
            :key="item.text"
            v-show="activeMenu === item.text"
          >
            <div v-if="item.items" class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Left: Title -->
              <div class="flex flex-col items-start">
                <h3 class="text-2xl font-bold">
                  {{ item.text }}
                </h3>
                <p v-if="item.subtitle" class="mt-1 text-sm text-gray-600">
                  {{ item.subtitle }}
                </p>
              </div>
              
              <!-- Right: Links Grid -->
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <!-- Render regular items (buttons/images) -->
                <template v-for="(subItem, idx) in item.items" :key="subItem.text + (subItem.link || '')">
                  <a
                    v-if="!subItem.children"
                    :href="subItem.link"
                    @click="closeMenu"
                    :class="[
                      subItem.image 
                        ? 'flex flex-col items-center gap-2 p-0 group'
                        : `inline-flex items-center justify-center px-0 py-0 text-sm ${subItem.bold ? 'font-bold' : 'font-medium'} hover:text-gray-300`
                    , (subItem.divider && idx % 3 !== 2 ? 'sm:border-r border-border pr-4' : '')
                    ]"
                  >
                    <img 
                      v-if="subItem.image" 
                      :src="subItem.image" 
                      :alt="subItem.text"
                      class="w-full h-24 object-cover"
                    />
                    <span :class="subItem.image ? `mt-1 text-xs ${subItem.bold ? 'font-bold' : 'font-medium'} group-hover:text-gray-300 transition-colors text-center` : ''">
                      {{ subItem.text }}
                    </span>
                  </a>

                  <!-- Render grouped items: title + list -->
                  <div v-else class="flex flex-col" :class="(subItem.divider && idx % 3 !== 2) ? 'sm:border-r border-border pr-4' : ''">
                    <div class="text-sm font-semibold mb-2">
                      {{ subItem.title || subItem.text }}
                    </div>
                    <ul class="space-y-1">
                      <li v-for="child in subItem.children" :key="child.link">
                        <a
                          :href="child.link"
                          @click="closeMenu"
                          :class="`text-xs ${child.bold ? 'font-bold' : 'font-medium'} hover:text-gray-300 transition-colors`"
                        >
                          {{ child.text }}
                        </a>
                      </li>
                    </ul>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
    
    <!-- Desktop backdrop to close menu -->
    <div 
      v-if="activeMenu"
      @click="closeMenu"
      class="hidden lg:block fixed inset-0 z-40"
    />
    
    <!-- Tablet condensed menu backdrop (768-1023px) -->
    <div 
      v-if="activeMenu"
      @click="closeMenu"
      class="hidden md:block lg:hidden fixed inset-0 z-40"
    />
    
    <!-- Mobile Slide-out Menu (≤767px) -->
    <transition
      enter-active-class="transition ease-out duration-300"
      enter-from-class="translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="transition ease-in duration-200"
      leave-from-class="translate-x-0"
      leave-to-class="translate-x-full"
    >
      <div 
        v-if="mobileMenuOpen"
        class="md:hidden fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-gray-900 shadow-2xl z-50 overflow-y-auto"
      >
        <div class="p-6">
          <!-- Close button -->
          <div class="flex justify-end mb-6">
            <button 
              @click="closeMobileMenu"
              class="text-white hover:text-gray-300 transition-colors p-2"
              aria-label="Close menu"
            >
              <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
          
          <!-- Mobile menu items -->
          <nav>
            <ul class="space-y-2">
              <li v-for="item in nav" :key="item.text" class="list-none">
                <!-- Simple link items -->
                <a
                  v-if="item.link && !item.items"
                  :href="item.link"
                  @click="closeMobileMenu"
                  class="block px-4 py-3 text-white hover:bg-gray-800 rounded-lg transition-colors font-medium"
                >
                  {{ item.text }}
                </a>
                
                <!-- Expandable menu items -->
                <div v-else>
                  <button
                    @click="toggleMobileSubmenu(item.text)"
                    class="w-full flex items-center justify-between px-4 py-3 text-white hover:bg-gray-800 rounded-lg transition-colors font-medium"
                  >
                    <span>{{ item.text }}</span>
                    <svg 
                      class="h-5 w-5 transition-transform"
                      :class="{ 'rotate-180': mobileActiveSubmenu === item.text }"
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      stroke-width="2"
                    >
                      <path d="M6 9l6 6 6-6"/>
                    </svg>
                  </button>
                  
                  <!-- Submenu items -->
                  <transition
                    enter-active-class="transition ease-out duration-200"
                    enter-from-class="opacity-0 -translate-y-2"
                    enter-to-class="opacity-100 translate-y-0"
                    leave-active-class="transition ease-in duration-150"
                    leave-from-class="opacity-100 translate-y-0"
                    leave-to-class="opacity-0 -translate-y-2"
                  >
                    <div v-show="mobileActiveSubmenu === item.text" class="mt-2 ml-4 space-y-1">
                      <template v-for="subItem in item.items" :key="subItem.text + (subItem.link || '')">
                        <!-- Regular submenu items -->
                        <a
                          v-if="!subItem.children"
                          :href="subItem.link"
                          @click="closeMobileMenu"
                          class="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                          :class="{ 'font-bold': subItem.bold }"
                        >
                          {{ subItem.text }}
                        </a>
                        
                        <!-- Grouped submenu items -->
                        <div v-else class="py-2">
                          <div class="px-4 text-sm font-semibold text-gray-400 mb-1">
                            {{ subItem.title || subItem.text }}
                          </div>
                          <div class="space-y-1">
                            <a
                              v-for="child in subItem.children"
                              :key="child.link"
                              :href="child.link"
                              @click="closeMobileMenu"
                              class="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                              :class="{ 'font-bold': child.bold }"
                            >
                              {{ child.text }}
                            </a>
                          </div>
                        </div>
                      </template>
                    </div>
                  </transition>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </transition>
    
    <!-- Mobile backdrop (≤767px) -->
    <transition
      enter-active-class="transition ease-out duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition ease-in duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div 
        v-if="mobileMenuOpen"
        @click="closeMobileMenu"
        class="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
      />
    </transition>
  </header>

  <aside>
    <div v-for="section in sidebar['/docs/']" :key="section.text">
      <h3>{{ section.text }}</h3>
      <ul>
        <li v-for="sub in section.items" :key="sub.link">
          <a :href="sub.link">{{ sub.text }}</a>
        </li>
      </ul>
    </div>
  </aside>
</template>