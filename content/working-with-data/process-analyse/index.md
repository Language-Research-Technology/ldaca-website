---
layout: home
title: "Process & analyse"
---

<SimpleHero breadcrumb="Working with data > Process & analyse" title="Process & analyse data" description="Hands-on tutorials and tools for processing and analysing large collections of language data."/>

<SimpleNavigation
title="Analysing language data at scale"
description="Being able to analyse large amounts of language data opens up vast possibilities for researchers across disciplines. Language data may also need to be cleaned and processed in other ways to suit your research purposes. We are making tools for text analysis available, alongside our collaborators including Language Technology and Data Analysis Laboratory (LADAL), Sydney Corpus Lab, Sydney Informatics Hub (SIH), QUT Digital Observatory and the Melbourne Data Analytics Platform.\n\nTest out tools for processing and analysing data and access analysis and reuse training and tutorials for a diverse range of skill levels."
:contents="[
    { label: 'Analytical tools & notebooks', href: '#tools-notebooks' },
    { label: 'Guides', href: '#guides' },
    { label: 'On the blog', href: '#on-the-blog' },
    { label: 'Additional resources', href: '#additional-resources' },
    { label: 'Collaborators', href: '#collaborators' }
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

<CarouselLarge
  heading="FEATURED RESOURCE"
  backgroundColor="#fff"
  buttonText="Try it out"
  :items="[
    {
      title: 'LDaCA Wordflow',
      description: `LDaCA Wordflow is a code-free text analytics tool that makes it easier for researchers to explore and analyse text without needing programming skills. Users can build flexible workflows by combining tools for frequency analysis, concordancing, trends, topic modelling and quotation analysis, with results from one tool feeding into the next.
      <br>LDaCA Wordflow was developed by the <a href='https://www.sydney.edu.au/research/facilities/sydney-informatics-hub.html' class='text-[#79A38D] hover:underline hover:decoration-dotted hover:decoration-2 hover:underline-offset-2 transition-colors font-bold'> Sydney Informatics Hub </a> and <a href='https://sydneycorpuslab.com/' class='text-[#79A38D] hover:underline hover:decoration-dotted hover:decoration-2 hover:underline-offset-2 transition-colors font-bold'>Sydney Corpus Lab</a>.`,
      image: '/images/LDaCAWordflow.png',
      link: 'https://australian-text-analytics-platform.github.io/LDaCa_Text_Analytics_Tools/',
    },
        {
      title: 'LADAL',
      description: `The Language Technology and Data Analysis Laboratory (LADAL) is an open-access learning and research platform that helps researchers build skills in working with language data. It provides more than 60 step-by-step tutorials, structured courses and browser-based tools covering data science, statistics, visualisation, text analytics and computational research methods, with resources designed for everyone from complete beginners to experienced researchers.`,
      image: '/images/LADAL.png',
      link: 'https://ladal.edu.au/',
    },
  ]"
   />


<ToolsGrid 
  id="tools-notebooks"
  heading="ANALYTICAL TOOLS & NOTEBOOKS"
  description="Explore available tools for language research and work."
  crateUrl="https://raw.githubusercontent.com/Language-Research-Technology/ldaca-analytical-tools/refs/heads/main/ro-crate/"
  />
  

<GuideCarousel 
  id="guides"
  heading="GUIDES"
  :items="[
      {
        title: 'Introduction to text analysis',
        description: 'An introduction to working with text as data. Covers key text analysis concepts and the workflow from preparing and analysing text through to documenting and packaging research outputs for reuse.',
        link: '/resources/guides/working-with-data/Introduction-to-text-analysis',
        level: 'Beginner',
        audience: 'Researchers and students',
        image:'/images/PlainBackgrounds/Blackplain.png',
        category: 'FIELD GUIDE'
      },
      {
        title: 'Text analytics',
        description: 'A LADAL tutorial introducing text analysis in R and a range of text analytics methods. Some familiarity with R and RStudio is required, so we recommend being comfortable with the material covered in the R Basics section before getting started.',
        level: 'Beginner-Intermediate',
        audience: 'Researchers and students interested in learning R',
        category: 'TECHNOLOGIES GUIDE',
        buttonColor: '#393939',
        image:'/images/PlainBackgrounds/Greenplain.png',
        link: 'https://ladal.edu.au/tutorials.html#text-analytics'
      },
    ]"/>

<Carousel 
  id="on-the-blog"
  shade="light"
  backgroundColor="#EAE4D68C"
  :opacity="100"
  heading="ON THE BLOG"
  :items="[
      {
        title: 'Analyse image collections with the Image Dataset Explorer',
        link: '/news/posts/image-dataset-explorer'
      },
      {
        title: 'Team member tip: There\'s no substitute for looking closely at the data',
        link: '/news/posts/team-member-tip-sam-hames'
      },
      {
        title: 'Putting data to work — 2',
        link: '/news/posts/putting-data-to-work-2'
      }
    ]"/>

<ThreeTiles 
  id="additional-resources"
  backgroundColor="#EAE4D68C"
  :opacity="100"
  heading="ADDITIONAL RESOURCES"
  :items="[
      {
        title: 'FIB DigiTalk 2025, \'Using large data sets for qualitative research\'',
        image: '/images/FIBDigiTalk2025.png',
        link: 'https://www.youtube.com/live/twCAdPazV2M',
        category: 'RECORDING'
      },
      {
        title: 'The ParlaMint corpora of European parliamentary proceedings',
        link: '/training-events/events/2025/parlamint-corpora',
      },
       {
        title: 'Vulgarity in English: Language, creativity & social meaning',
        image: '/images/ISLE.png',
        link: 'https://www.youtube.com/watch?v=l3K4v4LtDTQ',
        category: 'RECORDING'
      },
    ]"/>

<Collaborators 
  id="collaborators"
  heading="COLLABORATORS"
  :items="[
      {
        title: 'Sydney Corpus Lab',
        image: '/images/partner-logos/cropped-SydneyCorpusLab_Black_Small.png',
        link: 'https://sydneycorpuslab.com/'
      },
      {
        title: 'Sydney Informatics Hub',
        image: '/images/partner-logos/sydney_informatics_hub_logo.png',
        link: 'https://www.sydney.edu.au/research/facilities/sydney-informatics-hub.html'
      },
      {
        title: 'LADAL',
        image: '/images/partner-logos/ladal_logo.png',
        link: 'https://ladal.edu.au/'
      },
      {
        title: 'ADO',
        image: '/images/partner-logos/ADOLogo.png',
        link: 'https://www.digitalobservatory.net.au/'
      },
      {
        title: 'MDAP',
        image: '/images/partner-logos/MDAPLogo.png',
        link: 'https://www.unimelb.edu.au/mdap'
      },
    ]"/>

<ContactBox 
  heading="Interested in contributing to LDaCA?"
  description="Do you have data, expertise or resources you'd like to share? We'd love to hear from you."
  buttonText="Get in touch"
  buttonLink="/contact/"
/>