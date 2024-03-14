import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./_styles/reset.css";
import "./_styles/globals.css";
import { StoreProvider } from "./_store/StoreProvider";
import { Suspense } from "react";
import Loading from "./_components/common/Loading";
import { Header } from "./_components/common/Header";
import { Footer } from "./_components/common/Footer";
import Gnb, { IGnbProps } from "./_components/common/Gnb";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const menuList: IGnbProps = {
    menuList: ["메인", "메뉴관리", "회원관리", "통계관리"],
  };

  return (
    <>
      <StoreProvider>
        <html lang="ko">
          <Suspense fallback={<Loading />}>
            <body className={inter.className}>
              <Header />
              <Gnb {...menuList} />
              <main className="main-wrap">{children}</main>
              <Footer />
            </body>
          </Suspense>
        </html>
      </StoreProvider>
    </>
  );
}
