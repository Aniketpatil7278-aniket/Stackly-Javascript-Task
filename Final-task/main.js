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

//-----------------------------------------------SECATION--1---------------------------------
// 🔹 2. Dynamic UI Rendering
// Each product card must include:
// Product Title (max 50 characters)
// Product Image
// Product Price
// Short Description (max 60 characters)

let statusText = document.getElementById("status");  //selecting the id from the html page 
//initilation the loading status 
statusText.innerText = "Loading..."; 

fetch(API)
.then(res=>res.json())

.then((data)=>{
  let product = document.querySelector(".products"); //selecting the div from html page
  statusText.innerText = ""; // remove loading text

  data.forEach((c) => {
    let card = document.createElement("div"); //create the card 

    card.innerHTML = `
                    <h2>${c.title.slice(0, 50) + "..."}</h2>
                    <img src="${c.image}" alt="${c.category}"/>
                    <p>Price:${c.price}</p>
                    <p>${c.description.slice(0, 60) + "..."}</p>
                    <button>View More</button>`; //card data 

    //btn click show info of the product
    card.querySelector("button").addEventListener("click",()=>{
        alert(`Title: ${c.title}\n Category: ${c.category}\n Description: ${c.description}\n Price: ${c.price}\n`);
    })
    product.append(card); //added the data 
  });
})
//catch the error 
.catch((e)=>{
    console.log("Error",e);
    statusText.innerText = "Failed to load data";
    
})

//-----------------------------------------------SECATION--1---------------------------------
