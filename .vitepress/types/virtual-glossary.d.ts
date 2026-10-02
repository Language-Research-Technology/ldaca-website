declare module 'virtual:glossary-data' {
  export interface GlossaryItem {
    id: string
    term: string
    definition: string
  }
  export const glossaryItems: GlossaryItem[]
}
