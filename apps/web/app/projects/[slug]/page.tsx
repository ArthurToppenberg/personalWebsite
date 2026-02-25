import { allProjects } from "content-collections";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Link as LinkIcon } from "lucide-react";
import { Badge } from "@app/ui/components/badge";
import { AppImage } from "../../components/AppImage";
import { ProjectMDX } from "./projectMDX";

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
          {project.href && project.href !== "#" ? (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-3 flex flex-wrap items-center gap-2 text-foreground no-underline transition-opacity hover:opacity-80"
              aria-label={`${project.title} - View source`}
            >
              <h1 className="text-3xl font-semibold tracking-tight">
                {project.title}
              </h1>
              <span className="text-muted-foreground">-</span>
              <LinkIcon className="size-4 text-muted-foreground" />
            </a>
          ) : (
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <h1 className="text-3xl font-semibold tracking-tight">
                {project.title}
              </h1>
            </div>
          )}
          <p className="mb-4 text-muted-foreground">{project.description}</p>
          <div className="flex flex-wrap items-center gap-2">
            {project.tech.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </header>

        {project.image && (
          <figure className="m-0 mb-10">
            <div className="overflow-hidden rounded-xl border">
              <AppImage
                src={project.image}
                alt={project.title}
                width={1200}
                height={630}
                className="w-full object-cover"
              />
            </div>
            {project.imageCaption && (
              <figcaption className="mt-2 text-left text-xs text-muted-foreground tracking-tight">
                {project.imageCaption}
              </figcaption>
            )}
          </figure>
        )}

        <article className="prose prose-neutral dark:prose-invert max-w-none">
          <ProjectMDX code={project.mdx} />
        </article>
      </div>
    </main>
  );
}
