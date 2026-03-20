---
layout: home
title: "Language Data Commons of Australia"

---
<script setup>
import { useData } from 'vitepress'
import HomeHero from '../.vitepress/theme/components/HomeHero.vue'
import DataPortalBox from '../.vitepress/theme/components/DataPortalBox.vue'
import HowWeCanHelp from '../.vitepress/theme/components/HowWeCanHelp.vue'
import Carousel from '../.vitepress/theme/components/Carousel.vue'
import LatestBlog from '../.vitepress/theme/components/LatestBlog.vue'
</script>

<HomeHero backgroundImage="/images/black_patternback.svg" 
:videos = "['vovLkye-xLw']"
tagline = "Connecting People with Language Data"
description = "The Language Data Commons of Australia brings together digital infrastructure, ethical governance, and long-term care so that language materials remain findable and usable in culturally appropriate ways into the future.
  <br/>
  LDaCA offers practical tools, guidance, and infrastructure for everyone working with language data. Whether you collect, steward, discover, analyse or reuse language materials, we can help you do that work well."
  />


<DataPortalBox 
  heading="Use the Data Portal"
  description="Search, browse and use language materials"
  buttonText="Go to the Data Portal"
  buttonLink="https://data.ldaca.edu.au"
/>

<HowWeCanHelp 
:items = "[
  {
    title: 'Find & access language materials',
    image: 'https://placehold.co/400x400',
    description: 'Discover and access a wide range of language materials through our comprehensive search tools and data portal. We make it easy to find the resources you need for your research.',
    link: '/working-with-data/find-access/'
  },
  {
    title: 'Organise & describe data',
    image: 'https://placehold.co/400x400',
    description: 'Learn best practices for organising and describing your language data with metadata standards that ensure discoverability and long-term preservation.',
    link: '/working-with-data/organise-describe/'
  },
  {
    title: 'License collections responsibly',
    image: 'https://placehold.co/400x400',
    description: 'Get guidance on choosing appropriate licenses for your language collections that respect cultural protocols and legal requirements.',
    link: '/working-with-data/license-share-govern/'
  },
  {
    title: 'Share data with care',
    image: 'https://placehold.co/400x400',
    description: 'Implement ethical data sharing practices that honor community wishes and maintain appropriate access controls for sensitive materials.',
    link: '/working-with-data/license-share-govern/'
  },
  {
    title: 'Guidance on governance',
    image: 'https://placehold.co/400x400',
    description: 'Access frameworks and guidance for establishing governance structures that support ethical stewardship of language data.',
    link: '/working-with-data/license-share-govern/'
  },
  {
    title: 'Process data for use',
    image: 'https://placehold.co/400x400',
    description: 'Use our tools and workflows to process language data into formats ready for analysis, visualisation, and other research applications.',
    link: '/working-with-data/process-analyse/'
  },
  {
    title: 'Analyse language at scale',
    image: 'https://placehold.co/400x400',
    description: 'Leverage computational tools and infrastructure to perform large-scale language analysis across diverse collections and datasets.',
    link: '/working-with-data/process-analyse/'
  }
]"
/>

<Carousel 
  backgroundColor="#EAE4D68C"
  :opacity="100"
  heading="PROJECTS, CASE STUDIES & RESOURCES"
  :items="[
      {
        title: 'Arne ingkerreke apurtelhe-ileme: Project launch',
        link: '/news/posts/VeronicaDobson-launch2025'
      },
      {
        title: 'Sydney Speaks',
        link: '/resources/general-resources/case-studies/sydney-speaks'
      },
      {
        title: 'Data Portal Guide',
        link: '/resources/user-guides/portal'
      }
    ]"/>

<LatestBlog />

<Carousel 
  heading="EVENTS & RECORDINGS"
  :items="[
    {
      title: 'Sustainable Data for Humanities Researchers workshop',
      link: '/news/events/2025/sustainable-data-for-humanities-researchers'
    },
    {
      title: 'The ParlaMint corpora of European parliamentary proceedings',
      link: '/news/events/2025/parlamint-corpora'
    },
    {
      title: 'Get Started with Federal Hansard for Humanities, Arts, and Social Sciences Research',
      link: '/news/events/2025/hansard-2'
    }
  ]"
/>

