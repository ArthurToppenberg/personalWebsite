import { SocialLinks } from "./components/SocialLinks";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6">
      <section className="flex flex-col justify-center gap-4 py-24 sm:py-32">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Hey, I&apos;m Arthur.
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
          Production Engineering student at DTU — applied engineering, mechanical
          design, and software.
        </p>
        <div className="pt-2">
          <SocialLinks />
        </div>
      </section>
    </main>
  );
}
  