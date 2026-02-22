import { SocialLinks } from "../components/SocialLinks";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-6">
      <section className="flex flex-col gap-6 py-16 sm:py-20">
        <h1 className="text-2xl font-semibold tracking-tight">
          Get in touch
        </h1>
        <p className="max-w-md leading-relaxed text-muted-foreground">
          I&apos;m always open to interesting conversations and opportunities.
          Feel free to reach out through any of the channels below.
        </p>
        <SocialLinks />
      </section>
    </main>
  );
}
