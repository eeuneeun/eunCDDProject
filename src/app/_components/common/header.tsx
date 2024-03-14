import * as React from "react";
import Link from "next/link";
import Image from "next/image";

export function Header(HeaderProps: React.PropsWithChildren) {
  return (
    <header className="common-header flex-start">
      <h1>
        <Link href="/">
          <Image src="/logo.png" alt="도미노 로고" width={175} height={55} />
        </Link>
      </h1>
      {/* <h2>{title}</h2> */}
      <h2>MAIN</h2>
      SearchBar User
    </header>
  );
}
