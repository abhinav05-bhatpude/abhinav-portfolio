import { Navbar } from "@/components/layout/Navbar";
import { Container } from "@/components/ui/layout/Container";
import { Section } from "@/components/ui/layout/Section";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <section
          id="hero"
          className="flex min-h-[calc(100vh-4rem)] items-center py-20"
        >
          <Container>
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
                Full-Stack Developer · AI Developer
              </p>

              <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-6xl">
                Building full-stack and AI-powered products.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--text-secondary)] sm:text-lg">
                I&apos;m Abhinav, a Computer Engineering student focused on
                building practical software with modern web technologies and
                artificial intelligence.
              </p>
            </div>
          </Container>
        </section>

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