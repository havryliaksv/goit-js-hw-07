import { galleryItems } from "./gallery-items.js";

const galleryListEl = document.querySelector(".gallery");

galleryListEl.innerHTML = createGalleryListMarkup(galleryItems);

function createGalleryListMarkup(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>
`
    )
    .join("");
}
const simpleLightBoxGallery = new SimpleLightbox(
  ".gallery .gallery__item .gallery__link",
  {
    captionsData: "alt",
    captionDelay: 250,
  }
);
console.log(simpleLightBoxGallery);
