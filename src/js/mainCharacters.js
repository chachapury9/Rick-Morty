const list = document.getElementById("character-list");
const img = document.getElementById("character");

import rickImg from "url:../images/rick.png";
import mortyImg from "url:../images/morty.png";
import bethImg from "url:../images/beth.png";
import summerImg from "url:../images/summer.png";
import jerryImg from "url:../images/jerry.png";

list.addEventListener("click", (e) => {
  console.log("worked");
  const target = e.target.closest("[data-char]");
  console.log(typeof rickImg);
  let currentSrc = rickImg;

  if (target.dataset.char === "rick") {
    img.dataset.image = "rick";
    currentSrc = rickImg;
  } else if (target.dataset.char === "morty") {
    img.dataset.image = "morty";
    currentSrc = mortyImg;
  } else if (target.dataset.char === "summer") {
    img.dataset.image = "summer";
    currentSrc = summerImg;
  } else if (target.dataset.char === "beth") {
    img.dataset.image = "beth";
    currentSrc = bethImg;
  } else if (target.dataset.char === "jerry") {
    img.dataset.image = "jerry";
    currentSrc = jerryImg;
  }
  img.classList.add("fade");
  setTimeout(() => {
    img.src = currentSrc;
    img.classList.remove("fade");
  }, 300);
});
