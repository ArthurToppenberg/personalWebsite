import type { Metadata } from "next";
import { MotionDiv, MotionH1, MotionSection } from "../components/motion";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from "./projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "A few things Arthur Toppenberg has built recently.",
};

const sortedProjects = [...projects].sort((a, b) =>
  b.meta.date.localeCompare(a.meta.date),
);

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const cardItem = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 },
};

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="relative z-10 mx-auto max-w-3xl px-6">
        <MotionSection
          className="flex flex-col gap-6 py-16 sm:py-20"
          initial="hidden"
          animate="visible"
          variants={container}
        >
          <MotionH1
            className="text-2xl font-semibold tracking-tight"
            variants={cardItem}
          >
            Projects
          </MotionH1>
          <div className="grid gap-4 sm:grid-cols-2">
            {sortedProjects.map((project, index) => (
              <MotionDiv key={project.meta.slug} variants={cardItem}>
                <ProjectCard project={project.meta} eager={index === 0} />
              </MotionDiv>
            ))}
          </div>
        </MotionSection>
      </div>
    </main>
  );
}
