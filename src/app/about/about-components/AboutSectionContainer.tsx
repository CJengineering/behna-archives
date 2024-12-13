export function AboutSectionContainer({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <section className="px-4 max-w-[1080px] mx-auto pb-6">
      {children}
    </section>
  );
}
