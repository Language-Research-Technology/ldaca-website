---
layout: home
title: "Events"
# aliases:
#   - "/events/"
---

<SimpleHero title="Training & events" description="Discover upcoming workshops and events, learn more about past events, and access event recordings and recaps."/>

<section class="max-w-[1280px] mx-auto py-4 px-4 sm:px-6 md:px-8 lg:px-2">
<div class="flex flex-wrap gap-2">
  <a href="#upcoming-events" class="p-5 rounded-3xl transition-all bg-[#79a38d] text-white text-center hover:opacity-80 min-w-[170px]">Upcoming events</a>
  <a href="#event-recordings" class="p-5 rounded-3xl transition-all bg-[#79a38d] text-white text-center hover:opacity-80 min-w-[170px]">Event recordings</a>
  <a href="#past-events" class="p-5 rounded-3xl transition-all bg-[#79a38d] text-white text-center hover:opacity-80 min-w-[170px]">Past events</a>
</div>
</section>

<Carousel 
  id="upcoming-events"
  class="scroll-mt-20"
  shade="light"
  :opacity="100"
  heading="UPCOMING EVENTS"
  :items="[
    {
        title: 'RO-Crate Clinic Drop-in',
        link: '/training-events/events/ro-crate-clinic-drop-in',
    },
  ]"/>

<Carousel 
  id="event-recordings"
  class="scroll-mt-20"
  shade="light"
  backgroundColor="#EAE4D68C"
  :opacity="100"
  heading="EVENT RECORDINGS"
  buttonText="Watch recording"
  :items="[
      {
        title: 'Language Data Commons of Australia - HASS & Indigenous Research Data Commons Symposium 2025',
        link: '/training-events/events/2025/hass-irdc-symposium-2',
      },
      {
        title: 'Showcase of Language Data Infrastructure - Language Data Commons of Australia',
        link: '/training-events/events/2025/hass-irdc-symposium-1',
      },
      {
        title: 'The ParlaMint corpora of European parliamentary proceedings',
        link: '/training-events/events/2025/parlamint-corpora',
      },
      {
        title: 'IPrA2025: The Pragmatics of Indigenous Languages',
        link: '/training-events/events/2025/ipra2025',
      },
      {
        title: 'Indigenous Data Governance Masterclass',
        link: '/training-events/events/2025/idg-masterclass',
      },
    ]"/>

