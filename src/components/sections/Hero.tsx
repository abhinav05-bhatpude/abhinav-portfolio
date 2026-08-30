import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/layout/Container";

export function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-[calc(100vh-4rem)] items-center py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <div className="max-w-4xl transition-transform duration-300">
          <p className="text-label text-[var(--accent)]">
            ABHINAV BHATPUDE
          </p>

          <h1 className="text-display mt-4 max-w-4xl text-[var(--text-primary)]">
            Full-Stack Developer building modern web and AI-powered products.
          </h1>

          <p className="text-body-lg mt-5 max-w-2xl text-[var(--text-secondary)] sm:mt-6">
            Computer Engineering student focused on building practical
            full-stack applications, exploring AI technologies, and preparing
            for software engineering internships.
          </p>

          <p className="mt-5 text-small font-medium text-[var(--accent)] sm:mt-6">
            Currently open to internship opportunities.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4">
            <Button href="#projects" className="w-full sm:w-auto">
              View Projects
            </Button>

            <Button
              href="https://github.com/abhinav05-bhatpude"
              variant="secondary"
              className="w-full sm:w-auto"
            >
              GitHub
            </Button>
          </div>

          <div className="mt-7 text-small text-[var(--text-secondary)] sm:mt-8">
            <a
              href="https://www.linkedin.com/in/abhinav-bhatpude-03b832327"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm transition-colors duration-200 hover:text-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            >
              Connect with me on LinkedIn
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}