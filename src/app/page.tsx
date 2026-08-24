import { Navbar } from "@/components/layout/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <section
          id="hero"
          className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl items-center px-6 py-20"
        >
          <div className="w-full">
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
        </section>

        <section id="about" className="border-t border-[var(--border)]">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <div className="h-40" />
          </div>
        </section>

        <section id="skills" className="border-t border-[var(--border)]">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <div className="h-40" />
          </div>
        </section>

        <section id="projects" className="border-t border-[var(--border)]">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <div className="h-40" />
          </div>
        </section>

        <section id="journey" className="border-t border-[var(--border)]">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <div className="h-40" />
          </div>
        </section>

        <section id="contact" className="border-t border-[var(--border)]">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <div className="h-40" />
          </div>
        </section>
      </main>
    </>
  );
}