<script setup>

const props = defineProps({
  title: {
    type: String,
    default: 'Title needed.'
  },
  description: {
    type: String,
    default: 'Description needed.'
  },
  contents: {
    type: Array,
    default: () => [
    ]
  }
})

// Smooth scroll with dynamic offset
const scrollTo = (href) => {
  const el = document.querySelector(href)
  if (el) {
    const stickyHeader = document.querySelector('.sticky')
    const offset = stickyHeader ? stickyHeader.offsetHeight + 16 : 16
    const top = el.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: 'smooth' })
  }
}
</script>

<template>
  <!-- TITLE + DESCRIPTION -->
  <section class="p-0">
    <div class="relative w-full bg-cover bg-center bg-no-repeat min-h-[200px]">
      <div class="max-w-[1280px] mx-auto px-4 py-8">
        <div class="flex flex-col lg:flex-row items-start">
          <!-- Main content section -->
          <div class="max-w-[100%] lg:max-w-[60%] relative z-10">
            <h2 class="m-0 pb-4 text-[#383938]">{{ title }}</h2>
            <p class="mt-4 text-[#383938] text-lg leading-relaxed" v-html="description"></p>
          </div>

          <!-- Desktop sidebar -->
          <div class="hidden lg:block w-[30%] bg-white ml-auto sticky">
            <p class="text-2xl font-bold text-white mb-4 bg-[#79a38d] p-2">On this page</p>
            <ul class="list-none" style="padding-left: 10px;">
              <li v-for="item in contents" :key="item.href"
                class="text-xl font-bold py-2 border-b border-gray-200 hover:underline hover:decoration-dotted hover:decoration-2 hover:underline-offset-8">
                <a href="javascript:void(0)" @click.prevent="scrollTo(item.href)">
                  {{ item.label }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Mobile / Tablet sidebar -->
  <section class="lg:hidden">
    <div class="max-w-[1280px] mx-auto px-4 py-4">
      <p class="text-2xl font-bold text-white mb-4 bg-[#79a38d] p-2">On this page</p>
      <ul class="bg-white p-4" style="padding-left: 10px;">
        <li v-for="item in contents" :key="item.href"
          class="text-xl font-bold py-2 border-b border-gray-200 last:border-b-0 hover:underline hover:decoration-dotted hover:decoration-2 hover:underline-offset-8">
          <a href="javascript:void(0)" @click.prevent="scrollTo(item.href)">
            {{ item.label }}
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>