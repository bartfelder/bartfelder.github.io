import { createSlice } from "@reduxjs/toolkit";

export const adventuresSlice = createSlice({
  name: "adventures",
  initialState: [
    {
      id: "ad-01",
      title: "Prologue: Just another origin story",
      description:
        "Every story has to start somewhere, and this one is no different. I did not receive my wizarding letter as a child, not even later. I played with MS-DOS and tried my luck with Basic programming runes, but unfortunately my path did not take me to magic immediately. I was a firm believer, and maybe I still am, of the great powers of the universe which are accumulated, in the Well of Science. To understand and commune with the spirits of knowledge I've chosen to take the path of a Linguistics Researcher that led me to the Path of Wrong Choices.",
    },
    {
      id: "ad-02",
      title: "Chapter I: The Path of Wrong Choices",
      description:
        "I was born an adventurer. So looking back, it is no surprise that I felt compelled to go on a quest to find the legendary Tome of Tongues, an artifact that contains the true understanding of our human languages. While on this path, I've encountered many different cultures and languages, travelled thousands of miles, but the legendary Tome of Tongues eluded my search. When I was at the end of the Path of heroes and Dragons (PhD), and defeated the dragon called Absolutorium, I knew that the Tome I was seeking was only a legend, and it made no sense to fight the Thesis dragon. So I have turned around to finally return home.",
    },
    {
      id: "ad-03",
      title: "Chapter II: The Long Way Home to the Wizarding Place",
      description:
        "No longer interested in the material of legends, I have turned to something that felt more real: the World of Magic. It took some time to find a job, but the guild of Rackhost accepted my application, so I've become a bash magician apprentice while earning my place with what I've had, my skills in the science of the languages. Helping people with their portals was our trade, and our guild built the complex infrastructure so the public could access those portals created by Wizards and Sorceresses.",
    },
    {
      id: "ad-04",
      title: "Chapter III: The Kingdom of Wizards and Sorceress",
      description:
        "After my apprenticeship as a prospective mage for little more than three years, finally I received my letter to become a wizard in name as well. The wizarding world's well-known Enchanted Place of All Magic (EPAM) accepted me first as a Junior Wizard of Illusions (sometimes called a Frontend Engineer), but shortly I rose through the ranks and became a Wizard of Illusions and a priest for the Clean Code Church. Today I practice my spells regularly and I'm trying to learn new ones, to reach the title of Senior Wizard of the Whole, and maybe one day become Arcwizard or in another term Arch-itect.",
    },
  ],
  reducers: {
    addAdventure: (state, action) => {
      state.push(action.payload);
    },
    removeAdventure: (state, action) => {
      state.filter(action.payload);
    },
    resetAdventure: (state) => {
      state = [];
    },
  },
});

export const { addTrait, removeTrait, resetTraits } = adventuresSlice.actions;

export default adventuresSlice.reducer;
