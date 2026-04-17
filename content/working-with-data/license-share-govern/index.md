---
layout: home
title: "License, Share & Govern"
---

<SimpleHero breadcrumb="Working with Data > License, Share & Govern" title="License, Share & Govern Data" description="Guidance for licensing, sharing and governing data in alignment with FAIR and CARE principles."/>

<SimpleNavigation
  title="Caring for and sharing collections ethically"
  description="Language data is always connected to people. We have a responsibility to govern and share language collections in ways that respect the rights of the people represented in the data. Data licensing is a way of describing who can access the data and how it can be used, allowing you to share it responsibly. Find guides and examples for creating a data license, support for sharing data with appropriate access controls and insights for applying Indigenous Data Governance over the life of your collection."
  :contents="[
    { label: 'Guides', href: '#guides' },
    { label: 'On the blog', href: '#on-the-blog' },
    { label: 'Additional resources', href: '#additional-resources' },
  ]" />

<GuideCarousel 
  id="guides"
  backgroundColor="#EAE4D68C"
  :opacity="100"
  heading="GUIDES"
  :items="[
      {
        title: 'Determining Access Conditions',
        link: '/resources/guides/working-with-data/determining-access-conditions',
      },
      {
        title: 'Obtaining a DOI',
        link: '/resources/guides/working-with-data/obtaining-a-doi'
      },
      {
        title: 'Access Policy',
        link: '/resources/guides/working-with-data/access-policy'
      },
      {
        title: 'Guidance for Data Governance Decisions',
        link: '/resources/guides/working-with-data/guidance-for-data-governance-decisions'
      },
    ]"/>

<DataPortalBox 
  heading="Licenses"
  description="Custom licenses that data contributors have applied to the content of their collection, including the content coverage of that license, in cases where these are not already-existing licenses (e.g. Creative Commons)."
  buttonText="Go to existing licenses"
  buttonLink="/resources/licenses"
/>

<Carousel 
  id="on-the-blog"
  shade="light"
  backgroundColor="#EAE4D68C"
  :opacity="100"
  heading="ON THE BLOG"
  :items="[
      {
        title: 'Implementing PILARS',
        link: '/resources/posts/implementing-PILARS'
      },
      {
        title: 'Copyrighted data: Options and considerations for working with newspapers and other texts',
        link: '/resources/posts/copyrighted-data'
      },
      {
        title: 'What are the FAIR and CARE principles and why should corpus linguists know about them?',
        link: '/resources/posts/fair-and-care'
      },
  ]"/>

<ThreeTiles 
  id="additional-resources"
  backgroundColor="#EAE4D68C"
  :opacity="100"
  heading="ADDITIONAL RESOURCES"
  :items="[
      {
        title: 'Why can’t I access all materials anyway?',
        description: 'Hear from Chief Investigator Rose Barrowcliffe as she explains why not every item in a language data commons can or should be open to everyone. She unpacks factors that inform access and why protecting sensitive knowledge is essential to respectful language work. This short video shows how appropriate care for materials ensures they are shared in ways that are safe and meaningful.',
        image: 'https://img.youtube.com/vi/TLVWsQUEyHk/sddefault.jpg',
        link: 'https://www.youtube.com/watch?v=TLVWsQUEyHk',
        category: 'RECORDING'
      },
      {
        title: 'CARE Principles',
        description: 'The CARE Principles are a set of guidelines for respecting and protecting Indigenous Peoples\' rights and interests in data and knowledge. They complement the FAIR principles of open data and science, and aim to advance Indigenous innovation and self-determination.',
        image: 'https://images.squarespace-cdn.com/content/v1/5d3799de845604000199cd24/1567592828276-IZWQDX1H6DRCD85GRSWJ/CARE+Principles.png?format=2500w',
        link: 'https://www.gida-global.org/care'
      },
      {
        title: 'FAIR Principles',
        description: 'FAIR stands for Findable, Accessible, Interoperable, and Reusable, and is a set of guidelines to improve the machine-actionability of digital assets. Learn how to apply the FAIR principles to data, metadata, and infrastructure with examples and resources.',
        image: 'https://www.go-fair.org/wp-content/themes/go-fair/images/logo.svg',
        link: 'https://www.go-fair.org/fair-principles/'
      },
    ]"/>

<ContactBox 
  heading="Interested in contributing to LDaCA?"
  description="Do you have data, expertise or resources you'd like to share? We'd love to hear from you."
  buttonText="Get in touch"
  buttonLink="/contact/"
/>