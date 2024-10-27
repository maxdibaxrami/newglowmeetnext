export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section style={{height:"100vh"}} className="flex flex-col justify-center gap-4">
      <div className="inline-block max-w-lg text-center justify-center">
        {children}
      </div>
    </section>
  );
}
