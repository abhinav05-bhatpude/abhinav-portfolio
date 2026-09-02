import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section } from "@/components/ui/layout/Section";

const projects = [
  {
    number: "PROJECT 01",
    name: "Startup Lens AI",
    description:
      "An AI-powered platform that analyzes startup ideas and generates feasibility reports, SWOT analysis, monetization strategies, and execution roadmaps.",
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Gemini AI",
    ],
    githubUrl: "https://github.com/abhinav05-bhatpude/startup-lens-ai",
  },
  {
    number: "PROJECT 02",
    name: "Recall AI",
    description:
      "A full-stack application designed to help users organize and manage information through a modern, database-driven platform.",
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Auth.js",
    ],
    githubUrl: "https://github.com/abhinav05-bhatpude/recall-ai",
  },
  {
    number: "PROJECT 03",
    name: "SkillMatch AI",
    description:
      "An AI-powered internship discovery platform that analyzes resumes, identifies skill gaps, matches users with relevant opportunities, and helps track applications.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "GraphQL",
      "AI",
    ],
    githubUrl: "https://github.com/abhinav05-bhatpude",
  },
];

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Featured Projects"
        title="Projects built to solve practical problems."
        description="A selection of full-stack and AI-powered applications I have built while developing my software engineering skills."
      />

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.name}
            className="group flex min-h-[360px] flex-col rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[var(--accent)] hover:shadow-lg"
          >
            <div className="flex items-center justify-between">
              <p className="text-label text-[var(--accent)]">
                {project.number}
              </p>

              <span className="text-sm text-[var(--text-secondary)] transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </div>

            <h3 className="text-subheading mt-5 text-[var(--text-primary)]">
              {project.name}
            </h3>

            <p className="text-body mt-4 leading-7 text-[var(--text-secondary)]">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-[var(--border)] px-3 py-1 text-small text-[var(--text-secondary)] transition-colors duration-200 group-hover:border-[var(--accent)]"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-auto pt-8">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-small font-medium text-[var(--accent)] transition-all duration-200 hover:gap-3"
              >
                View on GitHub
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}