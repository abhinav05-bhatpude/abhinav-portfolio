import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section } from "@/components/ui/layout/Section";

export function Contact() {
  return (
    <Section id="contact">
      <div className="max-w-4xl">
        <SectionHeading
          eyebrow="Contact"
          title="Looking for an opportunity to build and learn."
          description="I&apos;m currently open to software engineering internship opportunities where I can contribute to real products and grow through practical engineering experience."
        />

        <div className="mt-10 rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-label text-[var(--accent)]">
                OPEN TO INTERNSHIPS
              </p>

              <h3 className="text-subheading mt-4 text-[var(--text-primary)]">
                Have an opportunity or interesting project?
              </h3>

              <p className="text-body mt-4 leading-7 text-[var(--text-secondary)]">
                I&apos;d be happy to connect, discuss an opportunity, or
                explore how I can contribute to your team.
              </p>
            </div>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=abhinav.bhatpude.work@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-[var(--accent)] px-5 py-2.5 text-sm font-medium text-[var(--accent)] transition-all duration-200 hover:-translate-y-0.5 hover:opacity-80"
            >
              Get in Touch
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-[var(--border)] pt-6">
            {/* Gmail */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=abhinav.bhatpude.work@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Send Abhinav an email"
              title="Email Abhinav"
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-secondary)] transition-all duration-200 hover:-translate-y-1 hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 5.5h18v13H3z"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinejoin="round"
                />
                <path
                  d="m3.5 6 8.5 7 8.5-7"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/abhinav05-bhatpude"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abhinav on GitHub"
              title="GitHub"
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-secondary)] transition-all duration-200 hover:-translate-y-1 hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.38 7.86 10.9.58.1.79-.25.79-.55v-2.13c-3.2.7-3.88-1.36-3.88-1.36-.53-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.73.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.4-5.25 5.68.41.35.78 1.03.78 2.08v3.08c0 .3.21.66.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/abhinav-bhatpude-03b832327"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abhinav on LinkedIn"
              title="LinkedIn"
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-secondary)] transition-all duration-200 hover:-translate-y-1 hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM2.75 9.75h4.45V21H2.75V9.75ZM9.5 9.75h4.27v1.54h.06c.59-1.11 2.04-2.28 4.2-2.28 4.49 0 5.32 2.96 5.32 6.81V21h-4.45v-4.59c0-1.1-.02-2.52-1.54-2.52-1.52 0-1.76 1.2-1.76 2.44V21H11.15V9.75H9.5Z" />
              </svg>
            </a>

            <span className="ml-2 text-small text-[var(--text-secondary)]">
              Let&apos;s connect
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
}