import { ArrowUpRight } from "lucide-react";
import { Badge } from "@app/ui/components/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@app/ui/components/card";
import { PROJECTS } from "../lib/siteData";

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6">
      <section className="flex flex-col gap-6 py-16 sm:py-20">
        <h1 className="text-2xl font-semibold tracking-tight">Projects</h1>
        <div className="grid gap-4 sm:grid-cols-2">
          {PROJECTS.map((project) => (
            <Card
              key={project.title}
              className="group relative transition-colors hover:border-foreground/20"
            >
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10"
              />
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
    </main>
  );
}
