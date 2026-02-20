## About

This is the source repository for an LDaCA based website

# NEW DESIGN - PROOF OF CONCEPT

# Prerequisites

- [Node](https://nodejs.org) 
  - Follow instructions on how to download
  - This was tested using MacOS
  - Verify installation with packages that you have npm and node commands 
  - TODO: check what are the node versions this requires

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

# Configuration

Configuring the website is using the `.vitepress/config.ts` file and develop the ldaca theme in `.vitepress/theme`

# TODO MORE DOCO

- How to reference images
- How to use Tailwind /CSS in place
- List current availalble Components
- Do not use _index.md use index.md
- Glossary
- Blog Post
- Profiles
- Tags <Not developed>
- Remove old Hugo Files
- How to run updates/production
- Configure .github/workflows