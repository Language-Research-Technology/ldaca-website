---
title: "Spreadsheet Upload"
date: 2024-05-28T13:53:43+10:00
draft: true
description: ""
---

<br>

An RO-Crate metadata spreadsheet template can be downloaded here [TODO: add this] and populated with your collection metadata for upload to Crate-O.

The spreadsheet has the below tabs by default, but depending on your collection, you may need to add additional tabs, or others may not be applicable.

<br>

Tab | Description
--- | ---
Root | Contains metadata about the root or top level of the collection.
Author | Contains metadata about the person or organisation responsible for creating this collection.
Publisher | Contains metadata about the organisation responsible for releasing this collection.
License | Contains metadata about the license(s) within the collection; both for the objects and files, and for the collection's metadata.
People | Contains metadata about the people within the collection.
Objects | Contains metadata about the entities within the collection that could encompass one or more files.
Files | Contains metadata about the files in your collection. If the collection has multiple file formats, duplicate this tab and add the formats to the tab names, e.g. csv_files, eaf_files, wav_files.

> NOTE: ELAN (.eaf) files can have relative or absolute paths to the data they relate to. The ELAN preferences file is generally not needed for the collection and relates to the particular ELAN user only.

<br>

Below the header, an example row is included to illustrate how the section can be filled. The example row is colour-coded according to whether the column:
- requires the user to input data (blue)
- is pre-filled with a formula or static value and doesn't require editing (green).

Some cells also have a dropdown option if there is a finite selection of options for the given field.

> HINT: Highlight the example row and drag it down to copy all the pre-filled cells. Don't forget to remove the example rows before you upload your spreadsheet to Crate-O!

At a minimum, it’s best practice to include __@id__ and __@type__ columns in each of your spreadsheet tabs, as these appear in Crate-O for each of the entities. Items in the __@id__ columns should always be prefixed with #, for example, an __@id__ under the People tab could be '#Anna'. __@type__ is an umbrella term that encompasses Classes, Properties, DefinedTerms and DefinedTermSets. For more detailed lists of these, see [Metadata for Language Data](https://ldaca.gitbook.io/metadata-for-language-data/).

> HINT: To type a column name beginning with `@` in Excel, put a single quote before it `'@`.

<br>

## Root

Column | Type | Description
--- | --- | ---
@id | Data entry | Persistent, managed unique ID in URL format (if available), for example a DOI for a collection.
@type | Pre-filled | The type of the collection. Both `Dataset` and `RepositoryCollection` are required.
name | Data entry | The name of this collection.
description | Data entry | An abstract of the collection. Include as much detail as possible about the motivation and use of the dataset, including things that we do not yet have properties for.
isRef_author | Pre-filled | Taken from the `@id` in the Author tab.
organization | Data entry | TODO: needed?
isRef_publisher | Pre-filled | Taken from the `@id` in the Publisher tab.

<br>

## Author

Column | Type | Description
--- | --- | ---
@id | Data entry | Persistent, managed unique ID in URL format (if available), for example an ROR for an organisation or an ORCID, personal home page URL or email address for a person.
@type | Dropdown | The type of the author. Either `Person` and `Organization` can be selected.
name | Data entry | The name of the author.

<br>

## Publisher

Column | Type | Description
--- | --- | ---
@id | Data entry | Persistent, managed unique ID in URL format (if available), for example an ROR for an organisation.
@type | Pre-filled | The type of the publisher. Only `Oragnization` is valid.
name | Data entry | The name of the organisation.

<br>

## License

TODO didn't work in loading

For licensing, it is possible to leave these sections blank, however this will add a default 'no license' in those spaces which will need to be amended later in Crate-O.

<br>

## People

Column | Type | Description
--- | --- | ---
@id | Data entry | Persistent, managed unique ID in URL format (if available), for example an ROR for an organisation.
@type | Pre-filled | The type of the publisher. Only `Oragnization` is valid.
name | Data entry | The name of the organisation.

TODO

<br>

## Objects

Column | Type | Description
--- | --- | ---
@id | Data entry | 
@type | Pre-filled | 
name | Data entry | 
description | |
speakerNumber | |
isRef_speaker | |
.pseudonym | |
datePublished | |
isRef_memberOf | |
isRef_license | |
isRef_indexableText | |

<br>

## Files

TODO

For steps on adding your spreadsheet data to an existing RO-Crate, see [Append Data from Spreadsheet](/resources/user-guides/crate-o/create-ro-crate/#append-data-from-spreadsheet).