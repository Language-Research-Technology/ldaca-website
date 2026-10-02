---
layout: home
title: "Documents & policies"
---

<SimpleHero breadcrumb='About > Documents & policies' title='Documents & policies' description='Policy documents, including our data onboarding process and takedown policy, and information about the principles, strategies and processes we follow.'/>

<SimpleNavigation
  title="LDaCA’s documents, standards and frameworks"
  description="This page brings together the documents and policies that guide how LDaCA operates, including the standards we apply to data governance and archival practice. It also contains  LDaCA’s recommendations for how others can work with language data."
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
          title: 'Indigenous data governance framework',
          description: 'Guidance for the ethical, inclusive and effective management of Indigenous data within the Humanities, Arts, Social Sciences and Indigenous Research Data Commons (HASS and Indigenous RDC).',
          image: '/about/documents-policies/IDGFramework.png',
          link: 'https://zenodo.org/records/11135962',
        },
        {
          title: 'Protocols for Implementing Long-term Archival Repositories Services (PILARS)',
          description: 'Sets out protocols for the design and implementation of sustainable archival repository services to achieve CAREful FAIRness.',
          image: '/about/documents-policies/PILARS.png',
          link: 'https://pilars-protocols.github.io/pilars/'
        },
        // {
        //   title: 'LDaCA Technical Architechture',
        //   description: '',
        //   link: '',
        // },
        {
          title: 'FAIR and CARE Principles',
          description: 'Principles for the sustainable and ethical management of data.',
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
          description: 'Outlines the decision-making framework for selecting, preparing and including language data collections in the LDaCA Data Portals',
          image: '/about/documents-policies/CollectingStrategy.png',
          link: '/about/documents-policies/LDaCACollectingStrategy.pdf',
        },
        {
          title: 'Data Onboarding Process',
          description: 'Outlines the standards and processes that support the onboarding of data collections to LDaCA.',
          link: '/resources/guides/working-with-data/data-onboarding-process',
          image: '/about/documents-policies/DataOnboarding.png',
        },
        {
          title: 'LDaCA Persistent ID Policy, Strategy and Process',
          description: 'Outlines the policy, strategy and process for the use of persistent identifiers for data in the LDaCA project.',
          image: '/about/documents-policies/PersistentIDpolicy.png',
          link: '/about/documents-policies/LDaCAPersistentIDPolicyandStrategy.pdf',
        },
    ]"/>

<DocTiles 
  id="policies"
  heading="POLICIES"
  :items="[
      {
        title: 'Privacy Policy',
        description: 'Describes what information we collect about users and how we manage personal information.',
        link: '',
        image: '/about/documents-policies/PrivacyPolicy.png',
      },
      {
        title: 'Takedown Policy',
        description: 'Outlines the mechanism for requesting an adjustment to the access conditions of published materials.',
        link: '',
        image: '/about/documents-policies/TakedownPolicy.png',
      },
      {
        title: 'Access Policy',
        description: 'Describes how we make data accessible in appropriate ways that accord with legal, moral and ethical aspects of data sharing.',
        link: '/resources/guides/working-with-data/access-policy',
        image: '/about/documents-policies/AccessPolicy.png',
      },
    ]"/>

<DocTiles 
  id="organisational"
  heading="ORGANISATIONAL"
  :items="[
              {
          title: 'LDaCA Phase 2 Project Plan',
          description: 'LDaCA’s project plan for 2024 – 2028, including our aims, strategy and work plan',
          image: '/about/documents-policies/Phase2ProjectPlan.png',
          link: 'https://ardc.edu.au/wp-content/uploads/2024/08/ldaca-final-project-plan_2024-2028_v7.1_redacted.pdf',
        },
      {
        title: '2025 Year in Review',
        description: 'Recaps and evaluates our work in 2025.',
        image: '/about/documents-policies/YearinReview2025.png',
        link: 'https://www.ldaca.edu.au/2025%20Year%20in%20Review/LDaCA_2025YearinReview.pdf',
      },
    ]"/>
