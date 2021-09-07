import galleryItems from "./app.js";

const galleryContainer = document.querySelector(`.js-gallery`);

const images = galleryItems.map((galleryElement, index) => {
   return `<li class="gallery__item">` + `<a href="#img${index + 1}" class="gallery__link">` + `<img class="gallery__image" src="${galleryElement.preview}" alt="${galleryElement.description}">` + `</a>` + `</li>`;
}).join("");

galleryContainer.innerHTML = images;

console.log(images);
console.log(galleryItems);
