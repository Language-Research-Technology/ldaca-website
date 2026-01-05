---
layout: home
title: "Language Data Commons of Australia"
hero:
  name: "LDaCA Website"
  tagline: "Connecting People with Language Data."
  description: "
  The Language Data Commons of Australia brings together digital infrastructure, ethical governance, and long-term care so that language materials remain findable and usable in culturally appropriate ways into the future.
  <br/>
  LDaCA offers practical tools, guidance, and infrastructure for everyone working with language data. Whether you collect, steward, discover, analyse or reuse language materials, we can help you do that work well."
  actions:
    - text: Get Started
      link: /guide/

---
<script setup>
import { useData } from 'vitepress'
import HomeHero from '../.vitepress/theme/components/HomeHero.vue'
import DataPortalBox from '../.vitepress/theme/components/DataPortalBox.vue'
import HowWeCanHelp from '../.vitepress/theme/components/HowWeCanHelp.vue'
import HomeCarousel from '../.vitepress/theme/components/HomeCarousel.vue'
import LatestBlog from '../.vitepress/theme/components/LatestBlog.vue'
</script>

<!-- Chenoa -->
<!-- https://www.youtube.com/watch?v=EyO3A4rbCPU -->
<!-- Simon -->
<!-- https://www.youtube.com/watch?v=SwYDAYmdm70 -->
<!-- Nick -->
<!-- https://www.youtube.com/watch?v=fIcChn11PdI -->


<HomeHero 
  :videos = "['vovLkye-xLw', 'EyO3A4rbCPU', 'SwYDAYmdm70', 'fIcChn11PdI']"
  backgroundImage="/images/black_patternback.svg" 
/>

<DataPortalBox 
  title="Use the Data Portal"
  subtitle="Search, browse and use language materials"
  buttonText="Go to the data portal"
  buttonLink="/portal"
/>

<HowWeCanHelp 
:items = "[
  {
    title: 'Find & access language materials',
    image: 'https://placehold.co/400x300',
    description: 'Discover and access a wide range of language materials through our comprehensive search tools and data portal. We make it easy to find the resources you need for your research.'
  },
  {
    title: 'Organise & describe data',
    image: 'https://placehold.co/400x300',
    description: 'Learn best practices for organizing and describing your language data with metadata standards that ensure discoverability and long-term preservation.'
  },
  {
    title: 'License collections responsibly',
    image: 'https://placehold.co/400x300',
    description: 'Get guidance on choosing appropriate licenses for your language collections that respect cultural protocols and legal requirements.'
  },
  {
    title: 'Share data with care',
    image: 'https://placehold.co/400x300',
    description: 'Implement ethical data sharing practices that honor community wishes and maintain appropriate access controls for sensitive materials.'
  },
  {
    title: 'Guidance on governance',
    image: 'https://placehold.co/400x300',
    description: 'Access frameworks and guidance for establishing governance structures that support ethical stewardship of language data.'
  },
  {
    title: 'Process data for use',
    image: 'https://placehold.co/400x300',
    description: 'Use our tools and workflows to process language data into formats ready for analysis, visualization, and other research applications.'
  },
  {
    title: 'Analyse language at scale',
    image: 'https://placehold.co/400x300',
    description: 'Leverage computational tools and infrastructure to perform large-scale language analysis across diverse collections and datasets.'
  }
]"
/>

<HomeCarousel 
  backgroundColor="#EAE4D68C"
  :opacity="55"
  heading="PROJECTS, CASE STUDIES & RESOURCES"
  :items="[
      {
        title: 'Project: Coastal Languages Archive',
        description: 'Digitising and describing coastal language recordings with community-led governance.',
        image: 'https://placehold.co/600x360',
        link: '/projects/coastal-languages'
      },
      {
        title: 'Case Study: Ethical Sharing',
        description: 'How consent workflows and tiered access kept sensitive stories safe while discoverable.',
        image: 'https://placehold.co/600x360',
        link: '/case-studies/ethical-sharing'
      },
      {
        title: 'Resource: Metadata Playbook',
        description: 'Practical templates and examples for describing language materials consistently.',
        image: 'https://placehold.co/600x360',
        link: '/resources/metadata-playbook'
      },
      {
        title: 'Project: Language at Scale',
        description: 'Processing large corpora with reproducible pipelines and cloud tooling.',
        image: 'https://placehold.co/600x360',
        link: '/projects/language-at-scale'
      }
    ]"/>

<LatestBlog />

<HomeCarousel 
  heading="EVENTS & RECORDINGS"
  :items="[
    {
      title: 'Webinar: Preserving Community Narratives',
      description: 'A live session on respectful access controls and consent refresh practices.',
      image: 'https://placehold.co/600x360',
      link: '/events/webinar-community-narratives'
    },
    {
      title: 'Workshop: Metadata in Practice',
      description: 'Hands-on recordings and slides on crafting usable, ethical metadata for language data.',
      image: 'https://placehold.co/600x360',
      link: '/events/metadata-in-practice'
    },
    {
      title: 'Panel: Sharing with Care',
      description: 'Experts discuss governance patterns that balance openness with cultural safety.',
      image: 'https://placehold.co/600x360',
      link: '/events/panel-sharing-with-care'
    }
  ]"
/>

