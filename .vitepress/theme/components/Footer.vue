<script setup>
import { useData } from 'vitepress'
import PartnerLogos from './PartnerLogos.vue'

const { site, theme } = useData()
const logo = theme.value.logo ?? {}

// Read footer border configuration with sensible defaults
const footer = theme.value.footer ?? {}
const borderTop = footer.borderTop ?? '80px'
const borderRight = footer.borderRight ?? '50vw'
const borderBottom = footer.borderBottom ?? '80px'
const borderLeft = footer.borderLeft ?? '50vw'

// Get nav items, excluding About and Contact
const nav = theme.value.nav ?? []
const footerNav = nav
  .filter(item => item.text !== 'About' && item.text !== 'Contact')
  .map(navItem => {
    if (navItem.items) {
      // Remove 'By Tags' group from items
      const filteredItems = navItem.items.filter(
        group => !(group.title && group.title.toLowerCase().includes('by tags'))
      )
      return { ...navItem, items: filteredItems }
    }
    return navItem
  })
const buttonColors = theme.value.buttonColors || { bg: '#79A38D', text: '#ffffff' }
const footerBgColor = theme.value.footerBgColor || '#EAE4D6'
const partnerLogos = theme.value.partnerLogos || []
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}

footer {
  padding: 40px;
}

