---
title: "Implementing PILARS"
description: "Implementing PILARS in LDaCA"
date: 2025-11-23
draft: false
author: "Moises Sacal Bonequi"
layout: post
image: "/news/posts/implementing-PILARS/Slide00.svg"
---

<a href="./implementing-PILARS.pdf">PDF version</a> | <a href="./implementing-PILARS.pptx">Powerpoint Version</a>


    

<section typeof='http://purl.org/ontology/bibo/Slide'>
<img src='./Slide00.svg' alt='Preserving digital language and cultural collections :: By adopting open standards and clear governance :: Sustainable stewardship protects past investments in research and infrastructure :: Addressing this problem isn’t just about technology :: Ensuring Digital Language and Cultural-Heritage Materials Remain Accessible, Usable, and Sustainably Managed Over Time ::  ::  :: Implementing PILARS :: ' title='Slide: 0' border='1'  width='85%'/> 



An adaptation of a presentation delivered at the 2025 Annual Symposium of the HASS and Indigenous Research Data Commons.

Preserving digital language and cultural-heritage materials isn’t just a technical exercise—it’s about safeguarding knowledge, identity, and history for future generations. As collections grow and as data becomes increasingly fragmented across institutions, the challenge is no longer simply storing information. It’s ensuring that community-owned knowledge remains accessible, usable, and sustainably managed over time.

At the Language Data Commons of Australia (LDaCA), we’ve been working toward this goal by adopting open standards, building clear governance mechanisms, and designing infrastructure that communities can trust and control. The result of this work is **PILARS**: the Protocols for Implementing Long-Term Archival Repository Services.




</section>



<section typeof='http://purl.org/ontology/bibo/Slide'>
<img src='./Slide01.svg' alt='The LDaCA architecture is implemented using the Protocols for Implementing Long Term Archival-Repository Services (PILARS) :: Data is portable and not locked into a particular storage system. :: Data can be stored and described in systems based on Open Specifications. :: Services such as authorised access interfaces, catalogues and search engines can be built and rebuilt from these data in a storage system using Open Source Software solutions, services and tools. :: LDaCA Architecture ::  :: ' title='Slide: 1' border='1'  width='85%'/> 



## How are we implementing our work. 

We designed the Protocols for Implementing Long-Term archival Repository Services
These are: Designed to work in low-resource environments, 

To allow communities to have agency and control over their materials. 

And prioritise sustainability, simplicity, standardisation, linked-data description and clear licensing over user interface features





</section>



<section typeof='http://purl.org/ontology/bibo/Slide'>
<img src='./Slide02.svg' alt='A framework of protocols to design sustainable archival systems. ::  :: Supports FAIR (Findable, Accessible, Interoperable, Reusable) and CARE (Collective Benefit, Authority to Control, Responsibility, Ethics) principles. :: Data Portability :: Commodity Storage :: Storage Objects :: Store documentation within storage root :: 2. Metadata &amp; Annotation :: Each object has descriptive metadata (usage rights, provenance) :: Use Linked Data, Represent high level structures :: 3. Governance :: PILARS  ::  :: PILARS Goals :: Autonomy  :: Sustainability  :: Value :: ' title='Slide: 2' border='1'  width='85%'/> 



## Why PILARS?

PILARS is our framework for designing sustainable archival systems—particularly in low-resource environments where communities need agency, autonomy, and long-term reliability.

The protocols are guided by both the FAIR (Findable, Accessible, Interoperable, Reusable) and CARE (Collective Benefit, Authority to Control, Responsibility, Ethics) principles. Together, these ensure that while data remains discoverable and reusable, the rights and authority of communities are respected and embedded in the system itself.

Our goals are simple:

Autonomy: Reduce reliance on closed, proprietary, or opaque storage systems.

Sustainability: Ensure that data remains intact and accessible decades from now.

Value: Maximise the return on investment in digital collections and research infrastructure.





</section>



<section typeof='http://purl.org/ontology/bibo/Slide'>
<img src='./Slide03.svg' alt='The Oxford Common File Layout :: 1 - Data is Portable ::  :: ' title='Slide: 3' border='1'  width='85%'/> 



## 1. Data Portability: The Foundation

PILARS insists on storing data in a way that is portable, stable, and independent of any particular platform.

We do this by using:

OCFL (Oxford Common File Layout)

A community standard that ensures digital objects are stored in a transparent, predictable, and platform-independent structure. LDaCA extends OCFL with a storage-layout specification that maps identifiers to directory structures in both filesystems and object storage.




</section>



