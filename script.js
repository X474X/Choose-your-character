const headRight = document.querySelector(".head-arrow-right");
const headLeft = document.querySelector(".head-arrow-left");
const hats = document.querySelector(".cap");
const hatsImages = ["Images/Head/fedora-1.png", "Images/Head/fedora-2.png"];
let hatsIndex = 0;
let eyeIndex = 0;
let noseIndex = 0;
let mouthIndex = 0;

const eyeRight = document.querySelector(".eyes-arrow-right");
const eyeLeft = document.querySelector(".eyes-arrow-left");
const eyes = document.querySelector(".eye");
const eyesImages = [
  "Images/Eyes/ochi-2.png",
  "Images/Eyes/ochi1.png",
  "Images/Eyes/ochi2.png",
  "Images/Eyes/ochi3.png",
];

const noseRight = document.querySelector(".nose-arrow-right");
const noseLeft = document.querySelector(".nose-arrow-left");
const nose = document.querySelector(".nose");
const noseImages = [
  "Images/Nose/nas3.png",
  "Images/Nose/nas4.png",
  "Images/Nose/nas5.png",
  "Images/Nose/nas6.png",
  "Images/Nose/Nas 3.png",
];

const mouthRight = document.querySelector(".mouth-arrow-right");
const mouthLeft = document.querySelector(".mouth-arrow-left");
const mouth = document.querySelector(".mouth");
const mouthImages = [
  "Images/Mouth/SMILE.png",
  "Images/Mouth/Gura 2.png",
  "Images/Mouth/Gura 3.png",
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

noseRight.addEventListener("click", () => {
  if (noseIndex <= 3) {
    noseIndex++;
    nose.src = noseImages[noseIndex];
    console.log(noseIndex);
  }
});

noseLeft.addEventListener("click", () => {
  if (noseIndex > 0) {
    noseIndex--;
    nose.src = noseImages[noseIndex];
    console.log(noseIndex);
  }
});

mouthRight.addEventListener("click", () => {
  if (mouthIndex <= 1) {
    mouthIndex++;
    mouth.src = mouthImages[mouthIndex];
  }
});

mouthLeft.addEventListener("click", () => {
  if (mouthIndex < 0) {
    mouthIndex--;
    mouth.src = mouthImages[mouthIndex];
  }
});
