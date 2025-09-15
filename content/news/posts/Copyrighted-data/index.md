---
title: "Copyrighted data: Options and considerations for working with newspapers and other texts"
date: 2025-09-13T14:29:40+10:00
draft: false
description: "Blog post from Monika Bednarek on working with copyrighted materials"
---

by {{< profile id="Bednarek" >}}

{{< image Src="/Copyrighted-Data/Shewontberightmate.png" Alt="She Won't be Right Mate—artical from the Advertiser" Desc="She Won't be Right Mate—artical from the Advertiser" Title="She Won't be Right Mate—artical from the Advertiser" Ref="TBC" Height="300" >}}

<br>

Many corpus linguists analyse language in the media, especially in newspaper corpora. These corpora often contain hundreds, if not thousands, of published articles from newspapers, which are protected by copyright and typically cannot easily be shared with others outside the research team. At the same time, the sharing of data is encouraged or might even be required by funding bodies, journals and other research stakeholders, as this enables reproducibility and has other positive effects on scientific research. According to the [FAIR principles](https://www.go-fair.org/), data should be findable, accessible, interoperable and reusable — as further discussed by Simon Musgrave in [this blog post](https://www.ldaca.edu.au/news/posts/fair-and-care/).

<br>

While corpus linguists might agree that data sharing is preferable, the use and analysis of copyrighted data does impose serious limitations. In this post, I want to briefly mention some of the options available to language researchers working with copyrighted data. It’s important to give a disclaimer — I am not a lawyer and this post does not offer any legal advice, nor does it make any recommendations regarding copyright law. It simply outlines some of the choices that corpus linguists who work with copyrighted data have made. While I mainly discuss newspaper data, many of the points made here will apply to other kinds of texts. The post assumes that the general motivation of corpus data sharing is for non-commercial research or educational purposes. It also assumes that the corpus linguist operates in a context where copyright law does not already allow the sharing of copyrighted data for such purposes. It’s important to be aware that copyright law differs across countries, including different provisions for fair use/fair dealing, non-commercial text and data mining, etc. Some countries now do appear to allow the latter (see [this discussion](https://doi.org/10.1515/text-2020-0052) in relation to the written British National Corpus). Laws can also change over time and it is always best to double-check what is happening in this space nationally.

<br>

The ideal solution would be to have the permission of the copyright holders and be able to distribute the full texts (complete newspaper articles) under a public license. An example would be the [newspaper corpora](https://www.clarin.eu/resource-families/newspaper-corpora) included in CLARIN’s resource families. In some cases, it might be more feasible to obtain such permission by only including text samples in the corpus (for instance, samples of 2,000 words as in the [ICE corpora](https://www.ice-corpora.uzh.ch/en/design.html)) rather than complete (full) texts, although this brings its own limitations, especially for discourse analysis. Corpus linguist John Sinclair has recommended that a corpus “should wherever possible consist of entire documents or transcriptions of complete speech events” (as per [this guide](https://users.ox.ac.uk/~martinw/dlc/chapter1.htm) to corpus building).

<br>

In practice, it might not always be feasible or possible to seek copyright clearance for every newspaper corpus that is analysed worldwide, especially in small-scale specialised projects undertaken by individual researchers, rather than in well-funded large projects involving paid staff who are responsible for corpus building. What else can be done in cases where it is not practicable to seek copyright permission or where copyright holders charge fees that cannot be paid due to lack of funds?

<br>

The first option is to use newspaper articles that are out of copyright, keeping in mind that copyright expiration varies according to country. In Australia, the duration of copyright is generally 70 years, as described [here](https://www.library.gov.au/services/copyright-library-collections/how-long-does-copyright-last) (with some exceptions). For instance, the National Library of Australia’s [Trove](https://trove.nla.gov.au/) database includes digitised newspaper articles prior to 1955 [“on the general understanding that they are out of copyright”](https://trove.nla.gov.au/help/categories/newspapers-and-gazettes-category). This obviously limits the research questions that are possible to ask, but analysis of historical newspaper data might be interesting in its own right and could be a definite consideration with respect to certain research topics in corpus linguistics. Using explicit corpus design principles to carefully design, build and curate a newspaper corpus from such data, and subsequently, making this corpus available to others, would still be a valuable endeavour.

<br>

The second option is not to distribute the relevant newspaper corpus, but to provide detailed parameters of corpus construction, so that others could (in theory) recreate the relevant dataset (for example, search syntax, newspapers, article types, years, approach to duplicates and near-duplicates, inclusions/exclusions, etc). Providing a metadata description of the dataset is also recommended, and this could be made available to others (e.g. as a spreadsheet), ideally with an associated Digital Object Identifier (DOI) – as in [this example](https://doi.org/10.5281/zenodo.15703066). In this example, however, the spreadsheet only includes basic information, such as file IDs, year/month dates, source (newspaper), text type categorisation and topic classification. It could therefore be improved with additional metadata, for example, by providing information about the relevant article headlines, authors and precise dates, so that the dataset could potentially be recreated by others. LDaCA’s approach to metadata is described [here](https://www.ldaca.edu.au/resources/ldaca-resources/metadata/).

<br>

Writing a detailed [corpus manual](https://osf.io/c2z5m/) can be useful, as it increases the transparency of the research process. This can be supplemented with citation of extracts, examples and concordances, which is often permitted as fair use/fair dealing. In addition, it might be possible to distribute data that are derived from the corpus, rather than the full text of the newspaper articles itself — for example distributing frequency lists, collocation tables, coding schemes with corpus examples, and so on.

<br>

The third option that some corpus linguists have used is to make the corpus available via a search interface that does not give users access to the full text, but allows them to analyse the relevant corpus. Examples of such interfaces include [SketchEngine](https://www.sketchengine.eu), [CQPweb](https://cwb.sourceforge.io/cqpweb.php) and [English-Corpora](https://www.english-corpora.org/). In some cases, it might also be possible to restrict access to certain users, so that the research team has access to full texts but other users do not.

<br>

A final option adopted by some linguists who work with copyrighted data has been to change the texts that were included in the corpora, for example by [replacing a certain number of words with symbols](https://www.corpusdata.org/limitations.asp) or by [providing sentences in a random order](https://wortschatz.uni-leipzig.de/en/documentation/faq). Similar to corpora containing text samples (extracts), such corpora come with clear limitations regarding discourse analysis, but allow for analysis of frequency counts.

<br>

Summing up, it is important to avoid inadvertently violating copyright while we try to follow good research practice by sharing datasets with others. However, several options are available that can be explored, with different solutions dependent on the research context. Finally, if you are interested in compiling a newspaper corpus using constructed week sampling, check out [this blog](https://sydneycorpuslab.com/using-constructed-week-sampling-to-compile-a-newspaper-corpus/) post from the Sydney Corpus Lab.



### Attribution
© 2025 This work is openly licensed via [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/)

<br>
