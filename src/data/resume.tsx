import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, TrendingUp } from "lucide-react";

export const DATA = {
  name: "Nicholas Chen",
  initials: "CHW",
  url: "https://nicholas.me",
  location: "Singapore City, SG",
  locationLink: "https://www.google.com/maps/place/singapore",
  description:
    "I'm a startup founder & software developer focused in big data and blockchains, and I enjoy creating things that make an impact to the world, small or big, be it a website, mobile app or anything in between. My goal is to build products that make everyone's daily life better.",
  summary:
    "I'm a passionate software engineer & architect with over 10 years of experience building scalable systems and products. I specialize in distributed systems, blockchains, and high-performance computing. Throughout my career, I've led teams, architected solutions, and delivered impactful products that serve millions of users.",
  avatarUrl: "/me.jpeg",
  skills: [
    "Rust",
    "Java",
    "C++",
    "React",
    "C#",
    "Kotlin",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    ".NET",
    "MongoDB",
    "Redis",
    "Clickhouse",
    "TimescaleDB",
    "BigQuery",
    "Kafka",
    "Postgres",
    "Docker",
    "Kubernetes",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "/#investments", icon: TrendingUp, label: "Investments" },
  ],
  contact: {
    email: "m@nixholas.me",
    tel: "+6596532929",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/nixxholas",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/nixxholas",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/nixxholas",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Jupiter",
      href: "https://jup.ag",
      badges: [],
      location: "Singapore",
      title: "Product Manager, Jupnet",
      logoUrl: "/jup-dao.svg",
      start: "Sep 2024",
      end: "Present",
      description:
        "Built Jupnet, the first Omnichain liquidity network built on the Solana VM, enabling users to trade any tokens anywhere in a decentralised environment.",
    },
    {
      company: "SolanaFM",
      badges: ["Acquired by Jupiter"],
      href: "https://iie.smu.edu.sg/node/11596",
      location: "Remote",
      title: "Co-founder and CEO",
      logoUrl: "/sfm.png",
      start: "April 2021",
      end: "August 2024",
      description:
        "Co-founded one of the leading block explorers and data infrastructure providers in the Solana ecosystem; Contributed to fundraising efforts (Over US$5.2M) and investor relations, positioning SolanaFM as a prominent service in the Solana blockchain landscape. Led product strategy, shaping the platform’s roadmap for seamless blockchain analytics and user-friendly reporting. Worked closely (and directly as an engineer) with engineering teams to ensure robust, scalable architecture for high-volume blockchain data queries. Played a pivotal role in hiring and mentoring a multidisciplinary team, cultivating a culture of innovation and agility.",
    },
    {
      company: "Singapore Polytechnic",
      href: "https://sp.edu.sg/",
      badges: [],
      location: "Singapore",
      title: "Adjunct Lecturer",
      logoUrl: "/singapore-polytechnic-logo.svg",
      start: "September 2022",
      end: "September 2023",
      description:
        "Taught students the fundamentals of database systems and how to design and implement them, through ST1501 - Data Engineering.",
    },
    {
      company: "Coinhako",
      href: "https://coinhako.com",
      badges: [],
      location: "Singapore",
      title: "Software Engineer",
      logoUrl: "/coinhako.jpeg",
      start: "August 2017",
      end: "December 2017",
      description:
        "Primarily worked on Special projects, and built the initial version of Coinhako's Institutional trading platform.",
    },
    {
      company: "Coinhako",
      href: "https://coinhako.com",
      badges: [],
      location: "Singapore",
      title: "Software Engineer Intern",
      logoUrl: "/coinhako.jpeg",
      start: "December 2017",
      end: "December 2020",
      description:
        "Primarily worked on Special projects, and built the initial version of Coinhako's Institutional trading platform. Created a P2P trading platform alone that served almost 10,000 users.",
    },
  ],
  education: [
    {
      school: "Singapore Management University",
      href: "https://smu.edu.sg/",
      degree: "Bachelor's Degree in Information Systems (BSc IS)",
      logoUrl: "/smu.svg",
      start: "2020",
      end: "2025",
    },
    {
      school: "Singapore Polytechnic",
      href: "https://sp.edu.sg/",
      degree: "Diploma in Information Technology",
      logoUrl: "/singapore-polytechnic-logo.svg",
      start: "2015",
      end: "2018",
    },
  ],
  investments: [
    {
      company: "Example Startup",
      investedAt: "2024-01-15",
      description: "An innovative AI-powered platform transforming the way businesses handle customer support",
      website: "https://example.com",
      category: "Technology",
      status: "Active" as const,
      stage: "Seed",
    },
  ],
  projects: [
    {
      title: "Nozomi",
      href: "https://www.producthunt.com/products/nozomi-2",
      dates: "June 2018 - Mar 2021",
      active: true,
      description:
        "Postman, but automated. Built for developers who want to automate their API testing and monitoring. Can also allow users to aggregate multiple APIs into a custom API.",
      technologies: [
        ".NET 5",
        "Buefy",
        "Bulma",
        "Vue.js",
        "Stripe",
        "PostgreSQL",
        "Docker",
        "Kubernetes",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.producthunt.com/products/nozomi-2",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "/nozomi-landing.avif",
    },
    // {
    //   title: "Magic UI",
    //   href: "https://magicui.design",
    //   dates: "June 2023 - Present",
    //   active: true,
    //   description:
    //     "Designed, developed and sold animated UI components for developers.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Stripe",
    //     "Shadcn UI",
    //     "Magic UI",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://magicui.design",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //     {
    //       type: "Source",
    //       href: "https://github.com/magicuidesign/magicui",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video: "https://cdn.magicui.design/bento-grid.mp4",
    // },
    // {
    //   title: "llm.report",
    //   href: "https://llm.report",
    //   dates: "April 2023 - September 2023",
    //   active: true,
    //   description:
    //     "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Shadcn UI",
    //     "Magic UI",
    //     "Stripe",
    //     "Cloudflare Workers",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://llm.report",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //     {
    //       type: "Source",
    //       href: "https://github.com/nicholaschen/llm.report",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video: "https://cdn.llm.report/openai-demo.mp4",
    // },
    {
      title: "Amperific SuperKANG Project (ASKP)",
      href: "https://xdaforums.com/t/kernel-a-s-k-p-r572-3-0-101-23-9-2014-ext4-f2fs-alpha.2479983/",
      dates: "October 11, 2013 - November 23, 2024",
      active: false,
      description:
        "Built for the Samsung Galaxy Nexus, this kernel is a custom kernel that is based on the stock kernel of the device. It packed several novel features such as a custom CPU governor, a custom power management system, a custom memory carveout from the reserved memory, and several vanilla Linux optimisation patches.",
      technologies: [
        "Linux Kernel",
        "C",
      ],
      links: [
        {
          type: "Website",
          href: "https://xdaforums.com/t/kernel-a-s-k-p-r572-3-0-101-23-9-2014-ext4-f2fs-alpha.2479983/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Github",
          href: "https://github.com/AmperificSuperKANG/kernel_tuna",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/xda-devs.png",
      video:
        "",
    },
  ],
  hackathons: [
    {
      title: "Convergence - Serum & Wormhole Hackathon",
      dates: "January 7th - February 2nd, 2022",
      location: "Remote",
      description:
        "Kepler Aggregator is a multi-chain relayer that enables cross-chain swaps to be done quickly and efficiently.",
      icon: "public",
      image:
        "https://dorahacks.io/blog/content/images/size/w2000/2022/01/conver-new.jpg",
      links: [
        {
          title: "Site",
          href: "https://devpost.com/software/kepler-aggregator",
          icon: <Icons.globe className="h-4 w-4" />,
        },
      ],
    },
    {
      title: "Solana Season Hackathon",
      dates: "June 1st - 23rd 2021",
      location: "Remote",
      description:
        "Developed the first Solana block indexer, enabling users to query the Solana blockchain in real-time, with historical data. Won the - Our Network prize.",
      image: "https://solana.com/src/img/branding/solanaLogoMark.svg",
      mlh: "/solana-season.webp",
      links: [
        {
          title: "Site",
          href: "https://solana.com/news/announcing-winners-of-the-solana-season-hackathon",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      title: "Binance SAFU Hackathon",
      dates: "January 19th - 22nd, 2019",
      location: "Singapore",
      description:
        "Developed a graph-based transaction analysis tool for Binance.",
      image:
        "https://public.bnbstatic.com/20190121/e3e73c7b-474b-4459-ac6c-1db99d65d853.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [{
          title: "Github",
          href: "https://gitlab.com/longgrin/longgrinmvc",
          icon: <Icons.github className="h-4 w-4" />,
        },
        {
          title: "Site",
          href: "https://www.binance.com/en/blog/all/binance-safu-hackathon-making-the-blockchain-world-more-safu-294032626086199296",
          icon: <Icons.globe className="h-4 w-4" />,
        },
      ],
    },
    {
      title: "Sabre Destination Hackathon 2016",
      dates: "October 15th - 16th, 2016",
      location: "Singapore",
      description:
        "Phillip is a travel bot, built to help users plan their trips, find the best deals, and automate processes across your entire trip.",
      image:
        "https://banner2.cleanpng.com/20180513/fee/avcb447q3.webp",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nixxholas/SabreDest2016",
        },
      ],
    },
    // {
    //   title: "HackDavis",
    //   dates: "January 20th - 21st, 2018",
    //   location: "Davis, California",
    //   description:
    //     "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
    //   win: "Best Data Hack",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
    //   links: [
    //     {
    //       title: "Devpost",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://devpost.com/software/my6footprint",
    //     },
    //     {
    //       title: "ML",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/Wallet6/my6footprint-machine-learning",
    //     },
    //     {
    //       title: "iOS",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/Wallet6/CarbonWallet",
    //     },
    //     {
    //       title: "Server",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/Wallet6/wallet6-server",
    //     },
    //   ],
    // },
    // {
    //   title: "ETH Waterloo",
    //   dates: "October 13th - 15th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
    //   links: [
    //     {
    //       title: "Organization",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/ethdocnet",
    //     },
    //   ],
    // },
    // {
    //   title: "Hack The North",
    //   dates: "September 15th - 17th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed a virtual reality application allowing users to see themselves in third person.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Streamer Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/justinmichaud/htn2017",
    //     },
    //     {
    //       title: "Client Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/nicholaschen/RTSPClient",
    //     },
    //   ],
    // },
    // {
    //   title: "Hack The 6ix",
    //   dates: "August 26th - 27th, 2017",
    //   location: "Toronto, Ontario",
    //   description:
    //     "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/ShareShip/ShareShip",
    //     },
    //     {
    //       title: "Site",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://share-ship.herokuapp.com/",
    //     },
    //   ],
    // },
    // {
    //   title: "Stupid Hack Toronto",
    //   dates: "July 23rd, 2017",
    //   location: "Toronto, Ontario",
    //   description:
    //     "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/nsagirlfriend/nsagirlfriend",
    //     },
    //   ],
    // },
    // {
    //   title: "Global AI Hackathon - Toronto",
    //   dates: "June 23rd - 25th, 2017",
    //   location: "Toronto, Ontario",
    //   description:
    //     "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
    //   win: "1st Place Winner",
    //   links: [
    //     {
    //       title: "Article",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
    //     },
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/TinySamosas/",
    //     },
    //   ],
    // },
    // {
    //   title: "McGill AI for Social Innovation Hackathon",
    //   dates: "June 17th - 18th, 2017",
    //   location: "Montreal, Quebec",
    //   description:
    //     "Developed realtime facial microexpression analyzer using AI",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
    //   links: [],
    // },
    // {
    //   title: "Open Source Circular Economy Days Hackathon",
    //   dates: "June 10th, 2017",
    //   location: "Toronto, Ontario",
    //   description:
    //     "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
    //   win: "1st Place Winner",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/nicholaschen/genecis",
    //     },
    //   ],
    // },
    // {
    //   title: "Make School's Student App Competition 2017",
    //   dates: "May 19th - 21st, 2017",
    //   location: "International",
    //   description: "Improved PocketDoc and submitted to online competition",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
    //   win: "Top 10 Finalist | Honourable Mention",
    //   links: [
    //     {
    //       title: "Medium Article",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
    //     },
    //     {
    //       title: "Devpost",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://devpost.com/software/pocketdoc-react-native",
    //     },
    //     {
    //       title: "YouTube",
    //       icon: <Icons.youtube className="h-4 w-4" />,
    //       href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
    //     },
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/nicholaschen/pocketdoc-react-native",
    //     },
    //   ],
    // },
    // {
    //   title: "HackMining",
    //   dates: "May 12th - 14th, 2017",
    //   location: "Toronto, Ontario",
    //   description: "Developed neural network to optimize a mining process",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
    //   links: [],
    // },
    // {
    //   title: "Waterloo Equithon",
    //   dates: "May 5th - 7th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
    //   links: [
    //     {
    //       title: "Devpost",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://devpost.com/software/pocketdoc-react-native",
    //     },
    //     {
    //       title: "YouTube",
    //       icon: <Icons.youtube className="h-4 w-4" />,
    //       href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
    //     },
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/nicholaschen/pocketdoc-react-native",
    //     },
    //   ],
    // },
    // {
    //   title: "SpaceApps Waterloo",
    //   dates: "April 28th - 30th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/nicholaschen/earthwatch",
    //     },
    //   ],
    // },
    // {
    //   title: "MHacks 9",
    //   dates: "March 24th - 26th, 2017",
    //   location: "Ann Arbor, Michigan",
    //   description:
    //     "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/nicholaschen/threejs-planes",
    //     },
    //   ],
    // },
    // {
    //   title: "StartHacks I",
    //   dates: "March 4th - 5th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
    //   win: "1st Place Winner",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Source (Mobile)",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/mattBlackDesign/recipic-ionic",
    //     },
    //     {
    //       title: "Source (Server)",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/mattBlackDesign/recipic-rails",
    //     },
    //   ],
    // },
    // {
    //   title: "QHacks II",
    //   dates: "February 3rd - 5th, 2017",
    //   location: "Kingston, Ontario",
    //   description:
    //     "Developed a mobile game which enables city-wide manhunt with random lobbies",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Source (Mobile)",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/nicholaschen/human-huntr-react-native",
    //     },
    //     {
    //       title: "Source (API)",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/mattBlackDesign/human-huntr-rails",
    //     },
    //   ],
    // },
    // {
    //   title: "Terrible Hacks V",
    //   dates: "November 26th, 2016",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed a mock of Windows 11 with interesting notifications and functionality",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
    //     },
    //   ],
    // },
    // {
    //   title: "Portal Hackathon",
    //   dates: "October 29, 2016",
    //   location: "Kingston, Ontario",
    //   description:
    //     "Developed an internal widget for uploading assignments using Waterloo's portal app",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/UWPortalSDK/crowmark",
    //     },
    //   ],
    // },
  ]
} as const;
