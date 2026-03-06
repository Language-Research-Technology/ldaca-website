// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import Layout from './Layout.vue'
import GlossaryLink from './components/GlossaryLink.vue'
import GlossaryList from './components/GlossaryList.vue'
import BlogPostsPage from './components/BlogPostsPage.vue'
import BlogPostsList from './components/BlogPostsList.vue'
import Profile from './components/Profile.vue'
import SubPageHero from './components/SubPageHero.vue'
import DataPortalBox from './components/DataPortalBox.vue'
import Carousel from './components/Carousel.vue'
import './style.css'
import DefaultTheme from 'vitepress/theme'
import '@fontsource/work-sans/400.css'
import '@fontsource/work-sans/500.css'
import '@fontsource/work-sans/600.css'
import '@fontsource/work-sans/700.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    app.component('GlossaryLink', GlossaryLink)
    app.component('GlossaryList', GlossaryList)
    app.component('BlogPostsPage', BlogPostsPage)
    app.component('Profile', Profile)
    app.component('SubPageHero', SubPageHero)
    app.component('DataPortalBox', DataPortalBox)
    app.component('BlogPostsList', BlogPostsList)
    app.component('Carousel', Carousel)
  },
  Layout: Layout,
} satisfies Theme
