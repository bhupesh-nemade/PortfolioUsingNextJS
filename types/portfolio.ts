import type { IconType } from "react-icons";

export type Project = {
  title: string;
  slug: string;
  summary: string;
  image: string;
  stack: string[];
  features: string[];
  architectureHighlights: string[];
  architecture: string;
  challenges: string;
  github: string;
demo?: string;
caseStudy?: string;
  
};

export type Skill = {
  name: string;
  category: "Frontend" | "Backend" | "AI" | "Data" | "DevOps";
  glow: string;
};

export type Stat = {
  label: string;
  value: number;
  suffix?: string;
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  detail: string;
  logo: string;
  achievements: string[];
  impact: {
    label: string;
    value: number;
    suffix?: string;
  };
  icon: IconType;
};
