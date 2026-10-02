import type { Plugin } from 'vite'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

/**
 * VitePress plugin to generate redirect pages for frontmatter aliases
 */
export function aliasesPlugin(): Plugin {
  let config: any
  let isBuild = false
  let vitepressRoot: string

  // Shared function to scan for aliases
  function scanAliases(contentDir: string): Array<{ from: string; to: string }> {

    const aliases: Array<{ from: string; to: string }> = []

    function walkContent(dir: string, basePath = '') {
      if (!fs.existsSync(dir)) return

      const entries = fs.readdirSync(dir, { withFileTypes: true })
      
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name)
        const relativePath = path.join(basePath, entry.name)

        if (entry.isDirectory()) {
          walkContent(fullPath, relativePath)
        } else if (entry.name === 'index.md') {
          const content = fs.readFileSync(fullPath, 'utf-8')
          const { data } = matter(content)

          if (data.aliases && Array.isArray(data.aliases)) {
            // Determine the target route from the file path
            let targetRoute = '/' + relativePath
              .replace(/[\\/]index\.md$/, '')
              .replace(/\\/g, '/')
            
            if (targetRoute === '/') targetRoute = ''

            // Register each alias
            data.aliases.forEach((alias: string) => {
              aliases.push({
                from: alias.startsWith('/') ? alias : '/' + alias,
                to: targetRoute || '/'
              })
            })
          }
        }
      }
    }

    walkContent(contentDir)
    return aliases
  }

  return {
    name: 'vitepress-aliases',
    
    configResolved(resolvedConfig) {
      config = resolvedConfig
      isBuild = resolvedConfig.command === 'build'
      // resolvedConfig.root already points to srcDir (content directory)
      vitepressRoot = resolvedConfig.root
    },

    // Handle aliases in dev mode with middleware
    configureServer(server) {
      // vitepressRoot is already the content directory
      const aliases = scanAliases(vitepressRoot)
      
      if (aliases.length > 0) {
        console.log('\n📍 Found aliases:')
        aliases.forEach(({ from, to }) => {
          console.log(`   ${from} → ${to}`)
        })
        console.log(`\n✓ Total: ${aliases.length} alias(es)\n`)
      }

      // Add middleware to handle redirects in dev mode
      server.middlewares.use((req, res, next) => {
        const url = req.url || ''
        //console.log(`Incoming request: ${url}`)
        
        // Find matching alias
        const alias = aliases.find(a => {
          // Match exact path or path with trailing slash
          return url === a.from || url === a.from + '/' || 
                 url.startsWith(a.from + '?') || url.startsWith(a.from + '/?')
        })

        if (alias) {
          console.log(`✓ Redirecting ${url} → ${alias.to}`)
          // Preserve query string
          const queryIndex = url.indexOf('?')
          const query = queryIndex !== -1 ? url.slice(queryIndex) : ''
          
          res.writeHead(302, { Location: alias.to + query })
          res.end()
          return
        }

        next()
      })
    },

    async closeBundle() {
      if (!isBuild) return

      console.log('\n📍 Generating alias redirect pages...')
      
      // VitePress builds to .vitepress/dist (go up one level from content dir)
      const projectRoot = path.dirname(vitepressRoot)
      const outDir = path.join(projectRoot, '.vitepress', 'dist')
      const aliases = scanAliases(vitepressRoot)

      // Generate redirect HTML files
      if (aliases.length > 0) {
        for (const { from, to } of aliases) {
          const redirectPath = path.join(outDir, from.slice(1), 'index.html')
          const redirectDir = path.dirname(redirectPath)

          // Create directory if it doesn't exist
          if (!fs.existsSync(redirectDir)) {
            fs.mkdirSync(redirectDir, { recursive: true })
          }

          // Generate redirect HTML
          const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="refresh" content="0; url=${to}">
  <link rel="canonical" href="${to}">
  <script>window.location.href = '${to}';</script>
  <title>Redirecting...</title>
</head>
<body>
  <p>Redirecting to <a href="${to}">${to}</a>...</p>
</body>
</html>`

          fs.writeFileSync(redirectPath, html, 'utf-8')
          //console.log(`   ${from} → ${to}`)
        }
        console.log(`\n✓ Generated ${aliases.length} alias redirect page(s)\n`)
      }
    }
  }
}
