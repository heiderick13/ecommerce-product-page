const imgsModal = document.querySelector("#modal-imgs");
const mainImage = document.querySelector(".main-img");
const closeModal = document.querySelector(".close");

// Event handlers
mainImage.addEventListener("click", () => {
  imgsModal.showModal();
});

closeModal.addEventListener("click", () => {
  imgsModal.close();
});
