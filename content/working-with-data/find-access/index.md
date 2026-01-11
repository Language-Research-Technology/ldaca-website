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
        description: 'The Pacific and Regional Archive for Digital Sources in Endangered Cultures (PARADISEC) is a digital archive of small and endangered languages, particularly from the Australia-Pacific region. PARADISEC was founded in 2003 by a group of Australian researchers responding to a legacy of irreplaceable audiovisual materials created during fieldwork. It now contains 17,300 hours of audio recordings and 3300 hours of video recordings in 1378 languages. For over 20 years, PARADISEC has been building connections with archives and cultural centres in the Pacific, returning digital copies of materials, digitising analogue materials, and enriching materials in the collection including by adding text transcriptions. PARADISEC received the Digital Preservation Coalition’s Award for Research and Innovation in 2024 and are working with LDaCA to improve access to language material from Australia and the Pacific region under PARADISEC Director and LDaCA Chief Investigator Nick Thieberger.',
        image: 'https://www.paradisec.org.au/wp-content/uploads/2021/08/paradisec_logo_vector.png',
        link: 'https://www.paradisec.org.au/'
      },
      {
        title: 'AIATSIS',
        description: 'The Australian Institute of Aboriginal and Torres Strait Islander Studies (AIATSIS) is our national institute for stewarding and appropriately sharing Aboriginal and Torres Strait Islander culture and heritage. AIATSIS cares for a growing collection of more than 1 million items encompassing films, photographs, audio recordings, art and objects, printed and other resource materials—including large collections of language data. The work of the AIATSIS Centre for Australian Languages (ACAL) has been fundamental in making archival language records more accessible, including in the enhancement of the Austlang database and associated coding system, their annual Paper and Talk event which supports community capacity-building in archival research and their long-running Dictionaries Program. We are very pleased to have AIATSIS on board as one of our advisory partners and we look forward to growing this collaboration across the life of the project.',
        image: 'https://mcusercontent.com/ef8667be63aefb1e35062a797/images/a687f76b-1027-a779-0be8-5cf9c1a5d525.png',
        link: 'https://aiatsis.gov.au/'
      },
      {
        title: 'CLARIN',
        description: 'CLARIN (Common Language Resources and Technology Infrastructure) is a European Research Infrastructure Consortium (ERIC) which supports the sharing, use and sustainability of multimodal digital language data and tools for humanities and social sciences research. CLARIN is a distributed virtual infrastructure, with a network of participating centres across Europe and beyond, including universities, research centres, libraries and public archives. Tools and data housed in different centres are interoperable, so that data collections can be combined and tools chained to perform complex operations, regardless of their location. CLARIN has taken the role of advisory partner to LDaCA and discussions about further collaboration are continuing.',
        image: 'https://www.clarin.eu/themes/contrib/clarin_bootstrap/logo.svg',
        link: 'https://www.clarin.eu/'
      }
    ]"/>