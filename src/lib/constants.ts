import { Github, Linkedin, MailPlus } from "lucide-react";
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
    github_link: "https://github.com/MohamedBerbouchi/project-school",
    demo_link: "https://berbouchi.000webhostapp.com",
  },
  {
    title: "React Portfolio",
    desc: "The portfolio is crafted with a mobile-first approach, ensuring a seamless experience across various devices and screen sizes.",
    image: "/images/project-2.png",
    github_link: "https://github.com/MohamedBerbouchi/nextjs-portfolio",
    demo_link: "https://nextjs-portfolio-two-ashen.vercel.app/",
  },
];
