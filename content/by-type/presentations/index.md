---
layout: home
title: "Presentations"
hero:
  tagline: "PRESENTATIONS"
  description: "Presentations description goes here."
---

<script setup>
    import SubPageHero from '../../../.vitepress/theme/components/SubPageHero.vue'
    import LatestBlog from '../../../.vitepress/theme/components/LatestBlog.vue'

</script>

<SubPageHero />

<LatestBlog 
  :items="[
      {
        title: 'Implementing PILARS',
        description: 'Implementing PILARS in LDaCA.',
        image: 'https://placehold.co/600x360',
        link: '/news/posts/implementing-pilars'
      },
      {
        title: 'LDaCA Technical Architecture update 2025',
        description: 'This blog post provides an update on the Language Data Commons of Australia (LDaCA) technical architecture. It is adapted from a presentation delivered to the LDaCA Steering Committee on 22 August 2025 by Peter Sefton, Mosies Sacal Bonequi and Ben Foley.',
        image: 'https://placehold.co/600x360',
        link: '/news/posts/2025-ldaca_technical_architecture_update'
      },
      {
        title: 'Five ways RO-Crate data packages are important for repositories',
        description: 'TODO.',
        image: 'https://placehold.co/600x360',
        link: '/news/posts/2024-or-ro-crate'
      },
      {
        title: 'Crate-O - a drop-in linked data metadata editor for RO-Crate (and other) linked data in repositories and beyond',
        description: 'TODO.',
        image: 'https://placehold.co/600x360',
        link: '/news/posts/2024-or-crate-o'
      },
      {
        title: 'A comprehensive, open and sustainable set of principles and tools for low (and high) resource Archival Repositories',
        description: 'TODO.',
        image: 'https://placehold.co/600x360',
        link: '/news/posts/2024-or-pilars'
      },
      {
        title: 'Towards a Generic Research Data Commons: A highly scalable standards-based repository framework for Language and other Humanities data',
        description: 'TODO.',
        image: 'https://placehold.co/600x360',
        link: '/news/posts/arkisto-stack-or-2023'
      },
      {
        title: 'Designing a metadata ecosystem for language research based on Research Object Crate (RO-Crate)',
        description: 'TODO.',
        image: 'https://placehold.co/600x360',
        link: '/news/posts/ldaca-metadata-ecosystem-eresearch-2022'
      },
      {
        title: 'A CARE and FAIR-ready distributed access control system for human-created data using the Australian Access Federation and beyond',
        description: 'TODO.',
        image: 'https://placehold.co/600x360',
        link: '/news/posts/fair-care-eresearch-2022'
      },
      {
        title: 'HASS RDC Technical Advisory Group Meeting LDaCA & ATAP Intro',
        description: 'TODO.',
        image: 'https://placehold.co/600x360',
        link: '/news/posts/rdc-tech-meeting'
      }
    ]"/>