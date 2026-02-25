import { createContentLoader } from 'vitepress'

export default createContentLoader('**/index.md', {
  includeSrc: false,
  render: false,
  transform(pages) {
    const allTags = new Set<string>()
    const pagesByTag: Record<string, any[]> = {}

    pages.forEach(page => {
      const tags = page.frontmatter?.tags || []
      const tagsArray = Array.isArray(tags) ? tags : [tags]

      tagsArray.forEach(tag => {
        allTags.add(tag)
        if (!pagesByTag[tag]) {
          pagesByTag[tag] = []
        }
        pagesByTag[tag].push({
          title: page.frontmatter?.title || page.relativePath,
          url: page.url,
          date: page.frontmatter?.date
        })
      })
    })

    // Sort pages by date within each tag (newest first)
    Object.keys(pagesByTag).forEach(tag => {
      pagesByTag[tag].sort((a, b) => {
        if (!a.date || !b.date) return 0
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      })
    })

    return {
      allTags: Array.from(allTags).sort(),
      pagesByTag
    }
  }
})