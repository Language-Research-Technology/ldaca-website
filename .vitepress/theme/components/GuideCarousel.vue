<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { pagesData } from 'virtual:pages-data'
import { useData } from 'vitepress'
import { resolveUrl } from '../lib/url'

const { theme } = useData()
const buttonColors = theme.value.buttonColors || { bg: '#79A38D', text: '#ffffff' }

const props = defineProps({
    heading: {
        type: String,
        default: ''
    },
    viewAll: {
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
let mediaQuery

onMounted(() => {
    mediaQuery = window.matchMedia('(min-width: 819.2px)')
    updateMatch(mediaQuery)

    mqListener = (event) => updateMatch(event)
    mediaQuery.addEventListener('change', mqListener)
})

onBeforeUnmount(() => {
    if (mediaQuery && mqListener) {
        mediaQuery.removeEventListener('change', mqListener)
    }
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

        const assignedImage =
            rawItem.image ??
            pageMetadata?.image

        const defaultImage =
            Array.isArray(props.image)
                ? props.image[0]
                : props.image

        return {
            ...rawItem,

            image: assignedImage ?? defaultImage,

            // Used to determine which image overlay appears
            isDefaultImage: !assignedImage,

            description:
                rawItem.description ??
                pageMetadata?.description,

            category:
                rawItem.category ??
                pageMetadata?.category,

            // Per-item button colours, with theme fallback
            buttonColor:
                rawItem.buttonColor ??
                buttonColors.bg,

            buttonTextColor:
                rawItem.buttonTextColor ??
                buttonColors.text
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
    <section
        class="w-full py-10"
        :style="{ backgroundColor: props.backgroundColor || undefined }"
    >
        <div class="max-w-[1184px] mx-auto px-4 sm:px-6 md:px-8 lg:px-2">

            <!-- Heading -->
            <div class="mb-8 text-left">
                <div class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <h1>{{ props.heading }}</h1>

                    <a
                        v-if="props.viewAll"
                        :href="resolveUrl(props.viewAll)"
                        :style="{
                            backgroundColor: buttonColors.bg,
                            color: buttonColors.text
                        }"
                        class="inline-flex items-center justify-center w-fit px-5 py-3 rounded-lg font-bold hover:opacity-80 transition-opacity"
                    >
                        View all
                    </a>
                </div>

                <p class="text-gray-600 text-xl pt-4">
                    {{ props.description }}
                </p>
            </div>

            <!-- DESKTOP -->
            <div
                class="hidden lg:grid lg:grid-cols-[auto_1fr_auto] items-center"
                :class="{ 'gap-6': showArrows }"
            >

                <!-- LEFT ARROW -->
                <button
                    v-if="showArrows"
                    type="button"
                    @click="prev"
                    :style="{
                        backgroundColor: buttonColors.bg,
                        color: buttonColors.text
                    }"
                    class="h-16 w-16 flex items-center justify-center rounded-full font-sans font-bold text-3xl hover:opacity-80 shadow-sm"
                    aria-label="Previous"
                >
                    ←
                </button>

                <!-- GRID PANELS -->
                <div class="grid grid-cols-2 gap-4">

                    <div
                        v-for="item in visibleItems"
                        :key="item.title"
                        class="relative overflow-hidden flex flex-col justify-start h-[440px] p-10 text-white"
                        :style="{
                            backgroundImage: `url(${resolveUrl(item.image)})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'bottom',
                            backgroundRepeat: 'no-repeat'
                        }"
                    >

                        <!-- Strong overlay for default image -->
                        <div
                            v-if="item.isDefaultImage"
                            class="absolute inset-0"
                            style="
                                background: linear-gradient(
                                    to bottom,
                                    #444544 0%,
                                    #444544 50%,
                                    rgba(68, 69, 68, 0.85) 85%,
                                    rgba(68, 69, 68, 0.5) 100%
                                );
                            "
                        ></div>

                        <!-- Lighter overlay for assigned images -->
                        <div
                            v-else
                            class="absolute inset-0"
                            style="
                                background: linear-gradient(
                                    to bottom,
                                    rgba(0, 0, 0, 0.45) 0%,
                                    rgba(0, 0, 0, 0.30) 50%,
                                    rgba(0, 0, 0, 0.18) 80%,
                                    rgba(0, 0, 0, 0.08) 100%
                                );
                            "
                        ></div>

                        <!-- Content -->
                        <div class="relative z-10 flex flex-col gap-3 h-full">

                            <p>
                                {{ item.category }}
                            </p>

                            <h2 class="text-white mb-6">
                                <a
                                    :href="resolveUrl(item.link)"
                                    :target="isExternal(item.link) ? '_blank' : '_self'"
                                    :rel="isExternal(item.link) ? 'noopener noreferrer' : null"
                                    class="hover:underline hover:decoration-dotted hover:decoration-2 hover:underline-offset-8"
                                >
                                    {{ item.title }}
                                </a>
                            </h2>

                            <p class="text-white leading-relaxed text-xl">
                                {{ item.description }}
                            </p>

                            <p
                                v-if="item.level"
                                class="text-white leading-relaxed text-xl"
                            >
                                <span class="font-bold">Level</span>
                                {{ item.level }}
                            </p>

                            <p
                                v-if="item.audience"
                                class="text-white leading-relaxed text-xl"
                            >
                                <span class="font-bold">For</span>
                                {{ item.audience }}
                            </p>

                            <div class="flex flex-wrap gap-4 mt-auto">
                                <a
                                    :href="resolveUrl(item.link)"
                                    :target="isExternal(item.link) ? '_blank' : '_self'"
                                    :rel="isExternal(item.link) ? 'noopener noreferrer' : null"
                                    :style="{
                                        backgroundColor: item.buttonColor,
                                        color: item.buttonTextColor
                                    }"
                                    class="inline-flex items-center justify-center px-6 py-3 text-lg font-bold rounded-lg transition-opacity hover:opacity-80"
                                >
                                    Read
                                </a>
                            </div>

                        </div>
                    </div>

                </div>

                <!-- RIGHT ARROW -->
                <button
                    v-if="showArrows"
                    type="button"
                    @click="next"
                    :style="{
                        backgroundColor: buttonColors.bg,
                        color: buttonColors.text
                    }"
                    class="h-16 w-16 flex items-center justify-center rounded-full font-sans font-bold text-3xl hover:opacity-80 shadow-sm"
                    aria-label="Next"
                >
                    →
                </button>

            </div>

            <!-- TABLET / MOBILE STACKED PANELS -->
            <div class="lg:hidden flex flex-col gap-4">

                <div
                    v-for="item in props.items"
                    :key="item.title"
                    class="bg-[#393939] overflow-hidden flex flex-col"
                >

                    <img
                        :src="resolveUrl(item.image ?? (Array.isArray(props.image) ? props.image[0] : props.image))"
                        :alt="item.title"
                        class="w-full object-cover h-60"
                    />

                    <!-- Increased padding -->
                    <div class="px-8 pt-8 pb-6 space-y-3 flex flex-col">

                        <p class="text-white">
                            {{ item.category }}
                        </p>

                        <h3 class="text-white">
                            <a
                                :href="resolveUrl(item.link)"
                                :target="isExternal(item.link) ? '_blank' : '_self'"
                                :rel="isExternal(item.link) ? 'noopener noreferrer' : null"
                                class="hover:underline hover:decoration-dotted hover:decoration-2 hover:underline-offset-8"
                            >
                                {{ item.title }}
                            </a>
                        </h3>

                        <p class="text-white leading-relaxed flex-1">
                            {{ item.description }}
                        </p>

                    </div>

                    <a
                        :href="resolveUrl(item.link)"
                        :target="isExternal(item.link) ? '_blank' : '_self'"
                        :rel="isExternal(item.link) ? 'noopener noreferrer' : null"
                        :style="{
                            backgroundColor: item.buttonColor || buttonColors.bg,
                            color: item.buttonTextColor || buttonColors.text
                        }"
                        class="flex justify-between items-center w-full font-bold mt-auto hover:opacity-80 transition-opacity"
                        style="padding: 12px 2rem;"
                    >
                        <span class="text-xl">View more</span>
                        <span class="font-sans font-bold text-xl">→</span>
                    </a>

                </div>
            </div>

        </div>
    </section>
</template>