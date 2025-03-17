---
title: "Spreadsheet Upload"
date: 2021-02-28T13:53:43+10:00
draft: false
description: "Guidance and a template for adding new data to an RO-Crate via spreadsheet."
weight: 4
---

<br>

##### [Template](#template)

##### [Tab Breakdown](#tab-breakdown)

##### [Column Breakdown](#column-breakdown)

- [RootDataset](#rootdataset)
- [@context](#context)
- [Authors](#authors)
- [Publishers](#publishers)
- [Licenses](#licenses)
- [People](#people)
- [Places](#places)
- [Localities](#localities)
- [Objects](#objects)
- [Files (CSV, EAF, WAV)](#files-csv-eaf-wav)

##### [Upload Spreadsheet to an RO-Crate with Crate-O](#upload-spreadsheet-to-an-ro-crate-with-crate-o)

<br>

## Template

For {{< glossary_link display="collections" id="collection" >}} where there are a lot of interconnected {{< glossary_link display="objects" id="object" >}} and files, it may be easier or preferable to add the {{< glossary_link display="metadata" id="metadata" >}} for these via uploading a spreadsheet to an existing {{< glossary_link display="RO-Crate" id="ro-crate" >}} in {{< glossary_link display="Crate-O" id="crate-o" >}}, rather than adding these items manually. An RO-Crate metadata spreadsheet template can be downloaded below and populated with metadata specific to your collection:

<br>

<a href="./ro-crate-metadata-template.xlsx" rel="" style="font-weight: bold; border: solid; border-radius: 23px; padding: 12px">ro-crate-metadata-template.xlsx</a>

<br>

> Spreadsheet upload currently only has functionality to add new data, and cannot overwrite or edit existing data in your RO-Crate.

The template is based on an example {{< glossary_link display="data collection" id="data-collection" >}} that contains three types of files within each object:

- Audio files (WAV), the primary material
- Text files (CSV), transcriptions of the audio files
- ELAN files (EAF), linguistic annotations of the audio files

<br>

## Tab Breakdown

The spreadsheet has the below tabs by default, but depending on your {{< glossary_link display="collection" id="collection" >}}, you may need to add additional tabs, or others may not be applicable.

<br>

| Tab         | Description                                                                                                                                                                              |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RootDataset | {{< glossary_link display="Metadata" id="metadata" >}} about the root or top level of the collection.                                                                                    |
| @context    | Specifies the vocabulary or schema that is intended to be used with language data.                                                                                                       |
| Authors     | Metadata about the person or organisation responsible for creating this collection.                                                                                                      |
| Publishers  | Metadata about the organisation responsible for releasing this collection.                                                                                                               |
| Licenses    | Metadata about the license(s) within the collection; both for the {{< glossary_link display="objects" id="object" >}} and files, and for the collection's metadata.                      |
| People      | Metadata about the people within the collection.                                                                                                                                         |
| Places      | Metadata about the places within the collection.                                                                                                                                         |
| Localities  | Metadata about the geometric location data within the collection.                                                                                                                        |
| Objects     | Metadata about the entities within the collection that could encompass one or more files.                                                                                                |
| Files       | Metadata about the files in your collection. If the collection has multiple file formats, duplicate this tab and add the formats to the tab names, e.g. CSV_Files, EAF_Files, WAV_Files. |

> ELAN (.eaf) files can have relative or absolute paths to the data they relate to. The ELAN preferences file is generally not needed for the collection and relates to the particular ELAN user only.

<br>

Below the header, an example row is included to illustrate how the section can be filled. The example row is colour-coded according to whether the column:

- requires the user to input data (blue)
- is pre-filled with a formula or static value and doesn't require editing (green).

> HINT: Highlight the example row and drag it down to copy all the pre-filled cells. Don't forget to remove the example rows before you upload your spreadsheet to {{< glossary_link display="Crate-O" id="crate-o" >}}!

<br>

At a minimum, it’s best practice to include `@id` and `@type` columns in each of your spreadsheet tabs, as these appear in Crate-O for each of the entities. The tables in the next section provide further details on what constitutes a valid `@id` and `@type` in each tab. For more detailed lists of these, see [Metadata for Language Data](https://ldaca.gitbook.io/metadata-for-language-data/).

> HINT: To type a column name beginning with `@` in Excel, put an apostrophe before it `'@`. This will force it to be recognised as a text value rather than a formula.

<br>

Prefixes including `ldac` and `pcdm` occur on some metadata in the sections below - this indicates that the metadata is not a part of the [schema.org](https://schema.org/) vocabulary, however in Crate-O, these prefixes are hidden for easier legibility.

<br>

The columns provided in the template tabs are illustrative only and may not all apply to your collection; please edit these as needed.
Where a column header begins with a full stop (.), this indicates that the column will be ignored when the data is loaded into Crate-O and will not appear in the {{< glossary_link display="RO-Crate" id="ro-crate" >}}. This can be helpful if you want to retain other information in your spreadsheet that may not be in a format applicable to the RO-Crate.

<br>

## Column Breakdown

The section below describes each of the columns included in the template, ordered by tab. Please note that the columns provided in the template tabs are illustrative only and should be edited according to the requirements of your {{< glossary_link display="collection" id="collection" >}}.

<br>

### RootDataset

The root dataset tab provides information about the top level of the {{< glossary_link display="collection" id="collection" >}}. Unlike the other tabs, the root dataset tab lists items row by row and can only have one column, so if there are rows that require more than one value (like `@type`), duplicate that row.

| Column               | Type       | Description                                                                                                                                                                                                                                                                                                                               |
| -------------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| @id                  | Data entry | Persistent, managed unique ID in URL format (if available), for example, a {{< glossary_link display="DOI" id="doi" >}} for a collection. The default for this field is `./` indicating a relative path to your current directory, however if you already have a persistent ID for the collection, it can be added in this field instead. |
| @type                | Pre-filled | The type of the collection. Both `Dataset` and `RepositoryCollection` are required.                                                                                                                                                                                                                                                       |
| name                 | Data entry | The name of this collection.                                                                                                                                                                                                                                                                                                              |
| description          | Data entry | An abstract of the collection. Include as much detail as possible about the motivation and use of the dataset, including things that we do not yet have properties for.                                                                                                                                                                   |
| ldac:doi             | Data entry | A Digital Object Identifier, e.g. https://doi.org/10.1000/182.                                                                                                                                                                                                                                                                            |
| isRef_author         | Pre-filled | Generated from the `@id` column in the [Authors](#authors) tab.                                                                                                                                                                                                                                                                           |
| isRef_publisher      | Pre-filled | Generated from the `@id` column in the [Publishers](#publishers) tab.                                                                                                                                                                                                                                                                     |
| isRef_license        | Pre-filled | Generated from the `@id` column in the [Licenses](#licenses) tab.                                                                                                                                                                                                                                                                         |
| datePublished        | Data entry | The date the object was published. The date should be in the ISO 8601 format YYYY-MM-DD.                                                                                                                                                                                                                                                  |
| inLanguage           | Data entry | The language in which the resource is written. For example, a work about the Italian language as used in Australia (subjectLanguage) that is written in English (inLanguage).                                                                                                                                                             |
| ldac:subjectLanguage | Data entry | The languages that the materials in the collection are about (not the language that it is in). For example, a work about the Italian language as used in Australia (subjectLanguage) that is written in English (inLanguage).                                                                                                             |

> The prefix `isRef_` indicates that data in this column should be taken from another `@id` field in the spreadsheet. For example, `isRef_author` uses the `@id` from the Author tab to link all the author details to the RootDataset tab.

<br>

### @context

The context specifies the vocabulary or schema that is intended to be used with the collection. In the case of language data, the [Language Data Commons Schema (ldac)](https://w3id.org/ldac/terms) is used.

| Column | Type       | Description                                                              |
| ------ | ---------- | ------------------------------------------------------------------------ |
| name   | Pre-filled | The name of the vocabulary or schema.                                    |
| @id    | Pre-filled | Persistent, managed unique ID in URL format of the vocabulary or schema. |

<br>

### Authors

An author is a person or organisation responsible for creating the {{< glossary_link display="collection" id="collection" >}}. It is possible for collections to have multiple authors.

| Column | Type       | Description                                                                                                                                                            |
| ------ | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| @id    | Data entry | Persistent, managed unique ID in URL format (if available), for example, an ROR for an organisation or an ORCID, personal home page URL or email address for a person. |
| @type  | Data entry | The type of the author. Either `Person` or `Organization` can be selected.                                                                                             |
| name   | Data entry | The name of the author. Don't include titles such as Dr/Prof.                                                                                                          |

<br>

### Publishers

A publisher is an organisation responsible for releasing the {{< glossary_link display="collection" id="collection" >}}. It is possible for collections to have multiple publishers.

| Column | Type       | Description                                                                                          |
| ------ | ---------- | ---------------------------------------------------------------------------------------------------- |
| @id    | Data entry | Persistent, managed unique ID in URL format (if available), for example, an ROR for an organisation. |
| @type  | Pre-filled | The type of the publisher. Only `Organization` is valid.                                             |
| name   | Data entry | The name of the organisation.                                                                        |

<br>

### Licenses

A license for a {{< glossary_link display="collection" id="collection" >}} establishes the conditions for who can access, share and reuse the data, and other conditions as required. It is a legal arrangement between the creator of the data and the end-user specifying what users can do with the data.

| Column                | Type       | Description                                                                                                                                                                                                                                                             |
| --------------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| @id                   | Data entry | A URL to a version of the license (if available), for example, a URL of a Creative Commons license. If there is no URL, a _license.txt_ file containing the text of the license needs to be included in the repository, and `license.txt` should be added as the `@id`. |
| @type                 | Pre-filled | The type of the license. Only `DataReuseLicense` is valid.                                                                                                                                                                                                              |
| name                  | Data entry | The name of the license.                                                                                                                                                                                                                                                |
| description           | Data entry | A description of the license.                                                                                                                                                                                                                                           |
| ldac:metadataIsPublic | Data entry | Determines whether the collection {{< glossary_link display="metadata" id="metadata" >}} can be viewed publicly. Requires a Boolean value (`TRUE` or `FALSE`).                                                                                                          |
| ldac:allowTextIndex   | Data entry | Determines whether the collection text can be indexed for search purposes. Requires a Boolean value (`TRUE` or `FALSE`).                                                                                                                                                |

It is possible to leave the {{< glossary_link display="licensing" id="licensing" >}} tab blank if these details are still being finalised for the collection, however, this will need to be amended later in {{< glossary_link display="Crate-O" id="crate-o" >}}.

> For custom licenses (i.e. those specific to a particular collection), it is recommended that a copy of the license be included in the repository to ensure that it remains accessible. Furthermore, if there are any additional usage restrictions or options for use outside of a given license, this information can be included in a `usageInfo` field, e.g. "For any use not permitted by the CC-BY-ND 4.0 License, please contact the Data Steward".

<br>

### People

This tab contains information about the people within the {{< glossary_link display="collection" id="collection" >}}.

| Column                 | Type       | Description                                                                                                                                                                                                                                                                                                                           |
| ---------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| @id                    | Pre-filled | A unique identifier for the person, generated from the `name` column. Identifiers should be prefixed with `#`.                                                                                                                                                                                                                        |
| @type                  | Pre-filled | The type of the entity. Only `Person` is valid.                                                                                                                                                                                                                                                                                       |
| name                   | Data entry | The name of the person.                                                                                                                                                                                                                                                                                                               |
| gender                 | Data entry | The gender of the person. An example of an optional {{< glossary_link display="metadata" id="metadata" >}} field from the source data.                                                                                                                                                                                                |
| birthDate              | Data entry | The birth date (year) of the person. An example of an optional metadata field from the source data.                                                                                                                                                                                                                                   |
| isRef_specializationOf | Data entry | A reference to another Person entity, used for collections where a person appears more than once with different demographic info (e.g. a different age). In these collections, there should be a ‘canonical’ person for each participant and another Person entity each time they participate, with different ages or other statuses. |

<br>

### Places

This tab contains information about the places within the {{< glossary_link display="collection" id="collection" >}}.

| Column      | Type       | Description                                                                                    |
| ----------- | ---------- | ---------------------------------------------------------------------------------------------- |
| @id         | Data entry | A unique identifier for the place. Identifiers should be prefixed with `#`.                    |
| @type       | Pre-filled | The type of the entity. Only `Place` is valid.                                                 |
| name        | Data entry | The name of the place.                                                                         |
| description | Data entry | A description of the place, including its alternative names.                                   |
| isRef_geo   | Data entry | The `@id` of the location to which this object relates from the [Localities](#localities) tab. |

<br>

### Localities

This tab contains information about the geometric locations within the {{< glossary_link display="collection" id="collection" >}}.

| Column          | Type       | Description                                                                                                                                                                    |
| --------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| @id             | Data entry | A unique identifier for the location. Identifiers should be prefixed with `#`.                                                                                                 |
| @type           | Pre-filled | The type of the entity. Only `Geometry` is valid.                                                                                                                              |
| .latitude       | Data entry | The latitude of the location in decimal degree format.                                                                                                                         |
| .longitude      | Data entry | The longitude of the location in decimal degree format.                                                                                                                        |
| geosparql:asWKT | Pre-filled | The WKT serialisation of the geometry, generated from the `.latitude` and `.longitude` columns. Note that `geosparql:asWKT` format lists longitude first followed by latitude. |

<br>

### Objects

An {{< glossary_link display="object" id="object" >}} is a single resource or a group of tightly related resources in a {{< glossary_link display="collection" id="collection" >}}. For example, a work (document) in a written corpus, or the files associated with a dialogue or session in a speech study (recordings, transcriptions etc.). Some systems, such as {{< glossary_link display="PARADISEC" id="paradisec" >}}, refer to Objects as Items or may use other terms.

| Column                   | Type       | Description                                                                                                                                                                                                                                                                                                                                                                                                       |
| ------------------------ | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| @id                      | Pre-filled | A unique identifier for the object, generated from the `name` column. Identifiers should be prefixed with `#`.                                                                                                                                                                                                                                                                                                    |
| @type                    | Pre-filled | The type of the entity. Only `RepositoryObject` is valid.                                                                                                                                                                                                                                                                                                                                                         |
| name                     | Data entry | The name of the object.                                                                                                                                                                                                                                                                                                                                                                                           |
| description              | Data entry | A description of the object.                                                                                                                                                                                                                                                                                                                                                                                      |
| isRef_ldac:speaker       | Pre-filled | Generated from the `.pseudonym` column with `#` prefixed.                                                                                                                                                                                                                                                                                                                                                         |
| .pseudonym               | Data entry | An example of a column from a {{< glossary_link display="data steward" id="data-steward" >}}'s source data, so that speakers in the collection are anonymised.                                                                                                                                                                                                                                                    |
| datePublished            | Data entry | The date the object was published. The date should be in ISO 8601 format YYYY-MM-DD.                                                                                                                                                                                                                                                                                                                              |
| isRef_pcdm:memberOf      | Pre-filled | The collection this object is a member of, generated from the `@id` column in the [RootDataset](#rootdataset) tab. Or if the collection contains sub-collections, a reference to another RepositoryCollection `@id`.                                                                                                                                                                                              |
| isRef_license            | Data entry | The `@id` of the license to which this object adheres from the [Licenses](#licenses) tab.                                                                                                                                                                                                                                                                                                                         |
| isRef_ldac:indexableText | Data entry | Identifies which of the files in the given object has content that is indexed for search purposes. For example, in the template, the content of the CSV file would be searchable, whereas the EAF and WAV files would not. If `isRef_ldac:indexableText` is not included in a collection, search will only run on the {{< glossary_link display="metadata" id="metadata" >}} and not the transcript file content. |
| isRef_contentLocation    | Data entry | The `@id` of the place to which this object relates from the [Places](#places) tab.                                                                                                                                                                                                                                                                                                                               |
| inLanguage               | Data entry | The language in which the resource is written. For example, a work about the Italian language as used in Australia (subjectLanguage) that is written in English (inLanguage).                                                                                                                                                                                                                                     |
| ldac:subjectLanguage     | Data entry | The languages that the materials in the collection are about (not the language that it is in). For example, a work about the Italian language as used in Australia (subjectLanguage) that is written in English (inLanguage).                                                                                                                                                                                     |

<br>

### Files (CSV, EAF, WAV)

A file is a container for data and can store data in different formats. For example, a single {{< glossary_link display="object" id="object" >}} could have an audio file as well as a text file containing a transcription of the audio. Three examples of file tabs are included in the template, and their columns are combined in the table below.

| Tab           | Column                      | Type       | Description                                                                                                                                                               |
| ------------- | --------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CSV, EAF, WAV | @id                         | Pre-filled | The filepath to the given file. Generated from the `.folder`, `.filename` and `.postfix` columns.                                                                         |
| CSV, EAF, WAV | @type                       | Pre-filled | The type of the entity. Only `File` is valid.                                                                                                                             |
| CSV, EAF, WAV | .folder                     | Data entry | The folder name in which the given file appears.                                                                                                                          |
| CSV, EAF, WAV | .filename                   | Data entry | The name of the given file, without postfixes.                                                                                                                            |
| CSV, EAF, WAV | .postfix                    | Data entry | The file format of the given file, for example, `.csv`, `.eaf`, `.wav`.                                                                                                   |
| CSV, EAF      | isType_ldac:Annotation      | Data entry | Indicates whether the given file is an annotation of another file. Requires a Boolean value (`TRUE` or `FALSE`).                                                          |
| WAV           | isType_ldac:PrimaryMaterial | Data entry | Indicates whether the given file is the object of study, such as a literary work, film, or recording of natural discourse. Requires a Boolean value (`TRUE` or `FALSE`).  |
| CSV, EAF, WAV | isRef_isPartOf              | Pre-filled | Specifies the object that the file is a part of. Template example is generated from the `.filename` column. If entering manually, note that this field is case-sensitive. |
| CSV, EAF      | isRef_ldac:annotationOf     | Data entry | The full filename of the primary material that the given file is an annotation of.                                                                                        |
| CSV, EAF, WAV | .objectId                   | Pre-filled | Generated from the `.filename` column.                                                                                                                                    |

<br>

## Upload Spreadsheet to an RO-Crate with Crate-O

For steps on adding your spreadsheet data to an existing {{< glossary_link display="RO-Crate" id="ro-crate" >}}, see [Append Data from Spreadsheet](/resources/user-guides/crate-o/ro-crate-creation/#append-data-from-spreadsheet).

<br>
