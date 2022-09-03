import { createSlice } from "@reduxjs/toolkit";

export const traitsSlice = createSlice({
  name: "traits",
  initialState: [
    {
      id: "tr-01",
      title: "quick learner",
      description: "gains XP at a boosted rate",
    },
    {
      id: "tr-02",
      title: "the talkative one",
      description: "fluent in Terra common language with minimal accent",
    },
    {
      id: "tr-03",
      title: "taming presense",
      description: "calms down wild beasts with empathic aura",
    },
    {
      id: "tr-04",
      title: "curious mind",
      description:
        "motivated by anything new, exploring new fields is in his nature",
    },
  ],
  reducers: {
    addTrait: (state, action) => {
      state.push(action.payload);
    },
    removeTrait: (state, action) => {
      state.filter(action.payload);
    },
    resetTraits: (state) => {
      state = [];
    },
  },
});

export const { addTrait, removeTrait, resetTraits } = traitsSlice.actions;

export default traitsSlice.reducer;
