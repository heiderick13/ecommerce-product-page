const links = document.querySelectorAll("a");
const linksArr = [...links];
const thumbs = document.querySelectorAll("#thumbnails .thumbnail");
const imgsModal = document.querySelector("#modal-imgs");
const mainImage = document.querySelector(".main-img");
const closeModal = document.querySelector(".close");
const productQntDisplay = document.querySelector("#quantity");
const cartIcon = document.querySelector("#cart-icon");
const emptyCart = document.querySelector(".empty-cart");
const cartContent = document.querySelector(".cart-content");
const mobileMainImg = document.querySelector("#mobile-carousel img");
const mobileRight = document.querySelector("#mobile-carousel .right");
const mobileLeft = document.querySelector("#mobile-carousel .left");
const plusBtn = document.querySelector("#plus-btn");
const minusBtn = document.querySelector("#minus-btn");
const addBtn = document.querySelector("#add-btn");
const deleteProduct = document.querySelector("#clear-cart");
const mobileMenu = document.querySelector("#mobile-menu");
const openMobileMenu = document.querySelector("#burger-menu");
const closeMobileMenu = document.querySelector("#close-menu");

let productQnt = 0;
let imgSrcId = 1;

productQntDisplay.textContent = productQnt;

// functions
function addToCart() {
  if (productQnt > 0) {
    emptyCart.classList.add("hide");
    cartContent.classList.remove("hide");

    document.querySelector(
      ".total-price"
    ).innerHTML = `$125.00 x ${productQnt} <strong class="ms-2">${(
      125 * productQnt
    ).toFixed(2)}</strong>`;

    cartIcon.setAttribute("data-value", productQnt);
  }
}

function clearCart() {
  cartContent.classList.add("hide");
  emptyCart.classList.remove("hide");

  cartIcon.setAttribute("data-value", "");
}

function menuOpen() {
  let body = document.querySelector("body");
  let overlay = document.createElement("div");
  overlay.classList = "overlay";

  mobileMenu.classList.add("active");
  body.appendChild(overlay);
}

function menuClose() {
  let overlay = document.querySelector(".overlay");
  overlay.remove();

  mobileMenu.classList.remove("active");
}

function changeMainImg(e) {
  let id = e.target.getAttribute("id");
  mainImage.setAttribute("src", `./images/image-product-${id}.jpg`);

  for (const thumb of thumbs) {
    thumb.classList.remove("active");
  }

  thumbs[id - 1].classList.add("active");
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
  let cartContainer = document.querySelector("#cart-container");
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
  addToCart();
});

deleteProduct.addEventListener("click", () => {
  clearCart();
});

openMobileMenu.addEventListener("click", () => {
  menuOpen();
});

closeMobileMenu.addEventListener("click", () => {
  menuClose();
});

thumbs.forEach((thumb) => {
  thumb.addEventListener("click", (e) => {
    changeMainImg(e);
  });
});
