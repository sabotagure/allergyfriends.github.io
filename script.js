const menuItems = {
    burgers: ['Friends             MAITO  KANANMUNA  GLUTEENI  SELLERI  SINAPPI', 'Cheese Onion             MAITO  KANANMUNA  GLUTEENI  SELLERI  SINAPPI', 'Classic             MAITO  KANANMUNA  GLUTEENI  SELLERI  SINAPPI', 'Aioli             MAITO  KANANMUNA  GLUTEENI  SINAPPI', 'Bacon             MAITO  KANANMUNA  GLUTEENI  SINAPPI', 'Umami             MAITO  KANANMUNA  GLUTEENI  SINAPPI  SOIJA', 'Chipotle             MAITO  KANANMUNA  GLUTEENI  SINAPPI', 'Kids             MAITO  KANANMUNA  GLUTEENI  SELLERI', 'Chicken Aioli             KANANMUNA  GLUTEENI  SINAPPI', 'Halloumi             MAITO  KANANMUNA  GLUTEENI  SINAPPI', 'Vegan             GLUTEENI  SINAPPI'],
    sweets: ['Sweet 1', 'Sweet 2'],
    sides: ['Side 1', 'Side 2', 'Side 3', 'Side 4', 'Side 5', 'Side 6', 'Side 7', 'Side 8'],
    salads: ['Crispy Chicken Ranch             MAITO  KANANMUNA  SINAPPI', 'Grilled Chicken             MAITO  KANANMUNA  SINAPPI', 'Halloumi             MAITO  KANANMUNA  SINAPPI'],
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
