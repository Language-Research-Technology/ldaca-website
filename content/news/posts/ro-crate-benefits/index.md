---
title: "Five benefits of RO-Crate data packaging for language collections"
date: 2025-06-03
draft: false
description: "Five benefits of RO-Crate data packaging for language collections"
---

by {{< profile id="lea" >}}

<br>

*This blog post is adapted from a presentation delivered by Peter Sefton and Stian Soiland-Reyes in June 2024. A copy of the original presentation can be found [here](https://www.ldaca.edu.au/news/posts/open-repositories-2024-ro-crate/).*

<br>

RO-Crate is a popular standard used by organisations and platforms, such as:

* [Harvard Dataverse](https://www.researchobject.org/ro-crate/dataverse)
* [University of Technology Sydney](https://arkisto-platform.github.io/case-studies/uts-repo/)
* [Time Layered Cultural Map (TLCMap) ](https://www.researchobject.org/ro-crate/tlcmap)
* [The Pacific and Regional Archive for Digital Sources in Endangered Cultures (PARADISEC)](https://www.youtube.com/watch?v=Wmr8OwR-xTA)

<br>

If you are someone who makes decisions about a collection of language materials, you are a [data steward](https://www.ldaca.edu.au/resources/glossary/#data-steward). Read on to find out how RO-Crate data packaging could help your collection and why LDaCA use RO-Crates in their infrastructure.

<br>

## What is an RO-Crate?

Research Object Crate (RO-Crate) is a way of packaging data — like audio recordings, photographs, manuscripts or teaching materials — together with its metadata (see video below). Metadata tells us information about the data, like who created it, when and in which languages.

Think of a milk crate. We can put some groceries inside the milk crate, and we can also add in a list of our groceries. In an RO-Crate, the 'groceries' are your data and the 'list' (or *manifest*) is your metadata and other descriptive files, such as a data license detailing use and access conditions. RO-Crate metadata files are written in [JSON-LD](https://json-ld.org/) format. The 'crate' is the folder on your computer where the data and metadata are located.

<br>

<div align="center">
<iframe
  width="800"
  height="460"
  src="https://www.youtube.com/embed/tAR-JNN3EbA?si=D35L1WQuW2aB0GZL"
  frameborder="0"
  allow="autoplay; encrypted-media"
  allowfullscreen
>
</iframe>
</div>

<br>

An RO-Crate folder can also contain an HTML preview file. This file allows you to view your structured collection in a web browser, navigating through all the data in the crate with descriptions of the files, what they are, the people in the recordings and transcripts, etc.

<br>

{{< image Src="/ro-crate-benefits/html-preview.png" Alt="An RO-Crate HTML preview file created with browser-based editor Crate-O." Desc="An RO-Crate HTML preview file created with browser-based editor Crate-O." Title="An RO-Crate HTML preview file created with browser-based editor Crate-O." Ref="Bridey Lea">}}

<br>

## What are RO-Crates used for?

RO-Crates are used by two groups:

1. Repositories, research projects and organisations with access to technical expertise;
2. Individual data stewards who may not have such expertise.

The use cases for each of these two groups differ.

<br>

At LDaCA, we use RO-Crate as the storage method for our data repository. Some collections are made up of a single RO-Crate and some are made up of multiple RO-Crates. RO-Crates make it possible to distribute and present the collection through our [data portal](https://data.ldaca.edu.au/search).  

A single collection RO-Crate is often too large for distribution, especially if it includes audiovisual data. Additionally, many repositories, such as Zenodo, will only accept open data. This is a problem if different parts of your collection, like video material, have different access protocols. LDaCA can help data stewards prepare and transform their collections for distribution. This may involve breaking the collection into 'chunks' for better processing.

In this post, we outline five benefits of the RO-Crate method in caring for language materials.

<br>

### 1. RO-Crates are easy to upload and download

An RO-Crate can contain large amounts of various types of files, like video and audio recordings, ELAN files or text files. RO-Crates can then be compressed into a simple ZIP file, and uploaded and downloaded in this format. ZIP format compresses multiple files and folders into one smaller file for easier transfer and storage.

Because RO-Crates are easy to upload, they are a good format for transferring data to archives and repositories or for adding to a website. Because they are easy to download, your data will not get locked into a website or database software.

<br>

### 2. RO-Crates maintain the access information for a collection and its files

RO-Crates require that you write clear [licensing statements](https://www.ldaca.edu.au/resources/glossary/#licensing) to travel with the data. A license documents the conditions for access and use of the materials. Each RO-Crate should have one license at the top level. This should be the most restrictive license needed. Note that most public repositories will only accept open access data, but LDaCA can accept language data that requires access controls.

If different parts of your collection have different access conditions, LDaCA can help to separate the collection into multiple RO-Crates, each with its own license. We use the different licenses to create an access control system for our data portal. Chunking your collection into multiple crates means that different people can have different levels of access to it in our portal. 

Read more about data licensing in our [access conditions resource](https://www.ldaca.edu.au/resources/ldaca-resources/determining-access-conditions/).

<br>

### 3. RO-Crates ensure that data travels with its metadata

In an RO-Crate, the metadata file is usually stored in the same folder as the data it describes. An RO-Crate metadata file can also describe remote items, such as web pages, which are not stored in the folder. The metadata describes each file, as well as the whole collection. The licensing statement is also stored in this folder.

When data and its metadata and licensing aren't stored together, they can get separated. Data that loses its metadata is hard to decipher — we don't know exactly what the data is, who collected it, why it was collected or what processes it went through.

<br>

{{< image Src="/ro-crate-benefits/json-file.png" Alt="Inside an RO-Crate metadata file, in JSON-LD format." Desc="Inside an RO-Crate metadata file, in JSON-LD format. The file also includes a link to a license." Title="Inside an RO-Crate metadata file, in JSON-LD format. The file also includes a link to a license." Ref="Bridey Lea">}}

<br>

Storing your collection as an RO-Crate ensures that if the collection has to move elsewhere — to another hard drive, system or repository — the metadata and licensing moves with it and doesn't get lost. 

<br>

### 4. RO-Crates allow for flexible metadata description

Useful metadata follows some kind of '[standard](https://www.ldaca.edu.au/resources/glossary/#standard)' — an agreed language to describe the same ideas. Standard metadata makes it easier to search across collections and to compare them. It also means the data steward isn't responsible for maintaining metadata vocabularies. But what happens when a metadata term that you need isn't covered in an existing metadata standard?

RO-Crate uses [Schema.org](http://schema.org) as its foundation for metadata description, as well as a few other standard vocabularies such as [Dublin Core](http://purl.org/dc/terms). To supplement this, LDaCA has also developed the [Language Data Commons Schema](https://w3id.org/ldac/terms), which provides terms of particular relevance in describing language data collections, for example, [linguisticGenre](https://w3id.org/ldac/terms#linguisticGenre) and [translator](https://w3id.org/ldac/terms#translator). In cases where your collection's metadata requirements aren't covered by these vocabularies, RO-Crate also allows you to define custom terms. This means you can define your metadata to appropriately describe your collection. The custom terms and their descriptions are also recorded in the RO-Crate, so they're understood by others looking at the collection.

<br>

{{< image Src="/ro-crate-benefits/schema.org-terms.png" Alt="Schema.org metadata terms, including Conditions of Access and Copyright Holder." Desc="Schema.org metadata terms." Title="Schema.org metadata terms." Ref="Bridey Lea">}}

<br>

### 5. RO-Crates are supported in the wider research community

The RO-Crate community is an active group of people from across the globe who care about stable data management. The community has built a range of tools to support users and data repositories working with RO-Crate.

RO-Crate uses standards that are supported in the wider research community, which helps ensure there will be support for users in the long term. Using supported standards helps make data [FAIR](https://ardc.edu.au/resource-hub/making-data-fair/) (Findable, Accessible, Interoperable and Reusable).

<br>

{{< image Src="/ro-crate-benefits/crate-o.png" Alt="Browser-based editor Crate-O with the Kaytetyemoji crate loaded." Desc="Crate-O is an online editor that allows you to build and edit RO-Crates." Title="Crate-O is an online editor that allows you to build and edit RO-Crates." Ref="Bridey Lea">}}

<br>

## Where to next?

Get to know the RO-Crate community and explore support tools.

##### [Weekly drop-in call](https://www.ldaca.edu.au/news/events/#recurring-events)

The RO-Crate community run a weekly drop-in call in Australia. 

**When**: Weekly, Thursday 2pm AEST

**Where**: Online via [Zoom](https://uqz.zoom.us/j/85192198914)

##### [Crate-O](https://language-research-technology.github.io/crate-o/#/)

Crate-O is a browser-based editor for RO-Crates. It allows you to create RO-Crates from files on your computer, edit crates and produce an HTML preview of your collection. We have produced a [user guide](https://www.ldaca.edu.au/resources/user-guides/crate-o/) to help you get started.

<br>

> *With thanks to Peter Sefton and Rosanna Smith for contributing their expertise to this blog post.*

<br>
