import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { aliasesPlugin } from './plugins/aliases'

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

function generatePagesData() {
  const contentDir = path.join(__dirname, '../content')
  if (!fs.existsSync(contentDir)) return {}

  const pages: Record<string, any> = {}

  function walk(dir: string, base = '') {
    const entries = fs.readdirSync(dir, { withFileTypes: true })
    for (const entry of entries) {
      const full = path.join(dir, entry.name)
      const rel = path.join(base, entry.name)
      if (entry.isDirectory()) {
        walk(full, rel)
      } else if (entry.name === 'index.md') {
        const content = fs.readFileSync(full, 'utf-8')
        const { data } = matter(content)
        let routePath = '/' + rel.replace(/[\\/]index\.md$/, '').replace(/[\\/]+/g, '/')
        if (routePath.endsWith('/')) routePath = routePath.slice(0, -1)
        if (routePath === '') routePath = '/'
        pages[routePath] = {
          image: data.image,
          title: data.title,
          description: data.description,
          category: data.category
        }
      }
    }
  }

  try { walk(contentDir) } catch (e) { /* ignore */ }
  return pages
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  sitemap: {
    hostname: 'https://www.ldaca.edu.au' // TODO update this to the actual production URL before launch!
  },
  srcDir: "content",
  ignoreDeadLinks: true, // Temporarily ignore dead links while site is under development! Verify this!
  title: "LDaCA",
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
        name: 'pages-generator',
        resolveId(id) {
          if (id === 'virtual:pages-data') return id
        },
        load(id) {
          if (id === 'virtual:pages-data') {
            const data = generatePagesData()
            return `export const pagesData = ${JSON.stringify(data)}`
          }
        }
      },
      aliasesPlugin(),
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
    search: {
      provider: 'local'
    },
    // Logo configuration
    logo: {
      light: '/images/LDaCAReverseLogo_312x102.svg',
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
    partnerLogos: [
      { src: "/images/partner-logos/ANU_logo.svg", href: 'https://www.anu.edu.au/' },
      { src: "/images/partner-logos/BatchelorInstitute_logo.svg", href: 'https://www.batchelor.edu.au/' },
      { src: "/images/partner-logos/FLA_logo.svg", href: 'https://www.firstlanguages.org.au/' },
      { src: "/images/partner-logos/QUT.svg", href: 'https://www.qut.edu.au/' },
      { src: "/images/partner-logos/UoM_logo.svg", href: 'https://www.unimelb.edu.au/' },
      { src: "/images/partner-logos/Usyd_logo.svg", href: 'https://www.sydney.edu.au/' },
      { src: "/images/partner-logos/UQlogo-Purple-cmyk.svg", href: 'https://www.uq.edu.au/' },
      { src: "/images/partner-logos/ARDC - AUS-NCRIS lockup.svg", href: 'https://ardc.edu.au/' }
    ],
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
        text: 'Working with Data',
        subtitle: 'TODO add subtitle',
        items: [
          { text: 'Find & Access', link: '/working-with-data/find-access/' },
          { text: 'Organise & Describe', link: '/working-with-data/organise-describe/' },
          { text: 'License, Share & Govern', link: '/working-with-data/license-share-govern/' },
          { text: 'Process & Analyse', link: '/working-with-data/process-analyse/' }
        ]
      },
      {
        text: 'Training & Events',
        subtitle: 'something something',
        items: [
          { text: 'Training', link: '/news/training', image: 'https://placehold.co/150x100' },
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
              { text: 'Audio & Video', link: '/by-type/audio-video' },
              { text: 'Guides', link: '/by-type/guides' },
              { text: 'Interviews', link: '/by-type/interviews' },
              { text: 'Presentations', link: '/by-type/presentations' },
              { text: 'Publications', link: '/news/publications/' },
              { text: 'Technologies & Tools', link: '/by-type/technologies-tools' },
            ]
          },
          {
            title: 'By Tags',
            divider: true,
            children: (() => {
              // Dynamically get top 5 tags from blog posts
              const postsDir = path.join(__dirname, '../content/news/posts')
              const tagCounts = {}
              function walk(dir) {
                for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
                  const full = path.join(dir, entry.name)
                  if (entry.isDirectory()) {
                    walk(full)
                  } else if (entry.name === 'index.md') {
                    const content = fs.readFileSync(full, 'utf-8')
                    const { data } = matter(content)
                    let tags = data.tags || []
                    if (typeof tags === 'string') tags = [tags]
                    for (const tag of tags) {
                      if (!tag) continue
                      tagCounts[tag] = (tagCounts[tag] || 0) + 1
                    }
                  }
                }
              }
              if (fs.existsSync(postsDir)) walk(postsDir)
              const topTags = Object.entries(tagCounts)
                .sort((a, b) => b[1] - a[1])
                .slice(0, 5)
                .map(([tag]) => ({
                  text: tag,
                  link: `/tags/#${tag.toLowerCase().replace(/\s+/g, '-')}`
                }))
              topTags.push({ text: 'View all', link: '/tags', bold: true })
              return topTags
            })()
          },
          {
            title: '',
            divider: true,
            children: [
              { text: 'Glossary', link: '/resources/glossary/', bold: true  },
              { text: 'FAQs', link: '/about/faqs/', bold: true  },
              { text: 'Blog', link: '/news/posts/', bold: true  }
            ]
          }
        ]
      } as any,
      {
        text: 'Projects & Case Studies',
        subtitle: 'something something',
        items: [
          { text: 'Projects', link: '/resources/general-resources/projects', image: 'https://placehold.co/150x100' },
          { text: 'Case Studies', link: '/resources/general-resources/case-studies/', image: 'https://placehold.co/150x100' }
        ]
      },
      {
        text: 'About',
        subtitle: 'Learn more about our organisation',
        items: [
          { text: 'Organisation', link: '/about/organisation', image: 'https://placehold.co/150x100' },
          { text: 'People', link: '/about/people', image: 'https://placehold.co/150x100' },
          { text: 'Policies & Procedures', link: '/about/policies-procedures', image: 'https://placehold.co/150x100' }
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
