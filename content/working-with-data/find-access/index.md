---
layout: home
title: "Find & Access"
---

<SimpleHero breadcrumb="Working with Data > Find & Access" title="Find & Access Data" description="Digital infrastructure to help you find and access nationally significant language collections."/>

<SimpleNavigation
  title="Facilitating collection discovery and access",
  description="Significant collections of language data, including collections of Aboriginal and Torres Strait Islander languages, Australian Englishes and other migrant languages, and regional languages of the Pacific, are at risk of being lost. LDaCA works to secure at-risk collections and improve access to under-used collections. Dive into exploratory portals for data discovery, and find training and guides to support you in finding and accessing language data."
  :contents="[
    { label: 'Available portals', href: '#available-portals' },
    { label: 'Collections', href: '#collections' },
    { label: 'Guides', href: '#guides' },
    { label: 'On the blog', href: '#on-the-blog' },
    { label: 'Additional resources', href: '#additional-resources' },
    { label: 'Collaborators', href: '#collaborators' },
  ]" />

<CarouselLarge 
  id="available-portals"
  backgroundColor="#EAE4D68C"
  :opacity="100"
  heading="AVAILABLE PORTALS"
  :items="[
      {
        title: 'LDaCA Data Portal',
        description: 'TODO description.',
        image: '/images/LDaCA_data_portal.png',
        link: 'https://data.ldaca.edu.au',
      },
      {
        title: 'PARADISEC Portal',
        description: 'PARADISEC has more than 700 collections representing over 1,370 languages.',
        image: '/images/partner-logos/paradisec_logo.png',
        link: 'https://catalog.paradisec.org.au/oni/'
      },
    ]"/>

<CollectionsGrid 
  id="collections"
  heading="COLLECTIONS"
  subheading="Explore available collections for language research and work."
  />

<GuideCarousel 
  id="guides"
  backgroundColor="#EAE4D68C"
  :opacity="100"
  heading="GUIDES"
  subheading="LDaCA guides to help you navigate language collections."
  :items="[
      {
        title: 'Data Portal User Guide',
        description: 'Information related to using the Data Portal.',
        link: '/resources/user-guides/portal',
        level: 'Beginner',
        audience: 'Researchers, community, people working with data',
        category: 'LDACA TECHNOLOGIES GUIDE'
      },
      {
        title: 'Cite Data',
        description: 'A guide to citing collections and data accessed through the portal.',
        link: '/resources/user-guides/portal/cite-data',
        level: 'Beginner',
        audience: 'Researchers, community, people working with data'
      },
    ]"/>

<Carousel 
  id="on-the-blog"
  shade="light"
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

<ThreeTiles 
  id="additional-resources"
  backgroundColor="#EAE4D68C"
  :opacity="100"
  heading="ADDITIONAL RESOURCES"
  :items="[
      {
        title: 'Digital Preservation Masterclass PARADISEC',
        image: 'https://img.youtube.com/vi/gRuwHx744KU/sddefault.jpg',
        link: 'https://www.youtube.com/watch?v=gRuwHx744KU',
        category: 'RECORDING'
      },
      {
        title: 'Why can’t I access all materials anyway?',
        description: 'Hear from Chief Investigator Rose Barrowcliffe as she explains why not every item in a language data commons can or should be open to everyone. She unpacks factors that inform access and why protecting sensitive knowledge is essential to respectful language work. This short video shows how appropriate care for materials ensures they are shared in ways that are safe and meaningful.',
        image: 'https://img.youtube.com/vi/TLVWsQUEyHk/sddefault.jpg',
        link: 'https://www.youtube.com/watch?v=TLVWsQUEyHk',
        category: 'RECORDING'
      },
      {
        title: 'What is a data portal anyway?',
        description: 'Hear from Research Data Analyst Rosanna Smith as she introduces LDaCA’s data portal, an online interface for discovering and accessing language collections. She explains how the portal’s development is guided by FAIR and CARE principles. RO-Crate structured data is used to catalogue and display collections in the portal along with infrastructure for managing access to the data with as little or as much restriction as needed.',
        image: 'https://img.youtube.com/vi/GpAnO05o2Tw/sddefault.jpg',
        link: 'https://www.youtube.com/watch?v=GpAnO05o2Tw',
        category: 'RECORDING'
      }
    ]"/>

<Collaborators 
  id="collaborators"
  heading="COLLABORATORS"
  :items="[
      {
        title: 'PARADISEC',
        image: '/images/partner-logos/paradisec_logo.png',
        link: 'https://www.paradisec.org.au/'
      },
      {
        title: 'CLARIN',
        image: '/images/partner-logos/ClarinLogo.png',
        link: 'https://www.clarin.eu/'
      },
      {
        title: 'AIATSIS',
        image: '/images/partner-logos/AIATSIS_logo.svg',
        link: 'https://aiatsis.gov.au/'
      },
    ]"/>

<ContactBox 
  heading="Interested in contributing to LDaCA?"
  description="Do you have data, expertise or resources you'd like to share? We'd love to hear from you."
  buttonText="Get in touch"
  buttonLink="/contact/"
/>
