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
        default: '#f3f0e8'
    },
    opacity: {
        type: Number,
        default: 100
    },
    buttonText: {
        type: String,
        default: 'Try it out'
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
    return isLg.value ? Math.min(1, total.value) : 1
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
    <section class="w-full py-10"
        :style="props.backgroundColor ? { backgroundColor: props.backgroundColor, opacity: `${props.opacity}%` } : {}">
        <div class="max-w-[1280px] mx-auto">

            <!-- Heading -->
            <div class="mb-8 text-left">
                <h1>{{ props.heading }}</h1>
                <p class="my-4 text-gray-600 text-xl">{{ props.subheading }}</p>
            </div>

            <div class="hidden lg:grid lg:grid-cols-[auto_1fr_auto] items-center" :class="{ 'gap-6': showArrows }">

                <!-- LEFT ARROW -->
                <button v-if="showArrows" type="button" @click="prev"
                    class="h-16 w-16 flex items-center justify-center rounded-full bg-[#79a38d] text-white font-sans font-bold text-3xl hover:opacity-80 shadow-sm"
                    aria-label="Previous">
                    ←
                </button>

                <!-- GRID PANELS -->
                <div class="grid grid-cols-1 gap-6">
                    <div v-for="item in visibleItems" :key="item.title"
                        class="grid grid-cols-1 lg:grid-cols-2 overflow-hidden">

                        <!-- IMAGE LEFT -->
                        <img :src="item.image" :alt="item.title"
                            class="w-full h-full object-contain" />

                        <!-- CONTENT RIGHT -->
                        <div class="flex flex-col h-full pl-10 py-6">
                            <!-- Title & description centered vertically -->
                            <div class="flex-1 flex flex-col justify-center">
                                <h2 class="pb-6">{{ item.title }}</h2>
                                <p class="leading-relaxed text-xl mt-3 whitespace-pre-line pb-6">{{ item.description }}</p>
                            </div>

                            <!-- Buttons at bottom -->
                            <div class="flex flex-wrap gap-4 mt-auto">
                                <a :href="item.link" :target="isExternal(item.link) ? '_blank' : '_self'"
                                    :rel="isExternal(item.link) ? 'noopener noreferrer' : null"
                                    :style="{ backgroundColor: buttonColors.bg, color: buttonColors.text }"
                                    class="inline-flex items-center justify-center px-6 py-4 text-xl font-bold rounded-lg transition-colors hover:opacity-80">
                                    {{ props.buttonText }}
                                </a>

                                <a v-if="item.guideLink" :href="item.guideLink"
                                    :target="isExternal(item.guideLink) ? '_blank' : '_self'"
                                    :rel="isExternal(item.guideLink) ? 'noopener noreferrer' : null"
                                    class="inline-flex items-center justify-center px-6 py-4 text-xl font-bold rounded-lg bg-[#444544] text-white transition-colors hover:opacity-80">
                                    Read the user guide
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
            <div class="lg:hidden flex flex-col gap-6">
                <div v-for="item in props.items" :key="item.title" class="overflow-hidden flex flex-col lg:flex-row">

                    <!-- IMAGE TOP -->
                    <img :src="item.image ?? (Array.isArray(props.image) ? props.image[0] : props.image)"
                        :alt="item.title" class="w-full h-60 object-contain lg:h-auto lg:w-1/2" />

                    <!-- CONTENT BOTTOM -->
                    <div class="flex flex-col px-5 py-5 gap-4 lg:w-1/2 lg:px-6 lg:py-6">
                        <h3 class="text-2xl font-semibold">{{ item.title }}</h3>
                        <p class="leading-relaxed flex-1 whitespace-pre-line">{{ item.description }}</p>

                        <!-- Buttons like desktop -->
                        <div class="flex flex-wrap gap-4 mt-auto">
                            <a :href="item.link" :target="isExternal(item.link) ? '_blank' : '_self'"
                                :rel="isExternal(item.link) ? 'noopener noreferrer' : null"
                                :style="{ backgroundColor: buttonColors.bg, color: buttonColors.text }"
                                class="inline-flex items-center justify-center px-6 py-4 text-xl font-bold rounded-lg transition-colors hover:opacity-80">
                                {{ props.buttonText }}
                            </a>

                            <a v-if="item.guideLink" :href="item.guideLink"
                                :target="isExternal(item.guideLink) ? '_blank' : '_self'"
                                :rel="isExternal(item.guideLink) ? 'noopener noreferrer' : null"
                                class="inline-flex items-center justify-center px-6 py-4 text-xl font-bold rounded-lg bg-[#444544] text-white transition-colors hover:opacity-80">
                                Read the user guide
                            </a>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </section>
</template>