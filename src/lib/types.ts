import { LucideIcon } from "lucide-react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type TProjectProps = {
  title: String;
  desc: String;
  image: string | StaticImport;
  github_link: string;
  demo_link: string;
  tags: string[]

};

export type TSocials = {
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
