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
  heading="Explore the Data Portal"
  description="Search, browse and use language materials"
  buttonText="Go to the Data Portal"
  buttonLink="https://data.ldaca.edu.au"
/>

<HowWeCanHelp 
:items = "[
  {
    title: 'Find & access language materials',
    image: 'https://placehold.co/400x400',
    description: 'Exploratory portals to help you discover nationally significant language collections and access previously at-risk datasets. Find guides and information to support you in finding and accessing data. Receive support to ensure collections you manage are secure, discoverable and accessible into the future.',
    link: '/working-with-data/find-access/'
  },
  {
    title: 'Organise & describe data',
    image: 'https://placehold.co/400x400',
    description: 'Practical guidance and tools to help you structure language materials so that they can be understood, found and reused in the right ways. Learn about metadata practices and how RO-Crate can help with packaging your data. Find hands-on tools to help you work like Crate-O and RO-Crate Playground.',
    link: '/working-with-data/organise-describe/'
  },
  {
    title: 'License collections responsibly',
    image: 'https://placehold.co/400x400',
    description: 'Example licenses and guidelines for describing who can access your collection and how they can use it. Learn how to understand license conditions and find the licenses of collections accessible on our data portal.',
    link: '/working-with-data/license-share-govern/'
  },
  {
    title: 'Share data with care',
    image: 'https://placehold.co/400x400',
    description: 'Support for contributing your data to the LDaCA ecosystem, with appropriate access controls. Understand how we apply the FAIR and CARE principles to ethically manage and share data.',
    link: '/working-with-data/license-share-govern/'
  },
  {
    title: 'Guidance on governance',
    image: 'https://placehold.co/400x400',
    description: 'Information on appropriately caring for data collections and applying Indigenous Data Governance. Find resources on governing data, and learn where to go to find out more.',
    link: '/working-with-data/license-share-govern/'
  },
  {
    title: 'Process data for use',
    image: 'https://placehold.co/400x400',
    description: 'Tools and information about processing datasets before reuse. Learn about the different ways you may need to process data depending on your research purpose and find tools to help create machine readable corpora.',
    link: '/working-with-data/process-analyse/'
  },
  {
    title: 'Analyse language at scale',
    image: 'https://placehold.co/400x400',
    description: 'Step-by-step guides and tools for analysing large amounts of language data. Find text analytics tools produced by the Language Technology and Data Analysis Laboratory (LADAL), such as their Topic Modelling tool, and more tools including the ATAP Quotation Tool.',
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
        link: '/resources/posts/VeronicaDobson-launch2025'
      },
      {
        title: 'Sydney Speaks',
        link: '/projects-case-studies/case-studies/sydney-speaks',
        category: 'CASE STUDY'
      },
      {
        title: 'Data Portal Guide',
        image: '/images/LDaCA_data_portal.png',
        link: '/resources/guides/portal',
        category: 'RESOURCE'
      }
    ]"/>

<LatestBlog />

<Carousel 
  heading="EVENTS & RECORDINGS"
  :items="[
    {
      title: 'Sustainable Data for Humanities Researchers workshop',
      link: '/training-events/events/2025/sustainable-data-for-humanities-researchers'
    },
    {
      title: 'The ParlaMint corpora of European parliamentary proceedings',
      link: '/training-events/events/2025/parlamint-corpora'
    },
    {
      title: 'Get Started with Federal Hansard for Humanities, Arts, and Social Sciences Research',
      link: '/training-events/events/2025/hansard-2'
    }
  ]"
/>

