function showProducts(item) {
    // Clear previous product content
    document.getElementById('products').innerHTML = '';

    // Example products for each item
    const products = {
        item1: ['Product A', 'Product B', 'Product C'],
        item2: ['Product X', 'Product Y', 'Product Z'],
        item3: ['Product One', 'Product Two', 'Product Three'],
        item4: ['Product Alpha', 'Product Beta', 'Product Gamma'],
        item5: ['Product Apple', 'Product Banana', 'Product Orange']
    };

    // Display products for the selected item
    const productContainer = document.getElementById('products');
    products[item].forEach(product => {
        const productElement = document.createElement('div');
        productElement.textContent = product;
        productContainer.appendChild(productElement);
    });
}
