import * as React from "react";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";

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

const rows: GridRowsProp = [
  { id: 1, col1: "Hello", col2: "World" },
  { id: 2, col1: "DataGridPro", col2: "is Awesome" },
  { id: 3, col1: "MUI", col2: "is Amazing" },
];

const columns: GridColDef[] = [
  { field: "col1", headerName: "Column 1", width: 150 },
  { field: "col2", headerName: "Column 2", width: 150 },
];

export function MuiDataTable() {
  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}
