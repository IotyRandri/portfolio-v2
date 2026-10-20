import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title:
    "Ioty Randrianarivo — Full-stack Web & Mobile Developer, Cybersecurity Enthusiast",
  author: "Ioty Randrianarivo",
  description:
    "Software Engineer currently based in Antananarivo, Madagascar, open to international positions, whether remote, on-site, or hybrid. I specialize in web application development, although mobile development, cybersecurity, and any Unix/Linux intrigue me as well.",
  lang: "en",
  siteLogo: "/alejandro-small.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "Twitter", href: "https://github.com/immois/astro-zen" },
    { text: "LinkedIn", href: "https://github.com/immois/astro-zen" },
    { text: "Github", href: "https://github.com/immois/astro-zen" },
    { text: "Youtube", href: "https://github.com/immois/astro-zen" },
    { text: "Dribbble", href: "https://github.com/immois/astro-zen" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Ioty Randrianarivo",
    specialty: "Web & Mobile Developer, Cybersecurity Enthusiast",
    summary:
      "Developer currently based in Antananarivo, Madagascar. \n" +
      "I specialize in web application development, whether front-end or back-end, although I can also handle mobile development, as well as application maintenance and database management. \n" +
      "I also have an interest in everything that is related to cybersecurity or related to Unix/Linux as well.",
    email: "randrianarivoioty@gmail.com",
  },
  experience: [
    {
      company: "SGI Madagascar",
      position: "Full-stack Web Developer",
      startDate: "April 2026",
      endDate: "Until Today",
      summary: [
        "I assisted and developed a web application for a bank, to help keep track of the loans they lend to their clients. From its conception, implementation, to its deployment and maintenance, I assisted and participated in all software development cycles. On the front-end, I used React.js, on the back-end Node.js and Prisma, and PostgreSQL for the database.",
        "I implemented multiple functionalities and features on the web app, from the login page, dashboard(s), user management for administrators, calculation of delayed payments and interests, and many others. The new web application helped improve time management by approximately 30% thanks to its transfer to the digital world compared to its old native and slow paperwork. The transfer to the digital not only helped time management, but also helped enhance and inform decision-making for the bank.",
        "AGILE project management",
      ],
    },
    {
      company: "Pilgrimage SARLU",
      position: "Full-stack Remote Web Developer",
      startDate: "January 2025",
      endDate: "August 2025",
      summary: [
        "Developed and integrated a web application for an online private coaching platform to help students and business owners on their journey to career or personal development.",
        "Participated in all of the software development cycles, from its conception, development, to its deployment.",
        "Developed and integrated web pages based on Figma mock-ups, working closely with the design team.",
        "Optimised the front-end of web pages for production environment, from project configurations to code refactoring.",
        "Developed and integrated REST APIs on the front-end, calling other REST APIs built on the back-end. Worked closely with the front-end, back-end, as well as the design team for maximum productivity. On the front-end, I used Next.js as well as React.js, Springboot for the back-end, and PostgreSQL for the database.",
        "Remote work",
        "AGILE project management",
      ],
    },
    {
      company: "PSI Madagascar",
      position: "Full-stack Web Developer Intern",
      startDate: "August 2023",
      endDate: "January 2024",
      summary: [
        "Developed, conceived, and implemented two new web applications for the supervision of the transfer of intrants for a private health company.",
        "From its conception, development, integration, to its deployment to a test environment, I assisted in almost all main software development cycles.",
        "I integrated and developed many useful features for the company, going from login pages, user management, dashboards, to Google Maps localisation.",
        "I used React.js for the front-end, PHP, as well as Node.js with Express for the back-end, and MySQL for the database.",
      ],
    },
  ],
  projects: [
    {
      name: "Spotifu Music",
      summary: "A music streaming app that emulates Spotify's core features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/spotifu.png",
    },
    {
      name: "Shopp App",
      summary: "An e-commerce platform that replicates Shopify's key features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/shopify-clon.png",
    },
    {
      name: "ClonTagram",
      summary: "A social network that replicates the features of Instagram",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/clone-ig.png",
    },
  ],
  about: {
    description: `
      Hi, I’m Alejandro Múnez, a passionate Mobile and Web Developer with a knack for crafting seamless digital experiences. With a strong background in both Android and iOS development, as well as front-end web technologies, I thrive in the intersection where creativity meets technology.

      Over the years, I’ve honed my skills in building robust, user-friendly applications that not only meet the needs of users but also push the boundaries of what’s possible. My projects range from innovative mobile applications to responsive web designs, all with a focus on performance, security, and scalability.
    `,
    image: "/alejandro-big.jpg",
  },
};

// #5755ff

// #5cff7fe5
