const images = ["image0.jpg", "image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"];

const selectedImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${selectedImage}`;

const body = document.querySelector("body");


body.style.backgroundImage = `url(img/${selectedImage})`;

