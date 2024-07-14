---
title: "Spreadsheet Upload"
date: 2024-05-28T13:53:43+10:00
draft: false
description: "Guidance and a template for adding new data to an RO-Crate via spreadsheet."
---

<br>

##### [Tab Breakdown](#tab-breakdown)
##### [Column Breakdown](#column-breakdown)
- [Root](#root)
- [Authors](#authors)
- [Publishers](#publishers)
- [Licenses](#licenses)
- [People](#people)
- [Objects](#objects)
- [Files (CSV, EAF, WAV)](#files-csv-eaf-wav)
##### [Upload Spreadsheet to an RO-Crate with Crate-O](#upload-spreadsheet-to-an-ro-crate-with-crate-o)

<br>

For collections where there are a lot of interconnected objects and files, it may be easier or preferable to add the metadata for these via uploading a spreadsheet to an existing RO-Crate in Crate-O, rather than adding these items manually. An RO-Crate metadata spreadsheet template can be downloaded here [TODO: add this] and populated with metadata specific to your collection.

> Note that spreadsheet upload currently only has functionality to add new data, and cannot overwrite or edit existing data in your RO-Crate.

The template is based on an example data collection that contains three types of files within each object:
- Audio files (WAV), the primary material
- Text files (CSV), transcriptions of the audio files
- ELAN files (EAF), linguistic annotations of the audio files

<br>

## Tab Breakdown

The spreadsheet has the below tabs by default, but depending on your collection, you may need to add additional tabs, or others may not be applicable.

<br>

Tab | Description
--- | ---
Root | Metadata about the root or top level of the collection.
Authors | Metadata about the person or organisation responsible for creating this collection.
Publishers | Metadata about the organisation responsible for releasing this collection.
Licenses | Metadata about the license(s) within the collection; both for the objects and files, and for the collection's metadata.
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

<br>

At a minimum, it’s best practice to include __@id__ and __@type__ columns in each of your spreadsheet tabs, as these appear in Crate-O for each of the entities. The tables in the next section provide further details on what constitutes a valid __@id__ and __@type__ in each tab. For more detailed lists of these, see [Metadata for Language Data](https://ldaca.gitbook.io/metadata-for-language-data/).

> HINT: To type a column name beginning with `@` in Excel, put an apostrophe before it `'@`. This will force it to be recognised as a text value rather than a formula.

<br>

The columns provided in the template tabs are illustrative only and may not all apply to your collection; please edit these as needed.
Where a column header begins with a full stop (.), this indicates that the column will be ignored when the data is loaded into Crate-O and will not appear in the RO-Crate. This can be helpful if you want to retain other information in your spreadsheet that may not be in a format applicable to the RO-Crate.

<br>

## Column Breakdown

The section below describes each of the columns included in the template, ordered by tab. Please note that the columns provided in the template tabs are illustrative only and should be edited according to the requirements of your collection.

<br>

### Root

The root tab provides information about the top level of the collection. Unlike the other tabs, the root tab can only have one row, so if there are columns that require more than one value, duplicate that column.

Column | Type | Description
--- | --- | ---
@id | Data entry | Persistent, managed unique ID in URL format (if available), for example, a DOI for a collection.
@type | Pre-filled | The type of the collection. Both `Dataset` and `RepositoryCollection` are required.
name | Data entry | The name of this collection.
description | Data entry | An abstract of the collection. Include as much detail as possible about the motivation and use of the dataset, including things that we do not yet have properties for.
isRef_author | Pre-filled | Generated from the `@id` column in the Author tab.
organization | Data entry | TODO: needed?
isRef_publisher | Pre-filled | Generated from the `@id` column in the Publisher tab.

<br>

### Authors

An author is a person or organisation responsible for creating the collection. It is possible for collections to have multiple authors.

Column | Type | Description
--- | --- | ---
@id | Data entry | Persistent, managed unique ID in URL format (if available), for example, an ROR for an organisation or an ORCID, personal home page URL or email address for a person.
@type | Dropdown | The type of the author. Either `Person` or `Organization` can be selected.
name | Data entry | The name of the author.

<br>

### Publishers

A publisher is an organisation responsible for releasing the collection. It is possible for collections to have multiple publishers.

Column | Type | Description
--- | --- | ---
@id | Data entry | Persistent, managed unique ID in URL format (if available), for example, an ROR for an organisation.
@type | Pre-filled | The type of the publisher. Only `Organization` is valid.
name | Data entry | The name of the organisation.

<br>

### Licenses

A license for a collection establishes the conditions for who can access, share and reuse the data, and other conditions as required. It is a legal arrangement between the creator of the data and the end-user specifying what users can do with the data.

TODO didn't work in loading

Column | Type | Description
--- | --- | ---
@id | Data entry | 
@type | Data entry | 
name | Data entry | The name of the license.
description | Data entry |
metadataIsPublic | |
allowTextIndex | |

For licensing, it is possible to leave this tab blank, however, this will add a default 'no license' which will need to be amended later in Crate-O.

<br>

### People

This tab contains information about the people within the collection.

Column | Type | Description
--- | --- | ---
@id | Data entry | A unique identifier for the person, generated from the `name` column. Identifiers should be prefixed with `#`.
@type | Pre-filled | The type of the entity. Only `Person` is valid.
name | Data entry | The name of the person.
language_code | Data entry | The language spoken by the person. An example of an optional metadata field from the source data. Language codes can be obtained from [AustLang](https://collection.aiatsis.gov.au/austlang/search), [Glottolog](https://glottolog.org/) and [Ethnologue](https://www.ethnologue.com/).
gender | Data entry | The gender of the person. An example of an optional metadata field from the source data.
birthDate | Data entry | The birth date (year) of the person. An example of an optional metadata field from the source data.
isRef_specializationOf | Data entry | A reference to another Person entity, used for collections where a person appears more than once with different demographic info (e.g. a different age). In these collections, there should be a ‘canonical’ person for each participant and another Person entity each time they participate, with different ages or other statuses.

<br>

### Objects

An object is a single resource or a group of tightly related resources in a collection. For example, a work (document) in a written corpus, or the files associated with a dialogue or session in a speech study (recordings, transcriptions etc.). Some systems, such as PARADISEC, refer to Objects as Items or may use other terms.

Column | Type | Description
--- | --- | ---
@id | Pre-filled | A unique identifier for the object, generated from the `name` column. Identifiers should be prefixed with `#`.
@type | Pre-filled | The type of the entity. Only `RepositoryObject` is valid.
name | Data entry | The name of the object.
description | Data entry | A description of the object.
isRef_speaker | Pre-filled | Generated from the `.pseudonym` column with `#` prefixed.
.pseudonym | Data entry | An example of a column from a data steward's source data, so that speakers in the collection are anonymised.
datePublished | Data entry | The date the object was published.
isRef_pdcm:memberOf | Data entry | The collection this object is a member of, generated from the `@id` column in the Root tab. Or if the collection contains sub-collections, a reference to another RepositoryCollection @id.
isRef_license | Data entry | The `@id` of the license to which this object adheres.
isRef_indexableText | Data entry | Identifies which of the files in the given object has content that is indexed for search purposes. For example, in the template, the content of the CSV file would be searchable, whereas the EAF and WAV files would not. If `isRef_indexableText` is not included in a collection, search will only run on the metadata and not the transcript file content.

<br>

### Files (CSV, EAF, WAV)

A file is a container for data and can store data in different formats. For example, a single object could have an audio file as well as a text file containing a transcription of the audio. Three examples of file tabs are included in the template, and their columns are combined in the table below.

Tab | Column | Type | Description
--- | --- | --- | ---
CSV, EAF, WAV | @id | Pre-filled | The filepath to the given file. Generated from the `.folder`, `.filename` and `.postfix` columns.
CSV, EAF, WAV | @type | Pre-filled | The type of the entity. Only `File` is valid.
CSV, EAF, WAV | .folder | Data entry | The folder name in which the given file appears.
CSV, EAF, WAV | .filename | Data entry | The name of the given file, without postfixes.
CSV, EAF, WAV | .postfix | Data entry | The file format of the given file, for example, `.csv`, `.eaf`, `.wav`.
CSV, EAF | isType_Annotation | Data entry | Indicates whether the given file is an annotation of another file. Requires a Boolean value (`TRUE` or `FALSE`).
WAV | isType_PrimaryMaterial | Data entry | Indicates whether the given file is the object of study, such as a literary work, film, or recording of natural discourse. Requires a Boolean value (`TRUE` or `FALSE`).
CSV, EAF, WAV | isRef_partOf | Pre-filled | Generated from the `.filename` column.
CSV, EAF | isRef_annotationOf | Data entry | The full filename of the primary material that the given file is an annotation of.
CSV, EAF, WAV | .objectId | Pre-filled | Generated from the `.filename` column.

<br>

## Upload Spreadsheet to an RO-Crate with Crate-O

For steps on adding your spreadsheet data to an existing RO-Crate, see [Append Data from Spreadsheet](/resources/user-guides/crate-o/ro-crate-creation/#append-data-from-spreadsheet).

<br>