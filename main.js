
h1 = document.createElement("h1");
h1.textContent = "Bakery Inventory";
let body = document.querySelector("body");
let div = document.querySelector("div");
body.append(h1);
body.append(div);
let form = document.createElement("form");
let nameInput = document.createElement("input");
let fieldset = document.createElement("fieldset");
let nameLabel = document.createElement("label");


nameInput.type = "text";
nameInput.name = "name";


let submitButton = document.createElement("button");

let resetButton = document.createElement("button");



