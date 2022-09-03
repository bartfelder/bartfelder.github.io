import { createSlice } from "@reduxjs/toolkit";

export const skillsSlice = createSlice({
  name: "skills",
  initialState: [
    {
      id: "sk-01",
      title: "Keyboard artist",
      description: "types text at supernatural speed",
    },
    {
      id: "sk-02",
      title: "Master investigator",
      description: "can diagnose issues with the scientific method in no time",
    },
    {
      id: "sk-03",
      title: "Scribe's apprentice",
      description: "creates documentation that is almost more art than science",
    },
  ],
  reducers: {
    addSkill: (state, action) => {
      state.push(action.payload);
    },
    removeSkill: (state, action) => {
      state.filter(action.payload);
    },
    resetSkills: (state) => {
      state = [];
    },
  },
});

export const { addSkill, removeSkill, resetSkills } = skillsSlice.actions;

export default skillsSlice.reducer;
