import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section } from "@/components/ui/layout/Section";

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Featured Projects"
        title="Projects built to solve practical problems."
        description="A selection of full-stack and AI-powered applications I have built while developing my software engineering skills."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        <div className="min-h-[280px] rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-6">
          <p className="text-label text-[var(--accent)]">
            PROJECT 01
          </p>

          <h3 className="text-subheading mt-4 text-[var(--text-primary)]">
            Featured Project
          </h3>

          <p className="text-body mt-4 text-[var(--text-secondary)]">
            Project details and technologies will be added here.
          </p>
        </div>

        <div className="min-h-[280px] rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-6">
          <p className="text-label text-[var(--accent)]">
            PROJECT 02
          </p>

          <h3 className="text-subheading mt-4 text-[var(--text-primary)]">
            Featured Project
          </h3>

          <p className="text-body mt-4 text-[var(--text-secondary)]">
            Project details and technologies will be added here.
          </p>
        </div>

        <div className="min-h-[280px] rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-6">
          <p className="text-label text-[var(--accent)]">
            PROJECT 03
          </p>

          <h3 className="text-subheading mt-4 text-[var(--text-primary)]">
            Featured Project
          </h3>

          <p className="text-body mt-4 text-[var(--text-secondary)]">
            Project details and technologies will be added here.
          </p>
        </div>
      </div>
    </Section>
  );
}