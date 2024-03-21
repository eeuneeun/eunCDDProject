// ★ COMMON

import type { Action, ThunkAction } from "@reduxjs/toolkit";
import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import logger from "redux-logger";
import { pageMenusSlice } from "./pageMenus/menuSlice";

// rootReducer : 여러 Slice 조각들을 합쳐서 담아줌
const rootReducer = combineSlices(authSlice, pageMenusSlice);
// RootState :  root reducer 로 부터 유래함
export type RootState = ReturnType<typeof rootReducer>;

// # REDUX STORE 생성
export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  });
};

// Infer the return type of `makeStore`
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;
