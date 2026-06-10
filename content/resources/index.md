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
    // { label: 'Latest tools & technologies', href: '#latest-tools-technologies' },
    { label: 'Latest videos', href: '#latest-videos' },
    { label: 'Latest presentations', href: '#latest-presentations' },
    { label: 'Latest interviews', href: '#latest-interviews' },
  ]" />

<LatestPublications 
  id="latest-publications"
  backgroundColor="#EAE4D68C"
  :opacity="100"
  heading="LATEST PUBLICATIONS"
  description=''
  viewAll='/resources/publications'
  :items="[
      {
        title: 'Attitude in Reported and Non-reported News: A Critique of Sentiment Analysis in Corpus Pragmatics.',
        author: 'Monika Bednarek & Maite Taboada',
        image: '/resources/publications/unparliamentary_paper.png',
        link: 'https://doi.org/10.1007/s41701-025-00185-6',
      },
      {
        title: '“How is that unparliamentary?”: The metapragmatics of ‘unparliamentary’ language in the Australian Federal Parliament.',
        author: 'Sam Hames, Michael Haugh & Simon Musgrave',
        image: '/resources/publications/unparliamentary_paper.png',
        link: 'https://doi.org/10.1016/j.lingua.2025.103932'
      },
      {
        title: 'Australian slang as a literary genre.',
        author: 'Simon Musgrave',
        image: '/resources/publications/unparliamentary_paper.png',
        link: 'https://doi.org/10.1080/07268602.2024.2444219'
      },
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
        image: '/resources/guides/crate-o/ro-crate-creation/add_entity_metadata.png',
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

<Carousel 
  id="latest-interviews"
  :opacity="100"
  heading="LATEST INTERVIEWS"
  viewAll='/resources/interviews'
  type='interview'
  threeTiles=true
  shade="light"
/>