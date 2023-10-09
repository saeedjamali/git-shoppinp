import { productlist } from './product.js';
// console.log(productlist);


let currentProduct = [], savedProducts = [];

savedLocalStorage("products", productlist);
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
    // alert("No Product Available...")
    productListTag.textContent = "No Product Availabe ....";
  }

  const product = document.querySelectorAll(".product");
  product.forEach((e) => {
    e.addEventListener("click", ()=>console.log(e.dataset.productId));
  });
  
  

}


function setProduct(obj) {
  let str = ` <div class="product" data-product-id=${obj.id}>
      <img class="product-image" src=${obj.imageUrl} alt="p-1" srcset="" />
      <div class="product-desc">
          <span class="product-title">Product : ${obj.title}</span>
          <span class="product-price">${obj.price}</span>
      </div>
      <div>
          <a class="add-to-cart">Add To Cart</a>
      </div>
    </div>`;

  return str;
}






















