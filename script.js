const headRight = document.querySelector(".head-arrow-right");
const headLeft = document.querySelector(".head-arrow-left");
const hats = document.querySelector(".cap");
const hatsImages = ["Images/Head/fedora-1.png", "Images/Head/fedora-2.png"];
let hatsIndex = 0;
let eyeIndex = 0;

const eyeRight = document.querySelector(".eyes-arrow-right");
const eyeLeft = document.querySelector(".eyes-arrow-left");
const eyes = document.querySelector(".eye");
const eyesImages = [
  "Images/Eyes/ochi-2.png",
  "Images/Eyes/ochi1.png",
  "Images/Eyes/ochi2.png",
  "Images/Eyes/ochi3.png",
];

headLeft.addEventListener("click", () => {
  if (hatsIndex === 1) {
    hatsIndex--;
    hats.src = hatsImages[hatsIndex];
  }
});
headRight.addEventListener("click", () => {
  if (hatsIndex === 0) {
    hatsIndex++;
    hats.src = hatsImages[hatsIndex];
  }
});

eyeLeft.addEventListener("click", () => {
  if (eyeIndex > 0) {
    eyeIndex--;
    eyes.src = eyesImages[eyeIndex];
  }
});

eyeRight.addEventListener("click", () => {
  if (eyeIndex <= 2) {
    eyeIndex++;
    eyes.src = eyesImages[eyeIndex];
  }
});
