import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/i18n";

export default function Header() {
  const { t, toggle, lang } = useI18n();
  const navItems = [
    { to: "/", label: t("nav.home") },
    { to: "/ideas", label: t("nav.ideas") },
    { to: "/products", label: t("nav.products") },
    { to: "/models", label: t("nav.models") },
    { to: "/decor", label: t("nav.decor") },
    { to: "/games", label: t("nav.games") },
    { to: "/innovations", label: t("nav.innovations") },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F06b82dab13a04529b9d98468616812dd%2Fa7b380ab9d564dd9bb5bac11262f3e22?format=webp&width=200"
            alt="P3D Logo"
            className="h-9 w-auto rounded"
            loading="eager"
            decoding="async"
          />
          <span className="sr-only">P3D</span>
        </Link>
        <nav className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            onClick={toggle}
            aria-label="toggle language"
          >
            {lang === "ar" ? "EN" : "عربي"}
          </Button>
          <Button asChild>
            <a
              href="https://wa.me/201008315459"
              target="_blank"
              rel="noreferrer"
            >
              {t("cta.order")}
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
