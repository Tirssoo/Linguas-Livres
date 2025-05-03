import { ButtonEnvio } from "./button";
import { Link } from "./link";

export function Hero() {
  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Linguas Livres</h1>
      <ButtonEnvio />
      <Link
        href="https://www.google.com"
        text="Google"
        className="text-purple-500 hover:text-purple-700"
      />
      <Link
        href="https://www.facebook.com"
        text="Facebook"
        className="text-blue-500 hover:text-blue-700"
      />
      
    </section>
  );
}
