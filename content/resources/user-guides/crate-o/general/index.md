---
title: "General"
date: 2024-05-22T15:43:09+10:00
draft: false
description: ""
---

<br>

## Crate-O

<br>

Crate-O is a browser-based editor that allows you to create and update [Research Object Crates](https://www.researchobject.org/ro-crate) (RO-Crates), either using the web interface or with metadata from a spreadsheet. It provides researchers with a relatively simple way to describe their data using best practice in formal metadata description.

RO-Crate is a way of packaging research data that stores the data together with its associated metadata and other component files, such as the data license. It is a flexible, developer-friendly approach to linked-data description and packaging.

Currently, Crate-O works only with [Google Chrome](https://google.com/chrome) and [Microsoft Edge](https://microsoft.com/edge). We will be releasing versions that work with online resources directly, which will be compatible with other browsers (see the [Roadmap](https://github.com/Language-Research-Technology/crate-o#roadmap--backlog)).

While the current version of Crate-O is designed for editing self-contained RO-Crates (and works fine with crates containing tens of thousands of entities), our roadmap includes adding the ability to edit fragments of larger linked-data resources, and to integrate with Arkisto repositories, such as the Oni repository, data API and search portal.

<br>

## Crate-O Use Cases

<br>

Crate-O is designed to work with any of the following use cases:
- Describe data collections and files on a user’s computer, and add contextual information about those files
- Describe abstract contextual entities, such as in a Cultural Collection or an encyclopaedia
- Annotate existing resources elsewhere on the web
- Submit a data collection to the LDaCA Portal
- Edit a [Schema](#soss) that contains a set of vocabulary terms, such as the [terms](https://w3id.org/ldac/terms) used by LDaCA.

<br>

## RO-Crate Collection Hierarchy

<br>

The diagram below shows the hierarchical relationship between collections, objects and files in a corpus, together with the metadata that these relationships are organised by.

<br>

![Self-contained corpus crate with all resources](/crate-o-help/my_corpus.png)

<br>

The metadata is organised according to schema.org entity types.

Entity | Definition
--- | ---
Class | (rdfs: Class) are used to classify resources. An instance of an rdfs: Class is defined using the predicate rdf: type. Classes in Language Data Commons include CollectionEvent, CollectionProtocol, DataDepositLicense, DataLicense and DataReuseLicense.
Property | (rdfs: Property) is used to add attributes to classes. Similar to how we define classes, we can define instances of properties to add attributes to statements.
DefinedTerm | A 'word, name, acronym, phrase, etc. with a formal definition', 'often used in the context of category or subject classification.' DefinedTerms allow us to a) have accurate definitions of the values we want to give to properties, and b) group such definitions in DefinedTermSets, which can function as controlled vocabularies.

<br>

The table below shows an example of the relationship between each of these entities:

Level | Example
--- | ---
Class | TODO what class is associated with this example?
↓ | ↓
Property | annotationType
↓ | ↓
Defined Term Set | AnnotationTypeTerms
↓ | ↓
Defined Terms | Gestural, Phonemic, Phonetic, Phonological, Prosodic, Semantic, Syntactic, Transcription, Translation

For more details on these and other metadata entities, see [Metadata for Language Data](https://ldaca.gitbook.io/metadata-for-language-data/).

<br>

## Schemas, Profiles and Modes

<br>

This diagram shows the relationship between the three main components used by Crate-O and other tools used by LDaCA for specifying and validating RO-Crates. This section explains what these components are and how they relate.

<br>

![The relationship between Schemas, Profiles and Modes](/crate-o-help/schema-mode-profile.svg)

<br>

1. A [Schema](#soss) specifies a metadata vocabulary of Classes and Properties, based on the RO-Crate specification's use of Schema.org classes.

2. An [RO-Crate Profile](https://www.researchobject.org/ro-crate/1.2-DRAFT/profiles.html) has (at least) a document that explains how metadata entities from the Schema are used for a particular purpose.

3. An RO-Crate Mode is a set of lightweight syntactic rules for combining Schema.org Style Schema (SOSS) Classes, Properties and DefinedTerms, expressed in a JSON file that can be:
    - loaded into an editor such as [Crate-O](https://github.com/Language-Research-Technology/crate-o)
    - imported into another program and used for RO-Crate validation
    - used to summarise the rules for an [RO-Crate Profile](https://www.researchobject.org/ro-crate/1.2-DRAFT/profiles.html).

These are all inter-related, and can be developed together or separately using [tools](#tools) which are described below.

<a name="soss"> </a>

<br>

## Schema.org Style Schemas (SOSSs) and RO-Crate Profiles and Modes 

<br>

Schema.org, which provides the basic vocabulary for [RO-Crate](https://www.researchobject.org/ro-crate/), has a light-touch approach to describing what it refers to as its *schema* (with a small-s), which might also be thought of as an *ontology*. Schema.org is defined as a set of Classes and Properties, each of which has an online definition. For example, the base class [Thing](https://schema.org/Thing) or its subclass [Person](https://schema.org/Person), which has properties such as [birthDate](https://schema.org/birthDate).

<br>

__Class__: Thing → __Sub-Class__: Person → __Property__: birthDate

<br>

Schema.org specifies which Properties can occur in the `domain` of which Classes, and the `range` of Classes that are expected as values for a Property.

While Schema.org has Class definitions for [Class](https://schema.org/Class) and [Property](https://schema.org/Property), it does not use these for defining itself; rather, it uses the equivalent Classes from the `rdf:` and `rdfs:` namespaces.

Here is the definition for Person:

```json
{
      "@id": "schema:Person",
      "@type": "rdfs:Class",
      "owl:equivalentClass": {
        "@id": "foaf:Person"
      },
      "rdfs:comment": "A person (alive, dead, undead, or fictional).",
      "rdfs:label": "Person",
      "rdfs:subClassOf": {
        "@id": "schema:Thing"
      },
      "schema:source": {
        "@id": "http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_rNews"
      }
    }
```

<br>

The Class definition does not have any information about the occurrence of properties -- that is found in a Property definition:

```json
    {
      "@id": "schema:sibling",
      "@type": "rdf:Property",
      "rdfs:comment": "A sibling of the person.",
      "rdfs:label": "sibling",
      "schema:domainIncludes": {
        "@id": "schema:Person"
      },
      "schema:rangeIncludes": {
        "@id": "schema:Person"
      }
    }
```

<br>

A SOSS is a Flattened JSON-LD graph, just like an RO-Crate. Some members of the RO-Crate community are beginning to define its basic schema and RO-Crate Profiles using the same approach.

To make an RO-Crate Mode File, we transform the flat graph of a schema into something optimised for driving an editor or a validator; it creates a list of Classes, and what properties each may have. 

<br>

![How the script rocsoss from RO-Crate Schema Tools is used to compile a base editor profile from the schema.org schema, with RO-Crate additions](/crate-o-help/soss-to-profile.svg)

<br>

LDaCA's tech team used this process to create the basic [RO-Crate Editor Profile](../profiles/base-profile.json) in this repository.

<br>