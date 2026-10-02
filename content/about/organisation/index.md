---
title: "Organisation"
layout: home
---

<SimpleHero breadcrumb="About > About us" title="About us" description="Learn more about what we do, our aims, our strategy and who we work with"/>

<SimpleNavigation
  title="Practical support for working with language data"
  description="The Language Data Commons of Australia (LDaCA) is connecting people with language data through infrastructure that makes language collections sustainable and accessible in culturally appropriate ways. <br/>
  Our resources support language work at all stages of the data lifecycle, from collecting and caring for language data to finding, accessing, analysing and reusing it.<br/>
  By connecting Australia's language collections, communities and researchers, the project aims to contribute to a strong foundation for language research and community-led outcomes."
  :contents="[
    { label: 'What is LDaCA?', href: '#what-is-ldaca' },
    { label: 'Our strategy', href: '#our-strategy' },
    { label: 'Our guiding principles', href: '#our-principles' },
    { label: 'Governance', href: '#governance' },
    { label: 'Partners & advisors', href: '#partners-advisors' },
    { label: 'About our branding', href: '#about-our-branding' },
  ]" />
  
<div
  class="w-full max-w-[1184px] h-[5.6px] mx-auto"
  style="
    background-image: url('/images/section-divider.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  "
></div>

<CarouselLarge
    id="what-is-ldaca"
    heading="WHAT IS LDACA?"
    backgroundColor="white"
    tileView="true"
    :items="[
    {
        description: 'Australia is a massively multilingual country in one of the world’s most linguistically diverse regions. It holds significant collections that document this rich intangible cultural heritage including materials relating to Aboriginal and Torres Strait Islander languages, Australian Englishes and other migrant languages, sign languages and languages of the Pacific region. Yet many of these collections remain fragmented and difficult to discover or are at risk of being lost. <br> <br> LDaCA is bringing these collections together within a nationally coordinated infrastructure, making them easier to find, access and analyse, while ensuring they are managed in culturally, ethically and legally appropriate ways. <br> <br> By connecting collections, tools and expertise across institutions and communities, LDaCA is helping unlock new opportunities for research, analysis and other language work.',
        image: '/images/how-we-can-help/Share.png', 
    },
    {
        title: 'What we do',
        description: '\n<details><summary><b>Build shared technical infrastructure and standards for sustainable data management</b></summary><p>LDaCA is building technical capabilities based on best-practice international standards for sustainable data management. High-quality description of data is a foundation of this approach, as it enables reuse of data in the future.</p></details>\n<details><summary><b>Develop portals that improve the discovery and access of language data</b></summary><p>The online interfaces provided by LDaCA make it easier for researchers and other users of language data to find the materials they need to support their work. Different portals are being built to fit the needs of different users.</p></details>\n<details><summary><b>Create governance frameworks guided by FAIR and CARE principles</b></summary><p>In creating and building on best-practice standards and approaches to working with data, LDaCA provides a model for the future. Our shared frameworks include the Protocols for Implementing Long-term Archival Repository Services (PILARS) and the Indigenous Data Governance Framework.</p></details>\n<details><summary><b>Provide access to language research analytic tools</b></summary><p>Through the Language Technology and Data Analysis Laboratory (LADAL) and our collaboration with Sydney Informatics Hub and Sydney Corpus Lab, LDaCA is making tools for analysing text available to researchers across various disciplines and various skill levels.</p></details>\n<details><summary><b>Deliver training that supports digital research skills and best-practice data stewardship</b></summary><p>As well as making data accessible and providing tools for working with that data, LDaCA assists researchers and communities by offering training in digital research practices. Our training supports improved accountability, reproducibility and a strengthened research culture.</p></details>',
        image: '/images/how-we-can-help/Process.png',
    },
    {
        title: 'Who we support',
        description: '\n<details><summary><b>Communities and language custodians</b></summary><p>Our work supports communities to find, access and use data about their languages. We also provide resources to support collections maintained by individual language custodians and community organisations.</p></details>\n<details><summary><b>Researchers and research organisations</b></summary><p>We are building infrastructure for researchers, research support staff and research librarians to open up the research possibilities of Australian language data. Our work supports not only research institutions, consortiums and programs but also independent and citizen researchers.</p></details>\n<details><summary><b>Collecting institutions</b></summary><p>We provide infrastructure and best-practice standards for collecting institutions, including GLAM (galleries, libraries, archives and museums) institutions, higher education providers and Aboriginal and Torres Strait Islander community-controlled organisations.</p></details>',
        image: '/images/subheadings/Organisation.png',
    }
    ]"
