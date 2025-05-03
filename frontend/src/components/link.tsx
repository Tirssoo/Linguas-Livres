import { cn } from "@/lib/utils";
import { NavLink } from "react-router";

export function Link({
  className,
  href,
  children,
}: {
  className?: string;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <NavLink
      to={href}
      className={cn("text-red-500 hover:text-red-700 font-semibold", className)}
    >
      {children}
    </NavLink>
  );
}
