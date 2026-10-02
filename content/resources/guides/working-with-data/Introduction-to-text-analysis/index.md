---
title: "Introduction to text analysis"
date: 2023-10-18T12:09:10+11:00
# tags: ["Governance, rights & access"]
description: "Learn the foundations of text analysis, from preparing text as data to choosing analysis methods and packaging your results for reuse."
image: ""
layout: doc
---

<br />

- [Understanding Text as Data](#understanding-text-as-Data)
- [What’s in a word?](#what’s-in-a-word?)
- [Text Analysis Workflow](#text-analysis-workflow)
- [Guide sections](#guide-sections)

<br />

## Understanding text as data
Many definitions of *data* include an element such as *individual items of information*. If we consider text to include any sort of language in use, covering different modalities (spoken, written signed) and different extents (from individual sounds to multi-volume books), then fitting text to this definition requires some abstraction. We have to define some unit or units of analysis and we can then treat each of those units as an individual item of information. Examples of such units include documents, sentences and words. But *word* is not as simple a unit as you may think.

<br />

## What’s in a word?
The term *word* is problematic. It is well-known to linguists that phonological words (defined by sound patterns), syntactic words (defined by combinatorial possibilities) and orthographic words (defined by the conventions of a writing system) do not always coincide. And even when we are only looking at written material, there are problems. How many words are there in this sentence?

*The cat sat on the mat*

One answer is that there are six words; that is, there are six groups of characters which are separated according to typographical convention. But there is another answer: There are five words, that is five distinct sequences of characters and one of those sequences (*the*) occurs twice. The terms standardly used to make this distinction are **type** and **token**. **Tokens** are instances of **types**, therefore if we count tokens, we count without considering repetition, while if we count types, we do consider repetition. In our example, there are five types (*the, cat, sat, on, mat*) but six tokens, because there are two tokens of one of the types (*the*).

There is a further distinction we may need to make which we can see if we consider another question:

Are *cat* and *cats* the same word?

They are distinct types, and therefore must also be distinct as tokens. But we have an intuition that at some level they are related, that there is some more abstract item which underlies both of them. This concept is usually referred to as a **lemma** (there is more about this concept in the Data Preparation section of this guide).

<br />

## Text analysis workflow

This brief introduction to text analysis divides the process into three parts. In the first stage, the text is made into data. It is divided into the units appropriate for the analysis to be carried out and shaped to a format which our analytic tools can work with. The second stage is the analysis proper, including its interpretation. A wide range of analytic methods can be used, and we give a survey of some of the commonly used possibilities. Finally, our data, methods and results can be documented and packaged as a **research object** which can be stored and reused.

<br />

## Guide sections
- [Part 1: Data preparation](/resources/guides/working-with-data/Introduction-to-text-analysis/Datapreparation/index.md)
- [Part 2: Useful methods](/resources/guides/working-with-data/Introduction-to-text-analysis/Usefulmethods/index.md)
- [Part 3: Research objects](/resources/guides/working-with-data/Introduction-to-text-analysis/ResearchObjects/index.md)


