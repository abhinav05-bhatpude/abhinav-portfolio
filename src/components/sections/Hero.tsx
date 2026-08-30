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
            FULL-STACK DEVELOPER · AI DEVELOPER
          </p>

          <h1 className="text-display mt-4 text-[var(--text-primary)]">
            Building full-stack and AI-powered products.
          </h1>

          <p className="text-body-lg mt-6 max-w-2xl text-[var(--text-secondary)]">
            I&apos;m Abhinav, a Computer Engineering student building modern
            web applications and practical AI-powered products.
          </p>
        </div>
      </Container>
    </section>
  );
}