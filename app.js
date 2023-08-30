let items = [];

let loadData = async () => {
  let res = await fetch('products.json');
  let data = await res.json();
  items = data.items;
  // console.log(data.items);
  displayItems();
  
}

let displayItems = () => {
  let productsContainer = document.getElementById('products-center');
  let itemCart = document.createElement('article')
  productsContainer.innerHTML = '';
  // console.log(items);

  items.forEach(item => {
    // console.log(item.fields.image.fields.file);
    let itemCart = document.createElement('article')
    itemCart.innerHTML = `
    <article class="product">
    <div class="img-container">
      <img src="${item.fields.image.fields.file.url}" alt="product-1" class="product-img">
      <button class="bag-btn" data-id="1">
        <i class="fas fa-shopping-cart"></i>
        add to bag
      </button>          
    </div>
    <h3>${item.fields.title}</h3>
    <h4>$ ${item.fields.price}</h4>
  </article>
    `
  productsContainer.appendChild(itemCart)
  });
}

loadData(); 