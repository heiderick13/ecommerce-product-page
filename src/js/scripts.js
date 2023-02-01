const imgsModal = document.querySelector("#modal-imgs");
const mainImage = document.querySelector(".main-img");
const closeModal = document.querySelector(".close");
const links = document.querySelectorAll("a");
const linksArr = [...links];
const productQntDisplay = document.querySelector("#quantity");
const cartIcon = document.querySelector("#cart-icon");
const cartContainer = document.querySelector("#cart-container");
let productQnt = 0;

productQntDisplay.textContent = productQnt;
// cartIcon.setAttribute("data-value", productQnt); add with function

// Event handlers
mainImage.addEventListener("click", () => {
  imgsModal.showModal();
});

closeModal.addEventListener("click", () => {
  imgsModal.close();
});

linksArr.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

cartIcon.addEventListener("click", () => {
  cartContainer.classList.toggle("hide-cart");
});
