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

          <a
            href="mailto:your-email@example.com"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--accent)] transition-opacity hover:opacity-80"
          >
            Send me an email
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </Section>
  );
}