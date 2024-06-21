---
title: "Basic Navigation"
date: 2024-01-29T11:45:30+11:00
draft: false
description: "A guide to navigating the various sections of the portal interface."
---

<br>

> This user guide uses 'portal' to refer to the interface across all of the available {{< glossary_link display="Oni" id="oni" >}} portals (see [Available Portals](/resources/user-guides/portal/available-portals/) for more details).

<br>

##### [Data and Page Structure](#data-and-page-structure)
##### [Home Page](#home-page) ([Top Menu](#top-menu), [Left Panel](#left-panel), [Main Panel](#main-panel))
##### [Collection Page](#collection-page)
##### [Object Page](#object-page)
##### [File Page](#file-page)

<br>

## Data and Page Structure

Both the data and the webpages in the portal are structured in a heirarchy: Collections contain Objects and Objects contain Files. <!--TODO how do notebooks fit in to this?-->

Level | Description
--- | ---
Collection | A group of related Objects. Examples of collections include corpora, and sub-corpora, as well as aggregations of cultural objects such as {{< glossary_link display="PARADISEC" id="paradisec" >}} collections, which bring together items collected in a region or a session with consultants.
↓ | 
Object | A single resource or a group of tightly related resources that record a communicative event; for example, a dialogue or session in a speech study, a work (document) in a written corpus.
↓ |
File | A container for data (in the form of bits and bytes). Files can store data in different formats; for example, a single Object could have an audio file as well as a text file containing a transcription of the audio.

<br>

## Home Page

There are three main sections of the Home Page in the portal: the top menu bar, the left panel and the main panel. Each of these is discussed below.

<br>

{{< image Src="/user-guides/portal/homePage_3sections.png" Alt="Home Page: Top Menu, Left Panel and Main Panel sections" Desc="Home Page: Top Menu, Left Panel and Main Panel sections" Title="Home Page: Top Menu, Left Panel and Main Panel sections" Ref="LDaCA" >}}

<br>

### Top Menu

<br>

{{< image Src="/user-guides/portal/top-menu.png" Alt="Home Page: Top Menu" Desc="Home Page: Top Menu" Title="Home Page: Top Menu" Ref="LDaCA" >}}

<br>

The top menu of the home page allows you to access some of the main features of the portal:
- ___LDaCA logo___: Returns you to the home page from anywhere in the portal. <!--TODO is the word home next to it redundant?-->
- ___Collections___: Filters the results section of the main panel so that only collections are shown (excluding objects, files and notebooks). A search performed while in this view will only search the text in the _Name_ and _Description_ fields at the collection level.
- ___Browse___: Resets your results to the default settings.
- ___Login___: Takes you to the CILogon page where you can login to apply for access to collections or view your current access. See [Login](/resources/user-guides/portal/login/) for more details.
- ___Help___: Provides more general information about the infrastructure the portal was built with, as well as the {{< glossary_link display="Oni" id="oni" >}} {{< glossary_link display="API" id="api" >}} functionalities. It also links back to this user guide for easy reference.

<br>

### Left Panel

<br>

{{< image Src="/user-guides/portal/left-panel.png" Alt="Home Page: Left Panel" Desc="Home Page: Left Panel" Title="Home Page: Left Panel" Ref="LDaCA" >}}

<br>

The left panel of the portal home page allows you to refine your data query through the use of a search field and filters. Searching allows you to view records which include specific information, while filtering allows you to view records which share values for {{< glossary_link display="metadata" id="metadata" >}} categories. Hovering over the information icon ![Information Icon](/user-guides/portal/information.png) next to each filter will display tooltips related to that filter. See [Search](/resources/user-guides/portal/search/) and [Filters](/resources/user-guides/portal/filters/) for more details on how to use the search and filter functions.

<br>

### Main Panel

<br>

{{< image Src="/user-guides/portal/main-panel.png" Alt="Home Page: Main Panel" Desc="Home Page: Main Panel" Title="Home Page: Main Panel" Ref="LDaCA" >}}

<br>

The main panel on the right of the home page allows you to view the top-level descriptions of collections, objects, files and notebooks in the portal. The top row shows the total number of Index entries or items; this total will reduce as you apply filters and search queries. Below this is the option to ___Reset Search___, clearing all (current) filters and searches. The ___Sort by___ and ___Order by___ dropdown boxes can also be configured; see [Sort and Order](/resources/user-guides/portal/sort-and-order/) to learn more about their usage. Below this, there is a row of buttons which allow you to navigate through pages of results, with 10 results appearing on each page.

<br>

The results in the main panel contain a set of top-level descriptions:
- __Name__: The name of the collection, object, file or notebook.
- __Type__: The type of object a record describes, i.e. a collection, object or file. <!--TODO should this be updated to record type so it's in line with the filter name?-->
- __Language__: The language(s) of the materials (including PrimaryMaterials, DerivedMaterials and Annotations) in this item.
- __Description__: An abstract of the collection, object, file or notebook.
- __Members__: The number of items (objects, files, etc.) within the given collection. <!--TODO not sure if this is the actual name for this section-->
- __Member of__: The collection that an object, file or notebook is a part of.

> Note that top-level descriptions will not appear in cases where they aren't provided for that item, e.g. usually _Description_ is not present for objects and files, and _Member of_ does not appear for top-level collections.

