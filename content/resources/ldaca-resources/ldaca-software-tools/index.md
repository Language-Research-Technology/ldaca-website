---
title: "LDaCA Software Tools"
date: 2023-11-22T14:51:49+11:00
draft: false
description: "A variety of LDaCA open-source tools available on GitHub."
---

<br>

A variety of {{< glossary_link display="LDaCA" id="ldaca" >}} open-source tools are available at our [GitHub organisation](https://github.com/Language-Research-Technology/ocfl-js). Highlights include:

<br>

## Metadata Editor

[Crate-O](https://language-research-technology.github.io/crate-o/#/): A tool that allows you to create and update Research Object Crates ({{< glossary_link display="RO-Crates" id="ro-crate" >}}) using a web interface, and with {{< glossary_link display="metadata" id="metadata" >}} spreadsheets. It provides researchers with a relatively simple way to describe their data using the best practices in formal metadata description.

For more information about Crate-O and how to create RO-Crates with the interface, see the [Crate-O User Guide](/resources/user-guides/crate-o).

<br>

## Data Storage

[OCFL-js](https://github.com/Language-Research-Technology/ocfl-js), a library that implements the Oxford Common File Layout ([OCFL](https://ocfl.io/)): A specification for laying out digital collections on file or object storage. It is designed with long-term preservation principles in mind and does not rely on specialised software. Amongst the benefits of using {{< glossary_link display="OCFL" id="ocfl" >}} with {{< glossary_link display="RO-Crate" id="ro-crate" >}} {{< glossary_link display="objects" id="object" >}} are:

- completeness: a repository can be re-indexed from the files it stores
- versioning: repositories can make changes to objects and still allow their history to persist

<br>

## Data Portal and Access API

[Oni](https://github.com/Language-Research-Technology/oni): A web application that provides indexing, searching and access to secure data repositories following the {{< glossary_link display="Arkisto" id="arkisto" >}} model. This is used to build the [LDaCA Portal](https://data.ldaca.edu.au/search): The online interface of the Language Data Commons of Australia where users can discover and access language collections.

<br>

## Tools developed in the project

### Sydney Informatics Hub / Sydney Corpus Lab

- [Document Similarity](https://github.com/Australian-Text-Analytics-Platform/document-similarity): A tool that identifies identical and similar text in a corpus.
- [Quotation Tool](https://github.com/Australian-Text-Analytics-Platform/quotation-tool): A tool to extract quotes and other useful information from a newspaper article/corpus. 
- [Semantic Tagger](https://github.com/Australian-Text-Analytics-Platform/semantic-tagger): A tool used to tag a text/corpus so you can extract token level semantic tags from the tagged texts.
- [Keywords Analysis](https://github.com/Australian-Text-Analytics-Platform/keywords-analysis): A tool to analyse words in a collection of corpora and identify whether certain words are over or under-represented in a particular corpus.
- [Discursis](https://github.com/Australian-Text-Analytics-Platform/discursis): A conversational analysis and visualisation tool.
- [Concordancer](https://github.com/Australian-Text-Analytics-Platform/atap_widgets): A concordancing tool that demos how to analyse turn-taking pairs in a concordancer. 

### University of Queensland

- [Image Dataset Explorer](https://github.com/Language-Research-Technology/image-dataset-explorer): A tool that embeds images from a zip file using off the shelf image embeddings, then creates a static HTML visualisation for browsing/exploring clusters and relations.
#### Language Technology & Data Analysis Laboratory (LADAL) Tools
- [Shiny Tools](https://ladal.edu.au/tools.html#shiny-tools)
    - **FileRenamer**: Batch rename plain-text files
    - **TextCleaner**: Remove and replace text elements with regex
    - **POSTagger**: Part-of-speech tagging & dependency parsing in 65+ languages
    - **WordFinder**: Keyword-in-context concordancing
    - **KeywordExtractor**: Keyness analysis vs. a reference corpus
    - **WordWebber**: Word co-occurrence network visualisation
    - **SentimentExplorer**: NRC word-emotion sentiment analysis
    - **CollocationCalculator**: Collocation association measures
    - **TopicDetector**: Unsupervised & seeded LDA topic modelling
- [Jupyter Notebook Tools](https://ladal.edu.au/tools.html#jupyter-tools)
    - **Concordance Explorer**: KWIC concordances — find any word or phrase in context
    - **Text Cleaner**: Remove or replace words, tags, URLs, and patterns
    - **Part-of-Speech Tagger**: POS tagging and dependency parsing in 65+ languages
    - **Collocation Analyser**: Association measures showing which words attract each other
    - **Keyword Finder**: Over- and under-represented words vs. a reference corpus
    - **Network Visualiser**: Network graphs from structured edge-list data
    - **Topic Explorer**: LDA topic discovery across text collections
    - **Sentiment Explorer**: Polarity scoring and eight basic emotion categories (NRC lexicon)

### Australian National University

- [ELAN Replacer](https://github.com/Supertyp/ELAN_apps): A tool that enables context dependent search and replace functionality across a folder of ELAN files.
- [ELAN Annotation Splitter](https://github.com/Supertyp/ELAN_apps): A tool that can split ELAN annotations.
- [ELAN Inventory](https://www.gerlingo.com/config_maker.html): A web application that summarises ELAN files and compiles configuration files to create an [ANNIS](https://corpus-tools.org/annis/) corpus.
- [ELAN Commander](https://www.gerlingo.com/ELAN_commander.html): A web application that finds unwanted characters in ELAN annotations.
- [Anonymising ELAN Files](https://github.com/Supertyp/Anonymising_ELAN_files): A tool that anonymises the content of ELAN files.
- [ELAN Audio Segmentation](https://github.com/Supertyp/ELAN_apps): A tool which takes an audio or video file as input and creates a ELAN file with empty annotations wherever a voice is heard in the audio

### University of Melbourne

- [Lameta](https://lameta.org): Added RO-Crate output option for this metadata tool.

<br>
