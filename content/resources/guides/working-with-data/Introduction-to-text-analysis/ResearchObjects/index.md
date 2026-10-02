---
title: "Research Objects"
date: 2016-04-16T13:09:22+10:00
description: "Part 3 of the introduction to text analysis guide. It introduces Research Objects. "
image: "/resources/guides/working-with-data/Introduction-to-text-analysis/ResearchObjects/ro-crate.png"
layout: doc
---

<figure>
    <img src="./ro-crate.png" Alt="RO-Crate example" Title="RO-Crate example" Ref="LDaCA" />
    <figcaption>RO-Crate example</figcaption>
</figure>
Research objects are a single package that collects the data, code and other resources used in a piece of research and allows it to be a cite-able research output in its own right. At the end of your work with LDaCA text analysis tools, there will be the automated option to package together the components of your workflow, such as

- Raw data
- Transformed data
- A record of the notebooks which you have used
- Additional scripts and codes
- Results
- Visualisations
- High quality metadata

LDaCA analysis tools will output an RO-Crate that contains these objects. An output of this kind can be assigned a unique identifier (such as a doi), and it can be published via services such as Zenodo or figshare so it can be cited in publications. This will make it easy to fulfil the increasingly common requirement of journals to make available the data that supports a publication.