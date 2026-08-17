import {
    Globe2,
    Hammer,
    HelpCircle,
    LucideIcon,
    Music,
    Speaker,
  } from "lucide-react";

  const projectIcons: Record<string, LucideIcon> = {
    Hammer,
    Globe2,
    HelpCircle,
    Music,
    Speaker,
  };

  export const getProjectIcon = (iconName: string | undefined): LucideIcon => {
    if (!iconName) {
      return HelpCircle;
    }
  
    return projectIcons[iconName] ?? HelpCircle;
  };