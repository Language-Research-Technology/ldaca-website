---
title: "Spreadsheet Upload"
date: 2024-05-28T13:53:43+10:00
draft: true
description: ""
---

<br>

An RO-Crate metadata spreadsheet template can be downloaded from [TODO: add this] and populated with your collection metadata for upload to Crate-O.

The spreadsheet has four standard tabs by default, but depending on your collection, you may need to add additional tabs.

<br>

Tab | Description
--- | ---
People | Contains metadata about the people within the collection.
Files | Contains metadata about the files in your collection. If the collection has multiple file formats, duplicate this tab and add the formats to the tab names, e.g. WAV_Files, EAF_Files, TXT_Files.
Objects | Contains metadata about the entities within the collection that could encompass one or more files.
Licenses | Contains metadata about the licenses within the collection; both for the objects and files, and for the collection's metadata.

> NOTE: ELAN (.eaf) files can have relative or absolute paths to the data they relate to. The ELAN preferences file is generally not needed for the collection and relates to the particular ELAN user only.

<br>

Each of these tabs has columns that require data to be inputted, as well as columns that are pre-populated with formulas that reference the sections you complete.

At a minimum, it’s best practice to include __@id__ and __@type__ columns in each of your spreadsheet tabs, as these appear in Crate-O for each of the entities. Items in the __@id__ columns should always be prefixed with #, for example, an __@id__ under the People tab could be '#Anna'. __@type__ is an umbrella term that encompasses Classes, Properties, DefinedTerms and DefinedTermSets. For more detailed lists of these, see [Metadata for Language Data](https://ldaca.gitbook.io/metadata-for-language-data/).

> HINT: To type a column name beginning with `@` in excel put a single quote before it `'@`.


For licensing, it is possible to leave these sections blank, however this will add a default 'no license' in those spaces which will need to be amended later in Crate-O.

<br>

For steps on adding your spreadsheet data to an existing RO-Crate, see [Append Data from Spreadsheet](/resources/user-guides/crate-o/create-ro-crate/#append-data-from-spreadsheet).