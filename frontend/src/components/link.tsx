import { cn } from "@/lib/utils";

export function Link({
  className,
  href,
  text,
}: {
  className?: string;
  href: string;
  text: string;
}) { 
  return (
    <a
      href={href}
      className={cn("text-red-500 hover:text-red-700 font-semibold", className)}
    >
      {text}
    </a>
  );
}
