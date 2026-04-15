<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { pagesData } from 'virtual:pages-data'

const props = defineProps({
    heading: {
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
    },
    shade: {
        type: String,
        default: 'dark'
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
    return isLg.value ? Math.min(3, total.value) : 1
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
    <section class="max-w-[1280px] mx-auto py-10 px-4 sm:px-6 md:px-8 lg:px-2">

        <!-- Heading -->
        <div class="mb-8 text-left">
            <h1>{{ props.heading }}</h1>
        </div>

        <!-- Tile Layout -->
        <div class="hidden lg:grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-6">

            <!-- LARGE TILE -->
            <article v-if="visibleItems[0]" class="relative overflow-hidden shadow-xl min-h-[520px] w-full h-[900px]">
                <a :href="visibleItems[0].link" :target="isExternal(visibleItems[0].link) ? '_blank' : '_self'"
                    :rel="isExternal(visibleItems[0].link) ? 'noopener noreferrer' : null"
                    class="absolute inset-0 block">
                    <img :src="visibleItems[0].image" :alt="visibleItems[0].title"
                        class="h-full w-full object-cover bg-[#79a38d]" />
                </a>

                <div class="relative z-10 h-full flex items-end pointer-events-none">
                    <div class="p-6 bg-[#393939] w-full pointer-events-auto">
                        <p class="text-white">{{ visibleItems[0].category }}</p>
                        <h3 class="text-white">{{ visibleItems[0].title }}</h3>

                        <a :href="visibleItems[0].link" :target="isExternal(visibleItems[0].link) ? '_blank' : '_self'"
                            :rel="isExternal(visibleItems[0].link) ? 'noopener noreferrer' : null"
                            class="mt-3 inline-flex items-center text-white text-xl font-bold hover:underline hover:decoration-dotted hover:decoration-2 hover:underline-offset-8">
                            View
                        </a>
                        <a class="font-sans font-bold text-white text-xl"> →</a>
                    </div>
                </div>
            </article>

            <!-- RIGHT STACK -->
            <div class="grid grid-rows-[1fr_1fr] gap-6 w-full">

                <!-- TOP RIGHT TILE -->
                <article v-if="visibleItems[1]" class="relative overflow-hidden shadow-xl w-full h-full">
                    <a :href="visibleItems[1].link" :target="isExternal(visibleItems[1].link) ? '_blank' : '_self'"
                        :rel="isExternal(visibleItems[1].link) ? 'noopener noreferrer' : null"
                        class="absolute inset-0 block">
                        <img :src="visibleItems[1].image" :alt="visibleItems[1].title"
                            class="h-full w-full object-cover bg-[#79a38d]" />
                    </a>

                    <div class="relative z-10 h-full flex items-end pointer-events-none">
                        <div class="p-4 bg-[#393939] w-full pointer-events-auto">
                            <p class="text-white">{{ visibleItems[1].category }}</p>
                            <h3 class="text-white">{{ visibleItems[1].title }}</h3>

                            <a :href="visibleItems[1].link"
                                :target="isExternal(visibleItems[1].link) ? '_blank' : '_self'"
                                :rel="isExternal(visibleItems[1].link) ? 'noopener noreferrer' : null"
                                class="mt-3 inline-flex items-center text-white text-xl font-bold hover:underline hover:decoration-dotted hover:decoration-2 hover:underline-offset-8">
                                View
                            </a>
                            <a class="font-sans font-bold text-white text-xl"> →</a>
                        </div>
                    </div>
                </article>

                <!-- BOTTOM RIGHT TILE -->
                <article v-if="visibleItems[2]" class="relative overflow-hidden shadow-xl w-full h-full">
                    <a :href="visibleItems[2].link" :target="isExternal(visibleItems[2].link) ? '_blank' : '_self'"
                        :rel="isExternal(visibleItems[2].link) ? 'noopener noreferrer' : null"
                        class="absolute inset-0 block">
                        <img :src="visibleItems[2].image" :alt="visibleItems[2].title"
                            class="h-full w-full object-cover bg-[#79a38d]" />
                    </a>

                    <div class="relative z-10 h-full flex items-end pointer-events-none">
                        <div class="p-4 bg-[#393939] w-full pointer-events-auto">
                            <p class="text-white">{{ visibleItems[2].category }}</p>
                            <h3 class="text-white">{{ visibleItems[2].title }}</h3>

                            <a :href="visibleItems[2].link"
                                :target="isExternal(visibleItems[2].link) ? '_blank' : '_self'"
                                :rel="isExternal(visibleItems[2].link) ? 'noopener noreferrer' : null"
                                class="mt-3 inline-flex items-center text-white text-xl font-bold hover:underline hover:decoration-dotted hover:decoration-2 hover:underline-offset-8">
                                View
                            </a>
                            <a class="font-sans font-bold text-white text-xl"> →</a>
                        </div>
                    </div>
                </article>

            </div>

        </div>

        <!-- MOBILE / TABLET STACKED VERSION -->
        <div class="lg:hidden flex flex-col gap-6">

            <article v-for="item in props.items" :key="item.title"
                class="relative overflow-hidden shadow-xl w-full h-full min-h-[300px]">
                <a :href="item.link" :target="isExternal(item.link) ? '_blank' : '_self'"
                    :rel="isExternal(item.link) ? 'noopener noreferrer' : null" class="absolute inset-0 block">
                    <img :src="item.image ?? (Array.isArray(props.image) ? props.image[0] : props.image)"
                        :alt="item.title" class="h-full w-full object-cover bg-[#79a38d]" />
                </a>

                <div class="relative z-10 h-full flex items-end pointer-events-none">
                    <div class="p-4 bg-[#393939] w-full pointer-events-auto">
                        <p class="text-white">{{ item.category }}</p>
                        <h3 class="text-white">{{ item.title }}</h3>

                        <a :href="item.link"
                            class="mt-3 inline-flex items-center text-white text-xl font-bold hover:underline hover:decoration-dotted hover:decoration-2 hover:underline-offset-8">
                            View
                        </a>
                        <a class="font-sans font-bold text-white text-xl"> →</a>
                    </div>
                </div>
            </article>

        </div>
    </section>
</template>