/>
<CarouselLarge
  id="our-strategy"
  heading="OUR STRATEGY"
  buttonText="View the strategy"
    description='Our strategy addresses common challenges in working with language materials, from organising and managing data to finding, accessing and analysing it.'
  :items="[
    {
      title: 'Towards a more connected language data ecosystem',
        description: 'Our execution strategy sets out how LDaCA is moving from fragmented data, tools and guidance towards a more connected and sustainable approach to working with language data. \n\nThrough shared infrastructure, standards, tools, training and governance, we are helping communities, researchers and data stewards better organise and conserve language data, manage access and reuse, and analyse data at scale. Central to this work is supporting language communities to have greater control over their language data.',
        image: '/about/organisation/ExecutionStrategy_short.png',
        link: '/about/organisation/LDaCAExecutionStrategyOverview.pdf',
    },
  ]"
   />

<CarouselLarge
    id="our-principles"
    heading="OUR GUIDING PRINCIPLES"
    backgroundColor="white"
    buttonText="Read more"
    tileView="true"
    :items="[
    {
        title: 'FAIR Principles',
        description: '<b>Findable, Accessible, Interoperable, Reusable</b>\n\nThe FAIR principles aim to address issues in data management and stewardship. Data and metadata should be easily <b>findable</b> for both humans and computers. Once found, data needs to be <b>accessible</b>. Users need to know how they can access the data, including any authentication and authorisation requirements. The data should be <b>interoperable</b> with other data and with applications or workflows for analysis, storage and processing. The ultimate goal of FAIR is to optimise the <b>reuse</b> of data. To achieve this, metadata and data should be well-described so that they can be replicated and/or combined in different settings. \n\nLDaCA supports FAIR data practices and initiatives that make data and related research outputs FAIR. Implementation will vary across disciplines and will need discipline-specific approaches and standards.',
        image: '/about/organisation/FAIR.png', 
        link: '/about/principles/#fair-principles',
    },
    {
        title: 'CARE Principles',
        description: `<b>Collective benefit, Authority to control, Responsibility, Ethics</b>\n\nThe CARE Principles for Indigenous Data Governance, developed by the <a href='https://www.gida-global.org/' class='text-[#79A38D] hover:underline hover:decoration-dotted hover:decoration-2 hover:underline-offset-2 transition-colors font-bold'>Global Indigenous Data Alliance (GIDA)</a>, aim to complement the FAIR principles. \n\nData ecosystems should be designed and function in ways that enable Indigenous Peoples to derive <b>collective benefit</b> from the data. Indigenous Peoples’ rights and interests in Indigenous data must be recognised and their <b>authority to control</b> such data should be empowered. Those working with Indigenous data have a <b>responsibility</b> to share how those data are used to support Indigenous Peoples’ self-determination and collective benefit. With respect to <b>ethics</b>, Indigenous Peoples’ rights and wellbeing should be the primary concern at all stages of the data life cycle and across the data ecosystem.\n\nLDaCA supports the CARE principles to further extend data management principles, ensuring that Indigenous communities benefit from the data.`,
        image: '/about/organisation/CARE.png', 
        link: '/about/principles/#care-principles',
    },
    ]"
/>

<div
  class="w-full max-w-[1184px] h-[5.6px] mx-auto"
  style="
    background-image: url('/images/section-divider.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  "
></div>

<CarouselLarge
    id="governance"
    heading="GOVERNANCE"
    backgroundColor="white"
    buttonText="Learn more"
    :items="[
    {
        title: 'About the steering committee',
        description: 'LDaCA is guided by a Steering Committee that provides direction on project issues, advocates for the project and ensures clear communication with stakeholders.\n\nThe Steering Committee oversees project outcomes, approves major changes and facilitates access to subject matter experts when needed. It is made up of Chief Investigators and project advisors. \n\nMembers bring expertise in governance, leadership, partnerships, data, technology, research and community engagement, ensuring effective project oversight.\n\n Read more about LDaCA’s Steering Committee including members, Terms of Reference and meeting communiques.',
        image: '/about/organisation/governance.png', 
        link: '/about/steering-committee',
    },
    ]"
