const menuItems = {
    burgers: ['Friends             MAITO  KANANMUNA  GLUTEENI  SELLERI  SINAPPI', 'Cheese Onion             MAITO  KANANMUNA  GLUTEENI  SELLERI  SINAPPI', 'Classic             MAITO  KANANMUNA  GLUTEENI  SELLERI  SINAPPI', 'Aioli             MAITO  KANANMUNA  GLUTEENI  SINAPPI', 'Bacon             MAITO  KANANMUNA  GLUTEENI  SINAPPI', 'Umami             MAITO  KANANMUNA  GLUTEENI  SINAPPI  SOIJA', 'Chipotle             MAITO  KANANMUNA  GLUTEENI  SINAPPI', 'Kids             MAITO  KANANMUNA  GLUTEENI  SELLERI', 'Chicken Aioli             KANANMUNA  GLUTEENI  SINAPPI', 'Halloumi             MAITO  KANANMUNA  GLUTEENI  SINAPPI', 'Vegan             GLUTEENI  SINAPPI'],
    sweets: ['Shakes             MAITO  LAKTOOSI  KANANMUNA', 'Jäätelö             MAITO  LAKTOOSI  KANANMUNA'],
    sides: ['Chicken Fingers             KANANMUNA', 'Side Salad             Sinappi', 'Halloumi Fries             MAITO', 'Topped Fries             MAITO  SINAPPI  KANANMUNA', 'Truffle Fries             MAITO  SINAPPI  KANANMUNA  SOIJA'],
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
