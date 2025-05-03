import logo from "@/assets/images/logo.png";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className="flex items-center justify-center overflow-hidden h-10">
      <img src={logo} alt="Linguas Livres" className={cn("size-20", className)} />
    </div>
  );
}
