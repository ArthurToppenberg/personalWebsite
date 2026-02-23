"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";

const NAV_LINKS = [
  { href: "/", label: "Arthur Toppenberg", isBrand: true },
  { href: "/about", label: "About", isBrand: false },
  { href: "/projects", label: "Projects", isBrand: false },
  { href: "/contact", label: "Contact", isBrand: false },
] as const;

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <motion.header
      className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-sm"
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className={`text-sm font-semibold tracking-tight transition-opacity hover:opacity-80 ${
            pathname === "/" ? "text-foreground" : "text-muted-foreground"
          }`}
        >
          Arthur Toppenberg
        </Link>
        <div className="flex items-center gap-4">
          {NAV_LINKS.filter((link) => !link.isBrand).map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm transition-colors hover:text-foreground ${
                  isActive
                    ? "font-medium text-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-foreground"
                    layoutId="nav-underline"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    aria-hidden
                  />
                )}
              </Link>
            );
          })}
          <ThemeToggle />
        </div>
      </nav>
    </motion.header>
  );
}
