import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items.js';
// Change code below this line

const items = galleryItems
  .map(item => {
    return `
    <a class="gallery__item" href="${item.original}" >
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>`;
  })
  .join('');

const galleryBox = document.querySelector('.gallery');
galleryBox.innerHTML = items;

new SimpleLightbox('.gallery a', {
  caption: true,
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  swipeClose: true,
  animationSpeed: 300,
});

console.log(galleryItems);
console.log('galsdffsdfleryItems');