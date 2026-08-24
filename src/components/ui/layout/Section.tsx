import type { ReactNode } from "react";
import { Container } from "./Container";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  bordered?: boolean;
}

export function Section({
  children,
  id,
  className = "",
  bordered = true,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`${bordered ? "border-t border-[var(--border)]" : ""} ${className}`}
    >
      <Container>
        <div className="py-20 sm:py-24 lg:py-28">{children}</div>
      </Container>
    </section>
  );
}