type Props = { title: string; description?: string };

export default function PlaceholderPage({ title, description }: Props) {
  return (
    <section className="container py-16">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-extrabold mb-3">{title}</h1>
        {description && (
          <p className="text-muted-foreground leading-8">{description}</p>
        )}
      </div>
    </section>
  );
}
