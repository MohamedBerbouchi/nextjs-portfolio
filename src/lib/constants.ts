import { Github, Linkedin, MailPlus, type LucideIcon } from "lucide-react";
type TSocials = {
  icon: LucideIcon;
  link: string;
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
