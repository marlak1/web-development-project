document.addEventListener("DOMContentLoaded", () => {
  // Cover image animation
  const coverImage = document.querySelector("#cover-image");
  const cover = document.querySelector(".cover");
  const big = document.querySelector("#big");

  if (coverImage && cover && big) {
    coverImage.addEventListener("click", () => {
      cover.classList.add("up");
    });
    big.addEventListener("click", () => {
      cover.classList.add("up");
    });
  }

  // Modal functionality
  const images = document.querySelectorAll(".modal-image");

  images.forEach((image) => {
    const modal = createModal(image);

    image.addEventListener("click", () => {
      modal.style.display = "block";
    });

    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });
});

function createModal(image) {
  const modal = document.createElement("div");
  modal.classList.add("modal");

  const modalImg = document.createElement("img");
  modalImg.classList.add("modal-content");
  modalImg.id = "img01";
  modalImg.src = image.src;
  modalImg.dataset.fullSrc = image.dataset.fullSrc; // Store the full-resolution image URL

  modal.appendChild(modalImg);
  document.body.appendChild(modal);

  // Add event listener to close the modal when clicking outside the image
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  // Function to handle image click event
  function openModalImage(event) {
    const img = event.target;
    const fullSrc = img.dataset.fullSrc;

    // Create a new image element for the full-resolution version
    const fullImg = new Image();
    fullImg.src = fullSrc;
    fullImg.onload = function () {
      // Replace the lower-quality image with the full-resolution version
      img.src = fullImg.src;
      img.classList.add("zoom-in"); // Add a class for the zoom effect
    };
  }

  // Add event listener to the modal image
  modalImg.addEventListener("click", openModalImage);

  return modal;
}
