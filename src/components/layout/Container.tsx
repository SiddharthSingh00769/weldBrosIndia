import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({
  children,
  className,
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-10 xl:px-12",
        className,
      )}
    >
      {children}
    </div>
  );
}