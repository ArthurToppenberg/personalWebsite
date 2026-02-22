import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@app/ui/components/button";
import { SOCIAL_LINKS } from "../lib/siteData";

const ICON_MAP = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
} as const;

export function SocialLinks() {
  return (
    <div className="flex gap-3">
      {SOCIAL_LINKS.map((link) => {
        const Icon = ICON_MAP[link.iconKey];
        return (
          <Button key={link.label} variant="outline" size="sm" asChild>
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              <Icon className="size-4" />
              {link.label}
            </a>
          </Button>
        );
      })}
    </div>
  );
}
