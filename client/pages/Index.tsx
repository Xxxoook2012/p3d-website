import { Button } from "@/components/ui/button";
import { Sparkles, Shapes, Gamepad2, Lamp, Boxes } from "lucide-react";
import { Link } from "react-router-dom";
import { useI18n } from "@/i18n";

export default function Index() {
  const { t } = useI18n();
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 -z-10 bg-gradient-to-bl from-secondary/20 via-accent/20 to-background" />
        <div className="container py-16 md:py-24 grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
              <Sparkles className="size-4" />
              {t("hero.welcome")}
            </p>
            <h1 className="mt-5 text-5xl font-extrabold tracking-tight">
              P3D
              <span className="mx-2 text-primary">—</span>
              {t("hero.title")}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground leading-8">
              {t("hero.desc")}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a
                  href="https://wa.me/201008315459"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t("hero.btn.whatsapp")}
                </a>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link to="/ideas">{t("hero.btn.ideas")}</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border bg-gradient-to-tr from-primary/20 via-accent/20 to-transparent shadow-lg">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F06b82dab13a04529b9d98468616812dd%2Fa7b380ab9d564dd9bb5bac11262f3e22?format=webp&width=800"
                alt="P3D Logo"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="container py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold">{t("about.title")}</h2>
          <p className="mt-3 text-muted-foreground leading-8">
            {t("about.desc")}
          </p>
        </div>
      </section>

      {/* Ideas note */}
      <section className="border-y bg-accent/40">
        <div className="container py-10 text-center">
          <p className="text-sm text-muted-foreground">{t("ideas.note")}</p>
        </div>
      </section>

      {/* Categories */}
      <section className="container py-16">
        <h2 className="mb-8 text-2xl font-extrabold">
          {t("categories.title")}
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <CategoryCard
            icon={<Shapes className="size-6" />}
            title={t("categories.products.title")}
            to="/products"
            subtitle={t("categories.products.subtitle")}
          />
          <CategoryCard
            icon={<Boxes className="size-6" />}
            title={t("categories.models.title")}
            to="/models"
            subtitle={t("categories.models.subtitle")}
          />
          <CategoryCard
            icon={<Lamp className="size-6" />}
            title={t("categories.decor.title")}
            to="/decor"
            subtitle={t("categories.decor.subtitle")}
          />
          <CategoryCard
            icon={<Gamepad2 className="size-6" />}
            title={t("categories.games.title")}
            to="/games"
            subtitle={t("categories.games.subtitle")}
          />
          <CategoryCard
            icon={<Sparkles className="size-6" />}
            title={t("categories.innovations.title")}
            to="/innovations"
            subtitle={t("categories.innovations.subtitle")}
          />
          <CategoryCard
            icon={<Sparkles className="size-6" />}
            title={t("categories.ideas.title")}
            to="/ideas"
            subtitle={t("categories.ideas.subtitle")}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="relative border-t">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-secondary/20 via-accent/20 to-transparent" />
        <div className="container py-16 text-center">
          <h3 className="text-2xl font-extrabold">{t("cta2.title")}</h3>
          <p className="mt-2 text-muted-foreground">{t("cta2.desc")}</p>
          <Button asChild size="lg" className="mt-6">
            <a
              href="https://wa.me/201008315459"
              target="_blank"
              rel="noreferrer"
            >
              {t("cta2.btn")}
            </a>
          </Button>
        </div>
      </section>
    </main>
  );
}

function CategoryCard({
  icon,
  title,
  subtitle,
  to,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  to: string;
}) {
  return (
    <Link
      to={to}
      className="group block overflow-hidden rounded-2xl border bg-card p-6 shadow-sm transition hover:shadow-md"
    >
      <div className="mb-4 inline-flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
        {icon}
      </div>
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
    </Link>
  );
}
