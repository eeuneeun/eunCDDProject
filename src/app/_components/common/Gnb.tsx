import Link from "next/link";
import * as React from "react";
import { v4 as uuidv4 } from "uuid";

export interface IMenuObj {
  name: string;
  link: string;
}

export interface IMenuGrroupObj {
  depth1: string;
  depth2?: IMenuObj[] | null;
  isOpenDepth1: boolean;
}

export interface IGnbProps {
  menuList: IMenuGrroupObj[];
}

export default function Gnb(Gnbprops: IGnbProps) {
  return (
    <div className="gnb-wrap">
      <ol className="gnb">
        {Gnbprops.menuList.map((menu) => (
          <li key={menu.depth1} className={menu?.isOpenDepth1 ? `active` : ``}>
            {menu.depth1}
            {menu.depth2 && (
              <ol className="sub-menu">
                {menu.depth2.map((depth2) => (
                  <li key={uuidv4()}>
                    <Link href={depth2.link}>{depth2.name}</Link>
                  </li>
                ))}
              </ol>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
