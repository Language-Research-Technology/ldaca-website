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
  title="Use the Data Portal"
  subtitle="Search, browse and use language materials"
  buttonText="Go to the Data Portal"
  buttonLink="https://data.ldaca.edu.au"
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
    description: 'Learn best practices for organising and describing your language data with metadata standards that ensure discoverability and long-term preservation.'
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
    description: 'Use our tools and workflows to process language data into formats ready for analysis, visualisation, and other research applications.'
  },
  {
    title: 'Analyse language at scale',
    image: 'https://placehold.co/400x300',
    description: 'Leverage computational tools and infrastructure to perform large-scale language analysis across diverse collections and datasets.'
  }
]"
/>

<Carousel 
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

<Carousel 
  heading="EVENTS & RECORDINGS"
  :items="[
    {
      title: 'Sustainable Data for Humanities Researchers workshop',
      description: 'Research data is valuable — we spend time (and often, money) in collecting it, and it is fundamental to creating knowledge. Because of this value, we have a responsibility to ensure that data will continue to be useful, minimally to ourselves but ideally also to others. This workshop will introduce participants to basic ideas of data management, which are oriented to making data sustainable in line with two important sets of principles, FAIR and CARE.',
      image: 'https://rduevents.unimelb.edu.au/live/image/scale/2x/gid/23/width/300/height/169/crop/1/609_HASSevent.rev.1754545130.webp',
      link: '/news/events'
    },
    {
      title: 'Webinar: The ParlaMint corpora of European parliamentary proceedings',
      description: 'CLARIN colleagues Tomaž Erjavec and Matyáš Kopp delivered the second webinar in our 2025 series in August. Tomaž and Matyáš discussed the compilation and dissemination of the ParlaMint corpora, a collection of 29 corpora of European national and regional parliamentary proceedings, covering at least the period from 2015 to 2022 and containing over 1 billion words.',
      image: 'https://www.clarin.eu/sites/default/files/styles/max_325x325/public/parlamintvisual2.png?itok=c7K5X6Ke',
      link: '/news/events'
    },
    {
      title: 'Get Started with Federal Hansard for Humanities, Arts, and Social Sciences Research',
      description: 'Parliamentary bodies around the world have been publishing transcriptions of their proceedings for decades or even centuries. These transcriptions enable public scrutiny and transparency of the actions and speech of legislative bodies and elected representatives. Because of their documentation of legislative action and speech, their relatively consistent format and their coverages of long periods of time, they are potentially useful for policy researchers, media and communication scholars, political scientists, linguists, sociologists, historians and many others.',
      image: 'https://static.uq.net.au/v11/logos/corporate/uq-logo.svg',
      link: '/news/events'
    }
  ]"
/>

