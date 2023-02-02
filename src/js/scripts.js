const imgsModal = document.querySelector("#modal-imgs");
const mainImage = document.querySelector(".main-img");
const closeModal = document.querySelector(".close");
const links = document.querySelectorAll("a");
const linksArr = [...links];
const productQntDisplay = document.querySelector("#quantity");
const cartIcon = document.querySelector("#cart-icon");
const cartContainer = document.querySelector("#cart-container");
const mobileMainImg = document.querySelector("#mobile-carousel img");
const mobileLeft = document.querySelector("#mobile-carousel .left");
const mobileRight = document.querySelector("#mobile-carousel .right");
let productQnt = 0;
let imgSrcId = 1;

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
