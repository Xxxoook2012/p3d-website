import PlaceholderPage from "@/components/PlaceholderPage";

export default function Ideas() {
  return (
    <div>
      <section className="bg-gradient-to-b from-accent/40 to-background border-b">
        <div className="container py-12 text-center">
          <h1 className="text-4xl font-extrabold mb-4">أفكار عملائنا</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            هذه منتجات من أفكار عملائنا وقد حصلنا على إذن لبيع الفكرة أو المنتج
            هنا.
          </p>
        </div>
      </section>

      <section className="container py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="group overflow-hidden rounded-xl border bg-card shadow-sm"
            >
              <img
                src="/placeholder.svg"
                alt="منتج من فكرة عميل"
                className="w-full h-48 object-cover bg-muted/50"
              />
              <div className="p-4">
                <h3 className="font-bold">نموذج ثلاثي الأبعاد #{i}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  تصميم وطباعة بجودة عالية ومقاسات مخصصة.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <PlaceholderPage
        title="هل لديك فكرة؟"
        description="تواصل معنا عبر واتساب لنحوّلها إلى منتج حقيقي مطبوع بتقنية 3D."
      />
    </div>
  );
}
