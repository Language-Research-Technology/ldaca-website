---
layout: home
title: "License, share & govern"
---

<SimpleHero breadcrumb="Working with data > License, share & govern" title="License, share & govern data" description="Guidance for licensing, sharing and governing data in alignment with FAIR and CARE principles."/>

<SimpleNavigation
  title="Caring for and sharing collections ethically"
  description="Language data is always connected to people. We have a responsibility to govern and share language collections in ways that respect the rights of the people represented in the data. Data licensing is a way of describing who can access the data and how it can be used, allowing you to share it responsibly. Find guides and examples for creating a data license, support for sharing data with appropriate access controls and insights for applying Indigenous Data Governance over the life of your collection."
  :contents="[
    { label: 'Guides', href: '#guides' },
    { label: 'On the blog', href: '#on-the-blog' },
    { label: 'Additional resources', href: '#additional-resources' },
  ]" />

<CarouselLarge
  heading="FEATURED RESOURCE"
  buttonText="Read more"
  :items="[
    {
      title: 'Framework for the Governance of Indigenous Data: HASS and Indigenous Research Data Commons',
      description: 'The Framework for the Governance of Indigenous Data provides a practical, culturally grounded approach to embedding Indigenous data governance across the HASS and Indigenous Research Data Commons. Developed through consultation and co-design, it supports Indigenous self-determination by providing principles, guidelines and accountability mechanisms for the ethical governance of Indigenous data throughout its lifecycle.',
      image: '/images/IDGFramework.png',
      link: 'https://zenodo.org/records/11135962',
    },
  ]"
   />
<GuideCarousel 
  id="guides"
  backgroundColor="#fff"
  :opacity="100"
  heading="GUIDES"
  :items="[
      {
        title: 'Determining Access Conditions',
        link: '/resources/guides/working-with-data/determining-access-conditions',
        image:'/images/PlainBackgrounds/Blackplain.png',
        level: 'Beginner-intermediate',
        audience: 'Data custodians, collection managers and researchers',
      },
      {
        title: 'Obtaining a DOI',
        link: '/resources/guides/working-with-data/obtaining-a-doi',
        image:'/images/PlainBackgrounds/Greenplain.png',
        buttonColor:'#393939',
        level: 'Beginner',
        audience: 'Researchers, data custodians and collection managers',
      },
      {
        title: 'Guidance for Data Governance Decisions',
        link: '/resources/guides/working-with-data/guidance-for-data-governance-decisions',
        image:'/images/PlainBackgrounds/Blackplain.png',
        level: 'Intermediate',
        audience: 'Data stewards, researchers and collection managers',
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


<CarouselLarge
    id="LDaCA Collection Licenses"
    heading="LDACA COLLECTION LICENSES"
    backgroundColor="white"
    buttonText="Go to existing licenses"
    :items="[
    {
        title: 'Explore existing licenses',
        description: 'Collections in the LDaCA Data Portal may use established licences, such as Creative Commons, or custom licences developed by data contributors to reflect the specific requirements of their collection. \n\n Explore the custom licences currently applied to LDaCA Data Portal collections, including what collection content they cover and how they shape access and use. Reviewing these examples may also help you consider appropriate licensing approaches for your own collections.',
        image: '/images/licence_graphic.png', 
        link: '/resources/licenses',
    },
    ]"
/>

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
        link: 'https://www.gida-global.org/careprinciples'
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