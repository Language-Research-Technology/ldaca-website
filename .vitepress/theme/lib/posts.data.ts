// .vitepress/theme/lib/posts.data.ts
import { createContentLoader } from 'vitepress'

export default createContentLoader('news/posts/*/index.md', {
  // You can customize what data is included in the loaded content
  // For a blog list, 'url' and 'frontmatter' are usually sufficient
  excerpt: true, // Include excerpts if needed
  transform(rawData) {
    return rawData.map(({ url, frontmatter, excerpt }) => ({
      url,
      frontmatter,
      excerpt
    }))
    .sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()) // Sort by date
  }
})