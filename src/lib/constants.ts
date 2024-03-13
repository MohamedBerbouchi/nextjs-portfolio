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
    title: "Node Project",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus eius ducimus rerum. Quo similique nihil necessitatibus.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    github_link: "https://github.com/",
    demo_link: "https://google.com/",
  },
  {
    title: "Node Project",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus eius ducimus rerum. Quo similique nihil necessitatibus.",
    image:
      "https://plus.unsplash.com/premium_photo-1683288662019-c92caea8276d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    github_link: "https://github.com/",
    demo_link: "https://google.com/",
  },
];
