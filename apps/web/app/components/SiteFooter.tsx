const RELEASES_URL =
  "https://github.com/ArthurToppenberg/personalWebsite/releases";

export function SiteFooter() {
  const version = process.env.NEXT_PUBLIC_APP_VERSION ?? "dev";

  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-6 text-sm text-muted-foreground">
        <span>&copy; {new Date().getFullYear()} Arthur Toppenberg</span>
        <a
          href={RELEASES_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-foreground"
        >
          v{version}
        </a>
      </div>
    </footer>
  );
}
