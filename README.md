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

# Documentation

## Styling

Default styling is handled in `.vitepress/theme/style.css`. Components may also have additional styling within their own `.vue` files, generally in the Tailwind CSS `class=""` sections.

## General Tips

- Do not use `_index.md` for root list pages. Instead use `index.md` with `layout: root_list` in the frontmatter. See [RootList](#rootlist) below for more details.

## Page Layouts

All layouts are stored in `/theme/layouts`. To use these, add `layout: layout_name` to the frontmatter of the `.md` file.

### Doc

`layout: doc`

Use this layout as the default for `.md` pages. 

### Event

`layout: event`

Use this layout for events pages, currently stored in `/training-events/events/YYYY`. This layout has two sections:
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

Use this layout for blog posts, currently stored in `/resources/posts`. This layout is identical to the `doc` layout, but adds the author to the `SimpleHero` section and contains a link back to 'All Posts' at the top of the page content, as well as the date published.

If the blog is a presentation, add `type: presentation` to the frontmatter. This will categorise it as a presentation and display it in the 'Latest Presentations' section on the Resources page, and in the carousel on the Presentations page.

If the blog is a interview, add `type: interview` to the frontmatter. This will categorise it as an interview and display it in the 'Latest Interviews' section on the Resources page, and in the carousel on the Interviews page.

### Project

`layout: project`

Use this layout for project pages, currently stored in `/projects-case-studies/projects`. This layout has two sections:
- left side: standard Markdown text for project description, outcomes, further reading, etc. taken from the content of the `.md` file
- right side: image, project details and information boxes taken from the frontmatter of the `.md` file

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

`image: "/resources/posts/example-blog/blog-image.png"`

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

If writing a blog post, add the author in the following format in teh frontmatter:

```
author: '<Profile id="smith" />'
```

To add or edit profiles, see the `.yml` files in `data/profiles`.

## List of Currently Available Components

All components are stored in `/theme/components`. To use components, add `<ComponentName />` to the relevant section of your `.md` file, with any properties you need for that component (e.g. `heading`, `description`, `items`). These include:
| Component | Options |
| --- | --- |
| BlogPostsList.vue | N/A |
| BlogPostsPage.vue | N/A |
| Carousel.vue | `heading`: text<br>`description`: text<br>`items`: array **OR** `type`: presentation/interview<br>`image`: filepath (default: '/images/Petroglyph_Pattern.svg')<br>`backgroundColor`: colour<br>`opacity`: number (default: 100)<br>`shade`: light (default: dark)<br>`buttonText`: text (default: 'View more')<br>`viewAll`: link<br>`yearFilter`: boolean (default: false)<br>`tileView`: boolean (default: false) |
| CarouselLarge.vue | `heading`: text<br>`description`: text<br>`items`: array<br>`image`: filepath (default: '/images/Petroglyph_Pattern.svg')<br>`backgroundColor`: colour (default: '#f3f0e8')<br>`opacity`: number (default: 100)<br>`buttonText`: text (default: 'Try it out') |
| Collaborators.vue | `heading`: text<br>`description`: text<br>`items`: array<br>`backgroundColor`: colour<br>`opacity`: number (default: 100) |
| CollectionsGrid.vue | `heading`: text<br>`description`: text<br>`backgroundColor`: colour (default: '#79a38d')<br>`backgroundImage`: filepath (default: '/images/Collections_BG.png')<br>`opacity`: number (default: 100)<br>`buttonText`: text (default: 'Learn more') |
| ContactBox.vue | `heading`: text<br>`description`: text<br>`buttonText`: text<br>`buttonLink`: link |
| DataPortalBox.vue | `heading`: text<br>`description`: text<br>`buttonText`: text<br>`buttonLink`: link |
| Features.vue | N/A |
| FeaturesBanner.vue | N/A |
| Footer.vue | N/A |
| GlossaryLink.vue | N/A |
| GlossaryList.vue | N/A |
| GuideCarousel.vue | `heading`: text<br>`description`: text<br>`items`: array<br>`image`: filepath (default: '/images/Petroglyph_Pattern.svg')<br>`backgroundColor`: colour<br>`opacity`: number (default: 100)<br>`viewAll`: link |
| Header.vue | N/A |
| HomeHero.vue | |
| HowWeCanHelp.vue | `items`: array |
| LatestBlog.vue | N/A |
| Menu.vue | N/A |
| PartnerLogos.vue | `logos`: array |
| Profile.vue | `id`: string |
| Sidebar.vue | N/A |
| SimpleHero.vue | `title`: text<br>`description`: text<br>`backgroundImage`: filepath (default: '/images/GreenBackground.png')<br>`breadcrumb`: text |
| SimpleNavigation.vue | `title`: text<br>`description`: text<br>`contents`: array |
| TagsList.vue | N/A |
| ThreeTiles.vue | `heading`: text`items`: array<br>`image`: filepath (default: '/images/Petroglyph_Pattern.svg')<br>`backgroundColor`: colour<br>`opacity`: number (default: 100)<br>`shade`: light (default: dark) |
| TwoTiles.vue | `heading`: text`items`: array **OR** `type`: presentation<br>`image`: filepath (default: '/images/Petroglyph_Pattern.svg')<br>`buttonText`: text (default: 'View all')<br>`viewAll`: link |


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
- about/sample-collections.md
