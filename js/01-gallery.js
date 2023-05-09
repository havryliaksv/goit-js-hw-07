import { galleryItems } from "./gallery-items.js";

const galleryListEl = document.querySelector(".gallery");

galleryListEl.insertAdjacentHTML(
  "afterbegin",
  createGalleryListMarkup(galleryItems)
);

galleryListEl.addEventListener("click", onGalleryImgClick);

function createGalleryListMarkup(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
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
  console.log(e.target.closest(".gallery__item"));
  const instanceBasicLightbox = basicLightbox.create(
    e.target.closest(".gallery__item")
  );
  instanceBasicLightbox.show();

  console.log(e.target);
  console.log(e.currentTarget);
}
