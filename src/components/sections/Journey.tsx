import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section } from "@/components/ui/layout/Section";

const journey = [
  {
    stage: "01",
    title: "Started Learning Programming",
    description:
      "Built a foundation in programming and computer science while developing problem-solving skills.",
  },
  {
    stage: "02",
    title: "Computer Engineering",
    description:
      "Currently pursuing a Diploma in Computer Engineering while strengthening my foundation in programming, software development, databases, and computer science.",
  },
  {
    stage: "03",
    title: "Explored Web Development",
    description:
      "Learned modern frontend technologies and started building responsive web interfaces and practical projects.",
  },
  {
    stage: "04",
    title: "Moved Into Full-Stack Development",
    description:
      "Expanded into backend development, APIs, databases, authentication, and complete application development.",
  },
  {
    stage: "05",
    title: "Building AI-Powered Products",
    description:
      "Started integrating artificial intelligence into practical applications while exploring modern AI development workflows.",
  },
  {
    stage: "06",
    title: "Applying for Internships",
    description:
      "Currently focused on building stronger projects, improving engineering skills, and gaining real-world software development experience.",
  },
];

export function Journey() {
  return (
    <Section id="journey">
      <SectionHeading
        eyebrow="My Journey"
        title="Learning, building, and moving forward."
        description="A snapshot of my progression from learning programming fundamentals to building full-stack and AI-powered applications."
      />

      <div className="mt-12 max-w-4xl">
        <div className="space-y-0">
          {journey.map((item, index) => (
            <div
              key={item.stage}
              className="grid grid-cols-[auto_1fr] gap-5 sm:gap-8"
            >
              <div className="flex flex-col items-center">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--accent)] text-sm font-semibold text-[var(--accent)]">
                  {item.stage}
                </div>

                {index !== journey.length - 1 && (
                  <div className="min-h-16 w-px flex-1 bg-[var(--border)]" />
                )}
              </div>

              <div className="pb-10">
                <h3 className="text-subheading text-[var(--text-primary)]">
                  {item.title}
                </h3>

                <p className="text-body mt-3 leading-7 text-[var(--text-secondary)]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}