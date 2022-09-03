import { configureStore } from "@reduxjs/toolkit";
import characterReducer from "./characterSlice";
import traitsReducer from "./traitsSlice";
import skillsReducer from "./skillsSlice";
import spellsReducer from "./spellsSlice";
import adventuresReducer from "./adventuresSlice";

export default configureStore({
  reducer: {
    character: characterReducer,
    traits: traitsReducer,
    skills: skillsReducer,
    spells: spellsReducer,
    adventures: adventuresReducer,
  },
});
