"use client";

import { Button } from "@app/ui/components/button";
import { allProjects } from "content-collections";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
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
      <motion.section
        className="flex flex-col gap-6 py-20 sm:py-28"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.h1
          className="text-4xl font-semibold tracking-tight sm:text-5xl"
          variants={fadeInUp}
        >
          Arthur Toppenberg
        </motion.h1>
        <motion.p
          className="max-w-xl text-lg leading-relaxed text-muted-foreground"
          variants={fadeInUp}
        >
          Mechanical Engineering student at DTU, building hardware and software
          projects on the side.
        </motion.p>
        <motion.div
          className="flex items-center gap-3 pt-2"
          variants={fadeInUp}
        >
          <Button asChild>
            <a href="#selected-work">
              See projects
              <ArrowRight className="size-4" />
            </a>
          </Button>
          <Button asChild variant="outline">
            <Link href="/contact">Get in touch</Link>
          </Button>
        </motion.div>
      </motion.section>

      <motion.section
        id="selected-work"
        className="flex flex-col gap-6 border-t py-16 sm:py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
      >
        <motion.div className="flex flex-col gap-1" variants={fadeInUp}>
          <h2 className="text-2xl font-semibold tracking-tight">
            Selected work
          </h2>
          <p className="text-sm text-muted-foreground">
            A few things I&apos;ve built recently.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-4 sm:grid-cols-2"
          variants={staggerContainer}
        >
          {sortedProjects.map((project) => (
            <motion.div key={project._meta.path} variants={fadeInUp}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            View all projects
            <ArrowRight className="size-4" />
          </Link>
        </motion.div>
      </motion.section>
    </main>
  );
}
