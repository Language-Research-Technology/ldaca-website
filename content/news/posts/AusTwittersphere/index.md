---
title: "Exploring the Australian Twittersphere without diving in: A guide to searchable aggregate data"
date: 2026-02-17
draft: false
description: "A closer look at the Australian Twittersphere searchable aggregate data—a new collection on the LDaCA data portal—and what it offers researchers."
---

by {{< profile id="fleet" >}}

<br>

{{< image Src="TwitteronIpad_ASPhotography.jpg" Alt="Photograph of an tablet on a desk displaying the sign on form for Twitter " Desc="Twitter displayed on tablet screen" Title="Twitter displayed on tablet screen"  Ref="Photo by AS Photography">}}
<br>
Imagine having access to over 1.9 billion tweets from Australian Twitter accounts spanning more than a decade, but without the ethical complexities that come with handling raw social media data. This is the promise of the searchable aggregate data now available on the [LDaCA data portal](https://data.ldaca.edu.au/collection?id=arcp%3A%2F%2Fname%2Chdl10.25912~RDF_1758591652309&_crateId=arcp%3A%2F%2Fname%2Chdl10.25912~RDF_1758591652309) and derived from the [Australian Twittersphere dataset](https://www.digitalobservatory.net.au/resources/australian-twittersphere/). The dataset opens up fascinating possibilities for researchers, linguists and anyone interested in understanding how Australians have used Twitter as a platform for communication, debate and cultural expression.
The Australian Twittersphere, maintained by the Australian Digital Observatory at Queensland University of Technology (QUT), represents a significant collection of Australian social media data. The dataset captures the digital conversations of more than a million Australian Twitter accounts from January 2007 through to June 2023. But here's the challenge: accessing raw tweet data requires ethical clearance, data management plans and a solid research framework. For many researchers, especially those in the early stages of a project or those simply curious about what patterns might exist in the data, these barriers can feel insurmountable.

This is where searchable aggregate data becomes transformative. By deriving specific types of statistical information from the raw dataset, we've created a resource that preserves the analytical potential of the Australian Twittersphere, whilst respecting individual privacy. The aggregate data doesn't contain individual tweets, user identities or the kind of personally identifiable information that raises ethical red flags. Instead, it offers researchers a bird's-eye view of linguistic patterns, trending topics and the digital ecosystem that characterised Australian Twitter discourse over a sixteen-year period.

<br>

# Building the Australian Twittersphere
The Australian Twittersphere began its life in 2016 as part of the Tracking Infrastructure for Social Media Analysis (TrISMA) project, initially collecting tweets from approximately 530,000 Twitter accounts that were identified as Australian,  based on profile information. When the Australian Digital Observatory was established in early 2018, it inherited and expanded this collection, developing a sophisticated automated collection methodology that gathered tweets through multiple Twitter API endpoints.

The methodology was both simple and powerful: identify Twitter accounts with a stated connection to Australia in their profile information, then collect all public tweets from those accounts over time. This approach captured not just tweets about Australian topics, but the full breadth of how Australians used Twitter — their international interests, their everyday conversations, their responses to global events. The collection was periodically refreshed to incorporate new Australian accounts, with major updates in December 2020 and October 2021 ensuring that the dataset remained current and representative.

The result was staggering: by the time collection ended in June 2023, the Australian Twittersphere contained over 1.9 billion tweets from more than one million accounts. The earliest captured tweet dates back to January 2007, meaning the collection spans Twitter's entire journey, from quirky startup to major public square. However, the most reliable and comprehensive data begins in March 2018, when the Digital Observatory's robust collection infrastructure was in place.

The collection ended, not by choice, but by necessity. In late 2022, following Twitter's acquisition by Elon Musk, API instability became increasingly common. Through the first half of 2023, Twitter (later X) announced dramatic changes to its API access, eliminating the academic access track that researchers relied upon and implementing expensive tiered pricing. Even the Pro tier, at approximately US$5,000 per month for one million tweets, would have been insufficient to maintain collection at the scale of the Australian Twittersphere. When Twitter/X revoked the Digital Observatory's API access in early July 2023, collection ceased. The last reliable data is therefore from 30 June 2023, marking the end of an era in Australian social media research.

<br>

{{< image Src="TweetspermonthAusTwitter.png" Alt="Line graph representation of the Number of tweets per month from 2016 onwards for all three collections that together form the Australian Twittersphere. " Desc="Number of tweets per month from 2016 onwards for all three collections that together form the Australian Twittersphere " Title="Number of tweets per month from 2016 onwards for all three collections that together form the Australian Twittersphere" Ref="AusTwittersphere Factsheet">}}



# What makes up the aggregate data?
The searchable aggregate data consists of five distinct but interrelated types of information, each offering unique insights into the Australian Twittersphere. Let's explore what each type reveals and how researchers might use them to understand patterns in Australian digital communication.

### 1-grams: The building blocks of language
At their simplest, 1-grams are individual words extracted from the tweets. Think of them as the atomic units of the dataset's linguistic DNA. By counting the frequency of individual words over time, researchers can track how vocabulary evolves, which terms dominate public discourse during particular periods, and how language use reflects broader social and political changes.

For a linguist, 1-grams might reveal fascinating shifts in Australian English usage. Are certain colloquialisms becoming more or less common? How quickly do new terms enter the Australian digital lexicon? For a political scientist, 1-gram data might show when particular policy terms spike in usage, correlating with election cycles or major policy announcements. The beauty of 1-grams lies in their simplicity: they provide raw frequency data that can answer surprisingly sophisticated questions about language and culture.

### 3-grams: Capturing context and phrase patterns
Whilst individual words tell us *what* people are talking about, 3-grams — sequences of three consecutive words — tell us *how* they're talking about it. This is where the aggregate data starts to reveal not just vocabulary, but the structures and patterns of Australian digital discourse. A 3-gram like "climate change is" or "the prime minister" captures not just the occurrence of keywords, but the grammatical and semantic relationships between them.

For researchers studying political discourse, 3-grams can reveal how political figures are discussed, what actions are attributed to them and how rhetoric evolves around major events. A linguistics researcher might use 3-grams to study syntactic patterns unique to Twitter's character-limited format, or to trace how memes and viral phrases propagate through the Australian Twittersphere. The phrases that appear most frequently in 3-gram data often represent the formulaic expressions and common collocations that characterise a particular time period or community.

What makes 3-grams particularly valuable is their ability to capture idiomatic expressions and fixed phrases. Instead of seeing "climate", "change" and "denier" as separate 1-grams, a researcher can identify "climate change denier" as a coherent unit of meaning, revealing how certain concepts are packaged and transmitted through social media discourse.

### Domains: Mapping the information ecosystem
Twitter has always been a platform for sharing information, and Australian users have been enthusiastic linkers, directing their followers to news articles, blog posts, videos and websites. The domain data in our aggregate collection captures which websites Australians were linking to and sharing, providing a map of the information ecosystem that fed into Australian Twitter conversations.

This data is gold for researchers studying information flows, media consumption, and the spread of news and misinformation. Which news sources dominated Australian Twitter? How did this change over time? Were there periods when alternative media sources gained traction or when international sources became more prominent? Domain data can reveal the trusted sources that shaped public discourse, as well as the fringe or controversial sites that occasionally surged into prominence during particular controversies or events.

For researchers studying specific events — bushfires, elections, public health crises — domain data shows where Australians were turning to for information. A spike in links to government health websites during the COVID-19 pandemic, or an increase in links to international news sources during global events, tells us something important about how Australians used Twitter, not just as a conversation platform, but as an information aggregator and sharing network.

### Hashtags: The signposts of digital discourse
Hashtags serve multiple functions on Twitter: they categorise content, signal participation in broader conversations, and sometimes function as miniature slogans or political statements. The hashtag data in our aggregate collection captures which tags were used, when and how frequently, offering insights into the topics, movements and events that galvanised Australian Twitter users.

Some hashtags are perennial, appearing consistently year after year (#auspol for Australian politics, for instance). Others spike dramatically during specific events: #bushfires during the devastating 2019–2020 fire season or #COVID19 and #coronavirus during the pandemic. By tracking hashtag frequencies over time, researchers can identify not just *what* topics were important, but *when* they became important, and how long they remained in the public consciousness.

For researchers studying social movements, hashtags provide a way to trace the emergence, growth, and sometimes, decline of particular causes or campaigns. The data can reveal which movements gained traction in Australia, how they intersected with international movements and how hashtags evolved as campaigns matured. A sociolinguist might study how hashtags function as linguistic markers of community identity, whilst a political scientist might analyse how political parties and movements use hashtags strategically to frame issues and mobilise supporters.

### 3-grams with emojis: When pictures join words
Perhaps the most distinctive feature of our aggregate data is the inclusion of 3-grams that incorporate emojis, with each emoji treated as a single word. This recognises the reality that modern digital communication is increasingly multimodal, blending text with visual symbols in ways that carry specific meanings and emotional tones.

When we see a 3-gram like "I ❤️ Australia" or "this is 🔥", we're capturing something that pure text analysis would miss. Emojis aren't just decorative; they often carry semantic weight, modify the meaning of adjacent words, or convey tone and emotion that text alone cannot express. By preserving emoji-word combinations in our 3-gram data, we enable researchers to study how Australians integrate visual symbols into their textual communication.

This data opens up fascinating research questions. Do certain emojis become associated with particular topics or communities? How does emoji usage differ across demographic groups or geographic regions within Australia? Are there distinctly Australian patterns in emoji use, or do Australians follow global trends? For linguists studying computer-mediated communication, emoji-inclusive 3-grams provide evidence of how language is evolving in digital spaces, where the boundaries between text and image are increasingly porous.


# Understanding the limitations
Whilst the aggregate data offers remarkable breadth and depth, it's important to understand its boundaries. Given the sheer scale of the original dataset — 1.9 billion tweets — the derived aggregate data is necessarily selective, rather than exhaustive. Practical considerations around data size and processing efficiency meant implementing cut-offs that excluded the long tail of low-frequency terms.

For n-grams (the 1- and 3-grams described above) and emoji n-grams, terms that appeared only rarely were excluded from the aggregate collection. The same principle applies to domains and hashtags: those with very low frequency mentions were trimmed. This means that extremely niche terms, one-off typos or highly specific phrases that appeared only a handful of times across the entire dataset won't appear in the aggregate data. For most research purposes, this is actually beneficial, as it focuses attention on patterns that have genuine statistical significance, rather than noise. However, researchers interested in rare linguistic phenomena, or tracking the very earliest emergence of new terms, should be aware of these limitations.

The specifics of these cut-offs, along with detailed methodology notes, are available in the dataset documentation and metadata. If you're planning research that might be affected by these limitations, or if you're simply curious about the technical details of how the aggregate data was constructed, the Australian Digital Observatory team can provide guidance. They can also advise on whether your research question would be better served by the aggregate data, or whether you might need to pursue access to the full dataset with appropriate ethical clearance.

# The power of exploration without extraction
What makes this aggregate data particularly valuable is its dual nature: it preserves analytical power whilst eliminating privacy concerns. A researcher can query the dataset to discover that "climate change" appeared in conjunction with "action now" with increasing frequency during certain periods, without ever seeing an individual tweet, or knowing which specific users wrote those words. This is exploration without extraction, pattern recognition without personal identification.

For researchers in the exploratory phase of a project, this is transformative. You can test whether your research question is viable, check whether the patterns you suspect exist actually appear in the data and refine your hypotheses — all without navigating the full ethical approval process. If your exploratory analysis reveals promising patterns, you can then pursue access to the full dataset, with a clear research plan and justified need.

Moreover, for many research questions, the aggregate data might be sufficient on its own. If you're studying broad trends in language use, tracking how particular terms gain or lose prominence or mapping the information sources that shaped Australian discourse, you might not need individual tweets at all. The aggregate data provides the big picture, and sometimes, the big picture is exactly what you need.

# A resource for the Language Data Commons
The Australian Twittersphere spanned a remarkable period in Australian digital history. From the early days of Twitter as a niche platform through to its maturation as a major public square, this dataset captures how Australians have used social media to discuss politics, share news, build communities, and respond to national and international events. 

As part of the Language Data Commons of Australia (LDaCA), this searchable aggregate data represents a new model for making large-scale linguistic data accessible, whilst respecting the ethical complexities of social media research. It acknowledges that not all data needs to be raw data, and that carefully designed aggregate representations can serve the research community's needs, whilst protecting individual privacy.

The Australian Twittersphere might have ended in June 2023, but through this aggregate data, its legacy continues. Whether you're a linguist curious about how Australian English is evolving, a political scientist tracking policy discourse, a sociologist studying social movements or simply someone fascinated by how Australians communicate online, the aggregate data offers a window into more than sixteen years of digital conversation. It's an invitation to explore, to question and to discover patterns in one of the richest collections of Australian language data ever assembled — without the barriers that typically separate researchers from large-scale social media datasets.

# Getting started
If you're interested in exploring the Australian Twittersphere aggregate data please refer to the [LDACA Data Portal](https://data.ldaca.edu.au/collection?id=arcp%3A%2F%2Fname%2Chdl10.25912~RDF_1758591652309&_crateId=arcp%3A%2F%2Fname%2Chdl10.25912~RDF_1758591652309). If you are interested in accessing the full databank, the best place to start is by visiting the [Australian Twittersphere information](https://www.digitalobservatory.net.au/resources/australian-twittersphere/) at the Australian Digital Observatory website or contacting the Digital Observatory team at digitalobservatory@qut.edu.au.

<br>



<br>








