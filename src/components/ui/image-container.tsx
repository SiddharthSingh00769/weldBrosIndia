import Image, { type ImageProps } from "next/image";
import { cn } from "@/lib/utils";

interface ImageContainerProps extends Omit<ImageProps, "fill"> {
  className?: string;
  containerClassName?: string;
  fill?: boolean;
}

export function ImageContainer({
  className,
  containerClassName,
  fill = true,
  ...props
}: ImageContainerProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-md",
        containerClassName,
      )}
    >
      <Image
        fill={fill}
        className={cn(
          "object-cover transition-transform duration-700 ease-out",
          className,
        )}
        {...props}
      />
    </div>
  );
}