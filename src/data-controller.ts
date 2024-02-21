import { Product, products } from "./data";

function generateProductHTML(product: Product): string {
    return `<div class="store-item">
              <img src="${product.image}" alt="${product.name}" />
              <p>${product.name}</p>
              <p>${product.description}</p>
              <span>${product.rating}/5</span><span>$${product.price}</span><span>stock ${product.stock}</span>
            </div>`;
}

function renderProducts(prods: Product[]): void {
    
    //get the main container
    const mainContainer = document.getElementById("main-container");

    //make sure mainContainer was found
    if (!mainContainer) {
        console.error("Main container not found");
        return;
    }

    //clear previous products
    mainContainer.innerHTML = ""; 

    //go through products
    for (let prod of prods) {
        //use generateProductHTML to generate the product
        const productHTML = generateProductHTML(prod);
        //add the html recieved from generateProductHTML to main container
        mainContainer.innerHTML += productHTML;
    }
}

function getByCategory(category: string): void {
    // your code
}

function getByRating(minRating: number): void {
    // your code
}

export { renderProducts, getByCategory, getByRating };