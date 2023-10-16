import { productlist } from './product.js';
// console.log(productlist);


let currentProduct = [], savedProducts = [], cartProduct = [];

if (!getLocalStorage("products")) savedLocalStorage("products", productlist);
document.addEventListener("DOMContentLoaded", savedProducts = getLocalStorage("products"));
currentProduct = savedProducts
// console.log(currentProduct);


const productListTag = document.querySelector(".product-list");

const modal = document.querySelector(".show-modal");
document.querySelector(".navbar-cart").addEventListener("click", showModal);

document.querySelector(".backdrop").addEventListener("click", closeModal);

createProductList(currentProduct);



function showModal() {
  modal.style.display = "block";
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
      cartProduct.push(addTocartProduct);
      createProductList(currentProduct);
      savedLocalStorage("products", currentProduct);
      console.log(cartProduct);
      console.log(currentProduct);


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
      <div>${obj.quantity == 0 ? `<a data-product-id=${obj.id} class="add-to-cart">Add To Cart</a>` : `<a data-product-id=${obj.id} class="add-to-cart pointer-event">In Cart Exist</a>`}
      </div>
    </div>`;


}






















