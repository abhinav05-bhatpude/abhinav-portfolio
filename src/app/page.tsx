import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] p-6">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center gap-10">
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
      </div>
    </main>
  );
}