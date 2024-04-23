---
title: "Interview with Kalin Stefanov"
date: 2024-04-11T14:29:40+10:00
draft: false
description: ""
---

<br />

This blog post features an interview with [Kalin Stefanov](https://research.monash.edu/en/persons/kalin-stefanov) ([ARC DECRA](https://www.arc.gov.au/funding-research/funding-schemes/discovery-program/discovery-early-career-researcher-award-decra) Fellow at [Monash University](https://www.monash.edu)), who is working on an Australian Sign Language (Auslan) project. We would like to thank Chief Investigator [Louisa Willoughby](https://research.monash.edu/en/persons/louisa-willoughby) for first letting us know about Kalin’s work, and Kalin for graciously agreeing to the interview and providing his thoughts.

<br>

{{< image Src="/kalin/kalins.jpg" Alt="Close-up shot of Kalin Stefanov’s face, who is smiling" Desc="Kalin Stefanov, Monash University" Title="Kalin Stefanov, Monash University" Ref="Kalin Stefanov" Height="400" >}}

<br>

**How did you get interested in sign language?**

During my PhD at [KTH Royal Institute of Technology](https://www.kth.se/en), I worked on a project that aimed at creating a learning environment where children can learn signs in a game-like setting. An on-screen avatar presents the signs and gives the child certain tasks to accomplish, and in doing so, the child gets to practise the signs. The system was thus required to interpret the signs produced by the child, distinguish them from other signs, and indicate whether or not it was the right one.

For this project, I developed a real-time hand gesture recognition technology applied to the recognition of Swedish Sign Language signs. To date, this is the only real-time Swedish Sign Language recogniser and one of the few such technologies in the world (both in academia and industry).

The project involved close collaboration with researchers (native signers) at the [Department of Linguistics](https://www.su.se/department-of-linguistics), Stockholm University and technology evaluation with the target end-users. This was my (immersed) introduction to the fascinating world of sign language communication and since then I have participated in a range of research projects related to different sign language technologies.

<br>

**Can you tell us about the project you are currently undertaking?**

My current project addresses the computational modelling of Auslan. The project expects to generate knowledge by creating the largest Auslan dataset, enabling further advancements in this research area. The dataset will also play an essential role in other research fields, e.g. sign linguistics. Expected outcomes include the invention of the first Auslan recogniser and generator, representing a substantial advancement towards fully automated Auslan translation.

The Auslan recogniser will be able to distinguish 1000+ isolated Auslan signs. This means that by providing a video of an isolated Auslan sign, the recogniser will ‘translate’ it to written or spoken English. We also aim to provide mechanisms for personalisation of the recogniser to account for individual variations in signing.

The Auslan generator will operate in the reverse direction and be able to synthesise 1000+ isolated Auslan signs. This means that by providing a written or spoken English word, the generator will ‘translate’ it to a video of an isolated Auslan sign. We also aim to provide mechanisms for the personalisation of the generator to account for individual preferences in appearance and signing style.

<br>

**Who will be helped by the output of your project, and how?**

The Auslan recogniser and generator will be general enough to form the core of many applications targeted at specific needs. I see at least two contexts that could benefit directly from the project outcomes: Auslan education and research.

In education, on the one hand, I can envision an application for individual Auslan sign acquisition and training (think ‘Duolingo for Auslan’). On the other hand, in collaboration with A/Prof Louisa Willoughby and her extensive network, we will attempt to co-design more focused pedagogical applications of the technologies. We are still in the early stages of the technology development, hence we have not yet finalised what this could look like. One possible direction is to embed the developed technologies in education offerings for future Auslan interpreters. This will potentially improve the quality of Auslan training and ensure that more students pass interpreting exams and enter the workforce as confident Auslan interpreters.

In research, collecting and annotating sign language data is an expensive task that needs the collaboration of linguistic experts and native signers, hence, current datasets are scarce and small. I envision annotation support {{< glossary_link display="tools" id="tools" >}} that incorporate the technologies, and significantly reduce the time and effort currently needed to create such important resources.

<br>

**How did you first hear about our work on Auslan data?**

The first time I heard of {{< glossary_link display="LDaCA" id="ldaca" >}} and its work on Auslan data was from A/Prof Louisa Willoughby while developing the project proposal. The partnership between Monash University and LDaCA on making Auslan data more accessible is instrumental in developing advanced Auslan-related technologies.

<br>

**You say that your project is “creating the largest Auslan dataset”. How does this relate to the existing datasets and the work of LDaCA?**

The main focus of the project is the Auslan recogniser and generator; the dataset will be a useful by-product. The project starts with the available annotated Auslan data. The first-generation recogniser will enable the extension of that data with cost-effective annotation of unannotated data, e.g. through known and unknown sign localisation and discovery. This will facilitate bootstrapping for iterative improvement of the recogniser’s performance and robustness. On the other hand, the generator will produce potentially unlimited amounts of annotated synthetic data that could be very useful for computational modelling. It is important to note that this whole process is possible because of the existing datasets and the work of LDaCA.

<br>

**After this project, what else do you hope to work on in the future?**

This project will build the foundations for the use of the technologies in more advanced communication instances, including cheap and effective real-time on-screen spoken language translation during newscasts and emergency broadcasts. I hope to continue this line of research in the future and build upon these foundations. Given the complexity and richness of sign language communication, building this type of advanced technology is a truly ambitious endeavour that requires long-term dedication and effort.

<br />
