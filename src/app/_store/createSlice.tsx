// # Redux Thunk 예제 코드

import { asyncThunkCreator, buildCreateSlice } from "@reduxjs/toolkit";

// `buildCreateSlice` : async thunks 적용을 위함
export const createSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});
