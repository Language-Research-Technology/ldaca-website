---
layout: home
title: "Guides"
hero:
  tagline: "GUIDES"
  description: "Guides description goes here."
---

<script setup>
    import SubPageHero from '../../../.vitepress/theme/components/SubPageHero.vue'
    import HomeCarousel from '../../../.vitepress/theme/components/HomeCarousel.vue'

</script>

<SubPageHero />

<HomeCarousel 
  backgroundColor="#EAE4D68C"
  :opacity="100"
  heading="CRATE-O"
  :items="[
      {
        title: 'General Information',
        link: '/resources/user-guides/crate-o/general'
      },
      {
        title: 'Basic Navigation',
        link: '/resources/user-guides/crate-o/basic-navigation'
      },
      {
        title: 'RO-Crate Creation',
        link: '/resources/user-guides/crate-o/ro-crate-creation'
      },
      {
        title: 'Convert Spreadsheet',
        link: '/resources/user-guides/crate-o/convert-spreadsheet'
      }
    ]"/>

<HomeCarousel 
  backgroundColor="#EAE4D68C"
  :opacity="100"
  heading="PORTAL"
  :items="[
      {
        title: 'Available Portals',
        link: '/resources/user-guides/portal/available-portals'
      },
      {
        title: 'Basic Navigation',
        link: '/resources/user-guides/portal/basic-navigation'
      },
      {
        title: 'Filters',
        link: '/resources/user-guides/portal/filters'
      },
      {
        title: 'Search',
        link: '/resources/user-guides/portal/search'
      },
      {
        title: 'Sort and Order',
        link: '/resources/user-guides/portal/sort-and-order'
      },
      {
        title: 'Login',
        link: '/resources/user-guides/portal/login'
      },
      {
        title: 'Collection Access',
        link: '/resources/user-guides/portal/collection-access'
      },
      {
        title: 'Download Data',
        link: '/resources/user-guides/portal/download-data'
      },
      {
        title: 'Cite Data',
        link: '/resources/user-guides/portal/cite-data'
      }
    ]"/>