import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section } from "@/components/ui/layout/Section";

export function About() {
  return (
    <Section id="about">
      <SectionHeading
        eyebrow="About Me"
        title="Building practical software and learning by creating."
        description="I focus on turning ideas into real applications while continuously improving my skills in full-stack development and artificial intelligence."
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.4fr_0.8fr] lg:items-start">
        <div className="space-y-5 text-body leading-7 text-[var(--text-secondary)]">
          <p>
            I&apos;m Abhinav Bhatpude, a Computer Engineering student focused
            on becoming a stronger full-stack software engineer by building
            real-world projects.
          </p>

          <p>
            My approach to learning is simple: understand the fundamentals,
            build practical applications, encounter real problems, and improve
            through iteration. I&apos;m particularly interested in modern web
            development, backend systems, databases, and AI-powered products.
          </p>

          <p>
            Through projects such as Startup Lens AI, Recall AI, and SkillMatch
            AI, I&apos;ve been exploring how different technologies work
            together to turn an idea into a complete product.
          </p>

          <p>
            I&apos;m currently focused on applying for software engineering
            internships where I can contribute, learn from experienced
            developers, and gain real-world engineering experience.
          </p>
        </div>

        <aside className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-6">
          <p className="text-label text-[var(--accent)]">
            CURRENT FOCUS
          </p>

          <div className="mt-5 space-y-5">
            <div>
              <p className="font-medium text-[var(--text-primary)]">
                Full-Stack Development
              </p>

              <p className="mt-1 text-small text-[var(--text-secondary)]">
                Building complete applications across frontend, backend, and
                databases.
              </p>
            </div>

            <div>
              <p className="font-medium text-[var(--text-primary)]">
                AI-Powered Products
              </p>

              <p className="mt-1 text-small text-[var(--text-secondary)]">
                Exploring practical ways to integrate AI into useful software
                products.
              </p>
            </div>

            <div>
              <p className="font-medium text-[var(--text-primary)]">
                Internship Opportunities
              </p>

              <p className="mt-1 text-small text-[var(--text-secondary)]">
                Seeking opportunities to gain professional software engineering
                experience.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </Section>
  );
}