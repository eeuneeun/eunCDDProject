"use client";
import * as React from "react";
import { RHFDefault } from "@/app/_components/atomic/atoms/Input";
import { Breadscrumb } from "@/app/_components/atomic/molecules/Breadscrumb";
import DataTableDefault, {
  MuiDataTable,
} from "@/app/_components/atomic/organisms/DataTables";
import { PanelForSearch } from "@/app/_components/atomic/organisms/Panels";

export interface IProductsProps {}

export default function Products(props: IProductsProps) {
  return (
    <>
      <Breadscrumb />
      <RHFDefault />
      <PanelForSearch />
      <DataTableDefault />
      <MuiDataTable />
    </>
  );
}
