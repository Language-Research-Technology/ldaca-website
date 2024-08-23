---
title: "Basic Navigation"
date: 2023-04-22T15:42:05+10:00
draft: false
description: "A guide to navigating the various sections of the Crate-O interface."
weight: 2
---

<br>

##### [Main Menu](#main-menu)

##### [Mode Selector](#mode-selector)

##### [Current Entity](#current-entity)

##### [Property Groups](#property-groups)

##### [Entity Properties](#entity-properties)

##### [Entity Navigator](#entity-navigator)

<br>

## Main Menu

<br>

{{< image Src="/user-guides/crate-o/main_toolbar.png" Alt="Crate-O Main Menu" Desc="Crate-O Main Menu" Title="Crate-O Main Menu" Ref="LDaCA" >}}

<br>

From the Main Menu, the following options are available:

| File Option    | Description                                                                                                                                                                                                                                                                                                                                                                                                              |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Open Directory | Select a directory/folder to locate or set where files are saved. This is the required first step for all {{< glossary_link display="RO-Crates" id="ro-crate" >}}.                                                                                                                                                                                                                                                       |
| Load Files     | Load files from the selected directory into this RO-Crate.                                                                                                                                                                                                                                                                                                                                                               |
| Bulk Add       | Select an Excel spreadsheet or similar from a directory to assist you with {{< glossary_link display="metadata" id="metadata" >}} description (the directory can be the same as that for the RO-Crate). This will append to your existing RO-Crate if one has already been created. Note that this option currently only has functionality to add new data, and cannot overwrite or edit existing data in your RO-Crate. |
| Save           | Save the state of this page into your RO-Crate. This will create an _ro-crate-metadata.json_ file, or add data into an existing _ro-crate-metadata.json_ file.                                                                                                                                                                                                                                                           |
| Close          | Close without saving.                                                                                                                                                                                                                                                                                                                                                                                                    |
| Help           | Display general help from anywhere in {{< glossary_link display="Crate-O" id="crate-o" >}}.                                                                                                                                                                                                                                                                                                                              |
| About          | Display general information about Crate-O.                                                                                                                                                                                                                                                                                                                                                                               |

<br>

## Mode Selector

<br>

{{< image Src="/user-guides/crate-o/mode_selector.jpeg" Alt="Crate-O Mode Selector" Desc="Crate-O Mode Selector" Title="Crate-O Mode Selector" Ref="LDaCA" >}}

<br>

Below the main menu, the Mode Selector allows you to choose a predefined {{< glossary_link display="mode" id="mode" >}} or load one from your computer.

> Note that for blank {{< glossary_link display="RO-Crates" id="ro-crate" >}}, the mode will default to _Simple RO-Crate Dataset_, however for language data, the mode _Language Data Commons top-level Collection (corpus)_ is most relevant.

When a file or folder is open in {{< glossary_link display="Crate-O" id="crate-o" >}}, _Selected Directory_ to the right of the **_Mode_** dropdown menu shows the directory or folder you currently have open.

<br>

## Current Entity

<br>

{{< image Src="/user-guides/crate-o/current_entity.jpeg" Alt="Crate-O Current Entity" Desc="Crate-O Current Entity" Title="Crate-O Current Entity" Ref="LDaCA" >}}

<br>

Below the Mode Selector, a home icon followed by entity breadcrumbs indicates your entity history, and underneath that, the entity you are currently located on. These will update as you navigate to different entities. Note that the breadcrumbs section doesn't reflect the tree structure of the {{< glossary_link display="RO-Crate" id="ro-crate" >}}, but instead shows the history of the entities you have visited.

To the right of this is the option to **_Remove Entity_** that you are currently viewing (provided it is not the root entity).

<br>

## Property Groups

<br>

On the left-hand panel, depending on the selected {{< glossary_link display="mode" id="mode" >}}, different Property Groups will be available:

<br>

{{< image Src="/user-guides/crate-o/property_groups.jpeg" Alt="Crate-O Property Groups" Desc="Crate-O Property Groups" Title="Crate-O Property Groups" Ref="LDaCA" >}}

<br>

