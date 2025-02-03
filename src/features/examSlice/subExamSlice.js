import { createSlice } from "@reduxjs/toolkit";
const SubExamSlice = createSlice({
  name: "SubExam",
  initialState: {
    subExamData: [],
  },
  reducers: {
    setSubExam: (state, action) => {
      state.subExamData = action.payload; // Update the user state with the dispatched payload
    },
  },
});

export const { setSubExam } = SubExamSlice.actions; // Export actions

export default SubExamSlice.reducer;
