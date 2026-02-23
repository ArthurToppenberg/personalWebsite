"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <main className="-mt-16 w-full">
      <section className="relative min-h-screen w-full bg-stone-900">
        <div
          className="absolute inset-0 z-0 bg-stone-900"
          aria-hidden
        >
          <Image
            src="/media/broensGadeKøkken.png"
            alt=""
            fill
            className="object-cover transition-opacity duration-500 ease-out"
            style={{ opacity: imageLoaded ? 1 : 0 }}
            priority
            sizes="100vw"
            onLoad={() => setImageLoaded(true)}
          />
          <div
            className="absolute inset-0 bg-background/20"
            aria-hidden
          />
        </div>
        <motion.div
          className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="-translate-y-16 text-8xl font-bold text-white tracking-tight dark:text-black sm:text-9xl">
            Hej
          </h1>
        </motion.div>
      </section>
      <section className="mx-auto max-w-3xl px-6 py-24 sm:py-32">
        <motion.div
          className="flex flex-col gap-6 text-lg leading-relaxed text-muted-foreground"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <p>
            Hey, I&apos;m Arthur. Production Engineering student at DTU — applied
            engineering, mechanical design, and software.
          </p>
        </motion.div>
      </section>
    </main>
  );
}
