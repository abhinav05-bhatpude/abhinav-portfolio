import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section } from "@/components/ui/layout/Section";

const frontendSkills = [
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
];

const backendSkills = [
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "Prisma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
  },
];

const aiAndToolsSkills = [
  {
    name: "Google Gemini",
    icon: "https://cdn.simpleicons.org/googlegemini",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "Vercel",
    icon: "https://cdn.simpleicons.org/vercel",
  },
  {
    name: "VS Code",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
];

const testingAndAuthSkills = [
  {
    name: "Jest",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
  },
  {
    name: "Auth.js",
    icon: "https://cdn.simpleicons.org/auth0",
  },
];

function SkillGrid({
  skills,
}: {
  skills: { name: string; icon: string }[];
}) {
  return (
    <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
      {skills.map((skill) => (
        <div
          key={skill.name}
          className="flex flex-col items-center justify-center gap-3 rounded-[var(--radius-md)] border border-[var(--border)] p-4 transition-transform duration-200 hover:-translate-y-1"
        >
          <img
            src={skill.icon}
            alt={`${skill.name} logo`}
            className="h-10 w-10"
          />

          <span className="text-small text-center text-[var(--text-secondary)]">
            {skill.name}
          </span>
        </div>
      ))}
    </div>
  );
}

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

          <SkillGrid skills={frontendSkills} />
        </div>

        <div className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-6">
          <h3 className="text-subheading text-[var(--text-primary)]">
            Backend & Databases
          </h3>

          <p className="text-body mt-4 text-[var(--text-secondary)]">
            Developing APIs, application logic, and database-driven systems.
          </p>

          <SkillGrid skills={backendSkills} />
        </div>

        <div className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-6">
          <h3 className="text-subheading text-[var(--text-primary)]">
            AI & Developer Tools
          </h3>

          <p className="text-body mt-4 text-[var(--text-secondary)]">
            Using AI technologies and modern tools to build practical
            applications.
          </p>

          <SkillGrid skills={aiAndToolsSkills} />
        </div>

        <div className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-6">
          <h3 className="text-subheading text-[var(--text-primary)]">
            Testing & Authentication
          </h3>

          <p className="text-body mt-4 text-[var(--text-secondary)]">
            Building reliable applications with testing and authentication.
          </p>

          <SkillGrid skills={testingAndAuthSkills} />
        </div>
      </div>
    </Section>
  );
}