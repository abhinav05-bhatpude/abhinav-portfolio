import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section } from "@/components/ui/layout/Section";

export function Contact() {
  return (
    <Section id="contact">
      <div className="max-w-3xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let&apos;s build something great."
          description="I&apos;m currently open to software engineering internship opportunities and conversations about interesting projects."
        />

        <div className="mt-10 rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8">
          <p className="text-body leading-7 text-[var(--text-secondary)]">
            If you&apos;re looking for an intern, collaborating on a project,
            or simply want to connect, feel free to reach out.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:abhinav.bhatpude.work@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--accent)] px-5 py-2.5 text-sm font-medium text-[var(--accent)] transition-all duration-200 hover:-translate-y-0.5 hover:opacity-80"
            >
              Email Me
              <span aria-hidden="true">→</span>
            </a>

            <a
              href="https://www.linkedin.com/in/abhinav-bhatpude-03b832327"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-5 py-2.5 text-sm font-medium text-[var(--text-primary)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--accent)]"
            >
              LinkedIn
              <span aria-hidden="true">↗</span>
            </a>

            <a
              href="https://github.com/abhinav05-bhatpude"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-5 py-2.5 text-sm font-medium text-[var(--text-primary)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--accent)]"
            >
              GitHub
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}