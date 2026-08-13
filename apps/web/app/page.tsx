import { Button } from "@app/ui/components/button";
import { allProjects } from "content-collections";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import {
  MotionDiv,
  MotionH1,
  MotionP,
  MotionSection,
} from "./components/motion";
import { ProjectCard } from "./components/ProjectCard";

const sortedProjects = [...allProjects].sort((a, b) =>
  b.date.localeCompare(a.date),
);

const fadeInUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6">
      <MotionSection
        className="flex flex-col gap-6 py-20 sm:py-28"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <MotionH1
          className="text-4xl font-semibold tracking-tight sm:text-5xl"
          variants={fadeInUp}
        >
          Arthur Toppenberg
        </MotionH1>
        <MotionP
          className="max-w-xl text-lg leading-relaxed text-muted-foreground"
          variants={fadeInUp}
        >
          Mechanical Engineering student at DTU, building hardware and software
          projects on the side.
        </MotionP>
        <MotionDiv className="flex items-center gap-3 pt-2" variants={fadeInUp}>
          <Button asChild>
            <a href="#selected-work">
              See projects
              <ArrowRight className="size-4" />
            </a>
          </Button>
          <Button asChild variant="outline">
            <Link href="/contact">Get in touch</Link>
          </Button>
        </MotionDiv>
      </MotionSection>

      <MotionSection
        id="selected-work"
        className="flex flex-col gap-6 border-t py-16 sm:py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
      >
        <MotionDiv className="flex flex-col gap-1" variants={fadeInUp}>
          <h2 className="text-2xl font-semibold tracking-tight">
            Projects
          </h2>
          <p className="text-sm text-muted-foreground">
            Take a look at my most recent projects
          </p>
        </MotionDiv>

        <MotionDiv
          className="grid gap-4 sm:grid-cols-2"
          variants={staggerContainer}
        >
          {sortedProjects.map((project) => (
            <MotionDiv key={project._meta.path} variants={fadeInUp}>
              <ProjectCard project={project} />
            </MotionDiv>
          ))}
        </MotionDiv>

        <MotionDiv variants={fadeInUp}>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            View all projects
            <ArrowRight className="size-4" />
          </Link>
        </MotionDiv>
      </MotionSection>
    </main>
  );
}
