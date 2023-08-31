// variables

const cartBtn = document.querySelector(".cart-btn");
const closeCartBtn = document.querySelector(".close-cart");
const clearCartBtn = document.querySelector(".clear-cart");
const cartDOM = document.querySelector(".cart");
const cartOverlay = document.querySelector(".cart-overlay");
const cartItems = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".cart-total");
const cartContent = document.querySelector(".cart-content");
const productsDOM = document.querySelector(".products-center");
// cart
let cart = [];

// getting the products 
class Products {
  async getProducts(){
    try {
      let result = await fetch('products.json');
      let data = await result.json();
      let products = data.items;
      products = products.map(item => {
        const {title, price} = item.fields;
        const {id} = item.sys;
        const image = item.fields.image.fields.file.url;
        return {title, price, id, image};
      })      
      return products;
    } catch (error) {
      console.log(error);
    }
  }
}

// display products
class UI {
  displayProducts(products){
    let result = '';
    products.forEach(product => {
      result += `
        <article class="product">
          <div class="img-container">
            <img src="${product.image}" alt="product-1" class="product-img">
            <button class="bag-btn" data-id="${product.id}">
              <i class="fas fa-shopping-cart"></i>
              add to bag
            </button>          
          </div>
          <h3>${product.title}</h3>
          <h4>$ ${product.price}</h4>
        </article>
      `
    });
    productsDOM.innerHTML = result;
  }
}

// local storage 
class Storage {

}

document.addEventListener("DOMContentLoaded", () => {
  const ui = new UI();
  const products = new Products();

  // get all products
  
  products.getProducts().then(products => ui.displayProducts(products))
});









// let items = [];

// let loadData = async () => {
//   let res = await fetch('products.json');
//   let data = await res.json();
//   items = data.items;
//   // console.log(data.items);
//   displayItems();
  
// }

// let displayItems = () => {
//   let productsContainer = document.getElementById('products-center');
//   let itemCart = document.createElement('article')
//   productsContainer.innerHTML = '';
//   // console.log(items);

//   items.forEach(item => {
//     // console.log(item.fields.image.fields.file);
//     let itemCart = document.createElement('article')
//     itemCart.innerHTML = `
  //   <article class="product">
  //   <div class="img-container">
  //     <img src="${item.fields.image.fields.file.url}" alt="product-1" class="product-img">
  //     <button class="bag-btn" data-id="1">
  //       <i class="fas fa-shopping-cart"></i>
  //       add to bag
  //     </button>          
  //   </div>
  //   <h3>${item.fields.title}</h3>
  //   <h4>$ ${item.fields.price}</h4>
  // </article>
//     `
//   productsContainer.appendChild(itemCart)
//   });
// }

// loadData(); 