// let mainDiv = document.createElement("div");
let itemsDiv = document.createElement("div");
let addItemText = document.createElement("h2");
let body = document.querySelector("body");
let header = document.createElement("header");
let footer = document.createElement("footer");
h1 = document.createElement("h1");
h1.textContent = "Sporting Goods Inventory";
header.append(h1);
body.append(header);
let ul = document.createElement("ul");
let form = document.createElement("form");

let h3A = document.createElement("h3");
h3A.textContent = "Name";
let nameInput = document.createElement("input");
nameInput.type = "text";
nameInput.name = "name";
nameInput.id = "name";
nameInput.required = true;
let h3B = document.createElement("h3");
h3B.textContent = "Sport/Exercise";
let sportTypeInput = document.createElement("input");
sportTypeInput.type = "text";
sportTypeInput.name = "sportType";
sportTypeInput.id = "sportType";
sportTypeInput.required = true
let h3C = document.createElement("h3");
h3C.textContent = "Image URL";
let imageInput = document.createElement("input");
imageInput.type = "url"
imageInput.name = "src";
imageInput.id = "src"
imageInput.required = true;
let h3D = document.createElement("h3");
h3D.textContent = "Price";
let priceInput = document.createElement("input");
priceInput.type = "number";
priceInput.name = "price";
priceInput.id = "price"
priceInput.required = "true";
let h3E = document.createElement('h3');
h3E.textContent = "In-Stock";
let inStockSelect = document.createElement("select")
inStockSelect.name = "inStock";
inStockSelect.id = "inStock";
inStockSelect.textContent = "-- Select One --";

let yesOption = document.createElement("option");
yesOption.value = "In-Stock";
yesOption.textContent = "In-Stock";
noOption = document.createElement("option");
noOption.value = "Unavailable";
noOption.textContent = "Unavailable";

inStockSelect.append(yesOption,noOption);



let resetButton = document.createElement("button");
resetButton.type = "Reset";
resetButton.textContent = "Reset";

let submitButton = document.createElement("button");
submitButton.type = "submit";
submitButton.textContent = "Submit";

let item1 = document.createElement("article");
let firstItemName = document.createElement("h4");
firstItemName.textContent = "Everlast Boxing Gloves";
let firstItemInfo = document.createElement("h5");
firstItemInfo.textContent = "Boxing/Cardio";
let firstItemPrice = document.createElement("p");
firstItemPrice.textContent = "$42.99";
let removeButton1 = document.createElement("button");
removeButton1.type = "Remove";
removeButton1.textContent = "Remove"
let image1 = document.createElement("img");
let inStock1 = document.createElement("h5");
inStock1.textContent = "In-Stock"
image1.src = "https://m.media-amazon.com/images/I/71eilZDrgWL._AC_SX679_.jpg";

let item2 = document.createElement("article");
let secondItemName = document.createElement("h4");
secondItemName.textContent = "Spalding Adult BasketBall";
let secondItemInfo = document.createElement("h5");
secondItemInfo.textContent = "Basketball/Cardio";
let secondItemPrice = document.createElement("p");
secondItemPrice.textContent = "29.99";
let removeButton2 = document.createElement("button");
removeButton2.type = "Remove";
removeButton2.textContent = "Remove";
let image2 = document.createElement("img");
image2.src = "https://m.media-amazon.com/images/I/91j3VymnXSL._AC_SX679_.jpg";
let inStock2 = document.createElement("h5");
inStock2.textContent = "In-Stock";

let item3 = document.createElement("article");
let thirdItemName = document.createElement("h4");
thirdItemName.textContent = "Louisville Slugger Series 3X Ash Bat";
let thirdItemInfo = document.createElement("h5");
thirdItemInfo.textContent = "Baseball/Team Sports";
let thirdItemPrice = document.createElement("p");
thirdItemPrice.textContent = "35.99";
let removeButton3 = document.createElement("button");
removeButton3.type = "Remove";
removeButton3.textContent= "Remove";
let image3 = document.createElement("img");
image3.src = "https://dks.scene7.com/is/image/GolfGalaxy/16LSLAS3XSHNTRLXXWBT?qlt=70&wid=1100&fmt=webp";
let inStock3 = document.createElement("h5");
inStock3.textContent = "In-Stock"

item1.append(firstItemName, firstItemInfo, firstItemPrice, image1, inStock1, removeButton1);
item2.append(secondItemName, secondItemInfo, secondItemPrice, image2, inStock2, removeButton2);
item3.append(thirdItemName, thirdItemInfo, thirdItemPrice, image3, inStock3, removeButton3);
form.append(h3A, nameInput, h3B, sportTypeInput, h3C, imageInput, h3D, priceInput, h3E, inStockSelect, submitButton, resetButton);
body.append(form);
itemsDiv.append(item1, item2, item3, ul);
body.append(itemsDiv);


form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    let name = event.target.name.value;
    let sportType = event.target.sportType.value;
    let IMG = event.target.src.value;
    let price = event.target.price.value;
    let inStock = event.target.inStock.value;
    
    generateItem(name, sportType, IMG, price, inStock);
    
    form.reset();
}
);

function itemTemplate(name, sportType, IMG, price, inStock) {
    
    const newItem = document.createElement("article");
    newItem.textContent += name;
    if (sportType) {
        let strong = document.createElement("strong");
        strong.textContent = "Sport Type: ";
        newItem.append(document.createElement("br"), strong, sportType);
    }
    if (IMG) {
        let img = document.createElement("img");
        img.src = IMG
        newItem.append(img)
       
    }
    if (price) {
        const strong = document.createElement("strong");
        strong.textContent = "Price: ";
        newItem.append(document.createElement("br"), strong, price);
    }
    if (inStock) {
        const strong = document.createElement("strong");
        strong.textContent = "In Stock: ";
        newItem.append(document.createElement("br"), strong, inStock);
    }
    
    const remove = document.createElement("button");
    remove.innerText = "Remove";
    newItem.append(remove);
    
    remove.addEventListener("click", (event) => {
        newItem.remove();
    });
    
    return newItem;
}

function generateItem(name, sportType, IMG, price, inStock) {
    const newItem = itemTemplate(name, sportType, IMG, price, inStock);
    itemsDiv.append(newItem);
}


removeButton1.addEventListener("click", (event) => {{
    item1.remove();
}
return itemsDiv
})

removeButton2.addEventListener("click", (event) => {{
    item2.remove();
}
return itemsDiv
})

removeButton3.addEventListener("click", (event) => {{
    item3.remove();
}
return itemsDiv
})





































