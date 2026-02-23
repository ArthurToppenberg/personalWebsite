import Image from "next/image";
import { Badge } from "@app/ui/components/badge";
import { Card, CardContent } from "@app/ui/components/card";
import { Separator } from "@app/ui/components/separator";
import { TECHNOLOGIES } from "../lib/siteData";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-6">
      <section className="flex flex-col gap-12 py-16 sm:py-20">
        <div className="flex flex-col gap-12 sm:flex-row sm:items-start sm:gap-10">
          <Card className="shrink-0 overflow-hidden border-none bg-transparent p-0 shadow-none sm:w-56">
            <CardContent className="p-0">
              <Image
                src="/media/theSphereSelfie.png"
                alt="Arthur at The Sphere"
                width={600}
                height={600}
                priority
                className="aspect-[4/5] w-full rounded-2xl object-cover grayscale-[20%] transition-all duration-500 hover:grayscale-0"
              />
            </CardContent>
          </Card>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <h1 className="text-2xl font-semibold tracking-tight">
                Arthur Toppenberg
              </h1>
              <p className="text-sm text-muted-foreground">
                Production Engineering &middot; DTU
              </p>
            </div>
            <Separator />
            <p className="text-muted-foreground leading-relaxed">
              I&apos;m a Production Engineering student at DTU. I focus on bridging
              the gap between mechanical design and software—building systems where
              physical manufacturing and digital workflows actually work together.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <AboutSection title="Professional Experience">
            <p>
              Currently a Software Developer at <strong>Health Tech Hub Copenhagen</strong>,
              where I build full-stack tools within MDR/IVDR frameworks. I specialize in
              creating JSON-driven workflows and AI-assisted pipelines that automate
              complex regulatory and technical documentation.
            </p>
          </AboutSection>

          <AboutSection title="Background">
            <p>
              Previously at <strong>Spaak Technologies</strong>, I progressed from an
              internship to a full-time Software Developer role. This transition
              solidified my expertise in TypeScript, Next.js, and Python, focusing on
              bridging the gap between physical manufacturing and digital workflows.
            </p>
          </AboutSection>

          <AboutSection title="Core Competencies">
            <p>
              My work integrates Production Engineering principles from DTU with modern
              software architecture. I prioritize structural integrity and maintainable
              code, ensuring that technical systems—whether hardware or software—are
              built for scalability and regulatory compliance.
            </p>
          </AboutSection>
        </div>

        <Separator />

        <div className="flex flex-col gap-3">
          <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Technologies
          </h2>
          <div className="flex flex-wrap gap-2">
            {TECHNOLOGIES.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function AboutSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
        {title}
      </h2>
      <div className="text-muted-foreground leading-relaxed">{children}</div>
    </div>
  );
}