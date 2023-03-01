## About

This is the source repository for an LDaCA based website

# Prerequisites

- Hugo (extended version, required for custom css) 
   - MacOS: Installing it with brew automatically gets you the extended version
   - Windows: Installing it with package managers: Check that you have installed it with extended version [more](https://gohugo.io/installation/windows/#package-managers)
   - Linux: With package managers will come with the extended version [more](https://gohugo.io/installation/linux/#package-managers)
   - Source: From source you will require to install [Go](https://go.dev/doc/install)
- What hugo version do you have?
    - Run: `hugo version` example:
        `hugo v0.110.0+extended darwin/arm64 BuildDate=unknown`
- Git:
    - [This](https://www.atlassian.com/git/tutorials/install-git) is a nice guide for you to install git if you do not already have it 

# How to use

- Clone the repository 
- Change directory into the repository
- And add the submodule (Will update [.gitmodules](.gitmodules) file)
    - Install `git submodule add https://github.com/dillonzq/LoveIt.git themes/LoveIt`
    - or update `git submodule update --init --recursive`
- Run `hugo serve`
    - This will rebuild your website upon file changes and be available on [http://localhost:1313/](http://localhost:1313/) if the port 1313 is free
- To see what your website looks like generate a `Public` folder
    - Delete the `Public` folder if you have one then
    - Run `hugo`
    - Then change directory into `Public` and run a web server: for example `python3 -m http.server 8000` with python and go to[ http://localhost:8000/](http://localhost:8000/) to see what it looks like. 

Example:

```sh
git clone git@github.com:Language-Research-Technology/ya-ldaca-website.git
cd ya-ldaca-website
git submodule update --init --recursive
```

# Git SubModule

Adding the submodule in the step before is required to install the theme used in this Hugo site

The current theme used is called [LoveIt](https://github.com/dillonzq/LoveIt) based on `LeaveIt` and `KeepIt` it has about 2.7K stars and it is updated frequently 

# Configuration

Configuring the website is using the `config.toml` file and `assets/css/_custom.scss` file

The file should be self documented. See [config.toml](./config.toml) and document as you go.

# Front Matter

You can specify more metadata for each page you include and it will affect how the page behaves.

Example:

Add a table of contents by adding the following into each page.

```yaml
---
toc:
    enable: true
    auto: true
---    

```
And all your refs like:

```md
## This is a #ref on a page
```

will have a contents dropdown on the page

For more examples see: [LoveIt#front-matter](https://hugoloveit.com/theme-documentation-content/#front-matter) or [Hugo Front Matter](https://gohugo.io/content-management/front-matter/)

## Archetypes

Preconfigured front matter metadata that are used when doing `hugo new`

# Adding Content

All content is stored in `content` folder. 

It can be organised using 

- Branch or Leaf styles

You can organise the content by Leaf bundle which means it has no children

or 

You can organise the content bu Branch which will have a collection of attachments and content, this will be organised as a [List](https://gohugo.io/templates/lists/) If you use list you and include an `_index.md` file in your folder for the purposes of configuring front matter for the lists. You can ommit the `_index.md` name however this will affect children pages on your site.


## Images

1. Using page resources in page bundles. You can reference page resources by the value for Resources.GetMatch or the filepath of the resource relative to the page directory directly.
2. Store resources in the assets directory, which is /assets by default. The filepath of the resource to reference in the post is relative to the assets directory.
3. Store resources in the static directory, which is /static by default. The filepath of the resource to reference in the post is relative to the static directory.

## Custom CSS

Use the `assets/css/_custom.scss` file to alter the default style of the theme

Example: Align the title of the text to the left. Sometimes is necessary to use !important sice the style sheet will cascade with other value currently used in the theme.

```scss
.single-title {
    text-align: left !important;
}
```

## Raw HTML

To insert raw html use in each page:

```html
{{< raw >}}
<iframe width="560" height="315" src="https://www.youtube.com/embed/WMDduy38zsI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
{{< raw >}}
```

## More JavaScript

To add a javascript file either add it in assets or in the conf.toml

Example Twitter Timeline:

```toml
    [params.page.library]
      [params.page.library.js]
        twitterWidgets = "https://platform.twitter.com/widgets.js"
```

It will then be available for any page

## Posts

Blog posts are organised as folders for better access of its resources the same as in content.

If you organise your page bundle as a single page

Include a folder:

`/posts/post-number-1/`

`index.md` will have the markdown
`image1.png` some image
`file.pdf` some file

In each folder your single page will have access to the resources relative to its location, example:

index.md:

```md
![alt text](image1.png "Some Alternative text shown below the image")
[Download File](file.pdf)
```

# Data Folder

The data folder can be used to generate data driven content

Example: 

- [Create a photo gallery](https://github.com/jochumdev/hugo-lightslider-example)

[More](https://gohugo.io/templates/data-templates/)

# Layouts

Layouts are used to replace current theme behaviour. There is only one file changed in the theme and that is the 404 page which includes an image that can be provided via configuration

It is best to use layouts as little as possible because when the Themes are updated it would become very hard to mantain and update Hugo and the themes.

# Recomendations

- Try only to modify the `content` folder and install all of the images/files in each page bundle. 
- Document as you go by editing the config.toml file and delete configurations that are not used
- If you cannot achieve the style you required try to modify first the assets/css/_custom.scss first before adding a new layout
- Your content should be organized in a manner that reflects the rendered website. [more](https://gohugo.io/content-management/organization/#organization-of-content-source)
- When switching from page bundle types, stop `hugo serve` and start again to see changes reflected becuase the live reload does not capture this.
- Build your site using `hugo` and test it with a basic http server

# Notes

- Twitter timeline sometimes is not being picked up by the hot-reloading. Test it with a static site/server