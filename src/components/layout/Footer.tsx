import Link from "next/link";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-8 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <Link
            href="#hero"
            className="font-semibold text-[var(--text-primary)] transition-colors hover:text-[var(--accent)]"
          >
            Abhinav Bhatpude
          </Link>

          <p className="mt-2 text-small text-[var(--text-secondary)]">
            Full-Stack Developer · AI Developer
          </p>
        </div>

        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap gap-x-5 gap-y-2"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-small text-[var(--text-secondary)] transition-colors hover:text-[var(--accent)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex gap-4">
          <a
            href="https://github.com/abhinav05-bhatpude"
            target="_blank"
            rel="noopener noreferrer"
            className="text-small text-[var(--text-secondary)] transition-colors hover:text-[var(--accent)]"
          >
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com/in/abhinav-bhatpude-03b832327"
            target="_blank"
            rel="noopener noreferrer"
            className="text-small text-[var(--text-secondary)] transition-colors hover:text-[var(--accent)]"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>

      <div className="border-t border-[var(--border)]">
        <div className="mx-auto max-w-6xl px-6 py-4 sm:px-8">
          <p className="text-xs text-[var(--text-secondary)]">
            © {new Date().getFullYear()} Abhinav Bhatpude. Built with Next.js.
          </p>
        </div>
      </div>
    </footer>
  );
}