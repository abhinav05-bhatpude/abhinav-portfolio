import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[var(--background)]">
        <section className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl flex-col items-center justify-center gap-10 px-6 py-20">
          <SectionHeading
            eyebrow="Portfolio"
            title="Building useful software with modern technology."
            description="A developer portfolio focused on full-stack engineering and AI-powered applications."
            align="center"
          />

          <div className="flex flex-wrap justify-center gap-4">
            <Button>Primary Action</Button>

            <Button variant="secondary">Secondary Action</Button>

            <Button variant="ghost">Ghost Action</Button>

            <Button href="https://github.com/abhinav05-bhatpude">
              GitHub
            </Button>
          </div>
        </section>
      </main>
    </>
  );
}