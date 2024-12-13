export function AboutGridContainer({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 pr-4 pl-4 lg:pl-0 md:grid-cols-1 md:gap-12 md:align-top">
      {children}
    </div>
  );
}
