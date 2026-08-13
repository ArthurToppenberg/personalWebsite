"use client";

import { allProjects } from "content-collections";
import { motion } from "framer-motion";
import { ProjectCard } from "../components/ProjectCard";

const sortedProjects = [...allProjects].sort((a, b) =>
  b.date.localeCompare(a.date),
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
        <motion.section
          className="flex flex-col gap-6 py-16 sm:py-20"
          initial="hidden"
          animate="visible"
          variants={container}
        >
          <motion.h1
            className="text-2xl font-semibold tracking-tight"
            variants={cardItem}
          >
            Projects
          </motion.h1>
          <div className="grid gap-4 sm:grid-cols-2">
            {sortedProjects.map((project) => (
              <motion.div key={project._meta.path} variants={cardItem}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </main>
  );
}
