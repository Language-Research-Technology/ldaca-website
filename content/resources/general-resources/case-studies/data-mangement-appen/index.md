---
title: "Data Management in Language Technology: A Case Study of Appen"
date: 2024-03-22T15:12:12+11:00
draft: false
description: "LDaCA team member Rosanna Smith discusses data management in language technology, focusing on projects at tech company Appen."
---

by {{< profile id="smith" >}}

<br>

Founded in Sydney in 1996, [Appen](https://www.appen.com/) is a technology company that collects and improves data for the purposes of training and developing machine learning and artificial intelligence systems. During my time at Appen, a significant part of my work involved a diverse range of projects for both automatic speech recognition ({{< glossary_link display="ASR" id="asr" >}}) and text-to-speech ({{< glossary_link display="TTS" id="tts" >}}) technologies, including {{< glossary_link display="phonetic transcription" id="phonetic-transcription" >}}, grapheme-to-phoneme or letter-to-sound (L2S) rule development, and part-of-speech (POS) annotation.

<br>

To break down these language technologies further, {{< glossary_link display="ASR" id="asr" >}} enables computers to process human spoken language into readable text, allowing users to operate devices through speech or facilitate translation of that speech into other languages. Conversely, {{< glossary_link display="TTS" id="tts" >}} generates an audio version of a written text. {{< glossary_link display="TTS" id="tts" >}} can be used to improve accessibility, particularly for those with vision impairments or learning disabilities such as dyslexia.

<br>

Language technology relies heavily on good-quality data, and the table below illustrates just some of the types of processes used in projects, with use cases they can be applied to.

<br>

| Process Type                                                                       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Example Use Case                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ---------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{< glossary_link display="Phonetic Transcription" id="phonetic-transcription" >}} | The process of transcribing words in a lexicon according to their sound (pronunciation lexicon), through the use of a phonetic alphabet such as the International Phonetic Alphabet ({{< glossary_link display="IPA" id="ipa" >}}) or {{< glossary_link display="X-SAMPA" id="x-sampa" >}} (a phonetic script that uses symbols all found on a standard keyboard, aiding in native-speaker transcription). Suprasegmental features such as stress, tone, vowel length, pitch accent and syllabification can also be encoded where relevant to the language.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | **Use in ASR:**<br>Appen developed language packs in 26 languages for the Intelligence Advanced Research Projects Activity ([IARPA](https://www.iarpa.gov/)) Babel program, facilitating improvement in speech recognition performance for languages other than English which have very little transcribed data.<br>These projects generally have {{< glossary_link display="data collection" id="data-collection" >}}, {{< glossary_link display="orthographic transcription" id="orthographic-transcription" >}} and {{< glossary_link display="phonetic transcription" id="phonetic-transcription" >}} components, the latter using {{< glossary_link display="X-SAMPA" id="x-sampa" >}} annotation.<br><br>_Further reading: [IARPA - Babel](https://www.iarpa.gov/research-programs/babel)<br>Example dataset: [IARPA Babel Mongolian Language Pack](https://doi.org/10.35111/hgpe-cp39)_<br><br>**Use in TTS:**<br>In collaboration with health service providers GuildLink and MedAdvisor, Appen produces {{< glossary_link display="TTS" id="tts" >}} audio of Australian Consumer Medicine Information (CMI) documents. This audio is available at [medsinfo](https://medsinfo.com.au/consumer-information/A-To-Z-Index).<br><br>_Further reading: [GuildLink Makes Consumer Medicines Information More Accessible](https://www.appen.com/case-studies/guildlink-makes-consumer-medicines-information-more-accessible)_ |
| Grapheme-to-Phoneme or Letter-to-Sound (L2S) Rule Development                      | A set of rules for a given language that map between orthography and pronunciation, used to generate {{< glossary_link display="phonetic transcriptions" id="phonetic-transcription" >}} from an input text. These rules can be both single and multi-letter mappings such as orthographic \<s\> → {{< glossary_link display="X-SAMPA" id="x-sampa" >}} /s/ and \<sh\> → /S/ in English. The rules can refer to the surrounding environment which allows for alternative phonetic mappings based on the characters’ position in a word, surrounding morphemes, or other linguistic processes that impact pronunciation. For example, rules are implemented to specify when \<s\> should be pronounced as /z/ as in ‘roses’ or as /s/ as in ‘sit’.<br>Suprasegmental features such as stress, tone, vowel length, pitch accent and syllabification may also be encoded, however, the accuracy of these in the output pronunciations depends on the given language and the extent to which these features are predictable from orthography alone. | As was the case for the IARPA Babel program, one of the first steps in producing pronunciation lexicons involves running the wordlist through a language or dialect-specific L2S algorithm to generate hypothesised {{< glossary_link display="X-SAMPA" id="x-sampa" >}} pronunciations of each word. For many of the 26 languages in Babel, these rules didn’t yet exist and had to be developed through research, consultation and iterative testing with native speaker linguists. The automated output is then checked and edited as needed by native speaker linguists. L2S rules may be further developed according to customised requirements, for example, additional pronunciation variants for dialectal, colloquial or fast speech on top of the canonical pronunciation.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Part-of-Speech (POS) Annotation                                                    | The process of annotating each word in a text with its grammatical part of speech, for example, _noun_, _verb_, depending both on the word’s definition and its context within the wider phrase or text. A defined set of labels is used according to the grammar of the language being annotated.<br>POS lexicons may be used in conjunction with pronunciation lexicons to further improve natural language processing models for both {{< glossary_link display="ASR" id="asr" >}} and {{< glossary_link display="TTS" id="tts" >}}. They also assist in named-entity recognition ({{< glossary_link display="NER" id="ner" >}}) for large corpora in cases where proper nouns are given additional sub-tags such as person, organisation and location.                                                                                                                                                                                                                                                                                                                               | In collaboration with [Larrakia Nation](https://larrakia.com/), Appen assisted in linking two databases (text and audio) that previously could only be accessed independently, and had minimal time alignment between the audio and Larrakia and English text. One of the components of this project involved reviewing the POS annotations in the database, through a series of automated and manual checks, to identify and correct genuine errors or inconsistencies in notation from the original field notes, so that these were not present in the final version.<br><br>_Further reading: [Preserving Language Through Useable Data and Phonetic Annotation](https://www.appen.com/case-studies/preserving-language-through-useable-data)_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

<br>

In all projects, data management is an important factor, both throughout the life of the project, as well as following its completion. The latter is particularly important in cases where Appen retains the license to resell the datasets.

<br>

In this case study, I’ll look at both of these aspects, outlining some of the challenges of data management and how these are overcome at Appen.

<br>

## Data Management during the Life of a Project

<br>

Due to the variety of services, data types and customisation capabilities provided by Appen, it is difficult to present a single standard approach to data management. Instead, I’ll focus on the processes that were developed for datasets that have both orthographic and {{< glossary_link display="phonetic transcription" id="phonetic-transcription" >}} components, also known as transcription and lexicon multi-component projects. The basic procedure for these projects is outlined below:

<br>

1. The client or project sponsor specifies the parameters for the dataset and its collection in consultation with Appen specialists.

2. Appen carries out {{< glossary_link display="data collection" id="data-collection" >}}, usually in the form of conversational or scripted telephony, {{< glossary_link display="VoIP" id="voip" >}} or microphone recordings with qualified participants from Appen's crowd of more than a million. Conversational data refers to spontaneous or unscripted natural speech on a variety of topics either over the telephone or with both participants in the same room, while for scripted data, participants read and respond to a set text of prompts, curated to facilitate topic, domain, keywords, key phrases and phonetic coverage. All participants are provided with a consent form explaining the purpose of the collection and how the data will be used, and only take part in the collection if they are happy and comfortable to do so, and if they sign the consent form. Personal data such as names are anonymised and sensitive personal data is not collected.

3. The audio data is then quality-checked to ensure it meets the requirements for the collection, including demographic balance, language and content, background noise levels, audio levels and recording duration.

4. The approved audio goes through some pre-processing steps to batch the data into smaller segments, then is orthographically transcribed by the transcription (TX) team. Timestamps are checked at this stage as well to ensure correct alignment of the audio and the transcribed text, and a variety of labels are added to capture speaker and non-speaker noise events (e.g. laugh, cough, background noise). Rigorous quality assurance processes are applied while the transcription is ongoing and on the resulting complete data set.

<br>

{{< image Src="/data-management-appen/audio-transcription.png" Alt="Audio Transcription Interface" Desc="Figure 1: Example of audio with transcription, batched and presented to transcribers in tool." Title="Audio Transcription Interface" Ref="Appen" >}}

<br>

{{< image Src="/data-management-appen/tx_example_ENI_ASR003.png" Alt="Audio Transcription Text File" Desc="Figure 2: Example of the resulting transcription text file." Title="Audio Transcription Text File" Ref="Appen" >}}

<br>

5. A sorted list of unique word forms (e.g. 'house', 'houses') occurring in the dataset is created from the orthographically transcribed data and sent to the lexicon (LX) team, who work with a group of native speaker linguists to prepare {{< glossary_link display="phonetic transcriptions" id="phonetic-transcription" >}} of the words, either in {{< glossary_link display="X-SAMPA" id="x-sampa" >}} or another phonetic script. If a POS lexicon is also required for the dataset, this is similarly created from the sorted list of unique word forms and checked by native speaker linguists.

<br>

{{< image Src="/data-management-appen/hungarian_appenlex.png" Alt="Hungarian Pronunciation Lexicon" Desc="Figure 3: Example of a Hungarian pronunciation lexicon loaded to the transcription tool for native speaker review." Title="Hungarian Pronunciation Lexicon" Ref="Appen" >}}

<br>

{{< image Src="/data-management-appen/OTS_lex.jpg" Alt="UK English Pronunciation Lexicon" Desc="Figure 4: Example of a UK English pronunciation lexicon." Title="UK English Pronunciation Lexicon" Ref="Appen" >}}

<br>

{{< image Src="/data-management-appen/POS_example_ENG_GBR.png" Alt="UK English POS Lexicon" Desc="Figure 5: Example of a UK English POS lexicon." Title="UK English POS Lexicon" Ref="Appen" >}}

<br>

6. Data across each stage is validated for quality assurance.

7. The audio, transcription and lexicon(s) are packaged for delivery.

<br>

As shown above, the data for a single project goes through multiple stages of annotation and requires specialist linguist expertise in the data management process before each part can be combined for final delivery.

<br>

One major challenge in this process is dealing with errors and inconsistencies that arise both prior to, and during, the validation stage, particularly where data is shared between the TX and LX teams. As transcribers and linguists prepare the annotations, variations may arise in features like spelling, capitalisation and punctuation. Languages may have no or multiple accepted orthographic conventions, and a standard approach must be determined for the project and adhered to. Conversely, other languages may already have standard orthographic conventions, but spelling or other errors may be introduced at one stage of transcription and identified at another stage.

<br>

Once a variation is identified and a decision on approach has been made, this change is applied to the whole of the transcription before an updated wordlist is prepared for the lexicon. This spelling standardisation phase is inherently iterative and in order to reduce the number of iterations, robust processes were developed to automatically identify many of the variations and then track that the agreed final spelling forms were applied.

<br>

One example of these automated spelling standardisation processes is a {{< glossary_link display="Python" id="python" >}} script run by the LX team which identifies entries with identical pronunciations but different orthographies in a lexicon. In some cases, these matches are expected (e.g. 'red' and 'read' in English would both have an {{< glossary_link display="X-SAMPA" id="x-sampa" >}} transcription /" r E d/), while in other cases, it identifies either errors in spelling (e.g. 'colourr') or variation in need of standardisation (e.g. 'colour'/'color'). The output of potential errors is reviewed by a native speaker and once legitimate inconsistencies are identified, these are sent back to the TX team so that they can be updated in the transcription data and a new wordlist generated for the lexicon. The process for making these updates is automated as much as possible but linguistic expertise is required at every stage to ensure the corrections are appropriately applied. This close collaboration of the teams responsible for the transcription and lexicon components is integral to producing high-quality speech databases with optimised data management practices.

<br>

## Data Management for Pre-Labeled Datasets

<br>

{{< image Src="/data-management-appen/pre-labeled-datasets.png" Alt="Pre-Labeled Datasets" Desc="Figure 6: Visual representation of pre-labeled dataset types." Title="Pre-Labeled Datasets" Ref="Appen" >}}

<br>

At the time of writing, Appen has over 280 audio, image, video and text datasets in over 80 languages available as [pre-labeled datasets](https://datasets.appen.com/). These datasets are publicly accessible and can be filtered according to several categories: product type, common use cases, language and number of hours of audio, word or image count, if applicable (called Unit in the table below). Combined with a standard search function, this filtering allows interested parties to further refine their query for data most applicable to their needs.

<br>

| Product Type                            | Common Use Cases                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Language | Unit                                                                   |
| --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ---------------------------------------------------------------------- |
| <ul><li>Audio<li>Image<li>Text<li>Video | <ul><li>{{< glossary_link display="ASR" id="asr" >}}<li>Action Classification<li>Automatic Captioning<li>Baby Monitor<li>Call Centre<li>Chatbot<li>Content Classification<li>Conversational AI<li>Document Processing<li>Document Search<li>Facial Recognition<li>Fitness Applications<li>Gesture Recognition<li>In Car {{< glossary_link display="HMI" id="hmi" >}} & Entertainment<li>Keyword Spotting<li>Language Modelling<li>{{< glossary_link display="MT" id="mt" >}}<li>{{< glossary_link display="NER" id="ner" >}}<li>Search Engines<li>Security & Other Consumer Applications<li>Speech Analytics<li>{{< glossary_link display="TTS" id="tts" >}}<li>Virtual Assistant | A-Z      | A measure of the volume of the dataset, either in hours or word count. |

<br>

Each listing contains further details about the dataset, particularly in relation to aspects of the {{< glossary_link display="data collection" id="data-collection" >}}, including the specifics of the language collected, the volume of the dataset, the number of contributors involved, recording conditions and the file formats available. Additional details appear in a pop-up window when you click on the "tile" for a given dataset. For example:

<br>

**Catalogue entries for a Danish POS dataset and a Mongolian pronunciation dictionary:**

<br>

{{< image Src="/data-management-appen/danish-combined.png" Alt="Danish POS Dictionary Catalogue Summary and Metadata" Desc="Figure 7: Danish POS dictionary catalogue summary and metadata." Title="Danish POS Dictionary Catalogue Summary and Metadata" Ref="Appen" >}}

<br>

{{< image Src="/data-management-appen/mongolian-combined.png" Alt="Mongolian Pronunciation Dictionary Catalogue Summary and Metadata" Desc="Figure 8: Mongolian pronunciation dictionary catalogue summary and metadata." Title="Mongolian Pronunciation Dictionary Catalogue Summary and Metadata" Ref="Appen" >}}

<br>

This is a helpful starting point for browsing and refining the dataset selection, but in order to find the most suitable match, clients consult directly with Appen to discuss their language technology needs in full.

<br>

More detailed {{< glossary_link display="metadata" id="metadata" >}} for each dataset is tracked internally and this is used to further assist with client queries and requests. Some of the additional {{< glossary_link display="metadata" id="metadata" >}} categories recorded include the demographics of the contributors for each dataset, such as the age range and gender distribution of the participants, the dialect coverage within a specific language, the year of collection, and the domains or topics discussed in the collection.

<br>

Using the {{< glossary_link display="metadata" id="metadata" >}} as filters, requests can be divided into three alternative outcomes:

<br>

1. Dataset(s) matching all requirements are available and a sample of the data is shared with the client to confirm this is the case.

2. Dataset(s) matching only some of the requirements are available and samples of these are shared in case they are still applicable to the project.

3. No dataset matching the requirements is available and a quote is then prepared for producing a new dataset ​​or enhancing an existing dataset.

<br>

In terms of dataset storage, collections are catalogued first according to language and second by dataset type. This method works particularly well for pre-labeled datasets, because, if nothing else, clients usually know which language(s) they want data for and other specifics can follow from there.

<br>

## Conclusions

<br>

Both in cases where new datasets are being created and finalised collections made ready for cataloguing, data management is a crucial consideration at Appen and, more broadly, any language technology project. Two main issues that are important to consider for data collections are:

<br>

1. Ensuring that collections with multiple component parts are organised in such a way that updates can be applied to the whole, rather than introducing inconsistencies between related data.

2. Determining the parties that will be using the repository and assuring that the methods of accessing data are intuitive for all groups.

<br>

These issues are handled in the Appen workflow through the use of iterative semi-automated spelling checks and other similar processes which enable modifications to be integrated into all levels of the dataset, and through clear recording and accessibility of the {{< glossary_link display="metadata" id="metadata" >}} describing a collection, available both to Appen staff and its clients.

<br>

For LDaCA, these issues are of equal relevance for wider data management. To the first point, while it is ultimately the responsibility and prerogative of the data contributor to decide how their data should be organised, LDaCA can also assist with this process. Guidance is available on best practices for data management and organisation of {{< glossary_link display="metadata" id="metadata" >}}, both in the form of the documentation available at [LDaCA Resources](/resources/ldaca-resources/), as well as automated validation of {{< glossary_link display="metadata" id="metadata" >}} category requirements for datasets added and edited through {{< glossary_link display="Crate-O" id="crate-o" >}}. To the second point, LDaCA has a responsibility to ensure that {{< glossary_link display="tools" id="tools" >}} to facilitate data management and discoverability are accessible and intuitive for all, including the portals that use the {{< glossary_link display="Oni" id="oni" >}} application to access data packaged as {{< glossary_link display="RO-Crates" id="ro-crate" >}}. This should be an iterative process, with further improvements to operability implemented based on user feedback and needs.

<br>
