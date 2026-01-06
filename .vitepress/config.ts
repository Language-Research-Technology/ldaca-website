import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

function generateGlossaryData() {
  const glossaryDir = path.join(__dirname, '../content/resources/glossary/items')
  
  if (!fs.existsSync(glossaryDir)) return []

  return fs.readdirSync(glossaryDir)
    .filter(f => f.endsWith('.md'))
    .map(file => {
      const content = fs.readFileSync(path.join(glossaryDir, file), 'utf-8')
      const { data } = matter(content)
      return {
        id: path.basename(file, '.md'),
        term: data.term,
        definition: data.definition
      }
    })
    .sort((a, b) => a.term.localeCompare(b.term))
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "content",
  mpa: true,
  ignoreDeadLinks: true, // Temporarily ignore dead links while site is under development! Verify this!
  title: "ldaca",
  description: "ldaca.edu.au",
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('.', import.meta.url)),
        '@/components': fileURLToPath(new URL('./theme/components', import.meta.url)),
        '@/lib': fileURLToPath(new URL('./theme/lib', import.meta.url))
      }
    },
    plugins: [
      {
        name: 'glossary-generator',
        resolveId(id) {
          if (id === 'virtual:glossary-data') {
            return id
          }
        },
        load(id) {
          if (id === 'virtual:glossary-data') {
            const data = generateGlossaryData()
            return `export const glossaryItems = ${JSON.stringify(data)}`
          }
        }
      },
      {
        name: 'convert-glossary-shortcode',
        enforce: 'pre',
        transform(code: string, id: string) {
          if (!id.endsWith('.md')) return null

          const shortcodeRegex = /\{\{<\s*glossary_link\s+([^>]+)>\}\}/g
          const replaced = code.replace(shortcodeRegex, (_m, attrs: string) => {
            const props: Record<string, string> = {}
            const attrRegex = /(\w+)\s*=\s*"([^"]*)"/g
            let match: RegExpExecArray | null
            while ((match = attrRegex.exec(attrs)) !== null) {
              props[match[1]] = match[2]
            }

            const display = props.display || ''
            const gid = props.id || ''
            if (!display || !gid) return _m
            return `<GlossaryLink display="${display}" id="${gid}" />`
          })

          if (replaced === code) return null
          return { code: replaced, map: null }
        }
      }
    ]
  },
  themeConfig: {
    // Logo configuration
    logo: {
      light: '/images/LDaCA_logo_Light-02-02.svg',
      dark: '/images/LDaCA_logo_Dark-02-02.svg'
    },
    // Header background color
    headerBgColor: '#383838' as any,
    // Menu button colors
    menuButtonColors: {
      selectedBg: '#1f2937',
      selectedText: '#ffffffff',
      unselectedBg: '#f3f4f6',
      unselectedText: '#111827'
    } as any,
    // Button colors
    buttonColors: {
      bg: '#79A38D',
      text: '#ffffff'
    } as any,
    // Footer background color
    footerBgColor: '#EAE4D6' as any,
    // Custom footer styling options
    footer: {
      borderTop: '80px',
      borderRight: '50vw',
      borderBottom: '80px',
      borderLeft: '50vw'
    } as any,
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // { 
      //   text: 'Home',
      //   link: '/',
      //   siteTitle: false
      // },
      // { 
      //   text: 'Posts',
      //   link: '/posts/'
      // },
      {
        text: 'Working with data',
        items: [
          { text: 'Find and access', link: '/shadcn-example' },
          { text: 'Organise and describe', link: '/shadcn-install' },
          { text: 'License share and govern', link: '/shadcn-install' },
          { text: 'Process & analyse', link: '/shadcn-install' }
        ]
      },
      {
        text: 'Training & Events',
        subtitle: 'something something',
        items: [
          { text: 'Training', link: '/shadcn-example', image: 'https://placehold.co/150x100' },
          { text: 'Events', link: '/news/events', image: 'https://placehold.co/150x100' }
        ]
      } as any,
      {
        text: 'Resources',
        subtitle: 'Helpful links and materials',
        items: [
          {
            title: 'By Type',
            divider: true,
            children: [
              { text: 'Articles', link: '/articles' },
              { text: 'Books', link: '/books' },
              { text: 'Videos', link: '/videos' },
              { text: 'View all', link: '/resources/general-resources/case-studies/', bold: true }
            ]
          },
          {
            title: 'By Subject',
            divider: true,
            children: [
              { text: 'Language Documentation', link: '/topics/language-documentation' },
              { text: 'Fieldwork Techniques', link: '/topics/fieldwork-techniques' },
              { text: 'View all', link: '/resources/general-resources/case-studies/', bold: true }

            ]
          },
          {
            title: '',
            divider: true,
            children: [
              { text: 'Glossary', link: '/resources/glossary/', bold: true  },
              { text: 'FAQs', link: '/resources/faqs/', bold: true  },
              { text: 'Blog', link: '/news/posts/', bold: true  }
            ]
          }
        ]
      } as any,
      {
        text: 'Projects & case studies',
        link: '/resources/general-resources/case-studies/'
      },
      {
        text: 'About',
        subtitle: 'Learn more about our organization',
        items: [
          { text: 'Organisation', link: '/shadcn-example', image: 'https://placehold.co/150x100' },
          { text: 'People', link: '/shadcn-install', image: 'https://placehold.co/150x100' },
          { text: 'Policies & Procedures', link: '/shadcn-install', image: 'https://placehold.co/150x100' }
        ]
      } as any,
      {
        text: 'Contact',
        link: '/contact/'
      },
    ],
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'Shadcn UI Example', link: '/shadcn-example' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