| Property Group               | Description                                                                                                                                                                                                                                                                                              |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| About                        | The core {{< glossary_link display="metadata" id="metadata" >}} for this {{< glossary_link display="RO-Crate" id="ro-crate" >}} and its subject matter.                                                                                                                                                  |
| Related People, Orgs & Works | The context for the creation of this RO-Crate: who made it, funded it etc.                                                                                                                                                                                                                               |
| Structure                    | How the parts of this RO-Crate relate, such as {{< glossary_link display="collection" id="collection" >}} and {{< glossary_link display="object" id="object" >}} relationships.                                                                                                                          |
| Provenance                   | A detailed description of how entities were created, by whom and with which tools.                                                                                                                                                                                                                       |
| Space & Time                 | Where and when the data was collected, i.e. the times and places it mentions or describes.                                                                                                                                                                                                               |
| Software & Hardware          | Computer programs and execution environments that could be used to create data, have created data, or are being packaged and described.                                                                                                                                                                  |
| Others                       | Other properties not in the above categories. Note that if you find a {{< glossary_link display="property" id="property" >}} in `Other` that should be in one of the above groups or have other suggestions, please raise an issue on [GitHub](https://github.com/Language-Research-Technology/crate-o). |

Hovering over each property group will display tooltips related to that group.

<br>

## Entity Properties

<br>

In the middle panel, the Entity Properties for the property group you have selected are shown.

<br>

{{< image Src="/user-guides/crate-o/entity_properties.jpeg" Alt="Crate-O Entity Properties" Desc="Crate-O Entity Properties" Title="Crate-O Entity Properties" Ref="LDaCA" >}}

<br>

The exclamation mark icons to the left indicate that an entity is a required {{< glossary_link display="property" id="property" >}} for that {{< glossary_link display="mode" id="mode" >}}, and saving an {{< glossary_link display="RO-Crate" id="ro-crate" >}} without completing one of these sections will result in a warning message. Below each field is a tooltip providing further detail on the given entity.

Each entity field has a 'delete' icon beside it, however, these are only functional (and appear in red) for entities that can be removed, i.e. required properties cannot be deleted, but you can edit these.

There are several compulsory {{< glossary_link display="metadata" id="metadata" >}} fields required for each {{< glossary_link display="collection" id="collection" >}}:

| Property Group               | Metadata           | Description                                                                                                                                                                                                 | Additional Notes                                                                                                                                                                                                                                                                                               |
| ---------------------------- | ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| About                        | @id                | Persistent, managed unique ID in URL format (if available), for example, a {{< glossary_link display="DOI" id="doi" >}} for a collection or an ORCID, personal home page URL or email address for a person. | Existing persistent identifiers for persons and organisations can be found at:<br><ul><li>[Open Researcher and Contributor ID (ORCID)](https://orcid.org/)<li>[Research Organization Registry (ROR)](https://ror.org/)<li>[Trove](https://trove.nla.gov.au/) (use the People & Organisations search category). |
| About                        | @type              | The type of the entity.                                                                                                                                                                                     | Both `Dataset` and `RepositoryCollection` are required for top-level collections in the Language Data Commons (LDAC) Mode, as these determine the available properties.                                                                                                                                        |
| About                        | Name               | The name of this collection.                                                                                                                                                                                |
| About                        | Description        | An abstract of the collection. Include as much detail as possible about the motivation and use of the dataset, including things that we do not yet have properties for.                                     | May include but not limited to the following:<br><ul><li>a brief description of participants (age range, gender, particular characteristics as a group, etc.)<li>purpose of the collection<li>research value of the dataset.                                                                                   |
| About                        | License            | Link to a document that describes the rights and obligations for users of this collection record.                                                                                                           | This does not necessarily cover the license terms that may apply to Objects in the collection which may have specific {{< glossary_link display="licensing" id="licensing" >}}. Licensing on specific objects overrides the license attached to a collection record.                                           |
| Related People, Orgs & Works | Author             | The person or organisation responsible for creating this collection of data.                                                                                                                                | The options `Person` and `Organization` are available. If `Organization` is selected, the lookup pulls from the [Research Organization Registry (ROR)](https://ror.org/), or a new organisation can be created if not present.                                                                                 |
| Related People, Orgs & Works | Publisher          | The organisation responsible for releasing this dataset.                                                                                                                                                    | The lookup pulls from the [Research Organization Registry (ROR)](https://ror.org/), or a new organisation can be created if not present.                                                                                                                                                                       |
| Others                       | Rights Holder      | A person or organisation owning or managing rights over the resource.                                                                                                                                       | The options `Text`, `Person` and `Organization` are available. If `Organization` is selected, the lookup pulls from the [Research Organization Registry (ROR)](https://ror.org/), or a new organisation can be created if not present.                                                                         |
| Others                       | Accountable Person | The person or organisation who is the {{< glossary_link display="data steward" id="data-steward" >}} for this resource.                                                                                     | The options `Person` and `Organization` are available. If `Organization` is selected, the lookup pulls from the [Research Organization Registry (ROR)](https://ror.org/), or a new organisation can be created if not present.                                                                                 |
| Others                       | In Language        | The language(s) of the materials (including PrimaryMaterials, DerivedMaterials and Annotations) in this collection.                                                                                         | The lookup pulls from [AustLang](https://collection.aiatsis.gov.au/austlang/search), [Glottolog](https://glottolog.org/) and [Ethnologue](https://www.ethnologue.com/). Both AustLang names and codes can be used. If a language is not present, it can be created.                                            |
| Others                       | Subject Language   | The languages that the materials in the collection are about (not the language that it is in). This is particularly used on Annotations that may talk about PrimaryMaterials or DerivedMaterials.           | The lookup pulls from [AustLang](https://collection.aiatsis.gov.au/austlang/search), [Glottolog](https://glottolog.org/) and [Ethnologue](https://www.ethnologue.com/). Both AustLang names and codes can be used. If a language is not present, it can be created.                                            |

To browse all the metadata entities associated with the {{< glossary_link display="LDAC" id="ldac" >}} Mode, see [Metadata for Language Data](https://ldaca.gitbook.io/metadata-for-language-data/).

<br>

## Entity Navigator

<br>

On the Entity Navigator panel, there are some further options related to navigating and creating {{< glossary_link display="metadata" id="metadata" >}} entities.

<br>

{{< image Src="/user-guides/crate-o/entity_navigator.png" Alt="Crate-O Entity Navigator" Desc="Crate-O Entity Navigator" Title="Crate-O Entity Navigator" Ref="LDaCA" >}}

<br>

- **_Create New Entity_**: Create a new metadata entity, such as a {{< glossary_link display="provenance" id="provenance" >}} action. For example, CreateAction describes how a work is created with more precision than a {{< glossary_link display="property" id="property" >}} like `author`.
- **_All Entities_**: Select to view all metadata entities associated with your {{< glossary_link display="collection" id="collection" >}}.
- **_Unlinked Entities_**: Select to view all metadata entities that are not currently referenced by properties on the Root dataset or other entities, for example, an entity of type Person which is not referenced using an author property.

Below this, there is pagination which allows you to navigate through results, with 10 results appearing per page.

<br>
