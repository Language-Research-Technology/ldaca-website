---
title: "Metadata"
date: 2023-11-13T15:49:31+11:00
draft: false
description: "Information about the approach to metadata being taken by LDaCA."
---

<br>

Metadata is often defined as 'data about data'. High-quality metadata is important in making data **FAIR**:

- **Findable**: Metadata is the starting point for searching data collections. For example, if we want to find data in a particular language, this will only be possible for data that has a language recorded in its metadata. (Tracking languages is in itself problematic, see [below](#identifying-codes-for-languages).)
- **Accessible**: Access conditions that apply to data should be part of the associated metadata.
- **Interoperable**: Information about the format of data and whether it requires specific software to be usable should be part of the associated metadata.
- **Reusable**: All of the aspects of metadata mentioned above contribute to making data reusable. The more we know about some data, the easier it is to know whether it will be useful to us or not.

### RO-Crate Profiles

RO-Crates in general have basic metadata requirements, but it is possible to specify a **profile** for crates for specific purposes. LDaCA is developing such a profile for our data; we are basing this largely on previous work in the area. An important aspect of the RO-Crate approach is that it uses the principles of [Linked Open Data](https://en.wikipedia.org/wiki/Linked_data#Linked_open_data). This means that terms used in our metadata will (whenever possible) link to an openly available definition. In developing the profile, we are drawing on two existing attempts to provide vocabularies for describing language data.

<br>

### Open Language Archives Community ([OLAC](http://www.language-archives.org/)) {#olac}

OLAC is an international partnership of institutions and individuals; one of their activities is developing consensus on best current practice for the digital archiving of language resources and this includes making recommendations for metadata. The OLAC metadata scheme is based on [Dublin Core](https://www.dublincore.org/) (DC), a widely used general metadata schema. OLAC have suggested refinements and extensions of the DC base which make it more useful for describing language resources.

<br>

### Component Metadata Infrastructure ([CMDI](https://www.clarin.eu/content/component-metadata))

CMDI was developed within the [CLARIN](https://www.clarin.eu) project. It draws on the earlier ISLE Metadata Initiative ([IMDI](https://en.wikipedia.org/wiki/IMDI)), but where IMDI attempted to specify a comprehensive scheme for (multimodal) language data, CMDI adopts a more flexible approach where components are assembled into reusable profiles. This is very similar to the RO-Crate approach described above but with an important difference: the components of a CMDI profile are all drawn from a central registry, whereas components of an RO-Crate profile come from any linkable location.

<br>

The metadata schema being developed as part of the LDaCA RO-Crate profile can be viewed as an [ontology](https://github.com/Language-Research-Technology/language-data-commons-vocabs/blob/master/ontology.md). We are also developing a more fully documented version as a [Gitbook](https://www.gitbook.com/), [Metadata for Language Data](https://ldaca.gitbook.io/metadata-for-language-data/).

# Identifying Codes for Languages

One very important piece of metadata for language data is a description of the language or languages that the data represent. This is not a simple problem because the relationship between languages and names for them is not one-to-one. Some languages have more than one name: for example, _Farsi_ and _Persian_ can both be used to refer to the same language. Some names refer to more than one language: for example, there are languages called _Buru_ used in Nigeria and in Indonesia. To avoid the confusion that can arise from such situations, various systems have been developed to assign unique identifiers to languages. None of these systems gives a comprehensive list of languages and all such systems struggle with another problem, the distinction between separate languages and dialects of one language, as can be seen in the case study below. LDaCA includes identifiers from each of the three systems below where they are available and relevant.

<br>

### [ISO-639](https://iso639-3.sil.org/) {#iso-639}

This system is recognised as a standard by the International Standards Organisation. An earlier version of this system used two-letter codes to identify languages; more recent versions use three-letter codes (referred to as ISO 639-3). These codes are used by [Ethnologue](https://www.ethnologue.com/), which is a catalogue of the languages of the world, and in many other contexts. The ISO 639-3 code for French is **fra**, and Warlpiri is **wbp**.

<br>

### [Glottolog](https://glottolog.org/) {#glottolog}

Glottolog is an alternative catalogue of the world's languages, language families and dialects - Glottolog uses the term _languoid_ to cover all of these. Each languoid is assigned a unique identifier consisting of four alphanumeric characters and four digits. For example, (standard) French has the code **stan1290**, and Warlpiri is **warl1254**.

<br>

### [Austlang](https://collection.aiatsis.gov.au/austlang/about)

AustLang provides a controlled vocabulary of persistent identifiers, a thesaurus of languages and peoples, and information about Aboriginal and Torres Strait Islander languages which has been assembled from referenced sources. Alphanumeric codes are used as persistent identifiers, while associated text strings are changeable and can reflect community preferences (including alternative names and spellings). In Austlang, Warlpiri has two codes: **C15** for the language in general, and **C15.1** for the variety named as Wakirti Warlpiri. (French is not covered by Austlang.)

<br>

### Case study - Kala Lagaw Ya

Kala Lagaw Ya is a language spoken in the Torres Strait Islands. The language has several dialects or varieties and the table below shows how the different code schemes deal with this.

<br>

{{< raw >}}

<table>
<tr><td><b>Name</b></td><td><b>ISO 639</b></td><td><b>Glottolog</b></td><td><b>Austlang</b></td><td><b>Notes</b></td></tr>
<tr><td>Kala Lagaw Ya</td><td>mwp</td><td>kala1377</td><td>Y1</td><td>Austlang: Marked with symbol ^ which indicates that the name is used to refer to a language and a dialect of the language.</td></tr>
<tr><td>Kalaw Kawaw Ya</td><td></td><td>kala1378</td><td>Y2</td><td>Ethnologue: Kalaw Kawaw is a dialect.</td></tr>
<tr><td>Kawrareg</td><td></td><td>kawr1234</td><td></td><td></td></tr>
<tr><td>Kulkalgau Ya</td><td></td><td>kulk1234</td><td>Y4</td><td></td></tr>
<tr><td>Mabuyag</td><td></td><td>mabu1234</td><td></td><td>Ethnologue: Mabuiag is an alternate name.</td></tr>
<tr><td>Kawalgaw Ya</td><td></td><td></td><td>Y5</td><td>Austlang: Kaurareg is an alternative name (probably the same as Glottolog kawr1234).</td></tr>
</table>

{{< /raw >}}

<br>
