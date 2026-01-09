---
layout: home
title: "Process & Analyse"
hero:
  tagline: "PROCESS & ANALYSE"
  description: "Process & analyse description goes here."
---

<script setup>
    import SubPageHero from '../../../.vitepress/theme/components/SubPageHero.vue'
    import HomeCarousel from '../../../.vitepress/theme/components/HomeCarousel.vue'
</script>

<SubPageHero />

<HomeCarousel 
  backgroundColor="#EAE4D68C"
  :opacity="100"
  heading="GUIDES"
  :items="[
      {
        title: 'Introduction to Text Analysis',
        description: 'TODO',
        link: 'https://www.atap.edu.au/text-analysis/overview/'
      },
      {
        title: 'Text Analytics',
        description: 'Introduces text analysis using R and covers various text analytics methods. These tutorials require some familiarity with R and RStudio, so you should be comfortable with the content in the R Basics section before proceeding here.',
        link: 'https://ladal.edu.au/tutorials.html#text-analytics'
      },
      {
        title: 'LADAL Tutorials',
        description: 'Contains all tutorials provided by LADAL, organised in seven sections.',
        link: 'https://ladal.edu.au/tutorials.html'
      },
    ]"/>

<HomeCarousel 
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

<HomeCarousel 
  backgroundColor="#EAE4D68C"
  :opacity="100"
  heading="RELATED MATERIALS"
  :items="[
    ]"/>

<HomeCarousel 
  backgroundColor="#EAE4D68C"
  :opacity="100"
  heading="COLLABORATORS"
  :items="[
      {
        title: 'LADAL',
        description: 'LADAL is a free, open-source, collaborative support infrastructure for digital and computational humanities established 2019 by the School of Languages and Cultures at the University of Queensland. LADAL aims at assisting anyone interested in working with language data in matters relating to data processing, visualization, and analysis and offers guidance on matters relating to language technology and digital research tools. To this end, LADAL offers introductions to topics and concepts related to digital and computational humanities, online tu',
        image: 'https://ladal.edu.au/images/LadalGrey.png',
        link: 'https://ladal.edu.au/'
      },
      {
        title: 'MDAP',
        description: 'The Melbourne Data Analytics Platform (MDAP) is a team of research data and academic specialists from diverse research backgrounds, with a goal to support data-intensive research at the University. You can engage or collaborate with MDAP in varying capacities, both short and longer term, across all stages of the research lifecycle, from research design and data collection, through to analysis, visualisation, and interpretation. MDAP also offers consultancy, advisory, and advocacy services.',
        image: 'https://dataservices.research.unimelb.edu.au/static/img/logos/logo-2023.svg',
        link: 'https://www.unimelb.edu.au/mdap'
      },
      {
        title: 'Sydney Corpus Lab',
        description: 'The Sydney Corpus Lab aims to promote corpus linguistics in Australia. Its mission is to build research capacity in corpus linguistics at the University of Sydney, to connect Australian corpus linguists, and to promote the method in Australia. Lab members actively participated in the Sydney Centre for Language Research (Computational Approaches to Language node) and the Sydney Digital Humanities Research Group. Currently, we have strong links with the Computational Social Science Lab.',
        image: 'https://i0.wp.com/sydneycorpuslab.com/wp-content/uploads/2019/03/cropped-SydneyCorpusLab_Black_Small.png?fit=512%2C512&ssl=1',
        link: 'https://sydneycorpuslab.com/'
      },
      {
        title: 'Sydney Informatics Hub',
        description: 'The Sydney Informatics Hub enables excellence in computational and data-driven research by providing support, training and expertise in statistics, data science, AI, software engineering, simulation, visualisation, bioinformatics and research computing to researchers, industry and government.',
        image: 'https://yt3.googleusercontent.com/37as1rjlbhowQfSOHN96eyjI4fEswIR9KE1cgF78y_y5-JvWzysRD1cy57sEeBtBkMBSZ0lP=s900-c-k-c0x00ffffff-no-rj',
        link: 'https://www.sydney.edu.au/research/facilities/sydney-informatics-hub.html'
      }
    ]"/>