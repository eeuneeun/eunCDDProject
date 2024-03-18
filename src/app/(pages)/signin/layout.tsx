import { Header } from "@/app/_components/common/Header";

export default function SubLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
