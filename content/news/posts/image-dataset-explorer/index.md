---
title: "Analyse image collections with the Image Dataset Explorer"
date: 2025-12-08
draft: false
description: "Analyse image collections with the Image Dataset Explorer"
---

by {{< profile id="lea" >}}

<br>

**A new digital tool helps HASS researchers analyse collections of images.**

Humanities researchers can unlock a powerful source of cultural data by working with image collections. Images proliferate increasingly online, and carry meaning and currency in the digital world. They are also sites for language — [think of the thousands of neon signs or street names a collection of pictures might capture](https://www.youtube.com/watch?v=hPjzI_4pNug).

<br>

{{< image Src="/image-dataset-explorer/SLNSW_FL20769700.jpg" Alt="Adults and children at Chinese lessons (January 1945)." Desc="Figure 1: Adults and children at Chinese lessons (January 1945)." Title="Adults and children at Chinese lessons (January 1945)" Ref="Mitchell Library, State Library of New South Wales. Accessed through Opening the Multilingual Archive of Australia (OMAA)">}}

<br>

But how can researchers explore and analyse large image collections, and where should they begin?

Our Research Analytics Lead Sam Hames teamed up with the University of Queensland (UQ) Centre for Digital Cultures and Societies (DCS) to answer this question, using [image clustering](https://en.wikipedia.org/wiki/Cluster_analysis) as a natural starting point. Sam was inspired by the *[Image Machine](https://github.com/qut-dmrc/ImageMachine)* at Queensland University of Technology, a complex toolkit for visualising large image collections by producing clusters of similar images. Such large collections aren't always the kind that are on a researcher's desktop, so Sam set out to create a simpler alternative to the Image Machine for smaller collections.

<br>

Sam was joined on this project by student Jasper Chong as part of UQ’s Summer Research Experience program, hosted through DCS.

“I just lobbed this problem at him and we got started building something. Jasper's background is in computer science, and this was one of his first experiences working with researchers in the humanities, so it’s been a good learning experience for him,” said Sam.

<br>

Their approach mirrored the [Language Technology and Data Analysis Laboratory (LADAL) tools](https://ladal.edu.au/), a lightweight Jupyter notebook suite developed by LDaCA Chief Investigator Martin Schweinberger. At the end of the eight-week summer project, Jasper and Sam produced a working Jupyter notebook that ingests zip files containing images, returns an HTML file and provides some basic visualisations of the dataset. Feedback from DCS researchers Nick Carah and Luke Munn throughout development allowed Sam and Jasper to make decisions about how they could best align the tool to researcher needs. The tool will help researchers to make sense of large collections of images, without manually scrolling back and forth between hundreds or thousands of different images.

“What I'm really hoping is that this will be a prototype that will be picked up and developed a bit further, by the [Australian Internet Observatory](https://internetobservatory.org.au/) for example. This has been a really fun crossover project,” said Sam.

<br>

Sam identified two main types of research problems the tool can help with:

The first problem is HASS researchers needing to explore an image dataset. The Dataset Explorer can help these researchers answer questions like, ‘What kinds of images appear here?' and 'How can I begin to make sense of this dataset?'.

The second problem relates to researchers interested in how online algorithms handle images. These researchers are asking questions like, 'How do different algorithms approach the same dataset?’ and 'What does one particular algorithm mean compared to another algorithm?'. This critical approach allows them to better understand why we see the images we do in online spaces, especially on social media. This approach can also give them a better understanding of how social media algorithms are trained.

<br>

{{< image Src="/image-dataset-explorer/image-dataset-explorer-output.png" Alt="A visualisation output from the Explorer as applied to Sam's Facebook data download." Desc="Figure 2: A visualisation output from the Explorer as applied to Sam's Facebook data download. Each dot represents an image — the selected box of images (lower left) corresponds to the images displayed on the right-hand panel. The embedding and layout process has grouped the emoji reactions and stickers found in the images into a group." Title="A visualisation output from the Explorer as applied to Sam's Facebook data download." Ref="Sam Hames">}}

<br>

The notebook produces visualisations by generating different types of 'image embeddings'. An image embedding condenses the features of an image, such as colour, composition and arrangement of objects, into a small numerical representation which can then be compared. An image embedding is what lets us know that two images with crowds of people are more similar than a photo of a crowd and a photo of a forest. These embeddings come out of algorithms that aim to tell us things like ‘This image has trees in it', or ‘This image depicts a crowd of people’. The Image Dataset Explorer uses colour histograms, [VGG algorithms](https://www.sciencedirect.com/topics/computer-science/vgg-19-convolutional-neural-network) and [OpenAI's CLIP model ](https://openai.com/index/clip/)to produce image embeddings that begin to map out the internal structure of the dataset. By choosing different types of embeddings, the notebook allows users to make comparisons between how different embedding methods “see” images.

<br>

Sam and Jasper tested the notebook on a collection of images from the Instagram hashtag #BNEeats. The algorithms clustered the images in different ways; it grouped images into 'burgers', 'pizzas' and 'coffees’, but it also grouped text-based graphics like menus, advertisements and flyers. As well as the content of the images, some groupings focused on finer distinctions like the angle of the photo. This led to clusters like 'white plates photographed from above'.

<br>

“At the moment, it's a starting point for getting a high level picture of what's in a collection of images, for one group of people. For another group of people, it’s a test bed for different algorithms,” said Sam. “One of the things I'm really hoping to do in future with this work is to incorporate some really old and 'boring' methods as a comparison — which are no longer relevant from a computer science perspective, but I think could be very useful from a humanities perspective.”

Sam identified a further crossover for language research — the approaches taken with the Image Dataset Explorer could in principle be applied to text as well. This crossover presents exciting opportunities for future projects that will support HASS researchers to answer a multitude of different questions.

<br>

<a name="fn-1">1</a> Thanks to Simon Musgrave and Teresa Chan for their helpful comments on this blog post. [↩](#back-1)

<br>
