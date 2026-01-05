// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import Layout from './Layout.vue'
import GlossaryLink from './components/GlossaryLink.vue'
import GlossaryList from './components/GlossaryList.vue'
import BlogPostsPage from './components/BlogPostsPage.vue'
import Profile from './components/Profile.vue'
import './style.css'

export default {
  enhanceApp({ app, router, siteData }) {
    app.component('GlossaryLink', GlossaryLink)
    app.component('GlossaryList', GlossaryList)
    app.component('BlogPostsPage', BlogPostsPage)
    app.component('Profile', Profile)
  },
  Layout: Layout,
} satisfies Theme
