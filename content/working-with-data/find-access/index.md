---
layout: home
title: "Find & access"
---

<SimpleHero breadcrumb="Working with data > Find & access" title="Find & access data" description="Digital infrastructure to help you find and access nationally significant language collections."/>

<SimpleNavigation
  title="Facilitating collection discovery and access"
  description="Significant collections of language data, including collections of Aboriginal and Torres Strait Islander languages, Australian Englishes and other migrant languages, and regional languages of the Pacific, are at risk of being lost. LDaCA works to secure at-risk collections and improve access to under-used collections. Dive into exploratory portals for data discovery, and find training and guides to support you in finding and accessing language data."
  :contents="[
    { label: 'Available portals', href: '#available-portals' },
    { label: 'Collections', href: '#collections' },
    { label: 'Guides', href: '#guides' },
    { label: 'On the blog', href: '#on-the-blog' },
    { label: 'Additional resources', href: '#additional-resources' },
    { label: 'Collaborators', href: '#collaborators' },
  ]" />

<div
  class="w-full max-w-[1184px] h-[5.6px] mx-auto"
  style="
    background-image: url('/images/section-divider.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  "
></div>

<CarouselLarge 
  id="available-portals"
  backgroundColor="#fff"
  :opacity="100"
  heading="AVAILABLE PORTALS"
  description='<GlossaryLink display="Oni" id="oni" />: A web application that provides indexing, searching and access to secure data repositories following the <GlossaryLink display="Arkisto" id="arkisto" /> model. This is used to build the LDaCA Portal: The online interface of the Language Data Commons of Australia where users can discover and access language collections.'
  :items="[
      {
        title: 'LDaCA Data Portal',
        description: 'Explore and access significant collections of language data, including the Mitchell and Delbridge corpus and the Australian component of the International Corpus of English (ICE).',
        image: '/images/LDaCA_data_portal.png',
        link: 'https://data.ldaca.edu.au',
      },
      {
        title: 'PARADISEC Portal',
        description: 'PARADISEC has more than 700 collections representing over 1,370 languages.',
        image: '/images/Paradisec_data_portal.png',
        link: 'https://catalog.paradisec.org.au/'
      },
    ]"/>

<CollectionsGrid 
  id="collections"
  heading="COLLECTIONS"
  description="Explore available collections for language research and work."
  />

<GuideCarousel 
  id="guides"
  backgroundColor="#fff"
  :opacity="100"
  heading="GUIDES"
  description="LDaCA guides to help you navigate language collections."
  :items="[
      {
        title: 'Data Portal User Guide',
        description: 'Guide to assist with using the LDaCA data portal.',
        image: '/images/PlainBackgrounds/Altblack.png',
        link: '/resources/guides/portal',
        level: 'Beginner',
        audience: 'Researchers, community, people working with data',
        category: 'LDACA TECHNOLOGIES GUIDE'
      },
      {
        title: 'Cite Data',
        description: 'A guide to citing collections and data accessed through the LDaCA data portal.',
        image: '/images/PlainBackgrounds/AltGreen.png',
        buttonColor: '#393939',
        link: '/resources/guides/portal/cite-data',
        level: 'Beginner',
        category: 'HOW-TO GUIDE',
        audience: 'Researchers, community, people working with data'
      },
    ]"/>

    
<div
  class="w-full max-w-[1184px] h-[5.6px] mx-auto"
  style="
    background-image: url('/images/section-divider.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  "
></div>
<Carousel 
  id="on-the-blog"
  shade="light"
  backgroundColor="#fff"
  :opacity="100"
  heading="ON THE BLOG"
  :items="[
      {
        title: 'Corpus spotlight: Mitchell and Delbridge',
        link: '/resources/posts/mitchell-delbridge'
      },
      {
        title: 'Putting data to work',
        link: '/resources/posts/putting-data-to-work'
      },
      {
        title: 'What happened to the Australian National Corpus (AusNC)?',
        link: '/resources/posts/ausnc'
      }
    ]"/>
<div
  class="w-full max-w-[1184px] h-[5.6px] mx-auto"
  style="
    background-image: url('/images/section-divider.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  "
></div>
<ThreeTiles 
  id="additional-resources"
  backgroundColor="#EAE4D68C"
  :opacity="100"
  heading="ADDITIONAL RESOURCES"
  :items="[
      {
        title: 'Digital Preservation Masterclass PARADISEC',
        image: '/images/DCC_Masterclass.png',
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
