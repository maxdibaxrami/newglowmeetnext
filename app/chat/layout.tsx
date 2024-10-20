export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 h-full w-full">
      <div style={{height:"100vh"}} className="relative flex flex-col max-w-lg text-center justify-center h-full w-full">
        {children}
      </div>
    </section>
  );
}
