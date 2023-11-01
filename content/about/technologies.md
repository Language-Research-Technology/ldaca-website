---
title: "Technologies"
date: 2022-02-15T17:13:28+10:00
draft: false
description: "Information about the technologies being used in LDaCA."
---
LDaCA is basing its data storage on the two technologies described below. The overall approach is informed by the [Arkisto](https://arkisto-platform.github.io/) platform, taking the view that research data has interest and value that extends beyond funding cycles and its long term preservation and accessibility must continue to be managed. [This presentation](https://ptsefton.com/2022/02/18/hass_rdc_tech_advisory/index.html) gives further details of the technical architecture.

## Research Object Crates ([RO-Crate](https://www.researchobject.org/ro-crate/))

A Research Object ([RO](https://www.researchobject.org/)) is a structured archive of all the items that contributed to the research outcome, including their identifiers, provenance, relations and annotations. [RO-Crate](https://www.researchobject.org/ro-crate/) is a lightweight approach to packaging research data with their metadata. It is based on [schema.org](https://schema.org/) annotations in [JSON-LD](https://json-ld.org/), and aims to make best-practice in formal metadata description accessible and practical for use in a wide variety of situations. While RO-Crates can be considered general-purpose containers of arbitrary data and open-ended metadata, in practical use within a particular domain, application or framework, it is beneficial to further constrain RO-Crate to a specific profile: a set of conventions, types and properties that one minimally can require and expect to be present in that subset of RO-Crates. LDaCA is developing such a profile to be used for language data.


## Oxford Common File Layout ([OCFL](https://ocfl.io/))

OCFL is a specification for laying out digital collections on file or object storage. It is designed with long-term preservation principles in mind and does not rely on specialised software. Amongst the benefits of using OCFL with RO-Crate objects are:
- completeness: a repository can be re-indexed from the files it stores
- versioning: repositories can make changes to objects and still allow their history to persist
<br />
<br />

<br />
<br />

Back to [Background](/background/information/)
