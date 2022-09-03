import { createSlice } from "@reduxjs/toolkit";
import { ReactComponent as JsIcon } from "../assets/icons/js.svg";
import { ReactComponent as ReactIcon } from "../assets/icons/react.svg";
import { ReactComponent as PythonIcon } from "../assets/icons/python.svg";
import { ReactComponent as BashIcon } from "../assets/icons/bash.svg";
import { ReactComponent as HtmlIcon } from "../assets/icons/html.svg";
import { ReactComponent as CssIcon } from "../assets/icons/css.svg";

export const spellsSlice = createSlice({
  name: "spells",
  initialState: [
    {
      id: "sp-01",
      title: "Javascriptology",
      icon: <JsIcon />,
      level: 3
    },
    {
      id: "sp-02",
      title: "React functionalis",
      icon: <ReactIcon />,
      level: 3
    },
    {
      id: "sp-03",
      title: "Parseltongue",
      icon: <PythonIcon />,
      level: 1
    },
    {
      id: "sp-04",
      title: "Bash magic",
      icon: <BashIcon />,
      level: 2
    },
    {
      id: "sp-05",
      title: "HTML semanticus",
      icon: <HtmlIcon />,
      level: 4
    },
    {
      id: "sp-06",
      title: "Styla improva",
      icon: <CssIcon />,
      level: 3
    },
  ],
  reducers: {
    addSpell: (state, action) => {
      state.push(action.payload);
    },
    removeSpell: (state, action) => {
      state.filter(action.payload);
    },
    resetSpells: (state) => {
      state = [];
    },
  },
});

export const { addSkill, removeSkill, resetSkills } = spellsSlice.actions;

export default spellsSlice.reducer;
