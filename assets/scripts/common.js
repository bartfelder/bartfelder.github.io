import * as script from "./builders.js";
import * as txt from "./content.js";

const linkSection = document.querySelector('#links');
const workSection = document.querySelector('#work');
const eduSection = document.querySelector('#edu');
const intexpSection = document.querySelector('#intexp')
const skillsSection = document.querySelector('#skills')

for (const l of txt.links) {
    script.createLinks(l, linkSection);
}

for (const a of txt.work) {
    script.createBlock(a, workSection);
}

for (const b of txt.education) {
    script.createBlock(b, eduSection);
}

for (const c of txt.intexp) {
    script.createBlock(c, intexpSection);
}

for (const d of txt.skills) {
    script.createBlock(d, skillsSection);
}