/** Menu de navegação
 *
 * Menu de navegação onde ficará os links para as páginas do site.
 */

import { routes } from "@/lib/routes";
import { Link } from "./link";

export function Nav() {
  return (
    <nav className="flex items-center justify-center gap-10 pl-10 font-display">
      {routes.map((route) => (
        <Link href={route.href} key={route.href} className="uppercase">
          {route.label}
        </Link>
      ))}
    </nav>
  );
}
