import * as React from "react";

export interface IUserProps {}

export function User(props: IUserProps) {
  return (
    <div className="user-wrap">
      <ul className="flex-start">
        <li>로그인</li>
        <li>로그아웃</li>
      </ul>
    </div>
  );
}
