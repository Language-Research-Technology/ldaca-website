---
layout: home
title: "Organise & Describe"
---

<SimpleHero breadcrumb="Working with Data > Organise & Describe" title="Organise & Describe Data" description="Practical help for making your collections clearer, more accessible and responsibly managed."/>

<SimpleNavigation
  title="Building clearer, more usable collections"
  description="The way you organise and describe your data plays a key role in making your collection usable and meaningful. LDaCA seeks to support researchers and communities to build collections that remain useful, accessible and responsibly managed into the future. Explore practical guides, tools and insights to support clear, effective data management that follows FAIR and CARE principles."
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
  subheading="Flexible tools to assist with creating linked-data description and packaging."
  :items="[
      {
        title: 'Metadata editor: Crate-O',
        description: 'A tool that allows you to create and update Research Object Crates (RO-Crates) using a web interface, and with metadata spreadsheets. It provides researchers with a relatively simple way to  describe their data using the best practices in formal metadata  description.',
        image: 'https://language-research-technology.github.io/crate-o/logo.svg',
        link: 'https://language-research-technology.github.io/crate-o/#/',
        guideLink: '/resources/user-guides/crate-o'
      },
      {
        title: 'RO-Crate Playground',
        description: 'RO-Crate Playground provides tools and resources for creating, managing, and sharing RO-Crates for efficient data organization and accessibility.',
        link: 'https://ro-crate.ldaca.edu.au/'
      }
    ]"/>

<GuideCarousel 
  id="guides"
  backgroundColor="#EAE4D68C"
  :opacity="100"
  heading="GUIDES"
  description="LDaCA provides hands-on support to make language data usable, ethical and future-ready."
  :items="[
      {
        title: 'Metadata',
        description: 'Not sure what metadata actually means or why everyone keeps talking about it? This guide has you covered — no jargon, just clear and practical advice.',
        level: 'Beginner',
        audience: 'Researchers, community, people working with data.',
        link: '/resources/ldaca-resources/metadata'
      },
      {
        title: 'Crate-O User Guide',
        description: 'Information related to using Crate-O for language data.',
        link: '/resources/user-guides/crate-o'
      }
    ]"/>

<Carousel
  id="on-the-blog"
  shade="light"
  backgroundColor="#EAE4D68C"
  :opacity="100"
  heading="ON THE BLOG"
  :items="[
      {
        title: 'Five benefits of RO-Crate data packaging for language collections',
        image: 'https://mcusercontent.com/ef8667be63aefb1e35062a797/images/eac5dabf-9dd9-bcce-b80e-7c01da72cb9e.jpg',
        link: '/news/posts/ro-crate-benefits'
      },
      {
        title: 'Team member tip: Mastering metadata',
        link: '/news/posts/team-member-tip-mark-raadgever'
      },
      {
        title: 'Crate-O - a drop-in linked data metadata editor for RO-Crate (and other) linked data in repositories and beyond',
        link: '/news/posts/2024-OR-Crate-O'
      }
    ]"/>

<ThreeTiles 
  id="additional-resources"
  backgroundColor="#EAE4D68C"
  :opacity="100"
  heading="ADDITIONAL RESOURCES"
  :items="[
      {
        title: 'Language Data Commons Schema Terms',
        description: 'This is a language data schema, in the style of the Schema.org schema. It is based on OLAC terms for use in the LDaCA project. This schema builds on Schema.org and is intended to be used with the Language Data Commons RO-Crate Profile.',
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
        link: 'https://ardc.edu.au/wp-content/uploads/2025/03/b2-metadata_session.pdf',
        category: 'SLIDES'
      }
    ]"/>

<ContactBox 
  heading="Interested in contributing to LDaCA?"
  description="Do you have data, expertise, or resources you'd like to share? We'd love to hear from you."
  buttonText="Get in touch"
  buttonLink="/contact/"
/>