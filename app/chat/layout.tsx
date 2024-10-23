export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-4 w-full">
      <div className="relative flex flex-col max-w-lg w-full ">{children}</div>
    </section>
  );
}
