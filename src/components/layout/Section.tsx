import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "large" | "compact";
}

export function Section({
  children,
  className,
  size = "default",
}: SectionProps) {
  const spacing = {
    compact: "py-16 md:py-20",
    default: "py-24 md:py-32",
    large: "py-28 md:py-40",
  };

  return (
    <section className={cn(spacing[size], className)}>
      {children}
    </section>
  );
}