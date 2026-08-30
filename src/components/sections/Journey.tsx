import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section } from "@/components/ui/layout/Section";

const journeyItems = [
  {
    period: "Starting Point",
    title: "Learning the foundations",
    description:
      "Started building programming fundamentals and exploring how software works.",
  },
  {
    period: "Current Focus",
    title: "Full-stack development and AI",
    description:
      "Building modern web applications while exploring AI technologies and practical AI-powered products.",
  },
  {
    period: "Next Goal",
    title: "Software engineering internship",
    description:
      "Focused on gaining real-world experience, contributing to products, and growing as a software engineer.",
  },
];

export function Journey() {
  return (
    <Section id="journey">
      <SectionHeading
        eyebrow="My Journey"
        title="Learning by building."
        description="A focused journey from programming fundamentals to building practical full-stack and AI-powered applications."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {journeyItems.map((item) => (
          <article
            key={item.period}
            className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-6"
          >
            <p className="text-label text-[var(--accent)]">
              {item.period}
            </p>

            <h3 className="text-subheading mt-4 text-[var(--text-primary)]">
              {item.title}
            </h3>

            <p className="text-body mt-4 text-[var(--text-secondary)]">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}