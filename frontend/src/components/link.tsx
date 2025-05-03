import { cn } from "@/lib/utils";
import { Link as ExternalLink, NavLink } from "react-router";

export function Link({
  className,
  href,
  children,
  external = false,
}: {
  className?: string;
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  if (external) {
    return (
      <ExternalLink
        to={href}
        className={cn("text-primary hover:text-primary/80 rounded-sm px-2 py-0.5 font-bold", className)}
      >
        {children}
      </ExternalLink>
    );
  }

  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        cn(
          "text-primary hover:text-primary/80 font-display rounded-sm px-2 py-0.5 font-bold",
          isActive && "bg-active",
          className,
        )
      }
    >
      {children}
    </NavLink>
  );
}
