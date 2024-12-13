export function AboutParagraph({
  children,
  textCentred,
}: {
  children?: React.ReactNode;
  textCentred?: boolean;
}) {
  if (textCentred) {
    return <p className="py-2 font-ibmSans text-center">{children}</p>;
  }
  return <p className="py-2 font-ibmSans">{children}</p>;
}
