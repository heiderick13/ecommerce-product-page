const imgsModal = document.querySelector("#modal-imgs");
const mainImage = document.querySelector(".main-img");
const closeModal = document.querySelector(".close");
const links = document.querySelectorAll("a");
const linksArr = [...links];
const productQntDisplay = document.querySelector("#quantity");
const cartIcon = document.querySelector("#cart-icon");
const cartContainer = document.querySelector("#cart-container");
const emptyCart = document.querySelector(".empty-cart");
const cartContent = document.querySelector(".cart-content");
const mobileMainImg = document.querySelector("#mobile-carousel img");
const mobileLeft = document.querySelector("#mobile-carousel .left");
const mobileRight = document.querySelector("#mobile-carousel .right");
const plusBtn = document.querySelector("#plus-btn");
const minusBtn = document.querySelector("#minus-btn");
const addBtn = document.querySelector("#add-btn");
let productQnt = 0;
let imgSrcId = 1;

productQntDisplay.textContent = productQnt;

// functions
function addToCart(qnt) {
  emptyCart.classList.add("hide");
  cartContent.classList.remove("hide");

  document.querySelector(
    ".total-price"
  ).innerHTML = `$125.00 x ${productQnt} <strong class="ms-2">${(
    125 * productQnt
  ).toFixed(2)}</strong>`;

  cartIcon.setAttribute("data-value", productQnt);
}

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
  cartContainer.classList.toggle("hide");
});

mobileRight.addEventListener("click", () => {
  if (imgSrcId < 4) {
    imgSrcId++;
    mobileMainImg.setAttribute("src", `./images/image-product-${imgSrcId}.jpg`);
  }
});

mobileLeft.addEventListener("click", () => {
  if (imgSrcId > 1) {
    imgSrcId--;
    mobileMainImg.setAttribute("src", `./images/image-product-${imgSrcId}.jpg`);
  }
});

plusBtn.addEventListener("click", () => {
  productQnt++;
  productQntDisplay.textContent = productQnt;
});

minusBtn.addEventListener("click", () => {
  if (productQnt > 0) {
    productQnt--;
    productQntDisplay.textContent = productQnt;
  }
});

addBtn.addEventListener("click", () => {
  addToCart(productQnt);
});
