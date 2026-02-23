import type { Locale } from "@/i18n/config";

export type LocalizedText = Record<Locale, string>;
export type SkillLevel = "strong" | "good" | "learning";
export type SkillCategory =
  | "frontend"
  | "backend"
  | "database"
  | "cloudDevops"
  | "toolsUi";
export type ProjectCategory = "web" | "mobile" | "erp" | "ai";

export interface SkillItem {
  name: string;
  level: SkillLevel;
}

export interface SkillGroup {
  category: SkillCategory;
  items: SkillItem[];
}

export interface ProjectLinkSet {
  demo?: string;
  github?: string;
}

export interface ProjectItem {
  id: string;
  category: ProjectCategory;
  name: LocalizedText;
  shortDescription: LocalizedText;
  longDescription: LocalizedText;
  features: LocalizedText[];
  stack: string[];
  image: string;
  status: "completed" | "in-progress" | "planned";
  year: string;
  links: ProjectLinkSet;
}
