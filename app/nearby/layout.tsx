export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex items-start flex-col gap-4 py-8 md:py-10">
      <div className="inline-block w-full max-w-lg text-center">
        {children}
      </div>
    </section>
  );
}
