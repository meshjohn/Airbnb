export default function LayoutCreation({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="mt-10">{children}</div>;
}
