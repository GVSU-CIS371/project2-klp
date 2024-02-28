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
    // Initialize an empty string to accumulate HTML
    let productsHTML = "";

    //go through products
    for (let prod of prods) {
        //use generateProductHTML to generate the product
        const productHTML = generateProductHTML(prod);
        //add the html received from generateProductHTML to the accumulated string
        productsHTML += productHTML;
    }

    // Set the innerHTML of the main container with the accumulated HTML
    mainContainer.innerHTML = productsHTML;
}

function getByCategory(category: string): void {
    const selectedProducts = products.filter(product => product.category === category);
    renderProducts(selectedProducts);
}

function getByRating(minRating: number): void {
    //Filter products based on the minimum rating
    const selectedProducts = products.filter(product => product.rating > minRating);
    //Render the selected products
    renderProducts(selectedProducts);
}

export { renderProducts, getByCategory, getByRating };