<br>

### Item Icons

The icons next to each item show you some important information about that item (Access, Communication Mode and File Format). You can hover over a icon to see more detail.

Icon | Category | Icon Tooltip
--- | --- | ---
![Public Icon](/user-guides/portal/public.svg) | Access | You can access this data immediately. By doing so, you accept the license terms specified on the record.
![Login Icon](/user-guides/portal/login.svg) | Access | You can access this data after logging in. You may also have to agree to license terms in an automatic process.
![Login Plus Icon](/user-guides/portal/loginplus.svg) | Access | There are restrictions on access to this data. Log in to get further information.
![SpokenLanguage Icon](/user-guides/portal/spokenlanguage.svg) | Communication Mode | SpokenLanguage
![WrittenLanguage Icon](/user-guides/portal/writtenlanguage.svg) | Communication Mode | WrittenLanguage
![SignedLanguage Icon](/user-guides/portal/signedlanguage.svg) | Communication Mode | SignedLanguage
![TXT Icon](/user-guides/portal/file-lines-solid.svg) | File Format | text/plain
![Word Icon](/user-guides/portal/file-word-solid.svg) | File Format | application/msword
![Code Icon](/user-guides/portal/file-code-solid.svg) | File Format | application/tei+xml<br>application/vnd.openxmlformats-officedocument.wordprocessingml.document
![Audio Icon](/user-guides/portal/file-audio-solid.svg) | File Format | audio/mpeg<br>audio/x-wav
![Video Icon](/user-guides/portal/file-video-solid.svg) | File Format | application/mp4
![CSV Icon](/user-guides/portal/file-csv-solid.svg) | File Format | text/csv
![PDF Icon](/user-guides/portal/file-pdf-solid.svg) | File Format | application/pdf

<br>

## Collection Page

<br>

Clicking on one of the collections from the main page results will take you to the Collection page for that item.

<br>

{{< image Src="/user-guides/portal/collection-page.png" Alt="Collection Page: Braided Channels Example" Desc="Collection Page: Braided Channels Example" Title="Collection Page: Braided Channels Example" Ref="LDaCA" >}}

<br>

The main panel of the Collection page lists the main details and {{< glossary_link display="metadata" id="metadata" >}} associated with the collection. Clicking on the question mark icon ![Question Mark Icon](/user-guides/portal/question.png) or information icon ![Information Icon](/user-guides/portal/information.png) next to each heading will display tooltips related to that item.

Below the main description and {{< glossary_link display="metadata" id="metadata" >}} is the number of objects present in the collection. The objects are then listed below, with buttons allowing navigation by page if there are more than 10 objects in the collection.

The right panel has the following sections:
- __Access__: Defines the license and {{< glossary_link display="access conditions" id="access-conditions" >}} for the current collection. <!--TODO (together with a click-through link to the full license - this isn't the case currently).-->
- __Content__: Lists some of the main features of the current collection including _Language_, _Linguistic Genre_, _Communication Mode_, _File Formats_ and _Data licenses for access_.
- __Retrieve Metadata__: View or download the {{< glossary_link display="metadata" id="metadata" >}} associated with the current collection, as well as the license and {{< glossary_link display="access conditions" id="access-conditions" >}} for this metadata.
- __Notebooks__: Lists any notebooks associated with the current collection.

<br>

## Object Page

<br>

Clicking on one of the objects or files from either the main page results or from a Collection page will take you to the Object page for that item.

<br>

{{< image Src="/user-guides/portal/object-page.png" Alt="Object Page: A Corpus of Oz Early English Example" Desc="Object Page: A Corpus of Oz Early English Example" Title="Object Page: A Corpus of Oz Early English Example" Ref="LDaCA" >}}

<br>

The left panel of the Object page lists the main details and {{< glossary_link display="metadata" id="metadata" >}} associated with the object. Clicking on the question mark icon ![Question Mark Icon](/user-guides/portal/question.png) or information icon ![Information Icon](/user-guides/portal/information.png) next to each heading will display tooltips related to that item.

The right panel has the following sections:
- __Access__: Defines the license and {{< glossary_link display="access conditions" id="access-conditions" >}} for the current object, together with a click-through link to the full license.
- __Member Of__: Lists the collection that the current object is a part of.
- __Other Objects in this Collection__: Lists the other objects that are in the same collection as the current object.

The end of the Object page provides details about the files that form part of the current object. In the example above, the object _Text 1-028 1791 Convict_ has two associated files: a plain text version and a text version including {{< glossary_link display="metadata" id="metadata" >}} codes, the details of which can be viewed using the dropdown arrow to the right of the file name. A preview of the file is available (provided that the {{< glossary_link display="access conditions" id="access-conditions" >}} permit this), and there are two options: ___View File___ to display the full file in the web browser, and ___Download File___ to save a copy of the file to your local system.

<br>

## File Page

<br>

Clicking ___View File___ on one of the files in an Object page will take you the File page for that item.

<br>

{{< image Src="/user-guides/portal/file-page.png" Alt="File Page: Braided Channels Example" Desc="File Page: Braided Channels Example" Title="File Page: Braided Channels Example" Ref="LDaCA" >}}

<br>

From this page, you can view the whole file or download it with the option at the end of the page.

<br>