const images = ["1.jpg", "2.png", "3.jpg"];

const chosenImage = images[Math.floor(Math.random() *images.length)];

const bgImage=document.createElement("img");

//img 코드를 생성

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);