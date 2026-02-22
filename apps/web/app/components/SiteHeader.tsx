import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-foreground hover:opacity-80"
        >
          Arthur Toppenberg
        </Link>
        <div className="flex items-center gap-4">
          <Link
            href="/about"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
