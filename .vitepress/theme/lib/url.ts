import { withBase } from 'vitepress'

/**
 * Resolves a URL for use in href/src attributes, prefixing the configured
 * VitePress `base` for root-relative internal links while leaving external
 * URLs, anchors, and special schemes (mailto:, tel:, etc.) untouched.
 */
export function resolveUrl(url?: string | null): string {
  if (!url) return url ?? ''
  if (/^([a-z][a-z0-9+.-]*:|\/\/|#)/i.test(url)) return url
  if (!url.startsWith('/')) return url
  return withBase(url)
}
