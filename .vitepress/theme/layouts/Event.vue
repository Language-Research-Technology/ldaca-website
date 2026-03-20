<script setup>
import { useData } from 'vitepress'
import { computed } from 'vue'
import SimpleHero from '../components/SimpleHero.vue'

const { page } = useData()

// Tags
const tags = computed(() => {
    const tagData = page.value?.frontmatter?.tags
    if (!tagData) return []
    return Array.isArray(tagData) ? tagData : [tagData]
})

const tagLinks = computed(() => {
    return tags.value.map(tag => ({
        label: tag,
        url: `/tags#${tag.toLowerCase().replace(/\s+/g, '-')}`
    }))
})

// Event details from frontmatter
const event = computed(() => page.value?.frontmatter || {})
</script>

<template>
    <SimpleHero :title="event.title || 'Untitled Event'" :description="event.eventDate || ''"
        :breadcrumb="event.breadcrumb || ''" backgroundImage="/images/GreenBackground.png" />

    <div class="VPDoc">
        <div class="max-w-[1280px] mx-auto px-4 py-10">

            <div class="flex flex-col lg:flex-row gap-10">

                <!-- LEFT: Markdown content -->
                <article class="vp-doc flex-1 max-w-[700px] pl-0 ml-0 pt-0 mt-0">

                    <!-- Author -->
                    <div v-if="event.author" class="mb-4 italic text-gray-600">
                        by {{ event.author }}
                    </div>

                    <!-- Tags -->
                    <div v-if="tags.length > 0" class="mb-6 pb-6 border-b border-gray-300">
                        <div class="flex flex-wrap gap-2">
                            <a v-for="tag in tagLinks" :key="tag.label" :href="tag.url"
                                class="inline-flex px-3 py-1 bg-gray-100 text-blue-600 rounded text-sm hover:bg-gray-200">
                                {{ tag.label }}
                            </a>
                        </div>
                    </div>

                    <!-- Markdown content -->
                    <Content />
                </article>

                <!-- RIGHT: Event details -->
                <aside class="w-full lg:w-[470px] bg-[#F5F5F5] p-6 h-fit">

                    <!-- Event image -->
                    <div v-if="event.image" class="mb-6">
                        <img :src="event.image" :alt="event.title" class="w-full h-auto object-cover rounded" />
                    </div>

                    <!-- Button -->
                    <a v-if="event.link" :href="event.link" target="_blank" rel="noopener noreferrer"
                        class="inline-block mb-6 px-6 py-4 bg-[#79A38D] text-white font-semibold rounded-lg transition hover:opacity-90">
                        {{ event.pastEvent ? 'More information' : 'Register' }}
                    </a>

                    <!-- Date -->
                    <div v-if="event.eventDate" class="mb-4">
                        <p class="font-bold text-gray-600 uppercase text-sm">Date/s</p>
                        <p class="text-gray-700">{{ event.eventDate }}</p>
                    </div>

                    <!-- Time -->
                    <div v-if="event.time" class="mb-4">
                        <p class="font-bold text-gray-600 uppercase text-sm">Time/s</p>
                        <p class="text-gray-700">{{ event.time }}</p>
                    </div>

                    <!-- Location -->
                    <div v-if="event.location" class="mb-4">
                        <p class="font-bold text-gray-600 uppercase text-sm">Location</p>
                        <p class="text-gray-700">{{ event.location }}</p>
                    </div>

                    <!-- Cost -->
                    <div v-if="event.cost" class="mb-4">
                        <p class="font-bold text-gray-600 uppercase text-sm">Cost</p>
                        <p class="text-gray-700">{{ event.cost }}</p>
                    </div>

                    <!-- Run By -->
                    <div v-if="event.organiser" class="mb-4">
                        <p class="font-bold text-gray-600 uppercase text-sm">Run by</p>
                        <p class="text-gray-700">{{ event.organiser }}</p>
                    </div>

                </aside>

            </div>
        </div>
    </div>
</template>