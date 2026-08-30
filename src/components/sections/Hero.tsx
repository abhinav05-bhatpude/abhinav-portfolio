import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/layout/Container";

export function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-[calc(100vh-4rem)] items-center py-20"
    >
      <Container>
        <div className="max-w-4xl">
          <p className="text-label text-[var(--accent)]">
            ABHINAV BHATPUDE
          </p>

          <h1 className="text-display mt-4 text-[var(--text-primary)]">
            Full-Stack Developer building modern web and AI-powered products.
          </h1>

          <p className="text-body-lg mt-6 max-w-2xl text-[var(--text-secondary)]">
            Computer Engineering student focused on building practical
            full-stack applications, exploring AI technologies, and preparing
            for software engineering internships.
          </p>

          <p className="mt-6 text-small font-medium text-[var(--accent)]">
            Currently open to internship opportunities.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="#projects">View Projects</Button>

            <Button
              href="https://github.com/abhinav05-bhatpude"
              variant="secondary"
            >
              GitHub
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}