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

      <div className="mt-10 max-w-3xl space-y-5 text-body text-[var(--text-secondary)]">
        <p>
          I&apos;m Abhinav Bhatpude, a Computer Engineering student and
          aspiring software engineer focused on full-stack development and
          AI-powered applications.
        </p>

        <p>
          I enjoy building projects that solve practical problems and help me
          learn how modern software is designed, developed, and deployed.
        </p>

        <p>
          My current goal is to gain real-world experience through software
          engineering internships while continuing to build stronger projects.
        </p>
      </div>
    </Section>
  );
}