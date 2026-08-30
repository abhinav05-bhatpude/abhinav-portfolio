import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/layout/Section";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <Section id="about">
          <div className="h-40" />
        </Section>

        <Section id="skills">
          <div className="h-40" />
        </Section>

        <Section id="projects">
          <div className="h-40" />
        </Section>

        <Section id="journey">
          <div className="h-40" />
        </Section>

        <Section id="contact">
          <div className="h-40" />
        </Section>
      </main>
    </>
  );
}