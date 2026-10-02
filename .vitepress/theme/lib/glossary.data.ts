// .vitepress/theme/lib/glossary.data.ts
import fs from 'fs'
import path from 'path'
import yaml from 'js-yaml'

interface GlossaryItem {
  id: string
  term: string
  definition: string
  content?: string
  external_link?: string
}

export default {
  async load(): Promise<GlossaryItem[]> {
    const glossaryDir = path.join(process.cwd(), 'data', 'glossary')
    const files = fs.readdirSync(glossaryDir).filter(f => f.endsWith('.yml'))
    
    const items: GlossaryItem[] = []
    
    for (const file of files) {
      const filePath = path.join(glossaryDir, file)
      const fileContent = fs.readFileSync(filePath, 'utf-8')
      const data = yaml.load(fileContent) as any
      
      const id = file.replace('.yml', '')
      
      items.push({
        id,
        term: data.title || id,
        definition: data.short_description || '',
        content: data.content || '',
        external_link: data.external_link || ''
      })
    }
    
    // Sort alphabetically by term
    return items.sort((a, b) => a.term.localeCompare(b.term))
  }
}

declare const data: GlossaryItem[]
export { data, type GlossaryItem }
