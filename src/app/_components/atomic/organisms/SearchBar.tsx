import Image from "next/image";
import * as React from "react";

export interface ISearchBar {
  title: string;
  desc?: string;
}

export default function SearchBar() {
  return (
    <form action="" className="search-form">
      <input type="text" />
      <button>
        <Image src="/search.svg" alt="검색" width={20} height={20} />
      </button>
    </form>
  );
}
