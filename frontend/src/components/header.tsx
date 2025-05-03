/** Cabeçalho do site
 *
 * Header onde ficara o logo e o menu de navegação.
 */

import { Link } from "./link";
import { Nav } from "./nav";

import logo from "@/assets/logo.png";

export function Header() {
  return (
    <header className="flex items-center justify-between">
      <Link href="/">
        <img src={logo} alt="Linguas Livres" className="w-10 h-10" />
      </Link>
      <Nav />
    </header>
  );
}
