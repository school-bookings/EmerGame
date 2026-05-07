// ================================================================
// EMERGENCE[Y] — CONTENT DATA
// Edit this file to change UI text, scenarios, events, and options.
// ================================================================

const UI_TEXT = {
  pageTitle:         'EMERGENCE[Y]: THE GAME',
  landingEyebrow:    ' · 2030–2090 · ',
  landingTitleMain:  'EMERGENCE[Y]',
  landingTitleSub:   'THE GAME',
  landingTagline:    'You\'re in charge of society over sixty years. How will you shape humanity?',
  landingPlayButton: '▶ \u00a0PLAY',
  pathEyebrow:       'Choose Your Focus Area',
  pathHeading:       'How will you tackle<br>the world\'s big problems?',
  pathSubtitle:      'Pick a path.',
  gameWordmark:      'EMERGENCE[Y]',
  gameYearLabel:     'Current Year',
  roundFormat:       'Round {round} / {total}',
  eventTagFormat:    '▸ Event {round} of {total} · {path}',
  optionLetterFormat: 'Option {letter}',
  chooseLabel:       'What do you do?',
  sidebarLabel:      'Key Markers',
  statLabels: {
    economy:     'The Economy',
    healthcare:  'Healthcare',
    education:   'Education',
    social:      'Social Justice',
    environment: 'Environment',
  },
  endEarlyButton:    '⏹ \u00a0End Game Early',
  impactForecastLabel: 'likely effects (? = unknown until you choose)',
  overlayTag:        'What happens next',
  overlayContinueBtn: 'NEXT EVENT →',
  overlayIncreasing: '↑ INCREASING',
  overlayDecreasing: '↓ DECREASING',
  overlayNoChange:   '— NO CHANGE',
  hiddenEffectTag:   'hidden effect revealed',
  otherEffectsLabel: '— other effects —',
  endEyebrow:        'Simulation Complete',
  endTitle:          'YOUR RESULTS',
  endLocationYear:   '{location} · {year}',
  endLocation:       'Victoria',
  verdictEyebrow:    'What happened to Victoria?',
  playAgainButton:   '↺ \u00a0PLAY AGAIN',
  verdicts: {
    gildedWasteland: {
      title:     'The Gilded Wasteland',
      narrative: 'The economy is booming — jobs are up, businesses are thriving, and the numbers look great on paper. But the environment paid the price. Rivers are struggling, forests have shrunk, and the natural systems that keep everything else running have taken a serious hit. Future generations will inherit a wealthy society with a damaged planet.',
    },
    beautifulStruggle: {
      title:     'The Beautiful Struggle',
      narrative: 'The ecosystems are recovering — wetlands are back, wildlife is returning, and the state is taking climate action seriously. But the economy is in trouble. Jobs are scarce, cost of living is high, and a lot of people are doing it tough. Protecting the planet was the right call. Now comes the hard part: figuring out how to pay for it.',
    },
    fracturedCommons: {
      title:     'The Fractured Commons',
      narrative: 'Real progress has been made on equality and justice — laws are fairer, opportunities are more spread out, and communities feel more included. But the health system is struggling badly. Hospitals are under pressure, waiting lists are long, and the people who most need care often can\'t get it. A fairer society still needs to keep its people healthy.',
    },
    educatedDivide: {
      title:     'The Educated Divide',
      narrative: 'Schools and universities are genuinely excellent — students are learning, skills are growing, and education outcomes are strong. But the gap between wealthy and disadvantaged communities has gotten wider, not smaller. A great education system is only great if everyone can actually benefit from it.',
    },
    weightOfConsequence: {
      title:     'The Weight of Consequence',
      narrative: 'The decisions were hard, and too many of them didn\'t land well. Across the board — the economy, health, education, the environment, and social equality — things are in a worse place than when you started. This isn\'t the end of the story. Communities are resilient and change is always possible. But it starts with being honest about what went wrong.',
    },
    stateTransformed: {
      title:     'A State Transformed',
      narrative: 'Across five major crises, almost every front came out ahead. The economy is strong, people are healthier, education is better, the environment is in reasonable shape, and communities are more equal than before. These things don\'t happen by accident — they\'re the result of making genuinely difficult decisions and sticking with them.',
    },
    prosperityAtAPrice: {
      title:     'Prosperity at a Price',
      narrative: 'Overall, things are in a pretty good place. People are doing better, services have improved, and the economy is holding up. But the environment got left behind. Nature doesn\'t send invoices — but it will eventually. The full cost of what was lost here hasn\'t shown up yet.',
    },
    richInEverything: {
      title:     'Rich in Everything But Money',
      narrative: 'A genuinely caring, connected community has emerged. People look out for each other, social support systems are strong, and equality has improved. The problem is the budget. The economy isn\'t generating enough to sustain all of this long-term. Good values need funding to survive — that\'s the next challenge.',
    },
    longMiddleGround: {
      title:     'The Long Middle Ground',
      narrative: 'No disasters, but no breakthroughs either. Sixty years of tough decisions produced a mixed record — some things got better, some got worse, most stayed roughly the same. Sometimes that\'s what governing looks like. The question for the next generation is whether "good enough" is actually good enough.',
    },
  },
};

// ================================================================
// STORY PATHS
// Each path has 5 events. Each event has 3 options.
// STAT_EFFECTS: economy, healthcare, education, social, environment
// CONSEQUENCE_INTRO: shown as the intro text for the NEXT event.
//   Leave empty ('') on the final event of each path.
// ================================================================

