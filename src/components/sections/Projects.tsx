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
    githubUrl: "https://github.com/abhinav05-bhatpude/skillmatch-ai",
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

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.name}
            className="flex min-h-[320px] flex-col rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-6"
          >
            <p className="text-label text-[var(--accent)]">
              {project.number}
            </p>

            <h3 className="text-subheading mt-4 text-[var(--text-primary)]">
              {project.name}
            </h3>

            <p className="text-body mt-4 text-[var(--text-secondary)]">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-[var(--border)] px-3 py-1 text-small text-[var(--text-secondary)]"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-auto pt-6">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-small font-medium text-[var(--accent)] transition-opacity hover:opacity-80"
              >
                View on GitHub →
              </a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}