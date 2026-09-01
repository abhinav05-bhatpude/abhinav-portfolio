import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section } from "@/components/ui/layout/Section";

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        eyebrow="Technical Skills"
        title="Technologies I use to build products."
        description="My technical toolkit spans frontend development, backend systems, databases, testing, authentication, developer tools, and AI integrations."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-6">
          <h3 className="text-subheading text-[var(--text-primary)]">
            Frontend
          </h3>

          <p className="text-body mt-4 text-[var(--text-secondary)]">
            Building responsive and modern user interfaces.
          </p>
        </div>

        <div className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-6">
          <h3 className="text-subheading text-[var(--text-primary)]">
            Backend & Databases
          </h3>

          <p className="text-body mt-4 text-[var(--text-secondary)]">
            Developing APIs, application logic, and database-driven systems.
          </p>
        </div>

        <div className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-6">
          <h3 className="text-subheading text-[var(--text-primary)]">
            AI & Tools
          </h3>

          <p className="text-body mt-4 text-[var(--text-secondary)]">
            Using AI APIs and modern developer tools to build practical
            applications.
          </p>
        </div>

        <div className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-6">
          <h3 className="text-subheading text-[var(--text-primary)]">
            Testing & Authentication
          </h3>

          <p className="text-body mt-4 text-[var(--text-secondary)]">
            Building more reliable applications with testing and secure
            authentication.
          </p>
        </div>
      </div>
    </Section>
  );
}