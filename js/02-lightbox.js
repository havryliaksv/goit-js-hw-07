import { galleryItems } from "./gallery-items.js";

const galleryListEl = document.querySelector(".gallery");

galleryListEl.innerHTML = createGalleryListMarkup(galleryItems);

galleryListEl.addEventListener("click", onGalleryImgClick);

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

function onGalleryImgClick(e) {
  e.preventDefault();
  if (!e.target.classList.contains("gallery__image")) {
    return;
  }
  console.log(e.target);
  console.log(e.target.closest(".gallery__link"));
  let simpleLightBoxGallery = new SimpleLightbox(".gallery .gallery__link");
  console.log(simpleLightBoxGallery.elements);
  console.log("точка тесту", simpleLightBoxGallery);
  //simpleLightBoxGallery.on("show.simplelightbox");
  simpleLightBoxGallery.open(e.target.closest(".gallery__link"));
  //simpleLightBoxGallery.open();
}
