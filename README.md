## About

This is the source repository for an LDaCA based website

# NEW DESIGN - PROOF OF CONCEPT

# Prerequisites

- [Node](https://nodejs.org) 
  - Follow instructions on how to download on the page above
  - This was tested using MacOS
  - Verify installation with packages that you have npm and node commands 
  - TODO: check what are the node versions this requires

# Notes on specs

- This site is being built using [vitepress](https://vitepress.dev) version 2. See package.json for details
- a `.vitepress` folder is used to theme the website
- running a production build will generate static html files that can be served in `.vitepress/dist`


# How to use

- Clone the repository
- Change directory into the repository
- Run npm install

### For development
- Run: `npm run dev`
- See the Local address of where is being served. Normally would be 
   - `Local:   http://localhost:5174` but if that port is being used it will push to another port

### For QA - Very important! Do not skip
- See what actually will be produced for production
- run `npm run test:production` this will run vitepress build and preview
- See the Built address of where is being served. Normally would be 
   - `Built site served at http://localhost:4173/` but if that port is being used it will push to another port

### How to run in production and do updates

- TODO

# Configuration

Configuring the website is using the `.vitepress/config.ts` file and develop the ldaca theme in `.vitepress/theme`

# TODO Documentation

- How to reference images
- How to use Tailwind /CSS in place
- List current availalble Components
- Do not use _index.md use index.md
- Glossary
- Blog Post
- Profiles

# TODO Development

- Tags <Not developed>
- Footer <Not finished>
- Search <Not developed>
- Analytics Page <Not developed>
- Menu filter by tag? Resources menu

# TODO Cleanups
- Remove old Hugo Files
- How to run updates/production
- Configure .github/workflows