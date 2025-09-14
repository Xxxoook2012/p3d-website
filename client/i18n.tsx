import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type Lang = "ar" | "en";

type Dict = Record<string, string>;

type I18nContextType = {
  lang: Lang;
  t: (key: string) => string;
  toggle: () => void;
  setLang: (l: Lang) => void;
};

const dictionaries: Record<Lang, Dict> = {
  ar: {
    "nav.home": "الرئيسية",
    "nav.ideas": "أفكار عملائنا",
    "nav.products": "المنتجات",
    "nav.models": "الموديلات",
    "nav.decor": "الديكورات والمكاتب",
    "nav.games": "الألعاب",
    "nav.innovations": "افتكاسات تفيدك",
    "cta.order": "اطلب تصميمك الآن",
    "hero.welcome": "أهلاً بك في",
    "hero.title": "تصميم وطباعة ثلاثية الأبعاد",
    "hero.desc":
      "شركة متخصصة في تصميم ونماذج وطباعة 3D لأي فكرة تخطر ببالك. من الشخصيات والديكورات إلى الألعاب والابتكارات المفيدة.",
    "hero.btn.whatsapp": "تواصل عبر واتساب الآن",
    "hero.btn.ideas": "تصفح أفكار عملائنا",
    "about.title": "من نحن",
    "about.desc":
      "نقدم خدمات التصميم والطباعة ثلاثية الأبعاد باحترافية عالية وبخامات متعددة لتناسب كل الاستخدامات. نعمل مع الأفراد والشركات لتحويل الأفكار إلى منتجات حقيقية.",
    "ideas.note":
      "هذه منتجات من أفكار عملائنا وقد حصلنا على إذن لبيع الفكرة أو المنتج هنا.",
    "categories.title": "الأقسام",
    "categories.products.title": "المنتجات",
    "categories.products.subtitle": "الشخصيات: أفلام كرتون والأنمي",
    "categories.models.title": "الموديلات",
    "categories.models.subtitle": "جميع أنواع الموديلات",
    "categories.decor.title": "الديكورات والمكاتب",
    "categories.decor.subtitle": "ديكورات ومكاتب مخصصة",
    "categories.games.title": "الألعاب",
    "categories.games.subtitle": "ألعاب وأدوات ممتعة",
    "categories.innovations.title": "افتكاسات تفيدك",
    "categories.innovations.subtitle": "حلول ذكية للحياة اليومية",
    "categories.ideas.title": "أفكار عملائنا",
    "categories.ideas.subtitle": "منتجات من ابتكارات عملائنا",
    "cta2.title": "جاهز نبدأ فكرتك؟",
    "cta2.desc": "راسلنا على واتساب وسنقترح أفضل الحلول والتكاليف المناسبة.",
    "cta2.btn": "ابدأ الآن",
    "footer.rights": "كل الحقوق محفوظة لشركة p2O",
  },
  en: {
    "nav.home": "Home",
    "nav.ideas": "Customers' Ideas",
    "nav.products": "Products",
    "nav.models": "Models",
    "nav.decor": "Decor & Desks",
    "nav.games": "Games",
    "nav.innovations": "Useful Innovations",
    "cta.order": "Order your design",
    "hero.welcome": "Welcome to",
    "hero.title": "3D Design & Printing",
    "hero.desc":
      "We design and 3D-print anything you imagine: from characters and decor to games and useful innovations.",
    "hero.btn.whatsapp": "WhatsApp us now",
    "hero.btn.ideas": "Browse customers' ideas",
    "about.title": "About Us",
    "about.desc":
      "We provide professional 3D design and printing with multiple materials for all use cases. We help individuals and businesses turn ideas into real products.",
    "ideas.note":
      "These are products from our customers' ideas, published with permission.",
    "categories.title": "Categories",
    "categories.products.title": "Products",
    "categories.products.subtitle": "Characters: cartoons & anime",
    "categories.models.title": "Models",
    "categories.models.subtitle": "All kinds of 3D models",
    "categories.decor.title": "Decor & Desks",
    "categories.decor.subtitle": "Custom decor and office items",
    "categories.games.title": "Games",
    "categories.games.subtitle": "Fun printable tools and games",
    "categories.innovations.title": "Useful Innovations",
    "categories.innovations.subtitle": "Smart solutions for daily life",
    "categories.ideas.title": "Customers' Ideas",
    "categories.ideas.subtitle": "Products from our customers' innovations",
    "cta2.title": "Ready to start your idea?",
    "cta2.desc":
      "Message us on WhatsApp and we'll propose the best options and costs.",
    "cta2.btn": "Start now",
    "footer.rights": "All rights reserved to p2O",
  },
};

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>(
    () => (localStorage.getItem("lang") as Lang) || "ar",
  );

  useEffect(() => {
    localStorage.setItem("lang", lang);
    const el = document.documentElement;
    el.lang = lang;
    el.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const t = useCallback(
    (key: string) => dictionaries[lang][key] ?? key,
    [lang],
  );

  const value = useMemo<I18nContextType>(
    () => ({
      lang,
      t,
      toggle: () => setLang((p) => (p === "ar" ? "en" : "ar")),
      setLang,
    }),
    [lang, t],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
