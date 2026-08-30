import { Navbar } from "@/components/layout/Navbar";
import { About } from "@/components/sections/About";
import { Hero } from "@/components/sections/Hero";
import { Journey } from "@/components/sections/Journey";
import { Section } from "@/components/ui/layout/Section";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <About />

        <Section id="skills">
          <div className="h-40" />
        </Section>

        <Section id="projects">
          <div className="h-40" />
        </Section>

        <Journey />

        <Section id="contact">
          <div className="h-40" />
        </Section>
      </main>
    </>
  );
}