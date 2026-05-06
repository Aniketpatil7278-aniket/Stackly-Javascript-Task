//****************************************final stack **********************************
//-----------------------------------------------SECATION--1---------------------------------
//  1. API Integration
// Use the API:
// https://fakestoreapi.com/products/
// Fetch data using fetch()
// Convert response to JSON

let API = "https://fakestoreapi.com/products/";
fetch(API)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log("Error", e);
  });

console.clear();

//----------------------------------clean code of the funcation --------------------------------------

let statusText = document.getElementById("status"); //select the id from html page
let product = document.querySelector(".products"); //select the class from html page

let allProducts = []; // all data store in the array formate
// 🔹 Fetching the data
fetch(API)
  .then((res) => res.json())
  .then((data) => {
    allProducts = data;
    statusText.innerText = "";
    loadCategories(allProducts);
    displayProducts(allProducts); //calling the function
    updateCartCount();
  })
  .catch((e) => {
    console.log("Error", e);
    statusText.innerText = "Failed to load data";
  });

//  Reusable function dispaly the data
let displayProducts = (data1) => {
  product.innerHTML = "";

  if (data1.length == 0) {
    product.innerHTML = "<h3>No Products Found</h3>";
    return;
  }

  data1.forEach((c) => {
    let card = document.createElement("div");

    card.innerHTML = `
                         <h2>${c.title.slice(0, 50) + "..."}</h2>
                         <img src="${c.image}" alt="${c.category}"/>
                         <h4>Price:${c.price}</h4>
                         <p>${c.description.slice(0, 60) + "..."}</p>
                        <button class="viewBtn">View More</button>
                        <button class="cartBtn">Add to Cart</button>`; //card data

    //btn click alte box open and show all info of the products
    card.querySelector(".viewBtn").addEventListener("click", () => {
      alert(`Title: ${c.title}
Category: ${c.category}
Description: ${c.description}
Price: $${c.price}`);
    });

    card.querySelector(".cartBtn").addEventListener("click", () => {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      let exists = cart.find((item) => item.id === c.id);
      cart.push(c);
      if (!exists) {
        cart.push(c);
        localStorage.setItem("cart", JSON.stringify(cart));
        alert("Added to Cart");
        updateCartCount(); 
      } else {
        alert("Already in Cart");
        updateCartCount(); 
      }
      
      
    });

    product.append(card); // adding the data in the card
  });
};

//-------------------------------------search the data------------------------

document.getElementById("search").addEventListener("input", (e) => {
  let value = e.target.value.toLowerCase();

  let filterdata = allProducts.filter((p) => {
    return p.title.toLowerCase().includes(value);
  });
  console.log(filterdata); // print data in the console

  displayProducts(filterdata);
});

//---------------------loadCategories-function ----------------------

let loadCategories = (data1) => {
  let catselect = document.getElementById("category");

  let categories = [...new Set(data1.map((a) => a.category))];

  categories.forEach((cat) => {
    let option = document.createElement("option");
    option.value = cat;
    option.innerText = cat;
    catselect.append(option);
    console.log(option);
  });
};

//displaying the data filtered data
document.getElementById("category").addEventListener("change", (e) => {
  let value = e.target.value;

  let filterted =
    value === "All"
      ? allProducts
      : allProducts.filter((a) => a.category === value);

  displayProducts(filterted);
});

//---------------------sort the products ------------------------

document.querySelector(".sort").addEventListener("change", (e) => {
  let value = e.target.value;

  let sorted = [...allProducts];

  if (value === "low") {
    sorted.sort((a, b) => a.price - b.price);
  } else if (value === "high") {
    sorted.sort((a, b) => b.price - a.price);
  }
  displayProducts(sorted);
  console.log(sorted);
});

//-------------Added products card count ----------------------

let updateCartCount=(()=>{
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    document.getElementById("cartCount").innerText = cart.length;
})

//-------------View Cart button click---------------

document.querySelector("#viewCart").addEventListener("click", ()=>{
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    console.log("Cart Items:", cart);
    alert("Check console for cart items");


})