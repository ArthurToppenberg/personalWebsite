"use client";

import { motion } from "framer-motion";
import { SocialLinks } from "./components/SocialLinks";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6">
      <motion.section
        className="flex flex-col justify-center gap-4 py-24 sm:py-32"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl font-bold tracking-tight sm:text-5xl"
          variants={item}
        >
          Hey, I&apos;m Arthur.
        </motion.h1>
        <motion.p
          className="max-w-xl text-lg leading-relaxed text-muted-foreground"
          variants={item}
        >
          Production Engineering student at DTU — applied engineering,
          mechanical design, and software.
        </motion.p>
        <motion.div className="pt-2" variants={item}>
          <SocialLinks />
        </motion.div>
      </motion.section>
    </main>
  );
}
