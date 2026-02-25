import { allProjects } from "content-collections";
import { MDXContent } from "@content-collections/mdx/react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Badge } from "@app/ui/components/badge";

export function generateStaticParams(): Array<{ slug: string }> {
  return allProjects.map((project) => ({
    slug: project._meta.path,
  }));
}

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = allProjects.find((p) => p._meta.path === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="relative z-10 mx-auto max-w-3xl px-6 py-16 sm:py-20">
        <Link
          href="/projects"
          className="mb-8 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          Back to projects
        </Link>

        <header className="mb-10">
          <h1 className="mb-3 text-3xl font-semibold tracking-tight">
            {project.title}
          </h1>
          <p className="mb-4 text-muted-foreground">{project.description}</p>
          <div className="flex flex-wrap items-center gap-2">
            {project.tech.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
            {project.href && project.href !== "#" && (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                View source
                <ArrowUpRight className="size-3.5" />
              </a>
            )}
          </div>
        </header>

        <article className="prose prose-neutral dark:prose-invert max-w-none">
          <MDXContent code={project.mdx} />
        </article>
      </div>
    </main>
  );
}
