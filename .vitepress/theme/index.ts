// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import Layout from './Layout.vue'
import GlossaryLink from './components/GlossaryLink.vue'
import GlossaryList from './components/GlossaryList.vue'
import BlogPostsPage from './components/BlogPostsPage.vue'
import BlogPostsList from './components/BlogPostsList.vue'
import Profile from './components/Profile.vue'
import DataPortalBox from './components/DataPortalBox.vue'
import Carousel from './components/Carousel.vue'
import CarouselLarge from './components/CarouselLarge.vue'
import SimpleHero from './components/SimpleHero.vue'
import SimpleNavigation from './components/SimpleNavigation.vue'
import GuideCarousel from './components/GuideCarousel.vue'
import ContactBox from './components/ContactBox.vue'
import ThreeTiles from './components/ThreeTiles.vue'
import Collaborators from './components/Collaborators.vue'
import CollectionsGrid from './components/CollectionsGrid.vue'
import './style.css'
import DefaultTheme from 'vitepress/theme'
import '@fontsource/work-sans/400.css'
import '@fontsource/work-sans/500.css'
import '@fontsource/work-sans/600.css'
import '@fontsource/work-sans/700.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('GlossaryLink', GlossaryLink)
    app.component('GlossaryList', GlossaryList)
    app.component('BlogPostsPage', BlogPostsPage)
    app.component('Profile', Profile)
    app.component('DataPortalBox', DataPortalBox)
    app.component('BlogPostsList', BlogPostsList)
    app.component('Carousel', Carousel)
    app.component('CarouselLarge', CarouselLarge)
    app.component('SimpleHero', SimpleHero)
    app.component('SimpleNavigation', SimpleNavigation)
    app.component('GuideCarousel', GuideCarousel)
    app.component('ContactBox', ContactBox)
    app.component('ThreeTiles', ThreeTiles)
    app.component('Collaborators', Collaborators)
    app.component('CollectionsGrid', CollectionsGrid)
  },
  Layout: Layout,
} satisfies Theme
