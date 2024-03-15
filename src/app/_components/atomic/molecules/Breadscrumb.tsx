import Link from "next/link";
import * as React from "react";

export interface IBreadscrumbProps {}

export function Breadscrumb(props: IBreadscrumbProps) {
  return (
    <ul className="breadscrumbs flex-start">
      <li>
        <Link href="/">제품관리</Link>
      </li>
      <li>
        <Link href="/">제품</Link>
      </li>
      <li>
        <Link href="/">목록화면</Link>
      </li>
    </ul>
  );
}
