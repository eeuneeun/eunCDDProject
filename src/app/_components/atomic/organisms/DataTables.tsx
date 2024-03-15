import * as React from "react";

export interface IDataTableProps {}

const dummy = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function DataTableDefault(props: IDataTableProps) {
  return (
    <>
      <h3>타이틀</h3>
      <div className="datatable-wrap">
        <ol>
          <li>No</li>
          <li>구분</li>
          <li>노출 카테고리</li>
          <li>제품명</li>
          <li>제품코드</li>
          <li>인기점수</li>
          <li>대표제품</li>
          <li>출시일시</li>
          <li>판매가격</li>
          <li>상태</li>
          <li>추천메뉴</li>
        </ol>
        {dummy.map((item) => (
          <ul key={item}>
            <li>6762</li>
            <li>세트메뉴</li>
            <li>N/A</li>
            <li>[해피데일리세트]_소맥_치볼_제로</li>
            <li> SST504F1 </li>
            <li>0 </li>
            <li>N </li>
            <li>2024/02/20 </li>
            <li>27,000</li>
            <li>정상</li>
            <li>N</li>
          </ul>
        ))}
      </div>
    </>
  );
}
