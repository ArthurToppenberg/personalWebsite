export const TECHNOLOGIES = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "NestJS",
  "Tailwind CSS",
  "PostgreSQL",
  "Docker",
  "AWS",
  "Git",
] as const;

export const PROJECTS = [
  {
    title: "Personal Website",
    description:
      "This website — built with Next.js, Tailwind CSS, and shadcn/ui in a Turborepo monorepo.",
    href: "https://github.com/arthurtoppenberg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Project Two",
    description:
      "A brief description of your second project. Replace this with your actual work.",
    href: "#",
    tags: ["React", "Node.js", "PostgreSQL"],
  },
  {
    title: "Project Three",
    description:
      "A brief description of your third project. Replace this with your actual work.",
    href: "#",
    tags: ["NestJS", "Docker", "AWS"],
  },
] as const;

export const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/arthurtoppenberg",
    iconKey: "github" as const,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/arthur-toppenberg-52b15126a/",
    iconKey: "linkedin" as const,
  },
  {
    label: "Email",
    href: "mailto:hello@arthurtoppenberg.com",
    iconKey: "mail" as const,
  },
] as const;
