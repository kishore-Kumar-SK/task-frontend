import { createSlice } from "@reduxjs/toolkit";
import { data } from "jquery";

const initialState = {
  data: [],
};

export const inputSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    addValue: (state, action) => {
      state.data.push(action.payload.message);
    },
  },
});

export const { addValue } = inputSlice.actions;

export default inputSlice.reducer;
