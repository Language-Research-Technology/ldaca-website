<script setup lang="ts">
import { computed } from 'vue'
import { resolveUrl } from '../lib/url'

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
    image: {
        type: Array,
        required: false,
    },
    name: {
        type: String,
        default: ''
    },
    link: {
        type: String,
        default: ''
    },
    affiliation: {
        type: String,
        default: ''
    }
})

type Person = {
    name: string
    link: string
    affiliation: string
    image?: string
}

const items = computed<Person[]>(() => props.items as Person[])

const fallbackImage = ((Array.isArray(props.image) && props.image.length > 0
    ? props.image[0]
    : '/images/Petroglyph_Pattern.svg') as string)

</script>

<template>
    <section class="w-full py-12">
        <div class="max-w-[1184px] mx-auto px-4 sm:px-6 md:px-8 lg:px-2">
            <div class="mb-12 text-left">
                <h2 v-if="props.heading" class="type-section-title">
                    {{ props.heading }}
                </h2>
                <p v-if="description" class="type-lead my-4 text-gray-600">
                    {{ description }}
                </p>
            </div>

            <div class="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
                <article v-for="person in items" :key="person.link || person.name"
                    class="flex flex-col items-start gap-4">
                    <a v-if="person.link" :href="resolveUrl(person.link)" target="_blank" rel="noopener noreferrer"
                        class="block w-[225.6px]">
                        <img class="block aspect-square w-full object-cover" :src="resolveUrl(person.image || fallbackImage)"
                            :alt="person.name" loading="lazy">
                    </a>
                    <div v-else class="block w-[225.6px]">
                        <img class="block aspect-square w-full object-cover" :src="resolveUrl(person.image || fallbackImage)"
                            :alt="person.name" loading="lazy">
                    </div>

                    <div class="flex flex-col gap-1">
                        <a v-if="person.link" :href="resolveUrl(person.link)" target="_blank" rel="noopener noreferrer"
                            class="type-card-title pb-2 inline-flex items-center gap-2 text-[#79a38d] hover:underline hover:decoration-dotted hover:decoration-2 hover:underline-offset-8">
                            <span>{{ person.name }} &gt;</span>
                        </a>
                        <span v-else
                            class="type-card-title inline-flex items-center gap-2 pb-2 text-[#79a38d]">
                            {{ person.name }}
                        </span>
                        <p class="type-body m-0">
                            {{ person.affiliation }}
                        </p>
                    </div>
                </article>
            </div>
        </div>
    </section>
</template>
