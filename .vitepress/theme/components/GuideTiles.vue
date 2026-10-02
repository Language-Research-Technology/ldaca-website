<script setup>
import { computed } from 'vue'
import { pagesData } from 'virtual:pages-data'
import { resolveUrl } from '../lib/url'

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
        required: false
    },
    title: {
        type: String,
        default: ''
    },
    category: {
        type: String,
        default: ''
    },
    link: {
        type: String,
        default: ''
    },
    description: {
        type: String,
        default: ''
    }
})

const fallbackImage =
    Array.isArray(props.image) && props.image.length > 0
        ? props.image[0]
        : '/images/Petroglyph_Pattern.svg'

const normalizedItems = computed(() =>
    props.items.map((rawItem) => {
        const pageMetadata = rawItem.link
            ? pagesData[rawItem.link]
            : null

        return {
            ...rawItem,

            image:
                rawItem.image ||
                pageMetadata?.image ||
                pageMetadata?.frontmatter?.image ||
                fallbackImage,

            category:
                rawItem.category ||
                pageMetadata?.category ||
                pageMetadata?.frontmatter?.category ||
                '',

            actionText:
                rawItem.actionText ||
                'Read',

            description:
                rawItem.description ||
                pageMetadata?.description ||
                pageMetadata?.frontmatter?.description ||
                ''
        }
    })
)

const isExternal = (url) => {
    try {
        return new URL(url).origin !== window.location.origin
    } catch {
        return false
    }
}
</script>

<template>
    <section class="w-full py-12">
        <div class="max-w-[1184px] mx-auto px-4 sm:px-6 md:px-8 lg:px-2">
            <div class="mb-12 text-left">
                <h1 v-if="heading" class="type-page-title">
                    {{ heading }}
                </h1>
            </div>

            <div class="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                <article
                    v-for="item in normalizedItems"
                    :key="item.link || item.title"
                    class="flex flex-col items-start gap-4"
                >
                    <a
                        v-if="item.link"
                        :href="resolveUrl(item.link)"
                        :target="isExternal(item.link) ? '_blank' : '_self'"
                        :rel="isExternal(item.link) ? 'noopener noreferrer' : null"
                        class="block w-[292px]"
                    >
                        <div class="relative aspect-square w-full overflow-hidden">
                            <img
                                class="block h-full w-full object-cover"
                                :src="resolveUrl(item.image)"
                                :alt="item.title"
                                loading="lazy"
                            >

                            <!-- Dark image wash -->
                            <div class="absolute inset-0 bg-black/15"></div>

                            <!-- Category and title -->
                            <div class="absolute inset-0 flex items-start p-8">
                                <div class="flex max-w-[90%] flex-col">
                                    <span
                                        v-if="item.category"
                                        class="type-eyebrow mb-3 text-white"
                                    >
                                        {{ item.category }}
                                    </span>

                                    <span
                                        class="type-card-display text-white"
                                    >
                                        {{ item.title }}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </a>

                    <div v-else class="block w-[292px]">
                        <div class="relative aspect-square w-full overflow-hidden">
                            <img
                                class="block h-full w-full object-cover"
                                :src="resolveUrl(item.image)"
                                :alt="item.title"
                                loading="lazy"
                            >

                            <!-- Dark image wash -->
                            <div class="absolute inset-0 bg-black/15"></div>

                            <!-- Category and title -->
                            <div class="absolute inset-0 flex items-start p-8">
                                <div class="flex max-w-[90%] flex-col">
                                    <span
                                        v-if="item.category"
                                        class="type-eyebrow mb-3 text-white"
                                    >
                                        {{ item.category }}
                                    </span>

                                    <span
                                        class="type-card-display text-white"
                                    >
                                        {{ item.title }}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-col gap-1">
                        <span
                            class="type-card-title inline-flex items-center gap-2 pt-2 pb-4 text-[#383938]"
                        >
                            {{ item.title }}
                        </span>

                        <p class="type-body m-0 pb-4">
                            {{ item.description }}
                        </p>

                        <a
                            v-if="item.link"
                            :href="resolveUrl(item.link)"
                            :target="isExternal(item.link) ? '_blank' : '_self'"
                            :rel="isExternal(item.link) ? 'noopener noreferrer' : null"
                            class="type-action pb-2 inline-flex items-center gap-2 text-[#79a38d] hover:underline hover:decoration-dotted hover:decoration-2 hover:underline-offset-8"
                        >
                            <span>{{ item.actionText }} &gt;</span>
                        </a>
                    </div>
                </article>
            </div>
        </div>
    </section>
</template>