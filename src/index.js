import { initialPageLoad } from "./initialPageLoad";
import { aboutUs } from "./aboutUs";
import { menu } from "./menu";
import { locations } from "./locations";

const navBar = document.createElement("div");
const navLinks = ["Home", "About Us", "Menu", "Locations"];
let navUrl = [initialPageLoad, aboutUs, menu, locations];

navLinks.forEach((navLinks) => {
  const btn = document.createElement("button");
  btn.textContent = navLinks;
  btn.classList.add("btn");
  btn.addEventListener("click", navUrl.shift());
  navBar.appendChild(btn);
});

navBar.classList.add("navBar");
document.body.prepend(navBar);

initialPageLoad();
