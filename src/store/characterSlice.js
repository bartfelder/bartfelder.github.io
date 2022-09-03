import { createSlice } from "@reduxjs/toolkit";

export const characterSlice = createSlice({
  name: "character",
  initialState: {
    name: "Csaba Bartfai",
    title: "Frontend Software Engineer",
    race: "Human",
    characterClass: "Code Wizard",
    level: "31",
    background: "Scientist",
    religion: "Clean Code Fanatic",
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setRace: (state, action) => {
      state.race = action.payload;
    },
    setClass: (state, action) => {
      state.characterClass = action.payload;
    },
    setLevel: (state, action) => {
      state.level = action.payload;
    },
    setBackground: (state, action) => {
      state.background = action.payload;
    },
    setReligion: (state, action) => {
      state.religion = action.payload;
    },
  },
});

export const {
  setName,
  setTitle,
  setRace,
  setClass,
  setLevel,
  setBackground,
  setReligion,
} = characterSlice.actions;

export default characterSlice.reducer;
