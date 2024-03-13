import { Github, Linkedin, MailPlus, type LucideIcon } from "lucide-react";
type TSocials = {
  icon: LucideIcon;
  link: string;
};

export type TSkillItem = {
  label: string;
  level: "Experienced" | "Intermediate" | "basic";
};
export type TSkills = {
  front_end: TSkillItem[];
  back_end: TSkillItem[];
};

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
