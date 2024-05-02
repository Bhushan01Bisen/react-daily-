import { createSlice } from "@reduxjs/toolkit";

const nameLoc = createSlice({
  name: "name_Loc",
  initialState: {
    nam: "",
    loc: "",
  },
  reducers: {
    setName: (state, action) => {
      state.nam = action.payload;
    },

    setLoc: (state, action) => {
      state.loc = action.payload;
    },
  },
});
export const { setName, setLoc } = nameLoc.actions;

export default nameLoc.reducer;
