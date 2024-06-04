---
    title:  "Crate-O - a drop-in linked data metadata editor for RO-Crate (and other) linked data in repositories and beyond"
    date: "2024-06-04"

    slug: open-repositories-2024-crate-o
    categories: ["LDaCA"]
    tags: ["RO-Crate", "Open Repositories", "Crate-O"]
    author: Peter Sefton
    toc:
      enable: true
      auto: true
---

<a href="2024-OR-Crate-O.pdf">PDF version</a> | <a href="2024-OR-Crate-O.pptx">Powerpoint Version</a>

<section  typeof='http://purl.org/ontology/bibo/Slide' style="border:1px solid black;     margin-bottom: 100px; padding: 50px">
<img src='Slide00.png' alt='Crate-O - a drop-in linked data metadata editor for RO-Crate (and other) linked data in repositories and beyond ::  :: ' title='Slide: 0' border='1' />

# Developer Track Session 2

Time: 05 June 2024, 09:00 - 10:30 · Location: Drottningporten 2

Crate-O - A drop-in linked data metadata editor for RO-Crate (and other) linked data in repositories and beyond

Peter Sefton, Alvin Sebastian, Moises Sacal Bonequi, Rosanna Smith

University of Queensland, Australia

Research Object Crate is a metadata packaging standard which has been widely adopted over the last few years in research contexts and which debuted at Open Repositories with a workshop in 2019.

</section>

<section  typeof='http://purl.org/ontology/bibo/Slide' style="border:1px solid black;     margin-bottom: 100px; padding: 50px">
<img src='Slide01.png' alt=' ::  :: ' title='Slide: 1' border='1' />

Crate-O is an editor for the RO-Crate Metadata Specification.

RO-Crate has been presented here at Open Repositories for the last few years, and is now starting to be incorporated into many research repository solutions (though they are not always called repositories).

</section>

<section  typeof='http://purl.org/ontology/bibo/Slide' style="border:1px solid black;     margin-bottom: 100px; padding: 50px">
<img src='Slide02.png' alt='Five ways RO-Crate data packages are important for repositories :: Peter Sefton*, Stian Soiland-Reyes** ::  :: *University of Queensland, Australia; **The University of Manchester, UK ::  ::  :: Time: 05/June/2024: 11:00 - 12:30 · Location: Drottningporten 1 :: ' title='Slide: 2' border='1' />

I am presenting in the next session on why RO-Crate is important for repositories.

# Five ways RO-Crate data packages are important for repositories

Time: 05 June 2024, 11:00 - 12:30 · Location: Drottningporten 1

Peter Sefton\*, Stian Soiland-Reyes\*\*

\*University of Queensland, Australia; \*\*The University of Manchester, UK

Research Object Crate is a linked data metadata packaging standard which has been widely adopted in research contexts. In this presentation, we will briefly explain what RO-Crate is, how it is being adopted worldwide, then go on to list ways that RO-Crate is growing in importance in the repository world:

- Uploading of complex multi-file objects means RO-Crate is compatible with any general-purpose repository that can accept a zip file (with some coding, repository services can do more with RO-Crates)

- Download for well-described data objects complete with metadata from a repository rather than just a zip or file with no metadata

- Using RO-Crate metadata reduces the amount of customisation that is required in repository software, as ALL the metadata is described using the same simple, self-documenting linked-data structures, so generic display templates

- Sufficiently well-described RO-Crates can be used to make data FAIR compliant, aiding in Findability, Accessibility, Interoperability and Reusability thanks to standardised metadata and mature tooling

- And if you’re looking for a sustainable repository solution, there are tools which can run a repository from a set of static files on a storage service, in line with the ideas put forward by Suleman in the closing keynote for OR2023.

</section>

<section  typeof='http://purl.org/ontology/bibo/Slide' style="border:1px solid black;     margin-bottom: 100px; padding: 50px">
<img src='Slide03.png' alt='The Language Data Commons of Australia Data Partnerships (LDaCA-DP), Language Data Commons of Australia Research Data Commons (LDaCA-RDC), and Australian Text Analytics Platform (ATAP) projects received investment (https://doi.org/10.47486/DP768, https://doi.org/10.47486/HIR001, &amp; https://doi.org/10.47486/PL074)  :: from the Australian Research Data Commons (ARDC).  ::  :: The ARDC is funded by the National Collaborative Research Infrastructure Strategy (NCRIS). :: ' title='Slide: 3' border='1' />

