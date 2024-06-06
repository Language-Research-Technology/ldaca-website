---
    title:  >
      Towards a Generic Research Data Commons: A highly scalable standards-based repository framework for Language and other Humanities data
    date: "2023-06-29"
    slug: arkisto-stack-or-2023
    categories: ["LDaCA"]
    tags: ["Access"]
    author: Peter Sefton
    aliases: 
    - "/posts/arkisto-stack-or-2023/"
---

<br>

[Download as PDF](arkisto-stack-or-2023.pdf)

This presentation was delivered by Peter Sefton at the [Open Repositories 2023](https://or2023.openrepositories.org/) conference in South Africa on 2023-06-14 in the [Presentations: Discipline specific systems with {{< glossary_link display="FAIR" id="fair" >}} principles
](https://www.conftool.net/or2023/index.php?page=browseSessions&form_session=460&presentations=show) session.

This contains the slides and complete speaker notes, which have been edited after the conference.

<section typeof='http://purl.org/ontology/bibo/Slide'>

We will present a standards-based generalised architecture for large-scale data\* repositories for research and preservation illustrated with real-world examples drawn from a number of languages and cultural archive projects. This work is taking place in the context of the Australian Humanities and Social Sciences Research Data Commons, particularly the Language Data component thereof and the long-established {{< glossary_link display="PARADISEC" id="paradisec" >}} cultural archive. The standards used include the Oxford Common File Layout for storage, Research Object CRATE ({{< glossary_link display="RO-Crate" id="ro-crate" >}}) for consistent linked-data description of {{< glossary_link display="FAIR" id="fair" >}} digital {{< glossary_link display="objects" id="object" >}}, and a language data {{< glossary_link display="metadata" id="metadata" >}} profile to ensure long-term interoperability between systems and re-usability over time. We also discuss data {{< glossary_link display="licensing" id="licensing" >}} and authorization for access to non-open resources. We suggest that the approach shown here may be used in other disciplines or for other kinds of digital library, repository or archival systems.

\*The submitted abstract did not have the word data here - added for clarity

By: Peter Sefton (University of Queensland), Simon Musgrave (University of Queensland & Monash University) & Nick Thieberger (University of Melbourne)

<br>

<section typeof='http://purl.org/ontology/bibo/Slide'>

<img src='Slide01.png' alt='The Language Data Commons of Australia (LDaCA) and Australian Text Analytics Platform (ATAP) projects received investment (https://doi.org/10.47486/DP768 and https://doi.org/10.47486/PL074) from the Australian Research Data Commons (ARDC). The ARDC is funded by the National Collaborative Research Infrastructure Strategy (NCRIS).   ARC LIEF LE210100013 (2021-2024) Nyingarn: a platform for primary sources in Australian Indigenous languages  ' title='Slide: 1' border='1'  width='85%%'/>

This work is supported by the Australian Research Data Commons.

</section>

<br>

<section typeof='http://purl.org/ontology/bibo/Slide'>

<img src='Slide02.png' alt=' With thanks for their contribution: Partner Institutions: ' title='Slide: 2' border='1'  width='85%%'/>

The Language Data Commons of Australia Data Partnerships (LDaCA) and the Australian Text Analytics Platform ({{< glossary_link display="ATAP" id="atap" >}}) are building towards a scalable and flexible language data and analytics commons. These projects will be part of the {{< glossary_link display="HASS" id="hass" >}} (Humanities and Social Sciences) and Indigenous Research Data Commons (HASS+I {{< glossary_link display="RDC" id="rdc" >}}).

The Data Commons will focus on preservation and discovery of distributed multi-modal language {{< glossary_link display="data collections" id="data-collection" >}} under a variety of governance frameworks. This will include access control that reflects ethical constraints and {{< glossary_link display="intellectual property" id="intellectual-property" >}} rights, including those of Aboriginal and Torres Strait Islander, migrant and Pacific communities.

The platform will provide workbench services to support computational research, starting with code-notebooks with no-code research {{< glossary_link display="tools" id="tools" >}} provided in later phases. Research artefacts such as code and derived data will be made available as fully documented research objects that are re-runnable and rigorously described. Metrics to demonstrate the impact of the platform are projected to include usage statistics, data and article citations. These projects are led by Professor Michael Haugh of the School of Languages and Cultures at the University of Queensland with several partner institutions.

We would like to acknowledge the traditional custodians of the lands on which we live and work and the importance of Indigenous knowledge, culture and language to these projects. Peter Sefton lives and works on Wiradjuri land, and for Nick Thieberger and Simon Musgrave, it's the land of the Kulin nation.

</section>

<br>

<section typeof='http://purl.org/ontology/bibo/Slide'>

<img src='Slide03.png' alt='Pacific and Regional Archive for Digital Sources in Endangered Cultures ({{< glossary_link display="PARADISEC" id="paradisec" >}}) Established 2003 Researchers concerned to digitise, preserve, and make accessible recordings in the many languages of the region around Australia No other agency taking responsibility for these recordings so they were at risk of loss Catalog exposes the existence of these recordings, 38,000 items in 690 collections Currently represent 1,350 languages, in 205 terabytes, with over 16,000 hours of audio recordings, 3,000 hours of video ' title='Slide: 3' border='1'  width='85%%'/>

{{< glossary_link display="PARADISEC" id="paradisec" >}} is an online archive of cultural data which has been maintained for twenty years, in this presentation, we will look at some of the lessons learned from {{< glossary_link display="PARADISEC" id="paradisec" >}}. In summary – the {{< glossary_link display="PARADISEC" id="paradisec" >}} approach to simple data and metadata storage is something we want to continue in {{< glossary_link display="LDaCA" id="ldaca" >}}, while the high cost for {{< glossary_link display="PARADISEC" id="paradisec" >}} of commissioning and maintaining its own software stack is something we want to address by taking a more standards-based approach to managing language and other data over the coming decades.

</section>

<br>

<section typeof='http://purl.org/ontology/bibo/Slide'>

<img src='Slide04.png' alt='  ' title='Slide: 4' border='1'  width='85%%'/>

The {{< glossary_link display="Arkisto" id="arkisto" >}} platform started in 2019 as a way to capture the lessons of {{< glossary_link display="PARADISEC" id="paradisec" >}} and other projects such as Alveo (another language data project similar in scope to LDaCA) which was presented at OR 2014: Sefton PM, Estival D, Cassidy S, Burnham D, Berghold J. The Human Communication Science Virtual Lab (HCS vLab): A repository microclimate in a rapidly evolving research-ecosystem. In: Open Repositories 2014. Helsinki; 2014 [cited 2016 Jul 19]. Available from: http://www.doria.fi/handle/10024/97740

</section>

<br>

<section typeof='http://purl.org/ontology/bibo/Slide'>

<img src='Slide05.png' alt='  ' title='Slide: 5' border='1'  width='85%%'/>

This diagram was used in the bid documents that established LDaCA - it shows the progression of data from end-of-life projects and active repositories into a standards-based data-commons.

</section>

<br>

<section typeof='http://purl.org/ontology/bibo/Slide'>

<img src='Slide06.png' alt='  ' title='Slide: 6' border='1'  width='85%%'/>

This is the data triage process we have been going through in LDaCA — and it should be noted that of all the data we are presented with, most of it needs to be reworked into the {{< glossary_link display="Arkisto" id="arkisto" >}} Standards Stack. Even {{< glossary_link display="PARADISEC" id="paradisec" >}} which in 2019 received the international [Core Trust Seal](https://www.coretrustseal.org/why-certification/certified-repositories/) based on the [DSA-WDS Core Trustworthy Data Repositories Requirements](http://www.coretrustseal.org/requirements/) is still in the process of migrating data to more sustainable formats.

</section>

<br>

<section typeof='http://purl.org/ontology/bibo/Slide'>

<img src='Slide07.png' alt='  ' title='Slide: 7' border='1'  width='85%%'/>

This is a taster of what data looks like in the kids of repositories we are talking about. This site contains harvested metadata about holdings on Australian Indigenous Languages in University of Queensland Libraries.

</section>

<br>

<section typeof='http://purl.org/ontology/bibo/Slide'>

<img src='Slide08.png' alt='' title='Slide: 8' border='1'  width='85%%'/>

The LDaCA services we are building use an {{< glossary_link display="API" id="api" >}} to drive the data portals. The {{< glossary_link display="API" id="api" >}} can be used for direct access with appropriate access control – see [another eResearch presentation](../fair-care-eresearch-2022) which explains this in detail. These screenshots show code notebooks running in {{< glossary_link display="BinderHub" id="binderhub" >}} on the Nectar cloud accessing language resources.

This work has also been [written up](https://digital.library.unt.edu/ark:/67531/metadc2114304/) for the _2nd International Workshop on Digital Language Archives (LangArc 2023) virtual workshop on digital language archives_ 2023-06-30.

</section>

<br>

<section typeof='http://purl.org/ontology/bibo/Slide'>

<img src='Slide09.png' alt='  ' title='Slide: 9' border='1'  width='85%%'/>

This is the overall architecture for data storage and delivery — missing is how data gets into to the repository, but we’ll come to that later.

</section>

<br>

<section typeof='http://purl.org/ontology/bibo/Slide'>

<img src='Slide10.png' alt='  ' title='Slide: 10' border='1'  width='85%%'/>

At this point, I will introduce one of the themes of this talk. In March this year, [this blog post was published](https://bibwild.wordpress.com/2023/03/21/ocfl-and-source-of-truth-two-options/) - looking at the pros and cons of using {{< glossary_link display="OCFL" id="ocfl" >}} (the Oxford Common File Layout) as the “source of truth” for a system (say a repository).

We are very much taking the {{< glossary_link display="OCFL" id="ocfl" >}} (that is file-in-storage-as-the-source-of-truth) approach in LDaCA. Which begs the question: “But doesn’t that mean that it’s very specific to language data?” No, because we’re using a very flexible, extensible, discipline-neutral format for data description – yes, we have ways to specialise metadata and interfaces to language and other cultural metadata, but NO, the systems are not locked-in to that mode of operation. This means we should be able to share development and maintenance more broadly than with a single archive.

Two main points we want to get across in this presentation:

- We are taking seriously the idea that data-in-storage should be “batteries included” – everything needed to preserve and use the data is stored together and systems can be reconstituted from this storage.
- This approach IS generic – different vocabularies/schemas can be plugged in by design.

</section>

<br>

<section typeof='http://purl.org/ontology/bibo/Slide'>

<img src='Slide11.png' alt='📂  🔬 🔭 📹 💽 🖥️ ⚙️🎼🌡️🔮🎙️🔍🌏📡💉🏥💊🌪️ ' title='Slide: 11' border='1'  width='85%%'/>

So let's now start looking at the standards involved in the {{< glossary_link display="Arkisto" id="arkisto" >}} approach. This is a slide from “What is RO-Crate” – The dataset may contain any kind of data resource about anything, in any format as a file or URL

Stian Soiland-Reyes, Peter Sefton, Mercè Crosas, Leyla Jael Castro, Frederik Coppens, José M. Fernández, Daniel Garijo, Björn Grüning, Marco La Rosa, Simone Leo, Eoghan Ó Carragáin, Marc Portier, Ana Trisovic, RO-Crate Community, Paul Groth, Carole Goble (2022): Packaging research artefacts with RO-Crate.Data Science 5(2)https://doi.org/10.3233/DS-210053

</section>

<br>

<section typeof='http://purl.org/ontology/bibo/Slide'>

<img src='Slide12.png' alt='  ' title='Slide: 12' border='1'  width='85%%'/>

The core standard for this work is {{< glossary_link display="RO-Crate" id="ro-crate" >}} (Research Object Crate) in which all data is input, stored and output. This a big step for eresearch systems – no longer is there a transformation step on {{< glossary_link display="data onboarding" id="data-onboarding" >}} (we used the term ingest, but some project members and partners found the metaphor distasteful).

</section>

<br>

<section typeof='http://purl.org/ontology/bibo/Slide'>

<img src='Slide13.png' alt='  Here the mechanism is to use the ‘magic’ name METS.xml to store some extra metadata – with a fully linked-data system this kind of thing is not needed ' title='Slide: 13' border='1'  width='85%%'/>

This screenshot is a bit of (undated) DSpace documentation found following a tip from Kim Sheppard – we have included it here to illustrate that storing additional metadata (in this case METS) for an object was done by convention. Using a linked-data system means that we no longer have to do this kind of thing – there’s still one magic file name in {{< glossary_link display="RO-Crate" id="ro-crate" >}} but it’s only one for the metadata and one for the HTML preview – everything else is labelled and extensible.

</section>

<br>

<section typeof='http://purl.org/ontology/bibo/Slide'>

<img src='Slide14.png' alt='Using this core layer gives you interoperability with generic tools and general purpose “Who What Where” metadata ' title='Slide: 14' border='1'  width='85%%'/>

In the early days of the “Open Repositories” movement repositories had Dublin Core metadata (a standard with a few different flavours).

</section>

<br>

<section typeof='http://purl.org/ontology/bibo/Slide'>

<img src='Slide15.png' alt=' Using a domain-specific profile extends the core RO-Crate for a specific type of data – e.g. language data, computational workflows or “cultural collections”  (You can use more than one profile) ' title='Slide: 15' border='1'  width='85%%'/>

These days using linked data it is no longer necessary to have a bevy of {{< glossary_link display="XML" id="xml" >}} schemas with incompatible encodings to store data from different schemas, different vocabularies and ontologies can co-exist and be expressed in a common way.

</section>

<br>

<section typeof='http://purl.org/ontology/bibo/Slide'>

<img src='Slide16.png' alt='' title='Slide: 16' border='1'  width='85%%'/>

In the {{< glossary_link display="PARADISEC" id="paradisec" >}} system, this is achieved by storing files on disk in a simple hierarchy - with metadata and other resources stored together in a directory - this scheme allows for hands-on management of data resources, independently of the software used to serve them.

This approach means that if the {{< glossary_link display="PARADISEC" id="paradisec" >}} software-stack becomes un-maintainable for financial or technical reasons the important resources, the data, are stored safely on disk with their metadata and a new access portal could be constructed relatively easily.

Despite the valuable features of this solution, it is not generalisable. The metadata.xml is custom to {{< glossary_link display="PARADISEC" id="paradisec" >}}, as is the software stack.

In 2019 {{< glossary_link display="PARADISEC" id="paradisec" >}} and the eResearch team at UTS received small grants from the Australian National Data Service and began collaborating on an approach to managing archival repositories which built on this {{< glossary_link display="PARADISEC" id="paradisec" >}} approach of storing metadata with data.

The UTS team presented on this at [eResearch Australasia 2019](https://ptsefton.com/2019/11/05/FAIR%20Repo%20-%20eResearch%20Presentation/index.html)

</section>

<br>

<section typeof='http://purl.org/ontology/bibo/Slide'>

<img src='Slide17.png' alt='  ' title='Slide: 17' border='1'  width='85%%'/>

The [structure of an RO-Crate](https://www.researchobject.org/ro-crate/1.1/structure.html) is very similar to the {{< glossary_link display="PARADISEC" id="paradisec" >}} example above, but with a {{< glossary_link display="JSON" id="json" >}} file instead of {{< glossary_link display="XML" id="xml" >}}, and an optional preview in HTML.

{{< glossary_link display="RO-Crate" id="ro-crate" >}} has a growing number of [tools and software libraries](https://www.researchobject.org/ro-crate/tools/) which means that a team such as {{< glossary_link display="PARADISEC" id="paradisec" >}} does not have to maintain their own bespoke software.

</section>

<br>

<section typeof='http://purl.org/ontology/bibo/Slide'>

<img src='Slide18.png' alt='  ' title='Slide: 18' border='1'  width='85%%'/>

Here, for comparison is [how Fedora 6 would store an object (an Atomic Resource in Fedora-speak) like this with multiple files](https://wiki.lyrasis.org/display/FEDORA6x/Fedora+OCFL+Object+Structure#FedoraOCFLObjectStructure-FedoraAtomicResource-Container). Like {{< glossary_link display="RO-Crate" id="ro-crate" >}} this uses linked-data but in this case, split up into multiple files containing RDF triples. (This is similar to the pre-RO-Crate approach taken by the Research Object spec).

This also shows some of what an {{< glossary_link display="OCFL" id="ocfl" >}} repository looks like – this is an {{< glossary_link display="OCFL" id="ocfl" >}} object with a single version.

</section>

<br>

<section typeof='http://purl.org/ontology/bibo/Slide'>

<img src='Slide19.png' alt=' This is an RO-Crate Object which is stored as an OCFL Object ' title='Slide: 19' border='1'  width='85%%'/>

This screenshot shows an example of an {{< glossary_link display="Arkisto" id="arkisto" >}}-style use of {{< glossary_link display="OCFL" id="ocfl" >}} (all of the metadata is stored in the ro-crate-metadata.json rather than spread out as in Fedora).

</section>

<br>

<section typeof='http://purl.org/ontology/bibo/Slide'>

<img src='Slide20.png' alt='  ' title='Slide: 20' border='1'  width='85%%'/>

Now we come to the second core standard in our stack the [Oxford Common File Layout](https://ocfl.io) – which is something we found out about via OpenRepositories – I couldn’t make the presentation, but I got a corridor briefing on this from Neil Jeffries in Bozeman at OR 2018.

</section>

<br>

<section typeof='http://purl.org/ontology/bibo/Slide'>

<img src='Slide21.png' alt='  ' title='Slide: 21' border='1'  width='85%%'/>

This slide shows the interface between our core standards – a compliant {{< glossary_link display="OCFL" id="ocfl" >}} repository has Objects within it that conform to the {{< glossary_link display="RO-Crate" id="ro-crate" >}} specification.

</section>

<br>

<section typeof='http://purl.org/ontology/bibo/Slide'>

<img src='Slide22.png' alt='  ' title='Slide: 22' border='1'  width='85%%'/>

This slide illustrates the flexibility of the approach we’re taking. As LDaCA is a national project, our archival repositories and those of our partners such as {{< glossary_link display="PARADISEC" id="paradisec" >}} will be distributed with differences of governance, varying by organisation, language type and discipline, though there is still a desire to be able to aggregate data into services that make it findable.

</section>

<br>

<section typeof='http://purl.org/ontology/bibo/Slide'>

<img src='Slide23.png' alt='  S3-Style Object store Plain Old File Store ' title='Slide: 23' border='1'  width='85%%'/>

The storage services may not all be the same in this model, some may be file systems, some may be object stores, and they may be hosted by and governed by a variety of organizations.

</section>

<br>

<section typeof='http://purl.org/ontology/bibo/Slide'>

<img src='Slide24.png' alt='  ' title='Slide: 24' border='1'  width='85%%'/>

This slide shows how we have abstracted the “A” for Access in {{< glossary_link display="FAIR" id="fair" >}} out of the repository and into a separate centralised or at least _concentrated_ system. We have a [full write-up of this approach from the 2022 eResearch Australasia conference](../fair-care-eresearch-2022/) and we don’t have time to go through it in detail here, but in summary:

- Every object in the repository has a Data Reuse License with some management metadata.
- Each repository only needs an authoritative list of licenses and trusted license management systems to be able to serve the data.
- License management is handled by a dedicated system that can deal with application and invitation workflows to grant licenses (including simple self-serve click-through license agreements)

Note that our work is also informed by the {{< glossary_link display="CARE" id="care" >}} principles for Indigenous Data Governance (Collective benefit, Authority to control, Responsibility, Ethics) which frame the way {{< glossary_link display="FAIR" id="fair" >}} protocols are implemented. Again, see the [LangArc workshop write-up](https://digital.library.unt.edu/ark:/67531/metadc2114304/).

</section>

<br>

<section typeof='http://purl.org/ontology/bibo/Slide'>

<img src='Slide25.png' alt='  Ok but how does the data get there? ' title='Slide: 25' border='1'  width='85%%'/>

Let’s revisit this diagram. What’s missing?

</section>

<br>

<section typeof='http://purl.org/ontology/bibo/Slide'>

<img src='Slide26.png' alt='  ' title='Slide: 26' border='1'  width='85%%'/>

In the first phase of the LDaCA project, work focused on batch import of data using tools to convert {{< glossary_link display="collections" id="collection" >}} – this approach was used on contemporary collections as well as for “rescuing” collections from older repository systems.

</section>

<br>

<section typeof='http://purl.org/ontology/bibo/Slide'>

<img src='Slide27.png' alt=' {      &quot;@id&quot;: &quot;https://github.com/Language-Research-Technology/corpus-tools-ro-crate&quot;,      &quot;@type&quot;: &quot;SoftwareSourceCode&quot;,      &quot;name&quot;: &quot;https://github.com/Language-Research-Technology/corpus-tools-ro-crate&quot;,      &quot;description&quot;: &quot;Converts an RO-Crate to an LDaCA OCFL collection as long as the crate has repository Objects and Collections that are members of a RepositoryCollection in the root dataset&quot;,      &quot;programmingLanguage&quot;: {        &quot;@id&quot;: &quot;https://en.wikipedia.org/wiki/Node.js&quot;      }    },    {      &quot;@id&quot;: &quot;#provenance&quot;,      &quot;name&quot;: &quot;Created RO-Crate using corpus-tools-ro-crate&quot;,      &quot;@type&quot;: &quot;CreateAction&quot;,      &quot;instrument&quot;: {        &quot;@id&quot;: &quot;https://github.com/Language-Research-Technology/corpus-tools-ro-crate&quot;      },      &quot;result&quot;: {        &quot;@id&quot;: &quot;ro-crate-metadata.json&quot;      }    } The act of creation of this metadata is documented ' title='Slide: 27' border='1'  width='85%%'/>

This slide shows some JSON-LD metadata that describes the way this {{< glossary_link display="RO-Crate" id="ro-crate" >}} metadata was created – illustrating how {{< glossary_link display="RO-Crate" id="ro-crate" >}} can be used to record {{< glossary_link display="provenance" id="provenance" >}}.

(UPDATE: I didn't explain [JSON-LD](https://json-ld.org/) properly during the presentation. JSON-LD is a method of encoding linked-data (which can be quite esoteric and unapproachable) in {{< glossary_link display="JSON" id="json" >}} a method of describing data in simple text, which is widely used and understood by programmers.)

</section>

<br>

<section typeof='http://purl.org/ontology/bibo/Slide'>

<img src='Slide28.png' alt=' ' title='Slide: 28' border='1'  width='85%%'/>

This part of the architecture we are working on now…

</section>

<br>

<section typeof='http://purl.org/ontology/bibo/Slide'>

<img src='Slide29.png' alt='' title='Slide: 29' border='1'  width='85%%'/>

Here we see the {{< glossary_link display="Crate-O" id="crate-o" >}} metadata tool (which is a zero-install web application that runs in Chrome and other browsers that support the new FilesystemAPI) being used to add an Organization as the Affiliation for a Person entity. Having imported this "Context Entity" (that's the {{< glossary_link display="RO-Crate" id="ro-crate" >}} term) it can then be re-used within the crate which we see here as the schema.org `publisher` property is linked to the same organization.

(At this stage {{< glossary_link display="Crate-O" id="crate-o" >}} is still to be connected to the repository stack - that will happen in the second half of 2023)

</section>

<br>

<section typeof='http://purl.org/ontology/bibo/Slide'>

<img src='Slide30.png' alt='  ' title='Slide: 30' border='1'  width='85%%'/>

We hope to work with other editor projects (e.g. [Describo](https://describo.github.io/#/)) to make editor profiles as compatible as possible.

</section>

<br>

<section typeof='http://purl.org/ontology/bibo/Slide'>

<img src='Slide31.png' alt='  ' title='Slide: 31' border='1'  width='85%%'/>

The next few slides show some examples of our approach implemented in a variety of contexts.

Here’s another repository that uses {{< glossary_link display="RO-Crate" id="ro-crate" >}} metadata (from the Language Data Commons of Australia/Australian Text Analytics Platform) – here users can launch a {{< glossary_link display="Jupyter notebook" id="jupyter-notebook" >}} containing {{< glossary_link display="Python" id="python" >}} code (and explanatory text) that processes a dataset.

</section>

<br>

<section typeof='http://purl.org/ontology/bibo/Slide'>

<img src='Slide32.png' alt=' SCREENSHOT OF NOTEBOOK  ' title='Slide: 32' border='1'  width='85%%'/>

This is a screenshot of a {{< glossary_link display="Jupyter notebook" id="jupyter-notebook" >}} that can process data from a repository via its {{< glossary_link display="API" id="api" >}}.

</section>

<br>

<section typeof='http://purl.org/ontology/bibo/Slide'>

<img src='Slide33.png' alt='  ' title='Slide: 33' border='1'  width='85%%'/>

This slide shows the {{< glossary_link display="Arkisto" id="arkisto" >}} stack powering the University of Technology Sydney’s Research Data Repository.

</section>

<br>

<section typeof='http://purl.org/ontology/bibo/Slide'>

<img src='Slide34.png' alt='  ' title='Slide: 34' border='1'  width='85%%'/>

This page shows some screenshots of an internal-only application at UTS which gives academic staff access to successful research grant proposals – the data are stored in the same kind of {{< glossary_link display="Arkisto" id="arkisto" >}} standards-based storage stack as we have presented here – with an interface that is tuned for this use case, with some custom access control to make sure that staff are _very_ aware that these are sensitive and confidential documents.

</section>

<br>

<section typeof='http://purl.org/ontology/bibo/Slide'>

<img src='Slide35.png' alt='  ' title='Slide: 35' border='1'  width='85%%'/>

This is a screenshot of data from a history project [Expert Nation](https://expertnation.org/) exported to {{< glossary_link display="RO-Crate" id="ro-crate" >}} format and [put online to support a book](https://expertnation.research.uts.edu.au/).

</section>

<br>

<section typeof='http://purl.org/ontology/bibo/Slide'>

<img src='Slide36.png' alt='  Want to join us? Your project here?  Get in touch… ' title='Slide: 36' border='1'  width='85%%'/>

In conclusion, we have given a quick tour of a standards-based repository stack (loosely called {{< glossary_link display="Arkisto" id="arkisto" >}}) and illustrated it with current work at the Language Data Commons of Australia and {{< glossary_link display="PARADISEC" id="paradisec" >}} projects, but along the way have tried to emphasise that this is generic, re-usable architecture – and is based on standards. By using an extensible metadata standard with a growing community, and a storage-layer standard forged from an acquired aversion to systems migration we aim to reduce the risk to very important cultural data by working with as many communities as possible on software tools, so that we reduce cost and risk for all of us.

</section>

<br>
