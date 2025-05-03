import { ButtonEnvio } from "./button";
import { Link } from "./link";

export function Hero() {
  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Linguas Livres</h1>
      <ButtonEnvio />
      <Link
        href="https://www.google.com"
        className="text-purple-500 hover:text-purple-700"
      >
        Google
      </Link>
      <Link
        href="https://www.facebook.com"
        className="text-blue-500 hover:text-blue-700"
      >
        Facebook
      </Link>
    </section>
  );
}
