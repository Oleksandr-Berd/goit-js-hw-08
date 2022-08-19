// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

const lightboxLayout = createLayout(galleryItems);

function createLayout(galleryItems) {
  return galleryItems
    .map(element => {
      return `<a class="gallery__item" href="${element.original}">
  <img class="gallery__image" src="${element.preview}" alt="${element.description}" />
</a>`;
    })
    .join('');
}

const myGallery = document.querySelector('.gallery');

myGallery.insertAdjacentHTML('afterbegin', lightboxLayout);

myGallery.addEventListener('click', onClick, { once: true });

let lightbox = new SimpleLightbox('.gallery__item', {
  captionsData: `alt`,
  captionDelay: 250,
});

function onClick(evt) {
  evt.preventDefault();
}

console.log(myGallery);
