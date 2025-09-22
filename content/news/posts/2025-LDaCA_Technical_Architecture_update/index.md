
---
title: "LDaCA Technical Architecture update 2025"
date: 2025-09-17T14:29:40+10:00
draft: false
description: "LDaCA Technical Architecture update 2025"
---

by {{< profile id="sefton" >}}, **Moises Sacal Bonequi** and {{< profile id="foley" >}}

<br>

This blog post provides an update on the Language Data Commons of Australia (LDaCA) technical architecture. It is adapted from a presentation delivered to the LDaCA Steering Committee on 22 August 2025 by Peter Sefton, Mosies Sacal Bonequi and Ben Foley. 

In this post, we will report on some recent developments, mostly in behind-the-scenes improvements to our software stack. We’ll also give a refresher to the principles behind LDaCA’s technical architecture and share more about how our decentralised approach to data management fits with the metadata standards we have been developing for the last few years. As well as this, we aim to show how the open source tools used across LDaCA’s network of collaborators are starting to be harmonised and shared between services, reducing development and maintenance costs and improving sustainability. 

<br>

{{< image Src="/2025-architecture/ldaca-execution-strategy.png" Alt="A table depicting LDaCA's execution strategy, from our starting point in 2021 to our desired state in 2028." Desc="Figure 1: An overview of LDaCA's execution strategy (July 2025). Each strand (Collect & organise, Conserve, Find, Access, Analyse, Guide) is relevant to the technical architecture." Title="Figure 1: An overview of LDaCA's execution strategy (July 2025). Each strand (Collect & organise, Conserve, Find, Access, Analyse, Guide) is relevant to the technical architecture." Ref="Language Data Commons of Australia" >}}

<br>

## Recent developments