<Carousel 
  yearFilter="true"
  id="past-events"
  class="scroll-mt-20"
  shade="light"
  :opacity="100"
  heading="PAST EVENTS"
  :items="[
    {
        title: 'HASS and Indigenous Research Data Commons Summer School 2026',
        link: '/training-events/events/2026/hass-irdc-summer-school',
    },
    {
        title: 'Get Started with Federal Hansard for Humanities, Arts, and Social Sciences Research',
        link: '/training-events/events/2025/hansard-2',
    },
    {
        title: 'Sustainable Data for Humanities Researchers',
        link: '/training-events/events/2025/sustainable-data-for-humanities-researchers',
        category: 'WORKSHOP',
    },
    {
        title: 'Steven Bird: Language Technology and the Metacrisis',
        link: '/training-events/events/2025/language-technology-metacrisis',
    },
    {
        title: 'Get started with Hansard for humanities, arts, and social sciences research',
        link: '/training-events/events/2025/hansard',
    },
    {
        title: 'HASS and Indigenous Research Data Commons Summer School 2025',
        link: '/training-events/events/2025/hass-irdc-summer-school',
    },
    {
        title: 'Indigenous Data Governance Masterclass',
        link: '/training-events/events/2025/idg-masterclass',
    },
    {
        title: 'Solving 10 research challenges with the ARDC HASS and Indigenous Research Data Commons',
        link: '/training-events/events/2024/solving-10-research-challenges-ardc',
    },
    {
        title: 'Exploring text using concordances',
        link: '/training-events/events/2024/exploring-text-using-concordances',
    },
    {
        title: 'Text analytics with R and LADAL',
        link: '/training-events/events/2024/text-analytics-r-ladal',
    },
    {
        title: 'A glamorous introduction to text analytics for social media (Reddit)',
        link: '/training-events/events/2024/text-analytics-reddit',
    },
    {
        title: 'Indigenous Data Governance: A discussion',
        link: '/training-events/events/2024/indigenous-data-governance',
    },
    {
        title: 'Using Hansard & Other Parliamentary Proceedings for Your Research',
        link: '/training-events/events/2024/hansard',
    },
    {
        title: 'Data Migration Skills Workshop',
        link: '/training-events/events/2024/data-migration-skills',
    },
    {
        title: 'Introduction to Computational Text Analytics',
        link: '/training-events/events/2024/computational-text-analytics',
    },
    {
        title: 'Understanding the social meaning of language variation in Australian English',
        link: '/training-events/events/2024/language-variation-australian-english',
    },
    {
        title: 'Language Data Commons of Australia – Co-Design Workshops',
        link: '/training-events/events/2024/co-design-workshops',
    },
    {
        title: 'HASS and Indigenous Research Data Commons Computational Skills Summer School 2024',
        link: '/training-events/events/2024/hass-irdc-summer-school',
    },
    {
        title: 'Workshop on community language corpora in Australia',
        link: '/training-events/events/2023/community-language-corpora-australia',
    },
    {
        title: 'Workshop on Language Corpora in Australia',
        link: '/training-events/events/2023/language-corpora-australia',
    },
    {
        title: 'Australian Text Analytics Platform: New tools for text analysis',
        link: '/training-events/events/2023/atap-tools-text-analysis',
    },
    {
        title: 'Exploring Digital Text Collections with Juxtorpus: A Taster Webinar on the Latest ATAP Text Analysis Tool',
        link: '/training-events/events/2023/juxtorpus',
    },
    {
        title: 'A hands-on guide to Semantic Tagger for your text data analysis',
        link: '/training-events/events/2023/semantic-tagger',
    },
    {
        title: 'Jefferson Transcript Search Tool',
        link: '/training-events/events/2023/jefferson-transcript-search-tool',
    },
    {
        title: 'Australian Text Analytics Platform tools: Discursis, Juxtorpus, Quotation tool and Semantic tagger',
        link: '/training-events/events/2023/atap-tools-discursis-juxtorpus-quotation-semantic-tagger',
    },
    {
        title: 'HASS Research Data Commons and IRC Computational Skills Summer School',
        link: '/training-events/events/2023/hass-irc-summer-school',
    },
    {
        title: 'Pre-conference workshop (before the 2022 Conference of the Australian Linguistic Society)',
        link: '/training-events/events/2022/pre-conference-workshop-als',
    },
    {
        title: 'Paweł Kamocki: European Union Data Protection initiatives and their consequences for research',
        link: '/training-events/events/2022/eu-data-protection',
    },
    {
        title: 'Geolocating Australian Historical Resources',
        link: '/training-events/events/2022/geolocating-australian-historical-resources',
    },
    {
        title: 'Learn how to collect and analyse comments on YouTube videos using the open-source tools Youte and Discursis',
        link: '/training-events/events/2022/youte-discursis',
    },
    {
        title: 'Finding quotes and speakers in text using the ATAP quotation tools',
        link: '/training-events/events/2022/atap-quotation-tools',
    },
    {
        title: 'Computational Thinking in the Humanities',
        link: '/training-events/events/2022/computational-thinking-humanities',
    },
    {
        title: 'Václav Cvrček: The Czech National Corpus',
        link: '/training-events/events/2022/czech-national-corpus',
    },
    {
        title: 'Advance care planning for your research data',
        link: '/training-events/events/2022/advance-care-planning',
    },
    {
        title: 'Barbara McGillivray: The Journal of Open Humanities Data',
        link: '/training-events/events/2022/open-humanities-data',
    },
    {
        title: 'Network analysis and Topic Modeling on Twitter data using R',
        link: '/training-events/events/2022/network-analysis-topic-modeling',
    },
    {
        title: 'Keoni Mahelona: A practical approach to Indigenous data sovereignty',
        link: '/training-events/events/2022/indigenous-data-sovereignty',
    },
    {
        title: 'Monotreme Mania! Comparative text analytics on Twitter data',
        link: '/training-events/events/2022/comparative-text-analytics-twitter',
    },
    {
        title: 'An introduction to Jupyter notebooks for text analysis: Virtual workshop for absolute beginners',
        link: '/training-events/events/2022/jupyter-notebooks-text-analysis',
    },
    ]"/>

<Carousel 
  id="on-the-blog"
  shade="light"
  backgroundColor="#EAE4D68C"
  :opacity="100"
  heading="ON THE BLOG"
  :items="[
      {
        title: 'Reflecting on the Darwin digital languages collections workshop',
        link: '/resources/posts/darwin-digital-collections-workshop'
      },
      {
        title: 'Indigenous data governance: A discussion',
        link: '/resources/posts/ID-gov-panel-2024'
      },
      {
        title: 'Arne ingkerreke apurtelhe-ileme: Project launch',
        link: '/resources/posts/VeronicaDobson-launch2025'
      }
    ]"/>

<ContactBox 
  heading="Stay up to date"
  description="Get the latest news, events and releases delivered to your inbox."
  buttonText="Subscribe to our newsletter"
  buttonLink="https://ldaca.us13.list-manage.com/subscribe?u=ef8667be63aefb1e35062a797&id=de4b682e46"
/>