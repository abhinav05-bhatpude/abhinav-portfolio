import { Navbar } from "@/components/layout/Navbar";
import { Container } from "@/components/ui/layout/Container";
import { Section } from "@/components/ui/layout/Section";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section
          id="hero"
          className="flex min-h-[calc(100vh-4rem)] items-center py-20"
        >
          <Container>
            <div>
              <p className="text-label text-[var(--accent)]">
                Full-Stack Developer · AI Developer
              </p>

              <h1 className="text-display mt-4 max-w-4xl text-[var(--text-primary)]">
                Building full-stack and AI-powered products.
              </h1>

              <p className="text-body-lg mt-6 max-w-2xl text-[var(--text-secondary)]">
                I&apos;m Abhinav, a Computer Engineering student focused on
                building practical software with modern web technologies and
                artificial intelligence.
              </p>
            </div>
          </Container>
        </section>

        {/* About */}
        <Section id="about">
          <div className="h-40" />
        </Section>

        {/* Skills */}
        <Section id="skills">
          <div className="h-40" />
        </Section>

        {/* Projects */}
        <Section id="projects">
          <div className="h-40" />
        </Section>

        {/* Journey */}
        <Section id="journey">
          <div className="h-40" />
        </Section>

        {/* Contact */}
        <Section id="contact">
          <div className="h-40" />
        </Section>
      </main>
    </>
  );
}