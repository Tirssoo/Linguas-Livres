/** Menu de navegação
 *
 * Menu de navegação onde ficará os links para as páginas do site.
 */

import { Link } from "./link";
import { routes } from "@/lib/routes";

export function Nav() {
  return (
    <nav className="flex items-center justify-center gap-10 pl-10">
      {routes.map((route) => (
        <Link href={route.href}>{route.label}</Link>
      ))}
    </nav>
  );
}
