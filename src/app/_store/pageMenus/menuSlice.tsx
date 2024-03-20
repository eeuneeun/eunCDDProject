// # 예제 코드

import { create } from "domain";
import { createSlice } from "../createSlice";
import type { AppThunk } from "../store";
import type { PayloadAction } from "@reduxjs/toolkit";

export type menu = {
  name: string;
  href: string;
  children?: menu[];
};

type pageMenusType = {
  nowMenu: menu;
  nowMenuNode: menu[];
  allPageMenusNode: menu[];
};

const pageMenusState: pageMenusType = {
  nowMenu: { name: "대시보드", href: "/" },
  nowMenuNode: [{ name: "대시보드", href: "/" }],
  allPageMenusNode: [
    { name: "대시보드", href: "/" },
    { name: "로그인", href: "/signin" },
    { name: "회원가입", href: "/signup" },
    { name: "제품관리", href: "/products" },
  ],
};

export const pageMenusSlice = createSlice({
  name: "counter",
  initialState: pageMenusState,
  reducers: (create) => ({
    updateNowMenu: create.reducer((state, action: PayloadAction<menu>) => {
      state = {
        ...state,
        nowMenu: action.payload,
      };
    }),
    // You can define your selectors here. These selectors receive the slice
  }),
});
