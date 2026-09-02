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
        {/* Startup Lens AI */}
        <article className="min-h-[280px] rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-6">
          <p className="text-label text-[var(--accent)]">PROJECT 01</p>

          <h3 className="text-subheading mt-4 text-[var(--text-primary)]">
            Startup Lens AI
          </h3>

          <p className="text-body mt-4 text-[var(--text-secondary)]">
            An AI-powered platform that analyzes startup ideas and generates
            feasibility reports, SWOT analysis, monetization strategies, and
            execution roadmaps.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Gemini AI"].map(
              (tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-[var(--border)] px-3 py-1 text-small text-[var(--text-secondary)]"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </article>

        {/* Recall AI */}
        <article className="min-h-[280px] rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-6">
          <p className="text-label text-[var(--accent)]">PROJECT 02</p>

          <h3 className="text-subheading mt-4 text-[var(--text-primary)]">
            Recall AI
          </h3>

          <p className="text-body mt-4 text-[var(--text-secondary)]">
            A full-stack AI-powered application designed to help users organize
            and manage information through a modern, database-driven platform.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "Next.js",
              "TypeScript",
              "PostgreSQL",
              "Prisma",
              "Auth.js",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-[var(--border)] px-3 py-1 text-small text-[var(--text-secondary)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </article>

        {/* Placeholder */}
        <article className="min-h-[280px] rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-6">
          <p className="text-label text-[var(--accent)]">PROJECT 03</p>

          <h3 className="text-subheading mt-4 text-[var(--text-primary)]">
            Featured Project
          </h3>

          <p className="text-body mt-4 text-[var(--text-secondary)]">
            Project details and technologies will be added here.
          </p>
        </article>
      </div>
    </Section>
  );
}