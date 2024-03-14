import * as React from "react";

export interface IMenuObj {
  depth1: string;
  depth2?: string[] | null;
  isOpenDepth1: boolean;
}

export interface IGnbProps {
  menuList: IMenuObj[];
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
                  <li key={menu.depth1}>{depth2}</li>
                ))}
              </ol>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
