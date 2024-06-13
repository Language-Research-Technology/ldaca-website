---
title: "Spreadsheet Upload"
date: 2024-05-28T13:53:43+10:00
draft: false
description: ""
---

<br>

##### [Tab Breakdown](#template-breakdown)
##### [Column Breakdown](#column-breakdown)
- [Root](#root)
- [Author](#author)
- [Publisher](#publisher)
- [License](#license)
- [People](#people)
- [Objects](#objects)
- [Files](#files)

<br>

An RO-Crate metadata spreadsheet template can be downloaded here [TODO: add this] and populated with your collection metadata for upload to Crate-O.

<br>

## Tab Breakdown

The spreadsheet has the below tabs by default, but depending on your collection, you may need to add additional tabs, or others may not be applicable.

<br>

Tab | Description
--- | ---
Root | Metadata about the root or top level of the collection.
Author | Metadata about the person or organisation responsible for creating this collection.
Publisher | Metadata about the organisation responsible for releasing this collection.
License | Metadata about the license(s) within the collection; both for the objects and files, and for the collection's metadata.
People | Metadata about the people within the collection.
Objects | Metadata about the entities within the collection that could encompass one or more files.
Files | Metadata about the files in your collection. If the collection has multiple file formats, duplicate this tab and add the formats to the tab names, e.g. csv_files, eaf_files, wav_files.

> NOTE: ELAN (.eaf) files can have relative or absolute paths to the data they relate to. The ELAN preferences file is generally not needed for the collection and relates to the particular ELAN user only.

<br>

Below the header, an example row is included to illustrate how the section can be filled. The example row is colour-coded according to whether the column:
- requires the user to input data (blue)
- is pre-filled with a formula or static value and doesn't require editing (green).

Some cells also have a dropdown option if there is a finite selection of options for the given field.

> HINT: Highlight the example row and drag it down to copy all the pre-filled cells. Don't forget to remove the example rows before you upload your spreadsheet to Crate-O!

At a minimum, it’s best practice to include __@id__ and __@type__ columns in each of your spreadsheet tabs, as these appear in Crate-O for each of the entities. Items in the __@id__ columns should always be prefixed with #, for example, an __@id__ under the People tab could be '#Anna' (TODO this might not be the case). __@type__ is an umbrella term that encompasses Classes, Properties, DefinedTerms and DefinedTermSets. For more detailed lists of these, see [Metadata for Language Data](https://ldaca.gitbook.io/metadata-for-language-data/).

> HINT: To type a column name beginning with `@` in Excel, put a single quote before it `'@`.

The columns provided in the template tabs are illustrative only and may not all apply to your collection; please edit these as needed.
Where a column header begins with a full stop (.), this indicates that the column will be ignored when the data is loaded into Crate-O and will not appear in the RO-Crate. This can be helpful if you want to retain other information in your spreadsheet that may not be in a format applicable to the RO-Crate.

<br>

## Column Breakdown

The section below provides a description of each of the columns included in the template, ordered by tab. Please note that the columns provided in the template tabs are illustrative only and should be edited according to the requirements of your collection.

### Root

Column | Type | Description
--- | --- | ---
@id | Data entry | Persistent, managed unique ID in URL format (if available), for example a DOI for a collection.
@type | Pre-filled | The type of the collection. Both `Dataset` and `RepositoryCollection` are required.
name | Data entry | The name of this collection.
description | Data entry | An abstract of the collection. Include as much detail as possible about the motivation and use of the dataset, including things that we do not yet have properties for.
isRef_author | Pre-filled | Generated from the `@id` in the Author tab.
organization | Data entry | TODO: needed?
isRef_publisher | Pre-filled | Generated from the `@id` in the Publisher tab.

<br>

### Author

Column | Type | Description
--- | --- | ---
@id | Data entry | Persistent, managed unique ID in URL format (if available), for example an ROR for an organisation or an ORCID, personal home page URL or email address for a person.
@type | Dropdown | The type of the author. Either `Person` and `Organization` can be selected.
name | Data entry | The name of the author.

<br>

### Publisher

Column | Type | Description
--- | --- | ---
@id | Data entry | Persistent, managed unique ID in URL format (if available), for example an ROR for an organisation.
@type | Pre-filled | The type of the publisher. Only `Organization` is valid.
name | Data entry | The name of the organisation.

<br>

### License

TODO didn't work in loading

Column | Type | Description
--- | --- | ---
@id | Data entry | 
@type | Data entry | 
name | Data entry | The name of the license.
description | Data entry |
metadataIsPublic | |
allowTextIndex | |

For licensing, it is possible to leave these sections blank, however this will add a default 'no license' in those spaces which will need to be amended later in Crate-O.

<br>

### People

Column | Type | Description
--- | --- | ---
@id | Data entry | Persistent, managed unique ID in URL format (if available), for example an ROR for an organisation.
@type | Pre-filled | The type of the publisher. Only `Organization` is valid.
name | Data entry | The name of the organisation.
language | Data entry | 
gender | Data entry |
birthDate | Data entry |

TODO

<br>

### Objects

Column | Type | Description
--- | --- | ---
@id | Pre-filled | 
@type | Data entry | 
name | Data entry | 
description | Data entry |
speakerNumber | Data entry |
isRef_speaker | Pre-filled |
.pseudonym | Data entry |
datePublished | Data entry |
isRef_memberOf | Data entry |
isRef_license | Data entry |
isRef_indexableText | Data entry |

<br>

### Files

Three examples of files tabs are included in the template, and their columns are combined in the table below.

Tab | Column | Type | Description
--- | --- | --- | ---
CSV, EAF, WAV | @id | Pre-filled | The filepath to the given file. Generated from the `.folder`, `.filename` and `.postfix` columns.
CSV, EAF, WAV | @type | Data entry | The type of entity. Only `File` is valid. TODO pre-filled?
CSV, EAF, WAV | .folder | Data entry | The folder name in which the given file appears.
CSV, EAF, WAV | .filename | Data entry | The name of the given file, without postfixes.
CSV, EAF, WAV | .postfix | Data entry | The file format of the given file, for example, `.csv`, `.eaf`, `.wav`.
CSV, EAF | isType_Annotation | Data entry | Indicates whether the given file is an annotation of another file. Requires a Boolean value (`TRUE` or `FALSE`).
WAV | isType_PrimaryMaterial | Data entry | Indicates whether the given file is the object of study, such as a literary work, film, or recording of natural discourse. Requires a Boolean value (`TRUE` or `FALSE`).
CSV, EAF, WAV | isRef_partOf | Pre-filled | Generated from the `.filename` column.
CSV, EAF | isRef_annotationOf | Data entry | The full filename of the primary material that the given file is an annotation of.
CSV, EAF, WAV | .objectId | Pre-filled | Generated from the `.filename` column.

TODO

For steps on adding your spreadsheet data to an existing RO-Crate, see [Append Data from Spreadsheet](/resources/user-guides/crate-o/create-ro-crate/#append-data-from-spreadsheet).

<br>