import type { allProjects } from "content-collections";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getProjectIcon } from "../projects/utils";

type Project = (typeof allProjects)[number];

export function ProjectCard({ project }: { project: Project }) {
  const Icon = getProjectIcon(project.icon);

  return (
    <Link href={`/projects/${project._meta.path}`} className="block h-full">
      <div className="group relative flex h-full flex-col overflow-hidden rounded-xl border bg-card transition-colors hover:border-foreground/20">
        {project.image && (
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
            <Image
              src={project.image}
              alt=""
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              sizes="(min-width: 640px) 50vw, 100vw"
            />
          </div>
        )}
        <div className="flex flex-1 flex-col gap-2 p-4">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="flex items-center justify-center rounded-full bg-muted p-1.5">
                <Icon
                  className="size-3.5 text-muted-foreground"
                  aria-hidden="true"
                />
              </span>
              <span className="text-sm font-medium">{project.title}</span>
            </div>
            <ArrowUpRight className="size-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
          </div>
          <p className="text-sm text-muted-foreground">{project.description}</p>
        </div>
      </div>
    </Link>
  );
}
