import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  value: boolean;
}

const initialState: CounterState = {
  value: false,
};

export const togglerSlice = createSlice({
  name: "sidebarToggler",
  initialState,
  reducers: {
    toggle: (state) => {
      state.value = state.value === true ? false : true;
    },
  },
});

export const { toggle } = togglerSlice.actions;

export default togglerSlice.reducer;
