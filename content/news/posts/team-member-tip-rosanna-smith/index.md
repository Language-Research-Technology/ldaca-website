---
title: "Team member tip: Refining your search queries"
date: 2026-04-21
draft: false
description: "Team member tip: Refining your search queries"
---

by {{< profile id="smith" >}}

>*As part of a regular feature in our quarterly newsletter, we asked LDaCA Language Technology Analyst, Rosanna Smith, for a tip to pass on to readers. Read on to find out her tips for using regular expressions to refine search queries.*

When working with text data, we often need very specific searches to help us locate a particular subset of the data or to answer complex questions. However, in most cases, we are dealing with large amounts of text that can be difficult to navigate through, making finding occurrences of a particular search query even harder. Because of this, basic search functions don't always provide the level of detail needed in these queries.

Luckily, we have a powerful tool for this known as regular expressions or 'regexes'. This is a pattern matching method for searching, replacing and validating textual data. Regexes provide you with the syntax to define complex search patterns that will match more specific queries than those in basic search. For example, if we're looking for a particular name in historical texts, we often have to contend with multiple spelling variations. Rather than having to search for each spelling individually, regexes can help us return all results in a single query.

Many text editors have the option to use regexes in search, including Google Docs and Sheets, and in the Advanced Search of the LDaCA Data Portal.

Some queries regexes allow us to do more easily include finding:

* a pattern only when it occurs at the start or end of a line (e.g. `^Dear` and `Yours faithfully,$`)
* case sensitivity (e.g. `Violet` to exclude most occurrences of the flower or colour rather than the name)
* repeated elements (e.g. `LOL+` to match both *LOL* and repetitions like *LOLLLL*)
* spelling variants (e.g. `Woiw[ou]r+ung` to match *Woiwurrung*, *Woiworung* and *Woiwurung*)
* structured data like addresses, phone numbers, IDs etc. (e.g. `[0-9]\{4}-[0-9]\{2}-[0-9]\{2}` or `\d{4}-\d{2}-\d{2}` to match dates in the format *2026-04-13*)
* one or more distinct patterns in a single search (e.g. `kookaburra|rainbow lorikeet|galah` to match a range of birds in one query)

 ...and many more!

Regexes can be tricky to learn at first, but by using even a few of these patterns to refine your searches, you'll quickly feel like a superhero!

<br>

{{< image Src="https://imgs.xkcd.com/comics/regular_expressions.png" Alt="Web comic depicting a crime being heroically solved by someone who swings in on a rope declaring 'Everybody stand back. I know regular expressions'." Desc="'I know regular expressions'" Title="'I know regular expressions'"  Ref="XKCD web comic" Height="500">}}

## **Resources**



* User guide for search functionality in the LDaCA Data Portal:[ Search](https://www.ldaca.edu.au/resources/user-guides/portal/search/)
* User guide for regular expressions in Google Docs and Sheets:[ Find and replace items using regular expressions](https://support.google.com/docs/answer/62754#regular_expressions)
* Mozilla's cheat sheet for regular expression syntax with examples:[ Regular expression syntax cheat sheet](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Cheatsheet)
* A regular expression tester with syntax highlighting, explanation and reference guide:[ regex101](https://regex101.com/)

<br>

{{< image Src="credit-ardc-michelle_mcfarlane-hassi_summerschool26-feb26-lr71-1536x1024.jpg" Alt="Rosanna Smith smiling mid-conversation in a group of people" Desc="Rosanna talking to participants at the ARDC's HASS and Indigenous Research Data Commons Summer School in February 2026" Title="Rosanna talking to participants at the ARDC's HASS and Indigenous Research Data Commons Summer School in February 2026"  Ref="Michelle McFarlane, courtesy of the ARDC">}}

<br>

### **Rosanna Smith**

Rosanna is a language technology analyst for the Language Data Commons of Australia, developing metadata schemas, templates and tools for RO-Crated data. She has a background in linguistics, with 10 years' experience as a linguistic project manager in automatic speech recognition and text to speech for machine learning. She is interested in making technology for the governance and management of language materials more accessible to researchers and communities, regardless of the level of digital expertise.

<br>