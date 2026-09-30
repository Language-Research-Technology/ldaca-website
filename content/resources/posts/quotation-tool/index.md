---
title: "Introducing the Quotation Tool: Extracting quotes and entities from newspaper articles"
date: 2023-03-28
draft: false
description: "Learn more about the Quotation Tool for identifying and extracting quoted content, speakers and named entities from newspaper articles."
layout: post
type: interview
author: 'Kelvin Lee'
image: "/resources/posts/quotation-tool/quot_tool_ss2.png"
---

The Quotation Tool is a Jupyter notebook containing code that was adapted and developed (with permission) from the [GenderGapTracker](https://github.com/sfu-discourse-lab/GenderGapTracker) by the Sydney Informatics Hub ([SIH](https://www.sydney.edu.au/research/facilities/sydney-informatics-hub.html)) in collaboration with the [Sydney Corpus Lab](https://sydneycorpuslab.com/).

The quotation tool is designed to identify and extract quoted content from newspaper texts. Since the tool uses a combination of syntactic and heuristic rules to extract quotes, it is able to identify quotes whether they are marked by quoting or projecting verbs (e.g. *said*) or not.

The tool can also use [Named-Entity Recognition](https://en.wikipedia.org/wiki/Named-entity_recognition) to identify and classify the sources of these quotes and the entities within these quotes (as people, organisations, etc.). This is useful for answering a number of questions such as those related to representation of voices/sources (e.g. Who is cited the most/least? Who is not cited at all?) and those related to quoted content (e.g. What kind of information is sourced from others?).

The tool can also identify the verbs that are used to cite quotations (e.g. *say, tell, add, claim, admit*). This will be particularly useful to those interested in the variation of reporting verbs.

Once the tool has processed the files, it will display the first few identified and extracted quotes (and entities) in a table. An example of this preview table is shown in Table 1 below, which displays the identified quote along with information such as the speaker and their entity type, the entity name and type of the entities identified within the quote and the quoting/projecting verb (if there is one). The type of quote is described on the basis of the various components of the quote construction (Q = quotation mark, S = speaker, V = verb, C = content) and their linear order.

![Preview of first few identified and extracted quotes](./quot_tool_ss1.png)

#### Table 1. Preview of first few identified and extracted quotes

The tool allows you to save and download the complete table of results as an Excel worksheet (.xslx format) for further analysis.

It is also possible to preview all the identified quotes and entities in individual files. In this preview (see Figure 1 below), identified quotes and entities are presented in bold face and labelled accordingly (e.g. as quote/speaker or as a specific entity type such as PERSON, NORP, GPE – see legend to Figure 2 for abbreviations). You can download the visualisation such as the one shown in Figure 1 as an html file.

![Screenshot of preview showing identified entities and quotes](./quot_tool_ss2.png)

#### Figure 1. Screenshot of preview showing identified entities and quotes

The tool also allows you to visualise the top named entities identified in the quotes and/or the top entity types among identified speakers as bar graphs – an example is shown in Figure 2.

![Bar graph showing the top five entities identified within quotes across the whole corpus/dataset](./quot_tool_ss3.png)

#### Figure 2. Bar graph showing the top five entities identified within quotes across the whole corpus/dataset  (PERSON = People, including fictional, GPE = Countries, cities, states, NORP = Nationalities or religious or political groups, ORG = Companies, agencies, institutions, etc., LOC = Non-GPE locations, mountain ranges, bodies of water)

You can choose to visualise the top entities for the whole corpus/dataset or individual files within the corpus/dataset. Other options for the visualisation include whether to display the entity names and/or types, and the number of top entities to display (i.e. in multiples of five). You can also choose to save the graphs (based on the set parameters) as jpg files.

The tool is available on [GitHub](https://github.com/Australian-Text-Analytics-Platform/quotation-tool) where you can launch the tool on Jupyter Notebook via Binder. That instance of Binder uses CILogon authentication, and you can access it by signing in with your (Australian) institutional login credentials or Google/Microsoft/Outlook account. If you have access to software that supports Jupyter Notebooks, you can also download the notebook to use locally (i.e. without Internet connection) on your own computer.

If you have any questions, feedback, and/or comments about the tool, you can contact the SIH at [sih.info@sydney.edu.au](mailto:sih.info@sydney.edu.au).

### Acknowledgments

This Jupyter notebook and relevant python scripts were developed by the Sydney Informatics Hub (SIH) in collaboration with the Sydney Corpus Lab.

### How to cite the notebook:

If you are using this notebook in your research, please include the following citation or an appropriate variation thereof:

Jufri, Sony & Sun, Chao (2022). Quotation Tool. v1.0. Australian Text Analytics Platform. Software. https://github.com/Australian-Text-Analytics-Platform/quotation-tool

In addition, please inform [LDaCA](mailto:info@ldaca.edu.au) of publications and grant applications deriving from the use of this notebook in order to support continued funding and development.
