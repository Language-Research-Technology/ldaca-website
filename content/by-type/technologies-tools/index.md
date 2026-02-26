---
layout: home
title: "Technologies & Tools"
---

<script setup>
    import LatestBlog from '../../../.vitepress/theme/components/LatestBlog.vue'
</script>

<SubPageHero title="Technologies & Tools" description="Technologies & tools description goes here."/>

<LatestBlog 
  :items="[
      {
        title: 'LDaCA Software Tools',
        description: 'A variety of LDaCA open-source tools available on GitHub.',
        image: '',
        link: '/resources/ldaca-resources/ldaca-software-tools'
      },
      {
        title: 'Technologies',
        description: 'Information about the technologies being used in LDaCA.',
        image: '',
        link: '/about/technologies'
      },
      {
        title: 'Principles',
        description: 'Information about the principles on which the work of LDaCA is based.',
        image: '',
        link: '/about/principles'
      }
    ]"/>