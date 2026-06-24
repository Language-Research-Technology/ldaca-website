<script setup>
import { useData } from 'vitepress'

const props = defineProps({
  image: {
    type: String,
    default: ''
  },
})

const { theme } = useData()
const buttonColors = theme.value.buttonColors || { bg: '#79A38D', text: '#ffffff' }

</script>

<template>
  <section class="w-full py-12">
    <div class="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8">

      <div class="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 items-start">

        <!-- LEFT SIDE -->
        <div class="space-y-10">

          <div class="mb-10">
            <h2 class="pb-5">Get in touch</h2>
            <a href="mailto:contact@ldaca.edu.au" target="_blank" rel="noopener noreferrer"
              class="pb-4 text-[#79A38D] text-lg font-bold flex items-center gap-3 hover:underline hover:decoration-dotted hover:decoration-2 hover:underline-offset-8">
              <img src="/images/contact/Mail.svg" alt="" class="w-9 h-full">
              <span>contact@ldaca.edu.au</span>
            </a>
          </div>

          <div class="mb-10">
            <h2 class="pb-5">Find us online</h2>
            <a href="https://www.linkedin.com/company/ldaca/" target="_blank" rel="noopener noreferrer"
              class="pb-4 text-[#79A38D] text-lg font-bold flex items-center gap-3 hover:underline hover:decoration-dotted hover:decoration-2 hover:underline-offset-8">
              <img src="/images/contact/LinkedIn.svg" alt="" class="w-8 h-full">
              <span>@ldaca</span>
            </a>
            <a href="https://www.youtube.com/@LDaCA_Project" target="_blank" rel="noopener noreferrer"
              class="pb-4 text-[#79A38D] text-lg font-bold flex items-center gap-3 hover:underline hover:decoration-dotted hover:decoration-2 hover:underline-offset-8">
              <img src="/images/contact/YouTube.svg" alt="" class="w-9 h-full">
              <span>@LDaCA_Project</span>
            </a>
          </div>

          <div class="mb-10">
            <h2 class="pb-5">Get our newsletter</h2>
            <a href="https://ldaca.us13.list-manage.com/subscribe?u=ef8667be63aefb1e35062a797&id=de4b682e46"
              target="_blank" rel="noopener noreferrer"
              :style="{ backgroundColor: buttonColors.bg, color: buttonColors.text }"
              class="inline-block p-4 rounded-lg font-semibold hover:opacity-80 transition-opacity mb-4">
              Subscribe
            </a>
            <a href="/newsletter"
              class="pb-4 text-[#79A38D] text-lg font-bold flex items-center gap-3 hover:underline hover:decoration-dotted hover:decoration-2 hover:underline-offset-8">
              View past newsletters >
            </a>
          </div>

        </div>

        <!-- RIGHT SIDE IMAGE -->
        <div>
          <img :src="props.image" :alt="props.heading" class="w-full object-cover" />
        </div>

      </div>

    </div>
  </section>
</template>