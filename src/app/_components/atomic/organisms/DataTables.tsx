import * as React from "react";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";

export interface IDataTableProps {
  id: {
    colRep: "No";
    type: string;
  };
  classify: {
    colRep: "구분";
    type: string;
  };
  category: {
    colRep: "노출";
    type: string;
  };
  name: {
    colRep: "제품명";
    type: string;
  };
  code: {
    colRep: "제품코드";
    type: string;
  };
  rate: {
    colRep: "인기점수";
    type: string;
  };
  represention: {
    colRep: "대표제품";
    type: string;
  };
  date: {
    colRep: "출시일시";
    type: Date;
  };
  price: {
    colRep: "판매가격";
    type: number;
  };
  state: {
    colRep: "상태";
    type: string;
  };
  recommendation: {
    colRep: "추천메뉴";
    type: string;
  };
}

const dummy = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function DataTableDefault() {
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
            <li>SST504F1</li>
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

const rows: GridRowsProp = [
  {
    id: "6762",
    classify: "세트메뉴",
    category: "N",
    name: "[해피데일리세트]_소맥_치볼_제로",
    code: "SST504F1",
    rate: "0",
    represention: "N",
    date: "2024",
    price: "27",
    state: "정상",
    recommendation: "N",
  },
];

const columns: GridColDef[] = [
  { field: "id", headerName: "No", width: 150 },
  { field: "classify", headerName: "구분", width: 150 },
  { field: "category", headerName: "노출 카테고리", width: 150 },
  { field: "name", headerName: "제품명", width: 150 },
  { field: "code", headerName: "제품코드", width: 150 },
  { field: "rate", headerName: "인기점수", width: 150 },
  { field: "represention", headerName: "대표제품", width: 150 },
  { field: "date", headerName: "출시일시", width: 150 },
  { field: "price", headerName: "판매가격", width: 150 },
  { field: "state", headerName: "상태", width: 150 },
  { field: "recommendation", headerName: "추천메뉴", width: 150 },
];

export function MuiDataTable() {
  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}
