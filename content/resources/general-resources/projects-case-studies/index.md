---
layout: home
title: "Projects & Case Studies"
hero:
  tagline: "PROJECTS & CASE STUDIES"
  description: "Projects & Case Studies description goes here."
---

<script setup>
    import SubPageHero from '../../../../.vitepress/theme/components/SubPageHero.vue'
    import HomeCarousel from '../../../../.vitepress/theme/components/HomeCarousel.vue'
</script>

<SubPageHero 
    title='PROJECTS'
    description='Projects description here'
/>

<HomeCarousel 
  backgroundColor="#EAE4D68C"
  :opacity="100"
  heading="FEATURED PROJECTS"
  :items="[
      {
        title: 'Arne ingkerreke apurtelhe-ileme: Project launch',
        link: '/news/posts/VeronicaDobson-launch2025'
      },
      {
        title: 'Graduate Digital Research Fellowship — 2024',
        link: '/news/posts/gdrf-2024'
      },
      {
        title: 'Graduate Digital Research Fellowship — 2023',
        link: '/news/posts/gdrf'
      }
    ]"/>

<HomeCarousel 
  backgroundColor="#EAE4D68C"
  :opacity="100"
  heading="COLLABORATORS"
  :items="[
      {
        title: 'Batchelor Institute of Indigenous Tertiary Education',
        description: 'Batchelor Institute is the only First Nations dual sector tertiary education provider in Australia. The Institute gives precedence to its philosophy of Both Ways: positioning First Nations peoples as knowledge holders in all educational transactions with Western knowledge systems as well as privileging First Nations ways of learning and teaching to underpin our engagement with mainstream education systems and society more broadly.',
        image: 'https://www.batchelor.edu.au/uploads/_1200x630_crop_center-center_82_none/batchelor-institute-og-image-default.png?mtime=1700630196',
        link: 'https://www.batchelor.edu.au/'
      },
      {
        title: 'First Languages Australia',
        description: 'First Languages Australia is the national peak body working to ensure the strength of all Aboriginal and Torres Strait Islander languages. We support a network of language centres, community programs and industry partners covering the whole of Australia, and all of our efforts are designed to have both immediate and longstanding impact on the future of our languages. First Languages Australia connects language communities, which are often isolated by vast distances, to share their knowledge, experiences, resources, and skills.',
        image: 'https://live-production.wcms.abc-cdn.net.au/ebfce4db03728e5bc48f5831f9020dad?impolicy=wcms_crop_resize&cropH=379&cropW=673&xPos=0&yPos=0&width=862&height=485',
        link: 'https://www.firstlanguages.org.au'
      },
      {
        title: 'ARDS Aboriginal Corporation',
        description: ' Led by Yolŋu leaders from across the region, ARDS’ cross-cultural approach puts Yolŋu perspectives, skills and decision-making at the centre of our work. Our work champions self-empowerment of Yolŋu people through Yolŋu voices and by supporting Yolŋu communities to engage on their own terms with mainstream services and systems.',
        link: 'https://www.clarin.eu/'
      },
      {
        title: 'ANU',
        description: 'ANU is a world-leading institution that supports Australia\'s development and global engagement through research, education and policy. Learn about its history, colleges, campuses, awards, governance and strategic initiatives.',
        image: 'https://logowik.com/content/uploads/images/australian-national-university-anu9387.jpg',
        link: 'https://www.anu.edu.au'
      }
    ]"/>

<SubPageHero 
    title='CASE STUDIES'
    description='Case studies description here'
/>

<HomeCarousel 
  backgroundColor="#EAE4D68C"
  :opacity="100"
  heading="CASE STUDIES"
  :items="[
      {
        title: 'A Master\'s Research Project',
        link: '/resources/general-resources/case-studies/masters-research-project'
      },
      {
        title: 'Data Management in Language Technology: A Case Study of Appen',
        link: '/resources/general-resources/case-studies/data-management-appen'
      },
      {
        title: 'Fieldwork in Papua New Guinea',
        link: '/resources/general-resources/case-studies/fieldwork-png'
      },
      {
        title: 'Sydney Speaks',
        link: '/resources/general-resources/case-studies/sydney-speaks'
      },
      {
        title: 'Putting data to work',
        link: '/news/posts/putting-data-to-work'
      }
    ]"/>