We have seen some recent developments which promise exciting future work. Pacific and Regional Archive of Digital Sources in Endangered Cultures [(PARADISEC)](https://www.paradisec.org.au/) colleague John Ferlito has created a new version of the LDaCA data portal using a simpler [API](https://www.ldaca.edu.au/resources/glossary/#api) that can be used for both PARADISEC and LDaCA. The same API could potentially be used for many other repositories, such as the [Nyingarn Repository](https://repository.nyingarn.net/). 

<br>

{{< image Src="/2025-architecture/arocapi.png" Alt="" Desc="Figure 2: AROCAPI, a new RO-Crate API." Title="Figure 2: AROCAPI, a new RO-Crate API." Ref="PT Sefton" >}}

<br>

The new API is an [RO-Crate](https://www.ldaca.edu.au/resources/glossary/#ro-crate) API, that we have affectionately called *AROCAPI*. AROCAPI is a generic API for collections of ‘objects’ (or ‘items’) which are described using RO-Crates. We are working together with John to create a new [Oni](https://www.ldaca.edu.au/resources/glossary/#oni) stack using this API, and have been evaluating the API throughout its development rather than waiting until John finishes his work on it. 

AROCAPI will extend data portals and act as a baseline for other infrastructure that uses RO-Crates. It is designed to work both “out of the box” with an industry-standard data portal UI and to be easily configurable for different audiences and domains. For example, PARADISEC will implement different authentication routes (using the existing “[Nabu](https://catalog.paradisec.org.au/)” catalog) for users to access data than the LDaCA data portal, which uses [CADRE](https://cadre.ada.edu.au/login).

In addition to AROCAPI,  promising discussions are taking place with one of our partners about taking on LDaCA data long-term (instead of having to distribute the collections across partner institutions). This would give a consolidated basis for a language data repository and a broader Humanities data service.

<br>

## LDaCA’s Architecture Design

<br>

{{< image Src="/2025-architecture/pt-garage.png" Alt="Piles of boxes in a garage" Desc="Figure 3: An unstaged photo of PT Sefton’s garage, including a box labelled 'hard drives'." Title="Figure 3: An unstaged photo of PT Sefton’s garage, including a box labelled 'hard drives'." Ref="PT Sefton" Height="600" >}}

<br>

The image above is an unstaged photo of PT Sefton’s garage. The box of hard drives contains some of PT’s old backups ‘just in case’, as well as his late father Ian Sefton’s physics education research data – things like student feedback from lab programs in the ‘80s trialling different approaches to teaching core physics concepts, and extensive literature reviews. These have been handed on to younger colleagues but could easily have ended up only available in this garage! 

This project is a once-in-a-career opportunity to develop processes for organising data and putting it somewhere alongside other data in a Data Commons. This ensures that:

(a) your descendants are not left responsible for it, deciding whether to box it up in the shed or toss it in a skip; and 

(b) others can find it and use it (subject to the clear license permissions), allowing them to build on your legacy.

Remember:


* Storage is not data management (particularly if the storage is a shopping bag full of mistreated hard drives).
* Passing boxes of storage devices hand to hand is NOT a good strategy to conserve data.
* Hard drives are not archives.

From the outset of the project, the LDaCA architecture has been designed around the principle that to build a research data commons, we need to look after data above all else. We took an approach that considered long-term data management separately from current uses of the data. This resulted in some design choices which are markedly different from those commonly seen in software development for research.

<br>

{{< image Src="/2025-architecture/workspaces-and-repositories.png" Alt=" " Desc="Figure 4: Creating reusable and interoperable data objects with workspaces and repositories." Title="Figure 4: Creating reusable and interoperable data objects with workspaces and repositories." Ref="Marco La Rosa and PT Sefton" >}}

<br>

We put effort into:

* organising and describing data using open specifications *before* building features into applications
* designing an access-control system with long-term adaptability in mind (read [the story about that](https://www.ldaca.edu.au/news/posts/fair-care-eresearch-2022/) as presented at eResearch Australasia 2022)
* batch-converting existing data to the new approach
* developing a metadata framework with tools to implement it.

In 2024, we released the Protocols for Implementing Long Term Archival Repositories (PILARS), described in this [presentation at Open Repositories 2024](https://www.ldaca.edu.au/news/posts/open-repositories-2024-pilars/). The first principle of PILARS is that data should be portable, not locked in to a particular interface, service or mode of storage. Following the lead of PARADISEC two decades ago, the protocols call for storing data in commodity storage services such as file systems or (cloud) object storage services. This means that data is available independently of any specific software. 

<br>

{{< image Src="/2025-architecture/data-findability.png" Alt=" " Desc="Figure 5: The PILARS approach allows for a wide range of architectures, sketched in the diagram above. Data stored according to the protocols can be indexed and served over an API (with appropriate access controls)." Title="Figure 5: The PILARS approach allows for a wide range of architectures, sketched in the diagram above. Data stored according to the protocols can be indexed and served over an API (with appropriate access controls)." Ref="PT Sefton" Height="600" >}}

<br>

With this foundation, and the new interoperability we gain from our collaboration on AROCAPI, we are well placed to collect and conserve more data and make use of data in workspace environments. For instance, the newly established LDaCA analytics forum, a working group formed to advise on the development of research analytics tools, will drive analytical workspaces. Work by the LDaCA technical team will continue to improve data preparation workspaces, for example by potentially collaborating to adapt the Nyingarn Workspace for general purpose use.

<br>

## Our architecture

For the remainder of this post, we focus on developments in the archival repository functions of the LDaCA architecture – preparing, describing and sharing data so that it is accessible into the future. In the following section, we will share some of the architecture we have developed over the last few years.


#### The LDaCA data portal

The first example of LDaCA-developed architecture that we will share here is our data portal. Our data portal is a central access-controlled gateway to the data that we have been collecting.

<br>

{{< image Src="/2025-architecture/data-portal.png" Alt="" Desc="Figure 6: Our data portal is an example of the pattern outlined in red above." Title="Figure 6: Our data portal is an example of the pattern outlined in red above." Ref="PT Sefton">}}

<br>

During the project, it has been unclear how we would look after data at the conclusion of the project. No single organisation had put up its hand up to host data for the medium- to long-term. However, we have had some positive talks with one of our partner institutions indicating that they may have an appetite for hosting data that otherwise does not have a home. They may also be able to provide some redundancy for at-risk collections where data custodians are comfortable with a copy residing at the partner institution.


#### Other ways of sharing data assets 

Alongside the data portal, we have explored other ways of sharing data assets, including local distribution via portable computers such as Raspberry Pi with a local wireless network. We have also discussed establishing regional cooperative networks where communities reduce risk by holding data for each other.

<br>

{{< image Src="/2025-architecture/raspberry-pi.png" Alt="" Desc="Figure 7: A Raspberry Pi containing a collection, in this case Batchelor Institute's CALL collection, enables mobile access via local wifi." Title="Figure 7: A Raspberry Pi containing a collection, in this case Batchelor Institute's CALL collection, enables mobile access via local wifi." Ref="Language Data Commons of Australia" >}}

<br>

#### Additional technical resources

With our partners, we have developed and adapted a suite of other technical resources, including:


* Oni portal software for mid-to-large deployments. Version 1 is live and Version 2 is currently under development with PARADISEC, involving a new shared API and code base that can be used across LDaCA and beyond.
* [REMS](https://github.com/CSCfi/rems) overlaid with [CADRE](https://cadre.ada.edu.au/login) to manage access control for identified users. A service agreement between LDaCA and CADRE has been signed, to manage access control. REMS is still the backend of this tool, but CADRE’s wrapper makes it more user-friendly. CADRE version 2 will replace the admin component of REMS and is in the testing phase now.
* ‘Corpus tools’ for migrating data from existing formats to LDaCA-ready RO-Crates are [available on github](https://github.com/Language-Research-Technology?q=corpus-tool). These reduce the cost of developing new migration tools by adapting existing corpus tools, provide reproducible migration processes and are a strong foundation for quality assurance checks.
* Software libraries for managing data in RO-Crate, maintaining schemas available on our [github organisation](https://github.com/Language-Research-Technology).
* RO-Crate preparation tools, including:
    * [Crate-O](https://language-research-technology.github.io/crate-o/#/) (now included in Nyingarn)
    * Crate-O-compatible spreadsheet templates for DIY data import and supporting familiar Excel-based workflows — [documented](https://www.ldaca.edu.au/resources/user-guides/crate-o/convert-spreadsheet/) on the LDaCA website
    * [LaMeta](https://sites.google.com/site/metadatatooldiscussion/home), which now has RO-Crate support
    * [RO-Crate playground](https://ro-crate.ldaca.edu.au/) to experiment with and validate metadata.
* Data preparation workspaces:
    * [Nyingarn](https://nyingarn.net/) (focussed on creating searchable text from manuscripts)
    * Our next steps will involve a multi-modal workspace, for audio and video transcription.


#### Defining metadata schema

<br>

{{< image Src="/2025-architecture/metadata.png" Alt="" Desc="Figure 8: We have extended existing metadata standards for use in different contexts." Title="Figure 8: We have extended existing metadata standards for use in different contexts." Ref="PT Sefton">}}

<br>

We use the following metadata standards:



* [OLAC - The OLAC Metadata Set and Controlled Vocabularies](https://aclanthology.org/W01-1506.pdf)
* [CLDF - Cross-linguistic Data Formats](https://github.com/cldf/cldf)

We have worked to define a metadata schema ([the Language Data Commons (LDAC) schema](https://w3id.org/ldac/terms)) for language data based on this existing work, which extends these schema for use in specific contexts.

<br>

{{< image Src="/2025-architecture/pilars-implementations-2024.png" Alt="A diagram." Desc="Figure 9: PILARS implementations – mid-2024." Title="Figure 9: PILARS implementations – mid-2024." Ref="PT Sefton">}}

<br>

The diagram above attempts to demonstrate how the PILARS principles have been implemented by different organisations. Each example uses open source software, and accepted standards for metadata and storage, meaning that data is portable.  

<br>

## Future directions


{{< image Src="/2025-architecture/pilars-implementations-2026-1.png" Alt="A diagram." Desc="Figure 10: PILARS implementations – mid-2026?" Title="Figure 10: PILARS implementations – mid-2026?" Ref="PT Sefton">}}

<br>

In the image above, we have tried to depict one *potential* view of LDaCA’s architecture in 2026. There may be an opportunity to deepen the collaboration between The University of Queensland LDaCA team and the PARADISEC team at The University of Melbourne, sharing the development of more code.

For example, Nyingarn’s evolving repository function could be replaced by a stand alone instance of the Oni portal, or as shown here, added to the LDaCA portal as a collection. 

Likewise the data preparation functions of Nyingarn, where a user can describe an object and submit it, could be generalized for use in LDaCA.

Some of the changes suggested in this diagram are to: 

- update Nyingarn’s storage service to OCFL or an Object Store solution

- upgrade the Nyingarn workspace to be a generic data onboarding app for all kinds of data, expanding it from its current manuscript-only transcription focus.

We have an opportunity now to consider how the distributed LDaCA technical team can collaborate on key pieces of re-deployable infrastructure. This work is having an impact in other Australian Research Data Commons  [(ARDC)](https://ardc.edu.au/) co-investments – for example, the RAPID [Community Data Lab](https://ardc.edu.au/article/draft-project-plans-for-the-ardc-community-data-lab/) project is directly reusing LDaCA developed tools. 

<br>

<a name="fn-1">1</a> This material was edited by {{< profile id="lea" >}}. [↩](#back-1)

<br>

<iframe src="LDaCA Technical Architecture update 2025.pdf"  width="1200px" height="600px" \ >

<br>



<br>
