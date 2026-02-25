"use client";

import { motion } from "framer-motion";
import { AppImage } from "../components/AppImage";
import { Badge } from "@app/ui/components/badge";
import { Card, CardContent } from "@app/ui/components/card";
import { Separator } from "@app/ui/components/separator";
import { TECHNOLOGIES } from "../lib/siteData";

const fadeInUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
  },
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-6">
      <motion.section
        className="flex flex-col gap-12 py-16 sm:py-20"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="flex flex-col gap-12 sm:flex-row sm:items-start sm:gap-10">
          <motion.div variants={fadeInUp} className="shrink-0 sm:w-56">
            <Card className="overflow-hidden border-none bg-transparent p-0 shadow-none">
              <CardContent className="p-0">
                <AppImage
                  src="/media/theSphereSelfie.png"
                  alt="Arthur at The Sphere"
                  width={600}
                  height={600}
                  priority
                  className="aspect-[4/5] w-full rounded-2xl object-cover grayscale-[20%] transition-all duration-500 hover:grayscale-0"
                />
              </CardContent>
            </Card>
          </motion.div>

          <motion.div className="flex flex-col gap-4" variants={fadeInUp}>
            <div className="flex flex-col gap-1">
              <h1 className="text-2xl font-semibold tracking-tight">
                Arthur Toppenberg
              </h1>
              <p className="text-sm text-muted-foreground">
                Mechanical Engineering &middot; DTU
              </p>
            </div>
            <Separator />
            <p className="text-muted-foreground leading-relaxed">
              I&apos;m a Mechanical Engineering student at DTU. 
            </p>
          </motion.div>
        </div>

        <motion.div className="flex flex-col gap-8" variants={staggerContainer}>
          <AboutSection title="Professional Experience" variants={fadeInUp}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam gravida, dui nec dictum hendrerit, ex nisi porttitor elit, at fermentum quam ipsum nec elite. Morbi ut magna dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            </p>
          </AboutSection>

          <AboutSection title="Background" variants={fadeInUp}>
            <p>
              Fusce ac tellus ut erat posuere sodales vitae vitae mi. Duis nec molestie urna, eu sodales sapien. Maecenas luctus, mauris eget venenatis vestibulum, dolor nisi blandit nisi, at scelerisque mauris orci quis dolor.
            </p>
          </AboutSection>

          <AboutSection title="Core Competencies" variants={fadeInUp}>
            <p>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam facilisis dui ac turpis posuere, quis accumsan lorem efficitur. In hac habitasse platea dictumst.
            </p>
          </AboutSection>
        </motion.div>
      </motion.section>
    </main>
  );
}

function AboutSection({
  title,
  children,
  variants,
}: {
  title: string;
  children: React.ReactNode;
  variants: {
    hidden: { opacity: number; y: number };
    visible: { opacity: number; y: number };
  };
}) {
  return (
    <motion.div className="flex flex-col gap-2" variants={variants}>
      <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
        {title}
      </h2>
      <div className="text-muted-foreground leading-relaxed">{children}</div>
    </motion.div>
  );
}
