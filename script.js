
const featuredImage = document.querySelector(".featured img");
const gallery = document.querySelector(".gallery");

// Simulate loading images (Replace these URLs with actual images in your repository)
const featuredSrc = "";
const galleryImages = [];

// Update the featured image if available
if (featuredSrc) {
  featuredImage.src = featuredSrc;
  featuredImage.classList.remove("coming-soon");
}

// Update gallery images
if (galleryImages.length > 0) {
  galleryImages.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    gallery.appendChild(img);
  });
}