<section typeof='http://purl.org/ontology/bibo/Slide'>
<img src='./Slide04.svg' alt='Storage Objects are deposited in a repository. In LDaCA each storage object is an RO-Crate. :: An RO-Crate is a Research Object (or RO) formed of a collection of data (a crate), a special ro-crate-metadata.json file which describes the collection and its license information. :: The ro-crate-metadata.json file is a JSON-LD metadata file at the root of an RO-Crate that describes the crate, its contents, and their relationships in a machine-readable way. :: Storage ::  :: ' title='Slide: 4' border='1'  width='85%'/> 



## RO-Crate

Every storage object we deposit is an RO-Crate—a research object composed of:

The data files themselves

A JSON-LD metadata file (ro-crate-metadata.json) that describes the content, its provenance, and licensing

An RO-Crate can represent a collection, an interview, a series, or any structured set of materials. Each file is described, linked, and licensed in machine-readable form so that tools, portals, and search engines can reconstruct meaning without custom logic.




</section>



<section typeof='http://purl.org/ontology/bibo/Slide'>
<img src='./Slide05.svg' alt='OCFL is laid out as URI IDs and mapped to directory hierarchies. :: Persistant IDs ::  :: ' title='Slide: 5' border='1'  width='85%'/> 



## Persistent Identifiers

While institutions may not always have PID systems in place, LDaCA supports temporary identifiers like ARCP until more formal identifiers (such as DOIs) are assigned. This means repositories can begin storing and organising data immediately, without waiting for institution-wide decisions.




</section>



<section typeof='http://purl.org/ontology/bibo/Slide'>
<img src='./Slide06.svg' alt='  ::   :: 2 Data is annotated ::  :: ' title='Slide: 6' border='1'  width='85%'/> 



## 2. Metadata & Annotation: Making Data Understandable

Metadata is where collections become meaningful. For LDaCA, metadata runs across several layers:

**RO-Crate Metadata Schema**, built on Schema.org

**LDaCA Metadata Schema**,  an extension for language-specific concepts

**LDaCA RO-Crate Profile**,  a document that explains how schemas are applied in practice, including both human-readable guidance and machine-readable constraints

**Validation rules** and **Crate-O Mode Files** generated from the profile to ensure every dataset meets requirements






</section>



<section typeof='http://purl.org/ontology/bibo/Slide'>
<img src='./Slide07.svg' alt='Metadata Schemas ::  :: ' title='Slide: 7' border='1'  width='85%'/> 



These are our schemas available to the public.

<http://w3id.org/ldac/profile>


<http://w3id.org/ldac/terms>





</section>



<section typeof='http://purl.org/ontology/bibo/Slide'>
<img src='./Slide08.svg' alt='Annotate ::  :: ' title='Slide: 8' border='1'  width='85%'/> 



## Tools for creating metadata

To support researchers and communities, we created Crate-O, a Vue.js-based tool that:
Provides guided metadata creation
Integrates with services like ROR for organisation lookup
Accepts spreadsheets and converts them into RO-Crates
Allows batch upload of metadata
Can run locally, in portals, or as GitHub Pages

Most of the real work of metadata creation still happens in spreadsheets—but Crate-O helps turn that into structured, validated metadata.




</section>



<section typeof='http://purl.org/ontology/bibo/Slide'>
<img src='./Slide09.svg' alt='Portals can be then indexed from the storage to make them findable :: Index ::  :: ' title='Slide: 9' border='1'  width='85%'/> 



## Findability: From Storage to Search

Once data is stored and described, it must be discoverable.
LDaCA uses:

PILARS-compliant storage

An API layer that exposes data consistently

Indexing pipelines to make data searchable across distributed services

Tools for building portals on demand—automated via Terraform—that communities can manage themselves





</section>



<section typeof='http://purl.org/ontology/bibo/Slide'>
<img src='./Slide10.svg' alt='Portal(s) ::  :: ' title='Slide: 10' border='1'  width='85%'/> 



Our main portal aggregates language datasets curated by LDaCA, while community instances provide tailored environments for managing and exploring their own collections.




</section>



<section typeof='http://purl.org/ontology/bibo/Slide'>
<img src='./Slide11.svg' alt='A distributed access control system that leverages federated authenication (AAF) independently of authorization services. :: Key features: :: License-based access control  :: Enforcement points :: Interoperable protocols ::  :: Motivation :: FAIR data principles require not just openness but controlled access in many contexts. ::  :: Traditional centralized access control solutions struggle with scalability, sustainability, cross-institutional trust, privacy, and fine-grained permissions. :: Architecture &amp; Workflow :: User requests access :: Enforcement point at repository :: Repository polls authorization server if necessary :: Decision point at authorization server :: Audit &amp; logging :: Access Control ::  :: ' title='Slide: 11' border='1'  width='85%'/> 



