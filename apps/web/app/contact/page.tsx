"use client";

import { motion } from "framer-motion";
import { SocialLinks } from "../components/SocialLinks";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-6">
      <motion.section
        className="flex flex-col gap-6 py-16 sm:py-20"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        <motion.h1
          className="text-2xl font-semibold tracking-tight"
          variants={item}
        >
          Get in touch
        </motion.h1>
        <motion.p
          className="max-w-md leading-relaxed text-muted-foreground"
          variants={item}
        >
          I&apos;m always open to interesting conversations and opportunities.
          Feel free to reach out through any of the channels below.
        </motion.p>
        <motion.div variants={item}>
          <SocialLinks />
        </motion.div>
      </motion.section>
    </main>
  );
}
