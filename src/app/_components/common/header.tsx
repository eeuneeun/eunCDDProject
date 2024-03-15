import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import Title from "../atomic/atoms/Title";
import SearchBar from "../atomic/organisms/SearchBar";
import { UserHeaderGroup } from "../atomic/organisms/Users";

export function Header(HeaderProps: React.PropsWithChildren) {
  // #현재 접속한 페이지 정보를 redux 에서 가져옴 : 개발 예정
  const nowPage = {
    title: "제품관리",
    description: "제품관 > 제품",
  };

  return (
    <header className="common-header flex-start">
      <h1>
        <Link href="/">
          <Image src="/logo.png" alt="도미노 로고" width={150} height={50} />
        </Link>
      </h1>
      <div className="header-utils">
        <Title {...nowPage} />
        <SearchBar />
        <UserHeaderGroup />
      </div>
    </header>
  );
}
