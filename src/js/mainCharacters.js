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

  let currentImageSrc = rickImg;
  let currentBackgroundColor = "#A1D737";
  let currentPadding = "32px 70px";
  let currentWidth = 365;
  let currentHeight = 579;

  if (target.dataset.char === "rick") {
    currentWidth = 365;
    currentHeight = 579;
    currentPadding = "32px 70px";
    currentImageSrc = rickImg;
    currentBackgroundColor = "#A1D737";
  } else if (target.dataset.char === "morty") {
    currentPadding = "41px 42px";
    currentWidth = 428;
    currentHeight = 550;
    currentBackgroundColor = "#0D171D";
    currentImageSrc = mortyImg;
    console.log("worked");
  } else if (target.dataset.char === "summer") {
    currentPadding = "43px 175px";
    currentWidth = 152;
    currentHeight = 560;

    currentBackgroundColor = "#DAF836";
    currentImageSrc = summerImg;

    console.log("worked");
  } else if (target.dataset.char === "beth") {
    currentPadding = "53px 176px";
    currentWidth = 150;
    currentHeight = 537;
    currentBackgroundColor = "#A1D737";
    currentImageSrc = bethImg;

    console.log("worked");
  } else if (target.dataset.char === "jerry") {
    currentPadding = "53px 177px";
    currentWidth = 148;
    currentHeight = 537;

    currentBackgroundColor = "#0D171D";
    currentImageSrc = jerryImg;

    console.log("worked");
  }
  img.classList.add("fade");
  setTimeout(() => {
    img.width = currentWidth;
    img.height = currentHeight;
    img.style.padding = currentPadding;
    img.style.backgroundColor = currentBackgroundColor;
    img.src = currentImageSrc;
    img.classList.remove("fade");
  }, 300);
});
