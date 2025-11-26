import { Icons } from "@/components/icons";
import { Briefcase, HomeIcon, NotebookIcon } from "lucide-react";

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
    { href: "/investments", icon: Briefcase, label: "Angel" },
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
        url: "https://x.com/nixholas",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:m@nixholas.me",
        icon: Icons.email,

        navbar: true,
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
  ]
} as const;
