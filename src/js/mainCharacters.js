const list = document.getElementById("character-list");
const img = document.getElementById("character");

const rickImg = "./rick.a5a9efc5.png";
const mortyImg = "/morty.612ab20f.png";
const bethImg = "./beth.c2448ae3.png";
const summerImg = "./summer.dfec4fb8.png";
const jerryImg = "./jerry.8705314c.png";

list.addEventListener("click", (e) => {
  console.log("worked");
  const target = e.target.closest("[data-char]");
  if (target.dataset.char === "rick") {
    img.width = "365";
    img.height = "579";
    img.style.padding = "32px 70px";
    img.style.backgroundColor = "#A1D737";
    img.src = rickImg;
  } else if (target.dataset.char === "morty") {
    img.style.backgroundColor = "#0D171D";
    img.style.padding = "41px 42px";
    img.width = "428";
    img.height = "550";
    img.src = mortyImg;
    console.log("worked");
  } else if (target.dataset.char === "summer") {
    img.style.backgroundColor = "#DAF836";
    img.style.padding = "43px 175px";
    img.width = "152";
    img.height = "560";
    img.src = summerImg;
    console.log("worked");
  } else if (target.dataset.char === "beth") {
    img.style.backgroundColor = "#A1D737";
    img.style.padding = "53px 176px";
    img.width = "150";
    img.height = "537";
    img.src = bethImg;
    console.log("worked");
  } else if (target.dataset.char === "jerry") {
    img.style.backgroundColor = "#0D171D";
    img.style.padding = "53px 177px";
    img.width = "148";
    img.height = "537";
    img.src = jerryImg;
    console.log("worked");
  }
});
