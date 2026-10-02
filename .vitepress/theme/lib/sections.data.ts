// .vitepress/theme/lib/sections.data.ts
import { createContentLoader } from 'vitepress'

export interface SectionPageItem {
  url: string
  title: string
  description?: string
  date?: string
  weight?: number
  frontmatter: any
}

export default createContentLoader('**/index.md', {
  excerpt: false,
  transform(raw) {
    return raw.map(({ url, frontmatter }) => ({
      url,
      title: frontmatter.title || frontmatter.pageTitle || '',
      description: frontmatter.description || frontmatter.summary || '',
      date: frontmatter.date,
      weight: frontmatter.weight,
      frontmatter
    })) as SectionPageItem[]
  }
})

declare const data: SectionPageItem[]
export { data }
