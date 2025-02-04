let btn = document.getElementById("btn");
let container = document.getElementsByClassName("cards");
let url = "https://dummyjson.com/products";
let temp = '';
var res, result;
let newres;

async function productDetails() {
  res = await fetch(url);
  // console.log(res)
  result = await res.json();
  // console.log(result)
  // newres = Array.from(result);
  newres=result.products
  console.log(newres);
}

btn.addEventListener('click', () => {
  newres.forEach(element => {
    console.log("0");
    temp += `<div class="card" style="width: 18rem;">
        <img src="${element.thumbnail}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${element.brand}</h5>
        <p class="card-text">${element.description}</p>
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">${element.title}</li>
        <li class="list-group-item">${element.price}</li>
        </ul>
        </div>`;
  });
// console.log(temp);
container[0].innerHTML=temp
});
productDetails();