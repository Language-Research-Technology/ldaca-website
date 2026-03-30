## About

This is the source repository for an LDaCA based website.

# NEW DESIGN - PROOF OF CONCEPT

# Prerequisites

- [Node](https://nodejs.org) 
  - Follow instructions on how to download on the page above
  - This was tested using MacOS
  - Verify installation with packages that you have npm and node commands 
  - TODO: check what are the node versions this requires

# Notes on specs

- This site is being built using [vitepress](https://vitepress.dev) version 2. See `package.json` for details
- A `.vitepress` folder is used to theme the website
- Running a production build will generate static html files that can be served in `.vitepress/dist`


# How to use

- Clone the repository
- Change directory into the repository
- Run `npm install`

### For development
- Run `npm run dev`
- See the Local address of where it is being served. Normally it would be 
   - `Local: http://localhost:5173` but if that port is being used it will push to another port

### For QA - Very important! Do not skip
- See what actually will be produced for production
- Run `npm run test:production` - this will run vitepress build and preview
- See the Built address of where it is being served. Normally it would be 
   - `Built site served at http://localhost:4173/` but if that port is being used it will push to another port

### How to run in production and do updates

- TODO

# Configuration

Configuring the website is using the `.vitepress/config.ts` file and develop the LDaCA theme in `.vitepress/theme`

# TODO Documentation

## General Tips

- Do not use `_index.md` for root list pages. Instead use `index.md` with `layout: root_list` in the frontmatter. See [RootList](#rootlist) below for more details.

## Page Layouts

All layouts are stored in `/theme/layouts`. To use these, add `layout: layout_name` to the frontmatter of the `.md` file.

### Doc

`layout: doc`

Use this layout as the default for `.md` pages. 

### Event

`layout: event`

Use this layout for events pages. This layout has two sections:
- left side: standard Markdown text for event description, videos, etc. taken from the content of the `.md` file
- right side: an event details box taken from the frontmatter of the `.md` file

Use the following frontmatter template:
```
---
title: ""
description: ""
layout: event
image: 
link: ""
eventDate: ""
eventTime: ""
location: ""
cost: ""
organiser: ""
pastEvent: false
---
```
NOTE: change `pastEvent` to `true` if this event has finished. This will update the `link` button from displaying 'Register' to 'More information' instead.

### Post

`layout: post`

Use this layout for blog posts. This layout is identical to the `doc` layout, but adds a link back to 'All Posts' at the top of the page, as well as the date published and author.

### RootList

`layout: root_list`

Use this layout for index pages linking to multiple `.md` files. This supercedes the older `_index.md` format for these pages.

## Referencing Images

Images are either:
- stored in the same folder they relate to, e.g. images for a blog post appear in the same folder as the blog's `.md` file, or
- stored in `/content/public/images` and its subfolders, if the images are more general use.

To reference an image in an `.md` file, use the format:
```
<figure>
	<img src="./image.png" alt="Alt text goes here" title="Image title goes here" />
	<figcaption>Figure 1: The caption displayed beneath the image goes here. (Photo credit goes here)</figcaption>
</figure>
```
NOTE: if using an image from `/content/public/images`, use the path `/images/...` instead.

For setting thumbnail/preview images to be used on other components and pages, add these to the `image` field in the related `.md` file's frontmatter, and use the full file path after `content`:

`image: "/resources/news/posts/example-blog/blog-image.png"`

## Referencing Glossary Items

To reference glossary terms, use the format:

```
<GlossaryLink display="LDaCA" id="ldaca" />
```

To add or edit glossary terms, see the `.yml` files in `data/glossary`. To search an `.md` file for possible glossary terms, see `_glossarySearch/glossarySearch.py`.

## Referencing Profile Items

To reference a profile item, use the format:

```
<Profile id="smith" />
```

To add or edit profiles, see the `.yml` files in `data/profiles`.

## List of Currently Available Components

All components are stored in `/theme/components`. To use components, add `<ComponentName />` to the relevant section of your `.md` file, with any properties required for that component (e.g. `heading`, `subheading`, `items`). These include:
| Component | Used In |
| --- | --- |
| BlogPostsList.vue | `BlogPostsPage.vue` |
| BlogPostsPage.vue | `/content/news/posts` |
| Carousel.vue | - `/content`<br>- `/content/about/policies-principles`<br>- `/content/by-type/`: `audio-video`, `guides`, `interviews`, `presentations`, `technologies-tools`<br>- `/content/news/`: `events`, `training`<br>- `/content/resources/general-resourses/`: `case-studies`, `projects`<br>- `/content/working-with-data/`: `find-access`, `license-share-govern`, `organise-describe`, `process-analyse` |
| CarouselLarge.vue | `/content/working-with-data/`: `find-access`, `organise-describe`, `process-analyse` |
| Collaborators.vue | - `/content/resources/general-resources/projects`<br>- `/content/working-with-data/`: `find-access`, `process-analyse` |
| CollectionsGrid.vue | `/content/working-with-data/find-access` |
| ContactBox.vue | - `/content/news/events`<br>- `/content/working-with-data/`: `find-access`, `license-share-govern`, `organise-describe`, `process-analyse` |
| DataPortalBox.vue | - `/content`<br>- `/content/working-with-data/license-share-govern` |
| Features.vue |  |
| FeaturesBanner.vue | `HomeHero.vue` |
| Footer.vue | `.vitepress/theme` |
| GlossaryLink.vue | - `GlossaryList.vue`<br>- Throughout website to link to the glossary. |
| GlossaryList.vue | `/content/resources/glossary` |
| GuideCarousel.vue | - `/content/by-type/guides`<br>- `/content/working-with-data/`: `find-access`, `license-share-govern`, `organise-describe`, `process-analyse` |
| Header.vue | `.vitepress/theme` |
| HomeHero.vue | `/content` |
| HowWeCanHelp.vue | `/content` |
| LatestBlog.vue | `/content` |
| Menu.vue | `Header.vue` |
| PartnerLogos.vue | `Footer.vue` |
| Profile.vue | Throughout website to reference LDaCA team. |
| Sidebar.vue | `Header.vue` |
| SimpleHero.vue | - `.vitepress/theme/layouts`<br>- `/content/about/policies-principles`<br>- `/content/by-type/`: `audio-video`, `guides`, `interviews`, `presentations`, `technologies-tools`<br>- `/content/news/`: `events`, `posts`, `training`<br>- `/content/resources/general-resourses/`: `case-studies`, `projects`<br>- `/content/working-with-data/`: `find-access`, `license-share-govern`, `organise-describe`, `process-analyse` |
| SimpleNavigation.vue | `/content/working-with-data/`: `find-access`, `license-share-govern`, `organise-describe`, `process-analyse` |
| TagsList.vue | `/content/tags` |
| ThreeTiles.vue | - `/content/news/training`<br>- `/content/working-with-data/`: `find-access`, `license-share-govern`, `organise-describe`, `process-analyse` |


- How to use Tailwind /CSS in place
- Blog Post

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