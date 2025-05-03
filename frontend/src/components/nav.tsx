/** Menu de navegação
 *
 * Menu de navegação onde ficará os links para as páginas do site.
 */

import { Link } from "./link";

export function Nav() {
  return (
    <nav className="flex items-center justify-center gap-2">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}
