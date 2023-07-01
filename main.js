let errorMessage = document.createElement("p");
let formSection = document.querySelector("section.new-item-form")
console.log(formSection)
errorMessage.style.color="red"
formSection.append(errorMessage);


let currentItems = document.querySelectorAll("li.newItems");
console.log(currentItems)
currentItems.forEach(currentItem => { 
    
    console.log("currentItem", currentItem)
    console.log("lastChild", currentItem.lastElementChild)
    currentItem.lastElementChild.addEventListener("click", (event) => {
        currentItem.remove()
    })
    
})




// let boxingGloves = document.querySelector("li.boxing");
// let removeButton1 = document.querySelector("button.boxing");

let itemsDiv = document.querySelector("ul.container")

let form= document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    let name = event.target.name.value;
    let sportType = event.target.sportType.value;
    let IMG = event.target.src.value;
    let price = `$${event.target.price.value}`;
    let inStock = event.target.inStock.value;
    
    if(!name || !sportType) {
        errorMessage.textContent = "Error. This field of the form can not be left empty"
    } else {
        errorMessage.textContent = ""
        generateItem(name, sportType, IMG, price, inStock);
    }
    
    
    
    
    
    
    form.reset();
}
);


function generateItem(name, sportType, IMG, price, inStock) {
    const newItem = itemTemplate(name, sportType, IMG, price, inStock);
    itemsDiv.append(newItem);
}

function itemTemplate(name, sportType, IMG, price, inStock) {
    
    const newItem = document.createElement("li");
    newItem.classList.add("newItems")
    if (name) {
        let h2 = document.createElement("h2");
        h2.textContent += name;
        newItem.append(h2);
    }
    if (sportType) {
        const h4 = document.createElement("h4");
        h4.textContent = sportType;
        newItem.append(document.createElement("br"), h4);
    }
    if (price) {
        const p = document.createElement("p");
        p.textContent = price;
        newItem.append(document.createElement("br"), p);
    }
    if (!IMG) {
        
    }
    else {
        let img = document.createElement("img");
        img.src = IMG;
        newItem.append(img);
    }
    if (inStock) {
        const inStockHeader = document.createElement("h4")
        const strong = document.createElement("strong");
        strong.textContent = inStock;
        inStockHeader.append(strong)
        newItem.append(document.createElement("br"), inStockHeader);
    }
    
    
    const remove = document.createElement("button");
    remove.innerText = "Remove";
    newItem.append(remove);
    
    remove.addEventListener("click", (event) => {
        newItem.remove();
    });    
    
    return newItem;
}    

// removeButton1.addEventListener("click", (event) => {{
    
    //     boxingGloves.remove();
    // }
    // return itemsDiv
    // })
    
    // let basketball = document.querySelector("li.newItem");
    // let removeButton2 = document.querySelector("button.basketball");
    
    
    // removeButton2.addEventListener("click", (event) => {{
        
        //     basketball.remove();
        // }
        // return itemsDiv
        // })
        
        // let baseball = document.querySelector("li.newItem");
        // let removeButton3 = document.querySelector("button.baseball");
        
        
        // removeButton3.addEventListener("click", (event) => {{
            
            //     baseball.remove();
            // }
            // return itemsDiv
            // })

