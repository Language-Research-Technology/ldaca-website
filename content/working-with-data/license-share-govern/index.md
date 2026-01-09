---
layout: home
title: "License, Share & Govern"
hero:
  tagline: "LICENSE, SHARE & GOVERN"
  description: "License, share & govern description goes here."
---

<script setup>
    import SubPageHero from '../../../.vitepress/theme/components/SubPageHero.vue'
    import HomeCarousel from '../../../.vitepress/theme/components/HomeCarousel.vue'
    import DataPortalBox from '../../../.vitepress/theme/components/DataPortalBox.vue'
</script>

<SubPageHero />

<HomeCarousel 
  backgroundColor="#EAE4D68C"
  :opacity="100"
  heading="GUIDES"
  :items="[
      {
        title: 'Determining Access Conditions',
        link: '/resources/ldaca-resources/determining-access-conditions'
      },
      {
        title: 'Obtaining a DOI',
        link: '/resources/ldaca-resources/obtaining-a-doi'
      },
      {
        title: 'Access Policy',
        link: '/resources/ldaca-resources/access-policy'
      },
      {
        title: 'Guidance for Data Governance Decisions',
        link: '/resources/ldaca-resources/guidance-for-data-governance-decisions'
      },
    ]"/>

<HomeCarousel 
  backgroundColor="#EAE4D68C"
  :opacity="100"
  heading="ON THE BLOG"
  :items="[
      {
        title: 'Implementing PILARS',
        link: '/news/posts/implementing-pilars'
      },
      {
        title: 'Copyrighted data: Options and considerations for working with newspapers and other texts',
        link: '/news/posts/copyrighted-data'
      },
      {
        title: 'What are the FAIR and CARE principles and why should corpus linguists know about them?',
        link: '/news/posts/fair-and-care'
      },
  ]"/>

<DataPortalBox 
  title="Licenses"
  subtitle="Custom licenses that data contributors have applied to the content of their collection, including the content coverage of that license, in cases where these are not already-existing licenses (e.g. Creative Commons)."
  buttonText="Go to existing licenses"
  buttonLink="/resources/ldaca-resources/licenses"
/>