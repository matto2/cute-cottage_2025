import Glide from "@glidejs/glide";

document.addEventListener("DOMContentLoaded", () => {
  console.log("Initializing Glide.js...");

  new Glide(".glide", {
    type: "carousel",
    perView: 1, // Shows one image at a time
    focusAt: "center",
    gap: 10,
    animationDuration: 600,
    hoverpause: true,
    keyboard: true,
    breakpoints: {
      768: { perView: 1 },
    },
  }).mount();

  console.log("Glide.js initialized successfully.");
});