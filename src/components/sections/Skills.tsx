import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section } from "@/components/ui/layout/Section";

const frontendSkills = [
  "HTML5",
  "CSS3",
  "JavaScript (ES6+)",
  "TypeScript",
  "React.js",
  "Next.js",
  "Tailwind CSS",
];

const backendSkills = [
  "Node.js",
  "Express.js",
  "REST APIs",
  "MongoDB",
  "PostgreSQL",
  "Prisma ORM",
  "SQL",
];

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        eyebrow="Technical Skills"
        title="Technologies I use to build products."
        description="My technical toolkit spans frontend development, backend systems, databases, testing, authentication, developer tools, and AI integrations."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {/* Frontend */}
        <div className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-6">
          <h3 className="text-subheading text-[var(--text-primary)]">
            Frontend
          </h3>

          <p className="text-body mt-4 text-[var(--text-secondary)]">
            Building responsive and modern user interfaces.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {frontendSkills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-[var(--border)] px-3 py-1.5 text-small text-[var(--text-secondary)]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Backend & Databases */}
        <div className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-6">
          <h3 className="text-subheading text-[var(--text-primary)]">
            Backend & Databases
          </h3>

          <p className="text-body mt-4 text-[var(--text-secondary)]">
            Developing APIs, application logic, and database-driven systems.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {backendSkills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-[var(--border)] px-3 py-1.5 text-small text-[var(--text-secondary)]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* AI & Tools */}
        <div className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-6">
          <h3 className="text-subheading text-[var(--text-primary)]">
            AI & Tools
          </h3>

          <p className="text-body mt-4 text-[var(--text-secondary)]">
            Using AI APIs and modern developer tools to build practical
            applications.
          </p>
        </div>

        {/* Testing & Authentication */}
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