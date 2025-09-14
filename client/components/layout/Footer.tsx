import { useI18n } from "@/i18n";

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t bg-card">
      <div className="container py-8 text-center text-sm text-muted-foreground">
        {t("footer.rights")}
      </div>
    </footer>
  );
}