.footer-border {
  box-sizing: padding-box;
  content: '';
  display: block;
  width: 0;
  height: 0;
  border-top: v-bind(borderTop) solid transparent;
  border-left: v-bind(borderLeft) solid transparent;
  border-right: v-bind(borderRight) solid v-bind(footerBgColor);
  border-bottom: v-bind(borderBottom) solid v-bind(footerBgColor);
}
</style>
<template>
  <div class="footer-border text-secondary "></div>


  <footer class="w-full mt-auto text-foreground" :style="{ backgroundColor: footerBgColor }">

    <div>
      <div class="container mx-auto pb-12 px-6">
        <div class="pt-8">
          <!-- Logo at top -->
          <div class="relative z-0 flex items-center justify-center gap-2 mb-8">
            <a href="/" class="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <img v-if="logo.dark" :src="logo.dark" alt="LDaCA" class="h-52 w-auto">
              <span v-if="!logo.dark" class="font-bold text-lg">{{ site.title }}</span>
            </a>
          </div>
        </div>
      </div>

      <!-- 3 Columns -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <!-- Column 1: Acknowledgement & About -->
        <div class="">
          <p class="text-lg text-[#393939] font-bold text-muted-foreground leading-relaxed mb-8">
            LDaCA acknowledges all Aboriginal and Torres Strait Islander Traditional Custodians of Country and
            recognises their continuing connection to land, sea, culture and community.<br /><br />
            We pay our respects to Elders past and present.
          </p>
          <div>
            <h3 class="text-[1.3rem] font-bold mb-1 uppercase text-[#393939]">About</h3>
            <p class="text-1rem text-[#393939] text-muted-foreground leading-relaxed mb-3">
              LDaCA is ensuring long-term access to Australia's nationally significant language collections through
              digital infrastructure, ethical governance, and long-term care.
            </p>
            <p class="text-sm text-[#393939] text-muted-foreground leading-relaxed">
              Learn more about our <a href="/about/organisation"
                class="text-sm text-[#79A38D] font-bold hover:text-gray-600 transition-colors">organisation</a>, our <a
                href="/about/people"
                class="text-sm text-[#79A38D] font-bold hover:text-gray-600 transition-colors">people</a> and our <a
                href="/about/policies-principles"
                class="text-sm text-[#79A38D] font-bold hover:text-gray-600 transition-colors">policies and principles</a>.
            </p>
          </div>
        </div>

        <!-- Column 2: Navigation Links from Menu -->
        <div class="">
          <div v-for="navItem in footerNav" :key="navItem.text" class="mb-6">
            <a v-if="navItem.link" :href="navItem.link">
              <h3 class="text-[1.3rem] font-bold mb-1 uppercase text-[#393939]">{{ navItem.text }}</h3>
            </a>
            <h3 v-else class="text-[1.3rem] font-bold mb-1 uppercase text-[#393939]">{{ navItem.text }}</h3>
            <ul class="space-y-2">
              <!-- Regular items with link -->
              <template v-for="item in (navItem.items || [])" :key="item.link || item.title">
                <li v-if="!item.children && item.link">
                  <a :href="item.link" class="text-base text-[#393939] text-muted-foreground hover:text-primary transition-colors pl-2">
                    {{ item.text }}
                  </a>
                </li>
                <!-- Grouped items -->
                <template v-if="item.children">
                  <li v-for="child in item.children" :key="child.link">
                    <a :href="child.link" v-if="!child?.bold"
                      class="text-base text-[#393939] text-muted-foreground hover:text-primary transition-colors pl-2">
                      {{ child.text }}
                    </a>
                  </li>
                </template>
              </template>
            </ul>
          </div>
        </div>

        <!-- Column 3: Newsletter & Contact -->
        <div class="">
          <!-- Newsletter Section -->
          <div class="mb-8 border-t border-border">
            <h3 class="text-[1.3rem] font-bold mb-4 uppercase text-[#393939]">Subscribe to our Newsletter</h3>
            <a href="https://ldaca.us13.list-manage.com/subscribe?u=ef8667be63aefb1e35062a797&id=de4b682e46"
              target="_blank" rel="noopener noreferrer"
              :style="{ backgroundColor: buttonColors.bg, color: buttonColors.text }"
              class="inline-block p-4 rounded-lg font-semibold hover:opacity-80 transition-opacity mb-4">
              Subscribe
            </a>
            <a href="/news/newsletter"
              class="block mt-2 text-base  text-[#393939] text-muted-foreground hover:text-primary transition-colors">
              View past newsletters
            </a>
          </div>

          <!-- Contact Section -->
          <div class="mb-8 border-t border-border">
            <h3 class="text-[1.3rem] font-bold mb-4 uppercase text-[#393939]">Contact</h3>
            <a href="mailto:contact@ldaca.edu.au"
              :style="{ backgroundColor: buttonColors.bg, color: buttonColors.text }"
              class="inline-block p-4 rounded-lg font-semibold hover:opacity-80 transition-opacity mb-4">
              Email Us
            </a>
          </div>

          <!-- Social Links -->
          <div class="flex items-center gap-4">
            <a href="https://www.youtube.com/@LDaCA_Project" target="_blank" rel="noopener noreferrer"
              class="text-[#383938] flex items-center gap-2 hover:text-gray-600 transition-colors">
              <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.551 9.376.551 9.376.551s7.505 0 9.377-.551a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              <span>@LDaCA_Project</span>
            </a>
            <a href="https://www.linkedin.com/company/ldaca/" target="_blank" rel="noopener noreferrer"
              class="text-[#383938] flex items-center gap-2 hover:text-gray-600 transition-colors">
              <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.736 0-9.643h3.554v1.364c.43-.664 1.195-1.604 2.906-1.604 2.121 0 3.71 1.388 3.71 4.369v5.514zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.704 0-.948.77-1.704 1.963-1.704 1.192 0 1.926.756 1.939 1.704 0 .946-.747 1.704-1.987 1.704zm1.582 11.597H3.754V9.609h3.165v10.843zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
              <span>@ldaca</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Partner Logos -->
      <PartnerLogos :logos="partnerLogos" />

      <!-- Bottom Links -->
      <div class="mt-8 pt-6 border-t border-border">
        <nav class="flex items-center justify-center gap-32 flex-wrap">
          <a href="/help" class="text-sm text-[#383938] hover:text-gray-600 transition-colors">
            Help ➔
          </a>
          <a href="/sitemap.xml" class="text-sm text-[#383938] hover:text-gray-600 transition-colors">
            Sitemap ➔
          </a>
          <a href="/disclaimer" class="text-sm text-[#383938] hover:text-gray-600 transition-colors">
            Disclaimer ➔
          </a>
          <a href="/privacy" class="text-sm text-[#383938] hover:text-gray-600 transition-colors">
            Privacy ➔
          </a>
          <a href="/terms-conditions" class="text-sm text-[#383938] hover:text-gray-600 transition-colors">
            Terms & Conditions ➔
          </a>
        </nav>
      </div>
    </div>
  </footer>
</template>
