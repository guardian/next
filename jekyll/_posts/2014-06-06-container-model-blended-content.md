---
layout: article
title: The container model and blended content – a new approach to how we present content on the Guardian
author: nickhaley
summary: A key difference between our new beta site and the current Guardian site is the way we approach content curation and presentation.
discussion: p/3ppcq
---
One of the key differences between our new beta site and the current Guardian site is the way we approach content curation and presentation.

## The birth of “containers” and the container model

When we first started designing our responsive site last year we challenged ourselves to think of new ways to improve the discovery and promotion of our content, not just on the homepage, but all our section pages, article, live blog, gallery and video pages. This is because even though our current site is familiar and has been successful, we knew from speaking to users that it’s not always that easy to use.

Our vision is to create a site which builds a long lasting relationship between our audience and the Guardian. We want to turn visitors into readers, and turn visits into journeys, and improved content discovery will play a big part in achieving that vision. 

Early on in the UX process we created lots of different concepts on mobile, tablet and desktop, exploring how we might organise stories in different ways, and also how those stories could be presented. 

We looked at things like fast vs slow content areas, text vs visual display, streams of fluid content vs clearly marked zones. As well as organising content we also spent time exploring how a responsive design system could support these different layouts across multiple devices. Alex Breuer has talked previously about one part of that, the responsive grid [here](http://next.theguardian.com/blog/designing-in-the-open/).

<img src="/assets/images/containers/sketch.png" style="width:100%;max-width:650px;" />

*Early wireframes explorations by UX architect [Karima Saad](https://twitter.com/_karima).*

As part of our product discovery process the team ran several ideation workshops with colleagues in editorial and commercial, as well as involving [Information Architects](http://ia.net), a design agency with experience in digital news. It was during these workshops with Oliver Reichenstein and Konstantin Weiss of iA where the concept of containers and the container model really came to life.

From the outset we knew we wanted to create a modular system. However we were wrestling with how we could maintain a consistent hierarchy of stories across desktop, tablet and mobile whilst still allowing a rhythm and pace as you move through the site, something we felt was lacking in other responsive sites. Initially just a rough sketch on a whiteboard our definition of a container became the following:

* **A container is a full width horizontal element** which contains a collection of content. 
* **Pages hold a series of containers which are stacked** on top of each other, the most important at the top and the least important at the bottom. 
* **Containers are self sufficient** (hence the name) and as a result can easily appear in multiple locations in a variety of combinations. 
* As the screen size gets smaller or larger, the **content inside adjusts to the width of the screen**.

With the container model we move away from thinking about specific pages on the site and how they might be filled with content, instead we start first with the content and each page is simply seen as a series of containers, whether we are designing the homepage, a section page like football, an article or live blog. The final order of those containers is the one which makes most sense to the business and our audience, something we discovery by testing.

<img src="/assets/images/containers/containers.png" style="width:100%;max-width:650px;" />

*How containers can work across the homepage, fashion section and an article page.*

## The building blocks of a container

The anatomy of a container is as follows. A container contains multiple slices of content which can be combined in different ways. Inside a slice are different elements, each representing a single story. The content inside each container can be promoted differently through the use of volume controls and a container can also be skinned depending on tone. Building up each container from separate elements and then slices gives us an incredible amount of flexibility whilst reducing the amount of code needed to maintain it.

<img src="/assets/images/containers/container_anatomy.png" style="width:100%;max-width:650px;" />

*Diagram of how elements and slices are combined to create containers.*

We quickly realised that the container model gave us the beginnings of a really flexible reusable design system, something we believed would help facilitate the engaging content discovery experience we were striving for. 

As stacked together containers are in effect just a series of lists, the container model also helps us internally when defining what appears on a new front, article or vertical page.  We felt this was important because when the relative importance of content is clearly defined on the page, it is more easily understood by our audience. It also speeds up the creation process, one of our editorial colleagues was able to configure twenty six section fronts in a single day using an internal tool and api queries.

As well as speed of creation, the container model allow us to distribute content quickly and easily across multiple page types. A container such as “most popular” can appear on the homepage, an article or a live blog in different positions, however it only needs to be built once and we know it will work straightaway. 

## Blended content

We also ran workshops with Information Architects around content strategy. Originally we had envisaged keeping the familiar section content areas which we had launched with on our responsive mobile site, however the more we thought about this type of classification system, the more we saw it as a hindrance rather than a help. 

From previous UX research we knew that people make choices about what to read based on personal relevance rather than precisely where content lives on the site. Rather than containers on the page simply replicating our primary navigation, why not separate the two? So instead of containers with the latest stories from news, sport, comment, culture, travel etc why not think of new ways to slice our content. Could this improve content discovery and promotion? 

Why not have a container for “features”, “people in the news”, “reviews”, “opinion and analysis”, “series” “in brief “ or “in depth”. As momentum around blended content grew we also wanted to boldly explore a "news" container containing both news and sport stories, traditionally two very separate areas of the newsroom.

This way of thinking and curating our content became known as "blended content". Each container is then filled with content containing a blend of verticals, a blend of tones or both. A container full of blended content can aggregate content from across the whole of the Guardian. Rather than pigeonholing and presenting content on the basis of how it was commissioned, blending frees it to appear anywhere in any combination.

## Concept validation

We were excited about the concept but would it work? Now we had an initial model and some early designs, the next thing to do was validate it through user research and internal sessions. Our validation in product discovery covers a lot of areas including technical and commercial considerations but initially the two key questions for us were:

1. Do users want to consume news in this way? Does it appeal and have value for them? 
2. Can this model be supported by editorial? 

To validate quickly we setup multiple research activities, lab sessions using early prototypes in the UK and US, as well as a larger remote evaluation with 500 users. We did multiple lab sessions with several different pages in the end, each time quickly iterating on what we had learned.

<img src="/assets/images/containers/first_test.png" style="width:100%;max-width:650px;" />

<br />
*Prototype homepage screens across desktop and mobile.*

## What did we learn?

For the majority of users, blended containers offered a good way to discover content through browsing. Blended containers were a vehicle which exposed content to people they may not ordinarily encounter but is interesting to them. The containers both support existing patterns of behaviour and may spur on new patterns. 

However blended containers are not a silver bullet. Be removing section links from the page the navigation has to work much harder. For very task driven users who may wish to go from the homepage to a specific section, the navigation needs to be prominent, clear and easy to use.

> “It makes me to want to explore more of the page”

> “It’s clearer and more concise, more organised”

*– Quotes from user research sessions.*

Out of the research, whilst mindful of the navigation feedback, we took confidence in the idea and decided to move forward with the next phase of product discovery, which was to start building some containers and a/b test performance against our existing section based information architecture.

## Putting blended content into the wild

Our a/b tests initially focused on the homepage, our most popular front, and we built an initial set of blended containers. These were:

* **News** - containing news and sport stories
* **Features** - primarily non news stories
* **Most popular** - the most read stories across the site
* **Comment & debate** - containing not just our Comment is Free stories but comment and analysis across the Guardian
* **People in the news** - stories and interviews with people in the news
* **Watch and listen** - video and audio from across the Guardian
* **Special** - used for short duration news events like the Oscars where we want to package together stories on a single theme

These containers were populated by editorial staff using our new curation tool, and their feedback was crucial in understanding how blended containers worked when used in anger on a live newsdesk. 

We showed a homepage of blended containers to a small percentage of our beta audience for four weeks, closely monitoring the overall performance of the page and also the performance of each individual container. Our first tests showed that the overall performance of the page was good, but some areas like traffic to sport were suffering. There was also a lot of discussion internally as to whether a single news container containing news and sport stories was really workable.

Adding a sport container to the page would change our model of “blended content” but was necessary to improve performance so we made the change, and monitored the results. Another two weeks of tests were conducted and we could see that the performance of the page was better than the control.

Having validated our initial research findings with real data we felt confident in making the decision to push the change to 100% of our beta audience. Blended containers are now live on the site, and have also been implemented on our [new smartphone and tablet apps](http://www.theguardian.com/global/ng-interactive/2014/may/29/-sp-the-guardian-app-for-ios-and-android).

<br />

<img src="/assets/images/containers/proposition__image.png" style="margin:0 auto;width:100%;max-width:420px;" />

## The future

The container model is now in place on our new site and apps, and blended containers give us a lot more flexibility in how we think about our content. Through rapidly experimenting with what does and doesn’t work we’ve already started to move away from the original set of containers we tested, for example splitting features into “in brief” and “in depth” on the homepage. You can also see on the film section that editors are experimenting not only with a reviews container, which you would expect, but “polls and quizzes” and “lists and favourites”. There is lots more to come. We want to explore containers for specific news events, personalised containers, as well as those which are more tool based, like a container for stories you’ve “saved for later” or from the people you “follow” on the Guardian.

Our ability to experiment is limited only by our ability to think of interesting new ways to curate and present our content. We believe this flexibility will allow us over time to create the best experience possible for our audience on any device they choose.

Please feel free to leave any comments you have below. 