// let mainDiv = document.createElement("div");
    // let itemsDiv = document.createElement("div");
    // itemsDiv.classList.add("container")
    // let itemsDivTitle = document.createElement ("h3");
    // itemsDivTitle.textContent = "Current Inventory";
    // itemsDivTitle.classList.add("title");
    // let addItemText = document.createElement("h2");
    // let body = document.querySelector("body");
    // let header = document.createElement("header");
    // let main = document.createElement("main");
    // let footer = document.createElement("footer");
    // h1 = document.createElement("h1");
    // h1.textContent = "Sporting Goods Inventory";
    // header.append(h1);
    // body.append(header);
    // let form = document.createElement("form");
    // form.id = "New-Item"
    // let label1 = document.createElement("label");
    // label1.for = "name"
    // label1.textContent = "Name of Item"
    // let label2 = document.createElement("label");
    // let label3 = document.createElement("label");
    // let label4 = document.createElement("label");
    // let label5 = document.createElement("label");
    
    // let h3A = document.createElement("h3");
    // h3A.textContent = "Name";
    // let nameInput = document.createElement("input");
    // nameInput.type = "text";
    // nameInput.name = "name";
    // nameInput.id = "name";
    // nameInput.required = true;
    // let h3B = document.createElement("h3");
    // h3B.textContent = "Sport/Exercise";
    // let sportTypeInput = document.createElement("input");
    // sportTypeInput.type = "text";
    // sportTypeInput.name = "sportType";
    // sportTypeInput.id = "sportType";
    // sportTypeInput.required = true
    // let h3C = document.createElement("h3");
    // h3C.textContent = "Image URL";
    // let imageInput = document.createElement("input");
    // imageInput.type = "url"
    // imageInput.name = "src";
    // imageInput.id = "src"
    // imageInput.required = true;
    // let h3D = document.createElement("h3");
    // h3D.textContent = "Price";
    // let priceInput = document.createElement("input");
    // priceInput.type = "price";
    // priceInput.name = "price";
    // priceInput.id = "price"
    // priceInput.required = "true";
    // let h3E = document.createElement('h3');
    // h3E.textContent = "In-Stock";
    // let inStockSelect = document.createElement("select")
    // inStockSelect.name = "inStock";
    // inStockSelect.id = "inStock";
    // inStockSelect.textContent = "-- Select One --";
    
    // let yesOption = document.createElement("option");
    // yesOption.value = "In-Stock";
    // yesOption.textContent = "In-Stock";
    // noOption = document.createElement("option");
    // noOption.value = "Unavailable";
    // noOption.textContent = "Unavailable";
    
    // inStockSelect.append(yesOption,noOption);
    
    
    
    // let resetButton = document.createElement("button");
    // resetButton.type = "Reset";
    // resetButton.textContent = "Reset";
    
    // let submitButton = document.createElement("button");
    // submitButton.type = "submit";
    // submitButton.textContent = "Submit";
    // form.append(h3A, nameInput, h3B, sportTypeInput, h3C, imageInput, h3D, priceInput, h3E, inStockSelect, submitButton, resetButton);
    
    // let item1 = document.createElement("article");
    // let firstItemName = document.createElement("h2");
    // firstItemName.textContent = "Everlast Boxing Gloves";
    // let firstItemInfo = document.createElement("h4");
    // firstItemInfo.textContent = "Boxing/Cardio";
    // let firstItemPrice = document.createElement("p");
    // firstItemPrice.textContent = "$42.99";
    // let removeButton1 = document.createElement("button");
    // removeButton1.type = "Remove";
    // removeButton1.textContent = "Remove"
    // let image1 = document.createElement("img");
    // let inStock1 = document.createElement("h4");
    // inStock1.textContent = "In-Stock"
    // // let strong = document.createElement("strong");
    // // strong.textContent = "Exercise Type: ";
    // // newItem.append(document.createElement("br"), strong, sportType);
    
    // image1.src = "https://m.media-amazon.com/images/I/71eilZDrgWL._AC_SX679_.jpg";
    
    // let item2 = document.createElement("article");
    // let secondItemName = document.createElement("h2");
    // secondItemName.textContent = "Spalding Adult BasketBall";
    // let secondItemInfo = document.createElement("h4");
    // secondItemInfo.textContent = "Basketball/Cardio";
    // let secondItemPrice = document.createElement("p");
    // secondItemPrice.textContent = "29.99";
    // let removeButton2 = document.createElement("button");
    // removeButton2.type = "Remove";
    // removeButton2.textContent = "Remove";
    // let image2 = document.createElement("img");
    // image2.src = "https://m.media-amazon.com/images/I/91j3VymnXSL._AC_SX679_.jpg";
    // let inStock2 = document.createElement("h4");
    // inStock2.textContent = "In-Stock";
    
    // let item3 = document.createElement("article");
    // let thirdItemName = document.createElement("h2");
    // thirdItemName.textContent = "Louisville Slugger Series 3X Ash Bat";
    // let thirdItemInfo = document.createElement("h4");
    // thirdItemInfo.textContent = "Baseball/Team Sports";
    // let thirdItemPrice = document.createElement("p");
    // thirdItemPrice.textContent = "35.99";
    // let removeButton3 = document.createElement("button");
    // removeButton3.type = "Remove";
    // removeButton3.textContent= "Remove";
    // let image3 = document.createElement("img");
    // image3.src = "https://dks.scene7.com/is/image/GolfGalaxy/16LSLAS3XSHNTRLXXWBT?qlt=70&wid=1100&fmt=webp";
    // let inStock3 = document.createElement("h4");
    // inStock3.textContent = "In-Stock"
    
    
    
    // item1.append(firstItemName, firstItemInfo, firstItemPrice, image1, inStock1, removeButton1);
    // item2.append(secondItemName, secondItemInfo, secondItemPrice, image2, inStock2, removeButton2);
    // item3.append(thirdItemName, thirdItemInfo, thirdItemPrice, image3, inStock3, removeButton3);
    // let h2 = document.createElement("h2");
    // h2
    
    // body.append(form);
    // itemsDiv.append(item1, item2, item3);
    // body.append(itemsDivTitle)
    // body.append(itemsDiv);
    
    
    // form.addEventListener("submit", (event) => {
    //     event.preventDefault();
        
    //     let name = event.target.name.value;
    //     let sportType = event.target.sportType.value;
    //     let IMG = event.target.src.value;
    //     let price = `$${event.target.price.value}`;
    //     let inStock = event.target.inStock.value;
    
        
        
    //     generateItem(name, sportType, IMG, price, inStock);
        
    //     form.reset();
    // }
    // );
    
    // function itemTemplate(name, sportType, IMG, price, inStock) {
        
    //     const newItem = document.createElement("article");
    //     newItem.classList.add("newItems")
    //     if (name) {
    //         let h2 = document.createElement("h2");
    //         h2.textContent += name;
    //         newItem.append(h2);
    //     }
    //      if (sportType) {
    //         const h4 = document.createElement("h4");
    //         h4.textContent = sportType;
    //         newItem.append(document.createElement("br"), h4);
    //     }
    //     if (price) {
    //         const p = document.createElement("p");
    //         p.textContent = price;
    //         newItem.append(document.createElement("br"), p);
    //     }
    //     if (IMG) {
    //         let img = document.createElement("img");
    //         img.src = IMG;
    //         newItem.append(img);
    //     }
    //     if (inStock) {
    //         const strong = document.createElement("strong");
    //         strong.textContent = inStock;
    //         newItem.append(document.createElement("br"), strong);
    //     }
        
    //     const remove = document.createElement("button");
    //     remove.innerText = "Remove";
    //     newItem.append(remove);
        
    //     remove.addEventListener("click", (event) => {
    //         newItem.remove();
    //     });
        
    //     return newItem;
    // }
    
    // function generateItem(name, sportType, IMG, price, inStock) {
    //     const newItem = itemTemplate(name, sportType, IMG, price, inStock);
    //     itemsDiv.append(newItem);
    // }
    
    
    // removeButton1.addEventListener("click", (event) => {{
    //     item1.remove();
    // }
    // return itemsDiv
    // })
    
    // removeButton2.addEventListener("click", (event) => {{
    //     item2.remove();
    // }
    // return itemsDiv
    // })
    
    // removeButton3.addEventListener("click", (event) => {{
    //     item3.remove();
    // }
    // return itemsDiv
    // })
















    
    
    
    
    
    
    
    
    
    
    
    
    
