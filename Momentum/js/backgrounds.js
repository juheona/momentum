const imgs = ["0.jpg", "1.jpg", "2.jpg"];

const background = document.querySelector(".background");

const bgImg = document.createElement("img");
const chosenImg = imgs[Math.floor(Math.random() * imgs.length)];
bgImg.src = `img/${chosenImg}`;
background.appendChild(bgImg);