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
    {
      name: "제품관리",
      href: "/products",
      children: [
        {
          name: "제품",
          href: "/products",
        },
        {
          name: "토핑",
          href: "/products",
        },
        {
          name: "하프&하프 관리",
          href: "/products",
        },
        {
          name: "도미노콘/상품권 관리",
          href: "/products",
        },
        {
          name: "일시중지메뉴",
          href: "/products",
        },
        {
          name: "쇼핑몰 상품코드 내역",
          href: "/products",
        },
        {
          name: "알레르기 유발성분 관리",
          href: "/products",
        },
        {
          name: "난수쿠폰 생성관리",
          href: "/products",
        },
      ],
    },
  ],
};

export const pageMenusSlice = createSlice({
  name: "pageMenu",
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

  selectors: {
    selectNowMenu: (pageMenusState) => pageMenusState.nowMenu,
    selectNowMenuNode: (pageMenusState) => pageMenusState.nowMenuNode,
    selectAllPageMenusNode: (pageMenusState) => pageMenusState.allPageMenusNode,
  },
});

export const { updateNowMenu } = pageMenusSlice.actions;

export const authSelector = pageMenusSlice.selectors;
