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
              href="mailto:abhinav.bhatpude.work@gmail.com"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-[var(--accent)] px-5 py-2.5 text-sm font-medium text-[var(--accent)] transition-all duration-200 hover:-translate-y-0.5 hover:opacity-80"
            >
              Get in Touch
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-[var(--border)] pt-6">
            <a
              href="mailto:abhinav.bhatpude.work@gmail.com"
              className="text-small text-[var(--text-secondary)] transition-colors hover:text-[var(--accent)]"
            >
              abhinav.bhatpude.work@gmail.com
            </a>

            <a
              href="https://www.linkedin.com/in/abhinav-bhatpude-03b832327"
              target="_blank"
              rel="noopener noreferrer"
              className="text-small text-[var(--text-secondary)] transition-colors hover:text-[var(--accent)]"
            >
              LinkedIn ↗
            </a>

            <a
              href="https://github.com/abhinav05-bhatpude"
              target="_blank"
              rel="noopener noreferrer"
              className="text-small text-[var(--text-secondary)] transition-colors hover:text-[var(--accent)]"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}