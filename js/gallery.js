// =====================
// GALLERY.JS
// =====================

const galleryImages = [
  "assets/main-image.png",
  "assets/thumbnail-1.png",
  "assets/thumbnail-2.png",
  "assets/thumbnail-3.png",
  "assets/thumbnail-4.png",
  "assets/thumbnail-5.png",
  "assets/thumbnail-6.png",
  "assets/thumbnail-7.png",
  "assets/thumbnail-8.png"
];

let currentIndex = 0;

const mainImage = document.getElementById("mainImage");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");

const dots = [...document.querySelectorAll(".dot")];
const thumbs = [...document.querySelectorAll(".thumb")];

function updateGallery(index) {
  currentIndex = index;

  // fade IN only
  mainImage.style.opacity = 0;

  setTimeout(() => {
    mainImage.src = galleryImages[currentIndex];
    mainImage.style.opacity = 1;
  }, 50);

  dots.forEach((d, i) => d.classList.toggle("active-dot", i === index));
  thumbs.forEach((t, i) => t.classList.toggle("active-thumb", i === index));
}

// arrows
leftArrow.onclick = () => {
  const newIndex = currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1;
  updateGallery(newIndex);
};

rightArrow.onclick = () => {
  const newIndex = currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1;
  updateGallery(newIndex);
};

// dots
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => updateGallery(i));
});

// thumbs
thumbs.forEach((thumb, i) => {
  thumb.addEventListener("click", () => updateGallery(i+1));
});

updateGallery(0);
