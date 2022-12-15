const requestURL = "device.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    // console.table(jsonObject); // temporary checking for valid response and data parsing
    const products = jsonObject;
    // console.table(products);

    for (let i = 0; i < 17; i++) {
      // creates card and places prophet name in h2 element
      let card = document.createElement("section");
      let h2 = document.createElement("h4");
      h2.textContent = products[i].title;
      card.appendChild(h2);
      document.querySelector("ol#cards").appendChild(card);

      // creates a p tag with products DOB
      let price = document.createElement("h5");
      price.textContent = "Price: " + products[i].price;
      card.appendChild(price);

      // adds birth state
      let category = document.createElement("p");
      category.textContent = "Category: " + products[i].category;
      card.appendChild(category);

      // creates images for all products
      let container = document.createElement("div")
      let image = document.createElement("img");
      image.setAttribute("loading", "lazy");
      image.setAttribute("src", products[i].image);
      image.setAttribute("alt", products[i].title);
      card.appendChild(image);
      card.appendChild(container);
      container.appendChild(image);

      // Add to cart button
      let addToCardBtn = document.createElement("button");
      addToCardBtn.className = "button-27";
      addToCardBtn.textContent = "Add to Cart";
      addToCardBtn.addEventListener("click", addToCart);
      card.appendChild(addToCardBtn);

      key = 0;
      cart = [];

      function addToCart(item) {
        // item = [products[i].title, products[i].price, products[i].image];
        item = {
          name: products[i].title,
          price: products[i].price,
          image: products[i].image,
        };
        key++;
        window.localStorage.setItem(key, JSON.stringify(item));
        console.log(`added ${products[i].title} to the cart`);
        window.location.reload();
      }
    }

    function allStorage() {
      let values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

      while (i--) {
        values.push(localStorage.getItem(keys[i]));
      }

      return JSON.parse(values);
    }

    let cart_items = document.getElementById("title");
    let cart_items2 = document.getElementById("price");
    let cart_items3 = document.getElementById("product_image");
    let sales_tax = document.getElementById("tax");
    let sales_total = document.getElementById("total");
    let sales_delivery = document.getElementById("delivery");
    cart_items.innerHTML = allStorage().name;
    cart_items2.innerHTML = allStorage().price;
    cart_items3.setAttribute("src", allStorage().image);

    prod_price = allStorage().price;
    tax = prod_price * 0.06;
    delivery = prod_price * 0.04;
    total = prod_price + tax + delivery;

    sales_tax.textContent = tax.toFixed(2);
    sales_delivery.textContent = delivery.toFixed(2);
    sales_total.textContent = total.toFixed(2);
  });

// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

let pay_btn = document.getElementById("pay_btn");
function pay() {
  window.location = "./thankyou.html";
}
