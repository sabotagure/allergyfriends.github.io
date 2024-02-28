const menuItems = {
    burgers: ['Burger 1', 'Burger 2', 'Burger 3', 'Burger 4', 'Burger 5', 'Burger 6', 'Burger 7', 'Burger 8', 'Burger 9', 'Burger 10', 'Burger 11', 'Burger 12', 'Burger 13', 'Burger 14', 'Burger 15'],
    sweets: ['Sweet 1', 'Sweet 2'],
    sides: ['Side 1', 'Side 2', 'Side 3', 'Side 4', 'Side 5', 'Side 6', 'Side 7', 'Side 8'],
    salads: ['Salad 1', 'Salad 2', 'Salad 3'],
};

function showCategory(category) {
    const categoryContent = document.getElementById('category-content');
    categoryContent.innerHTML = '';

    const categoryItems = menuItems[category];
    categoryItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.textContent = item;
        categoryContent.appendChild(itemElement);
    });
}
