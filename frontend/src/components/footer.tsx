import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="bg-muted relative flex items-center justify-center p-4">
      <Logo className="absolute left-4 size-18" />
      <p className="text-primary text-sm font-semibold">&copy; {new Date().getFullYear()} Línguas Livres</p>
    </footer>
  );
}
