import type { LucideIcon } from "lucide-react";
import { meta as cubo18 } from "./(project)/cubo-18/meta";

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

// New project = new folder under ./(project) + one line here.
export const projects: ProjectMeta[] = [cubo18];
