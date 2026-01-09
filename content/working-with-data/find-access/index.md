---
layout: home
title: "Find & Access"
hero:
  tagline: "FIND & ACCESS"
  description: "Find & access description goes here."
---

<script setup>
    import SubPageHero from '../../../.vitepress/theme/components/SubPageHero.vue'
    import HomeCarousel from '../../../.vitepress/theme/components/HomeCarousel.vue'
</script>

<SubPageHero />

<HomeCarousel 
  backgroundColor="#EAE4D68C"
  :opacity="100"
  heading="GUIDES"
  :items="[
      {
        title: 'DATA Portal User Guide',
        description: 'Information related to using the Data Portal.',
        link: '/resources/user-guides/portal'
      },
      {
        title: 'Cite Data',
        description: 'A guide to citing collections and data accessed through the portal.',
        link: '/resources/user-guides/portal/cite-data'
      },
    ]"/>

<HomeCarousel 
  backgroundColor="#EAE4D68C"
  :opacity="100"
  heading="ON THE BLOG"
  :items="[
      {
        title: 'Corpus spotlight: Mitchell and Delbridge',
        link: '/news/posts/mitchell-delbridge'
      },
      {
        title: 'Putting data to work',
        link: '/news/posts/putting-data-to-work'
      },
      {
        title: 'What happened to the Australian National Corpus (AusNC)?',
        link: '/news/posts/ausnc'
      }
    ]"/>

<HomeCarousel 
  backgroundColor="#EAE4D68C"
  :opacity="100"
  heading="RELATED MATERIALS"
  :items="[
      {
        title: 'How do I even work with language data?',
        description: 'TODO',
        link: 'https://www.youtube.com/@LDaCA_Project'
      }
    ]"/>

<HomeCarousel 
  backgroundColor="#EAE4D68C"
  :opacity="100"
  heading="COLLABORATORS"
  :items="[
      {
        title: 'PARADISEC',
        description: 'PARADISEC (the Pacific And Regional Archive for Digital Sources in Endangered Cultures) is a digital archive of records of some of the many small cultures and languages of the world. Our research group has developed models to ensure that the archive can provide access to interested communities, and conforms with emerging international standards for digital archiving.',
        image: 'https://www.paradisec.org.au/wp-content/uploads/2021/08/paradisec_logo_vector.png',
        link: 'https://www.paradisec.org.au/'
      },
      {
        title: 'AIATSIS',
        description: 'The Australian Institute of Aboriginal and Torres Strait Islander Studies (AIATSIS) is an Indigenous-led, national institute that celebrates, educates and inspires people from all walks of life to connect with the knowledge, heritage and cultures of Australia’s First Peoples. Our vision is a world in which Aboriginal and Torres Strait Islander knowledge and cultures are recognised, respected, celebrated and valued.',
        image: 'https://mcusercontent.com/ef8667be63aefb1e35062a797/images/a687f76b-1027-a779-0be8-5cf9c1a5d525.png',
        link: 'https://aiatsis.gov.au/'
      },
      {
        title: 'CLARIN',
        description: 'CLARIN is a digital infrastructure which provides easy and sustainable access to a broad range of language data and tools to support research in the humanities and social sciences, and beyond. CLARIN provides access to multimodal digital language data (text, audio, video) and advanced tools with which to explore, analyse or combine these datasets.',
        image: 'https://www.clarin.eu/themes/contrib/clarin_bootstrap/logo.svg',
        link: 'https://www.clarin.eu/'
      }
    ]"/>