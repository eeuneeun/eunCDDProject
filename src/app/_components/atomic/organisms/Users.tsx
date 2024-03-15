import Image from "next/image";
import Link from "next/link";
import * as React from "react";

export interface IUserProps {}

export function UserHeaderGroup(props: IUserProps) {
  return (
    <div className="header-user-group">
      <ul className="flex-start">
        <li>
          <Link href="/">
            <Image src="/setting.svg" alt="설정" width={25} height={25} />
            <span>설정</span>
          </Link>
        </li>
        <li>
          <Link href="/">
            <Image src="/notification.svg" alt="알림" width={25} height={25} />
            <span>알림</span>
          </Link>
        </li>
        <li>
          <Link href="/">
            <Image src="/profile.svg" alt="내 정보" width={40} height={40} />
            <span>내 정보</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
