---
title: "Resources"
layout: "home"
---

<SimpleHero title="Resources" description="Digital infrastructure to help you find and access nationally significant language collections."/>

<SimpleNavigation
  title="Facilitating collection discovery and access"
  description="Significant collections of language data, including collections of Aboriginal and Torres Strait Islander languages, Australian Englishes and other migrant languages, and regional languages of the Pacific, are at risk of being lost. LDaCA works to secure at-risk collections and improve access to under-used collections. Dive into exploratory portals for data discovery, and find training and guides to support you in finding and accessing language data."
  :contents="[
    { label: 'Latest publications', href: '#latest-publications' },
    { label: 'Latest guides', href: '#latest-guides' },
    { label: 'Latest tools & technologies', href: '#latest-tools-technologies' },
    { label: 'Latest videos', href: '#latest-videos' },
    { label: 'Latest presentations', href: '#latest-presentations' },
    { label: 'Latest interviews', href: '#latest-interviews' },
  ]" />

<CarouselLarge 
  id="latest-publications"
  backgroundColor="#EAE4D68C"
  :opacity="100"
  heading="LATEST PUBLICATIONS"
  description=''
  viewAll='/resources/publications'
  :items="[
    //   {
    //     title: 'LDaCA Data Portal',
    //     description: 'Explore and access significant collections of language data, including the Mitchell and Delbridge corpus and the International Corpus of English.',
    //     image: '/images/LDaCA_data_portal.png',
    //     link: 'https://data.ldaca.edu.au',
    //   },
    //   {
    //     title: 'PARADISEC Portal',
    //     description: 'PARADISEC has more than 700 collections representing over 1,370 languages.',
    //     image: '/images/partner-logos/paradisec_logo.png',
    //     link: 'https://catalog.paradisec.org.au/oni/'
    //   },
    ]"/>

<GuideCarousel 
  id="latest-guides"
  backgroundColor="#EAE4D68C"
  :opacity="100"
  heading="LATEST GUIDES"
  viewAll='/resources/guides'
  :items="[
      {
        title: 'Data Portal User Guide',
        link: '/resources/guides/portal',
        image: '/images/LDaCA_data_portal.png',
        level: 'Beginner',
        audience: 'Researchers, community, people working with data',
        category: 'LDACA TECHNOLOGIES GUIDE'
      },
      {
        title: 'Crate-O User Guide',
        link: '/resources/guides/crate-o',
        image: 'https://language-research-technology.github.io/crate-o/logo.svg',
        level: 'Beginner',
        audience: 'Researchers, community, people working with data',
        category: 'LDACA TECHNOLOGIES GUIDE'
      },
    ]"/>

<!-- <CollectionsGrid 
  id="latest-tools-technologies"
  heading="LATEST TOOLS & TECHNOLOGIES"
  description=""
  /> -->

<Carousel 
  id="latest-videos"
  shade="light"
  backgroundColor="#EAE4D68C"
  :opacity="100"
  heading="LATEST VIDEOS"
  buttonText="Watch recording"
  viewAll='/resources/audio-video'
  :items="[
      {
        title: 'Language Data Commons of Australia - HASS & Indigenous Research Data Commons Symposium 2025',
        link: '/training-events/events/2025/hass-irdc-symposium-2',
      },
      {
        title: 'Showcase of Language Data Infrastructure - Language Data Commons of Australia',
        link: '/training-events/events/2025/hass-irdc-symposium-1',
      },
      {
        title: 'The ParlaMint corpora of European parliamentary proceedings',
        link: '/training-events/events/2025/parlamint-corpora',
      },
    ]"/>

<TwoTiles 
  id="latest-presentations"
  backgroundColor="#EAE4D68C"
  :opacity="100"
  heading="LATEST PRESENTATIONS"
  viewAll='/resources/presentations'
  type='presentation'
/>

<TwoTiles 
  id="latest-interviews"
  backgroundColor="#EAE4D68C"
  :opacity="100"
  heading="LATEST INTERVIEWS"
  viewAll='/resources/interviews'
  type='interview'
/>