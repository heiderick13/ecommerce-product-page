# Frontend Mentor - E-commerce product page solution

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users are able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it

### Screenshot

![](./images/screenshot.png)

### Links

- Solution URL: [Here](https://ecommerce-product-page-green.vercel.app/)
- Live Site URL: [Here](https://www.frontendmentor.io/solutions/ecommerce-product-page-DqbN_eFiOs)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Vanilla JavaScript
- [Bootstrap](https://getbootstrap.com/) - For styles and layout

### What I learned

I learned how to better use the bootstrap carousel and make it look closer to what I want, instead of just the default. I won't add the snippet below for it's a big chunk of code.

<br>

I'm also proud to have implemented a different style of carousel for mobile screens. I'm sure it's not the best way of doing it, but it works for a first time.

```js
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
```

<br>

Also am proud of this one function that changes the image displayed and the thumbnail selected below it.

```js
thumbs.forEach((thumb) => {
  thumb.addEventListener("click", (e) => {
    changeMainImg(e);
  });
});

function changeMainImg(e) {
  let id = e.target.getAttribute("id");
  mainImage.setAttribute("src", `./images/image-product-${id}.jpg`);

  for (const thumb of thumbs) {
    thumb.classList.remove("active");
  }

  thumbs[id - 1].classList.add("active");
}
```

### Continued development

I intend to improve the carousel for mobile screens and try to implement a version with vanilla JavaScript for desktop. Will probably create a checkout page too.

## Author

- Website - [Marcelo Oliveira](www.linkedin.com/in/marcelo-ferreira-de-oliveira)
- Frontend Mentor - [@heiderick13](https://www.frontendmentor.io/profile/heiderick13)
- Github - [@heiderick13](https://github.com/heiderick13)
