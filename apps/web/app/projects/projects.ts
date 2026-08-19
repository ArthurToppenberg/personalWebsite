import type { LucideIcon } from "lucide-react";
import type { ComponentType } from "react";
import * as cubo18 from "./content/cubo-18";

export type ProjectMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  icon: LucideIcon;
  image?: string;
  imageCaption?: string;
  href?: string;
};

export type ProjectModule = {
  meta: ProjectMeta;
  Content: ComponentType;
};

// New project = new file under ./content + one line here.
const modules: ProjectModule[] = [cubo18];

export const projects: ProjectModule[] = modules;

export function getProject(slug: string): ProjectModule | undefined {
  return projects.find((project) => project.meta.slug === slug);
}
