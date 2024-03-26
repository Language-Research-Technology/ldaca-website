---
title: "Technologies"
date: 2022-02-15T17:13:28+10:00
draft: false
description: "Information about the technologies being used in LDaCA."
---

<br>

LDaCA is basing its data storage on [Research Object Crates](#research-object-crates-ro-cratehttpswwwresearchobjectorgro-crate) and the [Oxford Common File Layout](#oxford-common-file-layout-ocflhttpsocflio), which are described below. The overall approach is informed by the [Arkisto](https://arkisto-platform.github.io/) platform, taking the view that research data has interest and value that extends beyond funding cycles and its long-term preservation and accessibility must continue to be managed. [This presentation](https://ptsefton.com/2022/02/18/hass_rdc_tech_advisory/index.html) gives further details of the technical architecture.

<br>

## Research Object Crates ([RO-Crate](https://www.researchobject.org/ro-crate/))

A Research Object ([RO](https://www.researchobject.org/)) is a structured archive of all the items that contributed to the research outcome, including their identifiers, {{< glossary_link display="provenance" id="provenance" >}}, relations and annotations. {{< glossary_link display="RO-Crate" id="ro-crate" >}} is a lightweight approach to packaging research data with their metadata. It is based on [schema.org](https://schema.org/) annotations in [JSON-LD](https://json-ld.org/), and aims to make best-practice in formal metadata description accessible and practical for use in a wide variety of situations. While {{< glossary_link display="RO-Crates" id="ro-crate" >}} can be considered general-purpose containers of arbitrary data and open-ended metadata, in practical use within a particular domain, application or framework, it is beneficial to further constrain {{< glossary_link display="RO-Crate" id="ro-crate" >}} to a specific profile: a set of conventions, types and properties that one minimally can require and expect to be present in that subset of {{< glossary_link display="RO-Crates" id="ro-crate" >}}. LDaCA is developing such a profile to be used for language data.

<br>

## Oxford Common File Layout ([OCFL](https://ocfl.io/))

{{< glossary_link display="OCFL" id="ocfl" >}} is a specification for laying out digital collections on file or object storage. It is designed with long-term preservation principles in mind and does not rely on specialised software. Amongst the benefits of using {{< glossary_link display="OCFL" id="ocfl" >}} with {{< glossary_link display="RO-Crate" id="ro-crate" >}} objects are:
- completeness: a repository can be re-indexed from the files it stores
- versioning: repositories can make changes to objects and still allow their history to persist

<br>