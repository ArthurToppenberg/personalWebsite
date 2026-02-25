"use client";

import { allProjects } from "content-collections";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Badge } from "@app/ui/components/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@app/ui/components/card";

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
            {allProjects.map((project) => (
              <motion.div key={project._meta.path} variants={cardItem}>
                <Card className="group relative bg-background/80 backdrop-blur-sm transition-colors hover:border-foreground/20">
                  <Link
                    href={`/projects/${project._meta.path}`}
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
                      {project.tech.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </main>
  );
}
