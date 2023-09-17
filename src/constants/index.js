import {
  prpr,
  br,
  ms,
  ph,
  unity,
  cpp,
  flutter,
  firebase,
  hardhat,
  mern,
  solidity,
  crs,
  wix,
  pp,
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Flutter Developer",
    icon: web,
  },
  {
    title: "Blockchain Developer",
    icon: mobile,
  },
  {
    title: "ML Programmer",
    icon: backend,
  },
  {
    title: "Game Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Git/ Github",
    icon: git,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "Solidity",
    icon: solidity,
  },
  {
    name: "Hardhat",
    icon: hardhat,
  },
  {
    name: "Unity 3D",
    icon: unity,
  },/*
  {
    name: "MERN Stack",
    icon: mern,
  },*/
];

const experiences = [
  {
    title: "Founder, Lead",
    company_name: "Code_Rise Studios",
    icon: crs,
    iconBg: "#383E56",
    date: "April 2023 - Present",
    points: [
      "Founded a student-run application development studio.",
      "Developed and deployed Flutter-based mobile and web applications thataddress real-world problems.",
      "Ideated and designed applications, formulated the workflow.",
      "Formed a team of software developers and hired freelancers, lead the membersto develop the products.",
    ],
  },
  {
    title: "E-commerce platform host",
    company_name: "Project Pradarshan",
    icon: pp,
    iconBg: "#383E56",
    date: "Jan 2022 - Feb 2022",
    points: [
      "Designed and built Project_Pradarshan, a small scale e-commerce platform helping artists & small businesses host theirproducts and catalogues.",
      "Hosted portfolios, Catalogues and products for brands on the website made using Wix (EditorX).",
    ],
  },
  {
    title: "Wix Web Designer",
    company_name: "Freelance",
    icon: wix,
    iconBg: "#E6DEDD",
    date: "2021 - 2022",
    points: [
      "Freelanced as a Wix website designer for small businesses and individuals.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "MentorSpace",
    description:
      "A Web and Mobile application aimed at connecting mentees and mentors usinga social media- like design.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
    ],
    image: ms,
    source_code_link: "https://github.com/soaham-pimparkar/eyicFinalApp",
  },
  {
    name: "ProjectHive",
    description:
      "A web platform that connects students with companies that are offeringprojects and with professors for research projects, and open source projects.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "figma",
        color: "pink-text-gradient",
      },
    ],
    image: ph,
    source_code_link: "https://github.com/soaham-pimparkar/project-hive",
  },
  {
    name: "Brisk Rooms",
    description:
      "A cloud-based platform that simplifies the process of file sharing",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
    ],
    image: br,
    source_code_link: "https://github.com/soaham-pimparkar/briskRooms",
  },
  {
    name: "Project Pradarshan",
    description:
      "A small scale e-commerce platform helping artists & small businesses host theirproducts and catalogues.",
    tags: [
      {
        name: "Wix (EditorX)",
        color: "blue-text-gradient",
      },
    ],
    image: prpr,
    source_code_link: "https://projectpradarshan.wixsite.com/website",
  },
];

export { services, technologies, experiences, testimonials, projects };
