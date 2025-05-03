import HomePage from "@/page/home";
import TranslatePage from "@/page/translate";
import AboutPage from "@/page/about";

export const routes = [
  {
    href: "/",
    label: "Início",
    component: HomePage,
  },
  {
    href: "/translate",
    label: "Traduzir Documento",
    component: TranslatePage,
  },
  {
    href: "/about",
    label: "Sobre nós",
    component: AboutPage,
  },
];
