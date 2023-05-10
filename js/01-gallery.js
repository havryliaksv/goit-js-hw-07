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
  const lightBoxEl = createElementForLightbox(e.target);
  const instanceBasicLightbox = basicLightbox.create(lightBoxEl);
  instanceBasicLightbox.show();

  window.addEventListener("keydown", onLightBoxCloseKeyPressEsc);
  function onLightBoxCloseKeyPressEsc(e) {
    if (e.code === "Escape") {
      instanceBasicLightbox.close();
      window.removeEventListener("keydown", onLightBoxCloseKeyPressEsc);
    }
  }
}
function createElementForLightbox(el) {
  return ` <img
    src = "${el.dataset.source}" 
    alt = "${el.alt}">`;
}
