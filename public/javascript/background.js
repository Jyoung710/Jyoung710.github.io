const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const body = document.querySelector("body");

// const bgImage = document.createElement("img");

body.style = `background-image: url(../bg_img/${chosenImage});`;