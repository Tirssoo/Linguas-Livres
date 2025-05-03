/** Cabeçalho do site
 *
 * Header onde ficara o logo e o menu de navegação.
 */

import { Link } from "./link";
import { Logo } from "./logo";
import { Nav } from "./nav";

export function Header() {
  return (
    <header className="flex items-center gap-4 px-4 py-2 bg-muted">
      <Link href="/" external>
        <Logo />
      </Link>
      <div className="flex items-center gap-4 text-[#F24242]">
        <Nav />
      </div>
    </header>
  );
}
