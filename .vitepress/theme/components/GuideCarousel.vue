<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { pagesData } from 'virtual:pages-data'
import { useData } from 'vitepress'

const { theme } = useData()
const buttonColors = theme.value.buttonColors || { bg: '#79A38D', text: '#ffffff' }

const props = defineProps({
    heading: {
        type: String,
        default: ''
    },
    subheading: {
        type: String,
        default: ''
    },
    items: {
        type: Array,
        required: false,
        default: () => []
    },
    image: {
        type: Array,
        required: false,
        default: () => ['/images/Petroglyph_Pattern.svg']
    },
    backgroundColor: {
        type: String,
        default: ''
    },
    opacity: {
        type: Number,
        default: 100
    }
})

const currentIndex = ref(0)
const total = computed(() => props.items.length)
const isLg = ref(false)

const updateMatch = (mq) => {
    isLg.value = mq.matches
}

let mqListener
onMounted(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    updateMatch(mq)
    mqListener = (event) => updateMatch(event)
    mq.addEventListener('change', mqListener)
})

onBeforeUnmount(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    mq.removeEventListener('change', mqListener)
})

const visibleCount = computed(() => {
    if (total.value === 0) return 0
    return isLg.value ? Math.min(2, total.value) : 1
})

const visibleItems = computed(() => {
    if (total.value === 0) return []

    return Array.from({ length: visibleCount.value }, (_, i) => {
        const rawItem = props.items[(currentIndex.value + i) % total.value]
        const pageMetadata = rawItem.link
            ? pagesData[rawItem.link]
            : null

        return {
            ...rawItem,
            image:
                rawItem.image ??
                pageMetadata?.image ??
                (Array.isArray(props.image) ? props.image[0] : props.image),

            description:
                rawItem.description ??
                pageMetadata?.description,

            category:
                rawItem.category ??
                pageMetadata?.category
        }
    })
})

const showArrows = computed(() => total.value > visibleCount.value)

const prev = () => {
    if (total.value === 0) return
    currentIndex.value = (currentIndex.value - 1 + total.value) % total.value
}

const next = () => {
    if (total.value === 0) return
    currentIndex.value = (currentIndex.value + 1) % total.value
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
    <section class="w-full py-10">
        <div class="max-w-[1280px] mx-auto">

            <!-- Heading -->
            <div class="mb-8 text-left">
                <h1 class="">{{ props.heading }}</h1>
                <p class="text-gray-600 text-xl pt-4">{{ props.subheading }}</p>
            </div>

            <div class="hidden lg:grid lg:grid-cols-[auto_1fr_auto] items-center" :class="{ 'gap-6': showArrows }">

                <!-- LEFT ARROW -->
                <button v-if="showArrows" type="button" @click="prev"
                    class="h-16 w-16 flex items-center justify-center rounded-full bg-[#79a38d] text-white font-sans font-bold text-3xl hover:opacity-80 shadow-sm"
                    aria-label="Previous">
                    ←
                </button>

                <!-- GRID PANELS -->
                <div class="grid grid-cols-2 gap-4">
                    <div v-for="item in visibleItems" :key="item.title"
                        class="relative overflow-hidden flex flex-col justify-start h-[600px] p-6 text-white" :style="{
                            backgroundImage: `url(${item.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'bottom',
                            backgroundRepeat: 'no-repeat'
                        }">

                        <!-- Green overlay that fades out -->
                        <div class="absolute inset-0" style="
    background: linear-gradient(
      to bottom,
      #444544 0%,
      #444544 50%,
      rgba(68,69,68,0.85) 85%,
      rgba(68,69,68,0.5) 100%
    );
  "></div>

                        <!-- Content -->
                        <div class="relative z-10 flex flex-col gap-3 h-full">
                            <p>{{ item.category }}</p>

                            <h2 class="text-white mb-6">{{ item.title }}</h2>

                            <p class="text-white leading-relaxed text-[1.7rem]">
                                {{ item.description }}
                            </p>

                            <p class="text-white leading-relaxed text-[1.7rem]">
                                <span class="font-bold">Level</span> {{ item.level }}
                            </p>

                            <p class="text-white leading-relaxed text-[1.7rem]">
                                <span class="font-bold">For</span> {{ item.audience }}
                            </p>

                            <div class="flex flex-wrap gap-4 mt-auto">
                                <a :href="item.link" :target="isExternal(item.link) ? '_blank' : '_self'"
                                    :rel="isExternal(item.link) ? 'noopener noreferrer' : null"
                                    :style="{ backgroundColor: buttonColors.bg, color: buttonColors.text }"
                                    class="inline-flex items-center justify-center px-6 py-3 text-lg font-bold rounded-lg transition-colors hover:opacity-80">
                                    Read
                                </a>
                            </div>
                        </div>

                    </div>
                </div>

                <!-- RIGHT ARROW -->
                <button v-if="showArrows" type="button" @click="next"
                    class="h-16 w-16 flex items-center justify-center rounded-full bg-[#79a38d] text-white font-sans font-bold text-3xl hover:opacity-80 shadow-sm"
                    aria-label="Next">
                    →
                </button>

            </div>

            <!-- TABLET / MOBILE STACKED PANELS -->
            <div class="lg:hidden flex flex-col gap-4">
                <div v-for="item in props.items" :key="item.title" class="bg-[#393939] overflow-hidden flex flex-col">
                    <img :src="item.image ?? (Array.isArray(props.image) ? props.image[0] : props.image)"
                        :alt="item.title" class="w-full object-cover h-60" />
                    <div class="px-5 pt-5 pb-3 space-y-3 flex flex-col">
                        <p class="text-white">{{ item.category }}</p>
                        <h3 class="text-white">{{ item.title }}</h3>
                        <p class="text-white leading-relaxed flex-1">{{ item.description }}</p>
                    </div>
                    <a :href="item.link" :target="isExternal(item.link) ? '_blank' : '_self'"
                        :rel="isExternal(item.link) ? 'noopener noreferrer' : null"
                        class="flex justify-between items-center w-full font-bold mt-auto bg-[#79A38D] hover:bg-[#8faf9b]"
                        style="color:#FFFEF8; padding:15px;">
                        <span class="text-xl">View more</span>
                        <span class="font-sans font-bold text-white text-xl"> →</span>
                    </a>
                </div>
            </div>

        </div>
    </section>
</template>