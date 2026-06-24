<script setup>
import { ref } from 'vue'
import { useData } from 'vitepress'

const props = defineProps({
  heading: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  items: {
    type: Array,
    required: false,
    default: () => []
  },
  buttonText: {
    type: String,
    default: 'Find out more'
  },
  backgroundColor: {
    type: String,
    default: '#f3f0e8'
  },
})

const { theme } = useData()

const selectedItem = ref(props.items[0])

const buttonColors = theme.value.buttonColors || { bg: '#79A38D', text: '#ffffff' }
const menuColors = theme.value.menuButtonColors || {
  selectedBg: '#79A38D',
  selectedText: '#111827',
  unselectedBg: '#f3f4f6',
  unselectedText: '#111827'
}

const selectItem = (item) => {
  selectedItem.value = item
}

const isExternal = (url) => {
  try {
    return new URL(url).origin !== window.location.origin
  } catch {
    return false
  }
}
</script>

<template>
  <section class="w-full py-10" :style="props.backgroundColor ? { backgroundColor: props.backgroundColor } : {}">
    <div class="max-w-[1280px] mx-auto py-10 px-4 sm:px-6 md:px-8 lg:px-2">
      <!-- Header -->
      <div class="mb-12 text-left">
        <h1 class="">{{ props.heading }}</h1>
        <p class="text-gray-600 text-[1.7rem]">{{ props.description }}</p>
      </div>

      <!-- DESKTOP / LARGE SCREEN -->
      <div class="hidden lg:grid lg:grid-cols-3 gap-8">
        <!-- Left: List of items -->
        <div class="lg:col-span-1">
          <div>
            <button v-for="item in props.items" :key="item.title" @click="selectItem(item)" :style="{
              backgroundColor: selectedItem.title === item.title ? buttonColors.bg : menuColors.unselectedBg,
              color: selectedItem.title === item.title ? buttonColors.text : menuColors.unselectedText,
              borderColor: selectedItem.title === item.title ? buttonColors.bg : '#d1d5db'
            }"
              class="w-full text-left px-4 py-3 first:rounded-t-lg last:rounded-b-lg border-[0.75px] transition-all hover:opacity-80">
              {{ item.title }}
            </button>
          </div>
        </div>

        <!-- Right: Content display -->
        <div class="lg:col-span-2">
          <div class="rounded-none overflow-hidden h-full">
            <!-- Top image strip -->
            <div class="h-[250px] overflow-hidden">
              <img :src="selectedItem.image" :alt="selectedItem.title" class="w-full h-full object-cover" />
            </div>

            <!-- Text below -->
            <div class="pt-8">
              <h2 class="mb-4">{{ selectedItem.title }}</h2>

              <p class="text-gray-600 text-xl" v-html="selectedItem.description"></p>

              <p class="text-gray-600 text-xl pt-6">
                <a :href="selectedItem.link" :target="isExternal(selectedItem.link) ? '_blank' : '_self'"
                  :rel="isExternal(selectedItem.link) ? 'noopener noreferrer' : null"
                  :style="{ backgroundColor: buttonColors.bg, color: buttonColors.text }"
                  class="inline-flex items-center justify-center px-6 py-4 text-xl font-bold rounded-lg transition-colors hover:opacity-80">
                  {{ props.buttonText }}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- MOBILE / TABLET -->
      <div class="lg:hidden flex flex-col gap-1">
        <div v-for="item in props.items" :key="item.title" class="bg-white rounded-lg shadow-sm overflow-hidden">
          <!-- Button / Title -->
          <button @click="selectItem(item)" :style="{
            backgroundColor: selectedItem.title === item.title ? buttonColors.bg : menuColors.unselectedBg,
            color: selectedItem.title === item.title ? buttonColors.text : menuColors.unselectedText,
            borderColor: selectedItem.title === item.title ? buttonColors.bg : '#d1d5db'
          }" class="w-full text-left px-4 py-3 border-[0.75px] rounded-lg transition-all hover:opacity-80">
            {{ item.title }}
          </button>

          <!-- Image -->
          <img v-if="selectedItem.title === item.title" :src="selectedItem.image" :alt="selectedItem.title"
            class="w-full h-48 object-cover rounded-lg" />

          <!-- Text -->
          <div v-if="selectedItem.title === item.title" class="p-4 space-y-2">
            <h3 class="text-lg font-bold">{{ selectedItem.title }}</h3>
            <p class="text-gray-600 text-2xl" v-html="selectedItem.description"></p>
            <a :href="selectedItem.link" :target="isExternal(selectedItem.link) ? '_blank' : '_self'"
              :rel="isExternal(selectedItem.link) ? 'noopener noreferrer' : null"
              :style="{ backgroundColor: buttonColors.bg, color: buttonColors.text }"
              class="inline-flex items-center justify-center px-6 py-4 text-xl font-bold rounded-lg transition-colors hover:opacity-80">
              {{ props.buttonText }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
