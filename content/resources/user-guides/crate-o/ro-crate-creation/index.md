---
title: "RO-Crate Creation"
date: 2022-03-27T16:01:02+10:00
draft: false
description: "A step-by-step guide to creating an RO-Crate metadata file."
weight: 3
---

<br>

> This guide takes you through the steps to create an {{< glossary_link display="RO-Crate" id="ro-crate" >}} {{< glossary_link display="metadata" id="metadata" >}} file, using a top-level collection for language data as an example. To view more details and screenshots of each section discussed, select the click-through links throughout the page.

<br>

##### [Open Directory](#open-directory)

##### [Select Mode](#select-mode)

##### [Add Entity Metadata](#add-entity-metadata)

##### [Save RO-Crate](#save-ro-crate)

<br>

## Open Directory

- Open [Crate-O](https://language-research-technology.github.io/crate-o/#/) in a compatible browser.
- In the [Main Menu](/resources/user-guides/crate-o/basic-navigation/#main-menu), select **_Open Directory_**.
- Navigate to a folder where the {{< glossary_link display="RO-Crate" id="ro-crate" >}} will be saved, or create a new one, then confirm your selection.
- For the pop-up message asking _Let site view files?_, select **_View Files_**.
- Your current working directory will be displayed in the _Selected Directory_ section next to the [Mode Selector](/resources/user-guides/crate-o/basic-navigation/#mode-selector).

<br>

{{< image Src="/user-guides/crate-o/open_directory.png" Alt="Crate-O: Open Directory" Desc="Crate-O: Open Directory" Title="Crate-O: Open Directory" Ref="LDaCA" >}}

<br>

## Select Mode

- In the [Mode Selector](/resources/user-guides/crate-o/basic-navigation/#mode-selector), the **_Mode_** dropdown shows the current {{< glossary_link display="mode" id="mode" >}} that is being displayed, i.e. the {{< glossary_link display="metadata" id="metadata" >}} framework associated with your {{< glossary_link display="collection" id="collection" >}}.
- Change the mode from the default _Simple RO-Crate Dataset_ to _Language Data Commons Comprehensive Collection_.

<br>

{{< image Src="/user-guides/crate-o/select_mode.png" Alt="Crate-O: Select Mode" Desc="Crate-O: Select Mode" Title="Crate-O: Select Mode" Ref="LDaCA" >}}

<br>

## Load Files

Selecting the ___Load Files___ button in the main menu will load all files from your selected working directory into the RO-Crate. These will then appear under the ___All Entities___ section on the left-hand panel.

<br>

## Add Entity Metadata

Crate-O allows two options for entering your metadata to an RO-Crate:
- Manual Entry: use the Crate-O interface to enter metadata using the availale fields and navigation.
- Append Metadata from Spreadsheet: use a Crate-O compatible spreadsheet to bulk add metadata to the Crate-O interface.

<br>

### Manual Entry of Metadata in Crate-O

- The [Current Entity](/resources/user-guides/crate-o/basic-navigation/#current-entity) section shows your location in the current {{< glossary_link display="RO-Crate" id="ro-crate" >}}.
- The [Property Groups](/resources/user-guides/crate-o/basic-navigation/#property-groups) panel allows you to navigate to the various groups associated with your RO-Crate.
- The [Entity Properties](/resources/user-guides/crate-o/basic-navigation/#entity-properties) panel is where you can add data about your {{< glossary_link display="collection" id="collection" >}}.
- For blank RO-Crates, the following missing property messages will appear by default. Clicking the blue **_Add_** buttons will automatically add these missing items to your RO-Crate.

<br>

{{< image Src="/user-guides/crate-o/missing_properties.jpeg" Alt="Crate-O: Missing Properties" Desc="Crate-O: Missing Properties" Title="Crate-O: Missing Properties" Ref="LDaCA" >}}

<br>

- Enter the entity properties you have for your collection. Add as little or as much information about your collection as you like, as this can be saved and worked on further later. To browse all the {{< glossary_link display="metadata" id="metadata" >}} entities associated with the Language Data Commons (LDAC) Mode, see [Metadata for Language Data](https://ldaca.gitbook.io/metadata-for-language-data).

<br>

{{< image Src="/user-guides/crate-o/add_entity_metadata.png" Alt="Crate-O: Add Entity Metadata" Desc="Crate-O: Add Entity Metadata" Title="Crate-O: Add Entity Metadata" Ref="LDaCA" >}}

<br>

### Append Metadata from Spreadsheet

If you have a spreadsheet in a compatible format that you want to add to your {{< glossary_link display="collection" id="collection" >}} to assist with {{< glossary_link display="metadata" id="metadata" >}} description, or you want to create a new RO-Crate only using spreadsheet data, select **_Bulk Add_** in the [Main Menu](/resources/user-guides/crate-o/basic-navigation/#main-menu) and load the spreadsheet. This will append it to your existing or new {{< glossary_link display="RO-Crate" id="ro-crate" >}}.

For more guidance on the spreadsheet requirements and a template, see [Convert Spreadsheet](/resources/user-guides/crate-o/convert-spreadsheet). If using the template, use the [mode](#select-mode) _Language Data Commons Comprehensive Collection_ in Crate-O.

> Note that this option currently only has functionality to add new data, and cannot overwrite or edit existing data in your RO-Crate. **_Bulk Add_** also only reads from the spreadsheet and does not write to it.

<br>

## Save RO-Crate

- In the [Main Menu](/resources/user-guides/crate-o/basic-navigation/#main-menu), select **_Save_**.
- For the pop-up message asking _Save changes to [Selected Directory]?_, select **_Save changes_**.

<br>

{{< image Src="/user-guides/crate-o/save_ro_crate.png" Alt="Crate-O: Save RO-Crate" Desc="Crate-O: Save RO-Crate" Title="Crate-O: Save RO-Crate" Ref="LDaCA" >}}

<br>

- Your {{< glossary_link display="RO-Crate" id="ro-crate" >}} is now successfully saved in your working directory, with two files:
  - _ro-crate-metadata.json_: The saved RO-Crate in {{< glossary_link display="JSON" id="json" >}} format.
  - _ro-crate-preview.html_: An HTML file that can be viewed on a web browser and shows the contents of your RO-Crate.

<br>

| ro-crate-metadata.json                                                                                                                                                    | ro-crate-preview.html                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{< image Src="/user-guides/crate-o/ro_crate_metadata_json.png" Alt="ro-crate-metadata.json" Desc="ro-crate-metadata.json" Title="ro-crate-metadata.json" Ref="LDaCA" >}} | {{< image Src="/user-guides/crate-o/ro_crate_preview_html.jpeg" Alt="ro-crate-preview.html" Desc="ro-crate-preview.html" Title="ro-crate-preview.html" Ref="LDaCA" >}} |

<br>

### Required Properties

After saving, if there are required properties missing from your {{< glossary_link display="RO-Crate" id="ro-crate" >}}, the section _Saved with warnings_ will appear. You can select the dropdown on this message to view the missing required properties. Clicking on one of these warnings will take you to the relevant {{< glossary_link display="property" id="property" >}} group. If you choose to edit any of these sections, select **_Save_** again to ensure your most recent changes are not lost.

<br>

{{< image Src="/user-guides/crate-o/saved_with_warnings.jpeg" Alt="Crate-O: Saved with Warnings" Desc="Crate-O: Saved with Warnings" Title="Crate-O: Saved with Warnings" Ref="LDaCA" >}}

<br>