The Language Data Commons of Australia Data Partnerships (LDaCA-DP), Language Data Commons of Australia Research Data Commons (LDaCA-RDC), and Australian Text Analytics Platform (ATAP) projects received investment (https://doi.org/10.47486/DP768, https://doi.org/10.47486/HIR001, & https://doi.org/10.47486/PL074)
from the Australian Research Data Commons (ARDC).

The ARDC is funded by the National Collaborative Research Infrastructure Strategy (NCRIS).

</section>

<section  typeof='http://purl.org/ontology/bibo/Slide' style="border:1px solid black;     margin-bottom: 100px; padding: 50px">
<img src='Slide04.png' alt=' :: Start describing your research  :: TODAY! :: ' title='Slide: 4' border='1' />

A version of the Crate-O component is available as a playground for Chrome browsers only. This allows you to describe your local folders in your computer and generate an RO-Crate.

</section>

<section  typeof='http://purl.org/ontology/bibo/Slide' style="border:1px solid black;     margin-bottom: 100px; padding: 50px">
<img src='Slide05.png' alt=' ::  :: ' title='Slide: 5' border='1' />

https://github.com/Language-Research-Technology/ro-crate-modes/blob/main/docs/soss-profiles.md

A Schema.org style Schema (SOSS) specifies a metadata vocabulary of Classes and Properties, based on the RO-Crate specification's use of Schema.org classes.
An RO-Crate Profile has (at least) a document that explains how metadata entities from the Schema are used for a particular purpose.
An RO-Crate Mode is a set of lightweight syntactic rules for combining SOSS Classes, Properties and DefinedTerms, expressed in a JSON file.

</section>

<section  typeof='http://purl.org/ontology/bibo/Slide' style="border:1px solid black;     margin-bottom: 100px; padding: 50px">
<img src='Slide06.png' alt='&quot;classes&quot;: { ::     &quot;Dataset&quot;: { ::       &quot;id&quot;: &quot;http://schema.org/Dataset&quot;, ::       &quot;subClassOf&quot;: [], ::       &quot;inputs&quot;: [ ::         { ::           &quot;id&quot;: &quot;http://schema.org/isAccessibleForFree&quot;, ::           &quot;name&quot;: &quot;isAccessibleForFree&quot;, ::           &quot;help&quot;: &quot;This is available under an Open Access license.&quot;, ::           &quot;required&quot;: false, ::           &quot;multiple&quot;: false, ::           &quot;type&quot;: [ ::             &quot;Boolean&quot; ::           ] ::         }, ::        … :: { ::   &quot;metadata&quot;: { ::     &quot;name&quot;: &quot;Language Data Commons top-level Collection (corpus)&quot;, ::     &quot;description&quot;: &quot;Implements the language data commons RO-Crate Metadata Profile for top-level collection.&quot;, ::     &quot;version&quot;: 0.3, ::     &quot;author&quot;: &quot;University of Queensland&quot;, ::     &quot;license&quot;: &quot;GPL-3.0&quot; ::   }, ::  &quot;conformsToUri&quot;: [ ::    &quot;https://w3id.org/ldac/profile#Collection&quot; ::  ], :: Modes ::  :: ' title='Slide: 6' border='1' />

Crate-O RO-Crate Editor Mode Files are editor configurations that implement RO-Crate Metadata Profiles.

The configuration files are intended to form the basis of an approach for describing RO-Crate editor behaviour and can be used for RO-Crate validation.

Initial versions of this work were based on the Describo Profiles (which vary between versions of Describo) used to configure the Describo family of RO-Crate editing tools, currently maintained by Marco La Rosa.

</section>

<section  typeof='http://purl.org/ontology/bibo/Slide' style="border:1px solid black;     margin-bottom: 100px; padding: 50px">
<img src='Slide07.png' alt='Embed Crate-O in your own Vue app :: Functionalities include everything Crate-O can do except anything to do with file handling (load/save crate, read files, manage profiles, etc.) :: Published in NPM, just do npm install and import the component in your Vue app :: As a component, it should run in any modern web browser :: Crate-O is developed with Vue 3 framework and exposes the Vue component CrateEditor that can be imported as a library by any Vue app. ::  :: CrateEditor UI part :: ' title='Slide: 7' border='1' />

Crate-O is a single-page front-end web app developed using the Vue Javascript framework. Vue app is built by composing and nesting modular structures called components.

The main part Crate-O is then bundled in the CrateEditor component (highlighted in red) that allows a user to view, add, edit and delete properties of an entity, add and delete entities, and navigate and browse all entities in the crate.

The CrateEditor component is exported as EMAScript Module and can be imported into any Vue web app by adding Crate-O as dependency.

The default main app (for showcasing) only runs in Chrome-based browsers because it requires the `showDirectoryPicker` method from File System API to access (read/write) a directory on a local machine. The feature is still experimental and only available in Chrome-based browsers. However, the CrateEditor component itself does not require that feature.

</section>

<section  typeof='http://purl.org/ontology/bibo/Slide' style="border:1px solid black;     margin-bottom: 100px; padding: 50px">
<img src='Slide08.png' alt='Embed Crate-O in your own Vue app ::  :: ' title='Slide: 8' border='1' />

This slide illustrates the very basic example of embedding Crate-O CrateEditor in any Vue app.

The example shows a Vue Single-File Component (SFC) (\*.vue)

- Inside the &lt; import the CrateEditor component from the Crate-O package

- Initialise all required variables

- Add the &lt;crate-editor> tag inside the &lt;template> and pass in the data via the attributes:

- crate: a plain js object in json-ld format, usually is the result of JSON.parse() of the string content of ro-crate-metadata.json file

- mode: a plain js object conforming to the ro-crate-mode syntax

</section>

<section  typeof='http://purl.org/ontology/bibo/Slide' style="border:1px solid black;     margin-bottom: 100px; padding: 50px">
<img src='Slide09.png' alt='' title='Slide: 9' border='1' />

Data can be imported into Crate-O using spreadsheets - this is an efficient way to create metadata for collections of objects. Spreadsheet skills are common and many projects have already been described using spreadsheets to describe and manage files, we work with data custodians to standardize their approach to this so that they can create rich linked-data metadata.

</section>

<section  typeof='http://purl.org/ontology/bibo/Slide' style="border:1px solid black;     margin-bottom: 100px; padding: 50px">
<img src='Slide10.png' alt=' :: ' title='Slide: 10' border='1' />

Crate-O can be found here https://github.com/Language-Research-Technology/crate-o

</section>
