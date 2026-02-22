import { Badge } from "@app/ui/components/badge";
import { TECHNOLOGIES } from "../lib/siteData";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-6">
      <section className="flex flex-col gap-6 py-16 sm:py-20">
        <h1 className="text-2xl font-semibold tracking-tight">About</h1>
        <div className="flex max-w-2xl flex-col gap-4 text-muted-foreground leading-relaxed">
          <p>
            Arthur Toppenberg is a Production Engineering student at DTU with a
            strong focus on applied engineering and systems thinking. He
            combines mechanical design, manufacturing processes, and software
            development into integrated, execution-driven solutions.
          </p>
          <p>
            His engineering work spans the full product development cycle — from
            CAD modeling and ISO/DIN-compliant technical drawings to prototyping
            with 3D printing (PLA/TPU), CNC laser cutting, structured BOM
            development, and assembly validation. He approaches mechanical design
            with a focus on manufacturability, tolerancing, standards compliance,
            and system integration rather than isolated components.
          </p>
          <p>
            In parallel, Arthur builds robust software systems. He works with
            TypeScript, Next.js, React, Node.js, Prisma, Azure Functions, and
            Python to develop structured, scalable applications. He has
            experience designing JSON-driven workflows, implementing AI-assisted
            evaluation pipelines, and building full-stack systems that support
            engineering and regulatory processes. He operates comfortably in
            sprint-based development environments using Azure DevOps.
          </p>
          <p>
            Through work in health-tech and quality management contexts, he has
            developed familiarity with ISO 13485, MDR/IVDR regulatory frameworks,
            and structured documentation for compliance and Notified Body
            interactions. His strength lies in structuring complex requirements
            into systematic, implementable processes.
          </p>
          <p>
            Arthur&apos;s working style is iterative, analytical, and
            execution-focused. He prioritizes clarity, correctness, and
            structural integrity in both technical and strategic work. His
            projects consistently bridge hardware and software — translating
            engineering principles into practical, scalable solutions.
          </p>
        </div>
        <div className="flex flex-col gap-3 pt-2">
          <h2 className="text-sm font-medium">Technologies I work with</h2>
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
