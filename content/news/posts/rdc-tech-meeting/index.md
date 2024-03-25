---
title: HASS RDC Technical Advisory Group Meeting LDaCA & ATAP Intro
date: "2022-06-08T15:28:35+10:00"
draft: false
categories: ["LDaCA"]
tags: ["Repositories"]
author: Peter Sefton
---

<br>

This is a presentation Peter Sefton gave to the
[Humanities, Arts and Social Sciences Research Data Commons and Indigenous Research Capability Program](https://ardc.edu.au/collaborations/strategic-activities/hass-and-indigenous-research-data-commons/) Technical Advisory Group on Friday 11th February 2022.

Thanks to Simon Musgrave for reviewing this and adding a little detail here
and there.

(This is also available on [Dr Sefton's site](https://ptsefton.com/2022/02/18/hass_rdc_tech_advisory/index.html))

[PDF version](HASS%20RDC%20Technical%20Advisory%20Group%20Meeting%20LDaCA%20&%20ATAP%20Intro.pdf)

<br>

![Hass RDC Technical Avisory Group Meeting](Slide00.png)

The Language Data Commons of Australia Data Partnerships (LDaCA) and the Australian Text Analytics Platform (ATAP) are establishing a scalable and flexible language data and analytics commons. These projects will be part of the Humanities and Social Sciences Research Data Commons (HASS RDC).
The Data Commons will focus on preservation and discovery of distributed multi-modal language data collections under a variety of governance frameworks. This will include access control that reflects ethical constraints and intellectual property rights, including those of Aboriginal and Torres Strait Islander, migrant and Pacific communities.

<br>

![Slide01](Slide01.png)

For this Research Data Commons work, we are using the Arkisto Platform
(introduced [at eResearch 2020](http://ptsefton.com/2020/11/23/Arkisto/index.html)).

Arkisto aims to secure the long-term preservation of data independently of
code and services - recognizing the ephemeral nature of software and platforms.
We know that sustaining software platforms can be hard and aim to make sure
that important data assets are not locked up in a database or hard-coded logic
of some hard-to-maintain application.

We are using three key standards on this project …

<br>

![Slide02](Slide02.png)

The first standard is the [Oxford Common File Layout](https://ocfl.io/1.0/spec/) -
this is a way of keeping version-controlled digital objects on a plain old
filesystem or object store.

Here’s the introduction to the spec:

> **Introduction**
>
> This section is non-normative.
>
> This Oxford Common File Layout (OCFL) specification describes an application-independent approach to the storage of digital objects in a structured, transparent, and predictable manner. It is designed to promote long-term access and management of digital objects within digital repositories.
>
> **Need**
>
> The OCFL initiative began as a discussion amongst digital repository practitioners to identify well-defined, common, and application-independent file management for a digital repository's persisted objects and represents a specification of the community’s collective recommendations addressing five primary requirements: completeness, parsability, versioning, robustness, and storage diversity.
>
> **Completeness**
>
> The OCFL recommends storing metadata and the content it describes together so the OCFL object can be fully understood in the absence of original software. The OCFL does not make recommendations about what constitutes an object, nor does it assume what type of metadata is needed to fully understand the object, recognizing those decisions may differ from one repository to another. However, it is recommended that when making this decision, implementers consider what is necessary to rebuild the objects from the files stored.
>
> **Parsability**
>
> One goal of the OCFL is to ensure objects remain fixed over time. This can be difficult as software and infrastructure change, and content is migrated. To combat this challenge, the OCFL ensures that both humans and machines can understand the layout and corresponding inventory regardless of the software or infrastructure used. This allows for humans to read the layout and corresponding inventory, and understand it without the use of machines. Additionally, if existing software were to become obsolete, the OCFL could easily be understood by a lightweight application, even without the full feature repository that might have been used in the past.
>
> **Versioning**
>
> Another need expressed by the community was the need to update and change objects, either the content itself or the metadata associated with the object. The OCFL relies heavily on the prior art in the [Moab] Design for Digital Object Versioning which utilizes forward deltas to track the history of the object. Utilizing this schema allows implementers of the OCFL to easily recreate past versions of an OCFL object. Like with objects, the OCFL remains silent on when versioning should occur recognizing this may differ from implementation to implementation.
>
> **Robustness**
>
> The OCFL also fills the need for robustness against errors, corruption, and migration. The versioning schema ensures an OCFL object is robust enough to allow for the discovery of human errors. The fixity checking built into the OCFL via content addressable storage allows implementers to identify file corruption that might happen outside of normal human interactions. The OCFL eases content migrations by providing a technology-agnostic method for verifying that OCFL objects have remained fixed.
>
> **Storage diversity**
> Finally, the community expressed a need to store content on a wide variety of storage technologies. With that in mind, the OCFL was written with an eye toward various storage infrastructures including cloud object stores.

<br>

![Slide03](Slide03.png)

The second standard is Research Object Crate. (RO-Crate) a method for
describing any dataset of local or remote resources as a digital object using
a **single linked-data metadata document**.

RO-Crate is used in our platform both for describing data objects in the OCFL
repository, and for delivering metadata over the API (which we’ll show in
architecture diagrams and screenshots below).

<br>

![Slide04](Slide04.png)

RO-Crates may contain any kind of data resource about anything, in any format
as a file or URL - it’s not just for language data; there are also many
projects in the sciences starting to
[use RO-Crate](https://www.researchobject.org/ro-crate/in-use/).

<br>

![Slide05](Slide05.png)

This image is taken from a
[presentation on digital preservation](https://slideplayer.com/slide/3919920/).

[Models](https://pcdm.org/2016/04/18/models)
The third key standard for Arkisto is the Portland Common Data Model. Like
OCFL, this was developed by members of the digital library/repository
community. It was devised as a way to do interchange between repository
systems, most of which, it turned out had evolved very similar ways of having
nested collections, digital objects that aggregate related files. Using this
very simple ontology allows us to store data in the OCFL layer in a very
flexible way - depending on factors like data size, licensing and whether
data is likely to change or need to be withdrawn, we can store entire
collections as OCFL objects or across many OCFL objects with PCDM used to
show the structure of the data collections regardless of how they happen to
be stored.

<br>

![Slide06](Slide06.png)

Back to RO-Crates.

RO-Crates are self-documenting and can ship with an HTML file that allows a
consumer of the crated data to see whatever documentation the crate authors
have added.

This crate contains an entire collection (RepositoryCollection is the RO-
Crate term that corresponds to pcdm:Collection).

Crates must have license information that set out how data may be used and if
it may be redistributed. As we are dealing with language data which is (almost
) always created by people, it is important that their intellectual property
rights and privacy are respected. More on this later.

<br>

![Slide07](Slide07.png)

This shows a page for what we’re calling an Object (RepositoryObject). A
RepositoryObject is a single “thing” such as a document, a conversation, or a
session in a speech study. (this was called an item in Alveo but given that
both the Portland Common Data model and Oxford Common File Layout use “Object
” we are using that term at least for now).

This shows that the system is capable of dealing with Unicode characters -
which is good, as you would expect as it’s 2022 and this is a Language Data
Commons, but there are still challenges, like dealing with mixtures of left
to right and right to left text, and we need to find or define metadata terms
to keep track of “language”, “writing system”, and the difference between
things that started as orthographic (written) text, vs spoken or signed etc.
There’s a group of us working on that, currently led by Nick Thieberger and
Peter Sefton.

Simon Musgrave and Peter Sefton
[presented our progress with multilingual text](https://ptsefton.com/2022/01/27/DAMTA_Slides_v1/)
at a virtual workshop run by ANU in January.

<br>

![Slide08](Slide08.png)

Here’s another screenshot showing one of the government documents in PDF
format - with a link back to the abstract RepositoryObject that houses all of
the manifestations of the document in various languages.

<br>

![Slide09](Slide09.png)

The above diagram takes a big-picture view of research data management in the
context of _doing_ research. It makes a distinction between managed
repository storage and the places where work is done - “workspaces”.
Workspaces are where researchers collect, analyse and describe data.
Examples include the most basic of research IT services, file storage as
well as analytical tools such as Jupyter notebooks (the backbone of ATAP -
the text analytics platform). Other examples of workspaces include code
repositories such as GitHub or GitLab (a slightly different sense of the word
repository), survey tools, electronic (lab) notebooks and bespoke code
written for particular research programs - these workspaces are essential
research systems but usually are not set up for long-term management of data.

The cycle in the centre of this diagram shows an idealised research practice
where data are collected, described and deposited into a repository
frequently. Data are made findable and accessible as soon as possible and
can be “re-collected” for use and re-use.

For data to be re-usable by humans and machines (such as ATAP notebook code
that consumes datasets in a predictable way) it must be well described. The
ATAP and LDaCA approach to this is to use the Research Object Crate (RO-Crate
) specification. RO-Crate is essentially a guide to using a number of
standards and standard approaches to describe both data and re-runnable
software such as workflows or notebooks.

<br>

![Slide10](Slide10.png)

This rather messy slide captures the overall high-level architecture for the
LDaCA Research Data Commons - there will be an analytical workbench (left of
the diagram) which is the basis of the Australian Text Analytics (ATAP)
project - this will focus on notebook-style programming using one of the
emerging Jupyter notebook platforms in that space. (This is not 100% decided
yet, but that has not stopped the team from starting to collect and develop
notebooks that open up text analytics to new coders from the linguistics
community.) Our engagement lead, Dr Simon Musgrave sees the ATAP work as
primarily an educational enterprise encouraging researchers to adopt new
research practices - which will be underpinned by services built on the
Arkisto standards that allow for rigorous, re-runnable research.

<br>

![Slide11](Slide11.png)

In this presentation, we are going to focus on the portal/repository
architecture more than on the ATAP notebook side of things. We know that we
will be using (at least) the SWAN Jupyter notebook service perceived by
AARNet but we are still scoping how notebooks will be made portable between
systems and where they will be stored at various stages of their development.
We will be supporting and encouraging researchers to archive notebooks
wrapped in RO-Crates with re-use information OUTSIDE of the SWAN platform
though - it’s a workspace, not a repository; it does not have governance in
place for long-term preservation.

<br>

![Slide12](Slide12.png)

This is a much simpler view zooming in on the core infrastructure components
that we have built so far. We are starting with bulk ingest of existing
collections and will add one-by-one deposit of individual items after that.

This shows the OCFL repository at the bottom - with a Data & Access API that
mediates access. This API understands the RO-Crate format and in particular
its use of the Portland Common Data Model to structure data. The API also
enforces access control to objects; every repository object has a license
setting out the terms of use and re-use for its data, which will reflect the
way the data were collected - whether participants signed agreements, ethics
approvals and privacy law are all relevant here. Each license will correspond
to a group of people who have agreed to and/or been selected by a data
custodian. We are in negotiations with the
[Australian Access Federation (AAF)](https://aaf.edu.au/) to use their
[CILogon](https://www.cilogon.org/) service for this authorization step and
for authentication of users across a wide variety of services including the
AAF itself and Google, Microsoft, GitHub etc.

There’s also an access portal which will be based on a full-text index (at
this stage we’re using ElasticSearch) which is designed to help people find
data they might be interested in using. This follows current conventions for
browse/search interfaces which we’re familiar with from shopping sites - you
can search for text and/or drill down using _facets_ (which are called
aggregations in Elastic-land). e.g. which language am interested in or do I
want [ ] Spoken or [ ] Written material?

<br>

![Slide13](Slide13.png)

This architecture is very modular and designed to operate in a distributed
fashion, potentially with distributed file and/or object-based repositories
all being indexed by a centralised service. There may also be other ‘flavours’
of index such as triple or graph stores, relational databases that ingest
tabular data or domain-specific discovery tools such as corpus analysis
software. And, there may be collection-specific portals that show a slice of
a bigger repository with features or branding specific to a subset of data.

<br>

![Slide14](Slide14.png)

This implementation of the Arkisto standards-stack is known as Oni. That’s
not really an acronym anymore though it once stood for OCFL, Ngnix (a web
server) or Node (a Javascript framework) and an Index. An Oni is a kind of
Japanese demon. 👹

<br>

![Slide15](Slide15.png)

But how will data get into the OCFL repository? At the moment we’re loading
data using a series of scripts which are being developed at our github
organization.

This diagram and the next come from the
[Arkisto Use cases page](https://arkisto-platform.github.io/use-cases/). It
shows how we will be converting data from existing collections into a form
where they can be preserved in an OCFL repository and be part of a bigger
collection, ALWAYS with access control based on licenses.

<br>

![Slide16](Slide16.png)

This is a screenshot of our GitHub repository showing the corpus migration tools
we’ve started developing (there are six, and one general purpose text-
cleaning tool). These repositories have not all been made public yet, but
they will be - they contain tools to build Arkisto-ready file repositories
that can be made available in one or more portals

<br>

![Slide17](Slide17.png)

Here’s our portal which gives a browse interface to allow drill-down data discovery.

But wait! That’s not the LDaCA portal - that’s Alveo!

Oh yes, so it is.

Alveo was built ten years ago - and has not seen much uptake.

<br>

![Slide18](Slide18.png)

This screenshot shows some of the browse facets for the COOEE corpus, which
contains early Australian **written** English materials. But facets like `
Written Mode` and `Communication Medium` both of which are known for COOEE
are not populated.

There are a quite few things that were wrong with Alveo - like we obviously
didn’t get all the metadata populated to the level that it would make these
browse facets actually useful for filtering. But more importantly, there was
not enough work done to check which browse facets _are_ useful and not enough
of the budget was able to be spent on user engagement and training rather
than software development.

One of my current LDaCA senior colleagues said to me a couple of years ago
that Alveo was useless: “I just wanted to get all the data” they said. Me, I
was thinking “but it has an API so you CAN get all the data - what’s the
problem?”. We have tried not to repeat this mistake by making sure that the
API delivers entire collections and we have some demonstrations of doing this
for real work.

Another colleague who was actually on the Alveo team said that this interface
was "equally useless for everyone", and they later built a custom interface
for one of the collections.

We’re taking these lessons to heart in designing the LDaCA infrastructure -
making sure that as we go we have people using the software - it helps that
we have an in-house (though distributed) development team rather than an
external contractor so feedback is very fast - we can jump onto a call and
demo stuff at any time.

<br>

![Slide19](Slide19.png)

We decided to build from the data API first.

In this demo developer Moises Sacal Bonequi is looking at the API via the
Postman tool. This demonstration shows how the API can be used to find
collections (that conform to our metadata profile)

1. First, he lists the collections, then chooses one.
2. He then gets a collection with the `&resolve` parameter, meaning that the
   API will internally traverse the PCDM collection hierarchy and return ALL
   the metadata for the collection - down to the file level.
3. He then downloads a file (for which he has a license that most of you
   reading this don’t have - hence the obfuscation of the
   dialogue).

This API has been used and road tested at ANU to develop techniques for topic
modelling on the Sydney Speaks corpus (more about which corpus below) - by a
student Marcel Reverter-Rambaldi under the supervision of Prof Catherine
Travis at ANU - we are hoping to publish this work as a re-usable notebook
that can be adapted for other projects, and to allow the techniques the ANU
team have been developing to be applied to other similar data in LDaCA.

<br>

![Slide20](Slide20.png)

And one of the data scientists who was working with us at UQ, Mel Mistica,
developed a [demonstration notebook](https://github.com/Australian-Text-Analytics-Platform/ro-crate-metadata/blob/main/ro-crate-metadata.ipynb)
with our tech team that used the API to access another full collection (which
is also suitable for the ANU topic modelling approach) - this notebook gets
all the metadata for a small social history collection which contains
transcribed interviews with women in Western Sydney and shows how a data
scientist might explore what’s in it and start asking questions about the data,
like the age distribution of the participants and start digging in to what
they were talking about.

<br>

![Slide21](Slide21.png)

This screencast shows a work-in-progress snapshot of the Oni portal we talked
about above in action, showing how search and browse might be used to find
repository objects from the index - in this case, searching for Arabic words
in a small set of Australian Government documents.

<br>

![Slide22](Slide22.png)

Hang on!

You keep talking about
[“repositories”](http://ptsefton.com/2012/02/14/an-australian-research-data-repository/),
don’t you always say stuff like, "A repository is not just a software
application. It’s a lifestyle. It’s not just for Christmas?"

That’s right - we’ve been talking about repository software architectures
here but it is important to remember that a repository needs to be considered
an institution rather than a software stack or collection of files, more
"University Library" than "My Database".

<br>

![Slide23](Slide23.png)

The next half a dozen slides are based on
[a presentation](https://ptsefton.com/2021/10/12/ldaca2021/index.html)
I gave at eResearch Australasia 2021 with Moises Sacal Bonequi

Today we will look in detail at one important part of this architecture -
access control. How can we make sure that in a distributed system, with
multiple data repositories and registries residing with different data
custodians, the right people have access to the right data?

I didn’t spell this out in the recorded conference presentation, but for data
that resides in the repositories at the right of the diagram we want to
encourage research processes that clearly separate data from code. Notebooks
and other code workflows that use data will fetch a version-controlled
reference copy from a repository - using an access key if needed, process the
data and produce results that are then deposited into an appropriate
repository alongside the code itself. Given that a lot of the data in the
language world is NOT available under open licenses such as Creative Commons
it is important to establish this practice - each user of the data must
negotiate or be granted access individually. Research can still be
reproducible using this model, but without a culture of sharing datasets
without regard for the rights of those who were involved in the creation of
the data.

<br>

![Slide24](Slide24.png)

Regarding rights, our project is informed by the
{{< glossary_link display="CARE" id="care" >}} principles for Indigenous data.

> The current movement toward open data and open science does not fully
> engage with Indigenous Peoples' rights and interests. Existing principles
> within the open data movement (e.g. {{< glossary_link display="FAIR" id="fair" >}}: findable, accessible, interoperable,
>  reusable) primarily focus on characteristics of data that will facilitate
> increased data sharing among entities while ignoring power differentials and
> historical contexts. The emphasis on greater data sharing alone creates a
> tension for Indigenous Peoples who are also asserting greater control over
> the application and use of Indigenous data and Indigenous Knowledge for
> collective benefit

But we do not see the {{< glossary_link display="CARE" id="care" >}} principles as only applying to Indigenous data and
knowledge. Most language data is a record of the behaviour of people who have
moral rights in the material (even if they do not have legal rights) and
taking the {{< glossary_link display="CARE" id="care" >}} principles as relevant in such cases ensures serious thinking
about the protection of those moral rights.

<br>

![Slide25](Slide25.png)

[Traditional Knowledge Labels](https://localcontexts.org/labels/traditional-knowledge-labels/)

We are designing the system so that it can work with diverse ways of
expressing access rights, for example, licensing like the Tribal Knowledge
labels. The idea is to separate safe storage of data with a license on each
item, which may reference the TK labels from a system that is administered by
the data custodians who can make decisions about who is allowed to access data.

<br>

![Slide26](Slide26.png)

We are working on a case study with the
[Sydney Speaks project](http://www.dynamicsoflanguage.edu.au/sydney-speaks/)
via steering committee member Catherine Travis.

> This project seeks to document and explore Australian English, as spoken in
> Australia’s largest and most ethnically and linguistically diverse city – Sydney.
> The title “Sydney Speaks” captures a key defining feature of the project:
> the data come from recorded conversations between Sydney siders, as they tell
> stories about their lives and experiences, their opinions and attitudes. This
> allows us to measure how their lived experiences impact their speech
> patterns.
> Working within the framework of variationist sociolinguistics, we examine
> variation in phonetics, grammar and discourse, in an effort to answer
> questions of fundamental interest both to Australian English, and language
> variation and change more broadly, including:
>
> - How has Australian English as spoken in Sydney changed over the past 100 years?
> - Has the change in the ethnic diversity over that time period (and in particular, over the past 40 years) had any impact on the way Australian English is spoken?
> - What affects the way variation and change spread through society - Who are the initiators and who are the leaders in change? - How do social networks function in a modern metropolis? - What social factors are relevant to Sydney speech today, and over time (gender? class? region? ethnic identity?)
>   A better understanding of what kind of variation exists in Australian
>   English, and of how and why Australian English has changed over time can
>   help society be more accepting of speech variation and even help address
>   prejudices based on ways of speaking.
>   Source: <http://www.dynamicsoflanguage.edu.au/sydney-speaks/>

The collection contains recordings of people speaking both contemporary and
historic.

Because this involved human participants there are restrictions on the
distribution of data - a situation we see with lots of studies involving
people in a huge range of disciplines.

<br>

![Slide27](Slide27.png)

There are four tiers of data access we need to enforce and observe for this
data based on the participant agreements and ethics arrangements under which
the data were collected.

Concerns about rights and interests are important for any data involving
people - and a large amount of the data both Indigenous and non-Indigenous we
are using will require access control that ensures that data sharing is
appropriate.

<br>

![Slide28](Slide28.png)

In this example demo we uploaded various collections and are authorising with
GitHub organisations.

In our production release, we will use AAF to authorise different groups.

Let's find a dataset: The Sydney Speaks Corpus.

As you can see we cannot see any data.

Let's login… We authorise GitHub…

Now you can see we have access to sub-corpus data and I am just opening a couple of items.

—

Now in GitHub we can see the group management example.

I have given access to all the licences to myself, as you can see here and
given access to licence A to others.

<br>

![Slide29](Slide29.png)

This diagram is a sketch of the interaction that took place in the demo - it
shows how a repository can delegate authorization to an external system - in
this case, GitHub rather than CILogon. But we are working with the ARDC to set
up a trial with the Australian Access Federation to allow CILogon access for
the HASS Research Data Commons so we can pilot group-based access control.

<br>

![Slide30](Slide30.png)

There’s a lot still to do.

<br>