const ALL_STORY_PATHS = {

// ================================================================
// PATH 1 — ENVIRONMENT
// ================================================================
  environment: {
    PATH_TITLE:    'Environmental Crisis',
    PATH_SUBTITLE: 'Roots & Renewal',
    PATH_COLOUR:   'var(--colour-environment)',
    PATH_CARD_ICON:   '🌿',
    PATH_CARD_NAME:   'Environmental<br>Crisis',
    PATH_CARD_FLAVOR: 'Face climate disasters head-on — from bushfires and droughts to mass extinction. Every decision shapes the planet your children inherit.',

    EVENTS: [
      {
        EVENT_TITLE:   'Bushfires',
        DEFAULT_INTRO: 'A major bushfire has burned through towns in regional Victoria. Seventy percent of nearby forest has been destroyed, wildlife has been displaced, and property damage is estimated at over $500 million.',
        OPTIONS: [
          {
            OPTION_NAME:        'Work with Indigenous Land Experts to Prevent Future Bushfires',
            OPTION_DESCRIPTION: 'Partner with Indigenous knowledge holders to use traditional land management practices, such as cultural burning, to reduce future bushfire risks.',
            NARRATIVE_TITLE:    'Breaking News: Cultural Fire Practices Spread Across Australia',
            NARRATIVE:          'Over the next two decades, traditional land management helps reduce some bushfire risks and improves ecosystem health. However, long dry periods continue to worsen across many regions, and water supplies begin to fall dangerously low.',
            STAT_EFFECTS: { economy: -4, healthcare: -6, education: 8, social: 12, environment: 10 },
            CONSEQUENCE_INTRO:  'Traditional fire management helped the forests — but long dry periods are worsening across many regions, and water supplies have begun to fall dangerously low.'
          },
          {
            OPTION_NAME:        'Invest in Firefighting Technology',
            OPTION_DESCRIPTION: 'Use advanced fire detection systems, drones, and AI tools to predict and fight bushfires earlier.',
            NARRATIVE_TITLE:    'Breaking News: High-Tech Fire Systems Transform Disaster Response',
            NARRATIVE:          'New AI detection systems and firefighting drones help control bushfires faster than ever before. But rising temperatures and repeated fires begin to strain water supplies across the country.',
            STAT_EFFECTS: { economy: 3, healthcare: 6, education: 4, social: -4, environment: -6 },
            CONSEQUENCE_INTRO:  'High-tech firefighting helped control the blazes — but rising temperatures and repeated fires have begun straining water supplies across the country.'
          },
          {
            OPTION_NAME:        'Rebuild Fire-Resistant Communities',
            OPTION_DESCRIPTION: 'Rebuild homes and infrastructure quickly using fire-resistant materials and improved town planning.',
            NARRATIVE_TITLE:    'Breaking News: Bushfire Recovery Sparks Major Regional Rebuilding',
            NARRATIVE:          'Towns rebuild quickly with stronger infrastructure and fire-resistant designs. As communities grow again, long-term drought begins to place increasing pressure on water resources.',
            STAT_EFFECTS: { economy: 12, healthcare: 6, education: -3, social: 5, environment: -5 },
            CONSEQUENCE_INTRO:  'Communities rebuilt stronger than before — but as they grow again, long-term drought has begun placing increasing pressure on water resources.'
          }
        ]
      },

      {
        EVENT_TITLE:   'Water Scarcity',
        DEFAULT_INTRO: 'Long droughts, fires, and pollution cause major water shortages around the world. Cities struggle to supply drinking water, and countries begin competing for access to water.',
        OPTIONS: [
          {
            OPTION_NAME:        'Build Desalination Plants',
            OPTION_DESCRIPTION: 'Turn seawater into drinking water using large coastal desalination facilities.',
            NARRATIVE_TITLE:    'Breaking News: Massive Desalination Network Expands Coastal Cities',
            NARRATIVE:          'New desalination plants help supply water to many communities. However, agriculture still struggles with dry conditions, pushing scientists to develop crops that can survive with far less water.',
            STAT_EFFECTS: { economy: 10, healthcare: 6, education: 3, social: -4, environment: -10 },
            CONSEQUENCE_INTRO:  'Desalination plants helped coastal communities — but agriculture still struggles. Scientists are now developing crops that survive with far less water.'
          },
          {
            OPTION_NAME:        'Strict Water Rationing',
            OPTION_DESCRIPTION: 'Governments introduce strict limits on how much water people, farms, and businesses can use.',
            NARRATIVE_TITLE:    'Breaking News: Water Restrictions Reshape Daily Life',
            NARRATIVE:          'Strict limits on water use change how cities, farms, and industries operate. To keep food production stable, scientists begin searching for crops that can grow with far less water.',
            STAT_EFFECTS: { economy: -10, healthcare: 5, education: 2, social: -6, environment: 8 },
            CONSEQUENCE_INTRO:  'Rationing changed daily life across the country. To keep food production stable, scientists are now searching for crops that can grow with far less water.'
          },
          {
            OPTION_NAME:        'Water Recycling Technology',
            OPTION_DESCRIPTION: 'Invest in technology that cleans and reuses wastewater for farming, industry, and drinking.',
            NARRATIVE_TITLE:    'Breaking News: Breakthroughs in Water Recycling Transform Cities',
            NARRATIVE:          'Advanced recycling systems allow water to be reused many times. Even with these improvements, farmers still face extreme drought conditions, increasing demand for drought-resistant crops.',
            STAT_EFFECTS: { economy: 8, healthcare: 6, education: -2, social: 5, environment: -4 },
            CONSEQUENCE_INTRO:  'Recycling technology helped cities — but farmers still face extreme drought conditions, and demand for drought-resistant crops is rising fast.'
          }
        ]
      },

      {
        EVENT_TITLE:   'Drought Resilient Crops',
        DEFAULT_INTRO: 'Scientists create genetically modified crops that can grow with 50% less water. These crops could transform farming in dry regions.',
        OPTIONS: [
          {
            OPTION_NAME:        'Support Farmers to Switch Crops',
            OPTION_DESCRIPTION: 'Governments fund training and financial support to help farmers adopt drought-resistant crops.',
            NARRATIVE_TITLE:    'Breaking News: New Climate Crops Spread Across Farms',
            NARRATIVE:          'Farmers begin adopting drought-resistant crops, helping stabilise food production in dry regions. However, many wild ecosystems continue to struggle, and scientists warn that numerous species are nearing extinction.',
            STAT_EFFECTS: { economy: 10, healthcare: -2, education: 10, social: 8, environment: -4 },
            CONSEQUENCE_INTRO:  'New crops stabilised food production — but wild ecosystems continue to struggle, and scientists warn that numerous species are nearing extinction.'
          },
          {
            OPTION_NAME:        'Open-Source the Technology',
            OPTION_DESCRIPTION: 'Make the crop technology free for everyone to use and improve.',
            NARRATIVE_TITLE:    'Breaking News: Global Access to Climate Crops Accelerates Innovation',
            NARRATIVE:          'Countries around the world begin using and improving drought-resistant crops. Despite these advances in agriculture, biodiversity loss continues to grow across many ecosystems.',
            STAT_EFFECTS: { economy: -6, healthcare: 4, education: 10, social: 12, environment: -3 },
            CONSEQUENCE_INTRO:  'Open-source crops spread across the globe — but biodiversity loss continues to grow across many ecosystems, and the extinction crisis is deepening.'
          },
          {
            OPTION_NAME:        'Export the Crops Worldwide',
            OPTION_DESCRIPTION: 'Sell drought-resistant crops and farming technology to other countries.',
            NARRATIVE_TITLE:    'Breaking News: Drought Crops Become Major Global Export',
            NARRATIVE:          'New climate-resilient crops spread internationally, helping some countries improve food security. However, habitat loss and climate change continue to push many species toward extinction.',
            STAT_EFFECTS: { economy: 12, healthcare: 4, education: -2, social: -4, environment: 6 },
            CONSEQUENCE_INTRO:  'Crop exports boomed — but habitat loss and climate change continue to push many species toward extinction. The crisis is now unavoidable.'
          }
        ]
      },

      {
        EVENT_TITLE:   'Extinction',
        DEFAULT_INTRO: 'Many species around the world are close to extinction because of habitat loss, climate change, and human activity. Scientists warn that entire ecosystems could collapse.',
        OPTIONS: [
          {
            OPTION_NAME:        'Strong Conservation Laws',
            OPTION_DESCRIPTION: 'Create strict laws to protect habitats and endangered species, while funding public environmental education.',
            NARRATIVE_TITLE:    'Breaking News: Global Conservation Efforts Expand',
            NARRATIVE:          'New environmental laws slow the loss of some species and increase conservation awareness. At the same time, scientists develop powerful genetic tools that could bring extinct species back to life.',
            STAT_EFFECTS: { economy: -6, healthcare: -2, education: 10, social: 6, environment: 15 },
            CONSEQUENCE_INTRO:  'Conservation laws helped slow species loss — and now scientists have developed powerful genetic tools that could bring extinct species back to life.'
          },
          {
            OPTION_NAME:        'Create Wildlife Reserves',
            OPTION_DESCRIPTION: 'Build large protected areas for endangered species and support eco-tourism.',
            NARRATIVE_TITLE:    'Breaking News: Protected Wildlife Zones Grow Worldwide',
            NARRATIVE:          'Large reserves are created to protect endangered species and ecosystems. Meanwhile, new breakthroughs in DNA science make it possible to consider reviving species that have already disappeared.',
            STAT_EFFECTS: { economy: 8, healthcare: 4, education: -2, social: -3, environment: 12 },
            CONSEQUENCE_INTRO:  'Wildlife reserves protected many ecosystems — and breakthroughs in DNA science now make it possible to consider reviving species that have already disappeared.'
          },
          {
            OPTION_NAME:        'Do Nothing',
            OPTION_DESCRIPTION: 'Keep current policies and focus on economic stability instead of new environmental protections.',
            NARRATIVE_TITLE:    'Breaking News: Species Loss Accelerates Worldwide',
            NARRATIVE:          'Without stronger protections, biodiversity declines rapidly across many regions. In response to the growing crisis, scientists begin experimenting with technology that could bring extinct species back.',
            STAT_EFFECTS: { economy: 6, healthcare: 4, education: 2, social: -8, environment: -15 },
            CONSEQUENCE_INTRO:  'Without protection, biodiversity declined rapidly. In response to the crisis, scientists are now experimenting with technology that could bring extinct species back.'
          }
        ]
      },

      {
        EVENT_TITLE:   'De-extinction',
        DEFAULT_INTRO: 'Scientists successfully revive extinct animals using cloning and reconstructed DNA. This breakthrough could help restore ecosystems, but it also raises major ethical and environmental questions.',
        OPTIONS: [
          {
            OPTION_NAME:        'Release Revived Species into the Wild',
            OPTION_DESCRIPTION: 'Carefully reintroduce revived animals into protected habitats to help rebuild ecosystems and restore biodiversity.',
            NARRATIVE_TITLE:    'Breaking News: Extinct Species Return to Natural Habitats',
            NARRATIVE:          'After decades of scientific work, several extinct animals have been successfully reintroduced into carefully managed ecosystems. Scientists hope these species will help restore damaged environments, though experts warn that reintroducing long-lost animals may bring unexpected ecological challenges.',
            STAT_EFFECTS: { economy: -2, healthcare: -3, education: 6, social: 6, environment: 15 },
            CONSEQUENCE_INTRO: ''
          },
          {
            OPTION_NAME:        'Keep Species in Zoos and Research Centres',
            OPTION_DESCRIPTION: 'Keep revived species in controlled environments like zoos and research facilities so scientists can study them and the public can learn about extinction and conservation.',
            NARRATIVE_TITLE:    'Breaking News: Revived Species Become Major Scientific Discovery',
            NARRATIVE:          "The world's first revived extinct animals are now living in specialised research centres and zoos. Scientists continue studying their biology and genetics, while the public debates whether these species should remain protected in captivity or eventually return to the wild.",
            STAT_EFFECTS: { economy: 8, healthcare: 3, education: 10, social: -6, environment: -5 },
            CONSEQUENCE_INTRO: ''
          },
          {
            OPTION_NAME:        'Commercialise the Species',
            OPTION_DESCRIPTION: 'Use genetic material from revived species to develop new products, biotechnology, and commercial opportunities.',
            NARRATIVE_TITLE:    'Breaking News: De-Extinction Industry Expands Worldwide',
            NARRATIVE:          'Companies begin using genetic material from revived species to develop new biotechnology, medical products, and commercial innovations. While the industry grows rapidly, critics argue that extinct animals are being used for profit rather than conservation.',
            STAT_EFFECTS: { economy: 15, healthcare: 4, education: 5, social: -10, environment: -8 },
            CONSEQUENCE_INTRO: ''
          }
        ]
      }
    ]
  },


// ================================================================
// PATH 2 — TECHNOLOGY
// ================================================================
  technology: {
    PATH_TITLE:    'Technological Innovation',
    PATH_SUBTITLE: 'Silicon & Circuit',
    PATH_COLOUR:   'var(--colour-accent-cyan)',
    PATH_CARD_ICON:   '⚡',
    PATH_CARD_NAME:   'Technological<br>Innovation',
    PATH_CARD_FLAVOR: 'Navigate the digital age — from online scams and cyber attacks to AI automation and the question of who controls the machines.',

    EVENTS: [
      {
        EVENT_TITLE:   'Increase in Online Scams',
        DEFAULT_INTRO: 'Scammers start sending large numbers of phishing emails, text messages, and phone calls pretending to be banks, government agencies, or delivery companies. Many people accidentally give away passwords, bank details and personal information. This leads to financial losses and identity theft, especially affecting older people and those who are less familiar with technology.',
        OPTIONS: [
          {
            OPTION_NAME:        'Stronger Scam Detection Technology',
            OPTION_DESCRIPTION: 'Governments and technology companies create advanced systems that automatically detect and block scam emails, texts, and calls before people receive them.',
            NARRATIVE_TITLE:    'Breaking News: AI Filters Block Millions of Online Scams',
            NARRATIVE:          'Advanced detection systems begin automatically blocking scam calls, texts, and emails across the country. As digital systems become more complex, experts warn that critical infrastructure like power grids may also need stronger cyber protection.',
            STAT_EFFECTS: { economy: 10, healthcare: 2, education: -3, social: 6, environment: -4 },
            CONSEQUENCE_INTRO:  'AI filters blocked millions of scams — but as digital systems grow more complex, experts warn that critical infrastructure like power grids may also need stronger cyber protection.'
          },
          {
            OPTION_NAME:        'Public Awareness Campaigns',
            OPTION_DESCRIPTION: 'Governments launch nationwide education programs that teach people how to recognise scams and stay safe online.',
            NARRATIVE_TITLE:    'Breaking News: Nationwide Cyber Safety Education Launched',
            NARRATIVE:          "Schools and community programs begin teaching people how to recognise online scams and stay safe on the internet. As more services move online, experts say stronger protection is needed for the country's digital infrastructure.",
            STAT_EFFECTS: { economy: -4, healthcare: 3, education: 15, social: 12, environment: -2 },
            CONSEQUENCE_INTRO:  'Education programs spread cyber awareness — but as more services move online, experts say stronger protection is needed for the country\'s digital infrastructure.'
          },
          {
            OPTION_NAME:        'Stricter Laws and Punishments for Scammers',
            OPTION_DESCRIPTION: 'Governments introduce stronger laws and international police cooperation to find and punish scammers more effectively.',
            NARRATIVE_TITLE:    'Breaking News: Global Crackdown Targets Online Crime Networks',
            NARRATIVE:          'International police partnerships begin tracking and prosecuting cyber criminals more aggressively. However, as technology continues to expand, governments realise that key digital systems like power and communication networks may also become targets.',
            STAT_EFFECTS: { economy: 6, healthcare: 2, education: -3, social: 5, environment: -1 },
            CONSEQUENCE_INTRO:  'Global crackdowns hit criminal networks hard — but as technology expands, governments realise that key digital systems like power grids may also become targets.'
          }
        ]
      },

      {
        EVENT_TITLE:   'Cyber Security',
        DEFAULT_INTRO: "Cyber experts warn that phishing scams and hacking attempts are increasing around the world. Some small power outages have already happened in other countries, and experts believe Australia's energy systems could be next. The government must decide how to strengthen cyber security before a major attack occurs.",
        OPTIONS: [
          {
            OPTION_NAME:        'Invest in Stronger Infrastructure',
            OPTION_DESCRIPTION: 'Upgrade cyber security systems and hire more trained experts. Build stronger protection for power grids and other important networks.',
            NARRATIVE_TITLE:    'Breaking News: Major Cyber Defences Installed Across Critical Systems',
            NARRATIVE:          'Governments invest heavily in new cyber defence networks protecting infrastructure and digital services. Despite stronger security, society becomes so dependent on technology that a large cyber attack could still cause serious disruption.',
            STAT_EFFECTS: { economy: 12, healthcare: 8, education: -4, social: -6, environment: -7 },
            CONSEQUENCE_INTRO:  'Cyber defences were reinforced — but society has become so dependent on technology that a large attack could still cause serious disruption. The banks are watching nervously.'
          },
          {
            OPTION_NAME:        'Free Public Cyber Safety Education',
            OPTION_DESCRIPTION: 'Create free nationwide programs that teach people how to stay safe online. This includes school lessons, community workshops, and online learning materials.',
            NARRATIVE_TITLE:    'Breaking News: Digital Literacy Becomes Core School Subject',
            NARRATIVE:          'Students across the country begin learning cyber safety and digital responsibility in schools. Even with better awareness, experts warn that large-scale cyber attacks on financial systems remain a growing risk.',
            STAT_EFFECTS: { economy: -5, healthcare: 5, education: 15, social: 12, environment: -3 },
            CONSEQUENCE_INTRO:  'Digital literacy spread across schools — but experts warn that large-scale cyber attacks on financial systems remain a serious and growing risk.'
          },
          {
            OPTION_NAME:        'Partner with Technology Companies',
            OPTION_DESCRIPTION: 'Work closely with large technology companies to monitor cyber threats and share information. These companies can help detect and stop cyber attacks faster.',
            NARRATIVE_TITLE:    'Breaking News: Governments and Tech Giants Form Cyber Alliance',
            NARRATIVE:          'Major technology companies begin sharing threat intelligence with governments to track global cyber attacks. However, the growing reliance on digital banking systems creates new vulnerabilities.',
            STAT_EFFECTS: { economy: 10, healthcare: 6, education: 4, social: -10, environment: -4 },
            CONSEQUENCE_INTRO:  'Tech companies joined forces with government — but growing reliance on digital banking systems is creating dangerous new vulnerabilities.'
          }
        ]
      },

      {
        EVENT_TITLE:   'Cyber Attack',
        DEFAULT_INTRO: "A large cyber attack hits Australia's four biggest banks. Online banking stops working, and hackers claim they have stolen customer information such as account details and passwords. People are worried about their money and personal data.",
        OPTIONS: [
          {
            OPTION_NAME:        'Isolate Banking Networks',
            OPTION_DESCRIPTION: 'Disconnect the affected banking systems from the internet and temporarily shut down online services. Experts investigate the attack and fix weaknesses before restoring services.',
            NARRATIVE_TITLE:    'Breaking News: Banks Rebuild Digital Security After Major Cyber Crisis',
            NARRATIVE:          'Financial institutions redesign their systems to prevent future attacks. As technology improves, many industries begin turning to artificial intelligence and automation to make systems more efficient and secure.',
            STAT_EFFECTS: { economy: -12, healthcare: 3, education: 2, social: -8, environment: 1 },
            CONSEQUENCE_INTRO:  'Banks rebuilt their systems from the ground up. As technology continues improving, many industries are now turning to AI and automation to prevent future crises.'
          },
          {
            OPTION_NAME:        'Negotiate with the Hackers',
            OPTION_DESCRIPTION: 'Communicate with the attackers to learn their demands and delay the release of stolen data. During this time, cyber experts strengthen security and try to track the criminals.',
            NARRATIVE_TITLE:    'Breaking News: Cyber Attack Sparks Global Debate on Digital Security',
            NARRATIVE:          'The banking crisis raises major questions about how governments should respond to cyber crime. In the following decades, companies invest heavily in AI systems to manage digital networks and reduce human error.',
            STAT_EFFECTS: { economy: -6, healthcare: 2, education: 1, social: -12, environment: 1 },
            CONSEQUENCE_INTRO:  'Negotiations bought time — but the crisis raised major questions about digital security. Companies are now investing heavily in AI to manage networks and reduce human error.'
          },
          {
            OPTION_NAME:        'Launch a Cyber Counter-Attack',
            OPTION_DESCRIPTION: "Use advanced AI tools and expert cyber teams to trace the hackers and attack their systems. The goal is to recover stolen data and shut down the criminals' networks.",
            NARRATIVE_TITLE:    'Breaking News: Governments Deploy AI Cyber Defence Systems',
            NARRATIVE:          'Advanced cyber defence programs are developed to detect and fight digital threats. These technologies quickly evolve into powerful AI systems that begin automating many tasks across industries.',
            STAT_EFFECTS: { economy: 6, healthcare: 4, education: 3, social: -10, environment: -3 },
            CONSEQUENCE_INTRO:  'The counter-attack worked — and in doing so, spawned powerful AI systems that are now beginning to automate tasks across industries. The question is: who controls them?'
          }
        ]
      },

      {
        EVENT_TITLE:   'AI Automation',
        DEFAULT_INTRO: 'Advanced robots and automation systems begin doing many jobs that humans used to do, especially in factories, transportation, and customer service. This creates growing concerns about job losses and inequality.',
        OPTIONS: [
          {
            OPTION_NAME:        'Job Retraining Programs',
            OPTION_DESCRIPTION: 'Governments fund training programs to help workers learn new skills for technology-related jobs.',
            NARRATIVE_TITLE:    'Breaking News: New Tech Skills Programs Transform Workforce',
            NARRATIVE:          'Large education programs help workers learn new technology skills as automation spreads across industries. Over time, AI systems become increasingly powerful and begin assisting with complex decision-making.',
            STAT_EFFECTS: { economy: -8, healthcare: 3, education: 15, social: 10, environment: -3 },
            CONSEQUENCE_INTRO:  'Retraining helped many workers adapt — but AI systems have kept advancing, and they are now beginning to assist with complex decision-making at every level of society.'
          },
          {
            OPTION_NAME:        'Limiting Automation in Certain Jobs',
            OPTION_DESCRIPTION: 'Governments create rules that limit how much automation companies can use, protecting some human jobs.',
            NARRATIVE_TITLE:    'Breaking News: Governments Set Limits on Robot Workers',
            NARRATIVE:          'New regulations slow the spread of automation in some industries to protect human jobs. Despite these limits, artificial intelligence continues advancing rapidly in research labs and technology companies.',
            STAT_EFFECTS: { economy: -10, healthcare: 2, education: -4, social: 6, environment: 3 },
            CONSEQUENCE_INTRO:  'Limits on automation protected many jobs — but AI has kept advancing rapidly in research labs, and the technology is now far beyond what the regulations anticipated.'
          },
          {
            OPTION_NAME:        'Universal Basic Income',
            OPTION_DESCRIPTION: 'The government provides a basic income to all citizens, helping people financially if robots replace many jobs.',
            NARRATIVE_TITLE:    'Breaking News: Universal Basic Income Reshapes Economic System',
            NARRATIVE:          'Governments introduce a basic income as automation replaces many traditional jobs. As AI systems continue improving, they begin playing larger roles in managing complex systems across society.',
            STAT_EFFECTS: { economy: -12, healthcare: 6, education: -2, social: 12, environment: -3 },
            CONSEQUENCE_INTRO:  'Basic income cushioned the economic disruption — but AI systems have kept improving, and they are now playing larger roles in managing complex systems across all of society.'
          }
        ]
      },

      {
        EVENT_TITLE:   'AI Takeover',
        DEFAULT_INTRO: 'Artificial Intelligence has become extremely advanced and now helps control important systems like power networks, financial markets, and government decision-making. Many people enjoy the efficiency AI brings, but others worry that humans are losing control.',
        OPTIONS: [
          {
            OPTION_NAME:        'Strong Global AI Regulations',
            OPTION_DESCRIPTION: 'Create strict international rules for how AI can be built and used. Humans must supervise important AI decisions, and ethical guidelines must be followed.',
            NARRATIVE_TITLE:    'Breaking News: Global AI Rules Put Humans Back in Charge',
            NARRATIVE:          'Governments around the world agree on strict laws requiring human oversight for major AI systems. While AI continues to power many services, people remain responsible for the most important decisions affecting society.',
            STAT_EFFECTS: { economy: -6, healthcare: 6, education: 7, social: 12, environment: -3 },
            CONSEQUENCE_INTRO: ''
          },
          {
            OPTION_NAME:        'Integrate AI Across Society',
            OPTION_DESCRIPTION: 'Invest heavily in AI and expand its use across government, healthcare, education, and business to improve efficiency and innovation.',
            NARRATIVE_TITLE:    'Breaking News: AI Becomes the Backbone of Modern Society',
            NARRATIVE:          'Artificial intelligence now manages transportation, healthcare systems, financial markets, and government planning. Many systems run more efficiently than ever before, though debates continue about how much control humans have over these powerful technologies.',
            STAT_EFFECTS: { economy: 15, healthcare: 12, education: 10, social: -10, environment: -5 },
            CONSEQUENCE_INTRO: ''
          },
          {
            OPTION_NAME:        'Ban AI Development',
            OPTION_DESCRIPTION: 'Stop creating new AI systems and slowly remove existing ones. Focus instead on human workers, human research, and non-AI technologies.',
            NARRATIVE_TITLE:    'Breaking News: World Turns Away from Artificial Intelligence',
            NARRATIVE:          'After global agreements to halt advanced AI development, many automated systems are shut down or replaced with human-controlled technology. Supporters say this protects human jobs and decision-making, while critics argue society has slowed technological progress.',
            STAT_EFFECTS: { economy: -15, healthcare: -6, education: -5, social: 6, environment: 4 },
            CONSEQUENCE_INTRO: ''
          }
        ]
      }
    ]
  },


// ================================================================
// PATH 3 — GOVERNMENT
// ================================================================
  government: {
    PATH_TITLE:    'Governmental Innovation',
    PATH_SUBTITLE: 'Law & Liberty',
    PATH_COLOUR:   'var(--colour-accent-lime)',
    PATH_CARD_ICON:   '⚖',
    PATH_CARD_NAME:   'Governmental<br>Innovation',
    PATH_CARD_FLAVOR: 'Govern through a century of upheaval — mass migration, pandemic, famine, and political change. Can you build a just and stable society?',

    EVENTS: [
      {
        EVENT_TITLE:   'Mass Migration',
        DEFAULT_INTRO: 'Climate change, political conflict, and economic problems cause large numbers of people to move around the world. Many countries experience major increases in migrants and refugees.',
        OPTIONS: [
          {
            OPTION_NAME:        'Open Borders Policy',
            OPTION_DESCRIPTION: 'The country allows migrants to enter freely and provides support such as housing, education, and financial assistance.',
            NARRATIVE_TITLE:    'Breaking News: Migrant Arrivals Reach Record Levels',
            NARRATIVE:          'With borders open, large numbers of migrants and refugees begin settling in major cities and regional areas. Governments now face the challenge of creating long-term systems to house and support displaced communities.',
            STAT_EFFECTS: { economy: -10, healthcare: -5, education: 6, social: 20, environment: -4 },
            CONSEQUENCE_INTRO:  'Open borders welcomed millions — but governments now face the enormous challenge of creating long-term systems to house and support displaced communities. Sea levels keep rising.'
          },
          {
            OPTION_NAME:        'Strict Border Control',
            OPTION_DESCRIPTION: 'The government increases border security and limits how many migrants can enter the country.',
            NARRATIVE_TITLE:    'Breaking News: Border Restrictions Increase Pressure in Neighbouring Regions',
            NARRATIVE:          'Tighter border security slows migration into the country, but refugee populations grow in nearby nations. International organisations begin pushing for coordinated resettlement solutions.',
            STAT_EFFECTS: { economy: 8, healthcare: -6, education: -4, social: -15, environment: 5 },
            CONSEQUENCE_INTRO:  'Borders closed — but refugee populations are growing in nearby nations, and international organisations are demanding coordinated resettlement solutions.'
          },
          {
            OPTION_NAME:        'International Partnerships',
            OPTION_DESCRIPTION: 'Countries work together to manage migration through international agreements and shared support systems.',
            NARRATIVE_TITLE:    'Breaking News: Global Migration Agreement Signed',
            NARRATIVE:          'Several countries form new international agreements to manage migration more cooperatively. These partnerships begin focusing on long-term refugee resettlement and shared humanitarian support.',
            STAT_EFFECTS: { economy: 6, healthcare: -4, education: 5, social: 12, environment: -6 },
            CONSEQUENCE_INTRO:  'International agreements created a framework for cooperation — but rising sea levels are now forcing millions more from their homes, putting the system to its ultimate test.'
          }
        ]
      },

      {
        EVENT_TITLE:   'Refugee Resettlement',
        DEFAULT_INTRO: 'Rising sea levels and extreme weather force millions of people to leave their homes. Countries must decide how to support these climate refugees.',
        OPTIONS: [
          {
            OPTION_NAME:        'Integration Programs',
            OPTION_DESCRIPTION: 'Refugees are supported with housing, education, job training, and community programs to help them settle.',
            NARRATIVE_TITLE:    'Breaking News: New Communities Grow Across the Country',
            NARRATIVE:          'Refugees begin settling into local communities with support programs and education services. As global travel and population movement increase, health experts warn that future disease outbreaks could spread quickly across borders.',
            STAT_EFFECTS: { economy: -6, healthcare: 6, education: 12, social: 18, environment: -5 },
            CONSEQUENCE_INTRO:  'Integration programs built new communities — but as global movement increases, health experts warn that future disease outbreaks could spread rapidly across borders. And then, one does.'
          },
          {
            OPTION_NAME:        'Temporary Camps with Aid',
            OPTION_DESCRIPTION: 'Refugees stay in temporary camps with basic support like food, shelter, and healthcare.',
            NARRATIVE_TITLE:    'Breaking News: Refugee Camps Expand as Displacement Continues',
            NARRATIVE:          'Large refugee camps grow near national borders, housing thousands of displaced people. Aid groups warn that crowded living conditions may increase the risk of infectious disease outbreaks.',
            STAT_EFFECTS: { economy: 10, healthcare: -6, education: -8, social: -10, environment: 5 },
            CONSEQUENCE_INTRO:  'Camps grew rapidly — but crowded conditions are now a major infection risk. Aid groups warned this would happen. Their warnings are about to be proved right.'
          },
          {
            OPTION_NAME:        'Regional Resettlement',
            OPTION_DESCRIPTION: 'Countries work together to spread refugee populations across several nations.',
            NARRATIVE_TITLE:    'Breaking News: Countries Share Responsibility for Refugees',
            NARRATIVE:          'Refugee populations are distributed across several countries through new international agreements. Increased travel and global movement raise concerns about how quickly diseases could spread between nations.',
            STAT_EFFECTS: { economy: 8, healthcare: -4, education: -5, social: 6, environment: 4 },
            CONSEQUENCE_INTRO:  'Shared resettlement distributed the burden — but increased global movement is raising serious concerns about how quickly a new disease could spread between nations.'
          }
        ]
      },

      {
        EVENT_TITLE:   'Pandemic',
        DEFAULT_INTRO: 'A dangerous virus spreads quickly around the world. Hospitals become overwhelmed and governments must act quickly to protect their populations.',
        OPTIONS: [
          {
            OPTION_NAME:        'Strict Lockdowns',
            OPTION_DESCRIPTION: 'People must stay home, travel is limited, and many businesses temporarily close to slow the spread of the virus.',
            NARRATIVE_TITLE:    'Breaking News: Global Economy Slows During Long Lockdowns',
            NARRATIVE:          'Lockdowns help slow the virus, but supply chains and farming industries struggle to keep operating normally. Over time, food production begins to decline in several regions.',
            STAT_EFFECTS: { economy: -18, healthcare: 18, education: -10, social: -6, environment: 8 },
            CONSEQUENCE_INTRO:  'Lockdowns slowed the virus — but supply chains and farming industries struggled badly. Food production has begun to decline in several regions, and hunger is spreading.'
          },
          {
            OPTION_NAME:        'Accelerate Vaccine Development',
            OPTION_DESCRIPTION: 'Governments invest heavily in developing vaccines as quickly as possible.',
            NARRATIVE_TITLE:    'Breaking News: Scientists Race to Develop Pandemic Vaccine',
            NARRATIVE:          'Governments invest heavily in medical research to develop vaccines quickly. While progress is made, the pandemic disrupts agriculture and food transport systems around the world.',
            STAT_EFFECTS: { economy: -6, healthcare: 20, education: 6, social: 5, environment: -4 },
            CONSEQUENCE_INTRO:  'Vaccines were developed faster than ever — but the pandemic still disrupted agriculture and food transport systems. Food shortages are now spreading across multiple regions.'
          },
          {
            OPTION_NAME:        'Herd Immunity Strategy',
            OPTION_DESCRIPTION: 'The virus spreads through low-risk groups while vulnerable people are protected.',
            NARRATIVE_TITLE:    'Breaking News: Virus Spreads as Governments Test Herd Immunity',
            NARRATIVE:          'Some countries allow the virus to spread among low-risk populations while protecting vulnerable groups. The ongoing health crisis disrupts farms, food supply chains, and international trade.',
            STAT_EFFECTS: { economy: 10, healthcare: -20, education: 6, social: -12, environment: -3 },
            CONSEQUENCE_INTRO:  'The herd immunity gamble kept economies running — but the ongoing health crisis has disrupted farms, food supply chains, and international trade. Famine looms.'
          }
        ]
      },

      {
        EVENT_TITLE:   'Famine',
        DEFAULT_INTRO: 'After years of extreme weather and damaged farmland, food production drops dramatically. Millions of people struggle to find enough food, and hunger spreads across the country.',
        OPTIONS: [
          {
            OPTION_NAME:        'Seek International Aid',
            OPTION_DESCRIPTION: 'The country asks other nations and international organisations for emergency food supplies and farming support.',
            NARRATIVE_TITLE:    'Breaking News: Global Food Aid Arrives as Crisis Deepens',
            NARRATIVE:          'International organisations deliver emergency food supplies to help stabilise the situation. However, many citizens question how the country reached this point and demand political change.',
            STAT_EFFECTS: { economy: -6, healthcare: 18, education: -5, social: 12, environment: -6 },
            CONSEQUENCE_INTRO:  'International aid arrived — but many citizens are furious about how the country reached this point. Demands for political change are now impossible to ignore.'
          },
          {
            OPTION_NAME:        'Invest in Vertical Farming',
            OPTION_DESCRIPTION: 'Cities build large indoor farms that grow food using advanced technology.',
            NARRATIVE_TITLE:    'Breaking News: Cities Turn to High-Tech Farming',
            NARRATIVE:          'Urban vertical farms begin producing food in controlled environments, reducing reliance on damaged farmland. The crisis sparks national debate about how the country should rebuild and prepare for the future.',
            STAT_EFFECTS: { economy: -12, healthcare: 10, education: 8, social: 6, environment: 15 },
            CONSEQUENCE_INTRO:  'Vertical farms helped cities survive — and the crisis has sparked urgent national debate about how the country should rebuild. A new political movement is gaining momentum.'
          },
          {
            OPTION_NAME:        'Food Rationing Programs',
            OPTION_DESCRIPTION: 'The government controls food distribution so everyone receives a limited but fair amount.',
            NARRATIVE_TITLE:    'Breaking News: Government Introduces Nationwide Food Rationing',
            NARRATIVE:          'Strict rationing helps distribute limited food supplies more fairly across the population. Public pressure grows for new leadership and long-term solutions to prevent future crises.',
            STAT_EFFECTS: { economy: -8, healthcare: 6, education: -4, social: 14, environment: -4 },
            CONSEQUENCE_INTRO:  'Rationing distributed food fairly — but public pressure for new leadership and long-term solutions has reached a boiling point. A political transformation is coming.'
          }
        ]
      },

      {
        EVENT_TITLE:   'Change of Government',
        DEFAULT_INTRO: 'After years of crises, many people want change. A surprise election brings a new eco-socialist government to power. The new leaders promise major reforms to protect the environment, reduce inequality, and improve social programs.',
        OPTIONS: [
          {
            OPTION_NAME:        'Radical Policy Reform',
            OPTION_DESCRIPTION: 'The government quickly introduces major new laws on climate action, taxes, and social programs to rapidly transform society.',
            NARRATIVE_TITLE:    'Breaking News: Government Launches Major Social and Climate Reforms',
            NARRATIVE:          'The new government rapidly introduces sweeping reforms across climate policy, wealth distribution, and social programs. Supporters say the bold changes could transform society, while critics warn the speed of reform may create economic challenges.',
            STAT_EFFECTS: { economy: -15, healthcare: 8, education: 10, social: 18, environment: 15 },
            CONSEQUENCE_INTRO: ''
          },
          {
            OPTION_NAME:        'Introduce Change Slowly',
            OPTION_DESCRIPTION: 'The government works with businesses and political parties to introduce reforms gradually to maintain stability.',
            NARRATIVE_TITLE:    'Breaking News: Government Begins Gradual Reform Plan',
            NARRATIVE:          'The new leadership works with businesses, communities, and political parties to slowly introduce environmental and social reforms. Supporters say the approach protects economic stability, though some activists worry progress may be too slow.',
            STAT_EFFECTS: { economy: 10, healthcare: 4, education: 5, social: 6, environment: -8 },
            CONSEQUENCE_INTRO: ''
          },
          {
            OPTION_NAME:        'Prioritise Environment',
            OPTION_DESCRIPTION: 'The government focuses strongly on protecting nature, restoring habitats, and introducing strict environmental laws.',
            NARRATIVE_TITLE:    'Breaking News: Ambitious Environmental Restoration Plan Announced',
            NARRATIVE:          'The government launches major projects to restore ecosystems, protect wildlife, and transform farming practices. Environmental groups celebrate the bold action, while industry leaders debate the economic impact of the new regulations.',
            STAT_EFFECTS: { economy: -12, healthcare: 10, education: -5, social: 6, environment: 20 },
            CONSEQUENCE_INTRO: ''
          }
        ]
      }
    ]
  }

};
