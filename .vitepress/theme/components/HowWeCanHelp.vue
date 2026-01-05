<script setup>
import { ref } from 'vue'
import { useData } from 'vitepress'

const props = defineProps({
  items: {
    type: Array,
    required: false,
    default: () => [
      {
        title: 'Find & access language materials',
        image: 'https://placehold.co/400x300',
        description: 'Discover and access a wide range of language materials through our comprehensive search tools and data portal. We make it easy to find the resources you need for your research.'
      },
      {
        title: 'Organise & describe data',
        image: 'https://placehold.co/400x300',
        description: 'Learn best practices for organizing and describing your language data with metadata standards that ensure discoverability and long-term preservation.'
      },
      {
        title: 'License collections responsibly',
        image: 'https://placehold.co/400x300',
        description: 'Get guidance on choosing appropriate licenses for your language collections that respect cultural protocols and legal requirements.'
      },
      {
        title: 'Share data with care',
        image: 'https://placehold.co/400x300',
        description: 'Implement ethical data sharing practices that honor community wishes and maintain appropriate access controls for sensitive materials.'
      },
      {
        title: 'Guidance on governance',
        image: 'https://placehold.co/400x300',
        description: 'Access frameworks and guidance for establishing governance structures that support ethical stewardship of language data.'
      },
      {
        title: 'Process data for use',
        image: 'https://placehold.co/400x300',
        description: 'Use our tools and workflows to process language data into formats ready for analysis, visualization, and other research applications.'
      },
      {
        title: 'Analyse language at scale',
        image: 'https://placehold.co/400x300',
        description: 'Leverage computational tools and infrastructure to perform large-scale language analysis across diverse collections and datasets.'
      }
    ]
  }
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
</script>

<template>
  <section class="max-w-[1440px] mx-auto px-6 py-16">
    <!-- Header -->
    <div class="text-center mb-12">
      <h2 class="text-4xl font-bold text-gray-900 mb-4">HOW WE CAN HELP</h2>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto">
        LDaCA provides hands-on support to make language data usable, ethical and future-ready
      </p>
    </div>

    <!-- Interactive Widget -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Left: List of items -->
      <div class="lg:col-span-1">
        <div class="space-y-2">
          <button
            v-for="item in props.items"
            :key="item.title"
            @click="selectItem(item)"
            :style="{
              backgroundColor: selectedItem.title === item.title ? buttonColors.bg : menuColors.unselectedBg,
              color: selectedItem.title === item.title ? buttonColors.text : menuColors.unselectedText,
              borderColor: selectedItem.title === item.title ? buttonColors.bg : '#d1d5db'
            }"
            class="w-full text-left px-4 py-3 rounded-none border-2 transition-all hover:opacity-80"
          >
            {{ item.title }}
          </button>
        </div>
      </div>

      <!-- Right: Content display -->
      <div class="lg:col-span-2">
        <div class="bg-white rounded-none overflow-hidden h-full">
          <div class="grid grid-cols-2 gap-6">
            <!-- Left: Image -->
            <div class="h-full">
              <img 
                :src="selectedItem.image" 
                :alt="selectedItem.title"
                class="w-full h-full object-cover rounded-none"
              />
            </div>
            <!-- Right: Text -->
            <div class="flex flex-col justify-center p-6">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">{{ selectedItem.title }}</h3>
              <p class="text-gray-600 text-lg leading-relaxed">{{ selectedItem.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
