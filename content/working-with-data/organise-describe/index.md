---
layout: home
title: "Organise & describe"
---

<SimpleHero breadcrumb="Working with data > Organise & describe" title="Organise & describe data" description="Practical help for making your collections clearer, more accessible and responsibly managed."/>

<SimpleNavigation
  title="Building clearer, more useable collections"
  description='The way you organise and describe your data plays a key role in making your collection useable and meaningful. LDaCA seeks to support researchers and communities to build collections that remain useful, accessible and responsibly managed into the future. Explore practical guides, tools and insights to support clear, effective data management that follows <GlossaryLink display="FAIR" id="fair" /> and <GlossaryLink display="CARE" id="care" /> principles.'
  :contents="[
    { label: 'Tools', href: '#tools' },
    { label: 'Guides', href: '#guides' },
    { label: 'On the blog', href: '#on-the-blog' },
    { label: 'Additional resources', href: '#additional-resources' }
  ]"
/>

<CarouselLarge 
  id="tools"
  backgroundColor="#EAE4D68C"
  :opacity="100"
  heading="TOOLS"
  description='Flexible tools to assist with creating <GlossaryLink display="linked-data" id="linked-data" /> description and packaging.'
  :items="[
      {
        title: 'Metadata editor: Crate-O',
        description: 'A browser-based tool for creating and editing RO-Crates. Use Crate-O to describe data and collections with structured metadata, add or update files and entities and build an RO-Crate through a guided interface.',
        image: '/images/CrateO.png',
        link: 'https://language-research-technology.github.io/crate-o/#/',
        guideLink: '/resources/guides/crate-o'
      },
      {
        title: 'RO-Crate Playground',
        description: 'Already have an RO-Crate? RO-Crate Playground is a browser-based tool for exploring, testing and validating RO-Crates. Use the Playground to inspect RO-Crate metadata, check how entities and properties are structured and identify issues with an existing RO-Crate.',
        image: '/images/ROCratePlayground.png',
        link: 'https://ro-crate.ldaca.edu.au/'
      },
            {
        title: 'Nyingarn',
        description: 'Nyingarn is a digital workspace for organising, describing and working with manuscript sources of Australian Indigenous languages. Users can add structured metadata to manuscript items, enhance transcriptions with information about people, places and languages, and prepare materials for appropriate access and reuse. Nyingarn combines transcription and metadata tools to help transform manuscript images into well-described, searchable and reusable digital language resources.',
        image: '/images/Nyingarn_screenshot.png',
        link: 'https://nyingarn.net/'
      }
    ]"/>

<GuideCarousel 
  id="guides"
  backgroundColor="#fff"
  :opacity="100"
  heading="GUIDES"
  description="LDaCA provides hands-on support to make language data usable, ethical and future-ready."
  :items="[
      {
        title: 'Metadata',
        category: 'RESOURCE',
        description: 'Not sure what metadata means or why it matters when working with language data? This guide breaks down the key concepts and explains how metadata helps make language materials easier to describe, find and use.',
        level: 'Beginner',
        image:'/images/PlainBackgrounds/Greenplain.png',
        audience: 'Researchers, community, people working with data',
        link: '/resources/guides/metadata',
        buttonColor:'#393939',
      },
      {
        title: 'Crate-O User Guide',
        description: 'A practical guide to using Crate-O, covering key RO-Crate and metadata concepts, navigating the interface, creating RO-Crates and adding metadata in bulk using spreadsheets.',
        image: '/resources/guides/crate-o/ro-crate-creation/add_entity_metadata.png',
        link: '/resources/guides/crate-o',
        level: 'Beginner–Intermediate',
        audience: 'Researchers, data managers, archivists and people working with data',
        category: 'LDACA TECHNOLOGIES GUIDE',
        image:'/images/PlainBackgrounds/Blackplain.png',
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
<Carousel
  id="on-the-blog"
  shade="light"
  backgroundColor="#fff"
  :opacity="100"
  heading="ON THE BLOG"
  :items="[
      {
        title: 'Five benefits of RO-Crate data packaging for language collections',
        image: 'https://mcusercontent.com/ef8667be63aefb1e35062a797/images/eac5dabf-9dd9-bcce-b80e-7c01da72cb9e.jpg',
        link: '/resources/posts/ro-crate-benefits'
      },
      {
        title: 'Team member tip: Mastering metadata',
        link: '/resources/posts/team-member-tip-mark-raadgever'
      },
      {
        title: 'Crate-O — a drop-in linked data metadata editor for RO-Crate (and other) linked data in repositories and beyond',
        link: '/resources/posts/2024-OR-Crate-O'
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
        title: 'Language Data Commons Schema Terms',
        description: 'This is a language data schema, in the style of the Schema.org schema. It is based on OLAC terms for use in the LDaCA project. This schema builds on Schema.org and is intended to be used with the Language Data Commons RO-Crate Profile.',
        image:'/images/PlainBackgrounds/Green.png',
        link: 'https://w3id.org/ldac/terms',
        category: 'WEB PAGE'
      },
      {
        title: 'What is an RO-Crate?',
        description: 'An explainer about Research Object Crates (RO-Crates). Created by Otis Carmichael.',
        image: 'https://img.youtube.com/vi/tAR-JNN3EbA/sddefault.jpg',
        link: 'https://www.youtube.com/watch?v=tAR-JNN3EbA',
        category: 'VIDEO'
      },
      {
        title: 'Introduction to metadata',
        image: '/images/thumbnails/slides_2025_metadata.png',
        link: 'https://ardc.edu.au/wp-content/uploads/2025/03/b2-metadata_session.pdf',
        category: 'SLIDES'
      }
    ]"/>

<ContactBox 
  heading="Interested in contributing to LDaCA?"
  description="Do you have data, expertise or resources you'd like to share? We'd love to hear from you."
  buttonText="Get in touch"
  buttonLink="/contact/"
/>