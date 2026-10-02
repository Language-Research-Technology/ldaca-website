---
layout: home
title: "Technologies & tools"
---

<SimpleHero
  breadcrumb="Resources > Technologies & tools"
  title="Technologies & tools"
  description="A range of LDaCA technologies and open-source tools to support finding, accessing and analysing language data. Available online and through GitHub, these tools are designed for developers and people with strong coding skills."
/>

<GuideTiles
  heading="SOFTWARE TOOLS"
  :items="[
                {
      title: 'Crateworks',
      description: 'CrateWorks is a home for several projects that use the RO-Crate as an interchange format for research data and archival systems, including software tools and an API specification.',
      image: '/images/PlainBackgrounds/AltGreen.png',
      link: 'https://crate-works.org/',
      actionText: 'Get code'
    },
                    {
      title: 'Wordflow',
      description: 'Wordflow is a code-free text analytics tool that lets researchers explore and analyse text using interconnected tools for frequency, concordance, trends, topic modelling and quotation analysis.',
      image: '/images/PlainBackgrounds/Blackplain.png',
      link: 'https://australian-text-analytics-platform.github.io/LDaCa_Text_Analytics_Tools/',
      actionText: 'Get code'
    },
                        {
      title: 'Nyingarn',
      description: 'Nyingarn is a digital platform for converting manuscript sources of Australian Indigenous languages into searchable and reusable text. This GitHub code is for those wanting to build and host their own instance.',
      image: '/images/PlainBackgrounds/Orangeplain.png',
      link: 'https://github.com/CoEDL/nyingarn-workspace',
      actionText: 'Get code'
    },
        {
      title: 'ONI',
      description: 'Oni is a configurable discovery portal for searching and browsing research data described in RO-Crate format, using Arocapi as its underlying RO-Crate API.',
      image: '/images/PlainBackgrounds/Altblue.png',
      link: 'https://github.com/crate-works/oni',
      actionText: 'Get code'
    },
        {
      title: 'arocapi',
      description: 'Arocapi is an RO-Crate-based API for building data collections, archives and access-controlled data portals, designed to support long-term archival repository services.',
      image: '/images/PlainBackgrounds/Greenplain.png',
      link: 'https://github.com/Language-Research-Technology/arocapi',
      actionText: 'Get code'
    },
        {
      title: 'crate-o',
      description: 'Crate-O is a web-based editor for creating and editing RO-Crate metadata, providing an interface for describing datasets and other research materials.',
      image: '/images/PlainBackgrounds/Altblack.png',
      link: 'https://github.com/Language-Research-Technology/crate-o',
      actionText: 'Get code'
    },
        {
      title: 'ro-crate-playground',
      description: 'The RO-Crate Playground is a browser-based environment for learning, experimenting with and prototyping RO-Crate, allowing users to explore how RO-Crates work.',
      image: '/images/PlainBackgrounds/Altorange.png',
      link: 'https://github.com/Language-Research-Technology/ro-crate-playground',
      actionText: 'Get code'
    },
            {
      title: 'ROCSS templates',
      description: 'RO-Crate static site (ROCSS) Templates, a collection of configurable templates for turning RO-Crate data into structured, browsable websites, with support for both single-page and multi-page sites.',
      image: '/images/PlainBackgrounds/Blueplain.png',
      link: 'https://github.com/Language-Research-Technology/rocss-templates',
      actionText: 'Get code'
    },
                {
      title: 'Lameta',
      description: 'Lameta is a metadata tool designed to help researchers organise, describe and prepare collections of language, music and other cultural materials for archiving.',
      image: '/images/PlainBackgrounds/AltGreen.png',
      link: 'https://sites.google.com/site/metadatatooldiscussion/home',
      actionText: 'Get code'
    },
    {
      title: 'RO-Crate MASP',
      description: 'RO-Crate MASP is a proof-of-concept framework for creating machine-actionable RO-Crate schemas and profiles that can be used to define requirements, generate documentation and validate RO-Crates.',
      image: '/images/PlainBackgrounds/Blackplain.png',
      link: 'https://github.com/Language-Research-Technology/ro-crate-masp',
      actionText: 'Get code'
    },
    {
      title: 'LDaCA RO-Crate Profile',
      description: 'The LDaCA RO-Crate Profile defines a standardised metadata profile and schema for describing language data collections using RO-Crate.',
      image: '/images/PlainBackgrounds/Orangeplain.png',
      link: 'https://github.com/Language-Research-Technology/ldac-profile',
      actionText: 'Get code'
    },
    {
      title: 'TrACE',
      description: 'TrACE is a browser-based interface for displaying audio recordings and associated transcripts.',
      image: '/images/PlainBackgrounds/Altblue.png',
      link: 'https://github.com/Language-Research-Technology/TrACE',
      actionText: 'Get code'
    },
    {
      title: 'RO-Crate Excel',
      description: 'RO-Crate Excel is a tool for converting RO-Crate metadata to and from Excel spreadsheets, making it easier to enter, edit and manage structured metadata using spreadsheets.',
      image: '/images/PlainBackgrounds/Greenplain.png',
      link: 'https://github.com/Language-Research-Technology/ro-crate-excel',
      actionText: 'Get code'
    },
    {
      title: 'ONI-OCFL',
      description: 'Oni-OCFL provides libraries for ingesting and managing datasets in repositories that use the Oxford Common File Layout (OCFL) standard.',
      image: '/images/PlainBackgrounds/Altblack.png',
      link: 'https://github.com/Language-Research-Technology/oni-ocfl',
      actionText: 'Get code'
    },
    {
      title: 'OCFL-JS',
      description: 'OCFL-JS is a Node.js library for creating and managing Oxford Common File Layout (OCFL) storage and objects, with support for different storage backends including local filesystems and S3.',
      image: '/images/PlainBackgrounds/Altorange.png',
      link: 'https://github.com/Language-Research-Technology/ocfl-js',
      actionText: 'Get code'
    },
    {
      title: 'RO-Crate-JS',
      description: 'RO-Crate-JS is a JavaScript library for creating, manipulating and validating RO-Crates and their structured metadata.',
      image: '/images/PlainBackgrounds/Blueplain.png',
      link: 'https://github.com/Language-Research-Technology/ro-crate-js',
      actionText: 'Get code'
    },
    {
      title: 'RO-Crate schema tools',
      description: 'RO-Crate Schema Tools is a set of tools for creating and distributing RO-Cate schemas and editor profiles, including configuration files for editors such as Crate-O and human-readable schema documentation.',
      image: '/images/PlainBackgrounds/AltGreen.png',
      link: 'https://github.com/Language-Research-Technology/ro-crate-schema-tools',
      actionText: 'Get code'
    },
    {
      title: 'LDaCA-py',
      description: 'LDaCA-Py is a Python library for interacting with the LDaCA REST API, enabling users to retrieve collections, explore their contents and download selected data files programmatically.',
      image: '/images/PlainBackgrounds/Blackplain.png',
      link: 'https://github.com/Language-Research-Technology/ldaca-py',
      actionText: 'Get code'
    },
  ]"
/>


<ToolsGrid 
  id="tools-notebooks"
  heading="ANALYTICAL TOOLS & NOTEBOOKS"
  description="Explore available tools for language research and work."
  crateUrl="https://raw.githubusercontent.com/Language-Research-Technology/ldaca-analytical-tools/refs/heads/main/ro-crate/"
  />

  <br>
  <br>
