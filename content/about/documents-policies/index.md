---
layout: home
title: "Documents & Policies"
---

<SimpleHero breadcrumb='About > Documents & Policies' title='Documents & Policies' description='Policy documents, including our data onboarding process and takedown policy, and information about the underlying principles of the project.'/>

<SimpleNavigation
  title="TODO"
  description="TODO"
  :contents="[
    { label: 'Principles & frameworks', href: '#principles-frameworks' },
    { label: 'Strategies & processes', href: '#strategies-processes' },
    { label: 'Policies', href: '#policies' },
    { label: 'Organisational', href: '#organisational' },
  ]" />

<DocTiles 
    id="principles-frameworks"
    heading="PRINCIPLES AND FRAMEWORKS"
    :items="[
        {
          title: 'LDaCA Phase 2 Project Plan',
          description: 'TODO',
          image: '/about/documents-policies/Phase2ProjectPlan.png',
          link: '',
        },
        {
          title: 'Indigenous data governance framework',
          description: 'TODO',
          image: '/about/documents-policies/IDGFramework.png',
          link: '',
        },
        {
          title: 'Protocols for Implementing Long-term Archival Repositories Services (PILARS)',
          description: 'TODO',
          image: '/about/documents-policies/PILARS.png',
          link: 'https://pilars-protocols.github.io/pilars/'
        },
        // {
        //   title: 'LDaCA Technical Architechture',
        //   description: 'TODO',
        //   link: '',
        // },
        {
          title: 'FAIR and CARE Principles',
          description: 'TODO',
          image: '/about/documents-policies/FAIRandCARE.png',
          link: '/about/principles/',
        },
    ]"/>

<DocTiles 
    id="strategies-processes"
    heading="STRATEGIES AND PROCESSES"
    :items="[
        {
          title: 'LDaCA Collecting Strategy',
          description: 'TODO',
          image: '/about/documents-policies/CollectingStrategy.png',
          link: '',
        },
        {
          title: 'Data Onboarding Process',
          link: '/resources/guides/working-with-data/data-onboarding-process',
          image: '/about/documents-policies/DataOnboarding.png',
        },
        {
          title: 'LDaCA Persistent ID Policy, Strategy and Process',
          description: 'TODO',
          image: '/about/documents-policies/PersistentIDpolicy.png',
          link: '',
        },
    ]"/>

<DocTiles 
  id="policies"
  heading="POLICIES"
  :items="[
      {
        title: 'Privacy Policy',
        link: '',
        image: '/about/documents-policies/PrivacyPolicy.png',
      },
      {
        title: 'Takedown Policy',
        link: '',
        image: '/about/documents-policies/TakedownPolicy.png',
      },
      {
        title: 'Access Policy',
        link: '/resources/guides/working-with-data/access-policy',
        image: '/about/documents-policies/AccessPolicy.png',
      },
    ]"/>

<DocTiles 
  id="organisational"
  heading="ORGANISATIONAL"
  :items="[
      {
        title: '2025 Year in Review',
        image: '/about/documents-policies/YearinReview2025.png',
        link: ''
      },
    ]"/>
