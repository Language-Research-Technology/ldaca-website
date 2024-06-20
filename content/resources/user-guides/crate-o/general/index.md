---
title: "General Information"
date: 2024-05-22T15:43:09+10:00
draft: false
description: "A brief overview of Crate-O, RO-Crate, Schemas, Profiles and Modes."
---

<br>

##### [Crate-O Use Cases](#crate-o-use-cases)
##### [RO-Crate Collection Hierarchy](#ro-crate-collection-hierarchy)
##### [Schemas, Profiles and Modes](#schemas-profiles-and-modes)
##### [Schema.org Style Schemas (SOSSs) and RO-Crate Profiles and Modes](#schemaorg-style-schemas-sosss-and-ro-crate-profiles-and-modes)

<br>

{{< glossary_link display="Crate-O" id="crate-o" >}} is a browser-based editor that allows you to create and update [Research Object Crates](https://www.researchobject.org/ro-crate) (RO-Crates), either using the web interface or with {{< glossary_link display="metadata" id="metadata" >}} from a spreadsheet. It provides researchers with a relatively simple way to describe their data using best practice in formal metadata description.

{{< glossary_link display="RO-Crate" id="ro-crate" >}} is a way of packaging research data that stores the data together with its associated metadata and other component files, such as the {{< glossary_link display="data license" id="data-license" >}}. It is a flexible, developer-friendly approach to {{< glossary_link display="linked-data" id="linked-data" >}} description and packaging.

Currently, Crate-O works only with [Google Chrome](https://google.com/chrome) and [Microsoft Edge](https://microsoft.com/edge). We will be releasing versions that work with online resources directly, which will be compatible with other browsers (see the [Roadmap](https://github.com/Language-Research-Technology/crate-o#roadmap--backlog)).

While the current version of Crate-O is designed for editing self-contained RO-Crates (and works fine with crates containing tens of thousands of entities), our roadmap includes adding the ability to edit fragments of larger linked-data resources and to integrate with repositories, such as the {{< glossary_link display="Oni" id="oni" >}} repository, data {{< glossary_link display="API" id="api" >}} and archival repositories such as the Language Data Commons of Australia.

<br>

## Crate-O Use Cases

<br>

{{< glossary_link display="Crate-O" id="crate-o" >}} is designed to work with any of the following use cases:
- Describe {{< glossary_link display="data collections" id="data-collection" >}} and files on a user’s computer, and add contextual information about those files
- Describe abstract contextual entities, such as in a Cultural Collection or an encyclopaedia
- Annotate existing resources elsewhere on the web
- Submit a data collection to the {{< glossary_link display="LDaCA" id="ldaca" >}} Portal
- Edit a {{< glossary_link display="Schema" id="schema" >}} that contains a set of vocabulary terms, such as the [terms](https://w3id.org/ldac/terms) used by LDaCA.

<br>

## RO-Crate Collection Hierarchy

<br>

The diagram below shows the hierarchical relationship between {{< glossary_link display="collections" id="collection" >}}, {{< glossary_link display="objects" id="object" >}} and files in a corpus, together with the {{< glossary_link display="metadata" id="metadata" >}} categories which track these relationships.

<br>

{{< image Src="/user-guides/crate-o/my_corpus.png" Alt="Self-contained corpus crate with all resources" Desc="Self-contained corpus crate with all resources" Title="Self-contained corpus crate with all resources" Ref="LDaCA" >}}


<br>

The metadata is organised according to schema.org entity types.

Entity | Definition
--- | ---
Class | (rdfs: Class) is used to classify resources. {{< glossary_link display="Classes" id="class" >}} in the Language Data Commons (LDAC) schema include CollectionEvent, CollectionProtocol, DataDepositLicense, DataLicense and DataReuseLicense (see https://w3id.org/ldac/terms).
Property | (rdfs: Property) is an attribute of an instance of a Class. For example, on an entity that is an instance of Class Person the property “name” would be their name, expressed as a text string, while “affiliation” would be a property that referenced another entity, their university.
DefinedTerm | A 'word, name, acronym, phrase, etc. with a formal definition', 'often used in the context of category or subject classification.' DefinedTerms allow us to a) have accurate definitions of the values we want to give to properties, and b) group such definitions in DefinedTermSets, which can function as controlled vocabularies.

<br>

The table below shows an example of the relationship between each of these entities:

Level | Example
--- | ---
Class | Annotation
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

This diagram shows the relationship between the three main components used by {{< glossary_link display="Crate-O" id="crate-o" >}} and other {{< glossary_link display="tools" id="tools" >}} employed by LDaCA for specifying and validating {{< glossary_link display="RO-Crates" id="ro-crate" >}}. This section explains what these components are and how they relate.

<br>

{{< image Src="/user-guides/crate-o/schema-mode-profile.svg" Alt="The three main components for RO-Crate editing with Crate-O" Desc="The three main components for RO-Crate editing with Crate-O" Title="The three main components for RO-Crate editing with Crate-O" Ref="LDaCA" >}}


<br>

1. A [Schema](#soss) specifies a {{< glossary_link display="metadata" id="metadata" >}} vocabulary of {{< glossary_link display="Classes" id="class" >}} and {{< glossary_link display="Properties" id="property" >}}, based on the RO-Crate specification's use of Schema.org classes.

2. An RO-Crate {{< glossary_link display="Mode" id="mode" >}} is a set of lightweight syntactic rules for combining Schema.org Style Schema (SOSS) Classes, Properties and DefinedTerms, expressed in a {{< glossary_link display="JSON" id="json" >}} file that can be:
    - loaded into an editor such as [Crate-O](https://github.com/Language-Research-Technology/crate-o)
    - imported into another program and used for RO-Crate validation
    - used to summarise the rules for an [RO-Crate Profile](https://www.researchobject.org/ro-crate/1.2-DRAFT/profiles.html).

3. An [RO-Crate Profile](https://www.researchobject.org/ro-crate/1.2-DRAFT/profiles.html) has (at least) a document that explains how metadata entities from the {{< glossary_link display="Schema" id="schema" >}} are used for a particular purpose.

These are all inter-related, and can be developed together or separately using {{< glossary_link display="tools" id="tools" >}}.

<a name="soss"> </a>

<br>

## Schema.org Style Schemas (SOSSs) and RO-Crate Profiles and Modes 

<br>

Schema.org, which provides the basic vocabulary for {{< glossary_link display="RO-Crate" id="ro-crate" >}}, has a light-touch approach to describing what it refers to as its *schema* (with a small-s), which might also be thought of as an *ontology*. Schema.org is defined as a set of {{< glossary_link display="Classes" id="class" >}} and {{< glossary_link display="Properties" id="property" >}}, each of which has an online definition. For example, the base class [Thing](https://schema.org/Thing) or its subclass [Person](https://schema.org/Person), which has properties such as [birthDate](https://schema.org/birthDate).

<br>

__Class__: Thing → __Sub-Class__: Person → __Property__: birthDate

<br>

Schema.org specifies which Properties can occur in the `domain` of which Classes, and the `range` of Classes that are expected as values for a Property.

While Schema.org has terms for [Class](https://schema.org/Class) and [Property](https://schema.org/Property), it does not use these for defining the classes and properties in Schema.org itself (possibly as this would be circular). Rather, it uses the equivalent Classes from the `rdf:` and `rdfs:` vocabularies.

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

A SOSS is a Flattened {{< glossary_link display="JSON" id="json" >}}-LD graph, just like an RO-Crate. Some members of the RO-Crate community are beginning to define its basic {{< glossary_link display="schema" id="schema" >}} and RO-Crate {{< glossary_link display="Profiles" id="profile" >}} using the SOSS's same approach.

To make an RO-Crate {{< glossary_link display="Mode" id="mode" >}} File, we transform the flat graph of a schema into something optimised for driving an editor or a validator; it creates a list of Classes, and what properties each may have. 

<br>

{{< image Src="/user-guides/crate-o/soss-to-profile.svg" Alt="Base Mode File creation, combining the schema.org schema and RO-Crate additions using the rocsoss script" Desc="Base Mode File creation, combining the schema.org schema and RO-Crate additions using the rocsoss script" Title="Base Mode File creation, combining the schema.org schema and RO-Crate additions using the rocsoss script" Ref="LDaCA" >}}

<br>