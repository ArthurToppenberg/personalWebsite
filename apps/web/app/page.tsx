import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { Badge } from "@app/ui/components/badge";
import { Button } from "@app/ui/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@app/ui/components/card";
import { Separator } from "@app/ui/components/separator";

const TECHNOLOGIES = [
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
];

const PROJECTS = [
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
];

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/arthurtoppenberg",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/arthurtoppenberg",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:hello@arthurtoppenberg.com",
    icon: Mail,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-sm">
        <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
          <span className="text-sm font-semibold tracking-tight">
            Arthur Toppenberg
          </span>
          <div className="flex items-center gap-4">
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-3xl px-6">
        <section className="flex flex-col justify-center gap-4 py-24 sm:py-32">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Hey, I&apos;m Arthur.
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
            Software engineer who enjoys building products that are well-crafted,
            performant, and thoughtfully designed. Currently focused on
            full-stack development with TypeScript.
          </p>
          <div className="flex gap-3 pt-2">
            {SOCIAL_LINKS.map((link) => (
              <Button key={link.label} variant="outline" size="sm" asChild>
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  <link.icon className="size-4" />
                  {link.label}
                </a>
              </Button>
            ))}
          </div>
        </section>

        <Separator />

        <section id="about" className="flex flex-col gap-6 py-16 sm:py-20">
          <h2 className="text-2xl font-semibold tracking-tight">About</h2>
          <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
            <p>
              I&apos;m a software engineer passionate about building great software.
              I care about clean architecture, developer experience, and shipping
              products that make a real impact.
            </p>
            <p>
              When I&apos;m not writing code, you&apos;ll find me exploring new
              technologies, contributing to open source, or working on side projects
              that scratch an itch.
            </p>
          </div>
          <div className="flex flex-col gap-3 pt-2">
            <h3 className="text-sm font-medium">Technologies I work with</h3>
            <div className="flex flex-wrap gap-2">
              {TECHNOLOGIES.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        <Separator />

        <section id="projects" className="flex flex-col gap-6 py-16 sm:py-20">
          <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {PROJECTS.map((project) => (
              <Card key={project.title} className="group relative transition-colors hover:border-foreground/20">
                <a href={project.href} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10" />
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base">
                    {project.title}
                    <ArrowUpRight className="size-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator />

        <section id="contact" className="flex flex-col gap-6 py-16 sm:py-20">
          <h2 className="text-2xl font-semibold tracking-tight">
            Get in touch
          </h2>
          <p className="max-w-md text-muted-foreground leading-relaxed">
            I&apos;m always open to interesting conversations and opportunities.
            Feel free to reach out through any of the channels below.
          </p>
          <div className="flex gap-3">
            {SOCIAL_LINKS.map((link) => (
              <Button key={link.label} variant="outline" size="sm" asChild>
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  <link.icon className="size-4" />
                  {link.label}
                </a>
              </Button>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-6 text-sm text-muted-foreground">
          <span>&copy; {new Date().getFullYear()} Arthur Toppenberg</span>
        </div>
      </footer>
    </div>
  );
}
