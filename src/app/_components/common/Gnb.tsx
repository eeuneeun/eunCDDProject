import * as React from "react";

export interface IGnbProps {
  menuList: string[];
}

export default function Gnb(Gnbprops: IGnbProps) {
  return (
    <div className="gnb-wrap">
      <ol className="gnb">
        {Gnbprops.menuList.map((menuName) => (
          <li key={menuName}>{menuName}</li>
        ))}
      </ol>
    </div>
  );
}
