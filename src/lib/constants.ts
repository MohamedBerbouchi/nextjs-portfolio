import { BadgeInfo, CircleUserRound, Github, Home, Linkedin, MailPlus, PencilRuler, SquareCode } from "lucide-react";
import { TProjectProps, TSkills, TSocials } from "./types";

export const SOCIALS: TSocials[] = [
  {
    icon: Linkedin,
    link: "https://www.linkedin.com/in/mohamed-berbouchi-39951a264/",
  },
  {
    icon: Github,
    link: "https://github.com/MohamedBerbouchi",
  },
  {
    icon: MailPlus,
    link: "mohamed.berbouchi.edu@gmail.com",
  },
];

export const SKILLS: TSkills = {
  front_end: [
    {
      label: "HTML",
      level: "Experienced",
    },
    {
      label: "CSS",
      level: "Experienced",
    },
    {
      label: "Javascript",
      level: "Intermediate",
    },
    {
      label: "React",
      level: "Intermediate",
    },
    {
      label: "NextJs",
      level: "Experienced",
    },
    {
      label: "Tailwind",
      level: "basic",
    },
  ],
  back_end: [
    {
      label: "Node Js",
      level: "Intermediate",
    },
    {
      label: "Express",
      level: "Intermediate",
    },
    {
      label: "MySQL",
      level: "Intermediate",
    },
    {
      label: "MongoDB",
      level: "Intermediate",
    },
    {
      label: "Laravel & PHP",
      level: "Intermediate",
    },
  ],
};

export const PROJECTS: TProjectProps[] = [
  {
    title: "Student management app",
    desc: "A specialized web application has been designed for student management within the vocational training institution, utilizing modern technologies.",
    image: "/images/project-1.png",
    github_link: "https://github.com/MohamedBerbouchi/project-gestion-stagiaires",
    demo_link: "https://berbouchi.000webhostapp.com",
    tags:[ 'Laravel','php', 'MySQL']
  },
  {
    title: "React Portfolio",
    desc: "The portfolio is crafted with a mobile-first approach, ensuring a seamless experience across various devices and screen sizes.",
    image: "/images/project-2.png",
    github_link: "https://github.com/MohamedBerbouchi/nextjs-portfolio",
    demo_link: "https://nextjs-portfolio-two-ashen.vercel.app/",
    tags:['react','Tailwind', 'nextjs']

  },
  {
    title: "Real Estat App",
    desc: "The portfolio is crafted with a mobile-first approach, ensuring a seamless experience across various devices and screen sizes.",
    image: "/images/project-3.png",
    github_link: "https://github.com/MohamedBerbouchi/nextjs-portfolio",
    demo_link: "https://nextjs-portfolio-two-ashen.vercel.app/",
    tags:['React','Express', 'sass', 'MongoDb']

  },
  {
    title: "Gestion de conditionnement",
    desc: "une plateforme de gestion de conditionnement.",
    image: "/images/project-5.png",
    github_link: "https://github.com/MohamedBerbouchi/stage-project/tree/main",
    demo_link: "https://github.com/MohamedBerbouchi/stage-project/tree/main",
    tags:['Laravel','Mysql', 'bootstrap', 'html&css']

  },
  // {
  //   title: "E-commerce website(comming soon)",
  //   desc: "The portfolio is crafted with a mobile-first approach, ensuring a seamless experience across various devices and screen sizes.",
  //   image: "/images/project-4.svg",
  //   github_link: "https://github.com/MohamedBerbouchi/nextjs-portfolio",
  //   demo_link: "https://nextjs-portfolio-two-ashen.vercel.app/",
  //   tags:['php', 'MySQL']

  // },
];


export  const MENU = [
  {
      title: 'Home',
      icon: Home  ,
      link: 'home'
  },
  {
      title: 'About me',
      icon:  BadgeInfo  ,
      link: 'about-me'
  },
  {
      title: 'Experience',
      icon:  SquareCode ,
      link: 'skills'
  },
  {
      title: 'Projects',
      icon:  PencilRuler ,
      link: 'projects'
  },
  {
      title: 'Contact me',
      icon:  CircleUserRound  ,
      link: 'contact'
  },
]
