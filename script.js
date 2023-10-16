import { productlist } from "./product.js";
// console.log(productlist);

let currentProduct = [],
  savedProducts = [],
  cartProduct = [];

if (!getLocalStorage("products")) savedLocalStorage("products", productlist);
document.addEventListener(
  "DOMContentLoaded",
  (savedProducts = getLocalStorage("products"))
);
currentProduct = savedProducts;
// console.log(currentProduct);

const productListTag = document.querySelector(".product-list");
const cartContentTag = document.querySelector(".cart-content");
const cartTotalPrice = document.querySelector(".cart-total-price");
const navbarItems = document.querySelector(".navbar-items");
const clearCart = document.querySelector(".cart-clear");

const modal = document.querySelector(".show-modal");
document.querySelector(".navbar-cart").addEventListener("click", showModal);
document.querySelector(".backdrop").addEventListener("click", closeModal);

clearCart.addEventListener("click", () => {
  currentProduct.map((product) => (product.quantity = 0));
  savedLocalStorage("products", currentProduct);
  createProductList(currentProduct);
});

createProductList(currentProduct);

function showNavbarCounter() {
  navbarItems.innerHTML = currentProduct.filter(
    (product) => product.quantity != 0
  ).length;
}

function showModal() {
  modal.style.display = "block";
  createCartlist();
}

function closeModal() {
  console.log("Backdrop");
  modal.style.display = "none";
}

function getLocalStorage(str) {
  return JSON.parse(localStorage.getItem(str));
}

function savedLocalStorage(str, arr) {
  localStorage.setItem(str, JSON.stringify(arr));
}

function createProductList(arr) {
  showNavbarCounter();
  let strProduct = "";
  if (arr) {
    arr.forEach((element) => {
      strProduct += setProduct(element);
    });
    productListTag.innerHTML = strProduct;
  } else {
    productListTag.textContent = "No Product Availabe ....";
  }

  const addToCart = document.querySelectorAll(".add-to-cart");
  console.log(addToCart);
  addToCart.forEach((e) => {
    e.addEventListener("click", () => {
      const addTocartProduct = currentProduct.find(
        (product) => product.id == e.dataset.productId
      );
      currentProduct.map((product) => {
        product.id == e.dataset.productId
          ? (product.quantity = 1)
          : product.quantity;
      });
      addTocartProduct.quantity = 1;
      createProductList(currentProduct);
      savedLocalStorage("products", currentProduct);
    });
  });
}

function createCartlist() {
  window.scrollTo(0, 0); // values are x,y-offset
  cartProduct = currentProduct.filter((product) => product.quantity != 0);
  let strCartProduct = "";
  let sumOfPrice = 0;
  if (cartProduct.length) {
    cartProduct.forEach((product) => {
      strCartProduct += setCart(product);
      sumOfPrice += product.quantity * Number(product.price.slice(0, -1));
    });
    cartContentTag.innerHTML = strCartProduct;
  } else {
    cartContentTag.textContent = "No Product in Cart Availabe ....";
  }

  cartTotalPrice.textContent = "Total Price : " + sumOfPrice + "$";

  const cartInc = document.querySelectorAll(".cart-inc");
  const cartDec = document.querySelectorAll(".cart-dec");
  const cartRemove = document.querySelectorAll(".cart-remove");

  cartInc.forEach((e) => {
    e.addEventListener("click", () => {
      console.log(e.dataset.productId);
      const incProduct = currentProduct.find(
        (product) => product.id == e.dataset.productId
      );
      incProduct.quantity++;
      createCartlist();
      savedLocalStorage("products", currentProduct);
      createProductList(currentProduct);
    });
  });

  cartDec.forEach((e) => {
    e.addEventListener("click", () => {
      const decProduct = currentProduct.find(
        (product) => product.id == e.dataset.productId
      );
      if (decProduct.quantity > 1) {
        decProduct.quantity--;
      } else {
        decProduct.quantity = 0;
        cartProduct = currentProduct.filter((product) => product.quantity != 0);
        console.log("Has Removed.....");
        console.log(cartProduct);
      }
      console.log(decProduct.quantity);
      createCartlist();
      savedLocalStorage("products", currentProduct);
      createProductList(currentProduct);
    });
  });

  cartRemove.forEach((e) => {
    e.addEventListener("click", () => {
      console.log(e.dataset.productId);
      const removeProduct = currentProduct.find(
        (product) => product.id == e.dataset.productId
      );
      removeProduct.quantity = 0;
      cartProduct = currentProduct.filter(
        (product) => product.id != e.dataset.productId
      );
      console.log(cartProduct);
      createCartlist();
      savedLocalStorage("products", currentProduct);
      createProductList(currentProduct);
    });
  });
}

function setProduct(obj) {
  return ` <div class="product" >
      <img class="product-image" src=${obj.imageUrl} alt="p-1" srcset="" />
      <div class="product-desc">
          <span class="product-title">Product : ${obj.title}</span>
          <span class="product-price">${obj.price}</span>
      </div>
      <div>${
        obj.quantity == 0
          ? `<a data-product-id=${obj.id} class="add-to-cart">Add To Cart</a>`
          : `<a data-product-id=${obj.id} class="add-to-cart pointer-event">In Cart Exist</a>`
      }
      </div>
    </div>`;
}

function setCart(obj) {
  return `<div class="cart">
      <img class="cart-image" src=${obj.imageUrl} alt="" srcset="" />
      <div div class="cart-desc">
      <p class="cart-title">${obj.title}</p>
      <p class="cart-price">${obj.price}</p>
  </div>
  <div class="cart-quantity">
      <i class="cart-inc fas fa-chevron-circle-up" data-product-id=${obj.id}></i>
      <p class="cart-counter">${obj.quantity}</p>
      <i class="cart-dec fas fa-chevron-circle-down" data-product-id=${obj.id}></i>
  </div>
    <i class="cart-remove fa fa-trash" data-product-id=${obj.id}></i>
</div>`;
}
