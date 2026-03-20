---
layout: home
title: "Process & Analyse"
---

<SimpleHero breadcrumb="Working with Data > Process & Analyse" title="Process & Analyse Data" description="Process & analyse description goes here."/>

<SimpleNavigation
:contents="[
    { label: 'Tools & notebooks', href: '#tools-notebooks' },
    { label: 'Guides', href: '#guides' },
    { label: 'On the blog', href: '#on-the-blog' },
    { label: 'Additional resources', href: '#additional-resources' },
    { label: 'Collaborators', href: '#collaborators' }
  ]"
/>

<CarouselLarge 
  id="tools-notebooks"
  backgroundColor="#EAE4D68C"
  :opacity="100"
  heading="TOOLS & NOTEBOOKS"
  :items="[
      {
        title: 'Nyingarn',
        description: 'Nyingarn makes manuscript sources of Australian Indigenous languages available as searchable and reusable text documents to support language revitalisation.',
        image: 'https://nyingarn.net/wp-content/uploads/2023/04/Nyingarn_Vertical_Peppermint_RGB-1024x1024.png',
        link: 'https://nyingarn.net/'
      },
      {
        title: 'Tools from USyd/SIH/ATAP/Sydney Corpus Lab',
        link: ''
      },
      {
        title: 'Tools from LADAL',
        image: 'https://ladal.edu.au/images/LadalGrey.png',
        link: ''
      },
      {
        title: 'Collection-specific Jupyter notebooks',
        image: 'https://jupyter.org/assets/homepage/main-logo.svg',
        link: ''
      },
    ]"/>

<GuideCarousel 
  id="guides"
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
        image: 'https://ladal.edu.au/images/LadalGrey.png',
        link: 'https://ladal.edu.au/tutorials.html'
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
        title: 'FIB DigiTalk 2025 ke-7, \'Using Large Data Sets for Qualitative Research\'',
        image: 'https://img.youtube.com/vi/twCAdPazV2M/sddefault.jpg',
        link: 'https://www.youtube.com/live/twCAdPazV2M',
        category: 'RECORDING'
      },
      {
        title: 'The ParlaMint corpora of European parliamentary proceedings',
        link: '/news/events/2025/parlamint-corpora',
      }
    ]"/>

<Collaborators 
  id="collaborators"
  heading="COLLABORATORS"
  description="Description here."
  :items="[
      {
        title: 'LADAL',
        image: 'https://ladal.edu.au/images/LadalGrey.png',
        link: 'https://ladal.edu.au/'
      },
      {
        title: 'MDAP',
        image: 'https://dataservices.research.unimelb.edu.au/static/img/logos/logo-2023.svg',
        link: 'https://www.unimelb.edu.au/mdap'
      },
      {
        title: 'Sydney Corpus Lab',
        image: 'https://i0.wp.com/sydneycorpuslab.com/wp-content/uploads/2019/03/cropped-SydneyCorpusLab_Black_Small.png?fit=512%2C512&ssl=1',
        link: 'https://sydneycorpuslab.com/'
      },
      {
        title: 'Sydney Informatics Hub',
        image: 'https://yt3.googleusercontent.com/37as1rjlbhowQfSOHN96eyjI4fEswIR9KE1cgF78y_y5-JvWzysRD1cy57sEeBtBkMBSZ0lP=s900-c-k-c0x00ffffff-no-rj',
        link: 'https://www.sydney.edu.au/research/facilities/sydney-informatics-hub.html'
      }
    ]"/>

<ContactBox 
  heading="Interested in contributing to LDaCA?"
  description="Do you have data, expertise, or resources you'd like to share? We'd love to hear from you."
  buttonText="Get in touch"
  buttonLink="/contact/"
/>