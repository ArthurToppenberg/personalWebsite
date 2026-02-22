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
              Production Engineering student at DTU with a strong focus on
              applied engineering and systems thinking. Combining mechanical
              design, manufacturing processes, and software development into
              integrated, execution-driven solutions.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <AboutSection title="Engineering">
            <p>
              His engineering work spans the full product development cycle —
              from CAD modeling and ISO/DIN-compliant technical drawings to
              prototyping with 3D printing (PLA/TPU), CNC laser cutting,
              structured BOM development, and assembly validation. He approaches
              mechanical design with a focus on manufacturability, tolerancing,
              standards compliance, and system integration rather than isolated
              components.
            </p>
          </AboutSection>

          <AboutSection title="Software">
            <p>
              In parallel, Arthur builds robust software systems. He works with
              TypeScript, Next.js, React, Node.js, Prisma, Azure Functions, and
              Python to develop structured, scalable applications. He has
              experience designing JSON-driven workflows, implementing
              AI-assisted evaluation pipelines, and building full-stack systems
              that support engineering and regulatory processes.
            </p>
          </AboutSection>

          <AboutSection title="Compliance">
            <p>
              Through work in health-tech and quality management contexts, he
              has developed familiarity with ISO 13485, MDR/IVDR regulatory
              frameworks, and structured documentation for compliance and
              Notified Body interactions. His strength lies in structuring
              complex requirements into systematic, implementable processes.
            </p>
          </AboutSection>

          <AboutSection title="Approach">
            <p>
              Arthur&apos;s working style is iterative, analytical, and
              execution-focused. He prioritizes clarity, correctness, and
              structural integrity in both technical and strategic work. His
              projects consistently bridge hardware and software — translating
              engineering principles into practical, scalable solutions.
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
