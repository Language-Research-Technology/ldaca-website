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

const escapeHtml = (value = '') => {
    return String(value || '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
}

const escapeAttribute = (value = '') => {
    return String(value || '')
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
}

const markdownLinkRegex = /\[([^\]]+)\]\(([^)]+)\)/g
const markdownBoldRegex = /\*\*(.+?)\*\*/g

const renderSimpleMarkdownInline = (value = '') => {
    const input = String(value || '').trim()
    if (!input) return ''

    const escaped = escapeHtml(input)
    const withLinks = escaped.replace(markdownLinkRegex, (_m, label, href) => {
        const safeLabel = escapeHtml(label)
        const safeHref = escapeAttribute(String(href || '').trim())
        return `<a href="${safeHref}" target="_blank" rel="noopener noreferrer" class="text-[#79a38d] font-bold hover:underline">${safeLabel}</a>`
    })

    const withBold = withLinks.replace(markdownBoldRegex, '<strong>$1</strong>')

    return withBold.replace(/\n/g, '<br>')
}

const projectTeamHtml = computed(() => renderSimpleMarkdownInline(event.value.projectTeam))
const websiteHtml = computed(() => renderSimpleMarkdownInline(event.value.link))
const outcomesHtml = computed(() => renderSimpleMarkdownInline(event.value.outcomes))
const informationHtml = computed(() => renderSimpleMarkdownInline(event.value.information))
</script>

<template>
    <SimpleHero :title="event.title || 'Untitled Event'" :description="event.description || ''"
        :breadcrumb="event.breadcrumb || ''" backgroundImage="/images/GreenBackground.png" />

    <div class="VPDoc">
        <div class="max-w-[1280px] mx-auto px-4 py-10">

            <div class="flex flex-col lg:flex-row gap-10">

                <!-- LEFT: Markdown content -->
                <article class="vp-doc project-content flex-1 max-w-[700px] pl-0 ml-0 pt-0 mt-0">

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
                <div class="w-full lg:w-[470px] flex flex-col gap-6">

                    <aside class="h-fit">

                        <!-- Event image -->
                        <div v-if="event.image" class="mb-6">
                            <img :src="event.image" :alt="event.title" class="w-full h-auto object-cover rounded" />
                        </div>

                        <!-- Button -->
                        <p class="text-2xl font-bold text-white mb-4 bg-[#79a38d] py-2 px-4">At a glance</p>

                        <!-- Collaborators -->
                        <div v-if="event.collaborator" class="mb-4">
                            <p class="font-bold text-gray-600 uppercase text-xl">Collaborators</p>
                            <p class="text-gray-700 text-lg">{{ event.collaborator }}</p>
                        </div>

                        <!-- Project Team -->
                        <div v-if="event.projectTeam" class="mb-4">
                            <p class="font-bold text-gray-600 uppercase text-xl">Project Team</p>
                            <div class="text-gray-700 text-lg project-inline-markdown" v-html="projectTeamHtml"></div>
                        </div>

                        <!-- Website -->
                        <div v-if="event.link" class="mb-4">
                            <p class="font-bold text-gray-600 uppercase text-xl">Website</p>
                            <div class="text-gray-700 text-lg project-inline-markdown" v-html="websiteHtml"></div>
                        </div>

                        <!-- Outcomes -->
                        <div v-if="event.outcomes" class="mb-4">
                            <p class="font-bold text-gray-600 uppercase text-xl">Outcomes</p>
                            <div class="text-gray-700 text-lg project-inline-markdown" v-html="outcomesHtml"></div>
                        </div>

                    </aside>

                    <aside class="bg-[#eae4d6] p-6 h-fit">
                        <img src="/images/info-green.png" alt="Information" class="rounded block mx-auto pb-4" />

                        <div v-if="event.information" class="mb-4">
                            <div class="text-gray-700 text-xl project-inline-markdown" v-html="informationHtml"></div>
                        </div>

                        <div v-else class="text-gray-700">
                            Further information will be added soon.
                        </div>
                    </aside>

                </div>


            </div>
        </div>
    </div>

    <ContactBox heading="Stay up to date"
        description="Get the latest news, events and releases delivered to your inbox."
        buttonText="Subscribe to our newsletter"
        buttonLink="https://ldaca.us13.list-manage.com/subscribe?u=ef8667be63aefb1e35062a797&id=de4b682e46" />
</template>

<style scoped>
.project-content :deep(h1),
.project-content :deep(h2),
.project-content :deep(h3),
.project-content :deep(h4),
.project-content :deep(h5),
.project-content :deep(h6) {
    color: #79a38d;
}

.project-inline-markdown :deep(strong) {
    color: #79a38d;
}
</style>