## Access Control: Distributed, License-Based, and Interoperable

LDaCA has implemented a distributed access-control system that separates:
Authentication (who you are)
Authorization (what you’re allowed to access)

We use federated identity systems like CILogon and eduGAIN, and partner with platforms like CADRE and REMS to manage entitlement workflows.

Instead of role-based permissions locked inside a single system, we use license-based access control. Your entitlements—granted through a governance process—travel with you, allowing enforcement points at each data repository to make decisions consistently and automatically.

This approach:
Scales across institutions
Supports sensitive or community-restricted data
Ensures transparent auditing and revocation
Respects the governance requirements of language communities





</section>



<section typeof='http://purl.org/ontology/bibo/Slide'>
<img src='./Slide12.svg' alt='Access Control ::  :: ' title='Slide: 12' border='1'  width='85%'/> 



The above diagram represents our Authorisation and Authentication Infrastructure.

With **CILogon** - an Identity and access management platform enables researchers to use their existing credentials

Supported by AAF we are using **EduGAIN** - The eduGAIN interfederation service connects identity federations around the world

**CADRE** - for authorization – CADRE Coordinated Access for Data, Researchers and Environments is a shared platform for safely handling requests to access sensitive data, addressing governance, creation, management and sharing of data for research. We have a service agreement with CADRE to provide access controls. CADRE uses REMS at the backend for resource management – Resource Entitlement Management System is a tool for managing access rights to resources, such as research datasets.

These means – with this licensed based authorization mechanisms - You are licensed to access sensitive materials




</section>



<section typeof='http://purl.org/ontology/bibo/Slide'>
<img src='./Slide13.svg' alt='Key Learnings and Future Plans ::  :: ' title='Slide: 13' border='1'  width='85%'/> 



<center>Photo of LDaCA workshop in Darwin at Charles Darwin University campus</center>




</section>



<section typeof='http://purl.org/ontology/bibo/Slide'>
<img src='./Slide14.svg' alt='The focus is on delivery  ::  :: Decisions are made for speed and appearance, :: Code, data, and dependencies often become conflated . :: When the developer moves on, knowledge and maintenance capacity disappear. :: What began as a useful tool can become a fragile, unmaintained system :: Beyond project  websites; sustainable dashboards ::  :: The focus shifts from quick delivery to long-term value and maintainability. ::  :: Systems are built with open standards,  :: Data and code are portable and separate :: Maintenance is part of the design  :: The result is a system that endures beyond individual projects and people :: ' title='Slide: 14' border='1'  width='85%'/> 



## Building Sustainable Systems, Not Just Dashboards

One of our biggest learnings is this: **Dashboards and portals are easy to build, but hard to maintain. **

Too often:

- Design choices prioritise speed over long-term care
- Knowledge is tied to individual developers
- Data, code, and dependencies get tightly coupled
- Tools become fragile and unmaintained once the project ends

We want to change that pattern.

By building with open standards, separating data from code, and treating maintenance as an expected part of system design, we ensure tools outlive projects—and people.




</section>



<section typeof='http://purl.org/ontology/bibo/Slide'>
<img src='./Slide15.svg' alt='Fix bugs maintain our tools UX improvements ::  :: Design and implement complete Workflow for Interactive Deposits ::  :: Add more language data collections ::  :: Add more analytical notebooks and tools :: https://ocfl.io/1.1.0/spec/ :: TODO ::  :: ' title='Slide: 15' border='1'  width='85%'/> 



What’s Next

There is still work ahead:

- Fixing bugs and improving the user experience
- Completing workflows for interactive deposits
- Expanding language data collections
- Adding analytical notebooks and tools
- Sharing the LDaCA approach across disciplines
- Strengthening governance frameworks

But the foundation—the PILARS protocols—gives us a sustainable, community-centered way forward.




</section>



<section typeof='http://purl.org/ontology/bibo/Slide'>
<img src='./Slide16.svg' alt='Implementing PILARS :: Moises Sacal Bonequi :: ' title='Slide: 16' border='1'  width='85%'/> 



Acknowledging the iconography within the Language Data Commons of Australia (LDaCA) logo, designed by Dylan Sarra.
The design draws inspiration from the Burnett River Petroglyphs, and we recognise the Gureng Gureng communal knowledges that inhere within these symbols.

Much like the Indigenous language and cultural data dispersed across many institutions and archives which LDaCA engages with regularly, the Burnett River Petroglyphs themselves were jackhammered and scattered across Queensland in 1972 — this story lives on today through people… And it is ‘people’ who are central to the data which LDaCA intersects with.




</section>

<section>

Created with https://github.com/ptsefton/pptx_to_md
</section>