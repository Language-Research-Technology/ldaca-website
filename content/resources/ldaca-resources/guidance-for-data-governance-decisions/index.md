---
title: "Guidance for Data Governance Decisions"
date: 2023-10-18T12:09:10+11:00
draft: false
description: "Defines policies, roles, responsibilities and procedures for ongoing use and storage of data, as well as for access to data."
image: "/resources/ldaca-resources/guidance-for-data-governance-decisions/data-license-figure.png"
tags: ["Governance"]
---

<br />

##### [Purpose](#purpose)
##### [1. Access Conditions](#1-access-conditions)
- [1.1 Legal, moral and ethical constraints](#11-legal-moral-and-ethical-constraints)
- [1.2 Licensing](#12-licensing)
##### [2. Persistent Identifiers](#2-persistent-identifiers)
##### [3. Metadata](#3-metadata)
##### [4. Appendix: Determining Copyright](#4-appendix-determining-copyright)

<br />

## Purpose

<GlossaryLink display="Data governance" id="data-governance" /> defines policies, roles, responsibilities and procedures for ongoing use and storage of data, as well as for access to data. Effective <GlossaryLink display="data governance" id="data-governance" /> maximises sustainability, while ensuring data integrity and protecting research participants. Long-term sustainability requires a <GlossaryLink display="data management plan" id="data-management-plan" />.

This document provides guidance on some components of <GlossaryLink display="data governance" id="data-governance" /> that are key to a <GlossaryLink display="data management plan" id="data-management-plan" />, including <GlossaryLink display="access conditions" id="access-conditions" />, <GlossaryLink display="licensing" id="licensing" />, persistent identifiers and <GlossaryLink display="metadata" id="metadata" />. The principles below are those employed by <GlossaryLink display="LDaCA" id="ldaca" />, but they are widely applicable and represent best practice for <GlossaryLink display="data governance" id="data-governance" />, in accordance with the <GlossaryLink display="FAIR" id="fair" /> and <GlossaryLink display="CARE" id="care" /> principles.

<br />

> ![Thought bubble](./thought-bubble.png) **Questions for reflection:**<br />
> In each section, you will find a thought bubble marking some questions for reflection that will help you start to explore these <GlossaryLink display="data governance" id="data-governance" /> topics. This content is designed as guidance for <GlossaryLink display="Data Stewards" id="data-steward" /> considering how to manage their data into the future.

<br />

## 1. Access Conditions

<GlossaryLink display="Access conditions" id="access-conditions" /> refer to who can access data and what use is permitted. Defining specific conditions for access supports data reusability and the advancement of the scientific endeavour; it also protects the data from misuse.

To determine <GlossaryLink display="access conditions" id="access-conditions" />, the <GlossaryLink display="Data Steward" id="data-steward" /> must:

1. understand the legal, moral and ethical constraints to sharing data, and
2. prepare a license outlining <GlossaryLink display="access conditions" id="access-conditions" />.

<br />

### 1.1 Legal, moral and ethical constraints

<br />

#### Legal constraints

In Australia, as in many other countries, research data is recognised as <GlossaryLink display="Intellectual Property" id="intellectual-property" /> that can be protected under legal mechanisms such as copyright. When considering how data can be shared and accessed by others, it is important to consider these legal constraints.

<GlossaryLink display="Copyright" id="copyright" /> protects expressions of ideas in works such as books, music, paintings, films, and performative acts such as speech, sign and gesture, etc., and therefore also <GlossaryLink display="data collections" id="data-collection" />. The creator of the work is known as the <GlossaryLink display="copyright owner" id="copyright-owner" />.

<GlossaryLink display="Copyright" id="copyright" /> provides two types of rights:

- **Economic rights**: The owner has the exclusive right to reproduce, publish, perform, communicate, and adapt or modify their work, for both commercial and non-commercial purposes. This right can be transferred or shared with others via assignment or <GlossaryLink display="licensing" id="licensing" />.
- **Moral rights**: The work must be correctly attributed and not treated in a derogatory manner. This protects the integrity of the work. Moral rights cannot be transferred or shared.

<br />

> ![Thought bubble](./thought-bubble.png) **Questions for reflection:**<br />
> How can I identify the <GlossaryLink display="copyright owner" id="copyright-owner" /> of a language <GlossaryLink display="collection" id="collection" />?

<br />

Unlike trademarks and patents, <GlossaryLink display="copyright" id="copyright" /> doesn’t require registration and there are no official records that can be searched to identify a <GlossaryLink display="copyright owner" id="copyright-owner" /> in Australia. Additionally, the creator of material is not necessarily the <GlossaryLink display="copyright owner" id="copyright-owner" /> and <GlossaryLink display="copyright" id="copyright" /> may also be jointly owned.

Copyright ownership is determined according to a set of complex rules set out in the Copyright Act and its amendments. It is important to review in detail the law to ensure the correct owner has been identified. Legal advice should be sought where the <GlossaryLink display="copyright owner" id="copyright-owner" /> cannot be clearly identified. If the <GlossaryLink display="copyright owner" id="copyright-owner" /> has died the <GlossaryLink display="copyright" id="copyright" /> is usually passed on to that person’s spouse or children. (See more information at the end of this section.)

The <GlossaryLink display="copyright owner" id="copyright-owner" /> of a language collection can be identified by considering the following questions:

<br />

| Question                                                                                                                                                                            | Further Information                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Does the collection comprise materials all collected under the same conditions? (e.g. as part of the same research project)<ul><li>Yes</li><li>No</li></ul>                                       | If the collection includes material from a third party, the <GlossaryLink display="copyright owner" id="copyright-owner" /> and <GlossaryLink display="copyright" id="copyright" /> status should be identified for each subset of the collection.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Has the <GlossaryLink display="copyright owner" id="copyright-owner" /> been determined by a contract, formal agreement, or other relevant document?<ul><li>Yes</li><li>No      </li></ul>                                                         | In some cases, existing contracts or agreements will assign copyright ownership in advance. This will take precedence over the rules set out in the Copyright Act.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| What type of material is included in the collection?<ul><li>Textual work</li><li>Musical work</li><li>Dramatic work</li><li>Computer program</li><li>Artistic work</li><li>Film or video</li><li>Sound recordings</li></ul> | Generally, the author of a textual work, musical work, dramatic work, computer program or artistic work (i.e. the person who created the work) is the first owner of copyright.<br />However, the general rules for films, videos and sound recordings are different.<ul><li>For sound recordings, <GlossaryLink display="copyright" id="copyright" /> is owned by the ‘maker’ of the sound recording, typically the person or company who owns the recording equipment.</li><li>For film and video, <GlossaryLink display="copyright" id="copyright" /> is owned by the person or company which made the arrangements for the creation of the work.</li></ul>In the academic context, this is typically the university where the research was conducted. |
| Was the material created by an employee in the course of their employment?<ul><li>Yes</li><li>No   </li></ul>                                                                                      | When the work was created by an employee as part of their usual work duties, the employer is the <GlossaryLink display="copyright owner" id="copyright-owner" /> (unless there is a specific employment agreement that specifies otherwise).                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Is the work a performance?<ul><li>Yes</li><li>No       </li></ul>                                                                                                                                  | Performers’ rights apply to live performances including dramatic works, musical works, dances, circus acts, expressions of folklore, readings, and recitations of existing or improved literary works recorded or filmed with or without an audience. Permission must be sought to record the live performance, and to broadcast and distribute recordings.<br/>As of 1 January 2005, performers co-own <GlossaryLink display="copyright" id="copyright" /> in sound recordings of their performances. There are exceptions for commissioned recordings, or those made by an employee.                                                                                                                    |

<br />

> ![Thought bubble](./thought-bubble.png) **Questions for reflection:**<br />
> Does <GlossaryLink display="copyright" id="copyright" /> apply to this language collection?

<br />

In Australia, <GlossaryLink display="copyright" id="copyright" /> generally lasts for the life of the author/creator plus 70 years at which point the work becomes part of the public domain. However, it is important to review <GlossaryLink display="copyright" id="copyright" /> on a case-by-case basis given that the rules vary, and amendments have been made to law over time.

To understand how <GlossaryLink display="copyright" id="copyright" /> might apply to a collection, the <GlossaryLink display="Data Steward" id="data-steward" /> should consider the following questions:

<br />

| Question                                                                                                                                                                                                       | Further Information                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| What type of works are included in the collection?<ul><li>Works (literary works, dramatic works, music, artistic works)</li><li>Subject matter other than works (sound recordings, performances, films, broadcasts)</li></ul> | <GlossaryLink display="Copyright" id="copyright" /> protects two broad categories of <GlossaryLink display="intellectual property" id="intellectual-property" />:<ul><li>Works</li><li>Literary works (books, magazine articles, poetry, etc.)</li><li>Dramatic works (dance, plays, etc.)</li><li>Music (scores, songs, etc.)</li><li>Artistic works (paintings, drawings, etc.)</li><li>Subject matter other than works</li><li>Sound recordings (recordings of interviews, conversations, oral histories, songs; live performances, songs, podcasts, etc.)</li><li>Films (documentaries, television programs, animations, etc.)</li></ul> |
| When was the material created?<ul><li>Year: </li></ul>                                                                                                                                                                   | This information will be key to determining the duration of the copyright.                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| When was the material first made public?<ul><li>Year:</li><li>Never made public                                                                                                                                  </li></ul>   | "Made public" means communicated, published, performed in public or sold to the public. The timing of the publication of the materials is key to the duration of <GlossaryLink display="copyright" id="copyright" /> for sound recordings or films, as the laws have changed (see [Appendix](#4-appendix-determining-copyright)).                                                                                                                                                                                                                      |
| Where was the material made?                                                                                                                                                                                   | Australian <GlossaryLink display="copyright" id="copyright" /> law applies to any use or sharing of material within Australia, even if the <GlossaryLink display="copyright owner" id="copyright-owner" /> is from outside of Australia.                                                                                                                                                                                                                                                                                                                                                               |

<br />

Once this information has been confirmed, calculate the duration of <GlossaryLink display="copyright" id="copyright" /> using the Appendix. If <GlossaryLink display="copyright" id="copyright" /> applies, the <GlossaryLink display="copyright owner" id="copyright-owner" /> may consider sharing some of their rights with others via <GlossaryLink display="licensing" id="licensing" />. If <GlossaryLink display="copyright" id="copyright" /> has expired, the material is in the public domain and the <GlossaryLink display="copyright owner" id="copyright-owner" /> cannot restrict access using <GlossaryLink display="licensing" id="licensing" />.

<br />

**Find out more about copyright, intellectual property and licensing:**<br />

- [What is Intellectual Property?](https://www.wipo.int/edocs/pubdocs/en/wipo_pub_450_2020.pdf) (World Intellectual Property Organisation)
- Fact sheets (Arts Law Centre of Australia):

  - [Copyright Information sheet](https://www.artslaw.com.au/information-sheet/copyright/)
  - [Duration of Copyright](https://www.copyright.org.au/browse/book/ACC-Duration-of-Copyright-INFO023)
  - [Performers’ Rights](https://www.artslaw.com.au/information-sheet/performers-rights/)
  - [Licensing](https://www.artslaw.com.au/information-sheet/licensing-aitb/)

- [Fact sheets](https://www.copyright.org.au/resources) (Australian Copyright Council)
- [Types of IP](https://www.ipaustralia.gov.au/understanding-ip/types-of-ip) (IP Australia)
- [Fact sheet: Intellectual Property – Basics](https://staff.uq.edu.au/files/33574/legal-services-fact-sheet-ip-basics.pdf) (The University of Queensland)
- [What are the Creative Commons licenses?](https://creativecommons.org.au/learn/fact-sheets/what-are-the-cc-licences/) (Creative Commons Australia)

<br />

#### Ethical and moral constraints for data access

In addition to the legal constraint determined by copyright, it is important to also consider ethical and moral constraints.

Research ethics set shared standards for research processes that uphold and promote important values such as trust, accountability, human rights, and social responsibility, among others, in the pursuit of knowledge and truth.

In Australia, research ethics are defined in key frameworks such as:

- [Australian Code for the Responsible Conduct of Research](https://www.nhmrc.gov.au/about-us/publications/australian-code-responsible-conduct-research-2018)
- [National Statement on Ethical Conduct in Human Research](https://www.nhmrc.gov.au/about-us/publications/national-statement-ethical-conduct-human-research-2007-updated-2018)
- [AIATSIS Code of Ethics for Aboriginal and Torres Strait Islander Research](https://aiatsis.gov.au/sites/default/files/2020-10/aiatsis-code-ethics.pdf)

Research carried out in Australian universities and similar institutions using public funds and involving human participants must be approved by Human Research Ethics Committees (HRECs). Research ethics proposals outline the conditions for collecting, analysing, sharing, managing, and potentially disposing of research data. A review of the research ethics proposal under which the data was collected and other relevant documents, such as grant agreements, is necessary when determining data <GlossaryLink display="access conditions" id="access-conditions" /> for a collection.

While ethical constraints are often binding, several international frameworks have been developed to further promote data reusability and to address key issues such as Indigenous rights and interests. The <GlossaryLink display="FAIR" id="fair" /> and <GlossaryLink display="CARE" id="care" /> principles are widely accepted standards (see [LDaCA principles](/about/principles/) for more information).

<br />

##### FAIR principles

The <GlossaryLink display="FAIR" id="fair" /> principles provide a set of standards for data management that facilitates continued knowledge discovery and innovation.

In brief, the four principles are:

1. Findability: Data is easily findable, via persistent identifiers and rich metadata.
2. Accessibility: <GlossaryLink display="Access conditions" id="access-conditions" /> are clearly defined, and protocols are developed to facilitate authentication and authorisation.
3. Interoperability: Data can be integrated with other data and applications, through standard data formats and compatible metadata vocabularies.
4. Reusability: Data and metadata are well-described with clear information on <GlossaryLink display="provenance" id="provenance" /> and data <GlossaryLink display="access conditions" id="access-conditions" /> in order to optimise future reuse.

<br />

##### CARE principles

The <GlossaryLink display="CARE" id="care" /> Principles for Indigenous Data Governance provide guidelines with the aim of balancing the protection of Indigenous rights and interests and supporting data sharing and reuse. Though designed with consideration specifically for Indigenous communities these are important principles to bear in mind for all language collections.

In brief, the four principles are:

1. Collective benefit: Data sharing provides a collective benefit for Indigenous Peoples in terms of inclusive development and innovation, improved governance and citizen engagement and the achievement of equitable outcomes.
2. Authority to control: Indigenous Peoples have the authority to control and govern data.
3. Responsibility: Those working with Indigenous data have a responsibility to nurture respectful relationships with the communities from which the data originates.
4. Ethics: <GlossaryLink display="Data governance" id="data-governance" /> prioritises the rights and wellbeing of Indigenous Peoples and minimises harm.

<br />

> ![Thought bubble](./thought-bubble.png) **Questions for reflection:**<br />
> What ethical and moral questions need to be considered before sharing this collection?

<br />