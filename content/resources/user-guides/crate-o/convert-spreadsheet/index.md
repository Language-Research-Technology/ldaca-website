---
title: "Convert Spreadsheet"
date: 2021-02-28T13:53:43+10:00
draft: false
description: "Guidance and a template for adding new data to an RO-Crate via spreadsheet."
weight: 4
---

<br>

##### [Template](#template)

##### [Metadata Schemas](#metadata-schemas)

##### [Tab Breakdown](#tab-breakdown)

- [Template](#template-1)
- [Metadata Schemas](#metadata-schemas-1)
- [Tab Breakdown](#tab-breakdown-1)
  - [Examples in the Template](#examples-in-the-template)
- [Column Breakdown](#column-breakdown-1)
  - [RootDataset](#rootdataset)
  - [@context](#context)
  - [Custom Terms](#custom-terms)
    - [Using Custom Terms in Other Tabs](#using-custom-terms-in-other-tabs)
  - [Authors](#authors)
  - [Publishers](#publishers)
  - [Licenses](#licenses)
  - [Provenance](#provenance)
  - [People](#people)
  - [Places](#places)
  - [Localities](#localities)
  - [Objects](#objects)
  - [Files](#files)
  - [Schemas](#schemas)
  - [Columns](#columns)
- [Convert Spreadsheet to an RO-Crate with Crate-O](#convert-spreadsheet-to-an-ro-crate-with-crate-o-1)

##### [Column Breakdown](#column-breakdown)

- [Template](#template-1)
- [Metadata Schemas](#metadata-schemas-1)
- [Tab Breakdown](#tab-breakdown-1)
  - [Examples in the Template](#examples-in-the-template)
- [Column Breakdown](#column-breakdown-1)
  - [RootDataset](#rootdataset)
  - [@context](#context)
  - [Custom Terms](#custom-terms)
    - [Using Custom Terms in Other Tabs](#using-custom-terms-in-other-tabs)
  - [Authors](#authors)
  - [Publishers](#publishers)
  - [Licenses](#licenses)
  - [Provenance](#provenance)
  - [People](#people)
  - [Places](#places)
  - [Localities](#localities)
  - [Objects](#objects)
  - [Files](#files)
  - [Schemas](#schemas)
  - [Columns](#columns)
- [Convert Spreadsheet to an RO-Crate with Crate-O](#convert-spreadsheet-to-an-ro-crate-with-crate-o-1)

##### [Convert Spreadsheet to an RO-Crate with Crate-O](#convert-spreadsheet-to-an-ro-crate-with-crate-o)

<br>

## Template

For <GlossaryLink display="collections" id="collection" /> where there are a lot of interconnected <GlossaryLink display="objects" id="object" /> and files, it may be easier or preferable to add the <GlossaryLink display="metadata" id="metadata" /> for these via converting a spreadsheet to an <GlossaryLink display="RO-Crate" id="ro-crate" /> in <GlossaryLink display="Crate-O" id="crate-o" />, rather than adding these items manually. An RO-Crate metadata spreadsheet template can be downloaded below and populated with metadata specific to your collection:

<br>

<a href="./ro-crate-metadata-template.xlsx" rel="" style="font-weight: bold; border: solid; border-radius: 23px; padding: 12px">ro-crate-metadata-template.xlsx</a>

<br>

> This template can be edited in [Microsoft Excel](https://www.microsoft.com/en-au/microsoft-365/excel), [LibreOffice Calc](https://www.libreoffice.org/discover/calc/) or [Google Sheets](https://google.com/sheets). It is not compatible with Apple Numbers.

The template is based on an example <GlossaryLink display="data collection" id="data-collection" /> that contains three types of files within each object:

- Audio files (WAV), the primary material
- Text files (CSV), transcriptions of the audio files
- ELAN files (EAF), linguistic annotations of the audio files

> Spreadsheet conversion currently only has functionality to add new data, and cannot overwrite or edit existing data in your RO-Crate.

<br>
## Metadata Schemas

The spreadsheet uses a number of standard vocabularies for terms. Namespaces such as `ldac` and `pcdm` are prefixed to some <GlossaryLink display="metadata" id="metadata" /> in the sections below - this is to:

- indicate that the term is not a part of the [Schema.org](https://schema.org/) vocabulary which RO-Crate is based on, but uses another namespace
- avoid overlaps where multiple schemas have the same term but differing usages and definitions.

In <GlossaryLink display="Crate-O" id="crate-o" />, these prefixes are hidden for legibility.

<br>

If your collection requires metadata terms that are not present in the template, check if an existing term fits from the schemas below.

- [Schema.org](https://schema.org/): No prefix needed, e.g. `description`.
- [Language Data Commons Schema Terms](https://w3id.org/ldac/terms) (Can also be browsed through the [Metadata for Language Data GitBook](https://ldaca.gitbook.io/metadata-for-language-data)): Add the prefix `ldac`, e.g. `ldac:interviewer`.
- [Dublin Core Metadata Terms](http://purl.org/dc/terms): Add the prefix `dct`, e.g. `dct:rightsHolder`.

If you have terms specific to your collection that aren't covered by the above schemas, see the [Custom Terms](#custom-terms) tab on how to use them.

> If using a Defined Term (such as those in [Language Data Commons Schema Terms](https://w3id.org/ldac/terms#definedterms) or [Custom Terms](#custom-terms)), add `isTerm_` to the related property in the column header, e.g. a column header `isTerm_ldac:communicationMode` with the value `ldac:SpokenLanguage`.

<br>
## Tab Breakdown

The spreadsheet has the below tabs by default, but depending on your <GlossaryLink display="collection" id="collection" />, you may need to add additional tabs, or others may not be applicable.

<br>

| Tab          | Description                                                                                                                                                                                                                  |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RootDataset  | <GlossaryLink display="Metadata" id="metadata" /> about the root or top level of the collection. Unlike the other tabs, the header for the root dataset is vertical rather than horizontal.                             |
| @context     | Specifies the vocabulary or schema that is intended to be used with language data.                                                                                                                                           |
| Custom Terms | Specifies any terms used that are specific to the collection and not part of other existing metadata schemas.                                                                                                                |
| Authors      | Metadata about the person or organisation responsible for creating this collection.                                                                                                                                          |
| Publishers   | Metadata about the organisation responsible for releasing this collection.                                                                                                                                                   |
| Licenses     | Metadata about the license(s) within the collection, both for the <GlossaryLink display="objects" id="object" /> and files.                                                                                             |
| Provenance   | Metadata about the documented history or chain of custody of materials from their creation to their current location within a collection.                                                                                    |
| People       | Metadata about the people within the collection.                                                                                                                                                                             |
| Places       | Metadata about the places within the collection.                                                                                                                                                                             |
| Localities   | Metadata about the geometric location data within the collection.                                                                                                                                                            |
| Objects      | Metadata about the entities within the collection that could encompass one or more files.                                                                                                                                    |
| Files        | Metadata about the files in your collection. If the collection has multiple file formats that you prefer to track separately, duplicate this tab and add the formats to the tab names, e.g. CSV_Files, EAF_Files, WAV_Files. |
| Schemas      | Metadata about the schemas within the collection, for example, the set of columns used in tabular CSV files.                                                                                                                 |
| Columns      | Metadata about the columns within the CSV files in the collection.                                                                                                                                                           |

> ELAN (.eaf) files can have relative or absolute paths to the data they relate to. The ELAN preferences file is generally not needed for the collection and relates to the particular ELAN user only.

<br>

### Examples in the Template

Below the header, at least one example row is included to illustrate how the section can be filled. This is colour-coded according to whether the column:

- requires the user to manually input data (<span style="color:dodgerblue">blue</span>)
- is pre-filled with a formula or static value and doesn't require editing (<span style="color:green">green</span>)
- is for internal use and doesn't require editing in most cases (<span style="color:orangered">orange</span>).

> HINT: Highlight the example row and drag it down to copy all the pre-filled cells. Remember to remove the example rows before you convert your spreadsheet in <GlossaryLink display="Crate-O" id="crate-o" />!

The columns provided in the template tabs are illustrative only and may not all apply to your collection; please edit these as needed.
Where a column header begins with a full stop `.`, this indicates that the column will be ignored when the data is loaded into Crate-O and will not appear in the <GlossaryLink display="RO-Crate" id="ro-crate" />. This can be helpful if you want to retain other information in your spreadsheet that may not be in a format applicable to the RO-Crate.

<br>

At a minimum, it’s best practice to include `@id` and `@type` columns in each of your spreadsheet tabs, as these appear in Crate-O for each of the entities. The tables in the next sections provide further detail on what constitutes a valid `@id` and `@type` in each tab.

> HINT: To type a column name beginning with `@` in Excel, put an apostrophe before it `'@`. This will force it to be recognised as a text value rather than a formula.

<br>

## Column Breakdown

The section below describes each of the columns included in the template, ordered by tab. Please note that the columns provided in the template tabs are illustrative only and should be edited according to the requirements of your <GlossaryLink display="collection" id="collection" />.

<br>

### RootDataset

The root dataset tab provides information about the top level of the <GlossaryLink display="collection" id="collection" />. Unlike the other tabs, the root dataset tab lists items row by row and can only have one column, so if there are rows that require more than one value (like `@type`), duplicate that row.

| Column                | Type       | Description                                                                                                                                                                                                                                                                                                                                |
| --------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| @id                   | Data entry | Persistent, managed unique ID in URL format (if available), for example, a <GlossaryLink display="DOI" id="doi" /> for a collection. The default for this field is `./` indicating a relative path to your current directory, however, if you already have a persistent ID for the collection, it can be added in this field instead. |
| @type                 | Pre-filled | The type of the collection. Both `Dataset` and `RepositoryCollection` are required.                                                                                                                                                                                                                                                        |
| name                  | Data entry | The name of this collection.                                                                                                                                                                                                                                                                                                               |
| description           | Data entry | An abstract of the collection. Include as much detail as possible about the motivation and use of the dataset, including things that we do not yet have properties for.                                                                                                                                                                    |
| ldac:doi              | Data entry | A Digital Object Identifier, e.g. https://doi.org/10.1000/182.                                                                                                                                                                                                                                                                             |
| isRef_author          | Pre-filled | Generated from the `@id` column in the [Authors](#authors) tab.                                                                                                                                                                                                                                                                            |
| isRef_publisher       | Pre-filled | Generated from the `@id` column in the [Publishers](#publishers) tab.                                                                                                                                                                                                                                                                      |
| isRef_license         | Pre-filled | Generated from the `@id` column in the [Licenses](#licenses) tab.                                                                                                                                                                                                                                                                          |
| datePublished         | Data entry | The date the object was published. The date should be in the ISO 8601 format YYYY-MM-DD.                                                                                                                                                                                                                                                   |
| inLanguage            | Data entry | The language in which the resource is written. For example, a work about the Italian language as used in Australia (`ldac:subjectLanguage`) that is written in English (`inLanguage`).                                                                                                                                                     |
| ldac:subjectLanguage  | Data entry | The languages that the materials in the collection are about (not the language that it is in). For example, a work about the Italian language as used in Australia (`ldac:subjectLanguage`) that is written in English (`inLanguage`).                                                                                                     |
| ldac:metadataIsPublic | Data entry | Determines whether the collection <GlossaryLink display="metadata" id="metadata" /> can be viewed publicly. Requires a Boolean value (`TRUE` or `FALSE`).                                                                                                                                                                             |

> The prefix `isRef_` indicates that data in this column should be taken from another `@id` field in the spreadsheet. For example, `isRef_author` uses the `@id` from the Author tab to link all the author details to the RootDataset tab.

<br>

### @context

The context specifies the vocabulary or schema that is intended to be used with the collection. In the case of language data, the [Language Data Commons Schema (ldac)](https://w3id.org/ldac/terms) is used. This is also the place to specify the schema for [Custom Terms](#custom-terms) if these occur in your collection.

| Column | Type       | Description                                                                                                                                                                                                                                                                    |
| ------ | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| name   | Pre-filled | The namespace of the required vocabulary or schema. The template is pre-filled with the `ldac` schema, which is required for this template. It is also pre-filled with `csvw` for [Schemas](#schemas) and [Columns](#columns), and `custom` for [Custom Terms](#custom-terms). |
| @id    | Pre-filled | Persistent, managed unique ID in URL format of the vocabulary or schema.                                                                                                                                                                                                       |

<br>

### Custom Terms

If you have terms specific to your collection that aren't covered by the existing [Metadata Schemas](#metadata-schemas), use the custom terms tab to add them.

> Metadata terms are organised according to the following entity types. Use the types that are most useful for your collection.
>
> | Entity            | Description                                                                                                                                                                                                                                                                                                   | Examples                                                                    |
> | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
> | Property          | Used for attributes of the thing you are describing, similar to fields you might see on a form.<ul><li>If you want the value of the term to be free text, e.g. name, age, make a property.</li><li>If you have a set of finite values for the term, like multiple choice, make a property as the overarching term.</li></ul> | <ul><li>motherTongue</li><li>register  </li></ul>                                          |
> | Defined Term Sets | Used to define a group of terms that can be used under a single property.<ul><li>If you have a set of finite values for a property, like multiple choice, make a defined term set to group these.  </li></ul>                                                                                                           | <ul><li>RegisterTerms </li></ul>                                                      |
> | Defined Terms     | Used for the values of a defined term set that are used under a single property.<ul><li>If you have a set of finite values for a property, like multiple choice, make each of these a defined term.      </li></ul>                                                                                                     | <ul><li>GovernmentEnglish</li><li>PrivateWritten</li><li>PublicWritten</li><li>SpeechBased</li></ul> |
>
> In the template, the example contains a property, two defined terms, and a defined term set. The property `#textType` has the defined term set `#TextTypeTerms`, which contains the two defined terms `#Speech` and `#Interview`.
>
> Properties should start with a lowercase letter, whereas Defined Terms and Defined Term Sets start with uppercase.

| Column                 | Type       | Description                                                                                                                                                                                                                                                                                                   |
| ---------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| @id                    | Pre-filled | A complete identifier for the term, generated from the `@id` of the `custom` row in the [@context](#context) tab and the `.id` column.                                                                                                                                                                        |
| .id                    | Data entry | A unique identifier for the term. The prefix `#` isn't needed.                                                                                                                                                                                                                                                |
| @type                  | Data entry | The type of the term. Select either `rdf:Property`, `DefinedTerm` or `DefinedTermSet`. See the table above for descriptions and examples of these.                                                                                                                                                            |
| name                   | Data entry | The name of the term.                                                                                                                                                                                                                                                                                         |
| description            | Data entry | A description of the term.                                                                                                                                                                                                                                                                                    |
| isRef_inDefinedTermSet | Data entry | If one or more of your terms has the `@type` `DefinedTerm`, add the `@id` of the defined term set it is a part of here. If you haven't created a term with the `@type` `DefinedTermSet`, add another row for this. For rows that have the `@type` `rdf:Property` or `DefinedTermSet`, leave this field blank. |
| sameAs                 | Data entry | If the term you are defining is the same as a term in another schema (excluding those in [Metadata Schemas](#metadata-schemas)), add the URL to the term.                                                                                                                                                     |
| rdfs:subClassOf        | Data entry | For internal use and doesn't need editing. See [rdfs:subClassOf](https://www.w3.org/TR/rdf-schema/#ch_subclassof) for more detail.                                                                                                                                                                            |

#### Using Custom Terms in Other Tabs

Once you've listed your custom terms, these can be used throughout the spreadsheet in the following ways:

- Properties: as column headers in the format `isTerm_custom:yourProperty`
- Defined Terms: as column values under their related custom property in the format `custom:YourDefinedTerm`

> Defined Term Sets are only required in the Custom Terms tab to group a set of Defined Terms and don't need to be used elsewhere in the spreadsheet.

<br>

### Authors

An author is a person or organisation responsible for creating the <GlossaryLink display="collection" id="collection" />. It is possible for collections to have multiple authors.

| Column | Type       | Description                                                                                                                                                            |
| ------ | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| @id    | Data entry | Persistent, managed unique ID in URL format (if available), for example, an ROR for an organisation or an ORCID, personal home page URL or email address for a person. |
| @type  | Data entry | The type of the author. Select either `Person` or `Organization`.                                                                                                      |
| name   | Data entry | The name of the author. Don't include titles such as Dr/Prof.                                                                                                          |

<br>
### Publishers

A publisher is an organisation responsible for releasing the <GlossaryLink display="collection" id="collection" />. It is possible for collections to have multiple publishers.

| Column | Type       | Description                                                                                          |
| ------ | ---------- | ---------------------------------------------------------------------------------------------------- |
| @id    | Data entry | Persistent, managed unique ID in URL format (if available), for example, an ROR for an organisation. |
| @type  | Pre-filled | The type of the publisher. Only `Organization` is valid.                                             |
| name   | Data entry | The name of the organisation.                                                                        |

<br>
### Licenses

A license for a <GlossaryLink display="collection" id="collection" /> establishes the conditions for who can access, share and reuse the data, and other conditions as required. It is a legal arrangement between the creator of the data and the end-user specifying what users can do with the data.

| Column              | Type       | Description                                                                                                                                                                                                                                                                                                                                            |
| ------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| @id                 | Data entry | A URL to a version of the license (if available), for example, a URL of a Creative Commons license. For custom licenses (i.e. those specific to a particular collection), it is recommended that a copy of the license file be included in the repository to ensure that it remains accessible. `license.txt` or similar should be added as the `@id`. |
| @type               | Pre-filled | The type of license. `ldac:DataReuseLicense` is required for all items, and `File` should also be added for physical licenses in the collection as `[ldac:DataReuseLicense, File]`.                                                                                                                                                                    |
| name                | Data entry | The name of the license.                                                                                                                                                                                                                                                                                                                               |
| description         | Data entry | A description of the license.                                                                                                                                                                                                                                                                                                                          |
| ldac:allowTextIndex | Data entry | Determines whether the collection text can be indexed for search purposes. Requires a Boolean value (`TRUE` or `FALSE`).                                                                                                                                                                                                                               |
| isRef_sameAs        | Data entry | Indicates that two items are identical versions of the same license. For example, a Creative Commons license that has a URL as well as a local copy contained within the collection.                                                                                                                                                                   |
| isRef_isPartOf      | Pre-filled | Specifies the collection that the license is a part of, generated from the `@id` column in the [RootDataset](#rootdataset) tab.                                                                                                                                                                                                                        |

It is possible to leave the <GlossaryLink display="licensing" id="licensing" /> tab blank if these details are still being finalised for the collection, however, this will need to be amended later in <GlossaryLink display="Crate-O" id="crate-o" />.

> If there are any additional usage restrictions or options for use outside of a given license, this information can be included in a `usageInfo` field, e.g. "For any use not permitted by the CC-BY-ND 4.0 License, please contact the Data Steward".

<br>
### Provenance

The provenance for a <GlossaryLink display="collection" id="collection" /> details the documented history from an item's creation to its current location within a collection, including changes in format and tools required to read the file.

| Column       | Type       | Description                                                                                                                                                                             |
| ------------ | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| @id          | Data entry | A unique identifier for the document change within the collection. Identifiers should be prefixed with `#`.                                                                             |
| @type        | Pre-filled | The type of provenance. Only `CreateAction` is valid.                                                                                                                                   |
| name         | Data entry | The name of the action on the document.                                                                                                                                                 |
| description  | Data entry | A description of the changes to the document within the collection.                                                                                                                     |
| isRef_object | Data entry | The document upon which the action is carried out, i.e. a file that was used as an input in some way.                                                                                   |
| isRef_result | Data entry | The resulting document produced in the action, i.e. the output file.                                                                                                                    |
| instrument   | Data entry | The tool or software app used to create the output file. If a more complete description of the software is required, change the header from `instrument` to `isRef_instrument` instead. |
| isRef_agent  | Data entry | The direct performer or driver of the action, for example, an ROR for an organisation or an ORCID, personal home page URL or email address for a person.                                |

<br>
### People

This tab contains information about the people within the <GlossaryLink display="collection" id="collection" />.

| Column                      | Type       | Description                                                                                                                                                                                                                                                                                                                           |
| --------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| @id                         | Pre-filled | A unique identifier for the person, generated from the `name` column. Identifiers should be prefixed with `#`.                                                                                                                                                                                                                        |
| @type                       | Pre-filled | The type of the entity. Only `Person` is valid.                                                                                                                                                                                                                                                                                       |
| name                        | Data entry | The name of the person.                                                                                                                                                                                                                                                                                                               |
| gender                      | Data entry | The gender of the person. An example of an optional <GlossaryLink display="metadata" id="metadata" /> field from the source data, using a [Schema.org](https://schema.org/) term.                                                                                                                                                |
| birthDate                   | Data entry | The birth date (year) of the person. An example of an optional metadata field from the source data, using a [Schema.org](https://schema.org/) term.                                                                                                                                                                                   |
| isRef_prov:specializationOf | Data entry | A reference to another Person entity, used for collections where a person appears more than once with different demographic info (e.g. a different age). In these collections, there should be a ‘canonical’ person for each participant and another Person entity each time they participate, with different ages or other statuses. |

<br>
### Places

This tab contains information about the places within the <GlossaryLink display="collection" id="collection" />.

| Column      | Type       | Description                                                                                    |
| ----------- | ---------- | ---------------------------------------------------------------------------------------------- |
| @id         | Data entry | A unique identifier for the place. Identifiers should be prefixed with `#`.                    |
| @type       | Pre-filled | The type of the entity. Only `Place` is valid.                                                 |
| name        | Data entry | The name of the place.                                                                         |
| description | Data entry | A description of the place, including its alternative names.                                   |
| isRef_geo   | Data entry | The `@id` of the location to which this object relates from the [Localities](#localities) tab. |

<br>
### Localities

This tab contains information about the geometric locations within the <GlossaryLink display="collection" id="collection" />.

| Column     | Type       | Description                                                                                                                                                          |
| ---------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| @id        | Data entry | A unique identifier for the location. Identifiers should be prefixed with `#`.                                                                                       |
| @type      | Pre-filled | The type of the entity. Only `Geometry` is valid.                                                                                                                    |
| .latitude  | Data entry | The latitude of the location in decimal degree format.                                                                                                               |
| .longitude | Data entry | The longitude of the location in decimal degree format.                                                                                                              |
| asWKT      | Pre-filled | The WKT serialisation of the geometry, generated from the `.latitude` and `.longitude` columns. Note that `asWKT` format lists longitude first followed by latitude. |

<br>
### Objects

An <GlossaryLink display="object" id="object" /> is a single resource or a group of tightly related resources in a <GlossaryLink display="collection" id="collection" />. For example, a work (document) in a written corpus, or the files associated with a dialogue or session in a speech study (recordings, transcriptions, etc.). Some systems, such as <GlossaryLink display="PARADISEC" id="paradisec" />, refer to Objects as Items or may use other terms.

| Column                   | Type       | Description                                                                                                                                                                                                                                                                                                                                                                                                       |
| ------------------------ | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| @id                      | Pre-filled | A unique identifier for the object, generated from the `name` column. Identifiers should be prefixed with `#`.                                                                                                                                                                                                                                                                                                    |
| @type                    | Pre-filled | The type of the entity. Only `RepositoryObject` is valid.                                                                                                                                                                                                                                                                                                                                                         |
| name                     | Data entry | The name of the object.                                                                                                                                                                                                                                                                                                                                                                                           |
| description              | Data entry | A description of the object.                                                                                                                                                                                                                                                                                                                                                                                      |
| isRef_ldac:speaker       | Pre-filled | Generated from the `.pseudonym` column with `#` prefixed.                                                                                                                                                                                                                                                                                                                                                         |
| .pseudonym               | Data entry | An example of a column from a <GlossaryLink display="data steward" id="data-steward" />'s source data, so that speakers in the collection are anonymised.                                                                                                                                                                                                                                                    |
| datePublished            | Data entry | The date the object was published. The date should be in ISO 8601 format YYYY-MM-DD.                                                                                                                                                                                                                                                                                                                              |
| isRef_pcdm:memberOf      | Pre-filled | The collection this object is a member of, generated from the `@id` column in the [RootDataset](#rootdataset) tab. Or if the collection contains sub-collections, a reference to another RepositoryCollection `@id`.                                                                                                                                                                                              |
| isRef_license            | Data entry | The `@id` of the license to which this object adheres from the [Licenses](#licenses) tab.                                                                                                                                                                                                                                                                                                                         |
| isRef_ldac:indexableText | Data entry | Identifies which of the files in the given object has content that is indexed for search purposes. For example, in the template, the content of the CSV file would be searchable, whereas the EAF and WAV files would not. If `isRef_ldac:indexableText` is not included in a collection, search will only run on the <GlossaryLink display="metadata" id="metadata" /> and not the transcript file content. |
| isRef_contentLocation    | Data entry | The `@id` of the place to which this object relates from the [Places](#places) tab.                                                                                                                                                                                                                                                                                                                               |
| inLanguage               | Data entry | The language in which the resource is written. For example, a work about the Italian language as used in Australia (`ldac:subjectLanguage`) that is written in English (`inLanguage`).                                                                                                                                                                                                                            |
| ldac:subjectLanguage     | Data entry | The languages that the materials in the collection are about (not the language that it is in). For example, a work about the Italian language as used in Australia (`ldac:subjectLanguage`) that is written in English (`inLanguage`).                                                                                                                                                                            |
| isRef_custom:textType    | Data entry | The `@id` of the term to which this object relates from the [Custom Terms](#custom-terms) tab. An example of an optional custom term from the source data.                                                                                                                                                                                                                                                        |

<br>
### Files

A file is a container for data and can store data in different formats. A single <GlossaryLink display="object" id="object" /> could have an audio file as well as a text file containing a transcription of the audio. Three examples of file types are included in the template: CSV, EAF and WAV.

| Column                      | Type       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --------------------------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| @id                         | Pre-filled | The file path to the given file. Generated from the `.folder` and `.filename` columns.                                                                                                                                                                                                                                                                                                                                                                                                                                |
| @type                       | Data entry | The type of file. In the first `@type` column, `File` is required for all items.<br>In the second `@type` column, choose from either `ldac:PrimaryMaterial`, `ldac:Annotation` or `ldac:DerivedMaterial` (see [materialType](https://w3id.org/ldac/terms#materialType) for full term descriptions). If the file is a tabular CSV and you have a schema of the columns used, `csvw:Table` should also be added, e.g. `[ldac:Annotation, csvw:Table]`. See [Schemas](#schemas) and [Columns](#columns) for more detail. |
| .folder                     | Data entry | The folder name in which the given file appears. If the file path has subfolders, use forward slash `/`, without the slash at the end of the file path, e.g. `path/to/folder`.                                                                                                                                                                                                                                                                                                                                        |
| .filename                   | Data entry | The name of the given file, including postfixes, e.g. `filename.txt`.                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| isType_ldac:PrimaryMaterial | Data entry | Indicates whether the given file is the object of study, such as a literary work, film, or recording of natural discourse. Requires the Boolean value `TRUE` or leave blank if false.                                                                                                                                                                                                                                                                                                                                 |
| isType_ldac:Annotation      | Data entry | Indicates whether the given file is an annotation of another file. Requires the Boolean value `TRUE` or leave blank if false.                                                                                                                                                                                                                                                                                                                                                                                         |
| isRef_isPartOf              | Data entry | Specifies the object that the file is a part of. Template example uses the `@id` column of the [Objects](#objects) tab. If entering manually, note that this field is case-sensitive.                                                                                                                                                                                                                                                                                                                                 |
| isRef_ldac:annotationOf     | Data entry | The full filename of the primary material that the given file is an annotation of. Leave this blank if the file is the primary material.                                                                                                                                                                                                                                                                                                                                                                              |
| isRef_csvw:tableSchema      | Data entry | If the file is a tabular CSV and you have a schema of the columns used, add the schema ID here, otherwise leave this field blank. See [Schemas](#schemas) and [Columns](#columns) for more detail.                                                                                                                                                                                                                                                                                                                    |

<br>
### Schemas

If you have tabular CSV files in your collection, a schema allows you to define tabular formats for the tables used within the collection, which are further detailed in the [Columns](#columns) tab.

| Column           | Type       | Description                                                                  |
| ---------------- | ---------- | ---------------------------------------------------------------------------- |
| @id              | Data entry | A unique identifier for the schema. Identifiers should be prefixed with `#`. |
| @type            | Pre-filled | The type of the schema. Only `csvw:Schema` is valid.                         |
| name             | Data entry | The name of the schema.                                                      |
| isRef_conformsTo | Data entry | A standard that the schema follows. Only `tabulatorMapping` is valid.        |

<br>
### Columns

If you have tabular CSV files in your collection with multiple columns, this tab allows you to identify the columns within your data as well as provide definitions for them. This allows users to see at a glance what is contained within the CSV files through the metadata and HTML preview, rather than having to open the files individually.

| Column                 | Type       | Description                                                                                                                                                |
| ---------------------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| @id                    | Pre-filled | A unique identifier for the column, generated from the `name` column. Identifiers should be prefixed with `#col_`.                                         |
| @type                  | Pre-filled | The type of the entity. Only `csvw:Column` is valid.                                                                                                       |
| name                   | Data entry | The name of the column. Avoid using spaces, as this is also used to generate the `@id`.                                                                    |
| description            | Data entry | A definition of the column.                                                                                                                                |
| csvw:propertyUrl       | Data entry | If any of the columns map directly to another schema term, use this field to provide the unique identifier of that term, otherwise leave this field blank. |
| isReverse_csvw:columns | Data entry | The `@id` of the schema to which this column relates from the [Schemas](#schemas) tab.                                                                     |

<br>

## Convert Spreadsheet to an RO-Crate with Crate-O

For steps on adding your spreadsheet data to an <GlossaryLink display="RO-Crate" id="ro-crate" /> using <GlossaryLink display="Crate-O" id="crate-o" />, see [Append Metadata from Spreadsheet](/resources/user-guides/crate-o/ro-crate-creation/#append-metadata-from-spreadsheet).

<br>