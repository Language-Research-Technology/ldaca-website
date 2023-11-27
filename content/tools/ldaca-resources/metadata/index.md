---
title: "Metadata"
date: 2023-11-13T15:49:31+11:00
draft: false
description: "Information about the approach to metadata being taken by LDaCA."
---

<br>

Metadata is often defined as 'data about data'. High-quality metadata is important in making data **FAIR**:

- **Findable**: metadata is the starting point for searching data collections. For example, if we want to find data in a particular language, this will only be possible for data that has a language recorded in its metadata. (Tracking languages is in itself problematic, see [example](/tools/ldaca-resources/metadata/language-codes/).)
- **Accessible**: access conditions that apply to data should be part of the associated metadata.
- **Interoperable**: information about the format of data and whether it requires specific software to be usable should be part of the associated metadata.
- **Reusable**: all of the aspects of metadata mentioned above contribute to making data reusable. The more we know about some data, the easier it is to know whether it will be useful to us or not.

RO-Crates in general have basic metadata requirements, but it is possible to specify a **profile** for crates for specific purposes. LDaCA is developing such a profile for our data; we are basing this largely on previous work in the area. An important aspect of the RO-Crate approach is that it uses the principles of [Linked Open Data](https://en.wikipedia.org/wiki/Linked_data#Linked_open_data). This means that terms used in our metadata will (whenever possible) link to an openly available definition. In developing the profile, we are drawing on two existing attempts to provide vocabularies for describing language data.

<br>

### [OLAC](http://www.language-archives.org/) {#olac}

The Open Language Archives Community is an international partnership of institutions and individuals; one of their activities is developing consensus on best current practice for the digital archiving of language resources and this includes making recommendations for metadata. The OLAC metadata scheme is based on [Dublin Core](https://www.dublincore.org/) (DC), a widely used general metadata schema. OLAC have suggested refinements and extensions of the DC base which make it more useful for describing language resources.

<br>

### [CMDI](https://www.clarin.eu/content/component-metadata)

The Component Metadata Infrastructure was developed within the [CLARIN](https://www.clarin.eu) project. It draws on the earlier ISLE Metadata Initiative ([IMDI](https://en.wikipedia.org/wiki/IMDI)), but where IMDI attempted to specify a comprehensive scheme for (multimodal) language data, CMDI adopts a more flexible approach where components are assembled into reusable profiles. This is very similar to the RO-Crate approach described above but with an important difference: the components of a CMDI profile are all drawn from a central registry, whereas components of an RO-Crate profile come from any linkable location.

<br>

LDaCA's vocabulary for describing language data is available in our [Github repository](https://github.com/Language-Research-Technology/language-data-commons-vocabs/blob/master/ontology.md). A [presentation](https://ldaca.gitbook.io/metadata-for-language-data/) with more explanation and exemplification of the vocabulary is under development.

<br>

<br>
