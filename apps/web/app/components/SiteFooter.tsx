export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-6 text-sm text-muted-foreground">
        <span>&copy; {new Date().getFullYear()} Arthur Toppenberg</span>
      </div>
    </footer>
  );
}
