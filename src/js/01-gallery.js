// Add imports above this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const createGalleryEl = galleryItems
  .map(({ preview, original, description }) => {
    return `
        
    <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </li>
        `;
  })
  .join('');

//console.log(createGalleryEl);
gallery.insertAdjacentHTML('beforeend', createGalleryEl);

gallery.addEventListener('click', onClickEl);

function onClickEl(e) {
  e.preventDefault();

  if (e.target.nodeName !== 'IMG') {
    return;
  }
}
var lightbox = new SimpleLightbox('.gallery a', {
  captionPosition: 'bottom',
  captionsData: 'alt',
  animationSpeed: 250,
});
