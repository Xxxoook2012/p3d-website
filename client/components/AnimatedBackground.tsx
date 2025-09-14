export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-blob" />
      <div
        className="absolute -right-16 top-32 h-80 w-80 rounded-full bg-accent/30 blur-3xl animate-blob"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute left-1/4 bottom-0 h-72 w-72 rounded-full bg-secondary/20 blur-3xl animate-blob"
        style={{ animationDelay: "4s" }}
      />
    </div>
  );
}
