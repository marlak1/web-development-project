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

  modal.appendChild(modalImg);
  document.body.appendChild(modal);

  return modal;
}
