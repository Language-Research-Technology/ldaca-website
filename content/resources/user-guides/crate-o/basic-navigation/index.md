---
title: "Basic Navigation"
date: 2024-05-22T15:42:05+10:00
draft: false
description: "A guide to navigating the various sections of the Crate-O interface."
---

<br>

##### Jump to:
##### [Main Menu](#main-menu)
##### [Mode Selector](#mode-selector)
##### [Property Groups](#property-groups)
##### [Entity Properties](#entity-properties)
##### [Entity Navigator](#entity-navigator)

<br>

## Main Menu

<br>

![Crate-O Main Menu](/crate-o-help/main_toolbar.png)

<br>

From the main menu, the following options are available:

File Option | Description
--- | ---
Open Directory | Select a directory/folder to locate or set where files are saved.
Load Files | Load files from the selected directory into this RO-Crate.
Bulk Add | Select a spreadsheet from a different directory to assist you with metadata description. This will append to your existing RO-Crate, if one has already been created. Note that this option currently only has functionality to add new data, rather than overwriting edited data that is already present in your RO-Crate.
Save | Save the state of this page into your RO-Crate. This will create an _ro-crate-metadata.json_ file, or append data into an existing _ro-crate-metadata.json_ file.
Close | Close without saving.
Help | Display general help from anywhere in Crate-O.

<br>

## Mode Selector

<br>

TODO: update after Alvin's changes

Below the main menu, the mode selector allows you to select a predefined mode or load one from your computer. Note that for blank RO-Crates, the mode will default to _Simple RO-Crate Dataset_, however for language data, the mode _Language Data Commons top-level Collection (corpus)_ is most relevant.

When a file or folder is open in Crate-O, _Selected Directory_ to the right of the ___Mode___ dropdown menu shows the directory or folder you currently have open.

Below _Selected Directory_, a home icon followed by entity breadcrumbs indicates the entity you are currently located on as well as your entity history. This will update as you navigate to different entities. Note that this section doesn't reflect the tree structure of the RO-Crate, but instead shows the history of the entities you have visited.

<br>

## Property Groups

<br>

On the left-hand panel, depending on the selected mode, different property groups will be available:

<br>

![Property Groups](/crate-o-help/metadata_sidebar.png)

<br>

Property Group | Description
--- | ---
About | The core metadata for this RO-Crate and its subject matter.
Related People, Orgs & Works | The context for the creation of this RO-Crate: who made it, funded it etc.
Structure | How the parts of this RO-Crate relate, such as collection and object relationships.
Provenance | A detailed description of how entities were created, by whom and with which tools.
Space & Time | Where and when the data was collected, i.e. the times and places it mentions or describes.
Software & Hardware | Computer programs and execution environments that could be used to create data, have created data, or are being packaged and described.
Others | Other properties not in the above categories. Note that if you find a property in `Other` that should be in one of the above groups or have other suggestions, please raise an issue on [GitHub](https://github.com/Language-Research-Technology/crate-o).

Hovering over the information icon (TODO add icon) next to each property group will display tooltips related to that group.

<br>

## Entity Properties

<br>

In the middle panel, the entity properties for the property group you currently have selected are shown.

The icon (!) indicates that an entity is a required field for all collections, and saving an RO-Crate without completing one of these sections will result in a warning message. Below each field is a tooltip providing further detail on the given entity.

Each entity field has a 'delete' icon beside it, however these are only functional (and appear in red) for entities that can be removed, i.e. required properties cannot be deleted, but you can edit these.

There are several compulsory metadata fields required for each collection:

Property Group | Metadata | Description | Additional Notes
--- | --- | --- | ---
About | @id | Persistent, managed unique ID in URL format (if available), for example a DOI for a collection or an ORCID, personal home page URL or email address for a person. | Existing persitent identifiers for persons and organisations can be found at:<br><ul><li>[ORCID](https://orcid.org/)<li>[ROR](https://ror.org/)<li>[Trove](https://trove.nla.gov.au/) (use the People & Organisations search category)
About | @type | The type of the entity. | Both `Dataset` and `RepositoryCollection` are required for top-level collections in the LDAC Mode.
About | Name | The name of this collection.
About | Description | An abstract of the collection. Include as much detail as possible about the motivation and use of the dataset, including things that we do not yet have properties for.
About | License | Link to a document that describes the rights and obligations for users of this collection record. NOTE: This does not necessarily cover the license terms that may apply to Objects in the collection which may have specific licensing. Licensing on other objects overrides the license attached to a collection record.
Related People, Orgs & Works | Author | The person or organisation responsible for creating this collection of data.
Related People, Orgs & Works | Publisher | The organisation responsible for releasing this dataset.
Others | Rights Holder | A person or organisation owning or managing rights over the resource.
Others | Accountable Person | The person or organisation who is the data steward for this resource.
Others | In Language | The language(s) of the materials (including PrimaryMaterials, DerivedMaterials and Annotations) in this collection. | Lookup that pulls from [AustLang](https://collection.aiatsis.gov.au/austlang/search), [Glottolog](https://glottolog.org/) and [Ethnologue](https://www.ethnologue.com/). Both AustLang names and codes can be used. If a language is not present, it can be created.
Others | Subject Language | The languages that the materials in the collection are about (not the language that it is in). This is particularly used on Annotations that may talk about PrimaryMaterials or DerivedMaterials. | Lookup that pulls from [AustLang](https://collection.aiatsis.gov.au/austlang/search), [Glottolog](https://glottolog.org/) and [Ethnologue](https://www.ethnologue.com/). Both AustLang names and codes can be used. If a language is not present, it can be created.

To browse all the metadata entities associated with the Language Data Commons Mode, see [Metadata for Language Data](https://ldaca.gitbook.io/metadata-for-language-data/).


<br>

## Entity Navigator

<br>

On the Entity Navigator panel, there are some further options related to navigating and creating metadata entities:

<br>

![Entity Navigator](/crate-o-help/entity_sidebar.png)

<br>

- ___Create New Entity___: Create a new metadata entity, such as a provenance action. For example, CreateAction describes how a work is created with more precision than a property like `author`.
- ___Links from___: When located in a sub-group, select to view the parent group(s) of a given metadata entity.
- ___All Entities___: Select to view all metadata entities associated with your collection.
- ___Unlinked Entities___: Select to view all metadata entities that are currently not linked to any properties.

<br>