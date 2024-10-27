export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section
      className="flex flex-col justify-center gap-4"
      style={{ height: "100vh" }}
    >
      <div className="inline-block max-w-lg text-center justify-center">
        {children}
      </div>
    </section>
  );
}