/>

<div
  class="w-full max-w-[1184px] h-[5.6px] mx-auto"
  style="
    background-image: url('/images/section-divider.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  "
></div>

<People 
    id="partners"
    heading="PARTNERS"
    description="LDaCA is part of the Australian Research Data Commons’ (ARDC’s) HASS and Indigenous Research Data Commons. It is also a collaboration with the institutions and organisations listed below."
    :items="[
        {
          name: 'Visit website',
          affiliation: 'University of Queensland',
          image: '/images/partner-logos/square-logos/UqLogo.png',
          link: 'https://www.uq.edu.au/',
        },
        {
          name: 'Visit website',
          affiliation: 'Australian National University',
          image: '/images/partner-logos/square-logos/AnuLogo.png',
          link: 'https://www.anu.edu.au/'
        },
        {
          name: 'Visit website',
          affiliation: 'Batchelor Institute',
          image: '/images/partner-logos/square-logos/BatchelorLogo.png',
          link: 'https://www.batchelor.edu.au/'
        },
        {
          name: 'Visit website',
          affiliation: 'First Languages Australia',
          image: '/images/partner-logos/square-logos/FLALogo.png',
          link: 'https://www.firstlanguages.org.au/'
        },
        {
          name: 'Visit website',
          affiliation: 'Queensland University of Technology',
          image: '/images/partner-logos/square-logos/QUTLogo.png',
          link: 'https://www.qut.edu.au/'
        },
        {
          name: 'Visit website',
          affiliation: 'The University of Melbourne',
          image: '/images/partner-logos/square-logos/UniMelbLogo.png',
          link: 'https://www.unimelb.edu.au/'
        },
        {
          name: 'Visit website',
          affiliation: 'The University of Sydney',
          image: '/images/partner-logos/square-logos/USydLogo.png',
          link: 'https://www.sydney.edu.au/'
        },
    ]"/>

<div class="px-[8px] max-w-[1184px] mx-auto">
  <hr class="mt-4 border-0 border-t-[2pt] border-dotted border-gray-400">
</div>

<People 
    id="Advisors"
    heading="ADVISORS"
    :items="[
        {
          name: 'Visit website',
          affiliation: 'Pacific and Regional Archive for Digital Sources in Endangered Cultures (PARADISEC)',
          image: '/images/partner-logos/square-logos/paradisec.png',
          link: 'https://www.paradisec.org.au/',
        },
        {
          name: 'Visit website',
          affiliation: 'Common Language Resources and Technology Infrastructure (CLARIN)',
          image: '/images/partner-logos/square-logos/CLARIN.png',
          link: 'https://www.clarin.eu/'
        },
        {
          name: 'Visit website',
          affiliation: 'Australian Institute of Aboriginal and Torres Strait Islander Studies (AIATSIS)',
          image: '/images/partner-logos/square-logos/AIATSIS.png',
          link: 'https://aiatsis.gov.au/'
        },
    ]"/>

<div
  class="w-full max-w-[1184px] h-[5.6px] mx-auto"
  style="
    background-image: url('/images/section-divider.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  "
></div>

<CarouselLarge
    id="about-our-branding"
    heading="OUR BRANDING"
    backgroundColor="white"
    tileView="true"
    :items="[
    {
        title: 'About the artwork',
        description: 'LDaCA’s branding is based on an artwork by Dylan Sarra, which draws inspiration from the Burnett River Petroglyphs and acknowledges the Gooreng Gooreng communal knowledges embodied within these symbols. Like the Indigenous language and cultural data dispersed across the institutions and archives that LDaCA works with, the Burnett River Petroglyphs also have a history of dispersal: jackhammered and scattered across Queensland in 1972, their story has survived through people. And it is people who remain central to the data LDaCA engages with.',
        image: '/images/LDaCA_logo_Dark-02-02.svg', 
    },
    {
        title: 'About the artist',
        description: 'Dylan Sarra is a Gooreng Gooreng/Taribelang artist from Central Queensland, based in Brisbane. Working across print, digital and sculpture, he explores identity and place — gently drawing audiences toward a more human understanding of the Indigenous experience. Dylan is committed to the research and sharing of cultural knowledge, and hopes his work inspires people to appreciate the role we all play in acknowledging First Nations peoples.',
        image: '/about/organisation/D_Sarra.jpg', 
    },
    ]"
/>
