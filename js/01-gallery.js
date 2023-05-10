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
  const lightboxEl = createElementForLightbox(e.target);
  showBasicLightbox(lightboxEl);
}

function createElementForLightbox(el) {
  const lightboxContainerEl = document.createElement("div");
  const lightboxImgEl = document.createElement("img");
  lightboxImgEl.src = el.dataset.source;
  //  lightboxImgEl.alt = el.getAttribute("alt");
  lightboxImgEl.alt = el.alt ? el.alt : "unknown";
  lightboxContainerEl.appendChild(lightboxImgEl);
  return lightboxContainerEl;
}

function showBasicLightbox(el) {
  const instanceBasicLightbox = basicLightbox.create(el);
  instanceBasicLightbox.show();
}
