---
layout: home
title: "Organise & Describe"
hero:
  tagline: "ORGANISE & DESCRIBE"
  description: "Organise & describe description goes here."
---

<script setup>
    import SubPageHero from '../../../.vitepress/theme/components/SubPageHero.vue'
    import HomeCarousel from '../../../.vitepress/theme/components/HomeCarousel.vue'
    import DataPortalBox from '../../../.vitepress/theme/components/DataPortalBox.vue'
</script>

<SubPageHero />

<DataPortalBox 
  title="Interested in contributing your data?"
  subtitle="View the Data Onboarding Process for steps on how."
  buttonText="Data Onboarding Process"
  buttonLink="/resources/ldaca-resources/data-onboarding-process/"
/>

<HomeCarousel 
  backgroundColor="#EAE4D68C"
  :opacity="100"
  heading="TOOLS"
  :items="[
      {
        title: 'Crate-O',
        description: 'Crate-O is a browser-based editor for Research Object Crates (RO-Crate). RO-Crate is a flexible, developer-friendly approach to linked-data description and packaging.',
        image: 'https://language-research-technology.github.io/crate-o/logo.svg',
        link: 'https://language-research-technology.github.io/crate-o/#/'
      },
      {
        title: 'RO-Crate Playground',
        description: 'RO-Crate Playground provides tools and resources for creating, managing, and sharing RO-Crates for efficient data organization and accessibility.',
        link: 'https://ro-crate.ldaca.edu.au/'
      }
    ]"/>

<HomeCarousel 
  backgroundColor="#EAE4D68C"
  :opacity="100"
  heading="GUIDES"
  :items="[
      {
        title: 'Metadata',
        description: 'Information about the approach to metadata being taken by LDaCA.',
        link: '/resources/ldaca-resources/metadata'
      },
      {
        title: 'Crate-O User Guide',
        description: 'Information related to using Crate-O for language data.',
        link: '/resources/user-guides/crate-o'
      }
    ]"/>

<HomeCarousel 
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
        link: '/news/posts/2024-or-crate-o'
      }
    ]"/>

<HomeCarousel 
  backgroundColor="#EAE4D68C"
  :opacity="100"
  heading="ADDITIONAL RESOURCES"
  :items="[
      {
        title: 'Language Data Commons Schema Terms',
        description: 'This is a language data schema, in the style of the Schema.org schema. It is based on OLAC terms for use in the LDaCA project. This schema builds on Schema.org and is intended to be used with the Language Data Commons RO-Crate Profile.',
        link: 'https://w3id.org/ldac/terms'
      },
      {
        title: 'What is an RO-Crate?',
        description: 'An explainer about Research Object Crates (RO-Crates). Created by Otis Carmichael.',
        image: 'https://img.youtube.com/vi/tAR-JNN3EbA/maxresdefault.jpg',
        link: 'https://www.youtube.com/watch?v=tAR-JNN3EbA'
      },
      {
        title: 'Introduction to metadata',
        description: 'TODO.',
        link: 'https://ardc.edu.au/wp-content/uploads/2025/03/b2-metadata_session.pdf'
      }
    ]"/>