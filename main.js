let body = document.querySelector("body");
let header = document.createElement("header");
h1 = document.createElement("h1");
h1.textContent = "Sporting Goods Inventory";
header.append(h1);
body.append(header);
// let mainDiv = document.createElement("div");
let form = document.createElement("form");
let nameInput = document.createElement("input");

nameInput.type = "text";
nameInput.name = "Name"

let h3A = document.createElement("h3");
h3A.textContent = "Name";


let sportTypeInput = document.createElement("input");

sportTypeInput.type = "text";
sportTypeInput.name = "Sport Type";

let h3B = document.createElement("h3");
h3B.textContent = "Sport/Exercise";

let imageInput = document.createElement("input");
imageInput.type = "href";
imageInput.name = "Image of Item";

let h3C = document.createElement("h3");
h3C.textContent = "Image URL";

let h3D = document.createElement("h3");
h3D.textContent = "Price";

let priceInput = document.createElement("input");
priceInput.type = "Price";
priceInput.name = "Price";




// h3C.append(imageInput);

// h3B.append(sportTypeInput); 

let inStockSelect = document.createElement("select")
inStockSelect.name = "In-Stock";
inStockSelect.id = "In-Stock";
inStockSelect.textContent = "-- Select One --";

let yesOption = document.createElement("option");
yesOption.value = "yes";
yesOption.textContent = "Yes";

noOption = document.createElement("option");
noOption.value = "No";
noOption.textContent = "No";
inStockSelect.append(yesOption,noOption);

let h3E = document.createElement('h3');
h3E.textContent = "In-Stock";











let resetButton = document.createElement("button");
resetButton.type = "Reset";
resetButton.textContent = "Reset";
let submitButton = document.createElement("button");
submitButton.classList.add()
submitButton.type = "Submit";
submitButton.textContent = "Submit";

form.append(h3A, nameInput, h3B, sportTypeInput, h3C, imageInput, h3D, priceInput, h3E, inStockSelect, submitButton, resetButton);

body.append(form);

let itemsDiv = document.createElement("div");
let item1 = document.createElement("article");
let firstItemName = document.createElement("h4");
firstItemName.textContent = "Everlast Boxing Gloves";

let firstItemInfo = document.createElement("h5");
firstItemInfo.textContent = "Boxing/Cardio";

let firstItemPrice = document.createElement("p");
firstItemPrice.textContent = "$42.99";

let removeButton = document.createElement("button");
removeButton.type = "Remove";
removeButton.textContent = "Remove"

let image1 = document.createElement("img");
// image1.classList.add("boxing gloves");

image1.src = "https://m.media-amazon.com/images/I/71eilZDrgWL._AC_SX679_.jpg";
item1.append(firstItemName, firstItemInfo, firstItemPrice, image1, removeButton);

itemsDiv.append(item1);
body.append(itemsDiv);



























