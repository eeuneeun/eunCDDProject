import * as React from "react";

export interface IPanelProps {}

export default function PanelDefault(props: IPanelProps) {
  return (
    <div className="panel-wrap">
      <h3>타이틀</h3>
      <div>패널 내용</div>
    </div>
  );
}

export function PanelForSearch(props: IPanelProps) {
  return (
    <div className="panel search-table">
      <h3>검색 옵션</h3>
      <form action="">
        <ul>
          <li>
            <label htmlFor="">키워드 검색</label>
            <input type="text" id="" className="" />
          </li>
          <li>
            <label htmlFor="">출시 일시</label>
            <input type="text" id="" className="" />
          </li>
          <li>
            <label htmlFor="">상태</label>
            <input type="text" id="" className="" />
          </li>
          <li>
            <label htmlFor="">구분</label>
            <input type="text" id="" className="" />
          </li>
          <li>
            <label htmlFor="">카테고리</label>
            <input type="text" id="" className="" />
          </li>
          <li>
            <label htmlFor="">마이키친</label>
            <input type="text" id="" className="" />
          </li>
          <li>
            <label htmlFor="">대표제품</label>
            <input type="text" id="" className="" />
          </li>
          <li>
            <label htmlFor="">추천제품</label>
            <input type="text" id="" className="" />
          </li>
        </ul>
      </form>
    </div>
  );
}
