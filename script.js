import { productlist } from './product.js';
// console.log(productlist);


let currentProduct = [], savedProducts = [], cartProduct = [];

if (!getLocalStorage("products")) savedLocalStorage("products", productlist);
document.addEventListener("DOMContentLoaded", savedProducts = getLocalStorage("products"));
currentProduct = savedProducts
// console.log(currentProduct);


const productListTag = document.querySelector(".product-list");
const cartContentTag = document.querySelector(".cart-content");

const modal = document.querySelector(".show-modal");
document.querySelector(".navbar-cart").addEventListener("click", showModal);
document.querySelector(".backdrop").addEventListener("click", closeModal);

createProductList(currentProduct);



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
  let strProduct = "";
  if (arr) {
    arr.forEach(element => {
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
      const addTocartProduct = currentProduct.find((product) => product.id == e.dataset.productId);
      currentProduct.map((product) => { product.id == e.dataset.productId ? product.quantity = 1 : product.quantity })
      addTocartProduct.quantity = 1;
      createProductList(currentProduct);
      savedLocalStorage("products", currentProduct);


    });
  });



}


function createCartlist() {
  cartProduct = currentProduct.filter((product) => product.quantity != 0);
  let strCartProduct = "";
  if (cartProduct) {
    cartProduct.forEach(product => {
      strCartProduct += setCart(product);
    });
    cartContentTag.innerHTML = strCartProduct;
  } else {
    cartContentTag.textContent = "No Product in Cart Availabe ....";
  }

}







function setProduct(obj) {
  return ` <div class="product" >
      <img class="product-image" src=${obj.imageUrl} alt="p-1" srcset="" />
      <div class="product-desc">
          <span class="product-title">Product : ${obj.title}</span>
          <span class="product-price">${obj.price}</span>
      </div>
      <div>${obj.quantity == 0 ? `<a data-product-id=${obj.id} class="add-to-cart">Add To Cart</a>` : `<a data-product-id=${obj.id} class="add-to-cart pointer-event">In Cart Exist</a>`}
      </div>
    </div>`;


}


function setCart(obj) {
  return `  <div class="cart">
      <img class="cart-image" src=${obj.imageUrl} alt="" srcset="" />
      <div div class="cart-desc">
      <p class="cart-title">${obj.title}</p>
      <p class="cart-price">${obj.price}</p>
  </div>
  <div class="cart-quantity">
      <i class="cart-inc fas fa-chevron-circle-up"></i>
      <p class="cart-counter">${obj.quantity}</p>
      <i class="cart-dec fas fa-chevron-circle-down"></i>
  </div>
    <i class="cart-remove fa fa-trash"></i>
</div>`;


}





















