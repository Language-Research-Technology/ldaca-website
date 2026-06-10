<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'

const { theme } = useData()
const buttonColors = theme.value.buttonColors || { bg: '#79A38D', text: '#ffffff' }

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
		default: () => []
	},
	image: {
		type: Array,
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
	viewAll: {
		type: String,
		default: ''
	}
})

const normalizedItems = computed(() =>
	props.items.slice(0, 3).map((item) => ({
		...item,
		image: item.image ?? (Array.isArray(props.image) ? props.image[0] : props.image)
	}))
)

const isExternal = (url = '') => /^https?:\/\//i.test(url)
</script>

<template>
	<section
		v-bind="$attrs"
		class="w-full py-10"
		:style="props.backgroundColor ? { backgroundColor: props.backgroundColor, opacity: `${props.opacity}%` } : {}"
	>
		<div class="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 lg:px-2">
			<!-- Heading -->
            <div class="mb-8 text-left">
                <div class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <h1 class="">{{ props.heading }}</h1>
                    <a v-if="props.viewAll" :href="props.viewAll"
                        class="inline-flex items-center justify-center w-fit px-5 py-3 rounded-lg bg-[#79a38d] text-white font-bold hover:opacity-80 transition-opacity">
                        View all
                    </a>
                </div>
                <p class="text-gray-600 text-xl pt-4">{{ props.description }}</p>
            </div>

			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
				<article
					v-for="item in normalizedItems"
					:key="item.title"
					class="flex flex-col p-6"
				>
					<a
						:href="item.link"
						:target="isExternal(item.link) ? '_blank' : '_self'"
						:rel="isExternal(item.link) ? 'noopener noreferrer' : null"
						class="block"
					>
						<img
							:src="item.image"
							:alt="item.title"
							class="w-full h-96 object-contain"
						>
					</a>

					<div class="pt-4">
						<h3 class="text-[#383938] text-2xl leading-snug">
							<a
								:href="item.link"
								:target="isExternal(item.link) ? '_blank' : '_self'"
								:rel="isExternal(item.link) ? 'noopener noreferrer' : null"
								class="hover:underline hover:decoration-dotted hover:decoration-2 hover:underline-offset-8"
							>
								{{ item.title }}
							</a>
						</h3>
						<p class="mt-2 text-[#62675f] text-xl">{{ item.author }}</p>
					</div>
				</article>
			</div>
		</div>
	</section>
</template>
