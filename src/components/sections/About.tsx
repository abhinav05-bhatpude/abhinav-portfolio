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
            I&apos;m Abhinav Bhatpude, a Computer Engineering student and
            aspiring software engineer focused on full-stack development and
            AI-powered applications.
          </p>

          <p>
            I enjoy building projects that solve practical problems and help me
            understand how modern software is designed, developed, and deployed.
          </p>

          <p>
            My current focus is gaining real-world experience through software
            engineering internships while continuing to build stronger
            full-stack and AI-powered projects.
          </p>
        </div>

        <aside className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-6">
          <p className="text-label text-[var(--accent)]">
            CURRENT FOCUS
          </p>

          <div className="mt-5 space-y-4">
            <div>
              <p className="font-medium text-[var(--text-primary)]">
                Full-Stack Development
              </p>

              <p className="mt-1 text-small text-[var(--text-secondary)]">
                Building modern web applications from frontend to backend.
              </p>
            </div>

            <div>
              <p className="font-medium text-[var(--text-primary)]">
                AI-Powered Products
              </p>

              <p className="mt-1 text-small text-[var(--text-secondary)]">
                Exploring practical AI integrations and intelligent
                applications.
              </p>
            </div>

            <div>
              <p className="font-medium text-[var(--text-primary)]">
                Software Engineering Internships
              </p>

              <p className="mt-1 text-small text-[var(--text-secondary)]">
                Applying my skills and gaining real-world development
                experience.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </Section>
  );
}