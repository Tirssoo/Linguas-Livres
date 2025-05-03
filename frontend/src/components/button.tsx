import { cn } from "@/lib/utils";

export function ButtonEnvio({ className }: { className?: string }) {
  return (
    <button
      className={cn("bg-green-400 text-white px-4 py-2 rounded-md", className)}
    >
      Enviar
    </button>
  );
}
