// src/scripts/photoswipe-init.js
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

export function initializePhotoSwipe() {
  const lightbox = new PhotoSwipeLightbox({
    gallery: "#botanicalsGallery",
    children: "a",
    pswpModule: () => import("photoswipe"),
  });

  lightbox.init();
  console.log("PhotoSwipe initialized successfully.");
}
